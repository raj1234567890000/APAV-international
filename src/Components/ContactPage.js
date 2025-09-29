import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "./Footer";
import Nav from "./Nav";

const ContactPage = () => {
  return (
    <>
    <Nav/>
    <section className="w-full min-h-screen bg-gradient-to-r from-blue-50 via-teal-50 to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Header */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Contact Us
        </motion.h1>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-gray-700">
              We would love to hear from you! Reach out for inquiries, quotes, or support.
            </p>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-teal-500" />
              <span>New Delhi - 110066, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-teal-500" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={20} className="text-teal-500" />
              <span>+91 7668900092</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
              <Button
                type="submit"
                className="mt-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg w-full"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 rounded-xl overflow-hidden shadow-md"
        >
 <iframe
  title="Google Map - New Delhi, India"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14077.547544110668!2d77.19205844999999!3d28.64480075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2f3f3f3f3f3%3A0xf3f3f3f3f3f3f3f3!2sNew%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1695980221111!5m2!1sen!2sin"
  width="100%"
  height="400"
  allowFullScreen={true}
  loading="lazy"
  className="border-0"
/>
        </motion.div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactPage;
