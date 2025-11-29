import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/forest/1920/1080"
          alt="Mist covered forest"
          className="w-full h-full object-cover object-center scale-105 animate-slow-zoom"
          style={{ animation: "pulse 20s infinite alternate ease-in-out" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-nature-dark/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <span className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-90 animate-fade-in-up">
          Spring / Summer 2024
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-6 leading-tight animate-fade-in-up delay-100">
          Wear the Wild
        </h1>
        <p className="max-w-md md:max-w-2xl text-lg md:text-xl font-light mb-10 opacity-90 animate-fade-in-up delay-200">
          Organic fabrics, earth-toned hues, and designs inspired by the raw
          beauty of nature.
        </p>

        <button className="group relative px-8 py-4 bg-white text-nature-dark font-medium tracking-wider overflow-hidden transition-all hover:bg-oraleo-100 animate-fade-in-up delay-300">
          <span className="relative z-10 flex items-center gap-2">
            EXPLORE COLLECTION{" "}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </span>
        </button>
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
