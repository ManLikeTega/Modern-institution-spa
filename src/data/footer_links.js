import {
  Phone,
  Mail,
  Laptop,
  Network,
  Database,
  Cloud,
  Smartphone,
  Facebook,
  Linkedin,
  MapPin,
} from "lucide-react";
import { FaWhatsapp, FaTiktok } from "react-icons/fa";

export const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Gallery", href: "/" },
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
    name: "Tiktok",
    href: "https://vm.tiktok.com/ZSHTsyv9L32Jh-qXcQH/",
    icon: FaTiktok,
    ariaLabel: "Follow us on Tiktok",
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=100083300764625",
    icon: Facebook,
    ariaLabel: "Like us on Facebook",
  },
  {
    name: "Whatsapp",
    href: "https://wa.link/umvmbv",
    icon: FaWhatsapp,
    ariaLabel: "Connect with us on Whatsapp",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/aptech-fowobi-ota/",
    icon: Linkedin,
    ariaLabel: "Connect with us on LinkedIn",
  },
];

export const contactInfo = [
  {
    icon: Phone,
    href: "tel:+2349063571320",
    label: "Call us at +234 906 357 1320",
    text: "+234 906 357 1320",
    bgColor: "bg-blue-600",
    hoverBgColor: "bg-blue-700",
  },
  {
    icon: Mail,
    href: "mailto:aptechfowobiota@gmail.com",
    label: "Email us at aptechfowobiota@gmail.com",
    text: "aptechfowobiota@gmail.com",
    bgColor: "bg-green-600",
    hoverBgColor: "bg-green-700",
  },
  {
    icon: MapPin,
    href: "#",
    label: "Visit our location",
    text: "Fowobi, Ota, Nigeria",
    bgColor: "bg-purple-600",
    hoverBgColor: "bg-purple-700",
  },
];
