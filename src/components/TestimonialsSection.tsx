
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, TechCorp Solutions",
      company: "Corporate Client",
      rating: 5,
      text: "Premier Construction exceeded our expectations in every way. Their project management was flawless, and they delivered our new headquarters on time and within budget. The quality of work is outstanding.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Michael Chen",
      title: "Property Developer",
      company: "Chen Development Group",
      rating: 5,
      text: "Working with Premier Construction on our luxury residential project was a pleasure. Their attention to detail and commitment to quality craftsmanship resulted in homes that exceeded our buyers' expectations.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Emily Rodriguez",
      title: "Facilities Manager",
      company: "Metro University",
      rating: 5,
      text: "The renovation of our science building was completed with minimal disruption to our operations. Premier Construction's team was professional, efficient, and delivered exceptional results within our tight timeline.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "David Thompson",
      title: "Homeowner",
      company: "Custom Home Client",
      rating: 5,
      text: "Building our dream home with Premier Construction was an incredible experience. They listened to our vision and brought it to life with superior craftsmanship and attention to every detail.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const clientLogos = [
    { name: "TechCorp", logo: "TC" },
    { name: "Metro University", logo: "MU" },
    { name: "City Healthcare", logo: "CH" },
    { name: "Innovation Labs", logo: "IL" },
    { name: "Prime Retail", logo: "PR" },
    { name: "Green Energy Co", logo: "GE" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-bronze-600 font-semibold text-lg">Client Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the clients who have experienced 
            the Premier Construction difference firsthand.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <Quote className="w-12 h-12 text-bronze-600 opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center space-x-4">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-navy-900 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-bronze-600 font-medium">
                    {testimonials[currentIndex].title}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 hover:bg-bronze-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 hover:bg-bronze-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-bronze-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-bold text-navy-900 text-center mb-12">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-bronze-100 transition-colors">
                  <span className="text-2xl font-bold text-gray-400 group-hover:text-bronze-600">
                    {client.logo}
                  </span>
                </div>
                <p className="text-sm text-gray-500 font-medium">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
