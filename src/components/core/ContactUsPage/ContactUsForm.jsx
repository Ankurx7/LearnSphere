import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../../../data/countrycode.json";
import { apiConnector } from "../../../services/apiConnector";
import { contactusEndpoint } from "../../../services/apis";

const ContactUsForm = () => {
  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // Initialize form handling methods from react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  // Handle form submission
  const submitContactForm = async (data) => {
    try {
      setLoading(true);
      await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setLoading(false);
    }
  };

  // Reset form fields after successful submission
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
        subject: "",
        consent: false,
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form
      className="flex flex-col gap-6 p-6 border border-gray-300 rounded-lg shadow-md"
      onSubmit={handleSubmit(submitContactForm)}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>

      <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
        <div className="flex flex-col gap-2 lg:w-1/2">
          <label htmlFor="firstname" className="font-semibold text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            placeholder="Enter your first name"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            {...register("firstname", { required: "First name is required" })}
          />
          {errors.firstname && (
            <span className="text-red-600 text-sm">{errors.firstname.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2 lg:w-1/2">
          <label htmlFor="lastname" className="font-semibold text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            placeholder="Enter your last name"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            {...register("lastname")}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-semibold text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          {...register("email", { required: "Email address is required" })}
        />
        {errors.email && (
          <span className="text-red-600 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="font-semibold text-gray-700">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          placeholder="Enter subject"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          {...register("subject")}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phoneNo" className="font-semibold text-gray-700">
          Phone Number
        </label>
        <div className="flex gap-4">
          <div className="flex-1">
            <select
              id="countrycode"
              className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
              {...register("countrycode", { required: "Country code is required" })}
            >
              {CountryCode.map((country, i) => (
                <option key={i} value={country.code}>
                  {country.code} - {country.country}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <input
              type="tel"
              id="phoneNo"
              placeholder="123-456-7890"
              className="border border-gray-300 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
              {...register("phoneNo", {
                required: "Phone number is required",
                minLength: { value: 10, message: "Phone number is too short" },
                maxLength: { value: 15, message: "Phone number is too long" }
              })}
            />
            {errors.phoneNo && (
              <span className="text-red-600 text-sm">{errors.phoneNo.message}</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-semibold text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Enter your message here"
          className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <span className="text-red-600 text-sm">{errors.message.message}</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="consent"
          className="h-4 w-4 border-gray-300 rounded text-teal-500 focus:ring-teal-500"
          {...register("consent", { required: "You must agree to the terms" })}
        />
        <label htmlFor="consent" className="text-gray-700">
          I agree to the <a href="/privacy-policy" className="text-teal-500 hover:underline">Privacy Policy</a>
        </label>
        {errors.consent && (
          <span className="text-red-600 text-sm">{errors.consent.message}</span>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`bg-teal-500 text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-teal-600 transition-all duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactUsForm;
