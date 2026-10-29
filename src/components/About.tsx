import { activities, languages, profile, timeline } from '../data/profileData'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12">About Me</h2>
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-10 xl:gap-12 items-start">
            <div className="space-y-8 min-w-0">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-5">My Background</h3>
                <div className="p-6 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>I graduated with an MSc in Mechanical Engineering from {profile.university} in October 2026, achieving {profile.grade}.</p>
                  <p>My work combines numerical modelling, thermal analysis and data analysis. My research internship at the Swiss Plasma Center – EPFL and my master’s thesis focused on integrating the MEQ framework with the TRUST tokamak.</p>
                  <p>I also completed an internship in Sweden, developing simulation code for photovoltaic-thermal panels and contributing to the PV+ Solarus project.</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Languages</h3>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((language) => (
                    <div key={language.name} className="p-3.5 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{language.name}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{language.level}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest) => (
                    <span key={interest} className="px-3 py-2 text-sm text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">{interest}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Leadership & Activities</h3>
                <div className="p-6 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                  <ul className="space-y-5">
                    {activities.map((activity) => (
                      <li key={activity.title}>
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">{activity.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{activity.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">Education & Experience</h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-primary-500 to-primary-400 dark:from-primary-400 dark:via-primary-500 dark:to-primary-600" />
                <div className="space-y-6">
                  {timeline.map((item) => (
                    <div key={item.period} className="relative pl-12">
                      <div className="absolute left-0 top-5 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-slate-900 shadow-lg flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-white" /></div>
                      <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-slate-800 dark:to-slate-800/50 rounded-xl p-5 sm:p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <span className="px-2.5 py-1 text-xs font-bold text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/50 rounded-full">{item.period}</span>
                          <span className={'px-2.5 py-1 text-xs font-semibold rounded-full ' + (item.type === 'Experience' ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300' : 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300')}>{item.type}</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">{item.institution}</h4>
                        <p className="text-base font-semibold text-primary-600 dark:text-primary-400 mb-1">{item.role}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{item.location}</p>
                        {item.grade && <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">Final grade: {item.grade}</p>}
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                        {item.coursework && (
                          <div className="mt-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">Relevant coursework</p>
                            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">{item.coursework.map((subject) => <li key={subject}>{subject}</li>)}</ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
