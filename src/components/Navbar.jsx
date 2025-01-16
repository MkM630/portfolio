import React, { useState } from "react";

export default function Navbar() {
  const [selected, setSelected] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  const handleSelect = (item) => {
    setSelected(item);
    setIsMenuOpen(false); // Close the menu on selection
    if (item === "Resume") {
      handleDownload(); // Trigger download if "Resume" is selected
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/my_resume.pdf"; // Ensure the resume file is located in the public folder
    link.download = "my_resume.pdf"; // Set the downloaded file name
    link.click();
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 md:px-20 py-4 text-xl font-bold">
        {/* MKM Logo */}
        <div className="text-2xl">MKM</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-wrap justify-center gap-6 md:gap-10">
          {["Home", "About", "Skills", "Project", "Resume"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`hover:underline decoration-blue-500 underline-offset-8 ${
                selected === item ? "underline decoration-blue-500 underline-offset-8" : ""
              }`}
              onClick={() => handleSelect(item)}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl focus:outline-none md:hidden"
        >
          <div className="flex flex-col gap-1">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center gap-4 bg-white shadow-md md:hidden">
          {["Home", "About", "Skills", "Project", "Resume"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`hover:underline decoration-blue-500 underline-offset-8 ${
                selected === item ? "underline decoration-blue-500 underline-offset-8" : ""
              }`}
              onClick={() => handleSelect(item)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
