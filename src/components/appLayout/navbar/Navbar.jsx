// components
import NavbarNavigation from "./NavbarNavigation.jsx"
import NavbarUserOnboarding from "./NavbarUserOnboarding.jsx"


const Navbar = () => {
  return (
    <>
      <header id="header" className="px-2">

        {/* NavbarUserOnboarding component */}
        <NavbarUserOnboarding />

        {/* NavbarUserOnboarding component */}
        <NavbarNavigation />
        
      </header>
    </>
  )
}

export default Navbar