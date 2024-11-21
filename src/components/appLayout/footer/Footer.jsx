import React from 'react'
// components
import MainFooterContent from "./MainFooterContent.jsx"
import NavAndSocialFooterLinks from "./NavAndSocialFooterLinks.jsx"
import RightsFooter from "./RightsFooter.jsx"


const Footer = () => {
  return (
    <footer id="footer">

      {/* MainFooterContent component */}
      <MainFooterContent />

      {/* NavAndSocialFooterLinks component */}
      <NavAndSocialFooterLinks />

      {/* RightsFooter component */}
      <RightsFooter />
    </footer>
  )
}

export default Footer