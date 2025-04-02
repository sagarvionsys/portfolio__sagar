import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import { Grid } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />;
      <Grid />
      <Work />
      <Projects />
      <Testimonials />
    </>
  );
}
