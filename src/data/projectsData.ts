export interface Project {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
  link?: string
  fullDescription?: string
  challenges?: string[]
  outcomes?: string[]
  documents?: {
    title: string
    url: string
    type: 'pdf' | 'link' | 'github'
  }[]
  details?: {
    duration?: string
    role?: string
    team?: string
    location?: string
  }
}

export const projects: Project[] = [
  {
    id: 'swiss-plasma-center',
    title: 'TRUST–MEQ Modelling Framework',
    category: 'Swiss Plasma Center – EPFL',
    description: 'Integration of TRUST tokamak numerical models with MEQ, EPFL’s suite for plasma equilibrium analysis.',
    technologies: ['MATLAB', 'MEQ', 'Numerical modelling', 'Plasma reconstruction'],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
    fullDescription: [
      'During my internship at the Swiss Plasma Center – EPFL, I worked on integrating TRUST tokamak numerical models with MEQ, EPFL’s plasma equilibrium analysis suite. The work focused on a framework designed for compatibility with and adaptation to different tokamaks.',
      'I also contributed to magnetic-coil and diagnostic configuration studies to support plasma profile reconstruction in TRUST.',
      'My master’s thesis, completed in collaboration with EPFL’s Swiss Plasma Center, addressed the development of a transferable framework connecting MEQ with TRUST and supporting adaptation to next-generation plasma devices.',
    ].join('\n\n'),
    challenges: [
      'Integrating TRUST numerical models with the MEQ suite',
      'Preparing a framework for machine-specific modelling and reconstruction',
      'Studying magnetic-coil and diagnostic configurations',
    ],
    outcomes: [
      'Developed a framework connecting TRUST numerical models with MEQ',
      'Contributed to plasma profile reconstruction studies',
      'Completed a master’s thesis in collaboration with the Swiss Plasma Center',
    ],
    details: {
      duration: 'Internship: Aug–Nov 2025 · Master’s thesis: completed Oct 2026',
      role: 'Software Engineer & Project Manager Intern / Master’s thesis student',
      location: 'Lausanne, Switzerland / Tuscia University, Italy',
    },
  },
  {
    id: 'trust-tokamak',
    title: 'TRUST Tokamak – Stabilising Plates',
    category: 'Bachelor’s Thesis',
    description: 'Analysis and optimisation of stabilising plate positions in the TRUST reactor experiment, using simulation and design analysis.',
    technologies: ['MATLAB', 'MAXFEA', 'Simulation', 'Design analysis'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
    fullDescription: [
      'My bachelor’s thesis at Tuscia University was titled “Analysis and Optimization of the Position of Stabilising Plates in the TRUST Reactor Experiment.”',
      'The work used MATLAB and MAXFEA for simulation and design analysis of stabilising plate positions in TRUST. It formed part of my BSc in Industrial Engineering, completed in November 2024.',
    ].join('\n\n'),
    challenges: [
      'Analysing stabilising plate positions in the TRUST experiment',
      'Using numerical simulation to support design comparisons',
    ],
    outcomes: [
      'Completed simulation and design analyses using MATLAB and MAXFEA',
      'Documented the work in the bachelor’s thesis',
    ],
    details: {
      duration: 'Completed Nov 2024',
      role: 'BSc thesis student',
      location: 'Tuscia University, Viterbo, Italy',
    },
  },
  {
    id: 'pvt-thermal-analysis',
    title: 'PVT Panel Thermal Analysis',
    category: 'MG Sustainable Engineering AB',
    description: 'Simulation-code development for heat-transfer analysis in photovoltaic-thermal panels within the PV+ Solarus project.',
    technologies: ['Engineering Equation Solver', 'MATLAB', 'Thermal analysis', 'AutoCAD'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    fullDescription: [
      'During my internship at MG Sustainable Engineering AB in Uppsala, Sweden, I contributed to the PV+ Solarus project by developing simulation code in Engineering Equation Solver and MATLAB to analyse heat exchange in photovoltaic-thermal (PVT) panels.',
      'The work involved collaboration with Gävle University and the preparation of a technical report with recommendations for materials and future design iterations. I also supported schematic development using AutoCAD and produced 2D models to support system integration.',
    ].join('\n\n'),
    challenges: [
      'Modelling heat exchange within photovoltaic-thermal panels',
      'Translating engineering calculations into simulation code',
      'Documenting results and design recommendations',
    ],
    outcomes: [
      'Developed simulation code for PVT thermal analysis',
      'Prepared a technical report with design recommendations',
      'Supported schematic development and 2D modelling in AutoCAD',
    ],
    details: {
      duration: 'Aug–Oct 2023',
      role: 'Project Management Intern',
      location: 'Uppsala, Sweden',
    },
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}
