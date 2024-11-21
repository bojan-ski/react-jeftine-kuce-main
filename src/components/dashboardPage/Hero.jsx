import React from 'react'
// asset 
import heroImg from '../../assets/dashboard-assets/jeftine_kuce_hero.png'
// components
import DashboardFilterOptions from './DashboardFilterOptions.jsx';
import CounterBox from './CounterBox.jsx';


const Hero = () => {
    return (
        <section className='hero py-5'>
            <div className="hero-container">

                <div className="row">
                    {/* row item 1 */}
                    <div className="col-12 col-lg-6 hero-info d-flex flex-column justify-content-center">

                        <div className='hero-heading'>
                            <h1 className='fw-bold mb-4 fadeInUp'>
                                Portal JEFTINE KUĆE
                            </h1>
                            <h6 className='text-muted fadeInUp'>
                                Jedno mesto za nekretnine i sve oko nekretnina. Pretražite, kupite, prodajte nekretninu ili se samo posavetujte sa stručnim ljudima iz ove oblasti...
                            </h6>
                        </div>

                        <div className='counter-boxes'>
                            <div className="row">

                                {/* row item 1 - counter-box one */}
                                <CounterBox value='250' text='Nekretnina u ponudi' />

                                {/* row item 2 - counter-box two */}
                                <CounterBox value='150' text='Saradnika' />

                                {/* row item 3 - counter-box three */}
                                <CounterBox value='750' text='Zadovoljinih kupaca' />
                            </div>
                        </div>
                    </div>

                    {/* row item 2 */}
                    <div className="col-6 d-none d-lg-block hero-img">
                        <img src={heroImg} alt="slika kuce iz snova" className='img-fluid' />
                    </div>
                </div>

                {/* hero/dashboard filter component */}
                <DashboardFilterOptions />
            </div>
        </section>
    )
}

export default Hero