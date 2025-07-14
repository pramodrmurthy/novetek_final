
import { Award, Users, Clock, Shield, Building, Goal, Construction, School } from "lucide-react";

export const AboutSection = () => {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-bronze-600" />,
      title: "Commercial Projects",
      description: "Delivering cutting-edge commercial spaces known for innovation, functionality, and design excellence."
    },
    {
      icon: <Users className="w-8 h-8 text-bronze-600" />,
      title: "Residential Apartments - High Rise",
      description: "Expertise in high-rise construction delivering quality homes with structural integrity and lifestyle amenities."
    },
    {
      icon: <Clock className="w-8 h-8 text-bronze-600" />,
      title: "Plotted Development",
      description: "End-to-end development of plotted layouts with integrated infrastructure, utilities, and legal compliance."
    },
    {
      icon: <Goal className="w-8 h-8 text-bronze-600" />,
      title: "Villas, Row Houses, Villaments",
      description: "Customized premium living solutions crafted to match modern design with personalized comfort."
    },
    {
      icon: <Shield className="w-8 h-8 text-bronze-600" />,
      title: "Hospitality",
      description: "Construction of hotels, resorts, and hospitality venues focused on luxury, aesthetics, and guest experience."
    },
    {
      icon: <Building className="w-8 h-8 text-bronze-600" />,
      title: "Industrial Projects",
      description: "Robust industrial facilities designed for manufacturing, logistics, and scalability in operations."
    },
    {
      icon: <Construction className="w-8 h-8 text-bronze-600" />,
      title: "Healthcare Projects",
      description: "Execution of hospitals and healthcare infrastructure adhering to medical-grade safety and regulatory standards."
    },
    {
      icon: <School className="w-8 h-8 text-bronze-600" />,
      title: "Institutional Projects",
      description: "Smart and sustainable educational and institutional campuses designed for functionality and future growth."
    }

  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="mb-8">
              <span className="text-bronze-600 font-semibold text-lg">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
                Even the longest journey begins with that first step
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                It was the year 2015 when that first step – establishing of NoveTek Consultants Pvt. Ltd. – was taken. 
                And, the journey is continuing till date with many milestones being created on the way.
                Industry professionals, with rich and varied experience in the areas of design,
                quantity surveying, execution, planning and coordination, 
                came together with a common client-centric aim of providing one-stop gamut of services in the field of 
                program management consultancy and SMEP design.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The founders, with a cumulative work experience of more than 75 years and working exposure to leading developers, 
                contractors, and design consultants, have successfully completed many of the iconic projects in Bangalore and other parts of India.

              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { number: "10+", label: "Years" },
                { number: "500+", label: "Projects" },
                { number: "200+", label: "Clients" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-bronze-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Construction team working on site"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-bronze-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-bronze-600" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-900">Award Winning</h4>
                  <p className="text-sm text-gray-600">Excellence in Construction</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-bronze-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-bronze-600 group-hover:text-white transition-colors">
                {achievement.icon}
              </div>
              <h4 className="font-bold text-navy-900 mb-2">{achievement.title}</h4>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
