import React from 'react';
import my_2image from "../assets/my-2image.jpg";

export default function About() {
    return (
        <div id="About" className=" md:p-8 lg:p-12 mt-10">
            <h1 className="flex justify-center text-3xl sm:text-4xl font-bold text-blue-500 underline decoration-blue-500">
                About
            </h1>

            <div className="flex   gap-20  items-center justify-around mt-10 ml-9 mr-4 lg:ml-24 lg:mr-24 ">
                {/* Image Section (only visible on large screens) */}
                <div className="image-section w-full lg:w-3/4 flex justify-center hidden lg:block">
                    <img
                        className="w-[350px] h-auto max-h-[500px] rounded-2xl object-cover shadow-xl"
                        src={my_2image}
                        alt="Mainak"
                    />
                </div>

                {/* Text Section */}
                <div className="text-section w-full  text-lg sm:text-xl leading-relaxed">
                    {/* For Large Screens */}
                    <div className="hidden lg:block">
                        <p className="mb-4">
                            👋 Hello! I'm <span className="font-bold text-blue-600">Mainak</span>, a passionate programmer and web developer. 🚀
                            I excel at solving complex problems using <span className="font-semibold">C, C++,</span> and
                            <span className="font-semibold"> Data Structures & Algorithms</span>. My journey in web development is all about building
                            engaging and user-friendly applications.
                        </p>

                        <p className="mb-4">
                            🚀 I value teamwork and continuous improvement. I thrive on collaboration, problem-solving, and contributing to impactful projects.
                            Let's connect, learn together, and create a positive impact in the tech community! 😊
                        </p>

                        <p className="mb-4">
                            🌟 I’m always looking forward to new challenges and opportunities to grow. Feel free to reach out—let’s make something amazing together! 💌
                        </p>
                    </div>

                    {/* For Smaller Screens */}
                    <div className="block lg:hidden">
                        <p className="mb-4">
                            👋 Hi! I'm <span className="font-bold text-blue-600">Mainak</span>, a programmer and web developer passionate about solving
                            problems with <span className="font-semibold">C, C++,</span> and <span className="font-semibold">DSA</span>.
                        </p>

                        <p className="mb-4">
                            🌐 I’m focused on building dynamic web applications and growing through collaboration. Let’s connect and make a difference! 😊
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
