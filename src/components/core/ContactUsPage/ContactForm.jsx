import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactForm = () => {
  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-8 lg:p-12 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Have an Idea? Let's Make It Happen!
      </h1>
      <p className="text-lg text-gray-600">
        We’re excited to hear about your project or idea. Share the details with us and let's explore how we can work together to bring your vision to life.
      </p>

      <div className="mt-6">
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
