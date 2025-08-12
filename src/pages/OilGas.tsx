import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/contact-form";
import SocialMediaSidebar from "@/components/ui/social-media-sidebar";
import GenericModal, { GenericModalData } from "@/components/ui/generic-modal";
import { Drill, Zap, Gauge, Wrench } from "lucide-react";
import heroImage from "@/assets/hero-oil-gas.jpg";

const OilGas = () => {
  const [selectedService, setSelectedService] = useState<GenericModalData | null>(null);

  const serviceDetails: { [key: string]: GenericModalData } = {
    "Field Surface Facility - Electrical": {
      title: "Field Surface Facility - Electrical",
      overview: "Complete electrical systems and components for oil & gas field operations including power distribution, control panels, and safety systems.",
      detailedDescription: "Our electrical systems for oil & gas field surface facilities provide comprehensive power distribution, control, and safety solutions designed for the harsh environments of upstream operations. These systems meet industry standards for hazardous locations and ensure reliable operation in critical applications.",
      workingPrinciple: "Electrical systems are designed with redundancy and fail-safe operation in mind. Power distribution systems use weatherproof enclosures rated for hazardous locations, while control systems employ industrial-grade components with remote monitoring capabilities for safe and efficient operation.",
      features: ["Hazardous Location Rated", "Weatherproof Enclosures", "Remote Monitoring", "Redundant Systems", "Emergency Shutdown", "NEMA 4X Rated"],
      specifications: ["Voltage Range: 120V-4160V", "Temperature Range: -40°F to 140°F", "Enclosure Rating: NEMA 4X/7/9", "Hazardous Area: Class I, Div 1&2", "Certification: UL, CSA, ATEX"],
      applications: ["Well Sites", "Production Facilities", "Processing Plants", "Pump Stations", "Compressor Stations"],
      benefits: ["Enhanced safety", "Regulatory compliance", "Reduced downtime", "Remote operation", "Weather resistant", "Long service life"],
      ctaText: "Request Electrical Quote"
    },
    "Field Surface Facility - Mechanical": {
      title: "Field Surface Facility - Mechanical",
      overview: "Mechanical equipment and systems for surface facility operations including pumps, compressors, and processing equipment.",
      detailedDescription: "Mechanical systems for oil & gas surface facilities encompass all rotating equipment, pressure vessels, and process systems required for production operations. Our solutions are engineered for continuous operation in demanding environments with minimal maintenance requirements.",
      workingPrinciple: "Mechanical systems are designed for optimal efficiency and reliability using proven technologies. Pumps and compressors utilize advanced materials and designs for extended service life, while processing equipment incorporates automated controls for safe and efficient operation.",
      features: ["Continuous Duty Rating", "Corrosion Resistant Materials", "Automated Controls", "Vibration Monitoring", "Easy Maintenance", "API Standards"],
      specifications: ["Operating Pressure: 150-1500 PSI", "Flow Rates: 10-5000 GPM", "Materials: Stainless Steel, Hastelloy", "Standards: API 610, 674", "Temperature: -20°F to 400°F"],
      applications: ["Oil Production", "Gas Processing", "Water Injection", "Chemical Injection", "Separation Systems"],
      benefits: ["High reliability", "Extended service life", "Reduced maintenance", "Energy efficient", "API compliant", "Cost effective"],
      ctaText: "Get Mechanical Quote"
    },
    "Field Surface Facility - Instrumentation": {
      title: "Field Surface Facility - Instrumentation",
      overview: "Precision instrumentation and monitoring systems for accurate measurement and control of field operations.",
      detailedDescription: "Instrumentation systems provide critical measurement and control capabilities for oil & gas operations. Our instruments are selected for accuracy, reliability, and compatibility with field environments, ensuring precise monitoring and control of process variables.",
      workingPrinciple: "Instrumentation systems use various measurement principles including differential pressure, electromagnetic, and ultrasonic technologies. Smart transmitters provide digital communication and diagnostics, while control systems ensure safe and efficient operation through automated responses to process conditions.",
      features: ["Smart Transmitters", "Digital Communication", "Self-Diagnostics", "Hazardous Area Rated", "SIL Rated Safety", "Wireless Options"],
      specifications: ["Accuracy: ±0.1% of span", "Operating Range: -40°F to 185°F", "Communication: HART, Foundation Fieldbus", "Safety Rating: SIL 2/3", "Explosion Proof: Class I Div 1"],
      applications: ["Flow Measurement", "Pressure Monitoring", "Temperature Control", "Level Detection", "Gas Analysis"],
      benefits: ["High accuracy", "Predictive maintenance", "Remote monitoring", "Safety compliance", "Reduced calibration", "Long-term stability"],
      ctaText: "Request Instrumentation Quote"
    },
    "Drilling - Rig Spaces & Mud Pumps": {
      title: "Drilling - Rig Spaces & Mud Pumps",
      overview: "Specialized drilling equipment and mud pump systems for efficient and safe drilling operations worldwide.",
      detailedDescription: "Drilling equipment and mud pump systems are critical components for successful drilling operations. Our solutions include high-pressure mud pumps, rig floor equipment, and support systems designed for the most demanding drilling applications worldwide.",
      workingPrinciple: "Mud pump systems use reciprocating pumps to circulate drilling fluid through the drill string and annulus. The drilling fluid removes cuttings, cools the bit, maintains wellbore stability, and controls formation pressures through hydrostatic pressure.",
      features: ["High Pressure Rating", "Continuous Operation", "Remote Control", "Automated Systems", "Safety Interlocks", "Modular Design"],
      specifications: ["Operating Pressure: 3000-7500 PSI", "Flow Rate: 350-1200 GPM", "Power: 1000-3000 HP", "Liner Size: 5-7.5 inches", "Stroke Rate: 40-120 SPM"],
      applications: ["Onshore Drilling", "Offshore Operations", "Directional Drilling", "Extended Reach", "HPHT Wells"],
      benefits: ["Enhanced drilling performance", "Improved safety", "Reduced NPT", "Higher penetration rates", "Better hole cleaning", "Extended equipment life"],
      ctaText: "Get Drilling Equipment Quote"
    }
  };

  const services = [
    {
      icon: Zap,
      title: "Field Surface Facility - Electrical",
      description: "Complete electrical systems and components for oil & gas field operations including power distribution, control panels, and safety systems.",
      features: ["Power Distribution", "Control Systems", "Safety Equipment", "Instrumentation"]
    },
    {
      icon: Wrench,
      title: "Field Surface Facility - Mechanical",
      description: "Mechanical equipment and systems for surface facility operations including pumps, compressors, and processing equipment.",
      features: ["Processing Equipment", "Pumps & Compressors", "Piping Systems", "Valves & Fittings"]
    },
    {
      icon: Gauge,
      title: "Field Surface Facility - Instrumentation",
      description: "Precision instrumentation and monitoring systems for accurate measurement and control of field operations.",
      features: ["Flow Meters", "Pressure Gauges", "Temperature Sensors", "Control Instruments"]
    },
    {
      icon: Drill,
      title: "Drilling - Rig Spaces & Mud Pumps",
      description: "Specialized drilling equipment and mud pump systems for efficient and safe drilling operations worldwide.",
      features: ["Mud Pump Systems", "Rig Equipment", "Drilling Tools", "Support Services"]
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
              Oil & Gas Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Complete Oil & Gas Equipment Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              From field surface facilities to drilling operations, we provide comprehensive 
              electrical, mechanical, and instrumentation solutions for the oil & gas industry.
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            >
              Request Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Our Oil & Gas Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive equipment and support services for every aspect of 
              oil & gas operations, from surface facilities to drilling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => setSelectedService(serviceDetails[service.title])}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-corporate-blue text-lg">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-corporate-blue text-center">
              Specialized Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-corporate-blue">Field Surface Facility</CardTitle>
                  <CardDescription>Complete infrastructure solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-semibold text-corporate-blue mr-2">Electrical:</span>
                      Power distribution, control panels, safety systems, and electrical instrumentation
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-corporate-blue mr-2">Mechanical:</span>
                      Processing equipment, pumps, compressors, piping systems, and valves
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-corporate-blue mr-2">Instrumentation:</span>
                      Flow meters, pressure gauges, temperature sensors, and control systems
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-corporate-blue">Drilling Operations</CardTitle>
                  <CardDescription>Equipment for efficient drilling</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="font-semibold text-corporate-blue mr-2">Rig Spaces:</span>
                      Complete rig equipment and space optimization solutions
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-corporate-blue mr-2">Mud Pumps:</span>
                      High-performance mud pump systems and components
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-corporate-blue mr-2">Support:</span>
                      Installation, maintenance, and technical support services
                    </li>
                  </ul>
                </CardContent>
              </Card>
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
                Get Your Oil & Gas Equipment Quote
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Contact our specialists to discuss your oil & gas equipment requirements. 
                We provide detailed quotes and technical specifications for all our products.
              </p>
            </div>
            
            <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-corporate-blue">
                  Why Choose ROS Global for Oil & Gas?
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p><strong className="text-corporate-blue">Industry Expertise:</strong> Decades of experience in oil & gas equipment supply</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p><strong className="text-corporate-blue">Global Supply Chain:</strong> Worldwide sourcing and distribution capabilities</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p><strong className="text-corporate-blue">Quality Assurance:</strong> All equipment meets industry standards and certifications</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p><strong className="text-corporate-blue">Technical Support:</strong> Comprehensive installation and maintenance services</p>
                  </div>
                </div>
              </div>
              
              <ContactForm 
                title="Request Oil & Gas Quote"
                description="Tell us about your project requirements and we'll provide a detailed quote."
                defaultQueryType="oil-gas"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <GenericModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          data={selectedService}
        />
      )}
    </div>
  );
};

export default OilGas;