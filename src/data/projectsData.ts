import { assetUrl } from '../utils/assets'

export interface Project {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
  showHeroImage?: boolean
  imageAlt: string
  imageCaption: string
  fullDescription: string
  contributions: string[]
  outcomes: string[]
  documents: {
    title: string
    url: string
    description: string
  }[]
  details: {
    duration: string
    role: string
    location: string
  }
}

export const projects: Project[] = [
  {
    id: 'swiss-plasma-center',
    title: 'TRUST–MEQ Modelling Framework',
    category: 'Master’s Thesis · Swiss Plasma Center – EPFL',
    description: 'A transferable framework for tokamak equilibrium modelling and plasma reconstruction, adapted from TCV to TRUST.',
    technologies: ['MATLAB', 'MEQ', 'Numerical modelling', 'Plasma reconstruction'],
    image: assetUrl('images/projects/trust-meq-equilibria.webp'),
    imageAlt: 'Numerical plasma equilibrium configurations for TRUST from the master’s thesis presentation',
    imageCaption: 'Numerical equilibrium configurations from the MSc thesis presentation, slide 7.',
    fullDescription: [
      'This work began during my internship at the Swiss Plasma Center – EPFL and continued through my master’s thesis at Tuscia University. I adapted the machine-specific implementation of MEQ to TRUST while retaining the suite’s generic solver core.',
      'The thesis, “From TCV to TRUST: Adaptation of the MEQ Framework for Equilibrium Reconstruction and Full-Pulse Simulation,” develops a framework for numerical equilibrium studies and reconstruction from synthetic magnetic signals.',
    ].join('\n\n'),
    contributions: [
      'Adapted the TRUST geometry, circuits and magnetic diagnostic configuration to the MEQ framework',
      'Connected machine-specific numerical models with the equilibrium and reconstruction tools',
      'Documented the implementation and numerical assessment in the master’s thesis',
    ],
    outcomes: [
      'A working framework for TRUST equilibrium modelling and plasma reconstruction',
      'A transferable implementation supporting further machine-specific adaptation and scenario studies',
    ],
    documents: [
      { title: 'Presentation', url: assetUrl('documents/msc-presentation-david-battistelli.pdf'), description: 'PDF · 25 slides' },
      { title: 'Full thesis', url: assetUrl('documents/msc-thesis-david-battistelli.pdf'), description: 'PDF · 79 pages' },
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
    category: 'Bachelor’s Thesis · Tuscia University',
    description: 'Simulation-based assessment of stabilising plate positions and the balance between plasma stability and electromagnetic loads.',
    technologies: ['MATLAB', 'MAXFEA', 'Simulation', 'Electromagnetic analysis'],
    image: assetUrl('images/projects/trust-stabilising-plates.webp'),
    imageAlt: 'TRUST tokamak geometry and electromagnetic analysis shown in the bachelor’s thesis poster',
    imageCaption: 'Geometry, modelling workflow and load-analysis plots from the final BSc thesis poster.',
    fullDescription: [
      'My bachelor’s thesis, “Analysis and Optimization of the Position of Stabilising Plates in the TRUST Experiment,” examined how plate position affects plasma stability and the electromagnetic loads acting on the plates.',
      'The study combined MATLAB models and MAXFEA analyses to compare configurations and identify a suitable design compromise.',
    ].join('\n\n'),
    contributions: [
      'Compared plate configurations using filamentary and RZIP models in MATLAB',
      'Assessed electromagnetic loads in MAXFEA',
      'Brought the stability and load analyses together in a design comparison',
    ],
    outcomes: [
      'Identified a compromise between plasma stability and plate loading',
      'Produced simulation results, comparison plots and a final thesis poster',
    ],
    documents: [
      { title: 'Poster', url: assetUrl('documents/bsc-poster-david-battistelli.pdf'), description: 'PDF · 1 page' },
      { title: 'Full thesis', url: assetUrl('documents/bsc-thesis-david-battistelli.pdf'), description: 'PDF · 29 pages' },
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
    category: 'Internship · MG Sustainable Engineering AB',
    description: 'Steady-state thermal modelling of photovoltaic-thermal panels for the PV+ Solarus project.',
    technologies: ['Engineering Equation Solver', 'MATLAB', 'Thermal analysis', 'AutoCAD'],
    image: assetUrl('images/projects/pvt-thermal-network.webp'),
    imageAlt: 'Thermal resistance network used in the photovoltaic-thermal panel model',
    imageCaption: 'Figure 1: thermal resistance network from the PVT modelling report.',
    fullDescription: [
      'During my internship at MG Sustainable Engineering AB in Uppsala, I developed simulation code in Engineering Equation Solver and MATLAB to estimate temperature states within photovoltaic-thermal panels.',
      'The work formed part of the PV+ Solarus project and involved collaboration with Gävle University. I also supported schematic development and 2D system modelling in AutoCAD.',
    ].join('\n\n'),
    contributions: [
      'Translated heat-transfer balances into a steady-state simulation model',
      'Documented model assumptions, equations and calculated temperature states',
      'Supported schematic development and system integration using AutoCAD',
    ],
    outcomes: [
      'Simulation code supporting thermal assessment of the PVT panel',
      'A technical report with material and design recommendations for further development',
    ],
    documents: [
      { title: 'Technical report', url: assetUrl('documents/pvt-thermal-analysis-report.pdf'), description: 'PDF · 11 pages' },
    ],
    details: {
      duration: 'Aug–Oct 2023',
      role: 'Project Management Intern',
      location: 'Uppsala, Sweden',
    },
  },
  {
    id: 'essential-oil-extractor',
    title: 'Product Development: From Concept to Virtual Prototype',
    category: 'Academic project · Tuscia University',
    description: 'A product developed from scratch through concept design, CAD modelling, thermal and mechanical analysis, and life cycle assessment.',
    technologies: ['Product development', 'SOLIDWORKS', 'MATLAB', 'ANSYS', 'Life cycle assessment'],
    image: assetUrl('images/projects/product-development-workflow.svg'),
    showHeroImage: false,
    imageAlt: 'Product development workflow showing the CAD assembly alongside concept design, thermal analysis, mechanical analysis and life cycle assessment',
    imageCaption: 'Development workflow with the original CAD assembly from the project report, Figure 2.',
    fullDescription: [
      'Starting from an initial concept, I worked across the full product development process: defining functional requirements, creating the CAD design, selecting materials, and carrying out thermal and mechanical analyses and a preliminary life cycle assessment (LCA).',
      'A compact essential oil extractor was the application used to bring these disciplines together in a group project for the Virtual Prototyping course at Tuscia University. My work covered every stage, connecting design decisions with analytical models, numerical simulations and environmental assessment.',
    ].join('\n\n'),
    contributions: [
      'Defined functional requirements and developed the product concept and architecture from scratch',
      'Created the 3D CAD assembly in SOLIDWORKS and selected materials for the main components',
      'Built thermal models in MATLAB to assess heat transfer and size the insulation',
      'Set up thermal and mechanical analyses in ANSYS to examine temperature, stress and deformation',
      'Performed a preliminary life cycle assessment with SOLIDWORKS Sustainability, considering materials, manufacturing, transport and end of life',
    ],
    outcomes: [
      'A virtual prototype with an integrated CAD assembly and documented material choices',
      'A development workflow connecting design, thermal and mechanical analysis, and environmental assessment',
      'A technical report documenting the concept, modelling assumptions, simulation outputs and preliminary LCA',
    ],
    documents: [
      { title: 'Project report', url: assetUrl('documents/essential-oil-extractor-report.pdf'), description: 'PDF · 33 pages' },
    ],
    details: {
      duration: 'During MSc studies',
      role: 'Product design, thermal and mechanical analysis, LCA',
      location: 'Tuscia University, Viterbo, Italy',
    },
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}
