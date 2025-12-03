import { Link } from "react-router";
import {
  quickLinks,
  programs,
  socialLinks,
  contactInfo,
} from "../data/footer_links";
import { Mail, ChevronRight, Send, CheckCircle2 } from "lucide-react";
import Logo from "./Logo";
import { Clock } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-white">
      {/* Main Footer Content */}
      <div className="section">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Logo />

            <p className="mb-6">
              Pursue an international degree in Information Technology with
              world-class education and industry-relevant curriculum.
            </p>

            <div className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                    aria-label={contact.label}
                  >
                    <div
                      className={`w-10 h-10 ${contact.bgColor} rounded-full flex items-center justify-center group-hover:${contact.hoverBgColor} transition-colors`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{contact.text}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer_header">Quick Links</h3>

            <nav aria-label="Quick links">
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Programs */}
          <div>
            <h3 className="footer_header">Our Programs</h3>

            <ul className="space-y-3 text-white">
              {programs.map((program, index) => {
                const IconComponent = program.icon;
                return (
                  <li key={index} className="flex items-center gap-2">
                    <IconComponent className={`w-4 h-4 ${program.color}`} />
                    <span>{program.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="footer_header">Open Hours</h3>

            <ul>
              <li className="flex gap-2">
                <Clock className="mt-1.5 w-4 h-4 " />
                <div>
                  <p>Mon - Friday</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </li>

              <li className="flex gap-2">
                <Clock className="mt-1.5 w-4 h-4 " />
                <div>
                  <p>Sat & Sun</p>
                  <p>09:00 AM - 12:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-third">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-200">
                © {currentYear} Aptech Fowobi. All Rights Reserved.
              </p>
              <p className="text-sm text-gray-300 mt-1">
                Empowering the next generation of IT professionals
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-gray-200 font-medium">Follow Us</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100/10 rounded-full flex items-center justify-center text-white hover:text-white hover:bg-third transition-all duration-200 transform hover:scale-110"
                      aria-label={social.ariaLabel}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
