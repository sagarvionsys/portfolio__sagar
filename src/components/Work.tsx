"use client";

import { Timeline } from "./ui/timeline";
import { workData } from "@/constants";

const Work = () => {
  return (
    <section id="experience" className="min-h-screen">
      <Timeline data={workData} />
    </section>
  );
};

export default Work;
