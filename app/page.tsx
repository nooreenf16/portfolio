import Header from "../components/header";
import GlassCards from "../components/glass";
import FluidGlass from "@/components/FluidGlass";
import "./globals.css";


export default function Home() {
  return (
    <div style={{ background: 'black', height: '600px', position: 'relative' }}>
      <div className="absolute top-1/2 left-0 w-full h-1 bg-white/50 blur-md -translate-y-1/2"></div>
      {/* HEADER WITH FLUID GLASS */}
      <FluidGlass
        mode="lens" // or "bar", "cube"
        lensProps={{
          scale: 0.25,
          ior: 1.15,
          thickness: 5,
          chromaticAberration: 0.1,
          anisotropy: 0.01
        }}
      // cubeProps={} // add specific props if using cube mode
      />

      {/* SKILLS WITH GLASS */}
      <div className="text-blue-500 text-4xl">
        SKILLS
      </div>

      {/* PROJECT SECTION */}
      {/* CONTACT FORM */}
    </div>
  );
}
