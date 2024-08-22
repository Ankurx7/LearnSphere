import React from "react"

import Footer from "../components/Common/Footer"
import ContactDetails from "../components/core/ContactUsPage/ContactDetails"
import ContactForm from "../components/core/ContactUsPage/ContactForm"

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-10/12 mb-20 max-w-maxContent flex-col justify-between gap-10 text-coolgrey-300 lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[43%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[57%]">
          <ContactForm />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
