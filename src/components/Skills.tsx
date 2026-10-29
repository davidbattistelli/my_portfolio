import { skillCategories } from '../data/profileData'

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-slate-950">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Skills</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">Technical skills developed through research, engineering projects and international internships.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-md text-sm">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
