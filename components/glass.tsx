// "use client";

// import { useState, useEffect } from "react";

// const cards = [
//     { id: 1, gradient: "from-emerald-400/20 to-lime-400/20", title: "Card One" },
//     { id: 2, gradient: "from-purple-400/20 to-pink-400/20", title: "Card Two" },
//     { id: 3, gradient: "from-cyan-400/20 to-blue-500/20", title: "Card Three" },
//     // { id: 4, gradient: "from-pink-400/20 to-purple-400/20", title: "Card Four" },
//     // { id: 5, gradient: "from-yellow-400/20 to-orange-400/20", title: "Card Five" },
// ];

// export default function FrontAligned3DCarousel() {
//     const total = cards.length;
//     const radius = 300; // distance from center
//     const [rotation, setRotation] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setRotation((prev) => prev + 360 / total); // rotate to next card
//         }, 4000); // every 4s
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-slate-950 perspective-[1200px]">
//             <div className="relative w-[600px] h-[400px] transform-style-3d">
//                 {cards.map((card, index) => {
//                     // Align front card to 0deg
//                     const angle = (360 / total) * index - (360 / total) + rotation;

//                     return (
//                         <div
//                             key={card.id}
//                             className={`
//                                 absolute left-1/2 top-1/2 w-[200px] h-[260px]
//                                 -translate-x-1/2 -translate-y-1/2
//                                 rounded-2xl p-4 text-white
//                                 bg-gradient-to-br ${card.gradient}
//                                 backdrop-blur-xl border border-white/25
//                                 shadow-[0_0_25px_rgba(16,185,129,0.35)]
//                                 transform-gpu
//                                 transition-transform duration-1000
//                                 hover:scale-105
//                             `}
//                             style={{
//                                 transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
//                             }}
//                         >
//                             <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
//                             <p className="text-sm text-white/80">Glass 3D Card</p>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// }
