import { BranchInfo, Subject } from '../types';

export const BRANCHES_DATA: BranchInfo[] = [
  {
    code: 'CSE',
    name: 'Computer Science & Engineering',
    shortName: 'CSE',
    iconName: 'Code',
    description: 'Core computing, algorithms, systems, software engineering and web technologies.',
  },
  {
    code: 'CSE_AIML',
    name: 'CSE (Artificial Intelligence & Machine Learning)',
    shortName: 'CSE-AIML',
    iconName: 'Bot',
    description: 'Modern AI algorithms, neural networks, deep learning, NLP and computer vision.',
  },
  {
    code: 'CSE_DS',
    name: 'CSE (Data Science)',
    shortName: 'CSE-DS',
    iconName: 'Database',
    description: 'Big data analytics, statistics, predictive modeling, and data pipelines.',
  },
  {
    code: 'IT',
    name: 'Information Technology',
    shortName: 'IT',
    iconName: 'Network',
    description: 'Enterprise networks, cloud systems, cyber security, and database architectures.',
  },
  {
    code: 'ECE',
    name: 'Electronics & Communication Engineering',
    shortName: 'ECE',
    iconName: 'Cpu',
    description: 'Semiconductor devices, embedded systems, signal processing and communication systems.',
  },
  {
    code: 'EE',
    name: 'Electrical Engineering',
    shortName: 'EE',
    iconName: 'Zap',
    description: 'Power systems, electrical machines, control theory and power electronics.',
  },
  {
    code: 'ME',
    name: 'Mechanical Engineering',
    shortName: 'ME',
    iconName: 'Cog',
    description: 'Thermodynamics, fluid mechanics, CAD/CAM, robotics and manufacturing.',
  },
  {
    code: 'CE',
    name: 'Civil Engineering',
    shortName: 'CE',
    iconName: 'Building',
    description: 'Structural analysis, geotechnical engineering, surveying and construction management.',
  },
];

