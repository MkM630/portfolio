import React from "react";
import exampleImage from "../assets/my_image.jpg"; // Adjusted the path


export default function Home() {
  return (
    <>
      <div
        id="Home"
        className="mt-10 lg:mt-24 mb-5 p-5 flex flex-wrap justify-around items-center ml-5 mr-5"
      >
        <div className="mb-4 max-w-lg text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-10 mb-10">
            Hi, <br />
            I'm<span className="text-blue-500"> Mainak,</span>
            <br />
            Web Designer
          </h1>
          <a
            href="mailto:mainakmaitra22@gmail.com"
            className="bg-blue-500 text-lg sm:text-xl text-white py-3 px-6 sm:px-8 rounded hover:bg-blue-600 font-semibold transition duration-300"
          >
            Contact
          </a>

          <div className="flex flex-wrap space-x-4 justify-center sm:justify-start mt-10">
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/mainakmaitra/"
              className="text-blue-600 hover:text-blue-800 text-2xl sm:text-3xl transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>

            {/* GitHub Link */}
            <a
              href="https://github.com/MkM630"
              className="text-gray-800 hover:text-black text-2xl sm:text-3xl transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>

            {/* LeetCode Link */}
            <a
              href="https://leetcode.com/u/mm3076/"
              className="hover:opacity-80 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                alt="LeetCode"
                className="w-6 h-6 sm:w-8 sm:h-8 mt-1"
              />
            </a>

            {/* Codeforces Link */}
            <a
              href="https://codeforces.com/profile/M630M"
              className="hover:opacity-80 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3LVEIg_6x2wqlPG8pruOUnUi-wEvnw1eC0w&s"
                alt="Codeforces"
                className="w-5 h-6 sm:w-8 sm:h-8"
              />
            </a>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end">
          <img
            src={exampleImage}
            alt="Mainak"
            className="w-[250px] sm:w-[300px] h-[350px] sm:h-[400px] rounded-lg shadow-md"
          />
        </div>
      </div>
    </>
  );
}
