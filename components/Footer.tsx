import React from "react";
import ArrowOutward from "./ui/arrow-outward";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 font-helvetica-neue">
      {/* Top Section: Call to Action */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Have a project in mind? <br />
          Let’s go work together
        </h2>
        <button className="border border-white px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-white hover:text-black transition group">
          GET IN TOUCH
          <span>
            <ArrowOutward
              width={10}
              height={10}
              className="invert group-hover:invert-0"
            />
          </span>
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 w-full mb-12"></div>

      {/* Bottom Section: Contact Info */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-md px-6">
        {/* Follow Us */}
        <div>
          <h3 className="text-white font-bold mb-3">Follow Us</h3>
          <p>Instagram</p>
          <p>PPT Credential</p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold mb-3">Contact</h3>
          <p>hello@behind.com</p>
          <p>+62 823 1028 2746</p>
        </div>

        {/* Office */}
        <div>
          <h3 className="text-white font-bold mb-3">Office</h3>
          <p>Jl. Amarta No.48, Ngalalangan,</p>
          <p>Sardonoharjo, Ngaglik, Sleman,</p>
          <p>Yogyakarta, 55581</p>
        </div>

        {/* Credits */}
        <div>
          <h3 className="text-white font-bold mb-3">Credits</h3>
          <p>Website Designed</p>
          <p>and Developed by SH Digital</p>
        </div>
      </div>

      {/* Large "Behind Studio" Text */}
      <div className="mt-16 text-center text-6xl md:text-[10rem] font-bold italic opacity-1">
        Be<span className="italic font-libre-baskerville font-light">hind</span>
        <span className="not-italic"> Studio</span>
      </div>
    </footer>
  );
};

export default Footer;
