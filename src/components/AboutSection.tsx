import React from 'react';
import { Leaf, Droplets, Sun } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-nature-dark text-oraleo-100 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-nature-green/10 -skew-x-12" />
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <span className="text-oraleo-400 font-bold tracking-widest text-xs uppercase">Our Philosophy</span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                        Woven from the Earth, <br /> Designed for You.
                    </h2>
                    <p className="text-oraleo-200 text-lg leading-relaxed font-light">
                        At Oraleo, we believe that fashion shouldn't cost the Earth. Our garments are crafted using 100% organic materials, natural dyes, and ethical labor practices. We take inspiration from the unhurried pace of nature.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                        <div className="flex flex-col gap-3">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-oraleo-300">
                                <Leaf size={24} />
                            </div>
                            <h4 className="text-white font-medium">Organic Fibers</h4>
                            <p className="text-sm text-oraleo-300">Cotton, linen, and hemp sourced responsibly.</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-oraleo-300">
                                <Droplets size={24} />
                            </div>
                            <h4 className="text-white font-medium">Low Impact</h4>
                            <p className="text-sm text-oraleo-300">Water-saving techniques in every stitch.</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-oraleo-300">
                                <Sun size={24} />
                            </div>
                            <h4 className="text-white font-medium">Fair Trade</h4>
                            <p className="text-sm text-oraleo-300">Empowering artisans and communities.</p>
                        </div>
                    </div>
                </div>
                
                <div className="relative">
                    <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm">
                        <img 
                            src="https://picsum.photos/seed/craftsman/800/1000" 
                            alt="Artisan working" 
                            className="w-full h-full object-cover opacity-90"
                        />
                    </div>
                    {/* Decorative Frame */}
                    <div className="absolute -bottom-6 -right-6 w-full h-full border border-oraleo-600/30 z-0" />
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;