
"use client";
import { useState } from "react";
import FluidGlass from "./FluidGlass";

export default function Projects() {
    const [showMore, setShowMore] = useState(false);
    const projectsData = [
        {
            title: "Multiple Partial Object Detection in a Single Image using Segmentation and Elliptical Symmetry - Research",
            github: "https://github.com/nooreenf16/Multiple-Partial-Object-Detection",
            imgPath: "assets/beeproject.png",
            desc: "A software which uses image processing and geometric operations to identify the location & labeling of objects in image • Implemented using segmentation of all objects, image reconstruction and performing a detection algorithm.",
            tools: "Python, Numpy, openCV, Math."
        },
        {
            title: "Event Management Website ( Full Stack )",
            github: "https://github.com/nooreenf16/EventManagement",
            imgPath: "assets/event.png",
            desc: "• A website used to manage all events on user and admin end with dynamic user interface and multiple endpoints. • Designed responsive frontend using Figma, HTML, CSS, JavaScript, Bootstrap. • Integrated Flask backend, MySQL database, and REST APIs for data management and authentication services.",
            tools: "PostGres, Flask, JWT, Authentication, Routing, JS, Bootstrap, "
        },
        {
            title: "Vehicle Classification and Counting",
            github: "https://github.com/nooreenf16/Vehicle-Classification-and-Counting",
            imgPath: "assets/vehicle.png",
            desc: "• Authored a Python solution (repo: Vehicle-Classification-and-Counting) for classNameifying vehicles and counting traffic flow from video/image data—useful in smart-city and traffic-monitoring contexts. • Processed real-world data, extracted features, and developed evaluation metrics to validate classNameification and counting accuracy.",
            tools: "Python, Numpy, openCV, Math, YOLO algorithm."
        },
        {
            title: "NLP Project",
            github: "https://github.com/nooreenf16/useful-scripts",
            imgPath: "assets/nlp.png",
            desc: "• Built a collection of machine-learning and data-science projects (repo: ML-and-DS) using Jupyter notebooks: data cleaning, feature engineering, model training and evaluation across different datasets. • Showcased versatility in regression, classNameification and clustering workflows.",
            tools: "Python, Numpy, Pandas, Scikit, Matplotlib, Machine Learning Algorithms"
        },
        {
            title: "Course Management System (Java)",
            github: "https://github.com/nooreenf16/Course-Management",
            imgPath: "",
            desc: "Developed a Backend course management service (repo: Course-Management), using Java for backend logic, enabling CRUD operations for students, courses and enrollments. • Designed architecture for scalability and maintainability: clear separation of concerns, data models and user interface.",
            tools: "Java, Springboot, Kafka, Docker, Microservices"
        },
        {
            title: "ML & Data-Science Portfolio",
            github: "https://github.com/nooreenf16/ML-and-DS",
            imgPath: "",
            desc: "• Built a collection of machine-learning and data-science projects (repo: ML-and-DS) using Jupyter notebooks: data cleaning, feature engineering, model training and evaluation across different datasets. • Showcased versatility in regression, classNameification and clustering workflows.",
            tools: "Python, Numpy, Pandas, Scikit, Matplotlib, Machine Learning Algorithms"
        },
        // {
        //     title: "NLP Project",
        //     github: "https://github.com/nooreenf16/NLP",
        //     imgPath: "assets/temp.png",
        //     desc: "• Conducted exploratory work in natural language processing (repo: NLP) including topic modeling, sentiment analysis and text-classNameification pipelines using Python. • Demonstrated ability to preprocess text, apply NLP frameworks, and evaluate model results.",
        //     tools: "Python, Numpy, Matplotlib, Plotly, BeautifulSoup, Math."
        // },
        {
            title: "LLM Workshop / Cursor Integration / Firebase Studio",
            github: "https://badriadhikari.github.io/llm-workshop-2025/",
            imgPath: "assets/llmworkshop.png",
            desc: "• Built a Python-based framework (LLM-Workshop-Cursor) connecting large-language-model workflows via Cursor and Firebase Studio; implemented modular code generation and prompt pipelines. • Automated prompt-to-application flow, helping streamline developer interactions with LLMs and enhancing tool productivity.",
            tools: "Cursor, Firebase, EDA using LLMs, Prompt Engineering"
        }
        //ds port
        //https://badriadhikari.github.io/llm-workshop-2025/
    ]
    return (
        //<section className="m-10 bg-[radial-gradient(circle_1000px_at_center,_#500140_0%,#0A0A0A_80%)]" id="projects"> */}
        <section className="mt-10 ml-10 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#500140]" id="projects">
            <h1 className=" text-4xl font-bold text-white text-center">
                My Projects <span className="text-xs">coming soon: cube lens</span>
            </h1>

            <div className="mt-10 grid grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))] gap-6">
                {projectsData.slice(0, 3).map((p) =>
                    <div key={p.github} className="mx-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 text-[#eee] transition-transform duration-300 ease-in-out hover:scale-105">
                        <h3 className="font-bold mb-2 text-xl">
                            {p.title}
                            <a className="text-pink-400 text-xs
                         rounded-xl border-[1px] border-white/20 p-1 m-2"
                                href={p.github}>GitHub Link</a>

                            {p.imgPath == "assets/beeproject.png" && <a className="text-pink-400 text-xs
                         rounded-xl border-[1px] border-white/20 p-1 m-2"
                                href={"https://drive.google.com/file/d/1fcBucC_SYXiFgrJcMH1fdo9lJAS7QGcE/view?usp=sharing"}>Preview Link</a>}
                        </h3>

                        {p.imgPath != "" && <div style={{ height: "200px" }}>
                            <FluidGlass
                                mode="lens" // or "bar", "cube"
                                lensProps={{
                                    scale: 0.25,
                                    ior: 1.15,
                                    thickness: 5,
                                    chromaticAberration: 0.1,
                                    anisotropy: 0.01
                                }}
                                imgSrc={p.imgPath}
                            />
                        </div>}

                        <p>{p.desc}</p>
                        <hr className="my-2 border-gray-200/30 border-t-[0.5px]" />
                        <p className="text-transparent bg-clip-text bg-gradient-to-r 
                from-purple-500 via-pink-500 to-purple-500 text-sm text-center">
                            {p.tools}</p>
                    </div>
                )}

                {showMore &&
                    <>
                        {projectsData.slice(4, projectsData.length).map((p) =>
                            <div key={p.github} className="mx-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 text-[#eee] transition-transform duration-300 ease-in-out hover:scale-105">
                                <h3 className="font-bold mb-2 text-xl">
                                    {p.title}
                                    <a className="text-pink-400 text-xs
                         rounded-xl border-[1px] border-white/20 p-1 m-2"
                                        href={p.github}>GitHub Link</a>

                                    {p.imgPath == "assets/beeproject.png" && <a className="text-pink-400 text-xs
                         rounded-xl border-[1px] border-white/20 p-1 m-2"
                                        href={"https://drive.google.com/file/d/1fcBucC_SYXiFgrJcMH1fdo9lJAS7QGcE/view?usp=sharing"}>Preview Link</a>}
                                </h3>

                                {p.imgPath != "" && <div style={{ height: "200px" }}>
                                    <FluidGlass
                                        mode="lens" // or "bar", "cube"
                                        lensProps={{
                                            scale: 0.25,
                                            ior: 1.15,
                                            thickness: 5,
                                            chromaticAberration: 0.1,
                                            anisotropy: 0.01
                                        }}
                                        imgSrc={p.imgPath}
                                    />
                                </div>}

                                <p>{p.desc}</p>
                                <hr className="my-2 border-gray-200/30 border-t-[0.5px]" />
                                <p className="text-transparent bg-clip-text bg-gradient-to-r 
                from-purple-500 via-pink-500 to-purple-500 text-sm text-center">
                                    {p.tools}</p>
                            </div>
                        )}
                    </>}
            </div>
            <div className="mt-6 flex align-center justify-center ">
                <button onClick={() => setShowMore(!showMore)} className="p-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl">
                    Show {showMore ? "Less" : "More"} v
                </button>
            </div>
        </section>
    )
}