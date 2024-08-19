import { Link } from "react-router-dom"
// utils func 
import scrollToTop from "../../../utils/scrollToTop.js"
//data
import appNavigationLinks from '../../../data/appNavigationLinks.js'
//asset
import footerLogo from '../../../assets/footer-assets/jeftine_kuce_logo_text_footer.png'
// react icons
import { FaFacebookF, FaLinkedin } from "react-icons/fa"
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"


const NavAndSocialFooterLinks = () => {
    return (
        <div className="footer-links py-4">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    {/* row item 1 */}
                    <div className="col-6 col-md-2 mb-4 mb-md-0">
                        <Link to='/'>
                            <img src={footerLogo} alt="footer-logo" className="img-fluid" />
                        </Link>
                    </div>

                    {/* row item 2 */}
                    <div className="col-12 col-md-7 mb-5 mb-md-0">
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
                    <div className="col-12 col-md-3">
                        <ul className="footer-social-links list-unstyled mb-2 d-flex justify-content-center align-items-center">
                            <li className="footer-social-link me-2">
                                <Link to='https://www.facebook.com/groups/282177199514267/?ref=share_group_link' className="text-white fw-bold p-2" target="_blank">
                                    <FaFacebookF size={20} />
                                </Link>
                            </li>
                            <li className="footer-social-link me-2">
                                <Link to='https://twitter.com/i/flow/login?redirect_after_login=%2Fjeftinekuce' className="text-white fw-bold p-2" target="_blank">
                                    <BsTwitter size={20} />
                                </Link>
                            </li>
                            <li className="footer-social-link me-2">
                                <Link to='https://www.linkedin.com/in/jeftine-ku%C4%87e-9089572ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="text-white fw-bold p-2" target="_blank">
                                    <FaLinkedin size={20} />
                                </Link>
                            </li>
                            <li className="footer-social-link me-2">
                                <Link to='https://www.facebook.com/groups/282177199514267/?ref=share_group_link' className="text-white fw-bold p-2" target="_blank">
                                    <BsInstagram size={20} />
                                </Link>
                            </li>
                            <li className="footer-social-link">
                                <Link to='https://www.youtube.com/@jeftinekuce7982' className="text-white fw-bold p-2" target="_blank">
                                    <BsYoutube size={20} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavAndSocialFooterLinks