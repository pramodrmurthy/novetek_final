
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Thank you for your inquiry!",
      description: "We'll get back to you within 24 hours to discuss your project.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8041076777",
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "mail@novetek.in",
      description: "Send us your project details"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Head Office",
      value: "#58, Ground Floor, Mountain Street,1st Block, Jayanagar East",
      description: "Bengaluru 560011"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Regional Office: Hyderabad",
      value: "#404, Ennar Tower, Brindavan Colony, ECIL (PO)",
      description: "Hyderabad 5600060, Telangana +91 95023 05560"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Regional Office: Pune",
      value: "Flat No. 5, Plot no. 191, Sector no. 25",
      description: "Nigdi Pradhikaran, Pune 411044 Email: ncpl_pune@novetek.in"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Hours",
      value: "Mon - Fri: 8:00 AM - 6:00 PM",
      description: "Weekend consultations available"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-bronze-600 font-semibold text-lg">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
            Start Your Project Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your construction vision to life? Contact us for a free consultation 
            and detailed project estimate.
          </p>
        </div>
        {/* Contact Information */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form 
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">
                Get Your Free Quote
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bronze-500 focus:border-transparent"
                    >
                      <option value="">Select Project Type</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="residential">Residential Project</option>
                      <option value="renovation">Renovation/Retrofit</option>
                      <option value="design">Design Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full"
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                  />
                </div>

                <Button type="submit" className="w-full bg-bronze-600 hover:bg-bronze-700 text-white py-3 text-lg font-semibold">
                  Get Your Free Quote
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  * We'll respond within 24 hours with a detailed consultation
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-bronze-100 rounded-lg flex items-center justify-center text-bronze-600">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">{info.label}</h4>
                      <p className="text-bronze-600 font-medium">{info.value}</p>
                      <p className="text-gray-500 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact 
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">24/7 Emergency Service</h3>
              <p className="mb-4">
                Construction emergencies don't wait for business hours. Our emergency response 
                team is available around the clock for urgent structural issues.
              </p>
              <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
                Emergency Hotline: (555) 911-HELP
              </Button>
            </div>
            */}

            {/* Map Placeholder */}
            <div className="w-screen max-w-7xl bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="font-medium">Interactive Map</p>
                <p className="text-sm">Jayanagar</p>
                <p className="text-sm">Bangalore 560061</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
