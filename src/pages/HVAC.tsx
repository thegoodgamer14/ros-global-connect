import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/contact-form";
import { Wind, Droplets, Filter, Thermometer, Zap, Wrench } from "lucide-react";

const HVAC = () => {
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
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-[var(--gradient-corporate)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="outline" className="mb-4 border-white text-white">
              HVAC Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Air Control & Filtration Systems
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Comprehensive HVAC solutions including dehumidifiers, humidifiers, and advanced 
              filtration systems for optimal environmental control.
            </p>
            <Button variant="cta" size="lg" className="bg-white text-corporate-blue hover:bg-gray-100">
              Request Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Our HVAC Product Line
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional-grade HVAC equipment and filtration systems designed 
              for demanding commercial and industrial environments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <Card key={index} className="h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mr-4">
                      <product.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-corporate-blue text-lg">
                        {product.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {product.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-2">Applications:</h4>
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
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HVAC;