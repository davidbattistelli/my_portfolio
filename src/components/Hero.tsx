import { profile } from '../data/profileData'

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden pt-32">
      <div className="container-custom relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6 min-w-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              {profile.name}
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold text-primary-600 dark:text-primary-400">{profile.title}</p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              MSc graduate in Mechanical Engineering from {profile.university}, awarded {profile.grade}.
              International experience at the <strong>Swiss Plasma Center – EPFL</strong> and MG Sustainable Engineering,
              working on numerical modelling, fusion research and thermal analysis.
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 pt-4">
              <button onClick={() => scrollToSection('#projects')} className="px-8 py-3 bg-primary-600 dark:bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-700 dark:hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl">
                View My Work
              </button>
              <button onClick={() => scrollToSection('#contact')} className="px-8 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-700">
                Contact Me
              </button>
              <a href={profile.cvUrl} download="David_Battistelli_CV.pdf" className="inline-flex justify-center items-center px-8 py-3 text-primary-700 dark:text-primary-300 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-slate-800 transition-colors border border-primary-200 dark:border-slate-600">
                Download CV (PDF)
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl bg-gradient-to-br from-primary-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 p-8 sm:p-10 shadow-xl border border-primary-100 dark:border-slate-600">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary-700 dark:text-primary-300 mb-4">Education</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-snug">{profile.degree}</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-3">{profile.university}</p>
                <p className="text-xl font-semibold text-primary-700 dark:text-primary-300 mt-5">{profile.grade}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{profile.graduation}</p>
                <div className="border-t border-primary-200 dark:border-slate-600 mt-8 pt-6">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">International experience</p>
                  <p className="text-gray-900 dark:text-gray-100 font-medium">Swiss Plasma Center – EPFL</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Lausanne, Switzerland · 2025</p>
                  <p className="text-gray-900 dark:text-gray-100 font-medium mt-4">MG Sustainable Engineering</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Uppsala, Sweden · 2023</p>
                </div>
              </div>
              <div className="absolute -z-10 top-8 -right-4 w-56 h-56 bg-primary-200 dark:bg-primary-900 rounded-2xl opacity-40 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
