
import { Building, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Portfolio", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Commercial Construction",
    "Residential Projects",
    "Interior Design",
    "Turnkey Solutions",
    "Renovation Services",
    "Emergency Repairs"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-bronze-500 to-bronze-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Novetek Construction</h3>
                <p className="text-xs text-gray-400">Building Excellence Since 2015</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for premium construction services. We deliver quality, 
              innovation, and reliability in every project we undertake.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="w-5 h-5" />, href: "#" },
                { icon: <Twitter className="w-5 h-5" />, href: "#" },
                { icon: <Instagram className="w-5 h-5" />, href: "#" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-bronze-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-bronze-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-bronze-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-bronze-400 mt-1" />
                <div>
                  <p className="text-gray-300">#58, Ground Floor, Mountain Street</p>
                  <p className="text-gray-300">1st Block, Jayanagar East, Bengaluru 560011</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-bronze-400" />
                <p className="text-gray-300">+91 80410 76777</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-bronze-400" />
                <p className="text-gray-300">mail@novetek.in</p>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-bronze-400">Business Hours</h5>
              <p className="text-gray-300 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-gray-300 text-sm">Sat: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-300 text-sm">Sun: Emergency Only</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Premier Construction. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-bronze-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-bronze-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-bronze-400 transition-colors">
                Licensing
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
