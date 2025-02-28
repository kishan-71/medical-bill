// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-1 text-center">
      <p>&copy; {new Date().getFullYear()} Medical Bill App. Under Development 
      <span className="font-bold">Amreli IT</span>.</p>
    </footer>
  );
};

export default Footer;