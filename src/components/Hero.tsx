import React from "react";
import { ArrowRight } from "lucide-react";


const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          // src="https://picsumo.photos/seed/forest/1920/1080"
          src={"/images/hero6.jpeg"}
          alt="Mist covered forest"
          className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"

        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-nature-dark/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-nature-dark/90 via-nature-dark/20 to-nature-dark/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-1 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-nature-green animate-pulse shadow-[0_0_10px_rgba(74,103,85,0.5)]" />
          <span className="text-sm uppercase tracking-widest font-medium text-white/90">Coming Soon</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-6 leading-tight animate-fade-in-up delay-100">
          Welcome to Oraleo
        </h1>
        <p className="max-w-md md:max-w-2xl text-lg md:text-2xl font-light mb-10 opacity-90 animate-fade-in-up delay-200">
          We are crafting a collection that celebrates nature's artistry. Stay tuned for our launch.
        </p>

        <div className="animate-fade-in-up delay-300">
             <button className="group hover:cursor-pointer relative px-8 py-4 bg-white text-nature-dark font-medium tracking-wider overflow-hidden transition-all hover:bg-oraleo-100">
              <span className="relative z-10 flex items-center gap-2">
                JOIN THE WAITLIST{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70 text-white hidden md:block">
        <span className="text-xs uppercase tracking-widest block mb-2 text-center">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-white mx-auto"></div>
      </div>
    </div>
  );
};

export default Hero;