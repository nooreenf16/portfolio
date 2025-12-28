
"use client";
import { useState } from "react";
import FluidGlass from "./FluidGlass";

export default function Projects() {
    const [showMore, setShowMore] = useState(false);
    return (
        //<section className="m-10 bg-[radial-gradient(circle_1000px_at_center,_#500140_0%,#0A0A0A_80%)]" id="projects"> */}
        <section className="mt-10 ml-10 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#500140]" id="projects">
            <h1 className=" text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
                PROJECTS <span className="text-xs">coming soon: cube lens</span>
            </h1>

            <div className="mt-10 grid grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))] gap-6">
                <div className="mx-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 text-[#eee] transition-transform duration-300 ease-in-out hover:scale-105">
                    <h3 className="font-bold mb-2 text-xl">Course Management System (Java)</h3>
                    {/* <img className="rounded my-5" src={"assets/temp.webp"} alt="Demo img"></img> */}

                    <div style={{ height: "200px" }}>
                        <FluidGlass
                            mode="lens" // or "bar", "cube"
                            lensProps={{
                                scale: 0.25,
                                ior: 1.15,
                                thickness: 5,
                                chromaticAberration: 0.1,
                                anisotropy: 0.01
                            }}
                            imgSrc="assets/temp.webp"
                        // cubeProps={} // add specific props if using cube mode
                        />
                    </div>

                    <p>Developed a full-stack course management system (repo: Course-Management), using Java for backend logic and HTML for frontend, enabling CRUD operations for students, courses and enrollments.
                        • Designed architecture for scalability and maintainability: clear separation of concerns, data models and user interface.</p>
                    <hr className="my-2 border-gray-200/30 border-t-[0.5px]" />
                    <p className="text-transparent bg-clip-text bg-gradient-to-r 
                from-purple-500 via-pink-500 to-purple-500 text-sm text-center">
                        Java, Springboot, Kafka, ReactJS</p>
                </div>

                <div className="mx-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg rounded-lg shadow-lg p-6 text-[#eee] transition-transform duration-300 ease-in-out hover:scale-105">
                    <h3 className="font-bold mb-2 text-xl">Multiple Partial Object Detection in a Single Image using Segmentation and Elliptical Symmetry - Research GitHub
                    </h3>
                    {/* <img className="rounded my-5" src={"assets/temp.webp"} alt="Demo img"></img> */}
                    <div style={{ height: "200px" }}>
                        <FluidGlass
                            mode="lens" // or "bar", "cube"
                            lensProps={{
                                scale: 0.25,
                                ior: 1.15,
                                thickness: 5,
                                chromaticAberration: 0.1,
                                anisotropy: 0.01
                            }}
                            imgSrc="assets/temp.webp"
                        // cubeProps={} // add specific props if using cube mode
                        />
                    </div>

                    <p>A software which uses image processing and geometric operations to identify the location & labeling of objects in image
                        • Implemented using segmentation of all objects, image reconstruction and performing a detection algorithm.</p>
                    <hr className="my-2 border-gray-200/30 border-t-[0.5px]" />
                    <p className="text-transparent bg-clip-text bg-gradient-to-r 
                from-purple-500 via-pink-500 to-purple-500 text-sm text-center">
                        Python, Numpy, openCV, Math.</p>
                </div>

                <div className="mx-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg rounded-lg shadow-lg p-6 text-[#eee] transition-transform duration-300 ease-in-out hover:scale-105">
                    <h3 className="font-bold mb-2 text-xl">Event Management Website ( Full Stack )</h3>
                    {/* <img className="rounded my-5" src={"assets/temp.webp"} alt="Demo img"></img> */}
                    <div style={{ height: "200px" }}>
                        <FluidGlass
                            mode="lens" // or "bar", "cube"
                            lensProps={{
                                scale: 0.25,
                                ior: 1.15,
                                thickness: 5,
                                chromaticAberration: 0.1,
                                anisotropy: 0.01
                            }}
                            imgSrc="assets/temp.webp"
                        // cubeProps={} // add specific props if using cube mode
                        />
                    </div>
                    <p>• A website used to manage all events on user and admin end with dynamic user interface and multiple endpoints.
                        • Designed responsive frontend using Figma, HTML, CSS, JavaScript, Bootstrap.
                        • Integrated Flask backend, MySQL database, and REST APIs for data management and authentication services.</p>
                    <hr className="my-2 border-gray-200/30 border-t-[0.5px]" />

                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-sm text-center">Python, Flask, Bootstrap, MySQL, UML, REST APIs, MongoDB</p>
                </div>

                {showMore &&
                    <><div className="mx-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg rounded-lg shadow-lg p-6 text-[#eee] transition-transform duration-300 ease-in-out hover:scale-105">
                        <h3 className="font-bold mb-2 text-xl">Vehicle Classification and Counting</h3>
                        {/* <img className="rounded my-5" src={"assets/temp.webp"} alt="Demo img"></img> */}
                        <div style={{ height: "200px" }}>
                            <FluidGlass
                                mode="lens" // or "bar", "cube"
                                lensProps={{
                                    scale: 0.25,
                                    ior: 1.15,
                                    thickness: 5,
                                    chromaticAberration: 0.1,
                                    anisotropy: 0.01
                                }}
                                imgSrc="assets/temp.webp"
                            // cubeProps={} // add specific props if using cube mode
                            />
                        </div>


                        <p>• Authored a Python solution (repo: Vehicle-Classification-and-Counting) for classNameifying vehicles and counting traffic flow from video/image data—useful in smart-city and traffic-monitoring contexts.
                            • Processed real-world data, extracted features, and developed evaluation metrics to validate classNameification and counting accuracy.</p>
                        <hr className="my-2 border-gray-200/30 border-t-[0.5px]" />
                        <p className="text-transparent bg-clip-text bg-gradient-to-r 
                from-purple-500 via-pink-500 to-purple-500 text-sm text-center">
                            Python, Numpy, openCV, Math, YOLO algorithm.</p>
                    </div>

                        <div className="mx-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg rounded-lg shadow-lg p-6 text-[#eee] transition-transform duration-300 ease-in-out hover:scale-105">
                            <h3 className="font-bold mb-2 text-xl">NLP Project</h3>
                            {/* <img className="rounded my-5" src={"assets/temp.webp"} alt="Demo img"></img> */}
                            <div style={{ height: "200px" }}>
                                <FluidGlass
                                    mode="lens" // or "bar", "cube"
                                    lensProps={{
                                        scale: 0.25,
                                        ior: 1.15,
                                        thickness: 5,
                                        chromaticAberration: 0.1,
                                        anisotropy: 0.01
                                    }}
                                    imgSrc="assets/temp.webp"
                                // cubeProps={} // add specific props if using cube mode
                                />
                            </div>

                            <p>• Built a collection of machine-learning and data-science projects (repo: ML-and-DS) using Jupyter notebooks: data cleaning, feature engineering, model training and evaluation across different datasets.
                                • Showcased versatility in regression, classNameification and clustering workflows.</p>
                            <hr className="my-2 border-gray-200/30 border-t-[0.5px]" />
                            <p className="text-transparent bg-clip-text bg-gradient-to-r 
                from-purple-500 via-pink-500 to-purple-500 text-sm text-center">
                                Python, Numpy, Pandas, Scikit, Matplotlib, Machine Learning Algorithms</p>
                        </div>

                        <div className="mx-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lg rounded-lg shadow-lg p-6 text-[#eee] transition-transform duration-300 ease-in-out hover:scale-105">
                            <h3 className="font-bold mb-2 text-xl">ML & Data-Science Portfolio</h3>
                            {/* <img className="rounded my-5" src={"assets/temp.webp"} alt="Demo img"></img> */}
                            <div style={{ height: "200px" }}>
                                <FluidGlass
                                    mode="lens" // or "bar", "cube"
                                    lensProps={{
                                        scale: 0.25,
                                        ior: 1.15,
                                        thickness: 5,
                                        chromaticAberration: 0.1,
                                        anisotropy: 0.01
                                    }}
                                    imgSrc="assets/temp.webp"
                                // cubeProps={} // add specific props if using cube mode
                                />
                            </div>

                            <p>• Conducted exploratory work in natural language processing (repo: NLP) including topic modeling, sentiment analysis and text-classNameification pipelines using Python.
                                • Demonstrated ability to preprocess text, apply NLP frameworks, and evaluate model results.</p>
                            <hr className="my-2 border-gray-200/30 border-t-[0.5px]" />
                            <p className="text-transparent bg-clip-text bg-gradient-to-r 
                from-purple-500 via-pink-500 to-purple-500 text-sm text-center">
                                Python, Numpy, Matplotlib, Plotly, BeautifulSoup, Math.</p>
                        </div>

                        <div className="mx-5 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-8 shadow-lgrounded-lg shadow-lg p-6 text-[#eee] transition-transform duration-300 ease-in-out hover:scale-105">
                            <h3 className="font-bold mb-2 text-xl">LLM Workshop / Cursor Integration / Firebase Studio</h3>
                            {/* <img className="rounded my-5" src={"assets/temp.webp"} alt="Demo img"></img> */}
                            <div style={{ height: "200px" }}>
                                <FluidGlass
                                    mode="lens" // or "bar", "cube"
                                    lensProps={{
                                        scale: 0.25,
                                        ior: 1.15,
                                        thickness: 5,
                                        chromaticAberration: 0.1,
                                        anisotropy: 0.01
                                    }}
                                    imgSrc="assets/temp.webp"
                                // cubeProps={} // add specific props if using cube mode
                                />
                            </div>

                            <p>• Built a Python-based framework (LLM-Workshop-Cursor) connecting large-language-model workflows via Cursor and Firebase Studio; implemented modular code generation and prompt pipelines.
                                • Automated prompt-to-application flow, helping streamline developer interactions with LLMs and enhancing tool productivity.</p>
                            <hr className="my-2 border-gray-200/30 border-t-[0.5px]" />
                            <p className="text-transparent bg-clip-text bg-gradient-to-r 
                from-purple-500 via-pink-500 to-purple-500 text-sm text-center">
                                Cursor, Firebase, EDA using LLMs, Prompt Engineering</p>
                        </div>
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