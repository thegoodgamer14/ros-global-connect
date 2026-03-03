import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/contact-form";
import SocialMediaSidebar from "@/components/ui/social-media-sidebar";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Drill, Zap, Gauge, Wrench, ArrowRight, CheckCircle, Shield, Globe } from "lucide-react";
import heroImage from "@/assets/hero-oil-gas.webp";

const OilGas = () => {
  const services = [
    {
      icon: Zap,
      title: "Field Surface Facility — Electrical",
      description: "Complete electrical systems for hazardous environments — power distribution, control panels, ESD & fire/gas systems. NEMA, ATEX, and IECEx certified.",
      features: ["Power Distribution", "Control Panels", "Safety Systems", "Hazardous Area Equipment"],
      href: "/oil-gas/field-surface-facility-electrical"
    },
    {
      icon: Wrench,
      title: "Field Surface Facility — Mechanical",
      description: "API-compliant pumps, compressors, valves, piping systems, and process vessels engineered for continuous operation in demanding environments.",
      features: ["API 610 Pumps", "Compressors", "Process Vessels", "Valves & Piping"],
      href: "/oil-gas/field-surface-facility-mechanical"
    },
    {
      icon: Gauge,
      title: "Field Surface Facility — Instrumentation",
      description: "Smart transmitters, flow meters, level sensors, and SIL-rated safety instruments with HART, Fieldbus, and wireless communication.",
      features: ["Smart Transmitters", "Flow Meters", "SIL Safety", "Wireless Solutions"],
      href: "/oil-gas/field-surface-facility-instrumentation"
    },
    {
      icon: Drill,
      title: "Drilling — Rig Spaces & Mud Pumps",
      description: "High-performance triplex mud pumps, rig floor equipment, solids control systems, and consumable components for onshore and offshore operations.",
      features: ["Mud Pump Systems", "Rig Equipment", "Solids Control", "Consumables & Spares"],
      href: "/oil-gas/drilling-rig-spaces-mud-pumps"
    }
  ];

  const valueProps = [
    { icon: Shield, title: "Multi-Standard Compliance", description: "NEC, IEC, API, ATEX, IECEx — certified equipment for global deployments." },
    { icon: Globe, title: "Global Supply Chain", description: "Tier-1 sourcing from leading manufacturers with competitive pricing." },
    { icon: CheckCircle, title: "Harsh Environment Proven", description: "Equipment designed for extreme temperatures, corrosive atmospheres, and remote locations." }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Oil & Gas Equipment Solutions | Field Surface Facility & Drilling | ROS Global Solutions"
        description="Complete oil and gas equipment solutions — electrical systems, mechanical equipment, instrumentation, and drilling support. API-compliant, hazardous area certified. Global supply chain."
        keywords="oil gas equipment UAE, field surface facility, mud pumps, drilling equipment, instrumentation oil gas, electrical systems oil field, API compliant, ATEX certified"
        path="/oil-gas"
      />
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
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              From field surface facilities to drilling operations — comprehensive
              electrical, mechanical, and instrumentation equipment for the energy industry.
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

      {/* Industry Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Your Single-Source Equipment Partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ROS Global Solutions provides the complete range of equipment required for upstream and midstream
              oil & gas operations. Every product we supply meets or exceeds applicable API, ASME, and regional standards —
              sourced from tier-1 manufacturers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Product Line Cards */}
      <section className="py-8 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Our Product Lines
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our specialised equipment categories — each backed by deep technical expertise and a global supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} to={service.href} className="block group p-2">
                <Card className="h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300 group-hover:scale-[1.02] border-2 border-border group-hover:border-corporate-blue/20">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-corporate-blue text-lg">
                          {service.title}
                        </CardTitle>
                      </div>
                      <ArrowRight className="h-5 w-5 text-corporate-blue opacity-0 group-hover:opacity-100 transition-opacity" />
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
                    <span className="text-sm font-medium text-corporate-blue group-hover:underline">
                      Learn More →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ROS Global */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-blue">Why Choose ROS Global for Oil & Gas?</h2>
            <p className="text-muted-foreground mt-2">We don't just supply equipment — we deliver engineered solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valueProps.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-corporate-blue">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
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
    </div>
  );
};

export default OilGas;