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
      { label: 'Faculty', href: '#faculty' },
      { label: 'Students Corner', href: '#students-corner' },
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
  imageAlt: 'Synergy Multispeciality Hospital building, Miraj, parent hospital of the college',
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
      'Eligible compulsory fees and maintenance allowance under the Government of India Post-Matric Scholarship / Freeship scheme. Scholarship generally up to ₹2.5 lakh annual family income; freeship conditions differ. Verify current rules on MahaDBT.',
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
      'Tuition Fee and Examination Fee Freeship with eligible approved fees and maintenance allowance subject to scheme rules. Common post-matric income threshold is up to ₹2.5 lakh. Confirm current scheme on MahaDBT.',
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
      'Eligible approved fees and maintenance allowance under Post-Matric Scholarship / Tuition Fees and Examination Fees to SBC Students. The listed post-matric scheme commonly specifies income up to ₹1.5 lakh. Verify current rules on MahaDBT.',
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
      'Partial or other approved fee benefit only if B.Sc. Nursing / GNM and the college are covered under the scheme. Depends on the scheme. Do not assume eligibility from EWS status alone. Verify on MahaDBT.',
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
      'Possible tuition-fee and examination-fee assistance under the relevant Minority Development Department scheme for eligible professional / medical courses. A listed medical-education scheme specifies an income limit up to ₹8 lakh. Course list and current availability must be checked on MahaDBT.',
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

// Faculty data - Add faculty members here as photos and details become available
export const FACULTY = []

export const STUDENT_FACILITIES = [
  {
    title: 'Library',
    icon: 'book',
    description:
      'Our well-stocked library provides access to nursing textbooks, reference books, journals, and digital resources. Students can borrow up to 2 books for 1 week. The library is open Monday to Friday 9 AM to 8 PM (up to 9 PM during examinations), Saturday 9 AM to 4 PM, and Sundays 9 AM to 5 PM during examination time.',
    details: [
      'Undergraduate & GNM: Up to 2 books for 1 week',
      'Textbook overdue fine: ₹5.00 per day per book',
      'Reference book overdue fine: ₹25.00 per day per book',
      'Digital library with internet access for academic purposes',
      'Reference section: 10 students at a time for 30–60 minutes',
    ],
  },
  {
    title: 'Nursing Laboratories',
    icon: 'trust',
    description:
      'Fully equipped foundation nursing labs provide hands-on clinical training. Students can issue lab articles with prior written application submitted to class-wise lab in-charges one day in advance.',
    details: [
      'Article issue/replace time: 12 Noon – 1 PM',
      'Written application required one day prior',
      'Articles must be replaced same day or within 4 days',
      'Lost articles penalty: ₹50/- per week',
      'Students responsible for lab article care and efficiency checks',
    ],
  },
  {
    title: 'Computer Lab',
    icon: 'users',
    description:
      'A comprehensive IT facility with individual login credentials for all students. The computer lab supports academic research, MUHS updates, and online learning with monitored network security.',
    details: [
      'Individual password and login for each student',
      'MUHS website accessible for all students and teachers',
      'Educational sites only, non-educational sites blocked',
      'Network, internet connectivity and firewall monitored',
      'Time schedule managed by lab in-charge',
    ],
  },
  {
    title: 'Counselling Cell',
    icon: 'trust',
    description:
      'The Counselling Cell provides psychological support to students facing anxiety, stress, or adaptation difficulties. We believe every student has the innate ability to overcome barriers with proper guidance.',
    details: [
      '3-tier counselling referral system',
      '24/7 helplines available',
      'Walk-in / referral counselling',
      'Free psychologist & psychiatric consultation',
      'Confidential records, shared on need-to-know basis',
      'Psychiatric medications under faculty observation if needed',
    ],
  },
  {
    title: 'Health & Safety',
    icon: 'check',
    description:
      'Student health and safety is a priority. The campus follows strict health protocols with first-aid facilities and emergency procedures in place.',
    details: [
      '10 sick leaves per year with medical certificate',
      'Makeup classes arranged in 1:1 ratio for sick leave',
      'Personal protective equipment training provided',
      'Emergency evacuation procedures followed',
      'CCTV surveillance across entire campus',
    ],
  },
  {
    title: 'Anti-Ragging & Grievance Cell',
    icon: 'badge',
    description:
      'The college maintains a zero-tolerance anti-ragging policy based on UGC Regulations 2009. A Student Grievance Redressal Cell addresses concerns related to ragging, harassment, and academic issues.',
    details: [
      'Anti-Ragging Squad active at all times',
      'Based on UGC Regulation on Curbing Ragging 2009',
      'Sexual Harassment Redressal Committee in place',
      'Student Grievance Redressal Cell for complaints',
      'Disciplinary action: Warning, Restrictions, Penalty, Suspension, or Expulsion',
    ],
  },
]

export const EXAM_INFO = {
  description:
    'Examinations at Synergy College of Nursing are conducted as per MUHS and INC guidelines. Students must meet attendance requirements and academic standards to be eligible for examinations.',
  points: [
    'Examinations conducted as per Maharashtra University of Health Sciences (MUHS) guidelines',
    'Theory and practical examinations for all nursing programmes',
    'Internal assessment marks contribute to final results',
    'Minimum attendance requirement as per INC norms must be met',
    'Examination schedules announced well in advance on the notice board',
    'Results declared through the MUHS result portal',
  ],
  resultsLink: 'https://muhs.ac.in/',
  resultsNote: 'Results can be checked on the official MUHS examination portal.',
}

