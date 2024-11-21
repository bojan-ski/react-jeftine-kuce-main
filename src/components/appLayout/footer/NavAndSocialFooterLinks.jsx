import React from 'react'
import { Link } from "react-router-dom"
// utils func 
import scrollToTop from "../../../utils/scrollToTop.js"
//data
import appNavigationLinks from '../../../data/appNavigationLinks.js'
//asset
import footerLogo from '../../../assets/footer-assets/jeftine_kuce_logo_text_footer.png'
// components
import SocialLinks from "../SocialLinks.jsx"


const NavAndSocialFooterLinks = () => {
    return (
        <div className="footer-links py-4">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    {/* row item 1 */}
                    <div className="col-6 col-lg-2 mb-4 mb-lg-0">
                        <Link to='/'>
                            <img src={footerLogo} alt="footer-logo" className="img-fluid" />
                        </Link>
                    </div>

                    {/* row item 2 */}
                    <div className="col-12 col-lg-7 mb-5 mb-lg-0">
                        <ul className="footer-nav-links list-unstyled mb-0 d-flex justify-content-around align-items-center">
                            {appNavigationLinks.map((link, idx) => {
                                return <li className="footer-nav-link" key={idx}>
                                    <Link to={link.href} className="fw-bold" onClick={() => scrollToTop()}>
                                        {link.label}
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </div>

                    {/* row item 3 */}
                    <div className="col-12 col-lg-3">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavAndSocialFooterLinks