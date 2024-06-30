import React from 'react';
import logo from "./img/GreeLogoWhite.png";
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const pages = [
    { name: "მთავარი", href: "/" },
    { name: "ჩვენ შესახებ", href: "/about" },
    { name: "პროდუქცია", href: "#" },
    { name: "სერვისები", href: "#" },
    { name: "კონტაქტი", href: "/contact" },
  ];

  const socialMedia = [
    { name: "Facebook", href: "https://www.facebook.com", icon: <FaFacebook className='w-5 h-auto'/> },
    { name: "Instagram", href: "https://www.instagram.com", icon: <FaInstagram className='w-5 h-auto'/> },
    { name: "YouTube", href: "https://www.youtube.com", icon: <FaYoutube className='w-5 h-auto'/> },
  ];

  return (
    <footer className="bg-customBlue text-gray-300 mt-10" style={{ fontFamily: "tkt" }}>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-auto mb-4 md:mb-0 text-center md:text-left">
            <img className="h-12 w-auto mx-auto md:mx-0" src={logo} alt="Gree Logo" />
          </div>
          <div className="w-full md:w-auto flex-1 text-center mb-4 md:mb-0">
            <nav className="flex justify-center space-x-6 flex-wrap">
              {pages.map((page) => (
                <a key={page.name} href={page.href} className="text-gray-300 hover:text-white">{page.name}</a>
              ))}
            </nav>
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
            <div className="flex justify-center md:justify-end items-center space-x-4">
              {socialMedia.map((media) => (
                <a key={media.name} href={media.href} className="text-gray-300  hover:text-white" target="_blank" rel="noopener noreferrer">
                  {media.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white pt-8">
          <div className="flex flex-wrap justify-between items-center text-center md:text-left">
            <p className="w-full md:w-auto mb-4 md:mb-0">&copy; 2024 Gree-Georgia. All rights reserved.</p>
            <div className="w-full md:w-auto flex justify-center md:justify-end items-center">
              <span className="mr-2">Web Design & Development by</span>
              <a href="https://www.facebook.com/profile.php?id=61559932766757" className="text-white">გარგარი • GarGari</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
