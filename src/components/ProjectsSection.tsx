
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Home, Factory, GraduationCap } from "lucide-react";

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Downtown Corporate Center",
      category: "Commercial",
      location: "New York, NY",
      description: "Modern 15-story office complex with sustainable design features and state-of-the-art amenities.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      year: "2023",
      value: "Rs45M"
    },
    {
      id: 2,
      title: "Luxury Residential Complex",
      category: "Residential",
      location: "Los Angeles, CA",
      description: "High-end residential development featuring 120 luxury apartments with premium finishes.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      year: "2023",
      value: "Rs32M"
    },
    {
      id: 3,
      title: "Manufacturing Facility",
      category: "Industrial",
      location: "Chicago, IL",
      description: "State-of-the-art manufacturing plant with automated systems and environmental controls.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      year: "2022",
      value: "Rs28M"
    },
    {
      id: 4,
      title: "University Science Building",
      category: "Institutional",
      location: "Boston, MA",
      description: "Modern research facility with advanced laboratories and collaborative learning spaces.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      year: "2022",
      value: "Rs18M"
    },
    {
      id: 5,
      title: "Retail Shopping Center",
      category: "Commercial",
      location: "Miami, FL",
      description: "Open-air shopping center with mixed-use spaces and sustainable design elements.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      year: "2023",
      value: "Rs22M"
    },
    {
      id: 6,
      title: "Custom Family Estate",
      category: "Residential",
      location: "San Francisco, CA",
      description: "Luxury custom home with panoramic city views and smart home integration.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      year: "2023",
      value: "Rs8M"
    }
  ];

  const filters = ["All", "Commercial", "Residential", "Industrial", "Institutional"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Commercial": return <Building className="w-4 h-4" />;
      case "Residential": return <Home className="w-4 h-4" />;
      case "Industrial": return <Factory className="w-4 h-4" />;
      case "Institutional": return <GraduationCap className="w-4 h-4" />;
      default: return <Building className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-bronze-600 font-semibold text-lg">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mt-4 mb-6">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse portfolio of successful projects across multiple sectors, 
            showcasing our expertise and commitment to excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-bronze-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-bronze-50 hover:text-bronze-600 shadow-md"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-bronze-600 text-white">
                    {getIconForCategory(project.category)}
                    <span className="ml-1">{project.category}</span>
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-navy-900">
                    {project.year}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-bronze-600 font-medium mb-3">
                  📍 {project.location}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Project Value</span>
                  <span className="font-bold text-bronze-600 text-lg">{project.value}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            View Complete Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};
