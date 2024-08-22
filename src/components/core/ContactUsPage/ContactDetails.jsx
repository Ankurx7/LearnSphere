import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat with Us",
    description: "Our support team is available for live chat.",
    details: "support@learnsphere.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit Us",
    description: "Drop by our headquarters for a personal meeting.",
    details: "123 Knowledge Lane, Hinjewadi, Pune, Maharashtra 411057, India",
  },
  {
    icon: "IoCall",
    heading: "Call Us",
    description: "We are available for calls from Monday to Friday.",
    details: "+91 987 654 3210",
  },
  {
    icon: "IoMail",
    heading: "Email Us",
    description: "Send us an email for inquiries or support.",
    details: "info@learnsphere.com",
  },
  {
    icon: "BiCalendarCheck",
    heading: "Schedule a Meeting",
    description: "Book a time to discuss your needs with our experts.",
    details: "Book online at www.learnsphere.com/appointment",
  },
];

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-white shadow-lg p-6">
      {contactDetails.map((ele, i) => {
        // Determine the icon based on the icon name in the contactDetails array
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
        return (
            <div
             className="flex flex-col gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300"
              key={i}
            >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-teal-100 rounded-full shadow-md">
                <Icon size={24} className="text-teal-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {ele?.heading}
                </h2>
                <p className="text-sm text-gray-600">{ele?.description}</p>
                <p className="mt-1 font-medium text-gray-700">{ele?.details}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
