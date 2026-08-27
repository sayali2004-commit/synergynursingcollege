import TopHeader from './TopHeader'
import Navbar from './Navbar'

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <>
      <TopHeader />
      <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </>
  )
}
