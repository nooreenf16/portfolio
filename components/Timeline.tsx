import React from "react";

interface Experience {
    startDate: string;
    endDate?: string;
    role: string;
    company: string;
    description: string;
}

const experiences: Experience[] = [
    {
        startDate: "Sept 2025",
        endDate: "Present",
        role: "Software Developer",
        company: "Process Feedback",
        description: "Built scalable web apps using ReactJS and Tailwind CSS.",
    },
    {
        startDate: "Aug 2024",
        endDate: "May 2025",
        role: "Graduate Teaching Assistant",
        company: "University of Missouri - St. Louis",
        description: "TA and Software development.",
    },
    {
        startDate: "Nov 2022",
        endDate: "May 2023",
        role: "Software Data Science Engineer",
        company: "Cognitive Cloud Analytics",
        description: "5G research and software developement.",
    },
    {
        startDate: "Feb 2022",
        endDate: "Oct 2022",
        role: "Software / Data Science Intern",
        company: "Cognitive Cloud Analytics",
        description: "Supported ETL pipelines.",
    },
];

const Timeline: React.FC = () => {
    return (
        <div id="experience" className="relative w-full flex flex-col items-center py-10 bg-gradient-to-b from-[#0a0a0a] via-[#490064] to-[#0a0a0a] min-h-screen">
            <h2 className="text-4xl font-bold text-white mb-12">My Experience</h2>
            <div className="relative w-full max-w-4xl">
                {/* Timeline line */}
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500"></div>

                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`mb-16 flex w-full ${index % 2 === 0 ? "justify-start" : "justify-end"
                            }`}
                    >
                        <div className="relative w-5/12">
                            {/* Date badge */}
                            <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10">
                                {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : ""}
                            </span>

                            {/* Glass card */}
                            <div className="mt-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
                                <h3 className="text-lg font-semibold text-purple-200">
                                    {exp.role}
                                </h3>
                                <p className="text-sm text-gray-300">{exp.company}</p>
                                <p className="mt-2 text-gray-200">{exp.description}</p>

                                {/* Circle connector to line */}
                                <span className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-2 border-white"></span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
