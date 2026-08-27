import { Link } from 'react-router-dom'
import { COLLEGE } from '../data/siteContent'
import Icon from './Icon'

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-3 z-40 flex flex-col gap-2.5 sm:bottom-6 sm:right-4">
      <a
        href={`https://wa.me/91${COLLEGE.phones[0]}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card-hover transition-transform duration-300 hover:scale-110"
      >
        <Icon name="whatsapp" className="w-6 h-6" filled />
      </a>
      <a
        href={`tel:+91${COLLEGE.phones[0]}`}
        aria-label={`Call +91 ${COLLEGE.phones[0]}`}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-royal-600 text-white shadow-card-hover transition-transform duration-300 hover:scale-110 hover:bg-royal-700"
      >
        <Icon name="phone" className="w-5 h-5" />
      </a>
      <Link
        to="/contact"
        aria-label="Go to contact page"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-400 text-royal-900 shadow-card-hover transition-transform duration-300 hover:scale-110 hover:bg-gold-500"
      >
        <Icon name="mail" className="w-5 h-5" />
      </Link>
    </div>
  )
}
