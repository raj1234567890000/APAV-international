import React from "react";
import {
ShieldCheck,
Phone,
Building2,
Users,
Calendar,
FileText,
DollarSign,
Globe,
Barcode,

} from "lucide-react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import RatingsReviews from "./RatingsReview";
import Footer from "./Footer";
import Nav from "./Nav";



const categories = [
  {
    name: "RO System and Plant",
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-125x125.webp",
  },
  {
    name: "Ice Machine Spare Parts",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/4/504617735/IT/IA/BJ/1758521/15-minute-fiber-timer-125x125.jpg",
  },
  {
    name: "Drinking Water Fountain",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/4/503966878/AN/HS/SX/1758521/wall-mounted-drinking-water-fountain-with-bottle-filler-125x125.png",
  },
  {
    name: "RO Spares Parts",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/11/463595339/UC/CM/TE/1758521/commercial-water-filter-125x125.jpg",
  },
  {
    name: "Water Coolers",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/4/503965132/SR/FQ/KL/1758521/portable-water-cooler-125x125.jpg",
  },
  {
    name: "Water Chiller",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/1/375216558/RC/OE/CI/1758521/non-touch-water-cooler-125x125.jpg",
  },
  {
    name: "Industrial Freezer",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/4/503954697/EB/GU/WN/1758521/nirvana-visi-freezer-125x125.jpg",
  },
  {
    name: "Water Dispensers",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/4/503954697/EB/GU/WN/1758521/nirvana-visi-freezer-125x125.jpg",
  },
  {
    name: "HPN Spare Parts",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/1/375216558/RC/OE/CI/1758521/non-touch-water-cooler-125x125.jpg",
  },
];
//path: client/src/Components/Home.js

