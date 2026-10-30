import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/profileData'

const Contact = () => {
  const contacts = [
    { label: 'Email', text: profile.email, href: 'mailto:' + profile.email, icon: FaEnvelope },
    { label: 'LinkedIn', text: profile.name, href: profile.linkedin, icon: FaLinkedin },
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-slate-950">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">Get in Touch</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">I’m open to professional opportunities and collaborations in engineering, numerical modelling, thermal analysis and scientific software development.</p>
          <div className="space-y-3">
            {contacts.map((contact) => (
              <div key={contact.label} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors">
                <contact.icon className="text-2xl text-primary-600 dark:text-primary-400 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400">{contact.label}</p>
                  <a href={contact.href} {...(contact.label === 'LinkedIn' ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all">{contact.text}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
