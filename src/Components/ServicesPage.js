import React from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import Nav from "./Nav";
import Footer from "./Footer";

const services = [
  {
    title: "RO System Installation",
    desc: "Expert installation services for residential and commercial RO systems.",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
  {
    title: "Water Cooler Maintenance",
    desc: "Professional maintenance and repair services for water coolers.",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
  {
    title: "Industrial Water Purification",
    desc: "Custom solutions for industrial-scale water purification systems.",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
  {
    title: "Spare Parts Supply",
    desc: "Reliable supply of RO, water cooler, and industrial spare parts.",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
];

const ServicesPage = () => {
  
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
          Our Services
        </motion.h1>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-700 flex-1">{service.desc}</p>
                <Button
                  variant="contained"
                  className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 rounded-lg"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-700 mb-6">
            Contact us today and get expert advice for your water purification or industrial equipment needs.
          </p>
          <Button
            variant="contained"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg"
          >
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ServicesPage;
