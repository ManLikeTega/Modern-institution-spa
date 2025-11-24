import { useState } from "react";
import { Link } from "react-router";
import {
  quickLinks,
  programs,
  socialLinks,
  contactInfo,
} from "../data/footer_links";
import { Mail, ChevronRight, Send, CheckCircle2 } from "lucide-react";
import Logo from "../components/Logo";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribing email:", email);
      setIsSubscribed(true);
      setEmail("");

      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

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
            <h3 className="footer_header">Newsletter</h3>

            <p className="mb-6">
              Stay updated with our latest courses, events, and IT industry
              insights.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/50 focus:outline-none transition-all"
                  required
                  aria-label="Email for newsletter subscription"
                />

                <Mail className="absolute right-3 top-3.5 w-5 h-5 text-grey-800" />
              </div>

              <button
                type="submit"
                className="w-full bg-third hover:bg-third/50 active:bg-third text-white py-3 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe Now
              </button>
            </form>

            {isSubscribed && (
              <div className="mt-4 p-3 bg-green-600 text-white rounded-lg flex items-center gap-2 animate-fade-in">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you for subscribing!</span>
              </div>
            )}
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

            {/* Additional Links */}
            <div className="flex gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/sitemap"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
