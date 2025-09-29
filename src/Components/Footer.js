import React from "react";
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-50 via-teal-50 to-pink-50 text-gray-900 pt-16 relative overflow-hidden">
      {/* Decorative gradient shapes */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-200 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-200 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 relative z-10">
        
        {/* Contact Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2 inline-block">Contact Us</h3>
          <p>Ankur Chauchan (Director)</p>
          <p>APAV International Private Limited</p>
          <p>B 114, New Delhi - 110066, Delhi, India</p>
          <div className="flex items-center gap-2 mt-3 hover:text-gray-700 transition">
            <MapPin size={18} />
            <span>Get Directions</span>
          </div>
          <div className="flex items-center gap-2 mt-2 hover:text-gray-700 transition">
            <Mail size={18} />
            <span>Send Email</span>
          </div>
          <div className="flex items-center gap-2 mt-2 hover:text-gray-700 transition">
            <Phone size={18} />
            <span>7668900092</span>
          </div>
        </div>

        {/* Describe Requirement */}
        <div>
          <h3 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2 inline-block">Describe Your Requirement</h3>
          <textarea
            placeholder="I would like to..."
            className="w-full p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-300 mt-2"
            rows={4}
          ></textarea>
          <motion.button
  whileHover={{ scale: 1.05, backgroundColor: "#14B8A6" }} // teal-500 → slightly brighter on hover
  whileTap={{ scale: 0.95 }}
  className="mt-4 bg-teal-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
>
  Submit
</motion.button>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2 inline-block">Company</h3>
          <ul className="space-y-3 text-gray-700">
            {["About Us", "Testimonial", "Sitemap", "Contact Us"].map((link, i) => (
              <li
                key={i}
                className="hover:text-gray-900 cursor-pointer transition duration-300 relative group"
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-900 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Products / Social */}
        <div>
          <h3 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2 inline-block">Our Products</h3>
          <ul className="space-y-2 text-gray-700 mb-6">
            {[
              "RO System and Plant",
              "Ice Machine Spare Parts",
              "Drinking Water Fountain",
              "RO Spares Parts",
              "Water Coolers",
              "Water Chiller",
              "Industrial Freezer",
              "Water Dispensers",
              "View All",
            ].map((product, i) => (
              <li
                key={i}
                className="hover:text-gray-900 cursor-pointer transition duration-300"
              >
                {product}
              </li>
            ))}
          </ul>
          <h3 className="text-2xl font-bold mb-4 border-b border-gray-300 pb-2 inline-block">Share Us:</h3>
          <div className="flex gap-4">
            <Facebook size={22} className="hover:text-blue-500 cursor-pointer transition" />
            <Twitter size={22} className="hover:text-blue-400 cursor-pointer transition" />
            <Linkedin size={22} className="hover:text-blue-700 cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-12 py-6 text-center text-gray-700 text-sm relative z-10">
        ©APAV International Private Limited. All Rights Reserved (Terms of Use) <br />
        Developed by <span className="font-semibold text-teal-700">Rohit Rajput</span>
      </div>
    </footer>
  );
}
