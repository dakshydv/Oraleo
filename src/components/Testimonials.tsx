import React from "react";
import SectionHeader from "@/components/SectionHeader";
import { Quote } from "lucide-react";
import { Testimonial } from "@/config/types";

const testimonials: Testimonial[] = [
  {
    id: "t1",
    text: "Oraleo's commitment to natural fibers has completely changed my wardrobe. The linen pieces are breathable and feel like a second skin.",
    author: "Elena R.",
    role: "Eco-conscious Designer",
  },
  {
    id: "t2",
    text: "I love knowing that my clothes are made with respect for the earth. The colors are so grounding and the quality is exceptional.",
    author: "Marcus T.",
    role: "Landscape Architect",
  },
  {
    id: "t3",
    text: "Finally, a brand that understands the balance between style and sustainability. The 'Essence of Earth' collection is simply stunning.",
    author: "Sophia L.",
    role: "Wellness Advocate",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-oraleo-100/50">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Stories from the Community"
          subtitle="Nature's Embrace"
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-sm shadow-sm border border-oraleo-200 relative group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute -top-4 left-8 bg-nature-green text-white p-3 rounded-full">
                <Quote size={20} className="fill-current" />
              </div>

              <div className="mt-6">
                <p className="font-serif text-lg text-nature-dark/80 italic leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-oraleo-100 pt-4">
                  <h4 className="font-bold text-nature-dark uppercase tracking-wider text-sm">
                    {testimonial.author}
                  </h4>
                  <span className="text-xs text-nature-green font-medium mt-1 block">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
