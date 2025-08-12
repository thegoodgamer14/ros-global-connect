import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/contact-form";
import ProductModal from "@/components/ui/product-modal";
import SocialMediaSidebar from "@/components/ui/social-media-sidebar";
import { Wind, Droplets, Filter, Thermometer, Zap, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";

const HVAC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  
  const productDetails = {
    dehumidifier: {
      title: "Dehumidifier / Humidifier",
      overview: "Advanced humidity control systems for precise environmental management in commercial and industrial applications.",
      detailedDescription: "Our commercial-grade dehumidifier and humidifier systems are engineered for demanding environments where precise humidity control is critical. These units feature advanced sensor technology, intelligent controls, and energy-efficient operation to maintain optimal moisture levels while minimizing operational costs.",
      workingPrinciple: "The system works by continuously monitoring ambient humidity levels through precision sensors. When dehumidification is needed, the unit draws air through cooling coils where moisture condenses and is collected in a reservoir or drained away. For humidification, the system uses ultrasonic or evaporative technology to add precisely controlled amounts of moisture to the air stream, ensuring optimal comfort and equipment protection.",
      features: [
        "Commercial Grade Construction",
        "Energy Efficient Operation",
        "Smart Control Systems",
        "Low Maintenance Design",
        "Real-time Monitoring",
        "Remote Access Capability",
        "Auto-drain Function",
        "Stainless Steel Components"
      ],
      specifications: [
        "Capacity: 10-500 pints/day",
        "Humidity Range: 30-90% RH",
        "Operating Temperature: 41-95°F",
        "Power Supply: 115V/230V",
        "Refrigerant: R-410A",
        "Noise Level: <50 dB",
        "Dimensions: Various sizes available",
        "Warranty: 3 years parts & labor"
      ],
      applications: ["Data Centers", "Manufacturing", "Healthcare", "Food Processing", "Laboratories", "Museums", "Warehouses", "Clean Rooms"],
      benefits: [
        "Prevents equipment corrosion and failure",
        "Reduces energy costs by up to 30%",
        "Improves indoor air quality",
        "Protects sensitive equipment",
        "Prevents mold and mildew growth",
        "Extends equipment lifespan",
        "Meets industry compliance standards",
        "24/7 reliable operation"
      ]
    },
    celdecPad: {
      title: "Celdec Pad",
      overview: "High-performance evaporative cooling pads that provide efficient temperature reduction and air purification.",
      detailedDescription: "Celdec pads are manufactured using advanced cellulose technology with specially treated fibers that maximize water retention and air contact. These pads provide superior cooling efficiency while filtering airborne particles, making them ideal for both cooling and air purification applications.",
      workingPrinciple: "Air passes through the saturated Celdec pad where evaporative cooling occurs. As water evaporates from the pad surface, it absorbs heat from the air stream, resulting in significant temperature reduction. The pad's unique fiber structure creates turbulent airflow that maximizes the evaporation process while trapping dust and particles.",
      features: [
        "High Efficiency Cooling",
        "Durable Cellulose Material",
        "Easy Installation",
        "Cost Effective Operation",
        "Self-Cleaning Action",
        "Antimicrobial Treatment",
        "Rigid Frame Construction",
        "Multiple Thickness Options"
      ],
      specifications: [
        "Material: Specially treated cellulose",
        "Thickness: 4\", 6\", 8\", 12\"",
        "Height: 12\" to 72\"",
        "Length: 12\" to 48\"",
        "Water absorption: 95%",
        "Air velocity: 250-500 FPM",
        "Temperature drop: 10-20°F",
        "Efficiency: 80-90%"
      ],
      applications: ["Cooling Towers", "Air Handlers", "Industrial Cooling", "Greenhouse Climate", "Poultry Houses", "Textile Mills", "Data Centers", "Manufacturing Plants"],
      benefits: [
        "Reduces operating temperatures significantly",
        "Improves air quality through filtration",
        "Low maintenance requirements",
        "Environmentally friendly cooling solution",
        "Cost-effective compared to mechanical cooling",
        "Reduces dust and particulates",
        "Self-cleaning action reduces clogging",
        "Long service life with proper maintenance"
      ]
    },
    airFilter: {
      title: "Air Filter",
      overview: "Premium air filtration solutions for removing contaminants and ensuring optimal indoor air quality.",
      detailedDescription: "Our comprehensive range of air filters includes HEPA, ULPA, carbon, and pre-filters designed for various applications. Each filter is manufactured to strict quality standards and tested for efficiency, capacity, and durability to ensure optimal performance in demanding environments.",
      workingPrinciple: "Air filtration works through multiple mechanisms including mechanical straining, impaction, interception, and diffusion. HEPA filters use dense mat of small fibers to capture particles, while carbon filters use activated carbon to adsorb gases and odors. Our multi-stage filtration systems combine different filter types for comprehensive air cleaning.",
      features: [
        "HEPA Grade Efficiency",
        "Antimicrobial Treatment",
        "Long Service Life",
        "Multiple Size Options",
        "Low Pressure Drop",
        "High Dust Holding Capacity",
        "Moisture Resistant",
        "Temperature Stable"
      ],
      specifications: [
        "Efficiency: 99.97% at 0.3 microns",
        "MERV Rating: 13-16",
        "Initial Pressure Drop: 0.5-1.0\" WG",
        "Final Pressure Drop: 2.0-3.0\" WG",
        "Temperature Range: -20°F to 200°F",
        "Humidity Range: 0-100% RH",
        "Frame Material: Galvanized steel/Aluminum",
        "Media: Pleated synthetic/Glass fiber"
      ],
      applications: ["Clean Rooms", "Hospitals", "Offices", "Manufacturing", "Laboratories", "Food Processing", "Pharmaceutical", "Electronics"],
      benefits: [
        "Removes 99.97% of airborne particles",
        "Reduces allergens and pollutants",
        "Protects sensitive equipment",
        "Improves worker health and safety",
        "Meets strict industry standards",
        "Extends HVAC system life",
        "Reduces cleaning and maintenance costs",
        "Ensures regulatory compliance"
      ]
    },
    gasFilter: {
      title: "Gas Filter",
      overview: "Specialized gas filtration systems designed to remove harmful gases and ensure safe air quality.",
      detailedDescription: "Our gas filtration systems utilize advanced activated carbon and specialized chemical media to remove a wide range of gaseous contaminants including VOCs, ammonia, hydrogen sulfide, and other harmful compounds. These systems are engineered for industrial applications where air quality is critical for safety and compliance.",
      workingPrinciple: "Gas filtration occurs through adsorption, where gas molecules are attracted to and held by the filter media surface. Activated carbon provides a large surface area for adsorption, while specialized impregnated carbons target specific gases. Chemical filters use reactive media that neutralize harmful gases through chemical reactions.",
      features: [
        "Chemical Removal Technology",
        "Odor Control Capability",
        "Industrial Grade Construction",
        "Custom Solutions Available",
        "High Adsorption Capacity",
        "Long Service Life",
        "Low Pressure Drop",
        "Regenerable Media Options"
      ],
      specifications: [
        "Removal Efficiency: >95% for target gases",
        "Carbon Type: Activated/Impregnated",
        "Bed Depth: 2\" to 12\"",
        "Contact Time: 0.1-0.5 seconds",
        "Operating Temperature: 32-150°F",
        "Relative Humidity: 30-85%",
        "Pressure Drop: 0.5-2.0\" WG",
        "Media Life: 6-24 months"
      ],
      applications: ["Chemical Plants", "Laboratories", "Wastewater Treatment", "Industrial Facilities", "Printing Operations", "Paint Booths", "Refineries", "Semiconductor Fabs"],
      benefits: [
        "Removes harmful gases and vapors",
        "Eliminates odors effectively",
        "Protects worker health and safety",
        "Ensures environmental compliance",
        "Prevents corrosion of equipment",
        "Improves workplace conditions",
        "Customizable for specific applications",
        "Cost-effective gas removal solution"
      ]
    }
  };

  const products = [
    {
      icon: Droplets,
      title: "Dehumidifier / Humidifier",
      description: "Advanced humidity control systems for precise environmental management in commercial and industrial applications.",
      features: ["Commercial Grade", "Energy Efficient", "Smart Controls", "Low Maintenance"],
      applications: ["Data Centers", "Manufacturing", "Healthcare", "Food Processing"]
    },
    {
      icon: Filter,
      title: "Celdec Pad",
      description: "High-performance evaporative cooling pads that provide efficient temperature reduction and air purification.",
      features: ["High Efficiency", "Durable Materials", "Easy Installation", "Cost Effective"],
      applications: ["Cooling Towers", "Air Handlers", "Industrial Cooling", "Greenhouse Climate"]
    },
    {
      icon: Wind,
      title: "Air Filter",
      description: "Premium air filtration solutions for removing contaminants and ensuring optimal indoor air quality.",
      features: ["HEPA Grade", "Antimicrobial", "Long Lasting", "Multiple Sizes"],
      applications: ["Clean Rooms", "Hospitals", "Offices", "Manufacturing"]
    },
    {
      icon: Thermometer,
      title: "Gas Filter",
      description: "Specialized gas filtration systems designed to remove harmful gases and ensure safe air quality.",
      features: ["Chemical Removal", "Odor Control", "Industrial Grade", "Custom Solutions"],
      applications: ["Chemical Plants", "Laboratories", "Wastewater Treatment", "Industrial Facilities"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SocialMediaSidebar />
      {/* Hero Section */}
      <section 
        className="py-16 lg:py-24 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="outline" className="mb-4 border-white text-white bg-white/10 backdrop-blur-sm">
              HVAC Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Advanced Air Control & Filtration Systems
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              ROS Global provides comprehensive HVAC solutions including industrial-grade dehumidifiers, 
              high-performance filtration systems, and advanced air quality management technologies. Our products 
              are engineered for demanding commercial and industrial environments where precision and reliability are essential.
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            >
              Request Product Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-ros-blue">
              Our HVAC Product Line
            </h2>
            <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              ROS Global specializes in providing professional-grade HVAC equipment and filtration systems 
              engineered for demanding commercial and industrial environments. Our comprehensive product line 
              ensures optimal air quality, temperature control, and environmental management for critical applications 
              across industries including healthcare, manufacturing, data centers, and food processing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card 
                key={index} 
                className="h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => {
                  const productKey = product.title.toLowerCase().replace(/[^a-z0-9]/g, '').replace('dehumidifierhumidifier', 'dehumidifier').replace('celdecpad', 'celdecPad').replace('airfilter', 'airFilter').replace('gasfilter', 'gasFilter');
                  setSelectedProduct(productDetails[productKey as keyof typeof productDetails]);
                }}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-ros-blue rounded-lg flex items-center justify-center mr-4">
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-ros-blue text-lg">
                        {product.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed text-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-ros-blue mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ros-blue mb-2">Applications:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.applications.map((app, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-corporate-blue text-center">
              Complete HVAC Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-corporate-blue">Climate Control Systems</CardTitle>
                  <CardDescription>Precision environmental management</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-corporate-blue mb-2">Dehumidifier / Humidifier Systems</h4>
                      <p className="text-muted-foreground text-sm">
                        Advanced humidity control for maintaining optimal moisture levels in critical environments. 
                        Features include precise controls, energy efficiency, and reliable operation.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-corporate-blue mb-2">Temperature Management</h4>
                      <p className="text-muted-foreground text-sm">
                        Integrated systems that work with your existing HVAC infrastructure to maintain 
                        precise temperature and humidity parameters.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-corporate-blue">Filtration Systems</CardTitle>
                  <CardDescription>Advanced air and gas purification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-corporate-blue mb-2">Celdec Pad & Air Filters</h4>
                      <p className="text-muted-foreground text-sm">
                        High-performance filtration media including evaporative cooling pads and HEPA-grade 
                        air filters for superior air quality management.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-corporate-blue mb-2">Gas Filter Systems</h4>
                      <p className="text-muted-foreground text-sm">
                        Specialized chemical and gas filtration solutions for removing harmful contaminants 
                        and ensuring safe, clean air in industrial environments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Section */}
            <div className="mt-12 bg-corporate-blue-light/10 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-corporate-blue text-center">
                Why Our HVAC Solutions Excel
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <Filter className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-corporate-blue mb-2">Superior Filtration</h4>
                  <p className="text-muted-foreground text-sm">Advanced filtration technology that exceeds industry standards</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-corporate-blue mb-2">Energy Efficient</h4>
                  <p className="text-muted-foreground text-sm">Optimized designs that reduce operational costs</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-3">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-corporate-blue mb-2">Easy Maintenance</h4>
                  <p className="text-muted-foreground text-sm">User-friendly designs with minimal maintenance requirements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
                Get Your HVAC Solution Quote
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our HVAC specialists are ready to help you find the perfect climate control 
                and filtration solutions for your specific requirements.
              </p>
            </div>
            
            <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-corporate-blue">
                  HVAC Solutions for Every Industry
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-2">Commercial Buildings</h4>
                    <p className="text-muted-foreground">Office buildings, retail spaces, and hospitality venues requiring optimal indoor air quality.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-2">Industrial Facilities</h4>
                    <p className="text-muted-foreground">Manufacturing plants, warehouses, and processing facilities with demanding environmental requirements.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-2">Healthcare Facilities</h4>
                    <p className="text-muted-foreground">Hospitals, clinics, and medical facilities requiring precise air quality and contamination control.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-2">Data Centers</h4>
                    <p className="text-muted-foreground">Critical infrastructure facilities requiring precise climate control and air filtration.</p>
                  </div>
                </div>
              </div>
              
              <ContactForm 
                title="Request HVAC Quote"
                description="Tell us about your climate control requirements and we'll recommend the best solution."
                defaultQueryType="hvac"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default HVAC;