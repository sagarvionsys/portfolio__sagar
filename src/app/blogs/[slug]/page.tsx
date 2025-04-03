"use client";

import React from "react";
import { useParams } from "next/navigation";

const page = () => {
  const { slug } = useParams();
  return (
    <section className="max-w-7xl mx-auto py-28 px-4 md:px-8 lg:px-10">
      <span className="text-black">blog--{slug}</span>
    </section>
  );
};

export default page;
