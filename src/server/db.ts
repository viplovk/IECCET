import initSqlJs, { Database } from 'sql.js';
import fs from 'fs';
import path from 'path';

let sqlDb: Database | null = null;
const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE = path.join(DATA_DIR, 'iec_students.sqlite');

export interface StudentRecord {
  id: number;
  roll_number: string;
  dob: string; // DDMMYYYY format
  name: string;
  branch: string;
  year: number;
  semester: number;
  section: string;
  email: string;
  phone: string;
  attendance_percentage: number;
  target_attendance: number;
  sgpa_current: number;
  created_at: string;
  last_login?: string;
}

/**
 * Initialize or load the SQLite database with full schema and seed records
 */
export async function getSqlDatabase(): Promise<Database> {
  if (sqlDb) {
    return sqlDb;
  }

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const SQL = await initSqlJs();

  if (fs.existsSync(DB_FILE)) {
    try {
      const fileBuffer = fs.readFileSync(DB_FILE);
      sqlDb = new SQL.Database(fileBuffer);
    } catch (e) {
      console.warn('Failed to load existing SQL file, creating fresh database:', e);
      sqlDb = new SQL.Database();
    }
  } else {
    sqlDb = new SQL.Database();
  }

  // Create tables if they do not exist
  sqlDb.run(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      roll_number TEXT UNIQUE NOT NULL,
      dob TEXT NOT NULL,
      name TEXT NOT NULL,
      branch TEXT NOT NULL,
      year INTEGER NOT NULL,
      semester INTEGER NOT NULL,
      section TEXT DEFAULT 'A',
      email TEXT DEFAULT '',
      phone TEXT DEFAULT '',
      attendance_percentage REAL DEFAULT 80.0,
      target_attendance REAL DEFAULT 75.0,
      sgpa_current REAL DEFAULT 8.20,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      last_login DATETIME
    );

    CREATE TABLE IF NOT EXISTS login_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      roll_number TEXT NOT NULL,
      status TEXT NOT NULL,
      attempted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      user_agent TEXT
    );

    CREATE TABLE IF NOT EXISTS student_notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      roll_number TEXT NOT NULL,
      subject_code TEXT NOT NULL,
      note_text TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Seed default college students if table is empty
  const countResult = sqlDb.exec('SELECT COUNT(*) as count FROM students');
  const count = countResult.length > 0 && countResult[0].values.length > 0 ? (countResult[0].values[0][0] as number) : 0;

  if (count === 0) {
    const seedStudents = [
      {
        roll: '2200900100042',
        dob: '14042004', // 14 April 2004
        name: 'Viplov Sharma',
        branch: 'CSE',
        year: 2,
        semester: 3,
        section: 'A',
        email: 'viplov.sharma@iec.edu.in',
        phone: '9876543210',
        attendance: 84.5,
        target: 75.0,
        sgpa: 8.65,
      },
      {
        roll: '2200900100018',
        dob: '25112004', // 25 Nov 2004
        name: 'Ananya Verma',
        branch: 'CSE',
        year: 2,
        semester: 3,
        section: 'B',
        email: 'ananya.verma@iec.edu.in',
        phone: '9811223344',
        attendance: 88.0,
        target: 75.0,
        sgpa: 9.12,
      },
      {
        roll: '2100900100055',
        dob: '08062003', // 08 June 2003
        name: 'Rahul Kumar',
        branch: 'IT',
        year: 3,
        semester: 5,
        section: 'A',
        email: 'rahul.kumar@iec.edu.in',
        phone: '9712345678',
        attendance: 78.5,
        target: 75.0,
        sgpa: 8.15,
      },
      {
        roll: '2300900100088',
        dob: '19092005', // 19 Sep 2005
        name: 'Priya Singh',
        branch: 'CSE_AIML',
        year: 1,
        semester: 1,
        section: 'A',
        email: 'priya.singh@iec.edu.in',
        phone: '9654321098',
        attendance: 91.2,
        target: 75.0,
        sgpa: 8.90,
      },
      {
        roll: '2000900100030',
        dob: '02012002', // 02 Jan 2002
        name: 'Aryan Gupta',
        branch: 'ECE',
        year: 4,
        semester: 7,
        section: 'A',
        email: 'aryan.gupta@iec.edu.in',
        phone: '9543210987',
        attendance: 79.8,
        target: 75.0,
        sgpa: 8.40,
      },
    ];

    for (const s of seedStudents) {
      sqlDb.run(
        `INSERT INTO students (roll_number, dob, name, branch, year, semester, section, email, phone, attendance_percentage, target_attendance, sgpa_current)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [s.roll, s.dob, s.name, s.branch, s.year, s.semester, s.section, s.email, s.phone, s.attendance, s.target, s.sgpa]
      );
    }

    persistDatabase();
  }

  return sqlDb;
}

/**
 * Save in-memory SQLite database to disk file
 */
export function persistDatabase() {
  if (!sqlDb) return;
  try {
    const data = sqlDb.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(DB_FILE, buffer);
  } catch (err) {
    console.error('Failed to write SQLite database to file:', err);
  }
}

/**
 * Authenticate student using Roll Number and Date of Birth (DDMMYYYY) via SQL
 */
export async function authenticateStudent(
  rollNumber: string,
  dob: string,
  userAgent: string = ''
): Promise<{ success: boolean; student?: StudentRecord; error?: string }> {
  const db = await getSqlDatabase();
  const cleanRoll = rollNumber.trim().toUpperCase();
  const cleanDob = dob.trim();

  // Run SQL Query
  const stmt = db.prepare('SELECT * FROM students WHERE UPPER(roll_number) = ? AND dob = ?');
  stmt.bind([cleanRoll, cleanDob]);

  if (stmt.step()) {
    const row = stmt.getAsObject() as any;
    stmt.free();

    // Update last_login
    db.run('UPDATE students SET last_login = CURRENT_TIMESTAMP WHERE id = ?', [row.id]);
    // Log success
    db.run('INSERT INTO login_logs (roll_number, status, user_agent) VALUES (?, ?, ?)', [
      cleanRoll,
      'SUCCESS',
      userAgent,
    ]);
    persistDatabase();

    return {
      success: true,
      student: {
        id: row.id,
        roll_number: row.roll_number,
        dob: row.dob,
        name: row.name,
        branch: row.branch,
        year: row.year,
        semester: row.semester,
        section: row.section,
        email: row.email,
        phone: row.phone,
        attendance_percentage: row.attendance_percentage,
        target_attendance: row.target_attendance,
        sgpa_current: row.sgpa_current,
        created_at: row.created_at,
        last_login: new Date().toISOString(),
      },
    };
  }

  stmt.free();

  // Log failed attempt
  db.run('INSERT INTO login_logs (roll_number, status, user_agent) VALUES (?, ?, ?)', [
    cleanRoll,
    'FAILED',
    userAgent,
  ]);
  persistDatabase();

  return {
    success: false,
    error: 'Invalid Roll Number or Date of Birth. Please check your credentials (DOB format: DDMMYYYY).',
  };
}

/**
 * Register a new student into the SQL database
 */
export async function registerStudent(studentData: {
  roll_number: string;
  dob: string;
  name: string;
  branch: string;
  year: number;
  semester: number;
  section?: string;
  email?: string;
  phone?: string;
}): Promise<{ success: boolean; student?: StudentRecord; error?: string }> {
  const db = await getSqlDatabase();
  const cleanRoll = studentData.roll_number.trim().toUpperCase();
  const cleanDob = studentData.dob.trim();

  // Check if roll number already exists
  const checkStmt = db.prepare('SELECT id FROM students WHERE UPPER(roll_number) = ?');
  checkStmt.bind([cleanRoll]);
  const exists = checkStmt.step();
  checkStmt.free();

  if (exists) {
    return {
      success: false,
      error: `Student with Roll Number ${cleanRoll} is already registered in the SQL database. Please sign in.`,
    };
  }

  // Validate DOB format (8 digits: DDMMYYYY)
  if (!/^\d{8}$/.test(cleanDob)) {
    return {
      success: false,
      error: 'Date of Birth must be exactly 8 digits in DDMMYYYY format (e.g. 15082003 for 15 Aug 2003).',
    };
  }

  db.run(
    `INSERT INTO students (roll_number, dob, name, branch, year, semester, section, email, phone, attendance_percentage, target_attendance, sgpa_current)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      cleanRoll,
      cleanDob,
      studentData.name.trim(),
      studentData.branch.trim(),
      studentData.year || 2,
      studentData.semester || 3,
      studentData.section || 'A',
      studentData.email?.trim() || '',
      studentData.phone?.trim() || '',
      80.0,
      75.0,
      8.0,
    ]
  );

  persistDatabase();

  return authenticateStudent(cleanRoll, cleanDob, 'Registration');
}

