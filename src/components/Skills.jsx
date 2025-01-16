import React from 'react';
import workImage from "../assets/work3.jpg";

export default function Skills() {
    return (
        <section className="skills section" id="Skills">
            <h2 className="section-title text-center text-4xl font-bold mb-7 text-blue-500 underline decoration-blue-500 mt-10">
                Skills
            </h2>
            <div className="skills__container grid grid-cols-1 lg:grid-cols-2 m-10 lg:m-10 lg:ml-24 gap-10">
                {/* Professional Skills Section */}
                <div>
                    <h2 className="skills__subtitle text-2xl font-semibold mb-2">Professional Skills</h2>
                    <p className="skills__text text-lg text-gray-600 mb-5">
                        I specialize in front-end development with a strong command of HTML, CSS, JavaScript, and React js. Additionally, I have in-depth expertise in the TailwindCSS framework for creating efficient, responsive designs.
                    </p>

                    {/* Skills Data */}
                    <div className="skills__data ">
                        <div className="skills__names flex items-center gap-2">
                            <i className="bx bxl-html5 skills__icon text-2xl text-orange-600"></i>
                            <span className="skills__name text-lg font-semibold">HTML5</span>
                        </div>
                        <div className="skills__bar bg-gray-200 h-2 rounded ">
                            <div className="bg-orange-500 h-2 rounded w-[95%]"></div>
                        </div>
                        <div>
                            <span className="skills__percentage text-lg font-semibold">95%</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names flex items-center gap-2">
                            <i className="bx bxl-css3 skills__icon text-2xl text-blue-600"></i>
                            <span className="skills__name text-lg font-semibold">CSS3</span>
                        </div>
                        <div className="skills__bar bg-gray-200 h-2 rounded ">
                            <div className="bg-blue-500 h-2 rounded w-[85%]"></div>
                        </div>
                        <div>
                            <span className="skills__percentage text-lg font-semibold">85%</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names flex items-center gap-2">
                            <i className="bx bxl-javascript skills__icon text-2xl text-yellow-500"></i>
                            <span className="skills__name text-lg font-semibold">JAVASCRIPT</span>
                        </div>
                        <div className="skills__bar bg-gray-200 h-2 rounded ">
                            <div className="bg-yellow-500 h-2 rounded w-[65%]"></div>
                        </div>
                        <div>
                            <span className="skills__percentage text-lg font-semibold">65%</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div className="skills__names flex items-center gap-2">
                            <i className="bx bxl-react skills__icon text-2xl text-cyan-500"></i>
                            <span className="skills__name text-lg font-semibold">React</span>
                        </div>
                        <div className="skills__bar bg-gray-200 h-2 rounded mt-2">
                            <div className="bg-cyan-500 h-2 rounded w-[85%]"></div>
                        </div>
                        <div>
                            <span className="skills__percentage text-lg font-semibold">85%</span>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="skills__img-container mt-8 hidden lg:flex justify-center">
                    <img
                        src={workImage}
                        alt="Skills"
                        className="skills__img rounded-lg shadow-lg w-[400px] h-[400px]"
                    />
                </div>
            </div>
        </section>
    );
}
