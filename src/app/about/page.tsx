import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Oraleo Story | Luxury Embroidery & Sustainable Fashion",
  description:
    "Discover the essence of Oraleo – where luxury meets nature. Exploring our roots in Toronto & Mississauga, our dedication to premium embroidery, and our philosophy of peace and class.",
  keywords: [
    "Luxury Embroidery",
    "Oraleo Brand Story",
    "Toronto Fashion",
    "Mississauga Clothing Brand",
    "Premium Embroidered Clothes",
    "Sustainable Luxury",
    "Peace and Class",
  ],
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream text-luxury-black font-sans selection:bg-luxury-green selection:text-cream">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <div className="absolute inset-0">
            {/* Using the nature hero image for the blog header as well to maintain theme, 
                 but overlaying heavily for text readability */}
            <Image
              src="/images/hero4.jpeg"
              alt="Oraleo Philosophy"
              fill
              className="object-cover object-center grayscale brightness-75 contrast-125"
              priority
            />
            <div className="absolute inset-0 bg-luxury-black/50 mix-blend-multiply" />
          </div>

          <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">
            <span className="text-antique-gold tracking-[0.3em] uppercase text-sm md:text-base mb-6 animate-fade-in-up">
              Our Philosophy
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mb-8 leading-tight animate-fade-in-up delay-100">
              Beyond Clothing <br />
              <span className="italic font-light">A State of Mind</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed animate-fade-in-up delay-200">
              We don&apos;t just sell clothes. We curate moments of peace,
              wrapped in the timeless elegance of class.
            </p>
          </div>
        </section>

        {/* Introduction / Brand Essence */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 space-y-8 animate-fade-in-up">
              <h2 className="font-serif text-4xl md:text-5xl text-luxury-black">
                Born in <span className="text-luxury-green italic">Nature</span>
                , <br />
                Crafted for{" "}
                <span className="text-luxury-green italic">Luxury</span>
              </h2>
              <div className="h-1 w-20 bg-antique-gold"></div>
              <p className="text-lg leading-relaxed text-gray-600 font-light">
                Oraleo began its journey in the vibrant hearts of{" "}
                <strong>Toronto and Mississauga</strong>, born from a desire to
                merge the raw beauty of the natural world with the sophisticated
                refinement of high fashion.
              </p>
              <p className="text-lg leading-relaxed text-gray-600 font-light">
                In a world that rushes, we choose to pause. Our collection is an
                invitation to slow down and appreciate the intricate details
                that make life beautiful. Every stitch tells a story of
                patience, every fabric choice speaks of comfort.
              </p>
            </div>
            <div className="order-1 md:order-2 h-[600px] relative overflow-hidden group shadow-2xl animate-fade-in-up delay-100">
              <Image
                src="/images/hero2.jpeg"
                alt="Serene nature inspiration"
                fill
                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />
            </div>
          </div>
        </section>

        {/* The Art of Embroidery Parallax/Feature */}
        <section className="relative py-32 bg-luxury-black text-cream overflow-hidden">
          {/* Background texture via the new generated image */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/images/luxury-embroidery.png"
              alt="Texture"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-6xl mb-12">
              The Art of{" "}
              <span className="italic text-antique-gold">Perfection</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
              <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-antique-gold transition-colors duration-500">
                <h3 className="font-serif text-2xl mb-4 text-antique-gold">
                  Intricate Detail
                </h3>
                <p className="font-light text-gray-400 leading-relaxed">
                  Our embroidery is not merely decoration; it is art. Achieving
                  a level of precision where every thread has a purpose,
                  creating textures that beg to be touched.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-antique-gold transition-colors duration-500">
                <h3 className="font-serif text-2xl mb-4 text-antique-gold">
                  Unmatched Quality
                </h3>
                <p className="font-light text-gray-400 leading-relaxed">
                  We obsess over the finish. No loose ends, no shortcuts. Just a
                  flawless execution that stands the test of time and trends.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:border-antique-gold transition-colors duration-500">
                <h3 className="font-serif text-2xl mb-4 text-antique-gold">
                  Soulful Design
                </h3>
                <p className="font-light text-gray-400 leading-relaxed">
                  Inspired by the flora of the Canadian landscape, our designs
                  bring the tranquility of the outdoors into your everyday
                  wardrobe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Materials & Comfort - Split View */}
        <section className="flex flex-col md:flex-row h-auto md:h-[800px]">
          <div className="w-full md:w-1/2 relative bg-cream flex items-center justify-center p-12 md:p-24 order-2 md:order-1">
            <div className="max-w-md">
              <h2 className="font-serif text-4xl md:text-5xl text-luxury-black mb-8">
                Uncompromising <br />
                <span className="italic text-antique-gold">Comfort</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                <p>
                  True luxury feels as good as it looks. We use only the finest
                  materials that caress the skin, allowing for breathability and
                  effortless movement.
                </p>
                <p>
                  Whether it&apos;s the softness of our cottons or the richness
                  of our tailored fits, wearing Oraleo is an experience of pure
                  comfort. It&apos;s clothing that respects your peace.
                </p>
                <button className="mt-8 px-8 py-3 border border-luxury-black text-luxury-black uppercase tracking-[0.2em] text-xs hover:bg-luxury-black hover:text-white transition-all duration-300">
                  Explore Collections
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative h-[500px] md:h-full order-1 md:order-2">
            <Image
              src="/images/luxury-embroidery.png"
              alt="Fabric Detail"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Quote / Footer Pre-amble */}
        <section className="py-32 px-6 bg-cream text-center">
          <div className="max-w-3xl mx-auto">
            <p className="font-serif text-3xl md:text-5xl leading-tight text-luxury-black mb-10">
              &quot;We differentiate ourselves not just by what we make, but by
              how we make you feel.
              <span className="italic block mt-4 text-antique-gold">
                Peace. Class. You.
              </span>
              &quot;
            </p>
            <div className="w-24 h-px bg-luxury-black/10 mx-auto"></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
