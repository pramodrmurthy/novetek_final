
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy-900 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 8041076777</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>mail@novetek.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-bronze-500 to-bronze-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">PC</span>
              </div>
              <div>
                <h1 className={`text-xl font-bold ${isScrolled ? "text-navy-900" : "text-white"}`}>
                  NoveTek Consultants
                </h1>
                <p className={`text-xs ${isScrolled ? "text-navy-600" : "text-white/80"}`}>
                  Redefining Design
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors hover:text-bronze-500 ${
                    isScrolled ? "text-navy-900" : "text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="bg-bronze-600 hover:bg-bronze-700 text-white px-6 py-2"
              >
                Get Quote
              </Button>
            </nav>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 ${isScrolled ? "text-navy-900" : "text-white"}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 text-navy-900 font-medium hover:text-bronze-600 border-b border-gray-100 last:border-b-0"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="w-full mt-4 bg-bronze-600 hover:bg-bronze-700 text-white"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
