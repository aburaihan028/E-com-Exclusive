import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import QrCode from "../../assets/footer/qrcode.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container m-auto grid grid-cols-1 md:grid-cols-5 gap-16">
        {/* Exclusive */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Exclusive</h2>
          <p className="mb-4">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>
          <div className="flex items-center border border-gray-500 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-sm px-3 py-2 outline-none w-full"
            />
            <button className="bg-white text-black px-4 py-2">→</button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Support</h2>
          <p className="text-sm">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm mt-3">exclusive@gmail.com</p>
          <p className="text-sm mt-3">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Account</h2>
          <ul className="space-y-3 text-sm">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Link</h2>
          <ul className="space-y-3 text-sm">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Download App</h2>
          <p className="text-sm mb-2">Save $3 with App New User Only</p>
          <div className="flex gap-2 mb-4">
            <img src={QrCode} alt="QR" className="w-23 h-23" />
            <div className="flex flex-col gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>
          <div className="flex gap-4 text-xl">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>

      {/* Bottom CopyRight */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
