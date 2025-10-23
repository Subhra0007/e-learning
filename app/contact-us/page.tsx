"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
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

const CallOutline = IoCallOutline as React.FC<React.SVGProps<SVGSVGElement>>;
const MailOutline = IoMailOutline as React.FC<React.SVGProps<SVGSVGElement>>;
const LocationOutline = IoLocationOutline as React.FC<React.SVGProps<SVGSVGElement>>;
const FacebookF = FaFacebookF as React.FC<React.SVGProps<SVGSVGElement>>;
const Instagram = FaInstagram as React.FC<React.SVGProps<SVGSVGElement>>;
const Whatsapp = FaWhatsapp as React.FC<React.SVGProps<SVGSVGElement>>;
const MapMarkerAlt = FaMapMarkerAlt as React.FC<React.SVGProps<SVGSVGElement>>;
const Linkedin = FaLinkedinIn as React.FC<React.SVGProps<SVGSVGElement>>;

interface FormData {
  name: string;
  email: string;
  contact: string;
  countryCode: string;
  address: string;
  courses: string;
  message: string;
}

/* -------------------------------------------------
   CONTACT FORM
   ------------------------------------------------- */
const ContactForm: React.FC<{
  formData: FormData;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  responseMessage: string;
}> = ({ formData, handleChange, handleSubmit, loading, responseMessage }) => (
  <div className="bg-semiblueviolet rounded-xl p-6 sm:p-8 shadow-lg text-black">
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-800 text-black placeholder-black focus:ring-2 focus:ring-Blueviolet outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-gray-800 text-black placeholder-black focus:ring-2 focus:ring-Blueviolet outline-none"
        />
      </div>

      {/* Country code + Phone */}
      <div className="flex gap-3">
        <input
          type="text"
          name="countryCode"
          placeholder="Code"
          value={formData.countryCode}
          onChange={handleChange}
          required
          className="w-1/5 p-3 rounded bg-gray-800 text-black placeholder-black focus:ring-2 focus:ring-Blueviolet outline-none"
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact or WhatsApp Number"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-4/5 p-3 rounded bg-gray-800 text-black placeholder-black focus:ring-2 focus:ring-Blueviolet outline-none"
        />
      </div>

      {/* Address */}
      <input
        type="text"
        name="address"
        placeholder="Enter Address"
        value={formData.address}
        onChange={handleChange}
        required
        className="w-full p-3 rounded bg-gray-800 text-black placeholder-black focus:ring-2 focus:ring-Blueviolet outline-none"
      />

      {/* Courses */}
      <div>
        <label className="block mb-1 text-sm font-medium text-black">
          Courses you're interested in
        </label>
        <select
          name="courses"
          value={formData.courses}
          onChange={handleChange}
          className="w-full p-3 rounded bg-gray-800 text-black focus:ring-2 focus:ring-Blueviolet outline-none"
        >
          <option>Complete Digital Marketing Course</option>
          <option>UX Design Thinking for Beginners</option>
          <option>30 Days Weight Loss Yoga & Fitness Course</option>
          <option>Learn JavaScript – Full Course for Beginners</option>
          <option>Mastering SEO for 2025</option>
          <option>Advanced React & Next.js Development</option>
          <option>Content Writing Masterclass</option>
        </select>
      </div>

      {/* Message */}
      <textarea
        name="message"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        placeholder="Briefly describe your message"
        className="w-full p-3 rounded bg-gray-800 text-black placeholder-black focus:ring-2 focus:ring-Blueviolet outline-none"
      />

      {/* Submit */}
      <div className="flex justify-center">
        <button
          type="submit"
          disabled={loading}
          className="py-2 px-8 bg-grey500 text-black font-semibold rounded-full shadow-lg shadow-black/50 hover:brightness-110 transition"
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

/* -------------------------------------------------
   CONTACT INFO + MAP
   ------------------------------------------------- */
const ContactInfo: React.FC = () => (
  <div className="flex flex-col gap-8">
    {/* Info card */}
    <div className="relative rounded-xl p-6 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg bg-paleblue">

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-3 text-orange-500">
          Contact Information
        </h3>
        <p className="text-gray-300 font-bold">Cyberspace Works</p>

        <p className="flex items-center gap-2 mt-3 text-gray-300">
          <CallOutline />
          <a href="tel:+911234567890" className="hover:underline">
            +91 1234567890
          </a>
        </p>

        <p className="flex items-center gap-2 mt-3 text-gray-300">
          <MailOutline />
          <a href="mailto:abc@gmail.com" className="hover:underline">
            abc@gmail.com
          </a>
        </p>

        <p className="flex items-center gap-2 mt-3 text-gray-300">
          <LocationOutline />
          <span>Jodhpur, Rajasthan, India</span>
        </p>

        <div className="flex gap-4 mt-4 text-orange-500 text-lg">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookF className="cursor-pointer hover:scale-110 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="cursor-pointer hover:scale-110 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Whatsapp className="cursor-pointer hover:scale-110 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <MapMarkerAlt className="cursor-pointer hover:scale-110 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="cursor-pointer hover:scale-110 transition" />
          </a>
        </div>
      </div>
    </div>

    {/* Map */}
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

/* -------------------------------------------------
   MAIN COMPONENT – GRID LAYOUT
   ------------------------------------------------- */
const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    contact: "",
    countryCode: "+91",
    address: "",
    courses: "Complete Digital Marketing Course",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

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
          contact: "",
          countryCode: "+91",
          address: "",
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
    <section className="relative bg-slate-100 text-black px-6 pt-10 overflow-hidden lg:px-0">
      {/* GRID CONTAINER */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT – FORM */}
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          loading={loading}
          responseMessage={responseMessage}
        />

        {/* RIGHT – INFO + MAP */}
        <ContactInfo />
      </div>
    </section>
  );
};

export default ContactUs;