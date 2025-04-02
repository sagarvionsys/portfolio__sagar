import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "@/constants/projects";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }: { project: Project }) => {
  const [step, setStep] = useState(0);
  const totalSteps = project.images.length;

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <Card className="shadow-lg relative dark:bg-zinc-900">
      {/* Header Section */}
      <CardHeader className="flex justify-between items-center">
        <div>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
          <Badge className="text-xs px-3 py-1 mt-3">{project.category}</Badge>
        </div>
        <div className="flex space-x-2">
          {/* Live Preview Button */}
          <Button
            className="hover:cursor-pointer"
            variant="ghost"
            size="icon"
            onClick={() => window.open(project.liveUrl, "_blank")}
          >
            <ExternalLink size={18} />
          </Button>
          {/* GitHub Button */}
          <Button
            className="hover:cursor-pointer"
            variant="ghost"
            size="icon"
            onClick={() => window.open(project.githubUrl, "_blank")}
          >
            <FaGithub size={18} />
          </Button>
        </div>
      </CardHeader>

      {/* Image Carousel with Pop-Out Animation */}
      <CardContent className="space-y-4">
        <div className="relative w-full h-48 overflow-hidden flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={step}
              src={project.images[step]}
              alt={`Step ${step + 1}`}
              className="w-full h-full object-cover rounded-lg absolute"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Navigation Section */}
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={handlePrev} disabled={step === 0}>
            <ArrowLeft className="mr-2" size={16} /> Prev
          </Button>

          <div className="flex space-x-1.5">
            {project.images.map((_, index) => (
              <motion.div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === step ? "bg-primary" : "bg-gray-300"
                }`}
                animate={{ scale: index === step ? 1.3 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={handleNext}
            disabled={step === totalSteps - 1}
          >
            Next <ArrowRight className="ml-2" size={16} />
          </Button>
        </div>

        {/* Skills Section with Hover Animation */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.skills.map((SkillIcon, index) => (
            <motion.div
              key={index}
              className="flex items-center p-2 bg-gray-100 dark:bg-gray-800 rounded-md"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#3b82f6",
                color: "#ffffff",
              }}
              transition={{ duration: 0.1 }}
            >
              <SkillIcon size={20} className="text-primary" />
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