/**
 * Get student by roll number
 */
export async function getStudentByRoll(rollNumber: string): Promise<StudentRecord | null> {
  const db = await getSqlDatabase();
  const stmt = db.prepare('SELECT * FROM students WHERE UPPER(roll_number) = ?');
  stmt.bind([rollNumber.trim().toUpperCase()]);
  if (stmt.step()) {
    const row = stmt.getAsObject() as any;
    stmt.free();
    return row as StudentRecord;
  }
  stmt.free();
  return null;
}

/**
 * List all enrolled students from SQL database (for demo quick-selection and verification)
 */
export async function getAllStudents(): Promise<Array<Omit<StudentRecord, 'dob'>>> {
  const db = await getSqlDatabase();
  const results = db.exec(
    'SELECT id, roll_number, name, branch, year, semester, section, email, phone, attendance_percentage, target_attendance, sgpa_current, created_at, last_login FROM students ORDER BY year, roll_number'
  );
  if (results.length === 0 || results[0].values.length === 0) {
    return [];
  }
  const columns = results[0].columns;
  return results[0].values.map((row) => {
    const obj: any = {};
    columns.forEach((col, idx) => {
      obj[col] = row[idx];
    });
    return obj;
  });
}

/**
 * Update an existing student's profile data in the SQL database
 */
