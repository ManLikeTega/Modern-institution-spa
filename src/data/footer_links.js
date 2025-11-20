import {
  Phone,
  Mail,
  Laptop,
  Network,
  Database,
  Cloud,
  Smartphone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";

export const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Course", href: "/courses" },
  { name: "ADSE", href: "/" },
  { name: "Contact Us", href: "/contact" },
];

export const programs = [
  { name: "Software Engineering", icon: Laptop, color: "text-third" },
  { name: "Network Security", icon: Network, color: "text-third" },
  { name: "Data Science", icon: Database, color: "text-third" },
  { name: "Cloud Computing", icon: Cloud, color: "text-third" },
  { name: "Mobile Development", icon: Smartphone, color: "text-third" },
];

export const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/aceajahcentre",
    icon: Twitter,
    ariaLabel: "Follow us on Twitter",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/OfficialAptechAjahCentre/",
    icon: Facebook,
    ariaLabel: "Like us on Facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aptech_ajah",
    icon: Instagram,
    ariaLabel: "Follow us on Instagram",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/aptechajahcentre/",
    icon: Linkedin,
    ariaLabel: "Connect with us on LinkedIn",
  },
];

export const contactInfo = [
  {
    icon: Phone,
    href: "tel:+2348141554165",
    label: "Call us at +234 814 1554 165",
    text: "+234 814 1554 165",
    bgColor: "bg-blue-600",
    hoverBgColor: "bg-blue-700",
  },
  {
    icon: Mail,
    href: "mailto:aptchajahcentre@gmail.com",
    label: "Email us at aptechajahcentre@gmail.com",
    text: "aptechajahcentre@gmail.com",
    bgColor: "bg-green-600",
    hoverBgColor: "bg-green-700",
  },
  {
    icon: MapPin,
    href: "#",
    label: "Visit our location",
    text: "Ajah, Lagos, Nigeria",
    bgColor: "bg-purple-600",
    hoverBgColor: "bg-purple-700",
  },
];
