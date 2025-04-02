"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Testimonial } from "@/constants/testimonials";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      key={testimonial.id}
      initial={{ opacity: 0, y: 50, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        duration: 0.5,
        delay: testimonial.id * 0.2,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="shadow-lg dark:bg-zinc-900 p-6">
        <CardContent className="flex flex-col items-center text-center space-y-4">
          {/* Avatar with Animation */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Avatar className="w-16 h-16">
              <Image
                height={100}
                width={100}
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full"
              />
              <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Name & Role */}
          <div className="mt-3">
            <h4 className="text-md font-semibold text-black dark:text-white">
              {testimonial.name}
            </h4>
            <p className="text-sm text-primary">{testimonial.role}</p>
          </div>

          {/* Message / Feedback */}
          <motion.p
            className="text-sm text-gray-600 dark:text-gray-300 italic px-4"
            whileHover={{ scale: 1.05, color: "#3b82f6" }}
            transition={{ duration: 0.2 }}
          >
            "{testimonial.message}"
          </motion.p>

          {/* Company & Designation */}
          <div>
            <p className="text-xs text-neutral-500">
              {testimonial.designation} @{" "}
              <span className="font-semibold">{testimonial.company}</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
