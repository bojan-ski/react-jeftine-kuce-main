import React from 'react'
// asset
import contactImg from '../../assets/contact-assets/jeftine_kuce_contact_person.png'
// react icons
import { FaEnvelopeOpen, FaMapMarkedAlt } from 'react-icons/fa'
import { GiRotaryPhone } from 'react-icons/gi'


const ContactDetails = () => {
    return (
        <section className="contact-details pt-5">
            <div className="container">
                <div className="row">

                    {/* row item 1 */}
                    <div className="col-12 col-lg-5">
                        {/* heading-section */}
                        <div className="heading-section mb-5">
                            <h1 className="fw-bold mb-3">
                                Mi smo posvećeni najboljem odnosu cena/kvalitet
                            </h1>
                            <h6 className="mb-0">
                                Jedini portal koji pre svega ima za cilj da Vam ponudi nekretnine i sve u vezi nekretnina po isključivo najboljim cenama na tržištu.
                            </h6>
                        </div>

                        {/* contact-info */}
                        <div className="contact-info">
                            {/* contact info box 1 */}
                            <div className="box-info mb-4 d-flex align-items-center">
                                <div className="icon-info me-3 d-flex align-items-center">
                                    <FaMapMarkedAlt size={45} className='text-muted' />
                                </div>
                                <div className="content-details">
                                    <h6 className="text-muted fw-bold mb-1">
                                        Info Centar
                                    </h6>
                                    <p className="text-orange mb-0">
                                        Tabačka Čaršija BB
                                    </p>
                                    <p className="text-orange mb-0">
                                        12000 Požarevac
                                    </p>
                                </div>
                            </div>

                            {/* contact info box 2 */}
                            <div className="box-info mb-4 d-flex align-items-center">
                                <div className="icon-info me-3 d-flex align-items-center">
                                    <GiRotaryPhone size={45} className='text-muted' />
                                </div>
                                <div className="content-details">
                                    <h6 className="text-muted fw-bold mb-1">
                                        Kontakt Telefon
                                    </h6>
                                    <a href="tel:+381666070222" className='contact-phone-number'>
                                        <h3 className="text-orange">
                                            +381 66 60 70 222
                                        </h3>
                                    </a>
                                </div>
                            </div>
                            
                            {/* contact info box 3 */}
                            <div className="box-info mb-4 d-flex align-items-center">
                                <div className="icon-info me-3 d-flex align-items-center">
                                    <FaEnvelopeOpen size={45} className='text-muted' />
                                </div>
                                <div className="content-details">
                                    <h6 className="text-muted fw-bold mb-1">
                                        Naša adresa E-Pošte
                                    </h6>
                                    <a href="mailto:jeftinekuce@gmail.com" className='contact-email-address'>
                                        <p className="text-orange mb-0"> jeftinekuce@gmail.com </p>
                                    </a>
                                    <a href="mailto:jeftinekuceblog@gmail.com" className='contact-email-address'>
                                        <p className="text-orange mb-0"> jeftinekuceblog@gmail.com </p>
                                    </a>
                                    <a href="mailto:jeftinekucepodrska@gmail.com" className='contact-email-address'>
                                        <p className="text-orange mb-0"> jeftinekucepodrska@gmail.com </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* row item 2 */}
                    <div className="col-7 d-none d-lg-block text-center">
                        <div className="contact-image">
                            <img src={contactImg} alt="contact-img" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactDetails