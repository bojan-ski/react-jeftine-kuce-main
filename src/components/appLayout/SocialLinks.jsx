import React from 'react'
import { Link } from 'react-router-dom'
// react icons
import { FaFacebookF, FaLinkedin } from "react-icons/fa"
import { BsInstagram, BsYoutube } from "react-icons/bs"
import { FaXTwitter } from 'react-icons/fa6'


const SocialLinks = () => {
    return (
        <ul className="social-links list-unstyled mb-2 d-flex justify-content-center align-items-center">
            <li className="social-link me-2">
                <Link to='https://www.facebook.com/groups/282177199514267/?ref=share_group_link' className="text-white fw-bold p-2" target="_blank">
                    <FaFacebookF size={20} />
                </Link>
            </li>
            <li className="social-link me-2">
                <Link to='https://twitter.com/i/flow/login?redirect_after_login=%2Fjeftinekuce' className="text-white fw-bold p-2" target="_blank">
                    <FaXTwitter size={20} />
                </Link>
            </li>
            <li className="social-link me-2">
                <Link to='https://www.linkedin.com/in/jeftine-ku%C4%87e-9089572ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="text-white fw-bold p-2" target="_blank">
                    <FaLinkedin size={20} />
                </Link>
            </li>
            <li className="social-link me-2">
                <Link to='https://www.facebook.com/groups/282177199514267/?ref=share_group_link' className="text-white fw-bold p-2" target="_blank">
                    <BsInstagram size={20} />
                </Link>
            </li>
            <li className="social-link">
                <Link to='https://www.youtube.com/@jeftinekuce7982' className="text-white fw-bold p-2" target="_blank">
                    <BsYoutube size={20} />
                </Link>
            </li>
        </ul>
    )
}

export default SocialLinks