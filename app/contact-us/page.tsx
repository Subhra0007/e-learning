"use client";

import React, { useState, FormEvent } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLinkedinIn,
} from "react-icons/fa";

/* =====================
   ICON COMPONENTS
===================== */
const CallOutline = IoCallOutline as React.FC<React.SVGProps<SVGSVGElement>>;
const MailOutline = IoMailOutline as React.FC<React.SVGProps<SVGSVGElement>>;
const LocationOutline =
  IoLocationOutline as React.FC<React.SVGProps<SVGSVGElement>>;
const FacebookF = FaFacebookF as React.FC<React.SVGProps<SVGSVGElement>>;
const Instagram = FaInstagram as React.FC<React.SVGProps<SVGSVGElement>>;
const Whatsapp = FaWhatsapp as React.FC<React.SVGProps<SVGSVGElement>>;
const MapMarkerAlt = FaMapMarkerAlt as React.FC<React.SVGProps<SVGSVGElement>>;
const Linkedin = FaLinkedinIn as React.FC<React.SVGProps<SVGSVGElement>>;

/* =====================
   FORM DATA INTERFACE
===================== */
interface FormData {
  name: string;
  email: string;
  countryCode: string;
  contact: string;
  courses: string;
  message: string;
}

/* =====================
   CONTACT FORM
===================== */
const ContactForm: React.FC<{
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  responseMessage: string;
}> = ({ formData, setFormData, handleSubmit, loading, responseMessage }) => {
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, email: value }));

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(regex.test(value) ? "" : "Please enter a valid email");
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // Allow only digits
    const numericValue = value.replace(/\D/g, "");
    setFormData((prev) => ({ ...prev, contact: numericValue }));

    // ✅ Check for exactly 10 digits
    if (numericValue.length !== 10) {
      setContactError("Contact number must be exactly 10 digits");
    } else {
      setContactError("");
    }
  };

  return (
    <div className="bg-semiblueviolet rounded-xl p-6 shadow-lg text-black">
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
            className="p-3 rounded bg-gray-200 text-black placeholder-gray-700 focus:ring-2 focus:ring-Blueviolet outline-none"
          />
          <div className="flex flex-col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleEmailChange}
              required
              className={`p-3 rounded bg-gray-200 text-black placeholder-gray-700 focus:ring-2 focus:ring-Blueviolet outline-none ${
                emailError ? "border-red-500 border" : ""
              }`}
            />
            {emailError && (
              <span className="text-red-500 text-sm mt-1">{emailError}</span>
            )}
          </div>
        </div>

      {/* Country Code + Contact */}
<div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
  {/* Country Code */}
  <div className="flex flex-col">
    <PhoneInput
      country={"in"}
      value={formData.countryCode}
      onChange={(code) =>
        setFormData((prev) => ({ ...prev, countryCode: code }))
      }
      inputProps={{
        name: "countryCode",
        required: true,
      }}
      enableSearch
      countryCodeEditable
      containerStyle={{
        width: "100%",
      }}
      buttonStyle={{
        backgroundColor: "#fff",
        border: "1px solid #d1d5db",
        borderRight: "none",
        borderRadius: "8px 0 0 8px",
        padding: "0 10px",
      }}
      inputStyle={{
        width: "100%",
        height: "48px",
        border: "1px solid #d1d5db",
        borderRadius: "0 8px 8px 0",
        paddingLeft: "65px",
        fontSize: "16px",
        backgroundColor: "#fff",
        color: "#000",
      }}
      dropdownStyle={{
        color: "#000",
      }}
    />
  </div>

  {/* Contact Number */}
  <div className="flex flex-col">
    <input
      type="tel"
      name="contact"
      placeholder="Contact or WhatsApp Number"
      value={formData.contact}
      onChange={handleContactChange}
      required
      className={`w-full p-3 rounded bg-gray-200 text-black placeholder-gray-700 focus:ring-2 focus:ring-Blueviolet outline-none ${
        contactError ? "border-red-500 border" : ""
      }`}
    />
    {contactError && (
      <span className="text-red-500 text-sm mt-1">{contactError}</span>
    )}
  </div>
</div>


        {/* Courses */}
        <select
          name="courses"
          value={formData.courses}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, courses: e.target.value }))
          }
          className="w-full p-3 rounded bg-gray-200 text-black focus:ring-2 focus:ring-Blueviolet outline-none placeholder-gray-700"
        >
          <option>Complete Digital Marketing Course</option>
          <option>UX Design Thinking for Beginners</option>
          <option>30 Days Weight Loss Yoga & Fitness Course</option>
          <option>Learn JavaScript – Full Course for Beginners</option>
          <option>Mastering SEO for 2025</option>
          <option>Advanced React & Next.js Development</option>
          <option>Content Writing Masterclass</option>
        </select>

        {/* Message */}
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          placeholder="Briefly describe your message"
          className="w-full p-3 rounded bg-gray-200 text-black placeholder-gray-700 focus:ring-2 focus:ring-Blueviolet outline-none"
        />

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading || emailError !== "" || contactError !== ""}
            className="py-2 px-8 text-lg text-Blueviolet rounded-full font-medium shadow hover:brightness-110 transition border border-lightgray hover:bg-white"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {responseMessage && (
          <p className="text-center text-sm mt-4 font-medium text-black">
            {responseMessage}
          </p>
        )}
      </form>
    </div>
  );
};

