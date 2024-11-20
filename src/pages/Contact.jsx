import React from 'react'
// components
import PageLocation from '../components/PageLocation.jsx';
import ContactDetails from '../components/contactPage/ContactDetails.jsx'
import ContactMap from '../components/contactPage/ContactMap.jsx'
import ContactForm from '../components/contactPage/ContactForm.jsx'


const Contact = () => {
  return (
    <div className='contact-page'>
      {/* page location */}
      <PageLocation />

      {/* section 1 - details */}
      <ContactDetails />

      {/* section 2 - map */}
      <ContactMap />

      {/* section 3 - form */}
      <ContactForm />
    </div>
  )
}

export default Contact