import AboutSection from "@/components/AboutSection";
import CollectionGrid from "@/components/CollectionGrid";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArrivals";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-oraleo-50 selection:bg-nature-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* <CollectionGrid /> */}
        <NewArrivals />
        {/* Quote Section */}
        <section className="py-20 px-6 bg-nature-sand text-center">
            <div className="container mx-auto max-w-4xl">
                <blockquote className="font-serif text-2xl md:text-4xl italic text-nature-dark leading-relaxed">
                    "Nature is not a place to visit. It is home."
                </blockquote>
                <cite className="block mt-6 text-sm font-bold uppercase tracking-widest text-nature-green not-italic">
                    — Gary Snyder
                </cite>
            </div>
        </section>
        <Testimonials />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
