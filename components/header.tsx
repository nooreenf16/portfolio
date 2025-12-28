"use client";

import FluidGlass, { Lens } from "./FluidGlass";


export const Header = () => {

    return (
        <header >
            {/* <p className="text-blue-200 font-bold">hellllllo</p> */}
            {/* Central glowing structure */}
            {/* <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-32 h-64 bg-gradient-to-t from-purple-400 via-pink-500 to-blue-400 rounded-xl shadow-[0_0_50px_rgba(255,255,255,0.7)] animate-pulse-glow"> */}
            {/* Dynamic halo */}
            {/* hello
                </div>
                aaaa
                <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text 
                bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 whitespace-nowrap 
                text-center border border-green-300 p-10">
                    a<span >Hello, I am Nooreen!</span>
                </h1> */}


            {/* </div> */}


            {/* <div style={{ height: '600px', position: 'relative' }}>
                <FluidGlass
                    mode="lens" // or "bar", "cube"
                    lensProps={{
                        scale: 0.25,
                        ior: 1.15,
                        thickness: 5,
                        chromaticAberration: 0.1,
                        anisotropy: 0.01
                    }}
                // barProps={} // add specific props if using bar mode
                // cubeProps={} // add specific props if using cube mode
                />
            </div> */}
            {/* const modeProps = {
                scale: 0.25,
                ior: 1.15,
                thickness: 5,
                chromaticAberration: 0.1,
                anisotropy: 0.01
            } */}
        </header>
    );
};

export default Header;
