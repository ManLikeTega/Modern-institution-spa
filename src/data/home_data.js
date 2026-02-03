import {
  GraduationCap,
  Globe,
  Users,
  Star,
  Briefcase,
  Handshake,
} from "lucide-react";

import Partner1 from "../assets/partners/partner_1.png";
import Partner2 from "../assets/partners/partner_2.png";
import Partner3 from "../assets/partners/partner_3.png";
import Partner4 from "../assets/partners/partner_4.png";
import Partner5 from "../assets/partners/partner_5.png";
import Partner6 from "../assets/partners/partner_6.png";

export const hero_slides = [
  {
    image:
      "https://i.pinimg.com/1200x/ca/17/c5/ca17c5b2a85258ed87670ab18ad3a90f.jpg",
    title: "Partners With Top Universities & Companies",
    description:
      "We've collaborated with over 200 leading universities and industry giants to foster groundbreaking tech innovations and drive industry-leading solutions.",
    badge: "Global Partnerships",
    icon: Globe,
    cta: "Explore Partnerships",
    href: "/#partners",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Embrace Latest I.T Technology",
    description:
      "Get dual-diplomas valued by employers globally. With 32+ years of Aptech expertise and NCC Education's 40-year UK presence, we offer internationally recognized qualifications.",
    badge: "Dual Diplomas",
    icon: GraduationCap,
    cta: "View Courses",
    href: "/courses",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    title: "We'll Select The Right Course For You",
    description:
      "Our expert team provides personalized guidance to match you with the perfect course for your career goals. Start your tech journey with confidence and clear direction.",
    badge: "Personal Guidance",
    icon: Users,
    cta: "Get Started",
    href: "/contact",
  },
];

export const popularCourses = [
  {
    image:
      "https://images.unsplash.com/photo-1737396091040-4d3c49d9c4e7?q=80&w=1887&auto=format&fit=crop",
    title: "Artificial Intelligence",
    description:
      "Understand the concepts of machine learning, deep learning, and how AI is transforming industries.",
    rating: 4.9,
    students: 1247,
  },
  {
    image:
      "https://images.unsplash.com/photo-1639472628910-ef02c5404b9c?q=80&w=1770&auto=format&fit=crop",
    title: "Data Science",
    description:
      "Learn how to extract insights from data using Python, R, and statistical models.",
    rating: 4.8,
    students: 987,
  },
  {
    image:
      "https://images.unsplash.com/photo-1740042501963-7d064df65a3f?q=80&w=1770&auto=format&fit=crop",
    title: "Building Modern Websites",
    description:
      "Master HTML, CSS, JavaScript and modern tools to build stunning websites.",
    rating: 4.7,
    students: 1563,
  },
  {
    image:
      "https://images.unsplash.com/photo-1646300291345-e7f3f97986ed?q=80&w=1834&auto=format&fit=crop",
    title: "Web Development",
    description:
      "From front-end to back-end, learn full-stack development with real-world projects.",
    rating: 4.9,
    students: 2034,
  },
  {
    image:
      "https://images.unsplash.com/photo-1583225358814-4094d1a8aef2?q=80&w=1770&auto=format&fit=crop",
    title: "ReactJS for Responsive Web",
    description:
      "Build powerful single-page apps and interactive UI with ReactJS.",
    rating: 4.8,
    students: 1789,
  },
];

export const services = [
  {
    icon: GraduationCap,
    title: "Internationally Recognized Certification",
    description:
      "Students receive an Advanced Diploma in Software Engineering (ADSE) - a qualification highly valued by employers and universities worldwide. Leveraging over 10 years of expertise in IT training, Aptech is committed to building successful technology careers.",
    features: [
      "Global Recognition",
      "Industry-Valued Diploma",
      "10+ Years Expertise",
    ],
  },
  {
    icon: Globe,
    title: "24/7 Digital Learning Platform",
    description:
      "Online Varsity provides exclusive e-learning access from anywhere, on any device, at any time. This comprehensive platform offers interactive tools, valuable resources, and expert guidance to enhance students' skills beyond traditional classroom boundaries.",
    features: ["Anywhere Access", "Interactive Tools", "Expert Resources"],
  },
];

