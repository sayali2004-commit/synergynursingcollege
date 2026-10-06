import AffiliationsBar from './AffiliationsBar'
import TopHeader from './TopHeader'
import Navbar from './Navbar'

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <AffiliationsBar />
      <TopHeader />
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </>
  )
}
