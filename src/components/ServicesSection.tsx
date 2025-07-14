
import { Building, Home, Palette, Wrench, RotateCcw, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ServicesSection = () => {
  const services = [
    {
      icon: <Building className="w-10 h-10" />,
      title: "Structural Services",
      features: ["Structural Design", "Electrical Design", "PHE Design", "HVAC Design", "Proof Checking of Designs", 
        "Project Management Services", "Design Program Management", "Structural and MEP Auditing"]
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "USP - Designs ",
      description: "Our Designs are",
      features: ["Developer Friendly", " Contractor Friendly", "Customer Friendly", "On time Delivery of drawings", 
        " Adhere to project budget", "Value Engineering", "On Site Solutions", "Involvement of Sr.Management" ]
    },
    {
      icon: <Home className="w-10 h-10" />,
      title: "Project Managemnet Consultation",
      features: ["Pre Construction", "Tender Management", "Project Time Managemnet",
        "Quality Management", "Safety", "Material Managemnet", "QS, Billing, Reconciliation", "MIS Reporting", "Project Close Out"
      ]
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Turnkey Solutions",
      description: "Need Inputs",
      features: ["Need Inputs", "Need Inputs", "Need Inputs"]
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Turnkey Solutions",
      description: "Need Inputs",
      features: ["Need Inputs", "Need Inputs", "Need Inputs"]
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "Turnkey Solutions",
      description: "Need Inputs",
      features: ["Need Inputs", "Need Inputs", "Need Inputs"]
    }
  ];

  return (
  <section id="services" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-bronze-600 font-semibold text-lg">Our Services</span>
        <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
          Comprehensive Construction Solutions
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          From concept to completion, we provide full-service construction solutions 
          tailored to meet your specific needs and exceed your expectations.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:transform hover:scale-105">
            <CardContent className="p-8">
              <div className="text-bronze-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-bronze-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-8">
            Designing Dreams, Building Realities: The NoveTek Way
          </h3>

          {/* Flex container for text and image */}
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {/* Text */}
            <div className="text-left text-gray-300 max-w-2xl w-full whitespace-pre-line">
              <p className="mb-8">
                M.S. NAGENDRA PRASAD<br />
                Managing Director<br /><br />
                The depth of your struggle determines the height of your success<br /><br />
                NoveTek Consultants, the brainchild of M.S. Nagendra Prasad, 
                has reached towering peaks in the real estate sector. Passion, hard work, will power, 
                dedication, knowledge, and innovations in design have been at the core of his ideology. No wonder, 
                from being one of the many service consultants, he has reached the position of a leading design-consultant in the real-estate industry in less than 7 years.<br /><br />
                With a humble beginning in his career in 1989, as a site engineer, M.S. Nagendra Prasad quickly learned the trade of construction and moved to design consultancy. In 1995 he was leading consultancy firms in Bangalore and learned the design services and site co-ordination with other services.<br /><br />
                During this period, he was instrumental in handling many iconic structures in Bangalore and other parts of India. With a clear vision and couple of leading architects, he started functioning as one of the structured service specialists keeping in mind the functionality, cost efficiency, and timely implementation of the design solution. His vision to provide effective project solutions has driven his career to the next level.<br /><br />
                Later in 2015, he formed NoveTek Consultants with a team of like-minded core designers. He has been providing creative services in the field of affordable and luxury homes, tech parks, commercial structures, and other high-end residential buildings and villas.<br /><br />
                Within a short span of 8 years, he has handled and designed over 150+ projects in all sectors. Excellent relationship with clients and innovative ideas, even in the most trying times, has helped him climb the stairs to new heights of success within such a short time and he had to never look back.
              </p>
            </div>

            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://github.com/pramodrmurthy/novetek_final/edit/main/src/components/ServicesSection.tsx#:~:text=Screenshot.png"
                alt="Descriptive Alt Text"
                className="w-full h-auto object-contain rounded-xl shadow-md"
              />
            </div>
          </div>

          {/* CTA Button 
          <button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-10 bg-bronze-600 hover:bg-bronze-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            
          </button>
          */}
        </div>
      </div>
    </div>
  </section>
);
};
