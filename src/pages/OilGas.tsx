import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/contact-form";
import { Drill, Zap, Gauge, Wrench } from "lucide-react";

const OilGas = () => {
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
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-[var(--gradient-corporate)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="outline" className="mb-4 border-white text-white">
              Oil & Gas Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Oil & Gas Equipment Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              From field surface facilities to drilling operations, we provide comprehensive 
              electrical, mechanical, and instrumentation solutions for the oil & gas industry.
            </p>
            <Button variant="cta" size="lg" className="bg-white text-corporate-blue hover:bg-gray-100">
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
              <Card key={index} className="h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300">
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
                  <div className="grid grid-cols-2 gap-2">
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OilGas;