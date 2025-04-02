export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  designation: string;
  image: string;
  message: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ravikant Waghmare",
    role: "Software Engineer",
    company: "Vionsys IT Solution Pvt. Ltd.",
    designation: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/lego/6.jpg",
    message:
      "Working with you was an amazing experience! Your skills and attention to detail are top-notch. Highly recommend!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Product Designer",
    company: "Meta",
    designation: "Lead UI/UX Designer",
    image: "https://randomuser.me/api/portraits/lego/5.jpg",
    message:
      "You're an incredible developer! Your design sense and frontend expertise brought our project to life.",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "CTO",
    company: "Startup Inc.",
    designation: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/lego/4.jpg",
    message:
      "One of the most talented engineers I have worked with! Your problem-solving skills are exceptional.",
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "CTO",
    company: "Startup Inc.",
    designation: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/lego/2.jpg",
    message:
      "One of the most talented engineers I have worked with! Your problem-solving skills are exceptional.",
  },
];
