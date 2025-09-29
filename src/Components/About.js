import React from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Nav/>
    <section className="w-full min-h-screen bg-gradient-to-r from-blue-50 via-teal-50 to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          About Us
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.img
            src="https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp"
            alt="About Us"
            className="rounded-xl shadow-lg w-full object-cover h-96"
            whileHover={{ scale: 1.05 }}
          />

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Our Mission & Vision
            </h2>
            <p className="text-gray-700 mb-4">
              We at APAV International Private Limited are committed to providing high-quality water
              purification solutions and industrial products that enhance the lives of our customers.
              With innovation and dedication, we strive to deliver unmatched service and reliability.
            </p>
            <p className="text-gray-700 mb-4">
              Our vision is to become a global leader in the water purification and industrial
              equipment sector, constantly adapting to the latest technologies and exceeding customer
              expectations.
            </p>
            <p className="text-gray-700 font-semibold">
              Founded by Ankur Chauchan, we combine expertise with a passion for excellence.
            </p>
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { title: "Quality", desc: "Top-notch products and services." },
            { title: "Innovation", desc: "Implementing latest technology." },
            { title: "Reliability", desc: "Trusted by customers worldwide." },
            { title: "Sustainability", desc: "Eco-friendly solutions." },
          ].map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center"
            >
              <h3 className="text-xl font-bold mb-2 text-teal-600">{value.title}</h3>
              <p className="text-gray-700">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default About;