const products = [
  {
    name: "Non Touch Water Cooler",
    price: "₹ 3,12,700 / Piece",
    details: [
      "Storage Capacity: Instant",
      "Cooling Capacity: 30GPH",
      "Brand: Danfrost Haws",
    ],
    img: "https://5.imimg.com/data5/SELLER/Default/2024/1/375216558/RC/OE/CI/1758521/non-touch-water-cooler-250x250.jpg",
  },
  {
    name: "Customized RO Plant",
    price: "₹ 1,55,900 / Piece",
    details: [
      "RO Capacity: 1000 LPH",
      "Material: FRP",
      "Media: Activated Carbon + sand",
    ],
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
    {
    name: "Customized RO Plant",
    price: "₹ 1,55,900 / Piece",
    details: [
      "RO Capacity: 1000 LPH",
      "Material: FRP",
      "Media: Activated Carbon + sand",
    ],
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
];

//next sextion
const product = [
  {
    name: "50 Lph Reverse Osmosis System",
    price: "₹ 21,122 / Piece",
    details: [
      "RO Capacity: 50 lph ro",
      "Working Pressure: 50 PSI",
      "RO Membrane Type: Tfc",
    ],
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
  {
    name: "Wall Mounted Drinking Water Fountain",
    price: "₹ 4,15,800 / Piece",
    details: [
      "Material: Stainless Steel",
      "Dimension: 467×83×520 mm",
      "Frequency: 50/60 Hz",
    ],
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
  {
    name: "SS Water Coolers",
    price: "₹ 33,040 / Piece",
    details: [
      "Type: Hot and Cold",
      "Phase: Single",
      "Number of Taps: 2",
    ],
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
  {
    name: "Commercial Water Filter",
    price: "₹ 18,000 / Piece",
    details: [
      "Usage/Application: Commercial",
      "Filter Type: Multigrade Sand Filter",
    ],
    img: "https://5.imimg.com/data5/SELLER/Default/2022/12/SR/RB/SG/1758521/customized-ro-plant-250x250.webp",
  },
 
];

const productsVideo = [
     {
    name: "Customized RO Plant",
    video: "/videos/customized-ro.mp4",
  },
  {
    name: "Industrial RO System",
    video: "/videos/industrial-ro.mp4",
  },
  {
    name: "Commercial RO Plant",
    video: "/videos/commercial-ro.mp4",
  },
  ];



  

 
const Home = () => {
    
  return (
   
    <>
    <Nav/>
     {/* Categories Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 via-teal-50 to-pink-50 py-10 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 text-center">
            {categories.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center cursor-pointer transition-transform duration-300"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-contain rounded-full shadow-lg border-2 border-white"
                />
                <p className="mt-3 text-sm font-medium text-gray-800 group-hover:text-teal-600">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full bg-gradient-to-r from-pink-50 via-orange-50 to-yellow-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Featured Products
          </h2>
          <div className="flex space-x-6 overflow-x-auto scrollbar-hide py-4">
            {products.map((prod, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
                className="bg-white rounded-xl shadow-md min-w-[280px] max-w-[300px] flex-shrink-0 overflow-hidden flex flex-col"
              >
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {prod.name}
                  </h3>
                  <p className="text-green-700 font-bold mt-1">{prod.price}</p>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1 flex-1">
                    {prod.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full h-12 bg-green-700 hover:bg-green-800 text-white rounded-md font-semibold transition-transform duration-200 hover:scale-105 flex items-center justify-center">
                    Get Quote
                  </button>
                </div>
              </motion.div>
            ))}
           


           

            {/* View More Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl min-w-[280px] max-w-[300px] flex-shrink-0 flex items-center justify-center shadow-md"
            >
              <div className="text-center p-6">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2024/1/375825433/RL/IR/ZE/1758521/water-membrane-250x250.jpg"
                  alt="View More"
                  className="w-40 h-40 object-contain mx-auto opacity-80 cursor-pointer"
                />
                <p className="mt-4 text-gray-700 font-semibold">
                  View Complete Range Of Products →
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Product Grid Sections */}
      {[
        "RO System and Plant",
        "Ice Machine Spare Parts",
        "Drinking Water Fountain",
        "RO Spares Parts",
        "Water Coolers",
        "Water Chiller",
        "Industrial Freezer",
        "Water Dispensers",
        "HPN Spare Parts",
      ].map((title, idx) => (
        <section
          key={idx}
          className="py-12 bg-gradient-to-r from-teal-50 via-green-50 to-lime-50"
        >
          <div className="flex items-center justify-between px-6 mb-6">
            <h2 className="text-2xl font-bold">{title}</h2>
            <Button variant="contained" color="success">
              View All
            </Button>
          </div>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.map((prod, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
              >
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="w-full h-48 object-contain p-4"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {prod.name}
                  </h3>
                  <p className="text-green-700 font-bold mt-1">{prod.price}</p>
                  <ul className="text-sm text-gray-600 mt-2 space-y-1 flex-1">
                    {prod.details.map((d, idx2) => (
                      <li key={idx2}>{d}</li>
                    ))}
                  </ul>
                  <button className="mt-4 w-full h-12 bg-green-700 hover:bg-green-800 text-white rounded-md font-semibold transition-transform duration-200 hover:scale-105 flex items-center justify-center">
                    Get Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* Product Videos Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Product Videos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {productsVideo.map((vid, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                }}
                className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col"
              >
                <video
                  src={vid.video}
                  controls
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center flex-1 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold mb-4">{vid.name}</h3>
                  <button className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-semibold transition-transform duration-200 hover:scale-105 flex items-center justify-center">
                    Get Quote
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-r from-blue-50 to-teal-50 py-12"> <div className="max-w-6xl mx-auto px-6"> {/* Header */} <div className="text-center mb-10"> <h2 className="text-3xl md:text-4xl font-bold text-gray-800"> WELCOME TO </h2> <h1 className="text-2xl md:text-3xl font-semibold text-teal-700 mt-2"> APAV International Pvt Ltd </h1> <p className="mt-4 text-gray-600 max-w-2xl mx-auto"> We have established ourselves as a leading manufacturer of a wide range of Water Purifier Systems and Coolers. These offered products are highly appreciated for their high quality and super performance. </p> <p className="mt-4 text-lg font-semibold text-gray-800 flex justify-center items-center gap-2"> <Phone size={18} className="text-teal-600" /> 76689900092,76689900092 </p> <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"> Read More... </button> </div> {/* Contact Us */} <div className="bg-white shadow-md rounded-lg p-6 md:p-10"> <h3 className="text-2xl font-bold text-gray-800 mb-4"> GET IN TOUCH WITH US FOR BEST DEALS </h3> <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition"> Contact Us </button> {/* Company Details Grid */} <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700"> <div className="space-y-3"> <p className="flex items-center gap-2"> <Building2 size={18} className="text-teal-600" /> <span className="font-semibold">Nature of Business:</span> Trader - Retailer </p> <p className="flex items-center gap-2"> <Users size={18} className="text-teal-600" /> <span className="font-semibold">Total Employees:</span> Upto 10 People </p> <p className="flex items-center gap-2"> <Calendar size={18} className="text-teal-600" /> <span className="font-semibold">GST Registration Date:</span> 31-07-2017 </p> <p className="flex items-center gap-2"> <FileText size={18} className="text-teal-600" /> <span className="font-semibold">Legal Status of Firm:</span> Limited Company </p> </div> <div className="space-y-3"> <p className="flex items-center gap-2"> <DollarSign size={18} className="text-teal-600" /> <span className="font-semibold">Annual Turnover:</span> 1.5 - 5 Cr </p> <p className="flex items-center gap-2"> <Globe size={18} className="text-teal-600" /> <span className="font-semibold">Import Export Code (IEC):</span> 0508070945 </p> <p className="flex items-center gap-2"> <Barcode size={18} className="text-teal-600" /> <span className="font-semibold">GST No.:</span>4525253265223 </p> <p className="flex items-center gap-2"> <FileText size={18} className="text-teal-600" /> <span className="font-semibold">CIN No.:</span> U32109DL2004PTC125842 </p> <p className="flex items-center gap-2 text-green-700 font-semibold"> <ShieldCheck size={18} className="text-green-600" /> Trustseal Verified </p> </div> </div> </div> </div> </section>

      {/* Ratings & Footer */}
      <RatingsReviews />
      <Footer />
   
    </>
  );
};

export default Home;