export const progressStats = [
  {
    value: 100,
    suffix: "+",
    label: "Students Trained",
    icon: Users,
    color: "text-white",
    bgColor: "bg-red-800/80",
    duration: 2000,
  },
  {
    value: 4.9,
    suffix: "/5",
    label: "Average Rating",
    icon: Star,
    color: "text-yellow-300",
    bgColor: "bg-red-800/80",
    duration: 1500,
  },
  {
    value: 95,
    suffix: "%",
    label: "Employment Rate",
    icon: Briefcase,
    color: "text-white",
    bgColor: "bg-red-800/80",
    duration: 1800,
  },
  {
    value: 5,
    suffix: "+",
    label: "Industry Partners",
    icon: Handshake,
    color: "text-white",
    bgColor: "bg-red-800/80",
    duration: 1200,
  },
];

export const courses = [
  {
    title: "CORPORATE TRAINING",
    link: "/courses/corporate",
    description:
      "Customized training solutions for businesses and organizations",
  },
  {
    title: "PROFESSIONAL COURSES",
    link: "/courses/professional",
    description: "Advanced courses for career advancement and specialization",
  },
  {
    title: "CAREER COURSES",
    link: "/courses/career",
    description: "Comprehensive programs for building successful IT careers",
  },
];

export const partners = [
  {
    id: 1,
    image: Partner1,
    label: "codecamp",
  },
  {
    id: 2,
    image: Partner2,
    label: "Lincoln University College",
  },
  {
    id: 3,
    image: Partner3,
    label: "Middlesex University",
  },
  {
    id: 4,
    image: Partner4,
    label: "ofqual",
  },
  {
    id: 5,
    image: Partner5,
    label: "uclan",
  },
  {
    id: 6,
    image: Partner6,
    label: "NCC Education",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Daniel Ayesoro",
    course: "ADSE (JAVA / NETWORKING)",
    text: "I looked for not just an institution that offered the course which I wanted but also had a reputation for indisputable excellence and intellectual development of students and Aptech fits that description.",
    image:
      "https://i.pinimg.com/736x/ec/38/9d/ec389dd1a5f4a8f331151e46c8a6863f.jpg",
  },
  {
    id: 2,
    name: "Elohor",
    course: "CPISM",
    text: "I looked for not just an institution that offered the course which I wanted but also had a reputation for indisputable excellence and intellectual development of students and Aptech fits that description.",
    image: "https://i.pinimg.com/736x/1d/c3/58/1dc358719c1d6c3ef949ff602e552c22.jpg",
  },
  {
    id: 3,
    name: "David",
    course: "ADSE (JAVA / NETWORKING)",
    text: "Highly skilled and knowledgeable teaching staff. Good infrastructure and excellent placement staff.",
    image:
      "https://i.pinimg.com/1200x/a2/09/d6/a209d6e66859493e14c59bc92e5b2e02.jpg",
  },
  {
    id: 4,
    name: "Habeeb",
    course: "ADSE (JAVA / JAVA)",
    text: "Aptech Fowobi is a fun and innovative place. It has most importantly taught me that excellence is always achieved through hard work.",
    image: "https://i.pinimg.com/1200x/9a/b4/ec/9ab4ec859a51544fd1674121f4ee9499.jpg",
  },
  {
    id: 5,
    name: "Nike",
    course: "ADSE (.NET / NETWORKING)",
    text: "When I started at Aptech Fowobi, I didn't have any sort of knowledge about IT. But now I do, so I highly recommend Aptech Fowobi to anybody who wishes to go into IT.",
    image: "https://i.pinimg.com/1200x/ff/24/0c/ff240c125fef72bb8539eb9c7b85cab6.jpg",
  },
  {
    id: 6,
    name: "Stephen",
    course: "ADSE (.NET / NETWORKING)",
    text: "Aptech Fowobi has opened my eyes to many things relating information technology. And I have also made cool friends. Thanks to Aptech Fowobi.",
    image: "https://i.pinimg.com/736x/d9/d4/1f/d9d41f6b647531ad35b7af392cf1b939.jpg",
  },
];
