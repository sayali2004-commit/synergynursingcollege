export const COLLEGE = {
  name: 'Synergy College of Nursing',
  shortName: 'Synergy Nursing College',
  tagline: 'Miraj · Sangli · Maharashtra',
  description:
    'Synergy College of Nursing is a part of Uma Trust and Synergy Hospital, Miraj — one of the leading educational institutions in Maharashtra, affiliated to the Maharashtra University of Health Sciences (MUHS), Nashik.',
  addressLines: ['Usmania Moholla, Maji Sainik Vasahat,', '100 Ft Road, Miraj 416410'],
  addressShort: 'Usmania Moholla, Maji Sainik Vasahat, 100 Ft Road, Miraj 416410',
  phones: ['8767778129', '9765500700'],
  email: 'info@synergynursingcollege.in',
  website: 'https://synergynursingcollege.in/',
  affiliation: 'Maharashtra University of Health Sciences (MUHS), Nashik',
  trust: 'Uma Trust, Miraj',
  hospital: 'Synergy Hospital, Miraj',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'College', href: '#college' },
  { label: 'Courses', href: '#courses' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Notices', href: '#notices' },
  { label: 'Contact Us', href: '#contact' },
]

export const NAV_MENU = [
  { label: 'Home', href: '#home' },
  {
    label: 'About',
    children: [
      { label: 'About the College', href: '#about' },
      { label: 'Why Choose Us', href: '#why-us' },
      { label: 'The College & Affiliations', href: '#college' },
    ],
  },
  {
    label: 'Admissions',
    children: [
      { label: 'Admission Procedure', href: '#admissions' },
      { label: 'Documents Required', href: '#documents' },
    ],
  },
  {
    label: 'Academics',
    children: [
      { label: 'Courses & Fees', href: '#courses' },
      { label: 'MUHS Mandate', href: '#notices' },
    ],
  },
  {
    label: 'Campus Life',
    children: [
      { label: 'Facilities', href: '#facilities' },
      { label: 'Photo Gallery', href: '#gallery' },
    ],
  },
  { label: 'Notices', href: '#notices' },
  { label: 'Contact Us', href: '#contact' },
]

export const IMAGES = {
  logo: `${import.meta.env.BASE_URL}images/logo@2x-144x88.jpg`,
  logoFooter: `${import.meta.env.BASE_URL}images/logo.jpg`,
  hero: `${import.meta.env.BASE_URL}images/Synergy-Hospital-Miraj.jpg`,
}

export const HERO_HIGHLIGHTS = [
  {
    title: 'MUHS Affiliated',
    text: 'Affiliated to Maharashtra University of Health Sciences, Nashik',
    icon: 'badge',
  },
  {
    title: 'Uma Trust Initiative',
    text: 'Managed by Uma Trust & Synergy Hospital, Miraj',
    icon: 'trust',
  },
  {
    title: 'Own Hospital Training',
    text: 'Hands-on clinical training at associated Synergy Hospital',
    icon: 'hospital',
  },
  {
    title: 'UG · PG · Diploma',
    text: 'Nursing programmes across undergraduate, postgraduate & diploma levels',
    icon: 'cap',
  },
]

export const OBJECTIVES = [
  'Develop professional nurses who can render holistic health care to individuals and the community',
  'Maintain the dignity and standard of the nursing profession by developing compassionate and accountable professionals',
  'Promote and strengthen nursing skills by inculcating the latest technology and trends in nursing education',
  'Enable local girls to upgrade their economic position through placements at national and international levels',
  'Develop nursing leaders in practice, education, administration and research',
]

export const WHY_US = [
  {
    title: 'Experienced Faculty',
    text: 'Our committed faculty members are leaders in their disciplines with a strong dedication to training the next generation of nurses.',
    icon: 'faculty',
  },
  {
    title: 'Future-Ready Curriculum',
    text: 'We constantly update our curriculum to incorporate new trends and technology in nursing education and medical research.',
    icon: 'book',
  },
  {
    title: 'Real Clinical Experience',
    text: 'Extensive clinical rotations and internships at our associated Synergy Hospital help students apply classroom learning at the bedside.',
    icon: 'stethoscope',
  },
  {
    title: 'Ongoing Faculty Development',
    text: 'Our instructors receive continuous professional development opportunities to remain at the forefront of nursing education and research.',
    icon: 'growth',
  },
  {
    title: 'Career Pathways',
    text: 'We prepare students for placements at national and international levels, strengthening both careers and the local economy.',
    icon: 'globe',
  },
  {
    title: 'Compassionate Values',
    text: 'We nurture accountable, empathetic professionals who uphold the dignity and standard of the nursing profession.',
    icon: 'heart',
  },
]

