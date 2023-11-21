import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialMediaLinks = [
    { icon: FaFacebook, link: "https://www.facebook.com/" },
    { icon: FaTwitter, link: "https://twitter.com/" },
    { icon: FaInstagram, link: "https://www.instagram.com/" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/" },
  ];

  return (
    <footer className="bg-black text-white py-4 text-center">
      <div className="flex justify-center space-x-4">
        {socialMediaLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-500 transition duration-300"
          >
            {React.createElement(social.icon)}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