/* =====================
   CONTACT INFO + MAP
===================== */
const ContactInfo: React.FC = () => (
  <div className="flex flex-col gap-8">
    <div className="relative rounded-xl p-6 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg bg-paleblue">
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-3 text-orange-500">
          Contact Information
        </h3>
        <p className="text-gray-300 font-bold">Tutor4Study</p>

        <p className="flex items-center gap-2 mt-3 text-gray-300">
          <CallOutline />
          <a href="tel:+917073437393" className="hover:underline">
            +91 7073437393
          </a>
        </p>

        <p className="flex items-center gap-2 mt-3 text-gray-300">
          <MailOutline />
          <a
            href="mailto:tutor4study24x7@gmail.com"
            className="hover:underline"
          >
            tutor4study24x7@gmail.com
          </a>
        </p>

        <p className="flex items-center gap-2 mt-3 text-gray-300">
          <LocationOutline />
          <span>Jodhpur, Rajasthan, India</span>
        </p>

        <div className="flex gap-4 mt-4 text-orange-500 text-lg">
          <FacebookF className="cursor-pointer hover:scale-110 transition" />
          <Instagram className="cursor-pointer hover:scale-110 transition" />
          <Whatsapp className="cursor-pointer hover:scale-110 transition" />
          <MapMarkerAlt className="cursor-pointer hover:scale-110 transition" />
          <Linkedin className="cursor-pointer hover:scale-110 transition" />
        </div>
      </div>
    </div>

    <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96896.92852121097!2d72.94814097660938!3d26.27033588207035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06ccb9%3A0x8114ea5b0ae1abb8!2sJodhpur%2C%20Rajasthan!5e1!3m2!1sen!2sin!4v1760699599943!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location map"
      />
    </div>
  </div>
);

/* =====================
   MAIN COMPONENT
===================== */
const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    countryCode: "+91",
    contact: "",
    courses: "Complete Digital Marketing Course",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    // Final client-side validation
    if (!/^\d{10}$/.test(formData.contact)) {
      setResponseMessage("Please enter a valid 10-digit contact number.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          contact: "",
          courses: "Complete Digital Marketing Course",
          message: "",
        });
      } else {
        setResponseMessage(`Failed: ${data.error || "Something went wrong."}`);
      }
    } catch (err) {
      console.error(err);
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-slate-100 text-black px-6 pt-10 overflow-hidden lg:px-0 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 pb-3">
        <ContactForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
          loading={loading}
          responseMessage={responseMessage}
        />
        <ContactInfo />
      </div>
      <hr />
    </section>
  );
};

export default ContactUs;
