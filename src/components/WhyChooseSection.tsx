
import { CheckCircle, Clock, DollarSign, Shield, Users, Award } from "lucide-react";

export const WhyChooseSection = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "End-to-End Design & Delivery",
      description: "We offer all services under one roof—from initial concept to final inspection.Clients benefit from a single point of contact, ensuring seamless coordination, faster delivery, and reduced communication gaps."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expertise-Driven Excellence",
      description: "Led by industry experts with deep domain experience and insights.Our in-house specialists ensure that every project meets the highest standards of technical precision and design innovation."
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Client-Centric Transparency",
      description: "Open, timely communication and reporting at every project stage.Clients receive regular updates on progress, design changes, and deliverables to stay fully aligned and informed."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Flexible & Scalable Solutions",
      description: "ZWe adapt our approach to suit every project size, scope, and condition. Whether it's a complex commercial build or a compact residential space, our processes scale without compromising quality."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Speed with Precision",
      description: "Quick turnaround time without sacrificing quality or accuracy.We deliver on-time designs and drawings, backed by robust internal reviews, approvals, and inspections."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Value-Engineered Outcomes",
      description: "Optimized, cost-effective, and efficient design solutions guaranteed.Through feasibility studies, budget planning, and smart space utilization, we deliver maximum value at minimum cost."
    }
  ];

  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-bronze-400 font-semibold text-lg">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Excellence in Every Detail
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover why leading businesses and homeowners trust Premier Construction 
            for their most important projects.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 h-full border border-white/10 hover:bg-white/10 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-bronze-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-8">
            Designing Dreams, Building Realities(SOP): The NoveTek Way
          </h3>

          {/* Flex container for text and image */}
            {/* Text */}
            <div className="text-left text-gray-300 w-full whitespace-pre-line">
              <p className="mb-8">
                At NoveTek, our approach to design program and project management is rooted in precision, quality, and end-to-end accountability. 
                Through our Standard Operating Procedure (SOP), we ensure every design undergoes dual checks, adheres to national and international codes, and is executed using advanced engineering software and model validations. 
                Our process includes rigorous tracking for timely delivery, transparent communication, and proactive cost control at every stage.<br /><br />
                From enrolling the technical team and defining design briefs to transforming design intent into optimized, code-compliant solutions, 
                we manage the entire design lifecycle. This includes guiding clients through design competitions, addressing site queries, 
                minimizing material wastage, securing technical clearances, and ensuring all documentation aligns with approved budgets and timelines.<br /><br />
                Our engineering scope spans peer reviews, mechanical, electrical, civil, and structural services, 
                making us a single-source partner for comprehensive, high-performance project delivery. 
                Whether it is a new development or the renovation of an occupied facility, we ensure efficiency,
                 adaptability, and excellence in every project we undertake.<br /><br />
              </p>
            </div>


        {/* Stats Section */}
        <div className="bg-gradient-to-r from-bronze-600 to-bronze-700 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed", sublabel: "Across all sectors" },
              { number: "200+", label: "Satisfied Clients", sublabel: "Long-term partnerships" },
              { number: "0", label: "Safety Incidents", sublabel: "Perfect safety record" },
              { number: "100%", label: "On-Time Delivery", sublabel: "Since 2013" }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-bronze-100">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action 
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Experience the Premier Difference?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who chose Premier Construction for their projects.
          </p>
          <button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-white text-navy-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get Your Free Consultation
          </button>
        </div>
        */}
      </div>
    </div>
  </div>
</section>
);
};
