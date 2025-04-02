import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Projects />
      <Testimonials />
      <Grid />
    </>
  );
}
