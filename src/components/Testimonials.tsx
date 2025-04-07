import React from "react";
import TestimonialCard from "./TestimonialCard";
import { Testimonial, testimonials } from "@/constants/testimonials";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-24 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          What People Are Saying
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Hear from those who have worked with me and experienced my expertise
          first-hand.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {testimonials.map((testimonial: Testimonial, index: number) => (
          <TestimonialCard
            key={index}
            index={index}
            testimonial={testimonial}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
