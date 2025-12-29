import Header from "../components/header";
import FluidGlass from "@/components/FluidGlass";
import "./globals.css";
import LiquidEther from '@/components/LiquidEther';
// import { Box, Text } from '@mui/material';


export default function Home() {
  return (
    <div style={{ height: '780px', position: 'relative' }}>
      <div className="fixed top-0 left-0 w-full z-50">
        <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 px-8 py-4 flex items-center justify-between">

          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-purple-400 transition">
              Home *
            </a>
            <a href="#experience" className="text-white hover:text-purple-400 transition">
              Experience
            </a>
            <a href="#contact" className="text-white hover:text-purple-400 transition">
              Contact
            </a>
            <a href="#projects" className="text-white hover:text-purple-400 transition">
              Projects
            </a>
            <a href="https://drive.google.com/file/d/1VbMeVR3pUUCVuvoxg_0HFshJt1UvDf27/view?usp=sharing" className="text-white hover:text-purple-400 transition">
              Resume
            </a>
          </div>
          <span className="text-xs">P.S. try hovering over things</span>

        </nav>
      </div>

      <div className="relative h-[780px] w-full overflow-hidden demo-container">
        {/* LiquidEther background */}
        <div className="absolute inset-0 w-full h-full">
          <LiquidEther colors={['#5227FF', '#FF9FFC', '#B19EEF']}
            mouseForce={20}
            cursorSize={150}
            isViscous={false}
            viscous={30}
            iterationsViscous={52}
            iterationsPoisson={52}
            resolution={0.2}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={2.5}
            takeoverDuration={0.55}
            autoResumeDelay={1000}
            autoRampDuration={0.4}
          />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white pointer-events-auto">
          <h1 className="text-6xl font-bold mb-4">Nooreen Fatima</h1>
          <p className="text-lg text-center max-w-md">
            Software Engineer
          </p>
          <div>
          </div>
          {/* SKILLS WITH GLASS */}
          <div className="relative mt-10 flex flex-row justify-around">
            <div className="mx-2 bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-5 w-70 text-center text-white shadow-lg">
              <h2 className="text-xl font-bold mb-4">Languages</h2>
              <p>Python, Java, C/C++, SQL, JavaScript, TypeScript, HTML, CSS</p>
            </div>
            <div className="mx-2 bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-5 w-70 text-center text-white shadow-lg">
              <h2 className="text-xl font-bold mb-4">Backend Development</h2>
              <p>REST APIs, JSON, Postman, Spring Boot, Microservices, Flask</p>
            </div>
            <div className="mx-2 bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-5 w-70 text-center text-white shadow-lg">
              <h2 className="text-xl font-bold mb-4">Frontend Development</h2>
              <p>React.js, Usability Testing</p>
            </div>
            <div className="mx-2 bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-5 w-70 text-center text-white shadow-lg">
              <h2 className="text-xl font-bold mb-4">Python Libraries</h2>
              <p>OpenCV, Matplotlib, Pandas, Numpy, Scikit</p>
            </div>
            <div className="mx-2 bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-5 w-80 text-center text-white shadow-lg">
              <h2 className="text-xl font-bold mb-4">Databases, Cloud & Tools</h2>
              <p>PostgreSQL, MySQL, AWS (basic), GCP, Docker, Git, Linux, Cloudflare Workers, LLMs</p>
            </div>
          </div>

        </div>

      </div>
    </div >
  );
}
