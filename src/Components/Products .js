import React from "react";
import { motion } from "framer-motion";

import Nav from "./Nav";
import Footer from "./Footer";

const products = [
  {
    name: "Non Touch Water Cooler",
    price: "₹ 3,12,700 / Piece",
    details: ["Storage Capacity: Instant", "Cooling Capacity: 30GPH", "Brand: Danfrost Haws"],
    img: "https://5.imimg.com/data5/SELLER/Default/2024/1/375216558/RC/OE/CI/1758521/non-touch-water-cooler-250x250.jpg",
  },
  {
    name: "Customized RO Plant",
    price: "₹ 1,55,900 / Piece",
    details: ["RO Capacity: 1000 LPH", "Material: FRP", "Media: Activated Carbon + sand"],
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
  {
    name: "Industrial RO System",
    price: "₹ 2,10,000 / Piece",
    details: ["RO Capacity: 2000 LPH", "Material: Stainless Steel", "High Efficiency Membrane"],
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },  {
    name: "Non Touch Water Cooler",
    price: "₹ 3,12,700 / Piece",
    details: ["Storage Capacity: Instant", "Cooling Capacity: 30GPH", "Brand: Danfrost Haws"],
    img: "https://5.imimg.com/data5/SELLER/Default/2024/1/375216558/RC/OE/CI/1758521/non-touch-water-cooler-250x250.jpg",
  },
  {
    name: "Customized RO Plant",
    price: "₹ 1,55,900 / Piece",
    details: ["RO Capacity: 1000 LPH", "Material: FRP", "Media: Activated Carbon + sand"],
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
  {
    name: "Industrial RO System",
    price: "₹ 2,10,000 / Piece",
    details: ["RO Capacity: 2000 LPH", "Material: Stainless Steel", "High Efficiency Membrane"],
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
   {
    name: "Customized RO Plant",
    price: "₹ 1,55,900 / Piece",
    details: ["RO Capacity: 1000 LPH", "Material: FRP", "Media: Activated Carbon + sand"],
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
  {
    name: "Industrial RO System",
    price: "₹ 2,10,000 / Piece",
    details: ["RO Capacity: 2000 LPH", "Material: Stainless Steel", "High Efficiency Membrane"],
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
];

const Products = () => {
  return (
    <>
    <Nav/>
    <section className="w-full min-h-screen bg-gradient-to-r from-blue-50 via-teal-50 to-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-48 object-contain p-4"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-green-700 font-bold mt-1">{product.price}</p>
                <ul className="text-sm text-gray-600 mt-2 space-y-1 flex-grow">
                  {product.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <button className="mt-4 w-full h-12 bg-green-700 hover:bg-green-800 text-white rounded-md font-semibold transition-transform duration-200 hover:scale-105 flex items-center justify-center">
                    Get Quote
                  </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Products;