export const CODE_OF_CONDUCT = {
  description:
    'All students and staff of Synergy College of Nursing must follow the Code of Ethics and Conduct. At the time of admission, each student signs a statement accepting this Code and gives an undertaking to be regular in studies, complete the course, and clear all pending dues if discontinuing.',
  sections: [
    {
      title: 'Dress Code & Grooming',
      icon: 'users',
      points: [
        'Uniform policy protects personal safety of students and patients in clinical settings.',
        'Uniform must be worn during clinical postings, spotlessly clean and well ironed.',
        'Hair must be clean, groomed, and non-distracting.',
        'One pair of earrings (not longer than fingertip) allowed; no facial or other visible piercings.',
        'Nails well trimmed; no visible tattoos or nail polish.',
        'Student ID card must be visible at all times.',
        'Non-compliance may result in disciplinary consequences.',
      ],
    },
    {
      title: 'Attendance',
      icon: 'check',
      points: [
        'Regular class attendance and active engagement in the learning process is required.',
        'Timely notification to faculty is expected if absence is unavoidable.',
        'Lateness or absence without notification may result in dismissal for the clinical day.',
        'Students are permitted 10 sick leaves per year with medical certificate (makeup in 1:1 ratio).',
        'Missed clinical hours may be made up as arranged by faculty.',
      ],
    },
    {
      title: 'Health & Safety',
      icon: 'trust',
      points: [
        'Take reasonable care of and co-operate with health and safety measures.',
        'Follow safe work practices including proper use of personal protective equipment.',
        'Report all health and safety accidents, incidents and hazards to staff immediately.',
        'Follow emergency evacuation procedures.',
        'Report any sickness, major illness, or pregnancy to the teacher and class co-ordinator.',
      ],
    },
    {
      title: 'Library Rules',
      icon: 'book',
      points: [
        'Silence must be maintained; mobile phones on silent mode.',
        'Library hours: Mon–Fri 9 AM–8 PM (up to 9 PM during exams); Sat 9 AM–4 PM; Sun 9 AM–5 PM (exam time).',
        'Undergraduate & GNM: Up to 2 books for 1 week.',
        'Overdue fine: ₹5/day for textbooks, ₹25/day for reference books.',
        'Loss of borrower card: duplicate issued with ₹25 fine.',
        'No Due Certificate required after course completion.',
        'Internet use is for academic purposes only, one hour per user.',
      ],
    },
    {
      title: 'Academic Integrity',
      icon: 'badge',
      points: [
        'Academic integrity encompasses honesty, responsibility, and ethical standards.',
        'Plagiarism, cheating, collusion, and fabrication are serious offences.',
        'First violation leads to a warning; repeat offence may lead to fine, suspension, or expulsion.',
        'Students must meet course requirements per INC and MUHS guidelines.',
        'Professional conduct required during labs, clinical experiences, and field trips.',
      ],
    },
    {
      title: 'Anti-Ragging & Discipline',
      icon: 'pin',
      points: [
        'Zero-tolerance anti-ragging policy based on UGC Regulations 2009.',
        'Anti-Ragging Squad active at all times with patrolling and surprise inspection powers.',
        'Sexual Harassment Redressal Committee in place for reporting issues.',
        'Student Grievance Redressal Cell addresses complaints about ragging, harassment, and academics.',
        'Disciplinary actions: Warning, Restrictions, Monetary Penalty, Suspension, or Expulsion.',
        'Entire campus under CCTV surveillance for security.',
      ],
    },
  ],
}

export const NURSING_ETHICS = {
  description:
    'Students of nursing have a responsibility to society in learning the academic theory and clinical skills needed to provide nursing care. The Code of Academic and Clinical conduct is based on an understanding that to practice nursing as a student is an agreement to uphold the trust with which society has placed in us.',
  principles: [
    'Advocate the rights of all clients.',
    'Maintain client confidentiality.',
    'Take appropriate action to ensure the safety of clients, self, and others.',
    'Provide care for the client in a timely, compassionate, and professional manner.',
    'Communicate client care in a truthful, timely and accurate manner.',
    'Actively promote the highest level of moral and ethical principles and accept responsibility for our actions.',
    'Promote excellence in nursing by encouraging lifelong learning and professional development.',
    'Treat others with respect and promote an environment that respects human rights, values, and choice of cultural and spiritual beliefs.',
    'Collaborate in every reasonable manner with the academic faculty and clinical staff to ensure the highest quality of client care.',
    'Refrain from performing any technique or procedure for which the student has not been adequately trained.',
    'Refrain from any deliberate action or omission of care that creates unnecessary risk of injury to client, self, or others.',
    'Abstain from the use of alcoholic beverages or any substances in the academic and clinical setting that impair judgement.',
    'Strive to achieve and maintain optimal level of personal health.',
    'Uphold school policies and regulations related to academic and clinical performance.',
  ],
}

export const COUNSELLING_SERVICES = {
  description:
    'We believe that each individual/student has the innate ability to overcome barriers in achieving optimal fulfilment of their potentials. Students can avail this facility in case of severe anxiety, excessive stress, or inability to adapt to the current situation.',
  services: [
    '3-tier counselling referral',
    '24/7 helplines',
    'Walk-in / referral counselling',
    'Free psychologist & psychiatric consultation and medications',
    'Meticulous confidentiality in records, shared on strict need-to-know basis',
    'Psychiatric medications if necessary and prescribed, given under direct observation of faculty',
  ],
}