export async function updateStudentProfile(
  rollNumber: string,
  updates: {
    name?: string;
    branch?: string;
    year?: number;
    semester?: number;
    section?: string;
    email?: string;
    phone?: string;
    attendance_percentage?: number;
    target_attendance?: number;
    sgpa_current?: number;
  }
): Promise<{ success: boolean; student?: StudentRecord; error?: string }> {
  const db = await getSqlDatabase();
  const cleanRoll = rollNumber.trim().toUpperCase();
  const existing = await getStudentByRoll(cleanRoll);
  if (!existing) {
    return { success: false, error: `Student with Roll Number ${cleanRoll} not found in SQL database.` };
  }

  const newName = updates.name !== undefined ? updates.name.trim() : existing.name;
  const newBranch = updates.branch !== undefined ? updates.branch.trim() : existing.branch;
  const newYear = updates.year !== undefined ? Number(updates.year) : existing.year;
  const newSemester = updates.semester !== undefined ? Number(updates.semester) : existing.semester;
  const newSection = updates.section !== undefined ? updates.section.trim() : existing.section;
  const newEmail = updates.email !== undefined ? updates.email.trim() : existing.email;
  const newPhone = updates.phone !== undefined ? updates.phone.trim() : existing.phone;
  const newAtt = updates.attendance_percentage !== undefined ? Number(updates.attendance_percentage) : existing.attendance_percentage;
  const newTarget = updates.target_attendance !== undefined ? Number(updates.target_attendance) : existing.target_attendance;
  const newSgpa = updates.sgpa_current !== undefined ? Number(updates.sgpa_current) : existing.sgpa_current;

  db.run(
    `UPDATE students 
     SET name = ?, branch = ?, year = ?, semester = ?, section = ?, email = ?, phone = ?, attendance_percentage = ?, target_attendance = ?, sgpa_current = ?
     WHERE UPPER(roll_number) = ?`,
    [newName, newBranch, newYear, newSemester, newSection, newEmail, newPhone, newAtt, newTarget, newSgpa, cleanRoll]
  );
  persistDatabase();

  const updated = await getStudentByRoll(cleanRoll);
  return { success: true, student: updated || undefined };
}
