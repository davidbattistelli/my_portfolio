import { assetUrl } from '../utils/assets'

export const profile = {
  name: 'David Battistelli',
  title: 'Mechanical Engineer',
  university: 'Tuscia University',
  degree: 'MSc in Mechanical Engineering',
  grade: '110/110 with honours',
  graduation: 'October 2026',
  email: 'david.battistelli@hotmail.it',
  linkedin: 'https://www.linkedin.com/in/davidbattistelli/',
  cvUrl: assetUrl('documents/david-battistelli-cv.pdf') + '?v=9c9830ca078e',
  interests: ['Technology', 'Geopolitics', 'Sailing'],
}

interface TimelineItem {
  period: string
  type: 'Education' | 'Experience'
  institution: string
  role: string
  location: string
  description: string
  grade?: string
  coursework?: string[]
}

export const timeline: TimelineItem[] = [
  {
    period: 'Nov 2024 – Oct 2026',
    type: 'Education',
    institution: 'Tuscia University',
    role: 'MSc in Mechanical Engineering',
    location: 'Viterbo, Italy',
    grade: '110/110 with honours',
    description: 'Master’s thesis in collaboration with EPFL’s Swiss Plasma Center on a transferable framework integrating the MEQ suite with the TRUST tokamak and supporting adaptation to next-generation plasma devices.',
    coursework: [
      'Advanced Fluid Machinery and Energy Systems',
      'Sensors and Data Acquisition',
      'Unconventional Technologies for Product Development',
      'Nuclear Fusion',
    ],
  },
  {
    period: 'Aug 2025 – Nov 2025',
    type: 'Experience',
    institution: 'Swiss Plasma Center – EPFL',
    role: 'Software Engineer & Project Manager Intern',
    location: 'Lausanne, Switzerland',
    description: 'Integrated TRUST tokamak numerical models with MEQ, EPFL’s plasma equilibrium analysis suite. Contributed to magnetic-coil and diagnostic configuration studies for plasma profile reconstruction.',
  },
  {
    period: 'Sep 2021 – Nov 2024',
    type: 'Education',
    institution: 'Tuscia University',
    role: 'BSc in Industrial Engineering',
    location: 'Viterbo, Italy',
    grade: '101/110',
    description: 'Bachelor’s thesis: “Analysis and Optimization of the Position of Stabilising Plates in the TRUST Reactor Experiment,” using MATLAB and MAXFEA for simulation and design analysis.',
  },
  {
    period: 'Aug 2023 – Oct 2023',
    type: 'Experience',
    institution: 'MG Sustainable Engineering AB',
    role: 'Project Management Intern',
    location: 'Uppsala, Sweden',
    description: 'Developed simulation code for thermal analysis of photovoltaic-thermal panels in the PV+ Solarus project. Collaborated with Gävle University, prepared a technical report with design recommendations, and supported schematic development using AutoCAD.',
  },
]

export const languages = [
  { name: 'Italian', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Spanish', level: 'Intermediate' },
  { name: 'French', level: 'Intermediate' },
]

export const activities = [
  {
    title: 'Student Representation',
    description: 'Served as an elected student representative on the Engineering Faculty Council at Tuscia University.',
  },
  {
    title: 'Formula SAE',
    description: 'Contributed to R&D and chassis development for the university team. The project received Tesla sponsorship for lithium-ion battery integration.',
  },
  {
    title: 'Porsche AG Engineering Project',
    description: 'Selected among the top 5% of candidates for an engineering project and factory visit in Stuttgart, based on academic performance and project submissions.',
  },
  {
    title: 'Mentors4U',
    description: 'Selected for the mentoring programme among the top 25% of applicants.',
  },
  {
    title: 'Pool Lifeguard Qualification',
    description: 'Obtained a national pool lifeguard qualification in 2018.',
  },
]

export const skillCategories = [
  {
    title: 'Modelling & Analysis',
    skills: ['Numerical modelling and simulation', 'Thermal analysis', 'Data analysis'],
  },
  {
    title: 'Programming & Numerical Tools',
    skills: ['Python (Intermediate)', 'MATLAB (Intermediate)', 'Engineering Equation Solver (Advanced)'],
  },
  {
    title: 'Engineering Software',
    skills: ['AutoCAD', 'Ansys (Basic)', 'SolidWorks (Basic)', 'MAXFEA (Basic)'],
  },
  {
    title: 'Tools & Environment',
    skills: ['Linux', 'MS Office (Advanced)'],
  },
]