export const APPROVALS = [
  {
    title: 'Affiliated to MUHS, Nashik',
    text: 'The college is affiliated to the Maharashtra University of Health Sciences — one of the best affiliations for nursing education in the state.',
    icon: 'badge',
  },
  {
    title: 'Managed by Uma Trust',
    text: 'Synergy College of Nursing is a part of Uma Trust, an educational initiative with its presence in Maharashtra.',
    icon: 'trust',
  },
  {
    title: 'Associated Synergy Hospital',
    text: 'The college and Synergy Hospital Miraj are associated, giving students direct access to multi-speciality clinical exposure.',
    icon: 'hospital',
  },
]

export const COURSES = [
  {
    name: 'B.Sc. Nursing',
    level: "Bachelor's Degree",
    mode: 'Full Time',
    duration: '4 Years',
    eligibility: '10+2 Science passed · CET / NEET compulsory',
    fees: '₹ 72,000/- as listed by the college',
    description:
      'Our Bachelor of Science in Nursing programme combines classroom instruction, hands-on training and rich clinical experiences to build a strong foundation in nursing theory and practice. Students train at the associated multi-speciality Synergy Hospital, Miraj, developing critical thinking and compassion for patients.',
    featured: true,
  },
]

export const ADMISSION_DOCS = [
  'SSC Marks Card',
  'SSC Board Certificate',
  'HSC Marks Card',
  'HSC Board Certificate',
  'Leaving Certificate / T.C.',
  'Caste Certificate',
  'Caste Validity Certificate',
  'Income Certificate',
  'Aadhar Card',
  'Bank Passbook (Nationalized Bank)',
  'Gap Certificate (if necessary)',
  'Four (4) latest passport-size colour photographs',
]

const UPLOADS = 'https://synergynursingcollege.in/wp-content/uploads'

export const NOTICES = [
  {
    year: 'Academic Year 2025–26',
    highlight:
      'MUHS Mandate annexure documents for the academic year 2025–26 have been published.',
    files: [
      { label: 'Annexure I', url: `${UPLOADS}/2025/05/ANNEXURE-I.pdf` },
      { label: 'Annexure II', url: `${UPLOADS}/2025/05/ANNEXURE-II.pdf` },
      { label: 'Annexure III', url: `${UPLOADS}/2025/05/ANNEXURE-III.pdf` },
      { label: 'Annexure IV', url: `${UPLOADS}/2025/05/ANNEXURE-IV.pdf` },
      { label: 'Annexure V', url: `${UPLOADS}/2025/05/ANNEXURE-V.pdf` },
      { label: 'Annexure VII', url: `${UPLOADS}/2025/05/ANNEXURE-VII.pdf` },
      { label: 'Annexure VIII', url: `${UPLOADS}/2025/05/ANNEXURE-VIII.pdf` },
      { label: 'Annexure X', url: `${UPLOADS}/2025/05/ANNEXURE-X.pdf` },
      { label: 'Annexure XII', url: `${UPLOADS}/2025/05/ANNEXURE-XII.pdf` },
      { label: 'Annexure XIII', url: `${UPLOADS}/2025/05/ANNEXURE-XIII.pdf` },
      { label: 'Annexure XIIIA', url: `${UPLOADS}/2025/05/ANNEXURE-XIIIA.pdf` },
      { label: 'Annexure XIIIB', url: `${UPLOADS}/2025/05/ANNEXURE-XIIIB.pdf` },
    ],
  },
  {
    year: 'Academic Year 2024–25',
    highlight:
      'MUHS Mandate annexure documents for the academic year 2024–25 are available below.',
    files: [
      { label: 'Annexure II', url: `${UPLOADS}/2024/10/annex-Il.pdf` },
      { label: 'Annexure II A', url: `${UPLOADS}/2024/10/annex-ll-a.pdf` },
      { label: 'Annexure II B', url: `${UPLOADS}/2024/10/annex-ll-b.pdf` },
      { label: 'Annexure II C', url: `${UPLOADS}/2024/10/annex-ll-c.pdf` },
      { label: 'Annexure II D', url: `${UPLOADS}/2024/10/annex-ll-d.pdf` },
      { label: 'Annexure II E', url: `${UPLOADS}/2024/10/annex-ll-e.pdf` },
      { label: 'Annexure II F', url: `${UPLOADS}/2024/10/annex-ll-f.pdf` },
      { label: 'Annexure II G', url: `${UPLOADS}/2024/10/annex-ll-g.pdf` },
      { label: 'Annexure II H', url: `${UPLOADS}/2024/10/annex-ll-h.pdf` },
      { label: 'Annexure II I', url: `${UPLOADS}/2024/10/Annex-ll-i.pdf` },
      { label: 'Annexure II J', url: `${UPLOADS}/2024/10/annex-ll-j.pdf` },
      { label: 'Annexure II K', url: `${UPLOADS}/2024/10/annex-ll-k.pdf` },
      { label: 'Annexure II L', url: `${UPLOADS}/2024/10/annex-ll-l.pdf` },
      { label: 'Annexure II M', url: `${UPLOADS}/2024/10/annex-ll-m.pdf` },
      { label: 'Annexure II N', url: `${UPLOADS}/2024/10/annex-ll-n.pdf` },
      { label: 'Annexure I A', url: `${UPLOADS}/2024/10/annexure-1-a.pdf` },
    ],
  },
]

