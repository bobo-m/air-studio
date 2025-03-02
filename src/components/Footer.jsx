import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left">
        {/* Logo Section */}
        <div className="mb-20">
          <img
            src="https://static.wixstatic.com/media/fd1748_296bc430bbd34c1e90a6a8f255ea5c41~mv2.png/v1/fill/w_193,h_134,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Air%20logo%20stencil.png"
            alt="Air Studio"
            className="h-12 md:h-30" // Mobile ke liye chhota (h-12), Desktop ke liye bada (h-28)
          />
        </div>

        {/* Address Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Visit Our Studio</h3>
          <p className="text-gray-400">
            Plot No 2, Zero Road,
            <br /> Ghitorni, MG Road, <br />
            New Delhi, 110030
          </p>
          <p className="text-white font-semibold mt-2 cursor-pointer">
            Privacy Policy
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <p className="text-gray-400">+91 9958800381</p>
          <p className="text-gray-400">+91 9958800383</p>
          <p className="text-gray-400">contact@studioairdelhi.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
