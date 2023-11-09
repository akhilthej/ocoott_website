import React from 'react';
import { Link } from 'react-router-dom';

import ocologo_footer from './OCOLogofooter.png';
import csdlogo_footer from './csdv2Logofooter.svg'

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* Subscription section 
      <section className="bg-black flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-screen-lg grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
          <div className="flex justify-center md:justify-end"></div>
          <div className="flex items-center">
            <div className="mx-auto md:mx-0">
              <h3 className="text-4xl font-bold text-white">Subscribe</h3>
              <p className="mt-2 max-w-[20rem] text-lg text-white">
                Join our weekly digest. You'll also receive some of our best posts today.
              </p>
              <form className="mt-4 flex flex-col">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:black-black/50 md:max-w-[18rem]"
                />
                <button
                  type="submit"
                  className="mt-4 w-full max-w-[14rem] rounded bg-yellow-500 hover:bg-white px-14 py-2 text-center text-black"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>*/}


{/* Footer */}
<section className="bg-black pb-5">
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-9 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:justify-items-center">
      {/* 1st Column - Logo and Description */}
      <div className="text-center">
        <Link to="/">
          <img
            src={ocologo_footer}
            className="mx-auto mb-2 h-10 sm:h-10"
            alt="ocologo_footer"
            width="200"
            height="200"
          />
        </Link>
        <p className="max-w-xs mt-4 text-sm text-gray-600 mx-auto">
          We are a web development and design company with a mission to help businesses establish an online presence. We achieve this by continually developing technology, offering expert support, and ensuring a seamless online experience.
        </p>
        <div className="flex justify-center space-x-6 text-gray-600 pt-2">
          {/* Social Media Icons */}
          <a href="https://www.facebook.com/profile.php?id=100087441512479" target="_blank" rel="noreferrer">
            <span className="sr-only">Facebook</span>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/cyber.space.digital/" target="_blank" rel="noreferrer">
            <span className="sr-only">Instagram</span>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/CyberSD1995" target="_blank" rel="noreferrer">
            <span className="sr-only">Twitter</span>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/akhilthej" target="_blank" rel="noreferrer">
            <span className="sr-only">GitHub</span>
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>

      {/* 2nd Column - Empty */}
      <div></div>

      {/* 3rd Column - Helpful Links */}
      <div className="text-center">
        <div>
          <p className="font-medium text-white">Helpful Links</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <Link to="/contactus">Contact</Link>
            <Link to="/contactus">FAQs</Link>
            <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital">Live Chat</a>
          </nav>
        </div>
      </div>

      {/* 4th Column - Legal */}
      <div className="text-center">
        <p className="font-medium text-white">Legal</p>
        <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
          <Link to="/privacypolicy">Privacy Policy</Link>
          <Link to="/terms&conditions">Terms &amp; Conditions</Link>
          <Link to="/returnpolicy">Cancellation & Refund Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/shipping&delivery">Shipping & Delivery</Link>
        </nav>
      </div>
    </div>

    {/* Additional Content */}
    <hr className="h-px my-8 border-0 bg-gray-700" />
    <p className="cursor-default text-center text-xs text-white">
      2023 © OTT.in <br />
      <p className=' text-xs text-gray-600 '>All CopyRights Reserved</p>
      {/* Designed and Developed by CyberSpaceDigital(www.cyberspacedigital.in) */}
      <div className="flex pt-5 items-center justify-center">
        <a href="www.cyberspacedigital.in">
          <img
            src={csdlogo_footer}
            className="h-10 sm:h-10"
            alt="ocologo_footer"
            width="200"
            height="200"
          />
        </a>
      </div>
    </p>
  </div>
</section>

    </footer>
  );
};

export default Footer;
