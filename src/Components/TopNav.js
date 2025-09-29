import React from "react";
import { Phone, Mail, MapPin, FileText } from "lucide-react"; 
import Nav from "./Nav";

const TopNav = () => {
  return (
    <>
    <header className="w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4">
        
      
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1758535557154-af85568c1e89?w=80&h=80&auto=format&fit=crop&q=60"
            alt="APAV Logo"
            className="w-16 h-16 rounded-full object-cover shadow"
          />
          <div>
            <h1 className="text-xl font-bold">APAV Private Limited</h1>
            <div className="flex items-center text-sm opacity-90">
              <MapPin size={16} className="mr-1" /> New Delhi, Delhi
            </div>
            <div className="flex items-center text-sm opacity-90">
              <FileText size={16} className="mr-1" /> GST: 074AC78952321
            </div>
          </div>
        </div>

     
        <div className="flex items-center gap-6">
            <button>
          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-lg shadow hover:bg-blue-100 transition h-16">
            
            <Phone size={20} className="text-green-300" />
            <div className="">
              <h2 className="text-sm font-semibold">Call 7668900092</h2>
              <p className="text-xs opacity-80">81% Response rate</p>
            </div>
            
          </div>
          </button>
          
          <button className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-100 transition h-16">
            <Mail size={18} /> Send Email
          </button>
        </div>
      </div>
    </header>
    <Nav/>
    </>
  );
};

export default TopNav;
