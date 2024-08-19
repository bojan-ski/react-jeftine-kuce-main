// data
import testimonials from '../../data/testimonials.js';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
// React icons
import { TbMessageStar } from 'react-icons/tb';


const Testimonials = () => {
    return (
        <section className='testimonials py-5'>
            <div className="container">
                
                <div className="section-header text-center mb-5">
                    <h2 className="fs-1 fw-bold mb-3">
                        Šta su o nama rekli naši klijenti
                    </h2>
                    <p className='text-muted fw-bold mb-0'>
                        Šta god radili, uvek na kraju presudi ono što dobijete kao povratnu informaciju od vaših klijenata. Mi smo imali tu sreću da su svi oni koji su nam se obratili u najmanju ruku bar dobili kvalitetan savet. Evo nekoliko komentara naših klijenata...
                    </p>
                </div>

                {/* testimonials - swiper/slider */}
                <div className="testimonials-carousel mb-4">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                            pauseOnMouseEnter: true
                        }}
                        speed={1000}
                        modules={[Autoplay]}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            }
                        }}
                    >
                        {testimonials?.map(testimonial => {
                            return (
                                <SwiperSlide key={testimonial.userID} className="text-center">
                                    <div className="swiper-content p-1">
                                        <div className="swiper-content-testimonial rounded-4">
                                            <TbMessageStar size={30} className='text-orange mb-4' />
                                            <p className='fst-italic mb-0'>
                                                {testimonial.userTestimonial}
                                            </p>
                                        </div>
                                        <div className="swiper-content-author py-5">
                                            <h6 className='fw-bold mb-1'>
                                                {testimonial.userName}
                                            </h6>
                                            <p className='fw-bold text-muted mb-0'>
                                                {testimonial.userProfession}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

                {/* testimonial contact info */}
                <div className="testimonial-contact-info text-center border rounded-5 py-1 px-2 mx-5">
                    <p className="mb-0 me-2 fw-bold text-muted d-block d-md-inline-block">
                        Postanite jedan on naših zadovoljnih klijenata i kupite ili prodajte nekretninu uz našu pomoć.
                    </p>
                    <a href="tel:+381666070222" className='fw-bold text-orange-hover'>
                        Pozovite nas: +381 66 60 70 222
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Testimonials