export const COLLEGE = {
  name: 'Synergy College of Nursing',
  shortName: 'Synergy Nursing College',
  tagline: 'Miraj · Sangli · Maharashtra',
  description:
    'Synergy College of Nursing is a part of Uma Trust and Synergy Hospital, Miraj, one of the leading educational institutions in Maharashtra, affiliated to the Maharashtra University of Health Sciences (MUHS), Nashik.',
  addressLines: ['Usmania Moholla, Maji Sainik Vasahat,', '100 Ft Road, Miraj 416410'],
  addressShort: 'Usmania Moholla, Maji Sainik Vasahat, 100 Ft Road, Miraj 416410',
  phones: ['9765998191'],
  email: 'synergycollege7@gmail.com',
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
      { label: 'Scholarships & Free Admission', href: '#scholarships' },
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

export const AFFILIATIONS = [
  {
    name: 'Government of Maharashtra',
    sub: 'DMER',
    logo: `${import.meta.env.BASE_URL}images/affiliations/dmer.png`,
  },
  {
    name: 'Maharashtra State Board of Nursing and Paramedical Education',
    sub: 'Mumbai',
    logo: `${import.meta.env.BASE_URL}images/affiliations/msbnpe.png`,
  },
  {
    name: 'Maharashtra University of Health and Sciences',
    sub: 'Nashik',
    logo: `${import.meta.env.BASE_URL}images/affiliations/muhs.png`,
  },
]

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
    text: 'The college is affiliated to the Maharashtra University of Health Sciences, one of the best affiliations for nursing education in the state.',
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

export const PARENT_HOSPITAL = {
  label: 'Parent Hospital',
  name: 'Synergy Multispeciality Hospital',
  location: 'Miraj, Dist. Sangli, Maharashtra',
  address: 'A/5, Sangli – Miraj Road, near S.T. Workshop, Chandan Wadi, Miraj 416410',
  website: 'https://www.synergymshospital.com/',
  websiteLabel: 'www.synergymshospital.com',
  image: `${import.meta.env.BASE_URL}images/Synergy-Hospital-Miraj.jpg`,
  imageAlt: 'Synergy Multispeciality Hospital building, Miraj — parent hospital of the college',
  description:
    'Synergy Multispeciality Hospital, Miraj is the parent hospital of the college. Students receive extensive, supervised hands-on clinical training across its multi-speciality departments, intensive care and emergency services throughout the course.',
}

export const AFFILIATED_HOSPITALS = [
  {
    name: 'Shaikh Institute of Orthopaedic and Trauma',
    location: 'Miraj, Dist. Sangli, Maharashtra',
  },
  {
    name: 'Saishwaree Clinic Hospital for Mental Health',
    location: 'Miraj, Dist. Sangli, Maharashtra',
  },
  {
    name: 'Nirmal Hospital and De-addiction Centre',
    location: 'Miraj, Dist. Sangli, Maharashtra',
  },
]

export const COURSES = [
  {
    name: 'B.Sc. Nursing',
    level: "Bachelor's Degree",
    mode: 'Full Time',
    duration: '4 Years',
    eligibility: '10+2 Science passed · CET / NEET compulsory',
    fees: '₹ 80,000/- · Fees Details - Fees per year as per sanctioned by FRA',
    description:
      'Our Bachelor of Science in Nursing programme combines classroom instruction, hands-on training and rich clinical experiences to build a strong foundation in nursing theory and practice. Students train at the associated multi-speciality Synergy Hospital, Miraj, developing critical thinking and compassion for patients.',
    featured: true,
  },
]

export const SCHOLARSHIPS = [
  {
    category: 'SC / Nav-Buddhist Students',
    benefit: 'Post-Matric Scholarship / Freeship',
    department: 'Social Justice & Tribal Development Dept',
    tuitionFee: '₹ 0/- (Eligible Fees Covered)',
    description:
      'Eligible compulsory fees and maintenance allowance under the Government of India Post-Matric Scholarship / Freeship scheme. Scholarship generally up to ₹2.5 lakh annual family income; freeship conditions differ — verify current rules on MahaDBT.',
    documents: [
      'Caste Certificate',
      'Caste Validity Certificate',
      'Income Certificate (up to ₹2.5 Lakh)',
      'Aadhaar-Linked Bank Account',
    ],
  },
  {
    category: 'ST Students',
    benefit: 'Tuition & Exam Fee Freeship',
    department: 'Tribal Development Dept, Govt. of Maharashtra',
    tuitionFee: '₹ 0/- (Eligible Fees Covered)',
    description:
      'Tuition Fee and Examination Fee Freeship with eligible approved fees and maintenance allowance subject to scheme rules. Common post-matric income threshold is up to ₹2.5 lakh — confirm current scheme on MahaDBT.',
    documents: [
      'Caste Certificate',
      'Caste Validity Certificate',
      'Income Certificate (up to ₹2.5 Lakh)',
      'Aadhaar-Linked Bank Account',
    ],
  },
  {
    category: 'OBC Students',
    benefit: '100% for Eligible Females',
    department: 'OBC Welfare Department, Govt. of Maharashtra',
    tuitionFee: 'Fee Reimbursement as per Scheme',
    description:
      'Eligible fee reimbursement and maintenance allowance under Post-Matric Scholarship to OBC Students. Eligible female students may qualify for 100% approved tuition and examination fees. Typically family income up to ₹2.5 lakh; other scheme conditions apply.',
    documents: [
      'Caste Certificate',
      'Caste Validity Certificate',
      'Non-Creamy Layer Certificate',
      'Income Certificate (up to ₹2.5 Lakh)',
    ],
  },
  {
    category: 'VJ-A / NT-B / NT-C / NT-D (VJNT)',
    benefit: 'Post-Matric Scholarship / Freeship',
    department: 'VJNT, OBC & SBC Welfare Department',
    tuitionFee: '₹ 0/- (Eligible Fees Covered)',
    description:
      'Eligible approved fees and maintenance allowance under Post-Matric Scholarship / Tuition Fees and Examination Fees to VJNT Students according to the applicable scheme. Income limit and non-creamy-layer / certificate conditions depend on the selected scheme.',
    documents: [
      'Caste Certificate',
      'Caste Validity Certificate',
      'Non-Creamy Layer Certificate',
      'Tahsil Income Certificate',
    ],
  },
  {
    category: 'SBC Students',
    benefit: 'Post-Matric Scholarship / Freeship',
    department: 'SBC Welfare Department, Govt. of Maharashtra',
    tuitionFee: '₹ 0/- (Eligible Fees Covered)',
    description:
      'Eligible approved fees and maintenance allowance under Post-Matric Scholarship / Tuition Fees and Examination Fees to SBC Students. The listed post-matric scheme commonly specifies income up to ₹1.5 lakh — verify current rules on MahaDBT.',
    documents: [
      'Caste Certificate',
      'Caste Validity Certificate',
      'Income Certificate (up to ₹1.5 Lakh)',
      'Aadhaar-Linked Bank Account',
    ],
  },
  {
    category: 'SEBC Students',
    benefit: 'SEBC Fee Reimbursement Scheme',
    department: 'SEBC Welfare Department, Govt. of Maharashtra',
    tuitionFee: 'As per Current Govt. Resolution',
    description:
      'Only the benefit specified by the current government resolution and portal eligibility. Check current income, caste certificate, non-creamy-layer and admission conditions on the MahaDBT portal.',
    documents: [
      'SEBC Caste Certificate',
      'Non-Creamy Layer Certificate',
      'Income Certificate',
      'CAP Allotment Letter',
    ],
  },
  {
    category: 'Open / EWS Students',
    benefit: 'EBC / EWS Fee Reimbursement',
    department: 'Higher & Technical Education Dept',
    tuitionFee: 'Partial Fee Benefit (If Covered)',
    description:
      'Partial or other approved fee benefit only if B.Sc. Nursing / GNM and the college are covered under the scheme. Depends on the scheme — do not assume eligibility from EWS status alone. Verify on MahaDBT.',
    documents: [
      'Income Certificate',
      'EWS Certificate (if applicable)',
      'CAP Allotment Letter',
      'Maharashtra Domicile Certificate',
    ],
  },
  {
    category: 'Minority Students',
    benefit: 'Minority Development Dept Scheme',
    department: 'Minority Development Dept, Govt. of Maharashtra',
    tuitionFee: 'Tuition & Exam Fee Assistance',
    description:
      'Possible tuition-fee and examination-fee assistance under the relevant Minority Development Department scheme for eligible professional / medical courses. A listed medical-education scheme specifies an income limit up to ₹8 lakh — course list and current availability must be checked on MahaDBT.',
    documents: [
      'Minority Community Certificate',
      'Income Certificate (up to ₹8 Lakh)',
      'CAP Allotment Letter',
      'Maharashtra Domicile Certificate',
    ],
  },
]

export const SCHOLARSHIP_MAINTENANCE = {
  title: 'Maintenance Allowance',
  description:
    'Maintenance allowance is separate from tuition-fee reimbursement. Under certain post-matric schemes, eligible students may receive a monthly allowance according to the assigned course group and whether they are day scholars or hostellers. Published rates differ by category and scheme; the correct course group and current rate must be confirmed on MahaDBT. Do not use a single allowance amount for every student.',
  gnMnote:
    'Under certain Maharashtra post-matric schemes, eligible OBC, VJNT and SBC students may receive a maintenance allowance based on their assigned course group and accommodation status. Published monthly rates under the OBC/VJNT/SBC schemes range from ₹90 to ₹425 for eligible day scholars and hostellers, depending on the course group. Actual entitlement must be confirmed under the applicable scheme. SC and ST students may qualify for separate maintenance allowances under their respective post-matric schemes.',
}

export const SCHOLARSHIP_ELIGIBILITY = [
  'The student must satisfy Maharashtra domicile and category-specific certificate requirements.',
  'Family income must be within the selected scheme\u2019s prescribed limit.',
  'Admission must satisfy the scheme\u2019s requirements, including CAP admission wherever mandatory.',
  'The B.Sc. Nursing / GNM course and Synergy College of Nursing must be listed / approved for the selected scheme.',
  'Non-Creamy Layer, caste validity, income certificate and other documents must be provided wherever required.',
  'Scholarship sanction and payment are subject to verification by the competent authority.',
]

export const SCHOLARSHIP_HOW_TO_APPLY = {
  steps: [
    'Log in to the official MahaDBT portal: https://mahadbt2.maharashtra.gov.in/',
    'Complete your student profile with accurate personal, academic, and category details.',
    'Check the schemes shown for your category and course (B.Sc. Nursing / GNM).',
    'Upload the required documents and submit the application.',
    'Retain the application number and check the application status regularly.',
  ],
  note: 'Scholarship amounts, fee reimbursement and eligibility are governed by current Maharashtra Government resolutions and applicable scheme rules. The college does not guarantee a fixed scholarship amount. Students should verify individual eligibility and tentative benefits through the official MahaDBT portal for Academic Year 2026\u20132027.',
}

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
const LOCAL_ANNEXURES = `${import.meta.env.BASE_URL}annexures/2026-27/`

export const NOTICES = [
  {
    year: 'Academic Year 2026–27',
    highlight:
      'MUHS Mandate annexure documents for the academic year 2026–27 have been published.',
    files: [
      { label: 'Annexure I', url: `${LOCAL_ANNEXURES}ANNEXURE-I.pdf` },
      { label: 'Annexure II', url: `${LOCAL_ANNEXURES}ANNEXURE-II.pdf` },
      { label: 'Annexure III', url: `${LOCAL_ANNEXURES}ANNEXURE-III.pdf` },
      { label: 'Annexure IV', url: `${LOCAL_ANNEXURES}ANNEXURE-IV.pdf` },
      { label: 'Annexure V', url: `${LOCAL_ANNEXURES}ANNEXURE-V.pdf` },
      { label: 'Annexure VI', url: `${LOCAL_ANNEXURES}ANNEXURE-VI.pdf` },
      { label: 'Annexure VII', url: `${LOCAL_ANNEXURES}ANNEXURE-VII.pdf` },
      { label: 'Annexure VIII', url: `${LOCAL_ANNEXURES}ANNEXURE-VIII.pdf` },
      { label: 'Annexure IX', url: `${LOCAL_ANNEXURES}ANNEXURE-IX.pdf` },
      { label: 'Annexure X', url: `${LOCAL_ANNEXURES}ANNEXURE-X.pdf` },
      { label: 'Annexure XI', url: `${LOCAL_ANNEXURES}ANNEXURE-XI.pdf` },
      { label: 'Annexure XII', url: `${LOCAL_ANNEXURES}ANNEXURE-XII.pdf` },
      { label: 'Annexure XIII', url: `${LOCAL_ANNEXURES}ANNEXURE-XIII.pdf` },
      { label: 'Annexure XIIIA', url: `${LOCAL_ANNEXURES}ANNEXURE-XIIIA.pdf` },
      { label: 'Annexure XIIIB', url: `${LOCAL_ANNEXURES}ANNEXURE-XIIIB.pdf` },
      { label: 'Annexure XIV', url: `${LOCAL_ANNEXURES}ANNEXURE-XIV.pdf` },
      { label: 'Annexure XV', url: `${LOCAL_ANNEXURES}ANNEXURE-XV.pdf` },
      { label: 'Annexure XVI', url: `${LOCAL_ANNEXURES}ANNEXURE-XVI.pdf` },
    ],
  },
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

const FACILITY_IMAGE_FILES = [
  'facility-07.jpeg',
  'facility-09.jpeg',
  'facility-10.jpeg',
  'facility-11.jpeg',
  'facility-12.jpeg',
  'facility-13.jpeg',
  'facility-14.jpeg',
  'facility-15.jpeg',
]

export const FACILITIES = FACILITY_IMAGE_FILES.map((file) => ({
  image: `${import.meta.env.BASE_URL}images/campus-facilities/${file}`,
}))

const GALLERY_BASE = import.meta.env.BASE_URL + 'images/'

const STUDENT_ACTIVITY_BASE = import.meta.env.BASE_URL + 'images/student-activity/'

const GALLERY_FILENAMES = [
  'IMG-20200806-WA0032.jpg',
  'IMG-20200806-WA0035.jpg',
  'IMG-20210210-WA0005.jpg',
  'IMG-20200806-WA0033.jpg',
  'IMG-20201001-WA0061.jpg',
  'IMG-20201001-WA0067.jpg',
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

export const GALLERY_IMAGES = [
  ...GALLERY_FILENAMES.slice(0, 6),
  STUDENT_ACTIVITY_BASE + 'student-22.jpeg',
  ...GALLERY_FILENAMES.slice(6),
  ...Array.from({ length: 24 }, (_, i) => i + 1)
    .filter((n) => ![1, 2, 4, 5, 17, 20, 22].includes(n))
    .map((n) => STUDENT_ACTIVITY_BASE + `student-${String(n).padStart(2, '0')}.jpeg`),
]
