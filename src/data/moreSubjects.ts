import { Subject } from '../types';

export const ADDITIONAL_AKTU_SUBJECTS: Subject[] = [
  // ===================== 1ST YEAR (CHEMISTRY & ELECTRICAL GROUP) =====================
  {
    id: 'bas102-chemistry',
    code: 'BAS102 / BAS202',
    name: 'Engineering Chemistry',
    shortName: 'Chem',
    semester: 1,
    year: 1,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Core',
    description: 'Fundamental chemical principles applied to engineering materials, spectroscopy, electrochemistry, water hardness purification, fuels, and polymer chemistry.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Atomic & Molecular Structure & Nanomaterials',
        lectureHours: 8,
        topics: [
          'Molecular Orbital Theory (MOT) of homonuclear and heteronuclear diatomic molecules (N2, O2, NO, CO)',
          'Liquid crystals: Classification, nematic, smectic, cholesteric and engineering applications',
          'Nanomaterials: Classification, carbon nanotubes (CNTs), fullerenes, synthesis and applications',
          'Green Chemistry: 12 Principles and industrial relevance'
        ],
        importantPyqTopics: [
          'MOT diagram of O2, CO, and NO with bond order and magnetic behavior',
          'Classification of liquid crystals and display applications',
          'Carbon Nanotubes (CNTs) types and properties'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Spectroscopic Techniques & Applications',
        lectureHours: 8,
        topics: [
          'Elementary principles of spectroscopy: Beer-Lambert law and numericals',
          'UV-Visible Spectroscopy: Electronic transitions, chromophores, auxochromes, bathochromic and hypsochromic shifts',
          'Infrared (IR) Spectroscopy: Molecular vibrations, Hooke law, characteristic functional group absorptions',
          'Nuclear Magnetic Resonance (NMR / 1H-NMR): Chemical shift, shielding and deshielding, spin-spin splitting'
        ],
        importantPyqTopics: [
          'Beer-Lambert Law derivations and numerical problems',
          'Selection rules and molecular vibrations in IR spectroscopy',
          'Chemical shift in NMR and equivalent protons calculation'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Electrochemistry & Corrosion',
        lectureHours: 8,
        topics: [
          'Nernst Equation and electrochemical cells, EMF measurement',
          'Batteries: Secondary batteries, Lead-acid accumulator, Lithium-ion battery mechanism',
          'Corrosion: Electrochemical theory of corrosion, Galvanic corrosion, Differential aeration corrosion',
          'Corrosion prevention: Cathodic protection (sacrificial anode, impressed current) and protective coatings'
        ],
        importantPyqTopics: [
          'Nernst equation numericals for cell EMF',
          'Dry vs Wet (electrochemical) corrosion mechanism with chemical equations',
          'Sacrificial anode and impressed current cathodic protection methods'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Water Technology & Boiler Trouble',
        lectureHours: 8,
        topics: [
          'Hardness of water: Temporary and permanent hardness, units of hardness and numericals',
          'Boiler troubles: Scale and sludge formation, priming and foaming, caustic embrittlement, boiler corrosion',
          'Water softening methods: Lime-Soda process, Zeolite process, Ion-Exchange (Demineralization) method',
          'Desalination: Reverse Osmosis (RO) process and membrane technology'
        ],
        importantPyqTopics: [
          'Calculation of hardness of water from salt concentrations (numerical guaranteed)',
          'Ion-exchange resin process with neat diagram and regeneration reactions',
          'Reverse Osmosis (RO) principle and diagram'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Fuels, Combustion & Polymer Chemistry',
        lectureHours: 8,
        topics: [
          'Fuels: Classification, Calorific Value (HCV and LCV), Dulong formula and Bomb Calorimeter experiment',
          'Biogas, Biomass, and Proximate & Ultimate analysis of coal with numericals',
          'Polymers: Classification, conducting polymers (polyaniline), biodegradable polymers (PLA, PHBV)',
          'Organometallic compounds: Grignard reagent synthesis and applications'
        ],
        importantPyqTopics: [
          'Bomb calorimeter determination of HCV and LCV with numericals',
          'Proximate analysis vs Ultimate analysis of coal numericals',
          'Conducting polymers mechanism and biodegradable polymers'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'P.C. Jain and Monika Jain, "Engineering Chemistry", Dhanpat Rai Publishing',
      'Shashi Chawla, "A Textbook of Engineering Chemistry", Dhanpat Rai'
    ],
    referenceBooks: ['S.S. Dara, "A Textbook of Engineering Chemistry", S. Chand'],
    quantumReference: 'AKTU Quantum Series - Engineering Chemistry (BAS102/202) 1st Year',
    recommendedPlaylists: [
      { channelName: 'Gate Smashers', topicCoverage: 'Engineering Chemistry fundamentals' },
      { channelName: 'Last moment tuitions (LMT)', topicCoverage: 'Water softening, Bomb calorimeter, Corrosion' }
    ]
  },
  {
    id: 'bas203-maths2',
    code: 'BAS203',
    name: 'Engineering Mathematics-II',
    shortName: 'Maths-II',
    semester: 2,
    year: 1,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Core',
    description: 'Higher order differential equations, multivariable calculus, vector calculus, line/surface integrals, Stokes and Gauss theorems.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Ordinary Differential Equations of Higher Order',
        lectureHours: 8,
        topics: [
          'Linear differential equations of nth order with constant coefficients',
          'Complementary Function (CF) and Particular Integral (PI) for standard right hand functions',
          'Cauchy-Euler and Legendre homogeneous linear differential equations',
          'Method of Variation of Parameters for second order ODEs',
          'Simultaneous linear differential equations'
        ],
        importantPyqTopics: [
          'Method of Variation of Parameters (guaranteed 10-mark question)',
          'Cauchy-Euler differential equations substitution method',
          'Particular Integral calculation for e^(ax)*V and x*V forms'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Multivariable Calculus (Multiple Integrals)',
        lectureHours: 8,
        topics: [
          'Double integrals in Cartesian and polar coordinates, Change of order of integration',
          'Triple integrals in Cartesian, cylindrical and spherical coordinates',
          'Beta and Gamma functions: Definitions, properties and transformations',
          'Applications of multiple integrals to area, volume, center of mass and moment of inertia'
        ],
        importantPyqTopics: [
          'Change of order of integration in double integrals (frequently asked)',
          'Volume calculation using triple integration',
          'Beta-Gamma function relationship and evaluation of definite integrals'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Vector Calculus & Vector Differentiation',
        lectureHours: 8,
        topics: [
          'Vector fields, directional derivatives, gradient of a scalar field and physical interpretation',
          'Divergence and Curl of vector point functions, solenoidal and irrotational vectors',
          'Scalar potential function and conservative force fields',
          'Vector identities and second-order differential operators (Laplacian)'
        ],
        importantPyqTopics: [
          'Finding scalar potential function phi such that F = grad(phi)',
          'Directional derivative along a given vector or normal to surface',
          'Proof of solenoidal (div F = 0) and irrotational (curl F = 0) vectors'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Vector Integration & Integral Theorems',
        lectureHours: 8,
        topics: [
          'Line integrals, Work done by a force field, Circulation of vector fields',
          'Surface integrals and flux across curved surfaces, Volume integrals',
          'Green Theorem in the plane: Statement, proof and verification',
          'Stoke Theorem: Statement, physical meaning, proof and verification',
          'Gauss Divergence Theorem: Statement, verification and volume calculation'
        ],
        importantPyqTopics: [
          'Verification of Gauss Divergence Theorem for a cube or cylinder',
          'Verification of Stokes Theorem around a boundary curve',
          'Work done evaluation along line integrals'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Sequences, Series & Complex Variables',
        lectureHours: 8,
        topics: [
          'Sequences and convergence, Infinite series of positive terms',
          'Comparison test, D-Alembert ratio test, Raabe test, Cauchy root test',
          'Alternating series, Leibnitz test, Absolute and conditional convergence',
          'Introduction to complex functions, Cauchy-Riemann (C-R) equations, Analytic functions'
        ],
        importantPyqTopics: [
          'D-Alembert ratio test and Raabe test for series convergence',
          'Testing alternating series using Leibnitz rule',
          'Milne-Thomson method to construct analytic function f(z) = u + iv'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'B.S. Grewal, "Higher Engineering Mathematics", Khanna Publishers',
      'H.K. Dass and Er. Rajnish Verma, "Higher Engineering Mathematics", S. Chand'
    ],
    referenceBooks: ['Erwin Kreyszig, "Advanced Engineering Mathematics", John Wiley & Sons'],
    quantumReference: 'AKTU Quantum Series - Engineering Mathematics-II (BAS203) 1st Year',
    recommendedPlaylists: [
      { channelName: 'Gajendra Purohit', topicCoverage: 'Method of Variation of parameters, Gauss divergence theorem, Double integrals' },
      { channelName: 'Bhagwan Singh Vishwakarma', topicCoverage: 'Vector calculus and multiple integration' }
    ]
  },
  {
    id: 'bee101-electrical',
    code: 'BEE101 / BEE201',
    name: 'Basic Electrical Engineering',
    shortName: 'BEE',
    semester: 1,
    year: 1,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Core',
    description: 'Analysis of DC networks, AC steady-state circuits, magnetic circuits, single-phase transformers, rotating electrical machines, and electrical safety installations.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'DC Circuits & Network Theorems',
        lectureHours: 8,
        topics: [
          'Electrical circuit elements (R, L and C), Voltage and Current sources, Dependent and Independent sources',
          'Kirchhoff Current Law (KCL) and Kirchhoff Voltage Law (KVL), Nodal and Mesh analysis',
          'Superposition Theorem, Thevenin Theorem, Norton Theorem, Maximum Power Transfer Theorem',
          'Star-Delta conversion and network simplification'
        ],
        importantPyqTopics: [
          'Thevenin Theorem numerical for finding load current and Vth / Rth',
          'Mesh and Nodal analysis with dependent and independent sources',
          'Maximum Power Transfer Theorem statement, derivation, and numerical'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Single-Phase & Three-Phase AC Circuits',
        lectureHours: 8,
        topics: [
          'Sinusoidal waveform representation, peak, RMS and average values, Form factor and Peak factor',
          'Phasor representation of AC quantities, impedance and admittance in series and parallel R-L, R-C, R-L-C circuits',
          'Real power, reactive power, apparent power, and Power Factor analysis',
          'Series and parallel resonance: Resonant frequency, bandwidth, Q-factor',
          'Three-phase balanced circuits: Star and Delta connections, line and phase voltages/currents, Two-Wattmeter power measurement'
        ],
        importantPyqTopics: [
          'Series R-L-C circuit impedance and phasor diagram numericals',
          'Two-Wattmeter method derivation for 3-phase power and power factor',
          'Resonance condition and derivation of Q-factor'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Transformers & Magnetic Circuits',
        lectureHours: 8,
        topics: [
          'Magnetic circuits: MMF, reluctance, flux density, B-H curve and hysteresis loop',
          'Single-phase transformer: Construction, core type and shell type, working principle, EMF equation',
          'Ideal and practical transformers, equivalent circuit, phasor diagrams on no-load and load',
          'Open Circuit (OC) and Short Circuit (SC) tests, voltage regulation, efficiency and all-day efficiency'
        ],
        importantPyqTopics: [
          'EMF equation of transformer and turns ratio derivation',
          'Equivalent circuit of transformer referred to primary and secondary',
          'OC and SC test calculation of core losses, copper losses, and efficiency'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Electrical Machines (DC & AC Motors)',
        lectureHours: 8,
        topics: [
          'DC Machines: Construction, working principle of DC Generator and DC Motor, EMF equation and Torque equation',
          'Types of DC motors (Shunt, Series, Compound), torque-speed characteristics and speed control methods',
          'Three-phase Induction Motor: Construction (Squirrel cage and Slip ring), rotating magnetic field, slip calculation',
          'Torque-slip characteristics, starting methods (DOL, Star-Delta)',
          'Single-phase induction motor: Double revolving field theory and capacitor start motor'
        ],
        importantPyqTopics: [
          'DC Motor back EMF and torque equation derivation',
          'Rotating Magnetic Field (RMF) concept in 3-phase induction motor',
          'Torque-slip characteristics of 3-phase induction motor'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Electrical Installations, Wiring & Safety',
        lectureHours: 8,
        topics: [
          'Switchgear components: MCB (Miniature Circuit Breaker), MCCB, ELCB (Earth Leakage Circuit Breaker), Fuses',
          'Types of wires and cables, calculation of cable sizes and earthing',
          'Earthing: Importance, Pipe earthing, Plate earthing, and step/touch potentials',
          'Power factor improvement using capacitor banks',
          'Electric shock, safety precautions, and energy meter reading'
        ],
        importantPyqTopics: [
          'Pipe earthing and Plate earthing construction diagrams and procedure',
          'MCB vs Fuse comparison and ELCB working mechanism',
          'Need and methods for power factor correction'
        ],
        weightageLevel: 'Medium'
      }
    ],
    textbooks: [
      'D.P. Kothari and I.J. Nagrath, "Basic Electrical Engineering", Tata McGraw Hill',
      'V.D. Toro, "Electrical Engineering Fundamentals", Prentice Hall India'
    ],
    referenceBooks: ['B.L. Theraja, "A Textbook of Electrical Technology Volume 1", S. Chand'],
    quantumReference: 'AKTU Quantum Series - Basic Electrical Engineering (BEE101/201)',
    recommendedPlaylists: [
      { channelName: 'Gate Smashers', topicCoverage: 'Network theorems, AC circuits, Transformers' },
      { channelName: 'All About Electronics', topicCoverage: 'Phasor diagrams, Two-wattmeter method, Induction motors' }
    ]
  },
  {
    id: 'bec101-electronics',
    code: 'BEC101 / BEC201',
    name: 'Fundamentals of Electronics Engineering',
    shortName: 'Electronics',
    semester: 1,
    year: 1,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 3,
    ltp: '2-1-0',
    category: 'Core',
    description: 'P-N junction diodes, special purpose diodes, BJT configurations, MOSFET operation, operational amplifiers (Op-Amp 741), digital logic gates, and sensor electronics.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Semiconductor Diodes & Power Supply Applications',
        lectureHours: 8,
        topics: [
          'P-N junction diode: Energy band diagrams, barrier potential, V-I characteristics in forward and reverse bias',
          'Diode resistance: Static and dynamic resistance, transition and diffusion capacitance',
          'Diode applications: Half-wave, center-tapped full-wave and bridge rectifiers, ripple factor, efficiency, PIV',
          'Capacitor filter and C-L-C pi filter circuits',
          'Zener diode: Reverse breakdown mechanisms (Zener vs Avalanche), Zener diode as voltage regulator'
        ],
        importantPyqTopics: [
          'Full-wave bridge rectifier circuit diagram, derivation of efficiency (81.2%) and ripple factor (0.482)',
          'Zener diode as a shunt voltage regulator with numericals',
          'Clipper and clamper circuit wave-shaping diagrams'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Bipolar Junction Transistors (BJT)',
        lectureHours: 8,
        topics: [
          'BJT construction, NPN and PNP configurations, current components and working principle',
          'Transistor configurations: Common Base (CB), Common Emitter (CE), Common Collector (CC), input/output characteristics',
          'Current gain parameters (alpha, beta, gamma) and mathematical relationship',
          'DC load line, Operating point (Q-point), Transistor biasing methods: Fixed bias, Collector to base bias, Voltage divider bias',
          'Thermal runaway and stability factor (S)'
        ],
        importantPyqTopics: [
          'CE configuration input and output characteristics with active, saturation, and cut-off regions',
          'Voltage divider bias circuit analysis and stability factor derivation',
          'Derivation of relation between alpha and beta'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Field Effect Transistors (FET & MOSFET)',
        lectureHours: 8,
        topics: [
          'Junction Field Effect Transistor (JFET): Construction, n-channel vs p-channel, pinch-off voltage, drain and transfer characteristics',
          'Metal Oxide Semiconductor FET (MOSFET): Depletion MOSFET and Enhancement MOSFET construction and operation',
          'V-I transfer characteristics, threshold voltage, sub-threshold conduction',
          'Comparison of BJT vs JFET vs MOSFET',
          'CMOS inverter: Basic structure and low power consumption rationale'
        ],
        importantPyqTopics: [
          'Enhancement-type N-channel MOSFET construction and output characteristics',
          'Comparison table: BJT vs FET vs MOSFET (guaranteed in section A/B)',
          'JFET Shockley equation and pinch-off voltage definition'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Operational Amplifiers (Op-Amp 741)',
        lectureHours: 8,
        topics: [
          'Block diagram of Op-Amp, pin configuration of IC 741, ideal characteristics of Op-Amp',
          'Concepts of Virtual Ground and Virtual Short',
          'Inverting amplifier and Non-inverting amplifier configurations, closed-loop voltage gain derivations',
          'Linear applications: Summing amplifier (Adder), Difference amplifier (Subtractor), Voltage follower (Buffer)',
          'Integrator and Differentiator circuits using Op-Amp',
          'Non-linear applications: Op-Amp as a comparator'
        ],
        importantPyqTopics: [
          'Derivation of closed loop voltage gain for Inverting and Non-inverting Op-Amp',
          'Op-Amp Integrator and Differentiator circuits with input/output waveforms',
          'Ideal Op-Amp parameters (Infinite gain, infinite Ri, zero Ro, infinite CMRR, zero offset)'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Digital Logic Gates & Electronic Sensors',
        lectureHours: 8,
        topics: [
          'Number systems: Binary, Octal, Decimal, Hexadecimal conversions and 2 complement arithmetic',
          'Basic and Universal logic gates: AND, OR, NOT, NAND, NOR, XOR, XNOR truth tables',
          'De Morgan laws and Boolean algebra simplification',
          'Introduction to Sensors and Transducers: Temperature sensor (LM35, Thermocouple), Light sensor (LDR), Proximity sensors',
          'Electronic displays: LED and 7-segment display decoding'
        ],
        importantPyqTopics: [
          'Implementation of basic gates using Universal gates (NAND and NOR only)',
          'Boolean function simplification using De Morgan theorems',
          'Working principle of LDR and LM35 temperature sensor'
        ],
        weightageLevel: 'Medium'
      }
    ],
    textbooks: [
      'Robert L. Boylestad and Louis Nashelsky, "Electronic Devices and Circuit Theory", Pearson',
      'J.B. Gupta, "Basic Electronics", S.K. Kataria & Sons'
    ],
    referenceBooks: ['David A. Bell, "Electronic Devices and Circuits", Oxford University Press'],
    quantumReference: 'AKTU Quantum Series - Fundamentals of Electronics Engineering (BEC101/201)',
    recommendedPlaylists: [
      { channelName: 'All About Electronics', topicCoverage: 'Rectifiers, Zener diode, Op-Amp 741 derivations' },
      { channelName: 'Gate Smashers', topicCoverage: 'BJT, MOSFET, Number systems' }
    ]
  },
  {
    id: 'bas104-environment',
    code: 'BAS104 / BAS204',
    name: 'Environment & Ecology',
    shortName: 'EVS',
    semester: 2,
    year: 1,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 3,
    ltp: '2-0-0',
    category: 'Core',
    description: 'Interdisciplinary study of ecosystems, renewable resources, biodiversity hotspots, environmental pollution control, climate change, and sustainability laws.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Environment & Ecosystems',
        lectureHours: 6,
        topics: [
          'Definition, scope and importance of environmental studies, multidisciplinary nature',
          'Ecosystem components: Biotic (producers, consumers, decomposers) and abiotic components',
          'Ecological succession: Primary and secondary succession stages',
          'Energy flow in ecosystems: Food chains, food webs, ecological pyramids (number, biomass, energy)',
          'Major ecosystems: Forest, grassland, desert, and aquatic ecosystems'
        ],
        importantPyqTopics: [
          'Energy flow in an ecosystem and the 10 percent law',
          'Ecological Pyramids (explain why pyramid of energy is always upright)',
          'Ecological succession phases from pioneer to climax community'
        ],
        weightageLevel: 'Medium'
      },
      {
        unitNumber: 2,
        unitTitle: 'Natural Resources & Depletion',
        lectureHours: 6,
        topics: [
          'Forest resources: Deforestation causes, impacts, timber extraction, mining, and dams',
          'Water resources: Overutilization, floods, drought, conflicts over water (national & international)',
          'Mineral resources: Environmental effects of extracting and using mineral resources',
          'Food resources: World food problems, modern agriculture impacts, fertilizer-pesticide problems, water logging, salinity',
          'Energy resources: Renewable (solar, wind, biomass, hydro, geothermal) vs Non-renewable (coal, petroleum)'
        ],
        importantPyqTopics: [
          'Solar and Wind energy harvesting systems and advantages',
          'Deforestation causes and ecological consequences',
          'Water conservation techniques and Rainwater Harvesting'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Biodiversity & Conservation',
        lectureHours: 6,
        topics: [
          'Levels of biodiversity: Genetic, species, and ecosystem diversity',
          'Biogeographic classification of India, India as a mega-diversity nation',
          'Hotspots of biodiversity: Western Ghats, Indo-Burma, Himalayas',
          'Threats to biodiversity: Habitat loss, poaching of wildlife, human-wildlife conflicts',
          'Conservation of biodiversity: In-situ (National parks, sanctuaries, biosphere reserves) and Ex-situ (zoos, botanical gardens, seed banks)'
        ],
        importantPyqTopics: [
          'In-situ vs Ex-situ conservation with Indian examples',
          'Hotspots of biodiversity criteria and Indian hotspots',
          'Endangered and endemic species of India (IUCN Red list)'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Environmental Pollution & Solid Waste Management',
        lectureHours: 6,
        topics: [
          'Air pollution: Causes, effects, and control technologies (Cyclone separators, Electrostatic Precipitators)',
          'Water pollution: Sources, biochemical oxygen demand (BOD), chemical oxygen demand (COD), Eutrophication',
          'Soil and Noise pollution: Sources, permissible decibel levels, and prevention',
          'Solid waste management: Collection, segregation, composting, sanitary landfilling, incineration, 3Rs (Reduce, Reuse, Recycle)',
          'Disaster management: Floods, earthquake, cyclones, landslides'
        ],
        importantPyqTopics: [
          'BOD and COD definitions and differences in water analysis',
          'Eutrophication cause, mechanism, and impact on aquatic life',
          'Solid waste management using 3R principle and sanitary landfills'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Social Issues, Climate Change & Environmental Acts',
        lectureHours: 6,
        topics: [
          'Global environmental problems: Greenhouse effect, Global warming, Ozone layer depletion, Acid rain',
          'Sustainable development: Concept, goals, and carrying capacity',
          'Environmental Legislation in India: Environment Protection Act (1986), Air Act (1981), Water Act (1974), Wildlife Protection Act',
          'Role of Information Technology and citizen participation in environmental protection',
          'Case studies: Chipko movement, Silent Valley, Bhopal Gas Tragedy'
        ],
        importantPyqTopics: [
          'Acid rain formation reactions and damage to monuments (Taj Trapezium)',
          'Greenhouse effect and Ozone layer depletion (CFCs mechanism)',
          'Salient features of Environment Protection Act 1986'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'Erach Bharucha, "Textbook of Environmental Studies for Undergraduate Courses", Universities Press',
      'Benny Joseph, "Environmental Studies", Tata McGraw Hill'
    ],
    referenceBooks: ['R. Rajagopalan, "Environmental Studies: From Crisis to Cure", Oxford University Press'],
    quantumReference: 'AKTU Quantum Series - Environment & Ecology (BAS104/204)',
    recommendedPlaylists: [
      { channelName: 'Gate Smashers', topicCoverage: 'Air pollution, Water quality, Solid waste management' },
      { channelName: 'Knowledge Gate', topicCoverage: 'Ecosystems, Global warming, Environmental acts' }
    ]
  },

  // ===================== 2ND YEAR REMAINING SUBJECTS (SEM 3 & 4) =====================
  {
    id: 'bas303-maths4',
    code: 'BAS303 / BAS403',
    name: 'Engineering Mathematics-IV',
    shortName: 'Maths-IV',
    semester: 4,
    year: 2,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Core',
    description: 'Partial differential equations, statistical techniques, probability theory, hypothesis testing, sampling theory, and numerical solutions.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Partial Differential Equations (PDEs)',
        lectureHours: 8,
        topics: [
          'Origin of Partial Differential Equations, Linear PDEs of first order, Lagrange linear equation',
          'Non-linear PDEs of first order, Charpit method',
          'Homogeneous and non-homogeneous linear PDEs with constant coefficients',
          'Classification of second order PDEs: Parabolic, Elliptic and Hyperbolic equations',
          'Method of Separation of Variables for One-Dimensional Wave and Heat conduction equations'
        ],
        importantPyqTopics: [
          'Lagrange Linear Equation Pp + Qq = R numericals',
          'Charpit method for non-linear first order PDE (frequently repeated)',
          'One-dimensional wave equation solution by separation of variables'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Statistical Techniques & Moments',
        lectureHours: 8,
        topics: [
          'Measures of central tendency and dispersion (Mean, Variance, Standard Deviation)',
          'Moments: Raw moments, central moments, skewness and kurtosis',
          'Curve fitting: Principle of least squares, fitting of straight lines, parabolas, and exponential curves',
          'Correlation and Regression: Karl Pearson coefficient of correlation, Spearman rank correlation, regression lines'
        ],
        importantPyqTopics: [
          'Fitting a straight line y = a + bx and parabola using normal equations',
          'Karl Pearson correlation coefficient calculation from bivariate data',
          'Regression lines y on x and x on y with angle between regression lines'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Probability & Theoretical Distributions',
        lectureHours: 8,
        topics: [
          'Probability axioms, Conditional probability, Baye Theorem and applications',
          'Random variables: Discrete and Continuous random variables, Probability Mass Function (PMF), Probability Density Function (PDF)',
          'Mathematical expectation, variance, moment generating function (MGF)',
          'Discrete distributions: Binomial distribution, Poisson distribution (conditions, mean and variance)',
          'Continuous distribution: Normal distribution, properties of normal curve, standard normal variate (Z-table)'
        ],
        importantPyqTopics: [
          'Bayes Theorem word problems (medical test / manufacturing fault)',
          'Poisson distribution numericals (rare events, e^(-lambda))',
          'Normal distribution area under curve calculation using standard normal table'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Sampling & Hypothesis Testing',
        lectureHours: 8,
        topics: [
          'Sampling theory: Population, sample, random sampling, standard error',
          'Hypothesis testing: Null hypothesis (H0), Alternate hypothesis (H1), Type I and Type II errors, level of significance',
          'Large sample tests: Test of significance for single mean, difference of two means, and proportions (Z-test)',
          'Small sample tests: Student t-test for single mean and difference of means, paired t-test',
          'F-test for equality of two population variances, ANOVA one-way classification'
        ],
        importantPyqTopics: [
          'Null and Alternate hypothesis formulation with Type I/II error definitions',
          'Large sample Z-test for difference of means numericals',
          'Student t-test for small sample mean comparison'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Chi-Square Test & Numerical Methods',
        lectureHours: 8,
        topics: [
          'Chi-Square distribution: Goodness of fit test, test of independence of attributes in contingency tables',
          'Conditions for validity of Chi-Square test, degrees of freedom',
          'Numerical methods for algebraic and transcendental equations: Bisection method, Newton-Raphson method',
          'Numerical solution of ordinary differential equations: Euler method, Runge-Kutta 4th order (RK-4) method'
        ],
        importantPyqTopics: [
          'Chi-Square test for Goodness of Fit and 2x2 contingency table independence',
          'Newton-Raphson formula derivation and root calculation to 3 decimal places',
          'Runge-Kutta 4th order (RK-4) method numericals'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'B.S. Grewal, "Higher Engineering Mathematics", Khanna Publishers',
      'S.C. Gupta and V.K. Kapoor, "Fundamentals of Mathematical Statistics", Sultan Chand & Sons'
    ],
    referenceBooks: ['Erwin Kreyszig, "Advanced Engineering Mathematics", Wiley'],
    quantumReference: 'AKTU Quantum Series - Engineering Mathematics-IV (BAS303/403) 2nd Year',
    recommendedPlaylists: [
      { channelName: 'Gajendra Purohit', topicCoverage: 'Maths 4 complete series: PDEs, Statistics, Chi-Square, RK4' },
      { channelName: 'Bhagwan Singh Vishwakarma', topicCoverage: 'Probability distributions and Hypothesis testing' }
    ]
  },
  {
    id: 'bas301-technical-comm',
    code: 'BAS301 / BAS401',
    name: 'Technical Communication',
    shortName: 'Tech Comm',
    semester: 3,
    year: 2,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 3,
    ltp: '2-1-0',
    category: 'Core',
    description: 'Professional workplace communication, engineering reports, proposals, research papers, technical presentation skills, and ethical corporate competence.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Fundamentals of Technical Communication',
        lectureHours: 6,
        topics: [
          'Technical communication: Definition, nature, scope and role in engineering',
          'Distinction between General Communication and Technical Communication',
          'Communication Process: Sender, encoding, channel, decoding, receiver, feedback, and noise',
          'Barriers to Communication: Intrapersonal, interpersonal, physical, cultural, and semantic barriers',
          'Language as a tool of communication: Precision, objectivity, clarity, and conciseness'
        ],
        importantPyqTopics: [
          'Process of communication block diagram with components',
          'Barriers to technical communication and methods to overcome them',
          'General vs Technical communication comparison'
        ],
        weightageLevel: 'Medium'
      },
      {
        unitNumber: 2,
        unitTitle: 'Forms of Technical Writing',
        lectureHours: 8,
        topics: [
          'Technical Reports: Definition, importance, objectives, types of reports (Formal, Informal, Informational, Analytical)',
          'Structure of a Formal Report: Front matter, Main body, Back matter',
          'Technical Proposals: Definition, purpose, types (Solicited, Unsolicited), standard structure of research/industrial proposals',
          'Technical Research Papers: Abstract, Introduction, Literature Review, Methodology, Results, Discussion, References (IEEE/APA)',
          'Technical Manuals, Instructions, and User specifications'
        ],
        importantPyqTopics: [
          'Structure and components of a Formal Technical Report (guaranteed 10 marks)',
          'Proposal writing: Structure of a technical project proposal',
          'Writing an abstract and literature review methodology'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Technical Correspondence & Digital Etiquette',
        lectureHours: 6,
        topics: [
          'Business Letters: Inquiries, Quotations, Orders, Complaints, Adjustment letters, Credit letters',
          'Job Application Letters and Resume / Curriculum Vitae (Chronological, Functional, Hybrid)',
          'Official Memos, Office Orders, Circulars, and Notices',
          'Email Etiquette: Netiquette, subject lines, attachments, CC/BCC, formal tone and security',
          'Minutes of the Meeting (MoM) and Agenda preparation'
        ],
        importantPyqTopics: [
          'Drafting a Resume accompanied by a Job Application Cover Letter',
          'Drafting an official complaint/adjustment business letter',
          'Agenda and Minutes of Meeting (MoM) structure'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Technical Presentation & Oral Skills',
        lectureHours: 6,
        topics: [
          'Presentation Skills: Planning, preparation, rehearsal, presentation delivery (Nuances of delivery)',
          'Audience analysis, time management, and handling Q&A sessions',
          'Visual Aids: PPT slides design, infographics, tables, charts, and avoid slide overload',
          'Kinesics (Body language), Proxemics (Space), Chronemics (Time), and Paralinguistic features (Pitch, tone, modulation)',
          'Group Discussions (GD): Roles of participants, leadership traits, evaluation parameters',
          'Job Interviews: Types of interviews, behavioral interview questions (STAR technique)'
        ],
        importantPyqTopics: [
          'Non-verbal communication: Kinesics, Proxemics, and Paralanguage',
          'Do and Don’ts in a corporate Group Discussion (GD)',
          'STAR technique for answering job interview questions'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Linguistic Competence & Professional Ethics',
        lectureHours: 6,
        topics: [
          'Nuances of English Grammar: Subject-verb agreement, active and passive voice, prepositions, dangling modifiers',
          'Vocabulary building: Technical jargon, idiomatic phrases, collocations, one-word substitutes',
          'Comprehension and Précis writing rules and techniques',
          'Ethics in technical communication: Plagiarism (types and prevention), copyright, intellectual property rights (IPR), professional integrity'
        ],
        importantPyqTopics: [
          'Rules of Précis writing with a practical passage',
          'Plagiarism definitions, consequences, and methods of prevention',
          'Spotting errors in subject-verb agreement and voice'
        ],
        weightageLevel: 'Medium'
      }
    ],
    textbooks: [
      'Meenakshi Raman and Sangeeta Sharma, "Technical Communication: Principles and Practice", Oxford University Press',
      'M. Ashraf Rizvi, "Effective Technical Communication", Tata McGraw Hill'
    ],
    referenceBooks: ['Andrea J. Rutherfoord, "Basic Communication Skills for Technology", Pearson'],
    quantumReference: 'AKTU Quantum Series - Technical Communication (BAS301/401) 2nd Year',
    recommendedPlaylists: [
      { channelName: 'Gate Smashers', topicCoverage: 'Technical communication concepts and letter writing' }
    ]
  },
  {
    id: 'knc301-cyber-security',
    code: 'KNC301 / KNC401',
    name: 'Cyber Security',
    shortName: 'Cyber Sec',
    semester: 3,
    year: 2,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 0,
    ltp: '2-0-0',
    category: 'Core',
    description: 'Foundations of information security, cybercrimes, hacking techniques, electronic commerce vulnerabilities, Indian IT Act 2000, and defensive security architectures.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Introduction to Information Systems & Cyber Security',
        lectureHours: 6,
        topics: [
          'Basics of Information Systems: Components, people, data, hardware, software, networks',
          'CIA Triad: Confidentiality, Integrity, Availability, Non-repudiation, Authentication, Authorization',
          'Cyber Security definition, need, global cyber landscape, and threat actors',
          'Security threats and vulnerabilities: Malware (Viruses, Worms, Trojan Horses, Ransomware, Spyware)',
          'Attack taxonomy: Passive attacks (Eavesdropping, Traffic analysis) vs Active attacks (Masquerade, Replay, DoS, DDoS)'
        ],
        importantPyqTopics: [
          'CIA Triad with real-world banking examples',
          'Active vs Passive attacks comparison with diagrams',
          'Differences between Virus, Worm, and Trojan Horse'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Cyber Crimes & Cyber Offenses',
        lectureHours: 6,
        topics: [
          'Classification of Cybercrimes: Crimes against individuals, property, and society/government',
          'Social Engineering attacks: Phishing, Spear phishing, Vishing, Smishing, Whaling, Baiting',
          'Cyber stalking, Cyber bullying, Identity theft, Credit card fraud, Software piracy',
          'Botnets, Zombie computers, SQL Injection, Cross-Site Scripting (XSS), Man-in-the-Middle (MitM) attacks',
          'Mobile and wireless threats: Wi-Fi eavesdropping, Evil twin attacks, Rogue access points'
        ],
        importantPyqTopics: [
          'Social engineering techniques and defense mechanisms',
          'SQL Injection attack mechanism and prevention',
          'Denial of Service (DoS) vs Distributed DoS (DDoS) botnet architecture'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Cyber Law & The Indian IT Act 2000',
        lectureHours: 6,
        topics: [
          'Need for Cyber Law, Cyber jurisprudence, and UNCITRAL model law',
          'Information Technology Act 2000: Objectives, scope, jurisdiction, and historical background',
          'Digital Signatures vs Electronic Signatures, Certifying Authorities (CAs), Public key infrastructure',
          'Offenses under IT Act 2000: Section 43 (Damage to computer system), Section 65 (Tampering with source documents), Section 66 (Hacking), Section 66A to 66F, Section 67 (Pornography)',
          'Information Technology (Amendment) Act 2008 and intermediary guidelines'
        ],
        importantPyqTopics: [
          'Salient features of Indian IT Act 2000 and Section 66 offenses',
          'Digital Signature legal recognition and verification procedure',
          'Role of Certifying Authorities (CA) and Controller of Certifying Authorities (CCA)'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'E-Commerce & Digital Payment Security',
        lectureHours: 6,
        topics: [
          'Electronic Commerce: Framework, B2B, B2C, C2C architectures and security risks',
          'Digital payment systems: Credit/Debit cards, UPI, Digital wallets, Net banking security',
          'Payment Gateway architecture, SET (Secure Electronic Transaction) protocol, 3D Secure verification',
          'Vulnerabilities in mobile banking and online transactions, OTP interception, SIM swapping',
          'Privacy and data protection principles (GDPR basics)'
        ],
        importantPyqTopics: [
          'Security issues in E-Commerce and measures for safe online transactions',
          'Architecture of Payment Gateways and credit card processing',
          'SIM swapping fraud and defensive measures'
        ],
        weightageLevel: 'Medium'
      },
      {
        unitNumber: 5,
        unitTitle: 'Security Management & Defensive Tools',
        lectureHours: 6,
        topics: [
          'Security tools: Firewalls (Packet filtering, Stateful inspection, Application proxy)',
          'Intrusion Detection Systems (IDS) vs Intrusion Prevention Systems (IPS)',
          'Virtual Private Networks (VPN): Tunneling protocols (IPsec, SSL/TLS)',
          'Antivirus software, Patch management, Security audits, and vulnerability scanning (Nmap, Wireshark)',
          'Incident response, Cyber forensics overview, and evidence preservation'
        ],
        importantPyqTopics: [
          'Types of Firewalls and their operational layers in OSI model',
          'IDS vs IPS comparison and Host-based vs Network-based IDS',
          'VPN working principle and IPsec protocols'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'Nina Godbole and Sunit Belapure, "Cyber Security: Understanding Cyber Crimes, Computer Forensics and Legal Perspectives", Wiley',
      'Pawan Duggal, "Legal Framework of Information Technology", Universal Law Publishing'
    ],
    referenceBooks: ['William Stallings, "Cryptography and Network Security", Pearson'],
    quantumReference: 'AKTU Quantum Series - Cyber Security (KNC301/401) 2nd Year',
    recommendedPlaylists: [
      { channelName: 'Gate Smashers', topicCoverage: 'Cyber security threats, CIA triad, Firewalls' },
      { channelName: 'Knowledge Gate', topicCoverage: 'IT Act 2000 sections, Phishing, DoS attacks' }
    ]
  },
  {
    id: 'bcc301-python',
    code: 'BCC301 / BCC401',
    name: 'Python Programming',
    shortName: 'Python',
    semester: 3,
    year: 2,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 3,
    ltp: '2-0-2',
    category: 'Core',
    description: 'Python syntax, control flow, functions, sequences, dictionaries, file I/O, OOP, exception handling, and introductory scientific libraries (NumPy, Pandas, Matplotlib).',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Introduction to Python & Core Syntax',
        lectureHours: 6,
        topics: [
          'History, features, Python 3 vs Python 2, execution mechanism (Bytecode & PVM)',
          'Variables, dynamic typing, keywords, built-in data types (int, float, complex, str, bool)',
          'Operators: Arithmetic, Relational, Logical, Bitwise, Assignment, Membership (in, not in), Identity (is, is not)',
          'Control Flow: if-elif-else conditionals, while loop, for loop, range() function',
          'Loop control statements: break, continue, pass, else clause with loops'
        ],
        importantPyqTopics: [
          'Python architecture: Source code -> Bytecode -> PVM',
          'Membership and Identity operators with examples',
          'Writing programs for Fibonacci, Prime numbers, and Armstrong numbers'
        ],
        weightageLevel: 'Medium'
      },
      {
        unitNumber: 2,
        unitTitle: 'Functions, Scopes & Modules',
        lectureHours: 6,
        topics: [
          'Defining and calling functions, def statement, return values',
          'Function arguments: Positional, keyword, default parameters, variable-length arguments (*args, **kwargs)',
          'Lambda expressions (Anonymous functions), map(), filter(), and reduce()',
          'Scope of variables: Local, Enclosing, Global, Built-in (LEGB rule), global and nonlocal keywords',
          'Modules: import statement, math, random, datetime, creating and using custom modules and packages'
        ],
        importantPyqTopics: [
          '*args and **kwargs in Python function definitions with code examples',
          'Lambda functions with map() and filter() programs',
          'LEGB variable scope rule in Python'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Data Structures: Strings, Lists, Tuples, Dictionaries & Sets',
        lectureHours: 8,
        topics: [
          'Strings: Slicing, immutability, format(), f-strings, methods (split, join, find, replace, strip)',
          'Lists: Mutable sequences, list slicing, methods (append, extend, insert, pop, remove, sort), List Comprehensions',
          'Tuples: Immutable sequences, packing and unpacking, singleton tuples',
          'Dictionaries: Key-value pairs, hashability of keys, dictionary methods, Dictionary Comprehensions',
          'Sets: Unordered unique elements, set operations (union, intersection, difference, symmetric difference)'
        ],
        importantPyqTopics: [
          'List comprehension and dictionary comprehension syntax and programs',
          'Differences between List and Tuple, and Mutable vs Immutable types',
          'Dictionary manipulation programs (word frequency counter)'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'File Handling & Exception Handling',
        lectureHours: 6,
        topics: [
          'File I/O: Opening files, modes (r, w, a, r+, rb, wb), read(), readline(), readlines(), write(), writelines()',
          'The with statement (context managers) for safe resource handling',
          'File pointer navigation: seek() and tell() methods, CSV and JSON file reading',
          'Exception handling: try, except, else, finally blocks, catching specific exceptions',
          'Raising exceptions with raise, assert statements, creating custom user-defined exception classes'
        ],
        importantPyqTopics: [
          'Handling files with the `with` statement and seek()/tell() methods',
          'Structure of try-except-else-finally blocks with flow of execution',
          'Creating user-defined exceptions inheriting from Exception'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Object-Oriented Programming & Data Libraries',
        lectureHours: 8,
        topics: [
          'OOP in Python: Classes, objects, __init__() constructor, self parameter, instance vs class variables',
          'Inheritance: Single, multiple, multilevel, hierarchical, super() function, Method Resolution Order (MRO)',
          'Polymorphism, method overriding, operator overloading with magic dunder methods (__add__, __str__)',
          'Encapsulation: Public, protected (_), and private (__) variables, name mangling',
          'Introduction to NumPy (arrays, broadcasting) and Pandas (Series, DataFrame basics), Matplotlib plotting'
        ],
        importantPyqTopics: [
          'Multiple inheritance in Python and Method Resolution Order (MRO / C3 linearization)',
          'Operator overloading using special dunder methods with a Vector/Complex number class',
          'Basic array creation and slicing in NumPy'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'Reema Thareja, "Python Programming: Using Problem Solving Approach", Oxford University Press',
      'Y. Daniel Liang, "Introduction to Programming Using Python", Pearson'
    ],
    referenceBooks: ['Mark Lutz, "Learning Python", O Reilly Media'],
    quantumReference: 'AKTU Quantum Series - Python Programming (BCC301/401) 2nd Year',
    recommendedPlaylists: [
      { channelName: 'CodeWithHarry', topicCoverage: 'Python complete beginner to advanced playlist' },
      { channelName: 'Gate Smashers', topicCoverage: 'Python for university exams, OOP, File handling' }
    ]
  },

  // ===================== 3RD YEAR SUBJECTS (SEM 5 & 6) =====================
  {
    id: 'kcs502-compiler',
    code: 'BCS503 / KCS502',
    name: 'Compiler Design',
    shortName: 'CD',
    semester: 5,
    year: 3,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Core',
    description: 'Phases of a compiler, lexical analysis (LEX), syntax analysis (LL, LR parsers), syntax-directed translation, symbol tables, code optimization, and code generation.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Introduction to Compilers & Lexical Analysis',
        lectureHours: 8,
        topics: [
          'Language processors: Translators, Compilers, Interpreters, Assemblers, Preprocessors, Linker/Loader',
          'Phases of a Compiler: Analysis-Synthesis model, Lexical, Syntax, Semantic, Intermediate Code, Code Optimization, Code Generation',
          'Passes of a compiler (Single-pass vs Multi-pass), Compiler construction tools (LEX, YACC)',
          'Lexical Analysis: Role of lexical analyzer, tokens, patterns, lexemes, input buffering (two-buffer scheme, sentinels)',
          'Specification of tokens using Regular Expressions, Recognition using Finite Automata (DFA, NFA), Thompson construction'
        ],
        importantPyqTopics: [
          'Phases of a compiler with a step-by-step trace of a sample assignment statement: position = initial + rate * 60',
          'Role of Lexical Analyzer and input buffering mechanism',
          'Conversion of Regular Expression to DFA using direct method or Thompson NFA'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Syntax Analysis & Parsing Techniques',
        lectureHours: 9,
        topics: [
          'Role of Parser, Context-Free Grammars (CFG), Derivations, Parse trees, Ambiguity elimination',
          'Top-Down Parsing: Recursive Descent Parser, Predictive Parser, FIRST and FOLLOW sets computation',
          'LL(1) Grammars: Construction of LL(1) parsing table, non-recursive predictive parsing algorithm',
          'Bottom-Up Parsing: Shift-Reduce parsing, Operator Precedence parsing, Handle pruning, Viable prefixes',
          'LR Parsers: LR(0) items, Simple LR (SLR(1)) parsing table construction and conflicts',
          'Canonical LR (CLR(1)) and Lookahead LR (LALR(1)) parsing table construction'
        ],
        importantPyqTopics: [
          'Computation of FIRST and FOLLOW sets for given CFG (guaranteed numerical)',
          'Construction of LL(1) parsing table and checking if grammar is LL(1)',
          'Construction of SLR(1) and CLR(1) parsing tables with conflict analysis (Shift-Reduce, Reduce-Reduce)'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Syntax-Directed Translation & Intermediate Code',
        lectureHours: 8,
        topics: [
          'Syntax-Directed Definitions (SDD): Synthesized attributes vs Inherited attributes, S-attributed and L-attributed SDDs',
          'Syntax-Directed Translation (SDT) schemes, evaluation orders for SDDs, dependency graphs',
          'Intermediate Code Generation: Benefits, Intermediate representations (AST, DAG, Postfix notation)',
          'Three-Address Code (TAC): Quadruples, Triples, and Indirect Triples representations',
          'Translation of expressions, Boolean expressions, and control flow statements (Backpatching technique)'
        ],
        importantPyqTopics: [
          'S-attributed vs L-attributed definitions with examples',
          'Generating Three-Address Code and representing in Quadruples, Triples, and Indirect Triples',
          'Backpatching for Boolean expressions and flow-of-control statements'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Run-Time Storage Organization & Symbol Tables',
        lectureHours: 7,
        topics: [
          'Storage organization: Code, Static, Heap, Stack memory areas',
          'Activation Records (Stack frame): Components (return address, control link, access link, local data, temporaries)',
          'Storage allocation strategies: Static allocation, Stack-based allocation, Dynamic heap allocation',
          'Parameter passing mechanisms: Call by value, Call by reference, Call by copy-restore, Call by name',
          'Symbol Table management: Data structures for symbol tables (Hash tables, binary search trees), attributes stored'
        ],
        importantPyqTopics: [
          'Structure of an Activation Record and function call sequence',
          'Static vs Stack vs Heap storage allocation comparison',
          'Symbol Table requirements and organization using Hash tables'
        ],
        weightageLevel: 'Medium'
      },
      {
        unitNumber: 5,
        unitTitle: 'Code Optimization & Target Code Generation',
        lectureHours: 8,
        topics: [
          'Principal sources of code optimization: Compile-time evaluation, Common subexpression elimination, Dead code elimination, Copy propagation',
          'Loop optimization: Frequency reduction (Code motion), Induction variable elimination, Loop unrolling',
          'Basic Blocks and Flow Graphs: Leader identification, construction of control flow graph (CFG)',
          'DAG representation of Basic Blocks for local optimization',
          'Target Code Generation: Issues in design, target machine architecture, simple code generator algorithm, Register allocation and assignment'
        ],
        importantPyqTopics: [
          'Identification of Basic Blocks and drawing Control Flow Graphs (CFG)',
          'DAG construction for a Basic Block and subexpression elimination',
          'Loop optimization techniques (Code motion, Induction variables, Loop unrolling)'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman, "Compilers: Principles, Techniques, and Tools", Pearson',
      'K.D. Cooper and Linda Torczon, "Engineering a Compiler", Morgan Kaufmann'
    ],
    referenceBooks: ['Dhamdhere, "Systems Programming and Operating Systems", Tata McGraw Hill'],
    quantumReference: 'AKTU Quantum Series - Compiler Design (BCS503/KCS502) 3rd Year CSE',
    recommendedPlaylists: [
      { channelName: 'Gate Smashers', topicCoverage: 'Compiler Design complete course: Parsing, LR tables, SDT' },
      { channelName: 'Knowledge Gate', topicCoverage: 'LL(1), CLR, LALR parsing and Three-Address code' }
    ]
  },
  {
    id: 'kcs601-cn',
    code: 'BCS601 / KCS601',
    name: 'Computer Networks',
    shortName: 'CN',
    semester: 6,
    year: 3,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Core',
    description: 'OSI and TCP/IP layered architectures, Physical and Data Link Layer framing, MAC protocols, IP addressing, routing algorithms, transport layer protocols (TCP, UDP), and application services.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Network Models & Physical / Data Link Layer',
        lectureHours: 8,
        topics: [
          'Network topologies, categories of networks (LAN, MAN, WAN), transmission media (Twisted pair, Coaxial, Optical Fiber, Wireless)',
          'Layered architecture: ISO-OSI 7-layer reference model vs TCP/IP 4-layer model (functions of each layer)',
          'Data Link Layer design issues: Framing (Character count, Byte stuffing, Bit stuffing), Error control, Flow control',
          'Error detection and correction: Parity check, Checksum, Cyclic Redundancy Check (CRC with polynomial division), Hamming code',
          'Elementary Data Link protocols: Unrestricted Simplex, Stop-and-Wait protocol',
          'Sliding Window protocols: Stop-and-Wait ARQ, Go-Back-N ARQ, Selective Repeat ARQ (efficiency & window sizes)'
        ],
        importantPyqTopics: [
          'OSI model vs TCP/IP model comparison with functions of each layer (guaranteed 10 marks)',
          'Cyclic Redundancy Check (CRC) calculation numericals with generator polynomial',
          'Go-Back-N vs Selective Repeat ARQ comparison and efficiency formulas'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Medium Access Control (MAC) Sublayer',
        lectureHours: 8,
        topics: [
          'Channel allocation problem: Static vs Dynamic channel allocation',
          'Multiple Access Protocols: Random Access (Pure ALOHA, Slotted ALOHA throughput derivations)',
          'Carrier Sense Multiple Access (CSMA): 1-persistent, Non-persistent, p-persistent, CSMA/CD (Collision Detection), CSMA/CA (Collision Avoidance)',
          'Collision-Free protocols: Bit-map protocol, Binary countdown',
          'Ethernet: IEEE 802.3 Ethernet frame format, Fast Ethernet, Gigabit Ethernet',
          'Wireless LAN: IEEE 802.11 (Wi-Fi) architecture, Hidden and Exposed Terminal Problems'
        ],
        importantPyqTopics: [
          'Pure ALOHA (S = Ge^(-2G)) vs Slotted ALOHA (S = Ge^(-G)) throughput derivations',
          'CSMA/CD protocol working mechanism, minimum frame size formula L >= 2 * Tp * B',
          'Hidden and Exposed Station problems and solution using RTS/CTS frames'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Network Layer & IP Addressing',
        lectureHours: 9,
        topics: [
          'Network layer design issues: Store-and-forward packet switching, Connectionless (Datagram) vs Connection-oriented (Virtual Circuit) service',
          'IPv4 Addressing: Classful addressing (Class A, B, C, D, E), Subnetting, Supernetting, CIDR notation',
          'IPv4 Datagram Header format, Header fields, Fragmentation and Reassembly',
          'IPv6 Address structure, benefits over IPv4, transition from IPv4 to IPv6 (Dual stack, Tunneling)',
          'Routing algorithms: Shortest path routing (Dijkstra algorithm), Distance Vector Routing (Bellman-Ford, Count-to-Infinity problem), Link State Routing (OSPF)',
          'Routing protocols: Intra-domain (RIP, OSPF) vs Inter-domain (BGP), ARP and RARP protocols'
        ],
        importantPyqTopics: [
          'Subnetting numericals: Finding subnet mask, network ID, broadcast address, and host range (guaranteed 10 marks)',
          'IPv4 Header format diagram and explanation of all fields',
          'Distance Vector Routing and the Count-to-Infinity problem'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Transport Layer Protocols',
        lectureHours: 8,
        topics: [
          'Transport Layer services: Process-to-process delivery, Multiplexing and Demultiplexing, Socket addressing',
          'User Datagram Protocol (UDP): Connectionless service, Header format, checksum, use cases (DNS, streaming)',
          'Transmission Control Protocol (TCP): Connection-oriented service, Segment header format, 3-Way Handshake connection establishment and termination',
          'TCP Flow Control: Sliding window mechanism, Silly Window Syndrome',
          'TCP Congestion Control: Leaky Bucket and Token Bucket algorithms, Additive Increase Multiplicative Decrease (AIMD), Slow Start, Congestion Avoidance, Fast Retransmit, Fast Recovery'
        ],
        importantPyqTopics: [
          'TCP vs UDP detailed comparison table with header diagrams',
          'TCP 3-Way Handshake connection establishment and 4-way connection termination diagrams',
          'TCP Congestion Control phases: Slow Start, Congestion Avoidance, Threshold adjustment'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Application Layer Protocols & Network Security',
        lectureHours: 7,
        topics: [
          'Domain Name System (DNS): Hierarchical namespace, Resource records, Iterative vs Recursive query resolution',
          'Hypertext Transfer Protocol (HTTP): HTTP 1.0 vs 1.1 vs 2.0, Persistent vs Non-persistent connections, Request/Response headers, Cookies and Caching',
          'Electronic Mail: Architecture, User Agent, Message Transfer Agent, SMTP, POP3, IMAP protocols',
          'File Transfer Protocol (FTP): Control and Data connections, active vs passive mode',
          'Network Security overview: Symmetric vs Asymmetric key cryptography, Public Key Infrastructure, SSL/TLS handshake overview, Firewalls'
        ],
        importantPyqTopics: [
          'DNS resolution process: Recursive query vs Iterative query with diagrams',
          'SMTP, POP3, and IMAP roles in email delivery architecture',
          'FTP two-connection architecture (Port 20 and Port 21)'
        ],
        weightageLevel: 'Medium'
      }
    ],
    textbooks: [
      'Andrew S. Tanenbaum and David J. Wetherall, "Computer Networks", Pearson',
      'Behrouz A. Forouzan, "Data Communications and Networking", McGraw Hill'
    ],
    referenceBooks: ['James F. Kurose and Keith W. Ross, "Computer Networking: A Top-Down Approach", Pearson'],
    quantumReference: 'AKTU Quantum Series - Computer Networks (BCS601/KCS601) 3rd Year CSE',
    recommendedPlaylists: [
      { channelName: 'Gate Smashers', topicCoverage: 'Complete Computer Networks: Subnetting, OSI, TCP/IP, Routing' },
      { channelName: 'Knowledge Gate', topicCoverage: 'IP addressing, CRC, Sliding window protocols' }
    ]
  },
  {
    id: 'kcs602-se',
    code: 'BCS602 / KCS602',
    name: 'Software Engineering',
    shortName: 'SE',
    semester: 6,
    year: 3,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT'],
    credits: 3,
    ltp: '3-0-0',
    category: 'Core',
    description: 'Software development life cycle (SDLC), process models (Agile, Scrum, Waterfall), requirement engineering (SRS), software design, testing methodologies, and project metrics.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Software Process & Life Cycle Models',
        lectureHours: 8,
        topics: [
          'Software crisis, Software engineering definition, characteristics, and layered technology',
          'Software Development Life Cycle (SDLC) phases: Inception, Requirement, Design, Coding, Testing, Maintenance',
          'Prescriptive Process Models: Waterfall model (classical & iterative), Prototyping model, Evolutionary models, Spiral model',
          'Agile Development: Agile manifesto, values and principles, Extreme Programming (XP), Scrum framework (Sprints, Product Backlog, Scrum Master, Daily Standup)',
          'Comparison of traditional vs Agile approaches'
        ],
        importantPyqTopics: [
          'Spiral Model: 4 quadrants, risk analysis, advantages and limitations (guaranteed)',
          'Waterfall model vs Agile Scrum methodology comparison',
          'Agile Manifesto 4 core values and 12 principles'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Software Requirements Engineering (SRS)',
        lectureHours: 8,
        topics: [
          'Requirement Engineering process: Inception, Elicitation, Elaboration, Negotiation, Specification, Validation, Management',
          'Functional vs Non-Functional Requirements (FURPS model)',
          'Software Requirement Specification (SRS): Characteristics of a good SRS (IEEE 830 standard format)',
          'Analysis modeling: Data Flow Diagrams (DFD Level 0, Level 1, Level 2), Data Dictionary, Entity-Relationship (ER) diagrams',
          'Use Case modeling: Actors, Use Case diagrams, relationships (include, extend, generalization)'
        ],
        importantPyqTopics: [
          'IEEE 830 standard format for SRS document and characteristics of a good SRS',
          'Functional vs Non-Functional requirements with college portal examples',
          'Data Flow Diagram (DFD Level 0 and Level 1) for a Library / Hospital / Examination system'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Software Design & Architectural Patterns',
        lectureHours: 8,
        topics: [
          'Design engineering concepts: Abstraction, Architecture, Patterns, Modularity, Information Hiding, Functional Independence',
          'Cohesion and Coupling: Types of Cohesion (Coincidental to Functional), Types of Coupling (Content to Data), High Cohesion & Low Coupling rule',
          'Architectural styles: Layered, Client-Server, Repository, Pipe and Filter architecture',
          'Object-Oriented Design using UML: Class diagrams, Sequence diagrams, State machine diagrams, Activity diagrams',
          'User Interface (UI) design principles and Golden rules (Theo Mandel)'
        ],
        importantPyqTopics: [
          'Cohesion vs Coupling: Definitions, types, and why high cohesion and low coupling is desirable',
          'UML Class diagram and Sequence diagram for an online system',
          'Theo Mandel Golden Rules of User Interface Design'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Software Testing Strategies & Techniques',
        lectureHours: 8,
        topics: [
          'Software testing fundamentals: Verification vs Validation, Error, Fault, Failure definitions, Test cases, Test suite',
          'Black-Box Testing: Equivalence Class Partitioning (ECP), Boundary Value Analysis (BVA), Cause-Effect graphing',
          'White-Box Testing: Basis Path Testing, Cyclomatic Complexity calculation (McCabe), Control structure testing (Condition, Data flow, Loop testing)',
          'Testing levels: Unit testing, Integration testing (Top-down, Bottom-up, Big-Bang), System testing, Acceptance testing (Alpha and Beta testing)',
          'Regression testing and automated testing concepts'
        ],
        importantPyqTopics: [
          'Boundary Value Analysis (BVA) and Equivalence Class Partitioning (ECP) numericals',
          'Cyclomatic Complexity calculation (V(G) = E - N + 2P) and basis paths determination',
          'Alpha testing vs Beta testing and Verification vs Validation'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Software Project Management & Quality Assurance',
        lectureHours: 8,
        topics: [
          'Software project estimation: LOC (Lines of Code), FP (Function Point analysis and formula)',
          'Empirical estimation models: COCOMO model (Basic, Intermediate, Detailed), Organic, Semidetached, Embedded modes',
          'Project scheduling: Work Breakdown Structure (WBS), Gantt charts, PERT/CPM network analysis',
          'Software Quality Assurance (SQA): SEI Capability Maturity Model Integration (CMMI 5 levels), ISO 9001 standard',
          'Software Maintenance: Corrective, Adaptive, Perfective, Preventive maintenance, Reverse engineering'
        ],
        importantPyqTopics: [
          'COCOMO Model formulas: Effort and Development time calculation for Organic and Semidetached modes',
          'Function Point (FP) calculation formula and components',
          'SEI-CMMI 5 levels of software process maturity (Initial to Optimizing)'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'Roger S. Pressman, "Software Engineering: A Practitioner Approach", McGraw Hill',
      'Pankaj Jalote, "An Integrated Approach to Software Engineering", Springer'
    ],
    referenceBooks: ['Ian Sommerville, "Software Engineering", Pearson'],
    quantumReference: 'AKTU Quantum Series - Software Engineering (BCS602/KCS602) 3rd Year CSE',
    recommendedPlaylists: [
      { channelName: 'Gate Smashers', topicCoverage: 'Software engineering SDLC, Testing, COCOMO, CMMI' },
      { channelName: 'Knowledge Gate', topicCoverage: 'Cyclomatic complexity, Function point analysis, Agile' }
    ]
  },
  {
    id: 'kcs603-web-tech',
    code: 'BCS603 / KCS603',
    name: 'Web Technology',
    shortName: 'Web Tech',
    semester: 6,
    year: 3,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT'],
    credits: 3,
    ltp: '2-0-2',
    category: 'Core',
    description: 'Modern front-end web markup, responsive styling, client-side JavaScript, DOM events, server-side programming with Node.js / Servlets, and RESTful web services.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'HTML5, CSS3 & Responsive Web Design',
        lectureHours: 6,
        topics: [
          'Web basics: Web browsers, Web servers, HTTP protocol, URL anatomy, DNS lookup',
          'HTML5 semantic markup: header, nav, section, article, aside, footer, figure, audio, video elements',
          'HTML5 Forms: Form controls, input types (email, date, number), validation attributes',
          'CSS3: Selectors, Box model, Flexbox layout, CSS Grid, media queries for responsive layouts',
          'CSS3 transitions, animations, and typography'
        ],
        importantPyqTopics: [
          'HTML5 semantic elements vs non-semantic divs and spans',
          'CSS Box Model diagram: content, padding, border, margin',
          'CSS Media Queries syntax for responsive layouts across mobile, tablet, and desktop'
        ],
        weightageLevel: 'Medium'
      },
      {
        unitNumber: 2,
        unitTitle: 'JavaScript & Document Object Model (DOM)',
        lectureHours: 8,
        topics: [
          'JavaScript syntax: Variables (var, let, const), data types, operators, functions, arrow functions',
          'DOM manipulation: Selecting elements (getElementById, querySelector), modifying attributes, styles, innerHTML',
          'Event handling: Event listeners, Event propagation (Bubbling vs Capturing), form validation using JS',
          'Asynchronous JavaScript: Callbacks, Promises, async/await, Fetch API for AJAX requests',
          'JSON (JavaScript Object Notation): Syntax, JSON.parse() and JSON.stringify()'
        ],
        importantPyqTopics: [
          'Client-side form validation script using JavaScript',
          'Event Bubbling vs Event Capturing with diagrams',
          'Promises vs Async/Await in modern JavaScript with examples'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'XML, AJAX & Client-Server Integration',
        lectureHours: 6,
        topics: [
          'XML: Syntax rules, elements, attributes, well-formed vs valid XML documents',
          'XML Schema Definition (XSD) and Document Type Definition (DTD)',
          'AJAX (Asynchronous JavaScript and XML): XMLHttpRequest object, readyState, status codes',
          'RESTful Web Services: Principles, HTTP methods (GET, POST, PUT, DELETE), statelessness, REST vs SOAP',
          'Web security: Cross-Origin Resource Sharing (CORS), Cross-Site Scripting (XSS), SQL Injection'
        ],
        importantPyqTopics: [
          'AJAX working mechanism with XMLHttpRequest or Fetch API code',
          'REST vs SOAP comparison table',
          'Well-formed XML vs Valid XML rules and DTD structure'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Server-Side Web Programming',
        lectureHours: 8,
        topics: [
          'Server-side architecture: Client-Server request-response cycle, CGI vs Server-side runtimes',
          'Node.js fundamentals: Event-driven architecture, non-blocking I/O, npm, creating an HTTP server',
          'Express.js framework: Routing, middleware, handling request parameters and JSON bodies',
          'Alternative server-side: Java Servlets / JSP life cycle, doGet() and doPost() methods',
          'Session management: Cookies, Sessions, URL rewriting, hidden form fields'
        ],
        importantPyqTopics: [
          'Servlet Life Cycle methods: init(), service(), destroy()',
          'Session management techniques in web applications (Cookies vs HTTP Session)',
          'Building a simple REST API endpoint in Node.js / Express'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Database Connectivity & Web Security',
        lectureHours: 8,
        topics: [
          'Web database connectivity: Connecting web servers to relational databases (MySQL / PostgreSQL / SQLite)',
          'CRUD operations via server scripts, connection pooling',
          'User authentication: Passwords hashing (bcrypt), JSON Web Tokens (JWT) structure and verification',
          'Web deployment: Web servers (Apache, Nginx), reverse proxies, SSL/TLS certificates (HTTPS)',
          'Introduction to modern Single Page Application (SPA) concepts'
        ],
        importantPyqTopics: [
          'JSON Web Token (JWT) architecture: Header, Payload, Signature',
          'Database connectivity CRUD operations from a server script',
          'HTTPS vs HTTP and role of SSL/TLS certificates'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'Uttam K. Roy, "Web Technologies", Oxford University Press',
      'Jon Duckett, "HTML and CSS: Design and Build Websites", Wiley'
    ],
    referenceBooks: ['Robert W. Sebesta, "Programming the World Wide Web", Pearson'],
    quantumReference: 'AKTU Quantum Series - Web Technology (BCS603/KCS603) 3rd Year CSE',
    recommendedPlaylists: [
      { channelName: 'Gate Smashers', topicCoverage: 'Web technologies university syllabus complete' },
      { channelName: 'CodeWithHarry', topicCoverage: 'HTML, CSS, JavaScript, Node.js web development' }
    ]
  },

  // ===================== 4TH YEAR SUBJECTS (SEM 7 & 8) =====================
  {
    id: 'kcs702-crypto',
    code: 'BCS702 / KCS702',
    name: 'Cryptography & Network Security',
    shortName: 'CNS',
    semester: 7,
    year: 4,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE'],
    credits: 4,
    ltp: '3-1-0',
    category: 'Core',
    description: 'Classical ciphers, number theory fundamentals, symmetric ciphers (DES, AES), asymmetric cryptosystems (RSA, Diffie-Hellman), digital signatures, and secure network protocols.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Introduction to Security & Classical Encryption',
        lectureHours: 8,
        topics: [
          'OSI Security Architecture: Security attacks, Security mechanisms, Security services (X.800)',
          'Model for Network Security, Classical encryption techniques: Symmetric cipher model, Cryptanalysis vs Cryptography',
          'Substitution techniques: Caesar cipher, Monoalphabetic cipher, Playfair cipher, Hill cipher, Polyalphabetic (Vigenère cipher), One-Time Pad',
          'Transposition techniques: Rail fence, Row-column transposition',
          'Rotor machines and Steganography concepts'
        ],
        importantPyqTopics: [
          'Playfair cipher matrix construction and encryption numerical',
          'Hill cipher encryption and decryption using modular matrix inverse',
          'One-Time Pad (Vernam cipher) and unconditional security proof'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Block Ciphers & Symmetric Key Cryptography',
        lectureHours: 8,
        topics: [
          'Block cipher principles: Feistel cipher structure, Diffusion and Confusion concepts',
          'Data Encryption Standard (DES): DES algorithm, 16 rounds, S-box substitution, Key schedule, Avalanche effect',
          'Strength of DES, Triple DES (3DES), Differential and Linear cryptanalysis overview',
          'Advanced Encryption Standard (AES): Rijndael algorithm, rounds, SubBytes, ShiftRows, MixColumns, AddRoundKey',
          'Block cipher modes of operation: ECB, CBC, CFB, OFB, CTR modes'
        ],
        importantPyqTopics: [
          'Feistel Cipher structure and working mechanism diagram',
          'DES round structure and S-Box role in non-linear substitution',
          'Block cipher modes: CBC vs ECB and CTR mode advantages'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Number Theory & Public Key Cryptography',
        lectureHours: 9,
        topics: [
          'Mathematical foundations: Prime numbers, Fermat and Euler theorems, GCD, Extended Euclidean algorithm, Modular arithmetic',
          'Principles of Public Key Cryptosystems, Asymmetric vs Symmetric cryptography',
          'The RSA Algorithm: Key generation, Encryption, Decryption, Security of RSA, Factoring problem',
          'Diffie-Hellman Key Exchange: Algorithm, Discrete logarithm problem, Man-in-the-Middle attack',
          'Introduction to Elliptic Curve Cryptography (ECC) and ElGamal cryptosystem'
        ],
        importantPyqTopics: [
          'RSA Algorithm numerical: Given p, q, and e, compute d, encrypt M, and decrypt C (guaranteed 10 marks)',
          'Diffie-Hellman Key Exchange numerical and vulnerability to MitM attack',
          'Euler Totient function phi(n) and Extended Euclidean algorithm for modular inverse'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Cryptographic Hash Functions & Digital Signatures',
        lectureHours: 8,
        topics: [
          'Cryptographic Hash Functions: Properties, Pre-image resistance, Second pre-image resistance, Collision resistance, Birthday attack',
          'Secure Hash Algorithm (SHA-512): Architecture, padding, 80 rounds, message digest output',
          'Message Authentication Codes (MAC): Requirements, HMAC algorithm based on cryptographic hashes',
          'Digital Signatures: Process, services provided, Digital Signature Standard (DSS / DSA algorithm)',
          'Entity Authentication and Key Management: Kerberos protocol architecture, X.509 certificates'
        ],
        importantPyqTopics: [
          'Digital Signature generation and verification process diagram',
          'HMAC algorithm architecture and security benefits',
          'Kerberos protocol authentication server (AS) and Ticket Granting Server (TGS) exchange'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Network Security Protocols & System Security',
        lectureHours: 7,
        topics: [
          'Transport Level Security: SSL/TLS architecture, Handshake protocol, Record protocol, HTTPS',
          'IP Security (IPsec): Benefits, Architecture, Security Association (SA), AH (Authentication Header) vs ESP (Encapsulating Security Payload), Tunnel vs Transport modes',
          'Electronic Mail Security: PGP (Pretty Good Privacy) and S/MIME',
          'Firewalls: Design principles, Packet filtering, Stateful inspection, Application proxies, DMZ configuration',
          'Intrusion Detection Systems (IDS) and honeypots'
        ],
        importantPyqTopics: [
          'IPsec Tunnel Mode vs Transport Mode with packet header diagrams',
          'SSL/TLS Handshake protocol step-by-step diagram',
          'Firewall architectures: Screened host vs Screened subnet (DMZ) firewalls'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'William Stallings, "Cryptography and Network Security: Principles and Practice", Pearson',
      'Behrouz A. Forouzan, "Cryptography and Network Security", McGraw Hill'
    ],
    referenceBooks: ['Bruce Schneier, "Applied Cryptography", Wiley'],
    quantumReference: 'AKTU Quantum Series - Cryptography & Network Security (BCS702/KCS702) 4th Year CSE',
    recommendedPlaylists: [
      { channelName: 'Gate Smashers', topicCoverage: 'Complete Cryptography course: RSA, DES, AES, Diffie-Hellman' },
      { channelName: 'Knowledge Gate', topicCoverage: 'Number theory, Digital signatures, IPsec' }
    ]
  },
  {
    id: 'bcs071-deep-learning',
    code: 'BCS071',
    name: 'Deep Learning',
    shortName: 'DL',
    semester: 7,
    year: 4,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS'],
    credits: 3,
    ltp: '3-0-0',
    category: 'Elective',
    description: 'Neural networks, backpropagation calculus, optimization algorithms, Convolutional Neural Networks (CNN), Recurrent Neural Networks (RNN/LSTM), attention mechanism, and transformers.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Neural Network Foundations & Optimization',
        lectureHours: 8,
        topics: [
          'Biological to Artificial Neurons, Perceptron model, Perceptron learning algorithm, XOR problem',
          'Multilayer Perceptrons (MLP): Architecture, forward propagation, Backpropagation derivation using chain rule',
          'Activation functions: Sigmoid, Tanh, ReLU, Leaky ReLU, Softmax, vanishing/exploding gradient problems',
          'Loss functions: Cross-entropy, Mean Squared Error, Hinge loss',
          'Optimization algorithms: Stochastic Gradient Descent (SGD), Momentum, RMSProp, Adam optimizer'
        ],
        importantPyqTopics: [
          'Derivation of Backpropagation algorithm weight updates using chain rule',
          'Vanishing gradient problem with Sigmoid and why ReLU solves it',
          'Adam Optimizer algorithm compared to SGD and Momentum'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Regularization & Deep Architecture Design',
        lectureHours: 7,
        topics: [
          'Overfitting vs Underfitting in deep networks, Bias-Variance tradeoff',
          'Regularization techniques: L1 and L2 weight decay, Dropout mechanism, Early stopping, Data augmentation',
          'Batch Normalization: Mathematical formulation, benefits, internal covariate shift reduction',
          'Weight initialization strategies: Xavier / Glorot initialization, He initialization'
        ],
        importantPyqTopics: [
          'Batch Normalization algorithm and why it accelerates deep network training',
          'Dropout regularization mechanism during training vs inference',
          'He vs Xavier weight initialization formulas'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Convolutional Neural Networks (CNN) for Computer Vision',
        lectureHours: 9,
        topics: [
          'Motivation for CNNs: Spatial invariance, sparse connectivity, parameter sharing',
          'Convolution operation, padding (valid vs same), stride, dilation, output dimension formula',
          'Pooling layers: Max pooling, Average pooling, Global average pooling',
          'Classic CNN architectures: LeNet-5, AlexNet, VGGNet-16, GoogLeNet (Inception module), ResNet (Residual connections and skip connections)',
          'Applications: Object detection (R-CNN, YOLO overview), Image segmentation'
        ],
        importantPyqTopics: [
          'Calculation of output dimensions of a feature map after convolution and pooling',
          'ResNet skip connections / residual blocks diagram and how it enables training 100+ layer networks',
          'Inception module architecture in GoogLeNet'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Sequence Modeling: RNN & LSTM',
        lectureHours: 8,
        topics: [
          'Sequential data processing, limitations of feedforward networks for text and time-series',
          'Standard Recurrent Neural Networks (RNN): Unfolding in time, Backpropagation Through Time (BPTT)',
          'Vanishing and exploding gradients in RNNs, Long-term dependencies problem',
          'Long Short-Term Memory (LSTM): Cell state, Forget gate, Input gate, Output gate mathematical equations',
          'Gated Recurrent Units (GRU): Reset gate and Update gate comparison with LSTM',
          'Bidirectional RNNs and Encoder-Decoder sequence-to-sequence model'
        ],
        importantPyqTopics: [
          'LSTM architecture diagram with all 3 gate equations (Forget, Input, Output gate)',
          'LSTM vs GRU comparison table',
          'Backpropagation Through Time (BPTT) concept in standard RNN'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Attention Mechanism, Transformers & Generative Models',
        lectureHours: 8,
        topics: [
          'Limitations of seq2seq models, introduction to Attention mechanism (Bahdanau attention)',
          'Self-Attention and Multi-Head Attention mathematical formulation (Query, Key, Value vectors)',
          'The Transformer architecture (Vaswani et al. "Attention Is All You Need"): Encoder, Decoder, Positional Encoding',
          'Introduction to Large Language Models (BERT and GPT overview)',
          'Generative models overview: Autoencoders, Variational Autoencoders (VAE), Generative Adversarial Networks (GANs: Generator and Discriminator min-max game)'
        ],
        importantPyqTopics: [
          'Self-Attention mechanism mathematical formula: Attention(Q, K, V) = softmax(QK^T / sqrt(dk)) * V',
          'Transformer Encoder-Decoder block diagram',
          'Generative Adversarial Network (GAN) min-max game objective function'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'Ian Goodfellow, Yoshua Bengio, Aaron Courville, "Deep Learning", MIT Press',
      'Charu C. Aggarwal, "Neural Networks and Deep Learning", Springer'
    ],
    referenceBooks: ['Francois Chollet, "Deep Learning with Python", Manning'],
    quantumReference: 'AKTU Quantum Series - Deep Learning (BCS071) 4th Year CSE',
    recommendedPlaylists: [
      { channelName: 'StatQuest with Josh Starmer', topicCoverage: 'Neural Networks, Backpropagation, CNN, Transformers' },
      { channelName: 'Andrew Ng (DeepLearning.AI)', topicCoverage: 'Deep learning specialization lectures' }
    ]
  },
  {
    id: 'bcs075-iot',
    code: 'BCS075',
    name: 'Internet of Things (IoT)',
    shortName: 'IoT',
    semester: 7,
    year: 4,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE', 'EE'],
    credits: 3,
    ltp: '3-0-0',
    category: 'Elective',
    description: 'IoT reference architecture, sensing & actuation, embedded platforms (Raspberry Pi, ESP32), IoT protocols (MQTT, CoAP, BLE), cloud IoT integration, and smart city implementations.',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Introduction to IoT & Architectural Design',
        lectureHours: 8,
        topics: [
          'Definition and characteristics of IoT, Physical and logical design of IoT, IoT enabling technologies',
          'IoT vs M2M (Machine to Machine) comparison',
          'IoT Reference Model: ITU-T and Cisco 7-layer IoT World Forum architecture',
          'Sensors and Actuators: Types of sensors (Temperature, Pressure, Ultrasonic, Gyroscope, Accelerometer, Gas, RFID)',
          'Actuators: Relays, Servomotors, Solenoid valves'
        ],
        importantPyqTopics: [
          'IoT vs M2M comparison with architecture diagram',
          'Cisco 7-layer IoT Reference Architecture',
          'Working principle of Ultrasonic and Temperature sensors in IoT'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'IoT Protocols & Networking',
        lectureHours: 8,
        topics: [
          'Link Layer protocols: IEEE 802.15.4, Zigbee, Bluetooth Low Energy (BLE), LoRaWAN, Cellular (NB-IoT)',
          'Network / Transport Layer protocols: 6LoWPAN (IPv6 over Low-Power Wireless Personal Area Networks)',
          'Application Layer protocols: MQTT (Message Queuing Telemetry Transport: Publish/Subscribe model, Topics, QoS levels)',
          'CoAP (Constrained Application Protocol: RESTful model, UDP-based, Observe option)',
          'XMPP, AMQP, and HTTP vs MQTT vs CoAP comparison'
        ],
        importantPyqTopics: [
          'MQTT Publish/Subscribe architecture and QoS levels (0, 1, 2) (guaranteed)',
          'CoAP vs MQTT comparison for constrained embedded devices',
          '6LoWPAN packet header compression and adaptation layer'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'IoT Hardware Platforms & Programming',
        lectureHours: 8,
        topics: [
          'Embedded IoT boards: Arduino Uno (ATmega328P), ESP8266 / ESP32 (Wi-Fi and Bluetooth SoC), Raspberry Pi architecture',
          'Interfacing sensors and actuators with microcontrollers, GPIO programming',
          'Communication interfaces: I2C (Inter-Integrated Circuit), SPI (Serial Peripheral Interface), UART',
          'Edge computing in IoT: Local filtering, edge intelligence vs cloud offloading'
        ],
        importantPyqTopics: [
          'ESP32 / Raspberry Pi board architecture and GPIO interfacing',
          'I2C vs SPI communication bus comparison table',
          'Edge computing benefits in latency-sensitive IoT systems'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Cloud IoT Platforms & Data Analytics',
        lectureHours: 7,
        topics: [
          'Cloud computing role in IoT: Device management, ingestion, storage, stream processing',
          'Commercial IoT Cloud Platforms: AWS IoT Core, Microsoft Azure IoT Hub, Google Cloud IoT',
          'Open-source platforms: ThingSpeak, Node-RED visual programming for IoT event wiring',
          'Time-series data storage and analytics for sensor telemetry (InfluxDB, Grafana dashboards)'
        ],
        importantPyqTopics: [
          'AWS IoT Core architecture and device shadow concept',
          'ThingSpeak channel setup and sensor data visualization',
          'Stream processing vs batch processing for IoT data'
        ],
        weightageLevel: 'Medium'
      },
      {
        unitNumber: 5,
        unitTitle: 'IoT Security, Privacy & Domain Applications',
        lectureHours: 8,
        topics: [
          'IoT Security vulnerabilities: Device tampering, eavesdropping, firmware vulnerabilities, Mirai botnet attack case study',
          'Security measures: Lightweight cryptography, secure boot, TLS for IoT',
          'Case studies of IoT applications: Smart Home automation, Smart Agriculture (soil moisture & automated drip irrigation), Smart Healthcare (wearable vitals monitoring), Smart Cities (traffic & street lighting)'
        ],
        importantPyqTopics: [
          'Smart Agriculture IoT architecture diagram and sensor deployment',
          'Mirai Botnet attack mechanism exploiting default IoT credentials',
          'Lightweight cryptography requirements for constrained IoT nodes'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'Arshdeep Bahga and Vijay Madisetti, "Internet of Things: A Hands-On Approach", Universities Press',
      'Raj Kamal, "Internet of Things: Architecture and Design Principles", McGraw Hill'
    ],
    referenceBooks: ['David Hanes, "IoT Fundamentals: Networking Technologies, Protocols, and Use Cases for the Internet of Things", Cisco Press'],
    quantumReference: 'AKTU Quantum Series - Internet of Things (BCS075) 4th Year CSE',
    recommendedPlaylists: [
      { channelName: 'Gate Smashers', topicCoverage: 'IoT architectures, MQTT, CoAP, 6LoWPAN' },
      { channelName: 'Edureka', topicCoverage: 'IoT complete tutorial, Raspberry Pi, Cloud IoT' }
    ]
  },
  {
    id: 'khu701-entrepreneurship',
    code: 'KHU701 / KHU801',
    name: 'Project Management & Entrepreneurship',
    shortName: 'PM & Entr',
    semester: 8,
    year: 4,
    branches: ['CSE', 'CSE_AIML', 'CSE_DS', 'IT', 'ECE', 'EE', 'ME', 'CE'],
    credits: 3,
    ltp: '3-0-0',
    category: 'Core',
    description: 'Project planning, feasibility analysis, network scheduling (CPM/PERT), risk management, entrepreneurial mindset, business model canvas, and intellectual property rights (IPR).',
    units: [
      {
        unitNumber: 1,
        unitTitle: 'Project Formulation & Feasibility Analysis',
        lectureHours: 8,
        topics: [
          'Project definition, project life cycle, project identification and screening',
          'Feasibility studies: Technical feasibility, Market and Demand analysis, Financial feasibility, Environmental impact assessment',
          'Financial appraisal methods: Payback period (PBP), Net Present Value (NPV), Internal Rate of Return (IRR), Benefit-Cost Ratio (BCR)'
        ],
        importantPyqTopics: [
          'NPV and Payback Period calculation numericals for project selection',
          'Phases of Project Life Cycle diagram and deliverables',
          'Technical vs Market vs Financial feasibility criteria'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 2,
        unitTitle: 'Project Planning & Network Analysis (CPM / PERT)',
        lectureHours: 9,
        topics: [
          'Work Breakdown Structure (WBS), Responsibility assignment matrix',
          'Network scheduling techniques: Critical Path Method (CPM), activity-on-arrow (AOA) vs activity-on-node (AON)',
          'Calculation of Earliest Start (ES), Earliest Finish (EF), Latest Start (LS), Latest Finish (LF), Total Float, Free Float, Independent Float',
          'Program Evaluation and Review Technique (PERT): Three time estimates (Optimistic, Most Likely, Pessimistic), expected time and variance, project completion probability',
          'Project Crashing: Time-cost trade-off, crash cost, slope formula'
        ],
        importantPyqTopics: [
          'CPM network drawing, Critical Path identification, and Total Float calculation numerical (guaranteed 10 marks)',
          'PERT expected time and probability of project completion within target days',
          'Project Crashing time-cost optimization problem'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 3,
        unitTitle: 'Project Execution, Monitoring & Risk Management',
        lectureHours: 7,
        topics: [
          'Project execution control: Earned Value Management (EVM), Cost Variance (CV), Schedule Variance (SV), CPI, SPI',
          'Resource allocation and leveling, Gantt charts',
          'Project Risk Management: Risk identification, qualitative and quantitative risk analysis, risk response planning',
          'Project termination and post-audit review'
        ],
        importantPyqTopics: [
          'Earned Value Analysis formulas: EV, PV, AC, CPI, SPI numerical',
          'Resource leveling vs Resource allocation',
          'Risk response strategies: Avoidance, Mitigation, Transfer, Acceptance'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 4,
        unitTitle: 'Entrepreneurship & Innovation',
        lectureHours: 8,
        topics: [
          'Entrepreneurship concept, traits of successful entrepreneurs, entrepreneur vs intrapreneur vs manager',
          'Innovation and ideation techniques: Design Thinking (Empathize, Define, Ideate, Prototype, Test)',
          'Business Model Canvas (BMC): 9 building blocks (Value proposition, Customer segments, Revenue streams, etc.)',
          'Start-up lifecycle: Ideation, validation, early traction, scaling, exit strategies',
          'Government initiatives: Startup India, Make in India, incubators, accelerators, angel investors, venture capital'
        ],
        importantPyqTopics: [
          'Business Model Canvas (BMC) 9 building blocks with a tech startup example',
          'Design Thinking 5 stages and human-centered innovation',
          'Entrepreneur vs Intrapreneur comparison and Angel Investors vs Venture Capitalists'
        ],
        weightageLevel: 'High'
      },
      {
        unitNumber: 5,
        unitTitle: 'Intellectual Property Rights (IPR) & Business Laws',
        lectureHours: 7,
        topics: [
          'Intellectual Property Rights: Importance, Types of IPR (Patents, Copyrights, Trademarks, Trade Secrets, Industrial Designs)',
          'Patent filing procedure in India: Provisional vs Complete specification, patentability criteria (Novelty, Inventive step, Industrial applicability)',
          'Copyright Act and protection of software code, Fair use doctrine',
          'Forms of business ownership: Sole proprietorship, Partnership, Limited Liability Partnership (LLP), Private Limited Company',
          'Statutory compliances and ethical corporate governance'
        ],
        importantPyqTopics: [
          'Patent filing process in India and conditions of patentability',
          'Types of IPR: Patents vs Copyrights vs Trademarks vs Trade Secrets comparison table',
          'Private Limited Company vs LLP benefits for technology startups'
        ],
        weightageLevel: 'High'
      }
    ],
    textbooks: [
      'Prasanna Chandra, "Projects: Planning, Analysis, Selection, Financing, Implementation, and Review", McGraw Hill',
      'Vasant Desai, "The Dynamics of Entrepreneurial Development and Management", Himalaya Publishing'
    ],
    referenceBooks: ['Harold Kerzner, "Project Management: A Systems Approach to Planning, Scheduling, and Controlling", Wiley'],
    quantumReference: 'AKTU Quantum Series - Project Management & Entrepreneurship (KHU701/801) 4th Year',
    recommendedPlaylists: [
      { channelName: 'Gate Smashers', topicCoverage: 'CPM, PERT network analysis, float calculations' },
      { channelName: 'Knowledge Gate', topicCoverage: 'Project management and financial appraisal' }
    ]
  }
];
