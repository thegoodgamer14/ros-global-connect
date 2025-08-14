import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SocialMediaSidebar from "@/components/ui/social-media-sidebar";
import CustomerLogos from "@/components/ui/customer-logos";
import { ArrowRight, Globe, Shield, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-corporate.webp";
import oilGasIcon from "@/assets/oil-gas-icon.jpg";
import hvacIcon from "@/assets/hvac-icon.jpg";
import datacenterIcon from "@/assets/datacenter-icon.jpg";
import rhamnolipidsIcon from "@/assets/rhamnolipids-icon.jpg";

const Index = () => {
  const productLines = [
    {
      title: "Oil & Gas",
      description: "Field surface facility equipment and drilling support solutions",
      icon: oilGasIcon,
      href: "/oil-gas",
      features: ["Electrical Systems", "Mechanical Equipment", "Instrumentation", "Drilling Support"]
    },
    {
      title: "HVAC",
      description: "Advanced air control and filtration systems for all environments",
      icon: hvacIcon,
      href: "/hvac",
      features: ["Dehumidifiers", "Air Filters", "Gas Filters", "Climate Control"]
    },
    {
      title: "Data Center",
      description: "Specialized air and chemical filtration systems for critical infrastructure",
      icon: datacenterIcon,
      href: "/datacenter",
      features: ["Air Filtration", "Chemical Filtration", "Cooling Systems", "Environmental Control"]
    },
    {
      title: "Rhamnolipids",
      description: "Bio-surfactant products through strategic partnerships",
      icon: rhamnolipidsIcon,
      href: "/rhamnolipids",
      features: ["Bio-surfactants", "Partnership Model", "Sourcing Support", "Custom Solutions"]
    }
  ];

  const valueProps = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide supply chain and distribution capabilities"
    },
    {
      icon: Shield,
      title: "Trusted Quality",
      description: "Industry-leading products with proven reliability"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Specialized consulting and advisory services"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Efficient logistics and rapid response times"
    }
  ];

  return (
    <div className="min-h-screen">
      <SocialMediaSidebar />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-corporate)] opacity-90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-20 container mx-auto px-4 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Global Solutions for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                Critical Industries
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              ROS Global Solutions delivers specialized consulting and product supply solutions 
              across oil & gas, HVAC, data centers, and biotechnology sectors worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="text-lg px-8 py-3 h-12 w-full sm:w-auto">
                  Request Materials
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button 
                variant="corporate-outline" 
                size="lg" 
                className="text-lg px-8 py-3 h-12 w-full sm:w-auto border-white text-white hover:bg-white hover:text-corporate-blue"
                onClick={() => document.getElementById('product-lines')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <CustomerLogos />

      {/* Company Introduction */}
      <section className="py-16 lg:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-corporate-blue border-corporate-blue">
              About ROS Global Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-corporate-blue">
              Your Trusted Partner in Industrial Engineering Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With decades of experience, ROS Global Solutions specializes in providing 
              mission-critical products and consulting services to the world's most demanding 
              industries. From oil & gas operations to cutting-edge data centers, we deliver 
              the reliability and expertise your business demands.
            </p>
          </div>
        </div>
      </section>

      {/* Product Lines */}
      <section id="product-lines" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Our Product Lines
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions across four specialized sectors, delivering 
              quality products and expert support worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {productLines.map((product, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-[var(--shadow-corporate)] transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-[var(--shadow-card)]"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={product.icon} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-corporate-blue group-hover:text-corporate-blue-light transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Link to={product.href}>
                    <Button variant="corporate" className="w-full group-hover:bg-corporate-blue-light">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 lg:py-24 bg-[var(--gradient-subtle)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Why Choose ROS Global Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine global capabilities with local expertise to deliver 
              exceptional value to our clients worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-corporate-blue rounded-full flex items-center justify-center group-hover:bg-corporate-blue-light transition-colors">
                  <prop.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-corporate-blue">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-corporate-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact our team today to discuss your requirements and discover 
            how ROS Global Solutions can support your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="cta" size="lg" className="text-lg px-8 py-3">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;