import React from "react";
import { Instagram, Facebook, Twitter, ArrowUpRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-nature-dark text-oraleo-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-16">
          <div className="space-y-6">
            <h3 className="font-serif text-3xl text-white">ORALEO</h3>
            <p className="text-sm text-oraleo-300 leading-relaxed">
              Conscious clothing for the modern wanderer. Born from nature,
              returned to nature.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Shop
            </h4>
            <ul className="space-y-4 text-sm text-oraleo-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-oraleo-200">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">
              Newsletter
            </h4>
            <p className="text-sm text-oraleo-300 mb-6">
              Join our community and receive 10% off your first order.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-transparent border-b border-white/30 py-2 text-white placeholder-oraleo-500 focus:outline-none focus:border-white transition-colors"
              />
              <button className="text-left text-xs uppercase tracking-widest font-bold text-white hover:text-oraleo-400 transition-colors flex items-center gap-2 mt-2">
                Subscribe <ArrowUpRight size={14} />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-oraleo-400">
          <p>
            &copy; {new Date().getFullYear()} Oraleo Clothing Co. All rights
            reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
