export interface Project {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
  link?: string
  // Detailed information for project pages
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
    id: 'trust-tokamak',
    title: 'TRUST Tokamak - Stabilizer Plates Optimization',
    category: 'Nuclear Fusion Research',
    description: 'Analysis and optimization of stabilizer plate positioning to reduce Growth Rate and electromagnetic forces during plasma disruptions.',
    technologies: ['MATLAB', 'MAXFEA', 'FEM', 'Numerical Analysis'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
    fullDescription: `This bachelor thesis project focused on the analysis and optimization of stabilizer plate positioning
    in the TRUST tokamak at the University of Tuscia. The primary objective was to reduce the Growth Rate during
    plasma disruptions and minimize electromagnetic forces acting on the vacuum vessel structure.

    The project involved extensive use of MATLAB for numerical calculations and MAXFEA for finite element modeling.
    Through systematic analysis of different plate configurations, we identified optimal positioning strategies that
    significantly improved the stability characteristics of the tokamak.`,
    challenges: [
      'Modeling complex electromagnetic interactions in a tokamak geometry',
      'Optimizing multiple competing objectives (growth rate vs. structural forces)',
      'Validating numerical results against theoretical predictions',
      'Balancing computational efficiency with model accuracy'
    ],
    outcomes: [
      'Successfully reduced Growth Rate by optimizing stabilizer plate positions',
      'Developed a systematic methodology for configuration analysis',
      'Created comprehensive documentation of findings in bachelor thesis',
      'Contributed to ongoing tokamak research at University of Tuscia'
    ],
    documents: [
      {
        title: 'Bachelor Thesis - TRUST Tokamak Analysis',
        url: '#', // User will add the actual URL later
        type: 'pdf'
      }
    ],
    details: {
      duration: '2023',
      role: 'Researcher / Bachelor Student',
      location: 'University of Tuscia, Italy'
    }
  },
  {
    id: 'swiss-plasma-center',
    title: 'Swiss Plasma Center Research',
    category: 'Fusion Engineering',
    description: 'Framework for simulation code integration and analysis of tokamak reactors such as TCV. Study of operational parameters and configuration optimization.',
    technologies: ['Python', 'Computational Physics', 'Data Analysis'],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
    fullDescription: `Current research internship at the Swiss Plasma Center (EPFL) focusing on advanced simulation
    frameworks for tokamak analysis. Working with the TCV (Tokamak à Configuration Variable) reactor, developing
    tools for simulation code integration and operational parameter studies.

    The work involves creating Python-based frameworks that facilitate the integration of various simulation codes,
    enabling comprehensive analysis of tokamak behavior under different operational scenarios. This research contributes
    to understanding and optimizing fusion reactor performance.`,
    challenges: [
      'Integrating multiple simulation codes with different interfaces and requirements',
      'Handling large-scale computational physics simulations efficiently',
      'Ensuring accuracy and validation of integrated simulation results',
      'Developing user-friendly tools for complex scientific workflows'
    ],
    outcomes: [
      'Developed framework for simulation code integration',
      'Contributed to TCV operational studies',
      'Gained hands-on experience with world-class fusion research',
      'Ongoing research contributing to fusion energy development'
    ],
    details: {
      duration: '2024 - Present',
      role: 'Research Intern',
      location: 'Swiss Plasma Center, EPFL, Switzerland'
    }
  },
  {
    id: 'flat-rate-tax-app',
    title: 'Flat-Rate Tax Management App',
    category: 'Software Development',
    description: 'Application to simplify tax management for flat-rate VAT regime holders. Focus on UX and automation of tax calculations.',
    technologies: ['Python', 'MVP', 'UX Design'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    fullDescription: `Developed a software application designed to simplify tax management for individuals and small
    businesses operating under the flat-rate VAT regime. The project emphasized user experience design and automation
    of complex tax calculations to reduce manual errors and save time.

    The application was built using Python with a focus on creating an intuitive interface and reliable calculation
    engine. The MVP approach allowed for rapid iteration based on user feedback.`,
    challenges: [
      'Understanding complex tax regulations and implementing them correctly',
      'Designing an intuitive UX for users with varying technical backgrounds',
      'Ensuring calculation accuracy and compliance with tax laws',
      'Building a maintainable and extensible codebase'
    ],
    outcomes: [
      'Successfully launched MVP with core tax management features',
      'Positive user feedback on interface simplicity and usability',
      'Automated error-prone manual calculations',
      'Gained experience in software product development'
    ],
    details: {
      duration: '2023',
      role: 'Developer / Designer'
    }
  },
  {
    id: 'villa-nadia',
    title: 'Villa Nadia - Property Management',
    category: 'Business Management',
    description: 'Complete management of short-term rental property. Operational optimization, customer experience, and revenue management.',
    technologies: ['Operations', 'Booking.com', 'Customer Experience'],
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
    fullDescription: `Comprehensive management of a short-term rental property, focusing on operational excellence,
    customer satisfaction, and revenue optimization. This project involves all aspects of property management from
    guest communication to maintenance coordination and financial planning.

    The experience has provided valuable insights into business operations, customer service, and the practical
    application of process optimization techniques in a real-world business context.`,
    challenges: [
      'Maintaining high occupancy rates in competitive market',
      'Ensuring consistent quality of guest experience',
      'Coordinating maintenance and cleaning operations efficiently',
      'Managing multiple booking platforms and calendars'
    ],
    outcomes: [
      'Achieved strong occupancy rates and positive guest reviews',
      'Streamlined operational processes for efficiency',
      'Developed customer service and business management skills',
      'Successfully managed all aspects of property operations'
    ],
    details: {
      duration: 'Ongoing',
      role: 'Property Manager',
      location: 'Italy'
    }
  },
]

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}
