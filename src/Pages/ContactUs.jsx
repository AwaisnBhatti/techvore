import React from "react";
import Map from "../Component/Map";
import { ChevronDown } from "lucide-react";
import phone from "../assets/phone.png";
import map from "../assets/map.png";
import email from "../assets/email.png";
import megaphone from "../assets/megaphone.png";
import Container from "../Component/Container";

export default function ContactInfo() {
  return (
    <>
      <Container>
        <section className="py-12 my-20">
          {/* Added flex flex-col items-center sm:items-start text-center sm:text-left */}
          <div className="max-w-6xl mx-auto flex flex-col items-center sm:items-start text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-5">
              Contact Information
            </h1>
            <p className="text-lg sm:text-lg md:text-xl mb-12 md:mb-20 leading-snug">
              Connect with Techvore to create responsive,
              <br className="block sm:hidden" />
              user-friendly websites that deliver quality
              <br className="hidden sm:block md:hidden" />
              and performance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
              {/* Phone */}
              <div className="flex flex-col items-center text-center">
                <img src={phone} alt="phone" className="w-16 sm:w-20 mb-2" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Phone
                </h2>
                <p>+03 83738 38383</p>
                <p>+03 83738 38383</p>
              </div>

              {/* Address */}
              <div className="flex flex-col items-center text-center">
                <img src={map} alt="map" className="w-16 sm:w-20 mb-2" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  Address
                </h2>
                <p>Office: 30 N Gould St, Ste 100 Sheridan, WY 82801 USA</p>
                <p> WY 82801 USA</p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center text-center">
                <img src={email} alt="email" className="w-16 sm:w-20 mb-2" />
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  E-mail
                </h2>
                <p>info@techvorellc.com</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center min-h-screen my-12 sm:my-20">
            {/* Main Container */}
            <div className="w-full max-w-6xl bg-black text-white px-6 sm:px-12 md:px-16 lg:px-20 xl:px-32 py-12 sm:py-16 md:py-20 rounded-[30px] sm:rounded-[40px] shadow-2xl">
              {/* Header Section - Added items-center md:items-start text-center md:text-left */}
              <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8 mb-6 md:mb-8 text-center md:text-left">
                <div className="relative flex-shrink-0">
                  <img
                    src={megaphone}
                    alt="megaphone"
                    className="w-32 sm:w-36 md:w-40"
                  />
                </div>

                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
                    Let's Grow <br />
                    <span className="text-brand-blue">Your Business</span>
                  </h1>
                </div>
              </div>

              <p className="text-white mb-6 sm:mb-8 md:mb-12 font-light text-center md:text-left">
                Get Your Free Marketing Analysis Worth $999
              </p>

              {/* Form Section */}
              <form
                className="space-y-4 sm:space-y-6 md:space-y-8 flex flex-col items-center md:items-start"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
                  {/* Business Name */}
                  <div className="space-y-2 flex flex-col items-center sm:items-start">
                    <label className="text-sm text-white">Business Name</label>
                    <input
                      type="text"
                      placeholder="Enter Business Name"
                      className="w-full bg-[#111111] border border-gray-800 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Your Name */}
                  <div className="space-y-2 flex flex-col items-center sm:items-start">
                    <label className="text-sm text-white">Your Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full bg-[#111111] border border-gray-800 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2 flex flex-col items-center sm:items-start">
                    <label className="text-sm text-white">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+92"
                      className="w-full bg-[#111111] border border-gray-800 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2 flex flex-col items-center sm:items-start">
                    <label className="text-sm text-white">Email Address</label>
                    <input
                      type="email"
                      placeholder="example@gmail.com"
                      className="w-full bg-[#111111] border border-gray-800 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Service Industry Dropdown */}
                <div className="space-y-2 w-full flex flex-col items-center sm:items-start">
                  <label className="text-sm text-white">Service Industry</label>
                  <div className="relative w-full">
                    <select className="w-full bg-[#111111] border border-gray-800 rounded-lg py-3 px-4 text-gray-300 appearance-none focus:outline-none focus:border-blue-500 transition-colors">
                      <option>IT Services</option>
                      <option>Trucking</option>
                      <option>Web</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-3.5 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2 w-full flex flex-col items-center sm:items-start">
                  <label className="text-sm text-white">
                    Description (optional)
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-[#111111] border border-gray-800 rounded-lg py-3 px-4 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#00AEEF] hover:bg-blue-500 text-white py-4 px-6 sm:px-8 md:px-12 rounded-full transition-all duration-200 text-lg font-thin"
                >
                  Get My Free Analysis
                </button>
              </form>
            </div>
          </div>

          <Map />
        </section>
      </Container>
    </>
  );
}
