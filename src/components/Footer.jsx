import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/LOGOWO.png" className="h-8" alt="Wedding Organizer" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Wedding Organizer</span>
            </a>
            <p className="text-base leading-relaxed text-gray-600 mt-7">
              We make your dream wedding a reality. Our team provides personalized services to ensure every detail of your special day is perfect. Let us take care of the planning, so you can focus on celebrating love.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              <li>
                <a href="#" title="Twitter" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#FFDE4D] focus:bg-[#FFDE4D]">
                  <FaTwitter className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="#" title="Facebook" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#FFDE4D] focus:bg-[#FFDE4D]">
                  <FaFacebookF className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="#" title="Instagram" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#FFDE4D] focus:bg-[#FFDE4D]">
                  <FaInstagram className="w-4 h-4" />
                </a>
              </li>
              <li>
                <a href="#" title="Github" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-[#FFDE4D] focus:bg-[#FFDE4D]">
                  <FaGithub className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Services</p>

            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" title="Wedding Planning" className="flex text-base text-black transition-all duration-200 hover:text-[#FFDE4D] focus:text-[#FFDE4D]"> Wedding Planning </a>
              </li>
              <li>
                <a href="#" title="Venue Selection" className="flex text-base text-black transition-all duration-200 hover:text-[#FFDE4D] focus:text-[#FFDE4D]"> Venue Selection </a>
              </li>
              <li>
                <a href="#" title="Catering Services" className="flex text-base text-black transition-all duration-200 hover:text-[#FFDE4D] focus:text-[#FFDE4D]"> Catering Services </a>
              </li>
              <li>
                <a href="#" title="Photography" className="flex text-base text-black transition-all duration-200 hover:text-[#FFDE4D] focus:text-[#FFDE4D]"> Photography </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Support</p>

            <ul className="mt-6 space-y-4">
              <li>
                <a href="#" title="FAQs" className="flex text-base text-black transition-all duration-200 hover:text-[#FFDE4D] focus:text-[#FFDE4D]"> FAQs </a>
              </li>
              <li>
                <a href="#" title="Customer Support" className="flex text-base text-black transition-all duration-200 hover:text-[#FFDE4D] focus:text-[#FFDE4D]"> Customer Support </a>
              </li>
              <li>
                <a href="#" title="Privacy Policy" className="flex text-base text-black transition-all duration-200 hover:text-[#FFDE4D] focus:text-[#FFDE4D]"> Privacy Policy </a>
              </li>
              <li>
                <a href="#" title="Terms & Conditions" className="flex text-base text-black transition-all duration-200 hover:text-[#FFDE4D] focus:text-[#FFDE4D]"> Terms & Conditions </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to our newsletter</p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#FFDE4D] caret-[#FFDE4D]"
                />
              </div>

              <button type="submit" className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-[#FFDE4D] rounded-md hover:bg-blue-700 focus:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">© Copyright 2024, All Rights Reserved by Wedding Organizer</p>
      </div>
    </section>
  );
};

export default Footer;
