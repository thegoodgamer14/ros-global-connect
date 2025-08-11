import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/contact-form";
import { Server, Shield, Snowflake, Zap, Filter, Wind } from "lucide-react";
import heroImage from "@/assets/hero-datacenter.jpg";

const DataCenter = () => {
  const solutions = [
    {
      icon: Filter,
      title: "Air Filtration Systems",
      description: "Advanced HEPA and ULPA filtration systems designed specifically for data center environments to remove particles and contaminants.",
      features: ["HEPA Grade", "Low Pressure Drop", "High Capacity", "Long Service Life"]
    },
    {
      icon: Shield,
      title: "Chemical Filtration",
      description: "Specialized chemical filtration to protect sensitive electronic equipment from corrosive gases and airborne molecular contamination.",
      features: ["Corrosion Protection", "Gas Removal", "AMC Control", "Equipment Protection"]
    },
    {
      icon: Snowflake,
      title: "Precision Cooling",
      description: "High-efficiency cooling solutions that work in conjunction with filtration systems to maintain optimal temperature and humidity.",
      features: ["Energy Efficient", "Precise Control", "Redundant Systems", "Smart Monitoring"]
    },
    {
      icon: Wind,
      title: "Environmental Control",
      description: "Comprehensive environmental management systems that integrate air filtration, chemical removal, and climate control.",
      features: ["Integrated Systems", "Real-time Monitoring", "Automated Controls", "Predictive Maintenance"]
    }
  ];

  const challenges = [
    {
      icon: Server,
      title: "Equipment Protection",
      description: "Protect sensitive servers and networking equipment from dust, particles, and chemical contaminants that can cause failures and reduce lifespan."
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Maintain optimal air quality while minimizing energy consumption and operational costs through efficient filtration and cooling systems."
    },
    {
      icon: Shield,
      title: "Uptime Assurance",
      description: "Ensure maximum uptime through reliable environmental control systems that prevent equipment failures due to contamination."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-16 lg:py-24 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="outline" className="mb-4 border-white text-white bg-white/10 backdrop-blur-sm">
              Data Center Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Air & Chemical Filtration for Data Centers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Specialized filtration systems designed to protect critical data center 
              infrastructure from airborne contaminants and ensure optimal performance.
            </p>
            <Button variant="cta" size="lg" className="bg-white text-corporate-blue hover:bg-gray-100">
              Get Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Data Center Filtration Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive air and chemical filtration systems specifically engineered 
              for the demanding requirements of modern data centers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index} className="h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mr-4">
                      <solution.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-corporate-blue text-lg">
                        {solution.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {solution.features.map((feature, idx) => (
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

      {/* Data Center Challenges */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-corporate-blue text-center">
              Data Center Environmental Challenges
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {challenges.map((challenge, index) => (
                <Card key={index} className="text-center shadow-[var(--shadow-card)]">
                  <CardHeader>
                    <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <challenge.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-corporate-blue">
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {challenge.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Technical Specifications */}
            <Card className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-corporate-blue text-center">Our Data Center Solution Approach</CardTitle>
                <CardDescription className="text-center">
                  Comprehensive filtration strategy tailored to data center requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-3">Air Filtration Focus</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Particulate removal (dust, fibers, skin cells)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>High-efficiency HEPA and ULPA filtration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Low pressure drop design for energy efficiency</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Extended filter life and reduced maintenance</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-3">Chemical Filtration Focus</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Removal of corrosive gases (H2S, SO2, NOx)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Airborne Molecular Contamination (AMC) control</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Protection of sensitive electronic components</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Real-time monitoring and control systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-corporate-blue">
              Benefits of Professional Data Center Filtration
            </h2>
            <p className="text-lg text-muted-foreground">
              Invest in proper filtration to protect your critical infrastructure and ensure optimal performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-corporate-blue">Equipment Protection</h3>
              <p className="text-muted-foreground">
                Extend equipment lifespan by protecting against corrosive contaminants and particulates.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-corporate-blue">Reduced Downtime</h3>
              <p className="text-muted-foreground">
                Minimize equipment failures and unplanned maintenance through proactive environmental control.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Snowflake className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-corporate-blue">Energy Efficiency</h3>
              <p className="text-muted-foreground">
                Optimize cooling efficiency and reduce energy costs with proper air quality management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
                Get Your Data Center Assessment
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our data center specialists will evaluate your facility and recommend 
                the optimal filtration strategy for your specific requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-corporate-blue">
                  Complete Data Center Services
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p><strong className="text-corporate-blue">Environmental Assessment:</strong> Comprehensive evaluation of your current air quality and contamination risks</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p><strong className="text-corporate-blue">Custom Design:</strong> Tailored filtration solutions based on your facility's specific needs</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p><strong className="text-corporate-blue">Installation Support:</strong> Professional installation and commissioning services</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p><strong className="text-corporate-blue">Ongoing Maintenance:</strong> Preventive maintenance programs to ensure optimal performance</p>
                  </div>
                </div>
              </div>
              
              <ContactForm 
                title="Request Data Center Assessment"
                description="Contact us for a comprehensive evaluation of your data center's filtration needs."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataCenter;