import { cloudinaryUrl } from "@/lib/cloudinary";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  url: string;
  message: string;
}

export const testimonials = [
  {
    id: 1,
    name: "Prem Khadekar",
    role: "Talent Acquisition Specialist",
    company: "Mphatek Systems",
    url: cloudinaryUrl("v1743847746/users/1742407797217_zmgsua.jpg"),
    message:
      "Sagar is one of the most passionate individuals I've come across. His dedication and consistent learning attitude truly stand out and inspire others around him.",
  },
  {
    id: 2,
    name: "Aniket Salukhe",
    role: "Full Stack Developer",
    company: "Kvell Dynamic Pvt. Ltd",
    url: cloudinaryUrl(
      "v1743847746/users/WhatsApp_Image_2025-04-05_at_2.57.09_PM_e4xbmn.jpg"
    ),
    message:
      "Working with Sagar was a pleasure. He's a quick learner and always delivers more than expected with a great attention to detail.",
  },
  {
    id: 3,
    name: "Shantanu Pandit",
    role: "Customer Experience Lead",
    company: "Sangya Project Pvt. Ltd",
    url: cloudinaryUrl(
      "v1743847745/users/WhatsApp_Image_2025-04-05_at_2.44.55_PM_xsk7ak.jpg"
    ),
    message:
      "Sagar's excellent communication and sharp problem-solving skills make him an asset to any team. He consistently adds value wherever he goes.",
  },
  {
    id: 4,
    name: "Omkar Torne",
    role: "Digital Marketing Executive",
    company: "Vionsys IT Solution India Pvt. Ltd",
    url: cloudinaryUrl("v1743841303/users/1728895563351_mxf3mj.jpg"),
    message:
      "I've seen Sagar grow tremendously. His ability to adapt is remarkable and truly commendable in any professional setting.",
  },
  {
    id: 5,
    name: "Aniket Mane",
    role: "System Engineer (CSW)",
    company: "Honeywell Automation India Ltd",
    url: cloudinaryUrl(
      "v1743840936/users/WhatsApp_Image_2025-04-05_at_11.55.46_AM_gao3yq.jpg"
    ),
    message:
      "Sagar brings great energy to any project. His coding skills and logical thinking are impressive, reliable, and always on point.",
  },
  {
    id: 7,
    name: "Balaji Birajdar",
    role: "DevOps Engineer",
    company: "Capgemini",
    url: cloudinaryUrl(
      "v1743840917/users/WhatsApp_Image_2025-04-05_at_1.19.53_PM_aadfi1.jpg"
    ),
    message:
      "It's rare to find someone as dedicated and detail-oriented as Sagar. Highly recommended for any project.",
  },
  {
    id: 8,
    name: "Akhilesh Mohto",
    role: "Senior Associate - US Insurance",
    company: "TCS",
    url: cloudinaryUrl(
      "v1743840916/users/WhatsApp_Image_2025-04-05_at_1.37.36_PM_asifhs.jpg"
    ),
    message:
      "Sagar has a natural ability to lead and inspire people. Truly a team player with a heart for innovation.",
  },
  {
    id: 9,
    name: "Subhasish Karmakar",
    role: "Data Scientist",
    company: "CloudLab",
    url: cloudinaryUrl(
      "v1743840913/users/WhatsApp_Image_2025-04-05_at_10.48.52_AM_k472ob.jpg"
    ),
    message:
      "Collaborating with Sagar has always been fruitful. His curiosity and technical mindset are admirable and empowering to others.",
  },
  {
    id: 10,
    name: "Ravikant Waghmare",
    role: "Senior Software Engineer",
    company: "Vionsys IT Solution India Pvt. Ltd",
    url: cloudinaryUrl("v1743840911/users/1742714591018_rsyhtj.jpg"),
    message:
      "Sagar's professionalism and enthusiasm set a great example for others. Always consistent and hungry to grow further.",
  },
  {
    id: 11,
    name: "Suhas Barangule",
    role: "Assistant System Engineer",
    company: "TCS",
    url: cloudinaryUrl(
      "v1743840905/users/484741587_1002208191324419_8380152975578976193_n_tqa4f8.jpg"
    ),
    message:
      "Sagar is a fantastic collaborator. His ideas and implementation skills are truly commendable in every team discussion.",
  },
  {
    id: 12,
    name: "Vijaya Gavhane",
    role: ".NET Developer",
    company: "Paramount Healthcare Management System",
    url: cloudinaryUrl(
      "v1743840900/users/WhatsApp_Image_2025-04-05_at_10.07.22_AM_jmjoai.jpg"
    ),
    message:
      "Sagar has a sharp mind and a humble attitude. A great combination for success and long-term growth.",
  },
  {
    id: 13,
    name: "Karan Patil",
    role: "Software Developer",
    company: "Rafai Technologies",
    url: cloudinaryUrl(
      "v1743840902/users/WhatsApp_Image_2025-04-05_at_1.35.26_PM_wbi5ef.jpg"
    ),
    message:
      "Always willing to help and share knowledge, Sagar is a gem in the tech world who uplifts others.",
  },
  {
    id: 14,
    name: "Yash Zore",
    role: "HR Executive",
    company: "Vionsys IT Solution India Pvt. Ltd",
    url: cloudinaryUrl("v1743840879/users/1639198887919_e4sims.jpg"),
    message:
      "Sagar is dependable and driven. It's always a pleasure working with him and learning through his experiences.",
  },
  {
    id: 15,
    name: "Prasad Hole",
    role: "DevOps Engineer",
    company: "AB Web InfoTech",
    url: cloudinaryUrl(
      "v1744015986/users/Screenshot_20250407-142151_pjsf9j.png"
    ),
    message:
      "Sagar's consistency and hunger to improve constantly amazes me. He's going places with such positive momentum.",
  },
  {
    id: 166,
    name: "Adity Raskar",
    role: "Python Developer",
    company: "Code Techie",
    url: cloudinaryUrl(
      "v1743940576/users/WhatsApp_Image_2025-04-05_at_11.13.49_PM_jnmuwo.jpg"
    ),
    message:
      "Sagar is not only technically strong but also a great team motivator. A wonderful human being with great humility.",
  },
];