export const FACILITIES = [
  {
    title: 'Clinical Training',
    text: 'Hands-on patient care through our associated multi-speciality Synergy Hospital, Miraj.',
    image: `${import.meta.env.BASE_URL}images/Miraj-Hospitals-Best-Hospital.jpg`,
  },
  {
    title: 'Multi-Speciality Exposure',
    text: 'Rotations across specialities give students broad, real-world clinical experience.',
    image: `${import.meta.env.BASE_URL}images/Multi-Speciality-Hospital-Miraj.jpg`,
  },
  {
    title: 'Dedicated Female Ward',
    text: 'Structured ward postings help students master day-to-day nursing care practices.',
    image: `${import.meta.env.BASE_URL}images/Female-Ward-Synergy-Hospital.jpg`,
  },
  {
    title: 'Child Care Services',
    text: 'Paediatric exposure builds specialised skills in caring for young patients.',
    image: `${import.meta.env.BASE_URL}images/Child-Care-Hospital-Miraj-Sangli.jpg`,
  },
  {
    title: 'Emergency & Ambulance',
    text: 'Exposure to emergency response services develops quick-thinking professionals.',
    image: `${import.meta.env.BASE_URL}images/Ambulance-Facility-Miraj.jpg`,
  },
  {
    title: 'Speciality Eye Care',
    text: 'Ophthalmic services at the associated hospital widen specialty learning options.',
    image: `${import.meta.env.BASE_URL}images/best-eye-hospital-in-MIraj.jpg`,
  },
]

const GALLERY_BASE = import.meta.env.BASE_URL + 'images/'

export const GALLERY_IMAGES = [
  'IMG-20200806-WA0032.jpg',
  'IMG-20200806-WA0035.jpg',
  'IMG-20210210-WA0005.jpg',
  'IMG-20200806-WA0033.jpg',
  'IMG-20201001-WA0061.jpg',
  'IMG-20201001-WA0067.jpg',
  'WhatsApp-Image-2024-03-05-at-11.56.27-AM-1.jpeg',
  'WhatsApp-Image-2024-03-05-at-11.56.27-AM.jpeg',
  'IMG-20200806-WA0036.jpg',
  'IMG-20200806-WA0027.jpg',
  'IMG-20200806-WA0029.jpg',
  'IMG-20200806-WA0034.jpg',
  'IMG-20200806-WA0037.jpg',
  'IMG-20201001-WA0072.jpg',
  'IMG-20210210-WA0008.jpg',
  'IMG-20210210-WA0013.jpg',
  'WhatsApp-Image-2024-03-05-at-11.53.54-AM-1.jpeg',
  'WhatsApp-Image-2024-03-05-at-11.53.55-AM.jpeg',
  'WhatsApp-Image-2024-03-05-at-11.56.23-AM.jpeg',
  'WhatsApp-Image-2024-03-05-at-11.56.25-AM-1.jpeg',
  'Miraj-Hospitals-Best-Hospital.jpg',
].map((f) => GALLERY_BASE + f)
