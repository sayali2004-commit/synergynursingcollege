import { Link } from 'react-router-dom'
import { COLLEGE } from '../data/siteContent'
import Icon from './Icon'

export default function FloatingContact({ hidden }) {
  return (
    <div className={`fixed bottom-4 right-3 z-40 flex flex-col gap-2 transition-opacity duration-300 sm:bottom-6 sm:right-4 sm:gap-2.5 ${hidden ? 'hidden sm:flex' : ''}`}>
      <a
        href={`https://wa.me/91${COLLEGE.phones[0]}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card-hover transition-transform duration-300 hover:scale-110 sm:h-11 sm:w-11"
      >
        <Icon name="whatsapp" className="h-5 w-5 sm:h-6 sm:w-6" filled />
      </a>
      <a
        href={`tel:+91${COLLEGE.phones[0]}`}
        aria-label={`Call +91 ${COLLEGE.phones[0]}`}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-royal-600 text-white shadow-card-hover transition-transform duration-300 hover:scale-110 hover:bg-royal-700 sm:h-11 sm:w-11"
      >
        <Icon name="phone" className="h-4 w-4 sm:h-5 sm:w-5" />
      </a>
      <Link
        to="/contact"
        aria-label="Go to contact page"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400 text-royal-900 shadow-card-hover transition-transform duration-300 hover:scale-110 hover:bg-gold-500 sm:h-11 sm:w-11"
      >
        <Icon name="mail" className="h-4 w-4 sm:h-5 sm:w-5" />
      </Link>
    </div>
  )
}
