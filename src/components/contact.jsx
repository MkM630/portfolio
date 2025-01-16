import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-blue-500 underline decoration-blue-500 sm:text-4xl mb-10">Contact Me</h2>
        <p className="mt-4 text-lg text-gray-600">Feel free to reach out if you have any questions or would like to collaborate!</p>

        {/* Form Section */}
        <div className="mt-8 max-w-lg mx-auto">
          <form action="" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-1">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="sm:col-span-1">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full sm:w-auto py-3 px-6 bg-blue-500 text-white font-semibold rounded-md transition-all duration-300 hover:bg-blue-600 focus:outline-none"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Footer Section */}
        <footer className=" mt-12  text-center">
          <p className="text-lg text-gray-800">Connect with me:</p>
          <div className="flex justify-center mt-4 space-x-6 text-xl">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <i className="bx bxl-twitter"></i>
            </a>
          </div>
          <p className="text-sm mt-6 text-gray-500">© 2025 Mainak. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}