export const AKTU_SUBJECTS: Subject[] = [
  // ===================== 2ND YEAR (3RD & 4TH SEM - VIPLOV'S CURRENT YEAR) =====================
  {
    id: 'kcs301-ds',
    code: 'BCS301 / KCS301',
    name: 'Data Structures',
    shortName: 'DS',
    semester: 3,
    year: 2,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Core',
    description: 'Comprehensive study of linear and non-linear data structures, memory representation, asymptotic analysis, and algorithmic implementations.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Introduction to Data Structures, Arrays & Sparse Matrices',
        lectureHours: 8,
        topics: [
          'Concept of Data Structures, Abstract Data Types (ADT)',
          'Asymptotic Notations (Big-O, Omega, Theta) & Complexity Analysis',
          '1D and 2D Arrays, Memory Mapping & Row/Column Major Order',
          'Sparse Matrices: Triplet Representation, Addition & Transpose algorithms',
          'Static vs Dynamic Memory Allocation, Pointers in C'
        ],
        importantPyqTopics: [
          'Row-major and Column-major address calculation numericals',
          'Sparse matrix representation and Fast Transpose algorithm',
          'Time-space trade-off and asymptotic notation definitions'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Stacks & Queues',
        lectureHours: 8,
        topics: [
          'Stack ADT: Array and Linked List implementation, Push/Pop operations',
          'Applications of Stacks: Infix to Postfix/Prefix conversion, Postfix evaluation',
          'Recursion and Call Stack simulation, Tower of Hanoi',
          'Queue ADT: FIFO principle, Array and Linked representation',
          'Circular Queue, Double-Ended Queue (Deque), Priority Queue'
        ],
        importantPyqTopics: [
          'Infix to Postfix conversion using Stack (10 Marks standard AKTU question)',
          'Circular Queue insertion and deletion boundary conditions',
          'Tower of Hanoi recursion state simulation'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Linked Lists',
        lectureHours: 8,
        topics: [
          'Singly Linked List: Creation, Insertion, Deletion, Searching & Traversal',
          'Doubly Linked List & Circular Linked List operations',
          'Polynomial Addition & Multiplication using Linked Lists',
          'Header Linked Lists and Generalized Linked Lists',
          'Comparison between Arrays and Linked Lists'
        ],
        importantPyqTopics: [
          'Polynomial Addition algorithm using Singly Linked List',
          'Insertion and Deletion at arbitrary positions in Doubly Linked List',
          'Reversing a Singly Linked List algorithm'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Non-Linear Data Structures: Trees',
        lectureHours: 10,
        topics: [
          'Binary Trees: Properties, Types (Full, Complete, Extended, Strict)',
          'Tree Traversals: Inorder, Preorder, Postorder & Level Order (Iterative & Recursive)',
          'Binary Search Trees (BST): Insertion, Deletion of nodes with 0, 1, or 2 children',
          'AVL Trees: Balance factor, Rotations (LL, RR, LR, RL), Insertion & Deletion',
          'B-Trees and B+ Trees: Definitions, Node structure, Insertion & Deletion',
          'Threaded Binary Trees, Huffman Coding Algorithm'
        ],
        importantPyqTopics: [
          'Construction of AVL Tree with step-by-step rotations',
          'B-Tree insertion of order m with split operations',
          'Constructing unique binary tree from Preorder and Inorder traversals',
          'BST node deletion algorithm cases'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Graphs, Searching & Sorting',
        lectureHours: 8,
        topics: [
          'Graph Representations: Adjacency Matrix, Adjacency List, Incidence Matrix',
          'Graph Traversals: Breadth First Search (BFS) and Depth First Search (DFS)',
          'Minimum Spanning Tree: Prim\'s and Kruskal\'s Algorithms',
          'Shortest Path: Dijkstra\'s and Floyd-Warshall Algorithms',
          'Sorting Algorithms: Bubble, Insertion, Selection, Quick Sort, Merge Sort, Heap Sort',
          'Hashing: Hash Functions, Collision Resolution (Chaining, Linear/Quadratic Probing)'
        ],
        importantPyqTopics: [
          'Dijkstra\'s Shortest Path algorithm on weighted directed graph',
          'Kruskal vs Prim Minimum Spanning Tree comparison & numerical',
          'Quick Sort partitioning algorithm & worst-case recurrence relation',
          'Hashing collision resolution techniques (Open Addressing vs Chaining)'
        ],
        weightageLevel: 'Very High'
      }
    ],
    textbooks: [
      'Aaron M. Tenenbaum, "Data Structures Using C and C++", PHI',
      'Ellis Horowitz, Sartaj Sahni, "Fundamentals of Data Structures in C", Silicon Press',
      'Seymour Lipschutz, "Data Structures with C", Schaum\'s Outlines, McGraw Hill'
    ],
    referenceBooks: [
      'Thomas H. Cormen, "Introduction to Algorithms", MIT Press',
      'Reema Thareja, "Data Structures Using C", Oxford University Press'
    ],
    quantumReference: 'AKTU Quantum Series - Data Structures (BCS301/KCS301) Units 1-5',
    recommendedPlaylists: [
      {
        channelName: 'Gate Smashers',
        topicCoverage: 'Complete Data Structures playlist covering Trees, Graphs, Sorting & Hashing in Hindi'
      },
      {
        channelName: 'Abdul Bari',
        topicCoverage: 'Algorithms & AVL Trees, B-Trees visualization with in-depth animations'
      },
      {
        channelName: 'Neso Academy',
        topicCoverage: 'C Language Implementation of Stacks, Queues, Linked Lists'
      }
    ]
  },
  {
    id: 'kcs302-coa',
    code: 'BCS302 / KCS302',
    name: 'Computer Organization and Architecture',
    shortName: 'COA',
    semester: 3,
    year: 2,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Core',
    description: 'Structural architecture of modern digital computers, microprogrammed control units, memory hierarchy, pipelining, and parallel processing.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Functional Units, Bus Architecture & Computer Arithmetic',
        lectureHours: 8,
        topics: [
          'Von Neumann Architecture vs Harvard Architecture, System Bus structure',
          'Data Representation: Fixed Point, Floating Point (IEEE 754 Standard 32-bit & 64-bit)',
          'Addition and Subtraction with Signed-Magnitude and 2\'s Complement',
          'Multiplication: Booth\'s Multiplication Algorithm for Signed Numbers',
          'Division Algorithms: Restoring and Non-Restoring Division'
        ],
        importantPyqTopics: [
          'Booth\'s Multiplication Algorithm with step-by-step register tables',
          'Restoring vs Non-Restoring Division method numerical',
          'IEEE 754 Floating-Point representation single-precision conversion'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Central Processing Unit & Instruction Set Architecture',
        lectureHours: 8,
        topics: [
          'Instruction Formats: 3-Address, 2-Address, 1-Address (Accumulator), 0-Address (Stack)',
          'Addressing Modes: Immediate, Direct, Indirect, Register, Register Indirect, Relative, Indexed',
          'Instruction Cycle: Fetch, Decode, Execute, Interrupt Cycle',
          'Register Transfer Language (RTL), Bus and Memory Transfers',
          'Arithmetic Logic Shift Unit (ALSU) design'
        ],
        importantPyqTopics: [
          'Addressing Modes with examples and effective address formulas',
          'Instruction cycle state diagram and RTL micro-operations',
          '0-Address vs 1-Address vs 2-Address instruction code evaluation'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Control Unit Design & Microprogramming',
        lectureHours: 8,
        topics: [
          'Hardwired Control Unit Design vs Microprogrammed Control Unit',
          'Control Memory, Microinstruction, Microprogram Sequencer',
          'Horizontal vs Vertical Microinstruction formats',
          'Address Sequencing and Conditional Branching in Control Unit'
        ],
        importantPyqTopics: [
          'Hardwired vs Microprogrammed Control Unit detailed comparison',
          'Microprogram Sequencer working with block diagram',
          'Horizontal vs Vertical Microcode trade-offs'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Memory Hierarchy & Organization',
        lectureHours: 8,
        topics: [
          'Memory Hierarchy: Speed, Size and Cost trade-offs',
          'Main Memory (RAM, ROM, DRAM, SRAM chips)',
          'Cache Memory: Locality of Reference (Spatial and Temporal)',
          'Cache Mapping Techniques: Direct Mapping, Associative Mapping, Set-Associative Mapping',
          'Cache Replacement Policies (LRU, FIFO, LFU) & Write Policies (Write-Through, Write-Back)',
          'Virtual Memory: Paging, Segmentation, TLB (Translation Lookaside Buffer)'
        ],
        importantPyqTopics: [
          'Direct, Associative, and Set-Associative Cache mapping numericals',
          'Cache hit/miss time and average memory access time (AMAT) calculation',
          'Virtual to Physical address translation using Paging & Page Tables'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Pipelining & Input/Output Organization',
        lectureHours: 8,
        topics: [
          'Pipelining: Arithmetic Pipeline, Instruction Pipeline (4-stage and 5-stage)',
          'Pipeline Hazards: Structural Hazards, Data Hazards (RAW, WAR, WAW), Control Hazards (Branches)',
          'Pipeline Speedup, Efficiency and Throughput formulas',
          'I/O Organization: Programmed I/O, Interrupt-Driven I/O, Direct Memory Access (DMA)',
          'DMA Controller architecture, Bus Arbitration (Daisy Chaining, Polling, Independent Request)'
        ],
        importantPyqTopics: [
          'DMA Controller internal block diagram and cycle stealing vs burst transfer',
          'Pipeline Speedup, Efficiency and Hazard resolution techniques',
          'Daisy Chaining bus arbitration priority mechanism'
        ],
        weightageLevel: 'Very High'
      }
    ],
    textbooks: [
      'M. Morris Mano, "Computer System Architecture", Pearson / PHI',
      'William Stallings, "Computer Organization and Architecture", Pearson',
      'Carl Hamacher, Zvonko Vranesic, "Computer Organization", McGraw Hill'
    ],
    referenceBooks: [
      'David A. Patterson and John L. Hennessy, "Computer Organization and Design", Morgan Kaufmann'
    ],
    quantumReference: 'AKTU Quantum Series - Computer Organization & Architecture (BCS302)',
    recommendedPlaylists: [
      {
        channelName: 'Gate Smashers',
        topicCoverage: 'COA playlist: Booth Algorithm, Cache Mapping & Pipelining'
      },
      {
        channelName: 'Knowledge Gate',
        topicCoverage: 'Control Unit, Memory Hierarchy and Addressing Modes'
      }
    ]
  },
  {
    id: 'kcs303-dstl',
    code: 'BCS303 / KCS303',
    name: 'Discrete Structures & Theory of Logic',
    shortName: 'DSTL',
    semester: 3,
    year: 2,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Science & Math',
    description: 'Foundational mathematical logic, sets, relations, functions, algebraic structures, posets, lattices, boolean algebra, and combinatorics.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Sets, Relations, Functions & Proof Techniques',
        lectureHours: 8,
        topics: [
          'Sets, Operations on Sets, Power Set, Cartesian Product, Inclusion-Exclusion Principle',
          'Relations: Properties (Reflexive, Symmetric, Transitive, Anti-symmetric)',
          'Equivalence Relations, Equivalence Classes, Partitions',
          'Closure of Relations: Reflexive, Symmetric, and Transitive Closure (Warshall\'s Algorithm)',
          'Functions: Injective (One-to-one), Surjective (Onto), Bijective, Inverse Function, Composition',
          'Mathematical Induction (Weak and Strong induction)'
        ],
        importantPyqTopics: [
          'Equivalence Relation proof and Equivalence Classes calculation',
          'Warshall\'s Algorithm for Transitive Closure 0-1 matrix',
          'Mathematical Induction proof for inequalities and summations'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Algebraic Structures & Group Theory',
        lectureHours: 8,
        topics: [
          'Algebraic Systems, Semi-groups, Monoids, Groups, Abelian Groups',
          'Subgroups, Cosets, Lagrange\'s Theorem for Finite Groups',
          'Normal Subgroups, Cyclic Groups, Generator of Cyclic Group',
          'Group Homomorphism, Isomorphism, Kernel of Homomorphism',
          'Rings, Integral Domains, Fields (Definitions & Properties)'
        ],
        importantPyqTopics: [
          'Lagrange\'s Theorem statement and rigorous proof (Repeats every year in AKTU)',
          'Proving whether an algebraic system (G, *) is an Abelian Group',
          'Cyclic Group properties and finding all generators'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Posets, Lattices & Boolean Algebra',
        lectureHours: 8,
        topics: [
          'Partial Ordered Sets (Poset), Hasse Diagrams, Maximal/Minimal elements, GLB and LUB',
          'Lattices: Definition, Properties, Sub-lattices, Direct Product',
          'Special Lattices: Bounded Lattice, Distributive Lattice, Complemented Lattice',
          'Modular Lattice, Complete Lattice',
          'Boolean Algebra: Axioms, Duality Principle, Karnaugh Maps (K-Maps) minimal expressions'
        ],
        importantPyqTopics: [
          'Drawing Hasse diagram of divisors of n (e.g. D30, D36, D72) and checking for Lattice',
          'Proving whether a lattice is Distributive, Complemented, or Boolean',
          'Finding GLB, LUB, Maximal, Minimal, Greatest, Least elements from Hasse diagram'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Propositional & Predicate Logic',
        lectureHours: 8,
        topics: [
          'Propositions, Truth Tables, Logical Connectives (Conjunction, Disjunction, Implication, Biconditional)',
          'Tautology, Contradiction, Contingency, Logical Equivalences',
          'Normal Forms: Disjunctive Normal Form (DNF) and Conjunctive Normal Form (CNF)',
          'Rules of Inference (Modus Ponens, Modus Tollens, Hypothetical Syllogism)',
          'Predicate Logic: First-Order Logic, Quantifiers (Universal and Existential)',
          'Valid Arguments and Fallacies'
        ],
        importantPyqTopics: [
          'Converting compound statements into DNF and CNF',
          'Checking argument validity using Rules of Inference',
          'Translating English statements into First-Order Predicate Logic with quantifiers'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Combinatorics & Recurrence Relations',
        lectureHours: 8,
        topics: [
          'Basic Counting Principles: Rule of Sum and Product, Permutations and Combinations',
          'Pigeonhole Principle and Generalized Pigeonhole Principle',
          'Recurrence Relations: Linear Homogeneous Recurrence Relations with Constant Coefficients',
          'Non-Homogeneous Recurrence Relations (Particular Solutions)',
          'Generating Functions and Applications in Solving Recurrence Relations'
        ],
        importantPyqTopics: [
          'Solving 2nd order Linear Homogeneous and Non-Homogeneous recurrence relations',
          'Pigeonhole Principle problem on minimum people sharing birth months/cards',
          'Generating Functions method to solve Fibonacci recurrence'
        ],
        weightageLevel: 'Very High'
      }
    ],
    textbooks: [
      'Kenneth H. Rosen, "Discrete Mathematics and Its Applications", McGraw Hill',
      'C.L. Liu, D.P. Mohapatra, "Elements of Discrete Mathematics", Tata McGraw Hill',
      'B. Kolman, R. Busby, S. Ross, "Discrete Mathematical Structures", Pearson'
    ],
    referenceBooks: [
      'Trembley and Manohar, "Discrete Mathematical Structures with Applications to CS", McGraw Hill'
    ],
    quantumReference: 'AKTU Quantum Series - DSTL (BCS303/KCS303) 2nd Year CSE',
    recommendedPlaylists: [
      {
        channelName: 'Gate Smashers',
        topicCoverage: 'Discrete Mathematics: Group Theory, Hasse Diagrams & Lattices'
      },
      {
        channelName: 'Knowledge Gate',
        topicCoverage: 'Propositional Logic, Predicate Logic & Recurrence Relations'
      }
    ]
  },
  {
    id: 'kcs401-os',
    code: 'BCS401 / KCS401',
    name: 'Operating Systems',
    shortName: 'OS',
    semester: 4,
    year: 2,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Core',
    description: 'Process management, CPU scheduling, concurrency and synchronization, deadlock handling, memory management, and file systems.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'OS Introduction, Services & System Calls',
        lectureHours: 8,
        topics: [
          'Operating System Functions, Goals, Evolution (Batch, Multiprogramming, Time-Sharing, Real-Time, Distributed)',
          'Dual-Mode Operation (User Mode vs Kernel Mode), Privileged Instructions',
          'OS Architecture: Monolithic, Layered, Microkernel, Hybrid Kernels',
          'System Calls: Process Control, File Management, Device Management, Information Maintenance',
          'Booting Sequence, BIOS, UEFI, Bootloader, Init process'
        ],
        importantPyqTopics: [
          'Monolithic vs Microkernel architecture with architectural diagrams',
          'Dual-mode operation and transition from user mode to kernel mode via system calls',
          'Types of Operating Systems (Real-Time Hard vs Soft comparison)'
        ],
        weightageLevel: 'Medium'
      },
      {
        unitNumber: 2,
        unitTitle: 'Process Management, Threads & CPU Scheduling',
        lectureHours: 10,
        topics: [
          'Process Concept, Process Control Block (PCB), Process States & Transitions',
          'Threads: User-Level Threads vs Kernel-Level Threads, Multi-threading Models',
          'Process Scheduling: Schedulers (Long-Term, Short-Term, Medium-Term), Context Switch',
          'Scheduling Algorithms: FCFS, SJF (Preemptive & Non-Preemptive / SRTF), Priority Scheduling, Round Robin, Multilevel Queue Scheduling'
        ],
        importantPyqTopics: [
          'Gantt Chart and calculation of Average Waiting Time and Turnaround Time for Round Robin and SRTF',
          'Process Control Block (PCB) structure and Context Switching overhead',
          'User-level threads vs Kernel-level threads differences'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Process Synchronization & Deadlocks',
        lectureHours: 10,
        topics: [
          'Critical Section Problem, Race Condition, Mutual Exclusion, Progress, Bounded Waiting',
          'Peterson\'s Solution, Hardware Synchronization (TestAndSet, Swap)',
          'Semaphores: Counting Semaphores and Binary Semaphores (Mutex), Classical IPC Problems (Producer-Consumer, Readers-Writers, Dining Philosophers)',
          'Deadlock: 4 Necessary Conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait)',
          'Deadlock Handling: Prevention, Avoidance (Banker\'s Algorithm), Detection, Recovery'
        ],
        importantPyqTopics: [
          'Banker\'s Algorithm numerical: Safety Algorithm & Resource Request Algorithm (Guaranteed 10 Marks)',
          'Producer-Consumer Problem solution using Semaphores (wait/signal)',
          'Dining Philosophers problem and deadlock avoidance mechanism',
          '4 Necessary conditions for Deadlock and Prevention methods'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Memory Management & Virtual Memory',
        lectureHours: 8,
        topics: [
          'Contiguous Memory Allocation: Fixed & Dynamic Partitioning, First Fit, Best Fit, Worst Fit, Internal/External Fragmentation',
          'Paging: Page Tables, Hardware Support, Translation Lookaside Buffer (TLB)',
          'Segmentation: Hardware, Segment Tables, Comparison with Paging',
          'Virtual Memory: Demand Paging, Page Fault Handling sequence',
          'Page Replacement Algorithms: FIFO, Optimal Page Replacement, LRU (Least Recently Used), Belady\'s Anomaly, Thrashing & Working Set Model'
        ],
        importantPyqTopics: [
          'Page Fault calculation using FIFO, LRU, and Optimal algorithms with given reference string',
          'Belady\'s Anomaly explanation with FIFO page replacement example',
          'Two-level Paging address translation and TLB hit ratio numerical',
          'Thrashing causes and resolution using Working Set Model'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 5,
        unitTitle: 'File Systems & Disk Scheduling',
        lectureHours: 8,
        topics: [
          'File Concept, Access Methods (Sequential, Direct, Indexed), Directory Structures (Single, Two-level, Tree, Acyclic Graph)',
          'File Allocation Methods: Contiguous, Linked, Indexed Allocation (Inode in Unix)',
          'Free Space Management: Bit Vector, Linked List, Grouping, Counting',
          'Disk Structure, Disk Scheduling Algorithms: FCFS, SSTF, SCAN (Elevator), C-SCAN, LOOK, C-LOOK'
        ],
        importantPyqTopics: [
          'Disk Scheduling algorithms (SCAN, C-SCAN, SSTF, LOOK) total head movement calculation',
          'Unix Inode structure for file allocation and maximum file size calculation',
          'Contiguous vs Linked vs Indexed file allocation comparison'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'Abraham Silberschatz, Peter B. Galvin, Greg Gagne, "Operating System Concepts", Wiley',
      'Andrew S. Tanenbaum, "Modern Operating Systems", Pearson',
      'William Stallings, "Operating Systems: Internals and Design Principles", Pearson'
    ],
    referenceBooks: [
      'Milan Milenkovic, "Operating Systems: Concepts and Design", McGraw Hill'
    ],
    quantumReference: 'AKTU Quantum Series - Operating Systems (BCS401/KCS401)',
    recommendedPlaylists: [
      {
        channelName: 'Gate Smashers',
        topicCoverage: 'Complete OS Series: Banker Algorithm, CPU Scheduling, Paging, Page Replacement'
      },
      {
        channelName: 'Knowledge Gate',
        topicCoverage: 'Process Synchronization, Semaphores and Deadlock Prevention'
      }
    ]
  },
  {
    id: 'kcs402-tafl',
    code: 'BCS402 / KCS402',
    name: 'Theory of Automata & Formal Languages',
    shortName: 'TAFL',
    semester: 4,
    year: 2,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Core',
    description: 'Mathematical foundation of computation, regular languages, finite automata, context-free grammars, pushdown automata, Turing machines, and Chomsky hierarchy.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Finite Automata & Regular Expressions',
        lectureHours: 10,
        topics: [
          'Alphabets, Strings, Languages, Deterministic Finite Automata (DFA) and NFA',
          'Equivalence of DFA and NFA, NFA with epsilon-transitions to DFA conversion',
          'Minimization of DFA (Table Filling / Myhill-Nerode theorem)',
          'Moore and Mealy Machines: Definitions, State Table, Output generation, Conversion between Moore and Mealy',
          'Regular Expressions: Arden\'s Theorem for finding regular expressions from state diagrams'
        ],
        importantPyqTopics: [
          'Conversion of NFA with epsilon moves to DFA',
          'DFA Minimization using Equivalence Partitioning / Table Filling method',
          'Conversion of Moore Machine to Mealy Machine and vice versa',
          'Arden\'s Theorem application to find Regular Expression from Transition Diagram'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Regular Grammars & Pumping Lemma for Regular Languages',
        lectureHours: 8,
        topics: [
          'Chomsky Classification of Languages (Type 0, Type 1, Type 2, Type 3)',
          'Regular Grammars: Right-Linear and Left-Linear Grammars, Equivalence with FA',
          'Closure Properties of Regular Languages (Union, Intersection, Complement, Kleene Star)',
          'Pumping Lemma for Regular Languages and its application in proving non-regularity',
          'Decidability properties of Regular Languages'
        ],
        importantPyqTopics: [
          'Pumping Lemma proof to show that L = {a^n b^n | n >= 0} is not regular',
          'Chomsky Hierarchy table with grammars, automata, and language examples',
          'Closure properties of Regular Languages proofs'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Context-Free Grammars (CFG) & Pushdown Automata (PDA)',
        lectureHours: 10,
        topics: [
          'CFG Definition, Derivation Trees (Parse Trees), Leftmost and Rightmost Derivations',
          'Ambiguity in Grammars, Inherent Ambiguity, Methods to eliminate Ambiguity',
          'Simplification of CFG: Elimination of Useless Symbols, Null Productions, Unit Productions',
          'Normal Forms: Chomsky Normal Form (CNF) and Greibach Normal Form (GNF)',
          'Pushdown Automata (PDA): Definition, Instantaneous Description (ID), Acceptance by Final State vs Empty Stack, Deterministic vs Non-Deterministic PDA'
        ],
        importantPyqTopics: [
          'Converting CFG into Chomsky Normal Form (CNF) step-by-step',
          'Constructing PDA for L = {w c w^R | w in {a,b}*} or {a^n b^n | n >= 1}',
          'Eliminating Ambiguity and simplifying CFG (Null and Unit production removal)'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Context-Free Languages & Pumping Lemma for CFL',
        lectureHours: 8,
        topics: [
          'Equivalence of PDA and CFG (CFG to PDA and PDA to CFG construction)',
          'Pumping Lemma for Context-Free Languages and proofs of non-CFL',
          'Closure Properties of CFLs (Closed under Union, Concatenation, Star; Not closed under Intersection and Complement)',
          'Decision Properties of CFL (Emptiness, Finiteness, Membership - CYK Algorithm)'
        ],
        importantPyqTopics: [
          'Pumping Lemma for CFL proof to show L = {a^n b^n c^n | n >= 1} is not CFL',
          'CFG to PDA construction algorithm',
          'CYK Algorithm for membership verification in CNF grammar'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Turing Machines, Undecidability & Post Correspondence Problem',
        lectureHours: 10,
        topics: [
          'Turing Machine (TM) Model, Formal Definition, Instantaneous Description, Transition Diagram',
          'Design of Turing Machines for standard languages (e.g. 1\'s complement, addition, multiplication, a^n b^n c^n, palindromes)',
          'Variants of TM: Multi-tape TM, Non-Deterministic TM, Universal Turing Machine (UTM)',
          'Church-Turing Thesis, Recursive vs Recursively Enumerable Languages',
          'Halting Problem of Turing Machine, Undecidability proofs, Post Correspondence Problem (PCP) and Modified PCP'
        ],
        importantPyqTopics: [
          'Design a Turing Machine for L = {a^n b^n c^n | n >= 1} or Palindromes w w^R (Repeats 10 Marks)',
          'Halting Problem of Turing Machine proof of undecidability by contradiction',
          'Post Correspondence Problem (PCP) solvable vs unsolvable instance checks',
          'Recursive vs Recursively Enumerable languages Venn diagram and properties'
        ],
        weightageLevel: 'Very High'
      }
    ],
    textbooks: [
      'John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman, "Introduction to Automata Theory, Languages, and Computation", Pearson',
      'K.L.P. Mishra, N. Chandrasekaran, "Theory of Computer Science: Automata, Languages and Computation", PHI',
      'Peter Linz, "An Introduction to Formal Languages and Automata", Jones & Bartlett'
    ],
    referenceBooks: [
      'Michael Sipser, "Introduction to the Theory of Computation", Cengage Learning'
    ],
    quantumReference: 'AKTU Quantum Series - TAFL (BCS402/KCS402) 2nd Year Computer Science',
    recommendedPlaylists: [
      {
        channelName: 'Gate Smashers',
        topicCoverage: 'Complete Theory of Automata playlist: DFA/NFA, PDA, Turing Machines in Hindi'
      },
      {
        channelName: 'Knowledge Gate',
        topicCoverage: 'Pumping Lemma, CNF Conversion and Halting Problem'
      }
    ]
  },
  {
    id: 'kcs403-mp',
    code: 'BCS403 / KCS403',
    name: 'Microprocessor & Microcontroller',
    shortName: 'MP',
    semester: 4,
    year: 2,
    branches: ['CSE', 'IT', 'ECE', 'EE'],
    credits: 3,
    ltp: '3-0-0',
    category: 'Core',
    description: 'Internal architecture, pin configuration, instruction set, addressing modes, assembly language programming, interrupt handling, and peripheral interfacing for 8085, 8086, and 8051.',
    units: [
      {
        unitNumber: 1,
        unitTitle: '8085 Microprocessor Architecture',
        lectureHours: 8,
        topics: [
          '8085 CPU Architecture, Register Array (B, C, D, E, H, L, SP, PC), Flag Register',
          'Pin Configuration and Pin Functions, Multiplexed Address/Data Bus (AD0-AD7)',
          'Demultiplexing of Address/Data Bus using 74LS373 Latch & ALE signal',
          'Bus Timings: Opcode Fetch, Memory Read, Memory Write, I/O Read, I/O Write Machine Cycles, Timing Diagrams',
          '8085 Interrupts: Hardware (TRAP, RST 7.5, RST 6.5, RST 5.5, INTR) & Software Interrupts, Interrupt Priority & Vector Locations'
        ],
        importantPyqTopics: [
          '8085 Microprocessor internal block diagram and register organization',
          'Demultiplexing of Address/Data bus diagram with ALE control',
          'Opcode Fetch and Memory Read machine cycle timing diagrams',
          '8085 Hardware Interrupts vector locations, masking (SIM/RIM) and priority'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 2,
        unitTitle: '8085 Instruction Set & Assembly Programming',
        lectureHours: 8,
        topics: [
          'Instruction Classification: Data Transfer, Arithmetic, Logical, Branching, Machine Control',
          'Addressing Modes: Direct, Indirect, Immediate, Register, Implicit Addressing',
          'Assembly Language Programs (ALP): Addition, Subtraction, 16-bit operations, Multiplication, Division',
          'Array operations: Finding Largest/Smallest number, Sorting in Ascending/Descending order, Code Conversion (BCD to Binary, Binary to BCD)'
        ],
        importantPyqTopics: [
          'Write an 8085 ALP to find the largest/smallest number from an array of 10 bytes',
          'Write an 8085 ALP to sort an array in ascending order using Bubble Sort',
          'Addressing Modes of 8085 with 2 examples each'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: '8086 Microprocessor Architecture & Memory Segmentation',
        lectureHours: 8,
        topics: [
          '8086 Internal Architecture: Bus Interface Unit (BIU) and Execution Unit (EU)',
          'Instruction Queue and Pipelining in 8086, Segment Registers (CS, DS, SS, ES)',
          'Memory Segmentation: Physical Address calculation (Segment Base * 16 + Offset)',
          'Minimum Mode vs Maximum Mode pin operations and MN/MX pin',
          '8086 Flag Register (Status flags and Control flags: DF, IF, TF)'
        ],
        importantPyqTopics: [
          '8086 BIU and EU block diagram and advantages of segmentation',
          'Physical address calculation from Segment and Offset registers',
          'Minimum mode vs Maximum mode configuration and 8288 Bus Controller'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Peripheral Interfacing Chips',
        lectureHours: 8,
        topics: [
          '8255 Programmable Peripheral Interface (PPI): Pin Diagram, Block Diagram, Modes (Mode 0, Mode 1, Mode 2, BSR Mode), Control Word format',
          '8254/8253 Programmable Interval Timer: Architecture, Operating Modes (Mode 0 to 5), Control Word',
          '8259 Programmable Interrupt Controller (PIC): Architecture, Priority modes, Cascading Master-Slave',
          '8257/8237 DMA Controller: Block diagram and interfacing'
        ],
        importantPyqTopics: [
          '8255 PPI Block Diagram, Mode 0/1/2 operation and Control Word calculation',
          '8254 Timer internal architecture and Mode 2 vs Mode 3 wave generation',
          '8259 PIC internal architecture and cascading of multiple chips'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 5,
        unitTitle: '8051 Microcontroller Architecture',
        lectureHours: 8,
        topics: [
          'Comparison between Microprocessor and Microcontroller',
          '8051 Architecture: Internal RAM, ROM, Special Function Registers (SFRs), I/O Ports (P0, P1, P2, P3)',
          '8051 Timers/Counters (Timer 0 & Timer 1), TMOD and TCON registers',
          '8051 Serial Communication, SCON and PCON registers, Baud Rate generation',
          '8051 Interrupt Structure and Priority (IE and IP registers)'
        ],
        importantPyqTopics: [
          '8051 Microcontroller internal block diagram and memory organization (RAM/SFRs)',
          'Microprocessor vs Microcontroller comparison table',
          '8051 Timer Modes (TMOD register bit format) and Baud Rate generation'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'Ramesh S. Gaonkar, "Microprocessor Architecture, Programming, and Applications with the 8085", Penram',
      'A.K. Ray and K.M. Bhurchandi, "Advanced Microprocessors and Peripherals", McGraw Hill',
      'Muhammad Ali Mazidi, "The 8051 Microcontroller and Embedded Systems", Pearson'
    ],
    referenceBooks: [
      'Douglas V. Hall, "Microprocessors and Interfacing", McGraw Hill'
    ],
    quantumReference: 'AKTU Quantum Series - Microprocessors & Microcontrollers (BCS403/KCS403)',
    recommendedPlaylists: [
      {
        channelName: 'Engineering Funda',
        topicCoverage: '8085 & 8086 complete lectures with pin diagrams, instruction set and ALP'
      },
      {
        channelName: 'Neso Academy',
        topicCoverage: '8085 Microprocessor architecture and interfacing'
      }
    ]
  },
  {
    id: 'kve301-uhv',
    code: 'KVE301 / KVE401',
    name: 'Universal Human Values & Professional Ethics',
    shortName: 'UHV',
    semester: 3,
    year: 2,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 3,
    ltp: '2-1-0',
    category: 'Humanities',
    description: 'AKTU mandatory human values curriculum covering self-exploration, harmony in human being, harmony in family and society, harmony in nature and universal human order.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Introduction to Value Education & Self-Exploration',
        lectureHours: 6,
        topics: [
          'Need, Basic Guidelines, Content and Process for Value Education',
          'Self-Exploration: Content and Process, Natural Acceptance and Experiential Validation',
          'Continuous Happiness and Prosperity: A look at basic human aspirations',
          'Right Understanding, Relationship and Physical Facility (The Basic requirements)',
          'Understanding Happiness and Prosperity correctly'
        ],
        importantPyqTopics: [
          'Process of Self-Exploration with diagram (Natural Acceptance vs Experiential Validation)',
          'Current state of society: Prosperous vs Deprived (Suvidha vs Sukh)',
          'Three requirements for human being: Right Understanding, Relationship, Physical Facilities'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Harmony in the Human Being (Self and Body)',
        lectureHours: 6,
        topics: [
          'Understanding Human Being as Co-existence of the Sentient \'I\' and the Material \'Body\'',
          'Distinguishing between the Needs of \'I\' (Sukh) and \'Body\' (Suvidha)',
          'Activities of \'I\' (Desiring, Thinking, Expecting) and \'Body\' (Breathing, Heartbeat)',
          'Understanding Harmony of \'I\' with the \'Body\': Sanyam and Svasthya',
          'Correct appraisal of Physical needs, Meaning of Prosperity in detail'
        ],
        importantPyqTopics: [
          'Distinction between \'I\' (Self) and \'Body\' based on Needs, Activities, and Response (10 Marks)',
          'Understanding Sanyam (Self-regulation) and Svasthya (Health) with programs',
          'Body as an instrument of \'I\''
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Harmony in Family & Society (Trust and Respect)',
        lectureHours: 6,
        topics: [
          'Values in Human-to-Human Relationship: 9 Core Feelings (Nyaya)',
          'Trust (Vishwas): Foundational Value in Relationship, Intention vs Competence',
          'Respect (Samman): Right Evaluation, Differentiation vs Respect',
          'Affection, Care, Guidance, Reverence, Glory, Gratitude, Love',
          'Harmony in the Society: Undivided Society (Akhand Samaj), Universal Human Order (Sarvabhauma Vyavastha)'
        ],
        importantPyqTopics: [
          'Trust as the foundational value: Difference between Intention and Competence with examples',
          'Respect vs Differentiation (Over-evaluation, Under-evaluation, Otherwise-evaluation)',
          'Five dimensions of Human Order (Education-Sanskar, Health-Sanyam, Production-Work, Justice-Suraksha, Exchange-Storage)'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Harmony in Nature & Existence',
        lectureHours: 6,
        topics: [
          'Four Orders of Nature: Material Order (Padartha), Pranic Order (Prana), Animal Order (Jeeva), Human Order (Gyana)',
          'Interconnectedness, Self-regulation and Mutual Fulfillment (Parasparta) among the four orders',
          'Existence as Co-existence (Sah-astitva) of all-pervading Space (Shunya) and Units (Ikkai)',
          'Holistic perception of Harmony at all levels of existence'
        ],
        importantPyqTopics: [
          'Four Orders of Nature: Activity, Innateness, Natural Characteristic, and Inheritance comparison table',
          'Mutual fulfillment among first three orders and human intervention crisis',
          'Existence as Co-existence of Units submerged in Space'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Professional Ethics & Holistic Competence',
        lectureHours: 6,
        topics: [
          'Natural Acceptance of Human Values, Definitiveness of Ethical Human Conduct',
          'Basis for Humanistic Education, Humanistic Constitution and Universal Order',
          'Competence in Professional Ethics: Clarity of Values, Ability to identify needs, Eco-friendly technologies',
          'Strategy for transition from present state to Universal Human Order'
        ],
        importantPyqTopics: [
          'Definitiveness of Ethical Human Conduct (Values, Policy, Character)',
          'Salient features of Eco-friendly and People-friendly technology',
          'Case study on ethical dilemmas in engineering practice'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'R.R. Gaur, R. Sangal, G.P. Bagaria, "A Foundation Course in Human Values and Professional Ethics", Excel Books',
      'R.R. Gaur, "Teachers\' Manual for A Foundation Course in Human Values", Excel Books'
    ],
    referenceBooks: [
      'A.N. Tripathy, "Human Values", New Age International Publishers'
    ],
    quantumReference: 'AKTU Quantum Series - Universal Human Values (KVE301/401)',
    recommendedPlaylists: [
      {
        channelName: 'Value Education AKTU',
        topicCoverage: 'Complete UHV official AKTU lecture series by Prof. R.R. Gaur'
      }
    ]
  },

  // ===================== 1ST YEAR (COMMON TO ALL BRANCHES) =====================
  {
    id: 'bas101-physics',
    code: 'BAS101 / BAS201',
    name: 'Engineering Physics',
    shortName: 'Physics',
    semester: 1,
    year: 1,
    branches: ['COMMON_FIRST_YEAR', 'CSE', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Science & Math',
    description: 'Quantum mechanics, wave optics (interference, diffraction, polarization), lasers, fiber optics, and electromagnetic theory.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Relativistic Mechanics',
        lectureHours: 8,
        topics: [
          'Frame of Reference, Inertial & Non-Inertial frames, Michelson-Morley Experiment & Postulates of Special Relativity',
          'Lorentz Transformations, Length Contraction, Time Dilation (Twin Paradox)',
          'Relativistic Velocity Addition, Variation of Mass with Velocity, Mass-Energy Equivalence (E = mc^2), Relativistic Momentum'
        ],
        importantPyqTopics: [
          'Michelson-Morley Experiment with negative result significance',
          'Derivation of Lorentz Transformation equations',
          'Length Contraction and Time Dilation numericals',
          'Relativistic kinetic energy and E^2 = p^2 c^2 + m0^2 c^4 derivation'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Electromagnetic Field Theory',
        lectureHours: 8,
        topics: [
          'Del, Gradient, Divergence, Curl and their physical significance',
          'Continuity Equation for Time-Varying Fields, Inconsistency of Ampere\'s Law and Displacement Current',
          'Maxwell\'s Equations in Differential and Integral forms, Maxwell\'s Equations in Free Space and Dielectrics',
          'Poynting Theorem and Poynting Vector, Electromagnetic Wave propagation in Free Space'
        ],
        importantPyqTopics: [
          'Maxwell\'s four equations derivations and physical interpretations',
          'Displacement Current concept and continuity equation',
          'Poynting Theorem and Energy Conservation in EM fields'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Quantum Mechanics',
        lectureHours: 8,
        topics: [
          'De-Broglie Hypothesis, Wave-Particle Duality, Davisson-Germer Experiment',
          'Phase Velocity and Group Velocity, Heisenberg Uncertainty Principle and applications',
          'Wave Function: Physical significance, Born\'s Interpretation, Normalization',
          'Time-Dependent and Time-Independent Schrodinger Wave Equations',
          'Particle in a 1D Infinite Potential Well (Energy Eigenvalues and Eigenfunctions)'
        ],
        importantPyqTopics: [
          'Schrodinger 1D Time-Independent equation derivation',
          'Particle in a 1D Box energy levels En = (n^2 h^2)/(8 m L^2) derivation',
          'Heisenberg Uncertainty Principle applications (Non-existence of electron in nucleus)'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Wave Optics: Interference & Diffraction',
        lectureHours: 8,
        topics: [
          'Interference in Thin Films (Reflected and Transmitted light), Wedge-Shaped Thin Film',
          'Newton\'s Rings Experiment: Theory, Determination of Wavelength and Refractive Index of Liquid',
          'Fresnel vs Fraunhofer Diffraction, Fraunhofer Diffraction at Single Slit and Double Slit',
          'Diffraction Grating: Dispersive Power, Resolving Power, Rayleigh Criterion'
        ],
        importantPyqTopics: [
          'Newton\'s Rings diameter formula for dark and bright rings derivation',
          'Fraunhofer Single Slit intensity distribution and condition for maxima/minima',
          'Diffraction Grating missing spectra and resolving power'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Fiber Optics & Lasers',
        lectureHours: 8,
        topics: [
          'Fiber Optics: Principle of Total Internal Reflection, Acceptance Angle, Numerical Aperture (NA), V-Number',
          'Step-Index and Graded-Index Optical Fibers, Fiber Attenuation, Dispersion',
          'Lasers: Spontaneous vs Stimulated Emission, Einstein\'s A and B Coefficients',
          'Population Inversion, Optical Resonator, Ruby Laser, He-Ne Laser working with energy level diagram'
        ],
        importantPyqTopics: [
          'Acceptance Angle and Numerical Aperture (NA) derivation and numericals',
          'He-Ne Laser working principle with energy level transition diagram',
          'Einstein\'s A and B coefficients relation derivation'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'H.K. Malik and A.K. Singh, "Engineering Physics", McGraw Hill',
      'Arthur Beiser, "Concepts of Modern Physics", McGraw Hill',
      'Ghatak, "Optics", Tata McGraw Hill'
    ],
    referenceBooks: [
      'Halliday, Resnick and Walker, "Fundamentals of Physics", Wiley'
    ],
    quantumReference: 'AKTU Quantum Series - Engineering Physics (BAS101/201)',
    recommendedPlaylists: [
      {
        channelName: 'Engineering Physics by Dr. B.K. Pandey',
        topicCoverage: 'Full AKTU physics syllabus unit 1 to 5'
      },
      {
        channelName: 'Gate Smashers',
        topicCoverage: 'Quantum Physics basics and optics'
      }
    ]
  },
  {
    id: 'bas103-maths1',
    code: 'BAS103',
    name: 'Engineering Mathematics - I',
    shortName: 'Maths-I',
    semester: 1,
    year: 1,
    branches: ['COMMON_FIRST_YEAR', 'CSE', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Science & Math',
    description: 'Matrices and linear algebra, differential calculus I & II, multivariable calculus, and vector calculus.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Matrices & Linear Algebra',
        lectureHours: 8,
        topics: [
          'Types of Matrices, Elementary Row and Column Transformations, Echelon Form',
          'Rank of a Matrix, Consistency of Linear System of Equations (Homogeneous & Non-Homogeneous)',
          'Eigenvalues and Eigenvectors, Properties of Eigenvalues, Cayley-Hamilton Theorem and finding A^-1 / higher powers',
          'Diagonalization of Matrices, Quadratic Forms and reduction to Canonical Form'
        ],
        importantPyqTopics: [
          'Cayley-Hamilton Theorem verification and finding A^-1 and A^4 (10 Marks)',
          'Rank of matrix in Echelon form and solving system of linear equations (AX = B)',
          'Eigenvalues, Eigenvectors and Diagonalization of 3x3 matrix'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Differential Calculus - I',
        lectureHours: 8,
        topics: [
          'Successive Differentiation, Leibnitz Theorem for nth derivative of product of two functions',
          'Partial Differentiation, Euler\'s Theorem on Homogeneous Functions and deductions',
          'Total Derivative, Differentiation of Implicit Functions, Change of Variables'
        ],
        importantPyqTopics: [
          'Leibnitz Theorem nth derivative proof and evaluations (Guaranteed 10 Marks in AKTU)',
          'Euler\'s Theorem for Homogeneous Functions of degree n and 2nd derivative deduction'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Differential Calculus - II (Multivariable Calculus)',
        lectureHours: 8,
        topics: [
          'Taylor\'s and Maclaurin\'s Series expansions for functions of two variables',
          'Maxima and Minima of functions of two variables, Saddle Points',
          'Lagrange\'s Method of Undetermined Multipliers for constrained optimization',
          'Jacobians: Properties, Chain Rule for Jacobians, Functional Dependence'
        ],
        importantPyqTopics: [
          'Jacobian computation and proving functional relationship between u, v, w',
          'Maxima and Minima of f(x, y) with boundary conditions and Lagrange multipliers',
          'Taylor series expansion of f(x, y) around a point (a, b)'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Multiple Integrals',
        lectureHours: 8,
        topics: [
          'Double Integrals: Evaluation in Cartesian and Polar Coordinates, Change of Order of Integration',
          'Change of Variables from Cartesian to Polar Coordinates',
          'Triple Integrals: Evaluation in Cartesian, Cylindrical and Spherical Coordinates',
          'Applications of Multiple Integrals: Area, Volume, Center of Mass, Dirichlet\'s Theorem'
        ],
        importantPyqTopics: [
          'Change of Order of Integration with region sketching (10 Marks standard)',
          'Evaluation of Double Integral over a circular/parabolic region by changing to Polar coordinates',
          'Dirichlet\'s Theorem for volume of an ellipsoid or tetrahedron'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Vector Calculus',
        lectureHours: 8,
        topics: [
          'Vector Differential Operator (Del), Gradient of a Scalar Field, Directional Derivative',
          'Divergence and Curl of a Vector Field, Solenoidal and Irrotational Vectors, Scalar Potential',
          'Line, Surface and Volume Integrals of Vector Fields',
          'Vector Integral Theorems: Green\'s Theorem in a Plane, Stokes\' Theorem, Gauss Divergence Theorem (Statements and Verifications)'
        ],
        importantPyqTopics: [
          'Verification of Gauss Divergence Theorem for a cube/cylinder',
          'Verification of Stokes\' Theorem over a hemisphere/open surface',
          'Finding scalar potential phi for an Irrotational vector field F'
        ],
        weightageLevel: 'Very High'
      }
    ],
    textbooks: [
      'B.S. Grewal, "Higher Engineering Mathematics", Khanna Publishers',
      'H.K. Dass, "Advanced Engineering Mathematics", S. Chand',
      'Erwin Kreyszig, "Advanced Engineering Mathematics", Wiley'
    ],
    referenceBooks: [
      'Thomas and Finney, "Calculus and Analytic Geometry", Addison-Wesley'
    ],
    quantumReference: 'AKTU Quantum Series - Engineering Mathematics-I (BAS103)',
    recommendedPlaylists: [
      {
        channelName: 'Bhagwan Singh Vishwakarma',
        topicCoverage: 'Complete AKTU Engineering Mathematics 1 with all PYQ solutions'
      },
      {
        channelName: 'Gajendra Purohit',
        topicCoverage: 'Matrices, Leibnitz Theorem, Multiple Integrals and Vector Calculus'
      }
    ]
  },
  {
    id: 'bcs101-pps',
    code: 'BCS101 / BCS201',
    name: 'Programming for Problem Solving (PPS / C)',
    shortName: 'PPS (C)',
    semester: 1,
    year: 1,
    branches: ['COMMON_FIRST_YEAR', 'CSE', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 3,
    ltp: '3-0-0',
    category: 'Core',
    description: 'Algorithmic thinking, flowcharting, C syntax, operators, control flow, functions, recursion, arrays, pointers, structures, and file handling.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Introduction to Programming & Basics of C',
        lectureHours: 8,
        topics: [
          'Computer Basics, High Level vs Low Level Languages, Compiler, Assembler, Linker, Loader',
          'Problem Solving: Algorithm design, Flowcharts, Pseudo-code',
          'Structure of a C Program, Character Set, Keywords, Identifiers, Data Types, Variables, Constants',
          'Operators: Arithmetic, Relational, Logical, Assignment, Increment/Decrement, Bitwise, Conditional (Ternary), Sizeof',
          'Operator Precedence and Associativity, Type Casting and Type Conversion'
        ],
        importantPyqTopics: [
          'Draw Flowchart and write Algorithm for Prime number check or Fibonacci series',
          'Operator Precedence & Associativity hierarchy evaluation expression questions',
          'Compilation and Execution phases of a C program'
        ],
        weightageLevel: 'Medium'
      },
      {
        unitNumber: 2,
        unitTitle: 'Control Structures & Conditional Statements',
        lectureHours: 8,
        topics: [
          'Decision Making: if, if-else, nested if-else, else-if ladder, switch-case statement',
          'Looping Statements: while loop, do-while loop, for loop, nested loops',
          'Jump Statements: break, continue, goto, return',
          'Pattern printing problems and mathematical series calculations'
        ],
        importantPyqTopics: [
          'Difference between while and do-while loops with examples',
          'Switch-case statement rules and implementing a basic calculator',
          'C program for Armstrong number, Palindrome number, or Reverse digits'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Arrays & Strings',
        lectureHours: 8,
        topics: [
          '1D Arrays: Declaration, Initialization, Memory Representation, Accessing elements',
          'Array Operations: Traversal, Insertion, Deletion, Linear Search, Binary Search, Bubble Sort',
          '2D Arrays (Matrices): Matrix Addition, Matrix Multiplication, Transpose',
          'Strings in C: Character arrays, String Literals, Standard Library String functions (strlen, strcpy, strcat, strcmp, strrev) and custom implementations'
        ],
        importantPyqTopics: [
          'C Program for 2D Matrix Multiplication with dimension validation (10 Marks)',
          'Binary Search in a sorted array implementation',
          'Custom implementation of string functions without using <string.h>'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Functions & Recursion',
        lectureHours: 8,
        topics: [
          'Functions: Declaration, Definition, Function Call, Actual vs Formal Parameters',
          'Parameter Passing Mechanisms: Call by Value vs Call by Reference (using Pointers)',
          'Scope, Lifetime and Storage Classes in C (auto, register, static, extern)',
          'Recursion: Base condition, Recursive calls, Factorial, GCD (Euclid algorithm), Tower of Hanoi, Fibonacci'
        ],
        importantPyqTopics: [
          'Call by Value vs Call by Reference with swapping program example',
          'Four Storage Classes in C with scope, lifetime, default value and memory location table',
          'Recursive function for Tower of Hanoi or GCD of two numbers'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Pointers, Structures, Unions & File Handling',
        lectureHours: 8,
        topics: [
          'Pointers: Concept, Declaration, Pointer Arithmetic, Pointer to Array, Array of Pointers',
          'Dynamic Memory Allocation: malloc(), calloc(), realloc(), free()',
          'Structures: Declaration, Initialization, Accessing members, Array of Structures, Nested Structures, Structure Pointers',
          'Unions: Difference between Structure and Union',
          'File Handling: File Opening Modes (r, w, a, r+, w+), fopen, fclose, fprintf, fscanf, fgetc, fputc, fread, fwrite'
        ],
        importantPyqTopics: [
          'Difference between Structure and Union with memory diagram',
          'Dynamic memory allocation functions (malloc vs calloc vs realloc)',
          'File handling program to copy contents from one file to another or count words/lines'
        ],
        weightageLevel: 'Very High'
      }
    ],
    textbooks: [
      'E. Balagurusamy, "Programming in ANSI C", McGraw Hill',
      'Yashavant Kanetkar, "Let Us C", BPB Publications',
      'Brian W. Kernighan and Dennis M. Ritchie, "The C Programming Language", Prentice Hall'
    ],
    referenceBooks: [
      'Reema Thareja, "Computer Fundamentals and Programming in C", Oxford University Press'
    ],
    quantumReference: 'AKTU Quantum Series - Programming for Problem Solving (BCS101/201)',
    recommendedPlaylists: [
      {
        channelName: 'CodeWithHarry',
        topicCoverage: 'Complete C Language tutorial covering all basics, pointers and memory'
      },
      {
        channelName: 'Neso Academy',
        topicCoverage: 'C Programming for college & university exams'
      }
    ]
  },

  // ===================== 3RD YEAR SUBJECTS =====================
  {
    id: 'kcs501-dbms',
    code: 'KCS501',
    name: 'Database Management Systems',
    shortName: 'DBMS',
    semester: 5,
    year: 3,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Core',
    description: 'Relational model, ER modeling, SQL, Relational Algebra, Normalization (1NF to BCNF), Transaction Processing (ACID), Concurrency Control, and Crash Recovery.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Database Architecture, ER Modeling & Relational Model',
        lectureHours: 8,
        topics: [
          'Database System Applications, 3-Schema Architecture, Data Independence (Physical & Logical)',
          'Database Users and DBA Roles, DBMS vs File Processing System',
          'Entity-Relationship (ER) Model: Entities, Attributes, Relationships, Cardinality, Weak Entity Sets, Extended ER (Generalization, Specialization, Aggregation)',
          'Conversion of ER Diagrams into Relational Tables',
          'Relational Data Model: Relations, Tuples, Domains, Integrity Constraints (Domain, Entity, Referential Integrity Key)'
        ],
        importantPyqTopics: [
          '3-Schema ANSI-SPARC Architecture and Data Independence',
          'Draw ER diagram for University / Hospital / Banking system and convert to Relational Schema (10 Marks)',
          'Integrity constraints in Relational Model with Primary and Foreign Keys'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Relational Algebra, Tuple Calculus & SQL',
        lectureHours: 8,
        topics: [
          'Relational Algebra Operations: Select, Project, Union, Set Difference, Cartesian Product, Rename',
          'Additional Relational Operations: Natural Join, Theta Join, Outer Joins (Left, Right, Full), Division Operator',
          'Tuple Relational Calculus (TRC) and Domain Relational Calculus (DRC)',
          'SQL: DDL, DML, DCL, TCL Commands, Nested Subqueries, Correlated Queries, Aggregate Functions, GROUP BY, HAVING, Views, Triggers, Indexes'
        ],
        importantPyqTopics: [
          'Writing Relational Algebra expressions vs SQL queries for employee/department database',
          'Division Operator in Relational Algebra explanation and query',
          'SQL complex queries using Joins, Group By, Having, and Subqueries'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Database Design & Relational Normalization',
        lectureHours: 10,
        topics: [
          'Pitfalls in Relational Database Design (Redundancy, Insertion, Deletion & Update Anomalies)',
          'Functional Dependencies (FD): Definition, Armstrong\'s Axioms, Closure of FDs (F+), Attribute Closure (X+), Canonical Cover (Minimal Cover)',
          'Candidate Keys determination from FD set',
          'Normal Forms: First Normal Form (1NF), Second Normal Form (2NF), Third Normal Form (3NF), Boyce-Codd Normal Form (BCNF)',
          'Lossless Join Decomposition and Dependency Preservation checks',
          'Multi-valued Dependencies (MVD) & 4NF, Join Dependencies & 5NF'
        ],
        importantPyqTopics: [
          'Finding all Candidate Keys from a given relation and FD set (Guaranteed 10 Marks)',
          'Checking highest Normal Form (1NF, 2NF, 3NF, BCNF) of a relation',
          'Lossless Join Decomposition and Dependency Preservation proof numerical'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Transaction Processing & Concurrency Control',
        lectureHours: 8,
        topics: [
          'Transaction Concept, Transaction States, ACID Properties',
          'Serializability: Conflict Serializability, Precedence Graph (Testing for Conflict Serializability), View Serializability',
          'Recoverable Schedules, Cascading Aborts, Cascadeless Schedules, Strict Schedules',
          'Concurrency Control Protocols: Lock-Based Protocols (Shared/Exclusive locks, 2-Phase Locking - 2PL, Strict 2PL, Rigorous 2PL)',
          'Timestamp-Based Protocols (Thomas Write Rule), Validation-Based Protocols, Deadlock Prevention and Detection (Wait-Die, Wound-Wait, Wait-For Graph)'
        ],
        importantPyqTopics: [
          'Testing a schedule for Conflict Serializability using Precedence Graph (10 Marks)',
          'Two-Phase Locking (2PL) protocol: Growing & Shrinking phases, Deadlock risk vs Serializability guarantee',
          'ACID properties and Transaction state transition diagram'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Crash Recovery, Indexing & Storage Systems',
        lectureHours: 8,
        topics: [
          'Failure Classification, Storage Hierarchy (Volatile, Non-Volatile, Stable Storage)',
          'Log-Based Recovery: Write-Ahead Logging (WAL), Deferred Database Modification, Immediate Database Modification',
          'Checkpoints and Recovery algorithm (Redo / Undo passes)',
          'File Organization: Heap, Sequential, Hashing',
          'Indexing: Primary Index, Clustering Index, Secondary Index, Dense vs Sparse Index, B-Trees and B+ Trees Indexing in Databases'
        ],
        importantPyqTopics: [
          'Log-based recovery with Deferred vs Immediate database modification',
          'B+ Tree index insertion and search mechanism in database storage',
          'Checkpoints concept and how it minimizes recovery log scanning time'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'Silberschatz, Korth, Sudarshan, "Database System Concepts", McGraw Hill',
      'Ramez Elmasri, Shamkant B. Navathe, "Fundamentals of Database Systems", Pearson',
      'Raghu Ramakrishnan, Johannes Gehrke, "Database Management Systems", McGraw Hill'
    ],
    referenceBooks: [
      'C.J. Date, "An Introduction to Database Systems", Addison-Wesley'
    ],
    quantumReference: 'AKTU Quantum Series - DBMS (KCS501) 3rd Year CSE/IT',
    recommendedPlaylists: [
      {
        channelName: 'Gate Smashers',
        topicCoverage: 'Complete DBMS playlist: Normalization, ER Model, SQL, Transactions, 2PL'
      },
      {
        channelName: 'Knowledge Gate',
        topicCoverage: 'Candidate keys calculation and conflict serializability'
      }
    ]
  },
  {
    id: 'kcs503-daa',
    code: 'KCS503',
    name: 'Design and Analysis of Algorithms',
    shortName: 'DAA',
    semester: 5,
    year: 3,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Core',
    description: 'Algorithm design paradigms: Divide and Conquer, Greedy method, Dynamic Programming, Backtracking, Branch and Bound, String matching, and NP-Completeness.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Introduction & Asymptotic Analysis',
        lectureHours: 8,
        topics: [
          'Algorithm Definition, Characteristics, Framework for Analysis of Algorithms',
          'Asymptotic Notations (O, Omega, Theta, o, omega) and properties',
          'Recurrence Relations: Substitution Method, Recursion Tree Method, Master Theorem for Divide & Conquer',
          'Divide and Conquer: Merge Sort, Quick Sort, Randomized Quick Sort, Strassen\'s Matrix Multiplication'
        ],
        importantPyqTopics: [
          'Master Theorem applications to solve complex algorithmic recurrences (10 Marks)',
          'Merge Sort vs Quick Sort worst-case and average-case complexity analysis',
          'Strassen\'s Matrix Multiplication recurrence and 7 multiplications scheme'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Greedy Method & Advanced Data Structures',
        lectureHours: 8,
        topics: [
          'Greedy Strategy: General Characteristics, Optimal Substructure, Greedy Choice Property',
          'Fractional Knapsack Problem, Activity Selection Problem, Huffman Coding',
          'Minimum Spanning Trees: Prim\'s and Kruskal\'s with Disjoint Set Union (DSU)',
          'Single Source Shortest Path: Dijkstra\'s Algorithm',
          'Advanced Data Structures: Binomial Heaps, Fibonacci Heaps, Red-Black Trees'
        ],
        importantPyqTopics: [
          'Fractional Knapsack problem numerical using Greedy approach',
          'Huffman Coding optimal prefix code tree generation and bits saved calculation',
          'Red-Black Tree insertion properties and rotations'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Dynamic Programming',
        lectureHours: 10,
        topics: [
          'Dynamic Programming Paradigm: Principle of Optimality, Overlapping Subproblems, Memoization vs Tabulation',
          '0/1 Knapsack Problem (Matrix Formulation & State Equations)',
          'Matrix Chain Multiplication (MCM) - Parenthesization of Matrices',
          'Longest Common Subsequence (LCS), Bellman-Ford Shortest Path, Floyd-Warshall All-Pairs Shortest Path',
          'Travelling Salesperson Problem (TSP) using DP, Optimal Binary Search Tree (OBST)'
        ],
        importantPyqTopics: [
          'Matrix Chain Multiplication (MCM) table filling and minimum scalar multiplication calculation (Guaranteed 10 Marks in AKTU)',
          '0/1 Knapsack Dynamic Programming table construction',
          'Longest Common Subsequence (LCS) matrix computation and traceback'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Backtracking & Branch and Bound',
        lectureHours: 8,
        topics: [
          'Backtracking: State Space Tree, Implicit vs Explicit constraints',
          'N-Queens Problem (4-Queens, 8-Queens formulation and placement)',
          'Subset Sum Problem, Graph Coloring Problem (m-Colorability), Hamiltonian Cycles',
          'Branch and Bound: FIFO B&B, LIFO B&B, Least Cost (LC) B&B',
          '15-Puzzle Problem, Traveling Salesperson Problem (TSP) using Branch and Bound'
        ],
        importantPyqTopics: [
          '8-Queens Problem state space tree and backtracking algorithm',
          'Graph Coloring problem state space formulation and chromatic number',
          'Traveling Salesperson Problem using Branch and Bound (Reduced Matrix Method)'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'String Matching & NP-Completeness',
        lectureHours: 8,
        topics: [
          'String Matching Algorithms: Naive String Matcher, Rabin-Karp Algorithm (Hash values & spurious hits)',
          'Knuth-Morris-Pratt (KMP) Algorithm and Prefix (pi) table construction',
          'Tractable vs Intractable Problems, P, NP, NP-Hard, NP-Complete Classes',
          'Polynomial Time Reduction, Cook\'s Theorem (Boolean Satisfiability - 3-SAT)',
          'Standard NP-Complete Problems: Vertex Cover, Clique Problem, Set Cover, Subset Sum'
        ],
        importantPyqTopics: [
          'KMP Algorithm failure function (Prefix table) construction and string search',
          'Rabin-Karp algorithm rolling hash mechanism and modulo arithmetic',
          'P vs NP vs NP-Complete vs NP-Hard Venn Diagram and definitions',
          'Vertex Cover or Clique problem reduction proof'
        ],
        weightageLevel: 'Very High'
      }
    ],
    textbooks: [
      'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein, "Introduction to Algorithms" (CLRS), MIT Press',
      'Ellis Horowitz, Sartaj Sahni, Sanguthevar Rajasekaran, "Fundamentals of Computer Algorithms", Silicon Press'
    ],
    referenceBooks: [
      'Jon Kleinberg, Eva Tardos, "Algorithm Design", Pearson'
    ],
    quantumReference: 'AKTU Quantum Series - DAA (KCS503) 3rd Year CSE/IT',
    recommendedPlaylists: [
      {
        channelName: 'Abdul Bari',
        topicCoverage: 'Complete Algorithms playlist: MCM, 0/1 Knapsack, Bellman-Ford, N-Queens, KMP'
      },
      {
        channelName: 'Gate Smashers',
        topicCoverage: 'DAA complete university syllabus and NP-Completeness'
      }
    ]
  },

  // ===================== 4TH YEAR SUBJECTS =====================
  {
    id: 'kcs701-ai',
    code: 'KCS701',
    name: 'Artificial Intelligence',
    shortName: 'AI',
    semester: 7,
    year: 4,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT'],
    credits: 4,
    ltp: '3-0-0',
    category: 'Core',
    description: 'Foundations of intelligent agents, uninformed and informed search algorithms (A*, AO*), game playing (Minimax, Alpha-Beta), knowledge representation, probabilistic reasoning, and expert systems.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Introduction to AI & Intelligent Agents',
        lectureHours: 8,
        topics: [
          'AI Definitions, Turing Test, Chinese Room Argument, History & Foundations of AI',
          'Rational Agents: PEAS (Performance measure, Environment, Actuators, Sensors) description',
          'Environment Types: Fully/Partially Observable, Deterministic/Stochastic, Episodic/Sequential, Static/Dynamic, Discrete/Continuous, Single/Multi-agent',
          'Agent Architectures: Simple Reflex, Model-based Reflex, Goal-based, Utility-based, Learning Agents'
        ],
        importantPyqTopics: [
          'Turing Test setup, significance and limitations',
          'PEAS representation for Automated Taxi Driver, Medical Diagnosis, Robot Vacuum Cleaner',
          'Types of Agents block diagrams (Goal-based vs Utility-based)'
        ],
        weightageLevel: 'Medium'
      },
      {
        unitNumber: 2,
        unitTitle: 'Search Strategies & Problem Solving',
        lectureHours: 10,
        topics: [
          'Problem Formulation: Initial State, Actions, Transition Model, Goal Test, Path Cost',
          'Uninformed Search Strategies: Breadth-First Search (BFS), Depth-First Search (DFS), Depth-Limited Search, Iterative Deepening DFS (IDDFS), Uniform Cost Search (UCS)',
          'Informed (Heuristic) Search Strategies: Greedy Best-First Search, A* Search Algorithm, Admissibility and Consistency of Heuristics',
          'Adversarial Search & Game Playing: Minimax Algorithm, Alpha-Beta Pruning',
          'Local Search: Hill Climbing, Simulated Annealing, Genetic Algorithms, AND-OR Graphs and AO* Algorithm'
        ],
        importantPyqTopics: [
          'A* Search Algorithm numerical with evaluation function f(n) = g(n) + h(n) (10 Marks)',
          'Alpha-Beta Pruning game tree evaluation and pruned branch identification',
          'AO* algorithm step-by-step cost updating on AND-OR graph'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Knowledge Representation & First-Order Logic',
        lectureHours: 8,
        topics: [
          'Knowledge Representation Approaches and Issues, Frame Problem',
          'Propositional Logic vs First-Order Predicate Logic (FOL)',
          'Inference in FOL: Forward Chaining, Backward Chaining, Unification Algorithm',
          'Resolution Refutation in Propositional and First-Order Logic, Conjunctive Normal Form (CNF) Conversion',
          'Semantic Networks, Conceptual Dependencies, Frames, Scripts'
        ],
        importantPyqTopics: [
          'Resolution Refutation proof for proving a theorem in First-Order Logic (10 Marks)',
          'Unification Algorithm on predicate expressions',
          'Forward Chaining vs Backward Chaining comparison'
        ],
        weightageLevel: 'Very High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Probabilistic Reasoning & Uncertain Knowledge',
        lectureHours: 8,
        topics: [
          'Handling Uncertain Knowledge, Probabilistic Reasoning, Axioms of Probability',
          'Bayes\' Rule and its application in medical diagnosis',
          'Bayesian Belief Networks (BBN): Representation, Semantics, Conditional Independence, Inference in BBN',
          'Dampster-Shafer Theory of Evidence, Fuzzy Logic: Fuzzy Sets, Membership Functions, Fuzzy Operations, Defuzzification'
        ],
        importantPyqTopics: [
          'Bayesian Belief Network conditional probability table calculation (10 Marks)',
          'Fuzzy Set operations (Union, Intersection, Complement) and Membership value calculation',
          'Bayes\' Theorem application numerical'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Expert Systems & Machine Learning Overview',
        lectureHours: 8,
        topics: [
          'Expert Systems: Architecture, Knowledge Base, Inference Engine, Explanation Facility, Knowledge Acquisition',
          'Building Expert Systems (MYCIN, DENDRAL case studies)',
          'Natural Language Processing (NLP) Phases: Morphological, Syntactic, Semantic, Pragmatic analysis',
          'Learning Paradigms: Supervised Learning, Unsupervised Learning, Reinforcement Learning, Decision Trees'
        ],
        importantPyqTopics: [
          'Expert System Architecture block diagram and roles of Knowledge Engineer and Domain Expert',
          'Phases of Natural Language Processing (NLP)',
          'Decision Tree learning (ID3 algorithm, Entropy and Information Gain)'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'Stuart Russell and Peter Norvig, "Artificial Intelligence: A Modern Approach", Pearson',
      'Elaine Rich, Kevin Knight, Shivashankar B. Nair, "Artificial Intelligence", Tata McGraw Hill'
    ],
    referenceBooks: [
      'Dan W. Patterson, "Introduction to Artificial Intelligence and Expert Systems", PHI'
    ],
    quantumReference: 'AKTU Quantum Series - Artificial Intelligence (KCS701) 4th Year CSE',
    recommendedPlaylists: [
      {
        channelName: 'Gate Smashers',
        topicCoverage: 'Complete AI playlist: A*, AO*, Minimax, Alpha-Beta Pruning, Resolution'
      },
      {
        channelName: 'Knowledge Gate',
        topicCoverage: 'Uninformed & Informed search techniques, Logic resolution'
      }
    ]
  }
];

export const AKTU_GRADING_SCALE = [
  { gradeLetter: 'O', gradePoint: 10, marksRange: '90 - 100%', description: 'Outstanding' },
  { gradeLetter: 'A+', gradePoint: 9, marksRange: '80 - 89%', description: 'Excellent' },
  { gradeLetter: 'A', gradePoint: 8, marksRange: '70 - 79%', description: 'Very Good' },
  { gradeLetter: 'B+', gradePoint: 7, marksRange: '60 - 69%', description: 'Good' },
  { gradeLetter: 'B', gradePoint: 6, marksRange: '50 - 59%', description: 'Above Average' },
  { gradeLetter: 'C', gradePoint: 5, marksRange: '45 - 49%', description: 'Average' },
  { gradeLetter: 'P', gradePoint: 4, marksRange: '40 - 44%', description: 'Pass' },
  { gradeLetter: 'F', gradePoint: 0, marksRange: '< 40%', description: 'Fail / Carryover' },
];
