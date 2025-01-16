import React, { useRef } from "react";

export default function Project() {
    const projects = [
        {
            title: "Trustco E-learning",
            description: "A E-learning website to task management app to organize and track daily activities and deadlines.",
            technologies: ["HTML", "CSS", "JavaScript"],
            liveDemo: "https://mkm630.github.io/Trusto_E_learning_Page/",
            github: "https://github.com/MkM630/Trusto_E_learning_Page",
        },
        {
            title: "Dice Game",
            description: "A dice Game where roll the dice and match the predicted number",
            technologies: ["React", "Node.js", "CSS"],
            liveDemo: "https://mkm630.github.io/react-summer-3/",
            github: "https://github.com/MkM630/react-summer-3",
        },
        {
            title: "Find mole game",
            description: "A game where you have to find the Mole.",
            technologies: ["HTML", "CSS", "Java script","CSS Animation"],
            liveDemo: "https://mkm630.github.io/Find_the_mole/",
            github: "https://github.com/MkM630/Find_the_mole",
        },
        {
            title: "Pokemon finder",
            description: "A fetch API where Pokedex is the home page. Click the pokedex home button that will go on the main home page",
            technologies: ["React", "CSS", "API"],
            liveDemo: "https://mkm630.github.io/Pokemon/",
            github: "https://github.com/MkM630/Pokemon",
        },
        {
            title: "QR Generator",
            description: "A QR code generator that will generate any kind of link,image,website etc.",
            technologies: ["HTML", "CSS", "Javascript"],
            liveDemo: "https://mkm630.github.io/Qr_generate/",
            github: "https://github.com/MkM630/Qr_generate",
        },
        {
            title: "Portfolio",
            description: "My portfolio that showcase my skills, projects, and contact information",
            technologies: ["HTML", "CSS", "Tailwind"],
            liveDemo: "https://mkm630.github.io/Portfolio-01/",
            github: "https://github.com/MkM630/Portfolio-01",
        },
    ];

    const scrollRef = useRef(null);
    const handleScroll = (direction) => {
        const scrollAmount = document.querySelector(".project-card").offsetWidth;
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "right" ? scrollAmount : -scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div id="Project" className="mb-10 py-10 px-4 sm:px-6 lg:px-32">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-blue-500 underline decoration-blue-500">
                    Projects
                </h1>

                {/* Horizontal Scrollable Area */}
                <div
                    className="flex overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200"
                    ref={scrollRef}
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card flex-none bg-white w-[90%] sm:w-[45%] lg:w-[30%] m-4 p-4 sm:p-6 shadow-lg rounded-lg transition-transform transform hover:scale-105"
                        >
                            <h2 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h2>
                            <p className="text-gray-700 text-sm sm:text-base mb-3">{project.description}</p>
                            <p className="text-gray-800 font-semibold mb-1">Technologies:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base mb-3">
                                {project.technologies.map((tech, techIndex) => (
                                    <li key={techIndex}>{tech}</li>
                                ))}
                            </ul>
                            <div className="flex justify-between">
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll Buttons */}
                <div className="flex justify-between mx-8 items-center mt-6">
                    <button
                        onClick={() => handleScroll("left")}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-2xl px-6 py-3 rounded-full hover:scale-105 hover:from-blue-600 hover:to-blue-800 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition-transform duration-300"
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={() => handleScroll("right")}
                        className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-2xl px-6 py-3 rounded-full hover:scale-105 hover:from-blue-600 hover:to-blue-800 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition-transform duration-300"
                    >
                        &#8594;
                    </button>
                </div>

            </div>
        </div>
    );
}
