import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/contact-form";
import SocialMediaSidebar from "@/components/ui/social-media-sidebar";
import GenericModal, { GenericModalData } from "@/components/ui/generic-modal";
import { Leaf, Users, Globe, Beaker, Factory, Recycle } from "lucide-react";
import heroImage from "@/assets/hero-rhamnolipids.jpg";

const Rhamnolipids = () => {
  const [selectedApplication, setSelectedApplication] = useState<GenericModalData | null>(null);

  const applicationDetails: { [key: string]: GenericModalData } = {
    "Industrial Applications": {
      title: "Industrial Applications",
      overview: "Enhanced oil recovery, cleaning agents, and industrial processing applications where bio-based surfactants provide superior performance.",
      detailedDescription: "Rhamnolipids offer exceptional performance in industrial applications due to their unique molecular structure and surface-active properties. These biosurfactants demonstrate superior emulsification, wetting, and foaming characteristics compared to synthetic alternatives, making them ideal for various industrial processes.",
      workingPrinciple: "Rhamnolipids work by reducing surface tension at interfaces, enabling better mixing of oil and water phases. Their amphiphilic structure allows them to position at interfaces and form micelles, improving solubilization of hydrophobic compounds and enhancing cleaning efficiency in industrial processes.",
      features: ["Superior Emulsification", "Enhanced Oil Recovery", "Industrial Cleaning", "Process Enhancement", "Temperature Stability", "pH Tolerance"],
      specifications: ["Surface Tension: <30 mN/m", "CMC: 50-200 mg/L", "Temperature Stability: Up to 100°C", "pH Range: 4-12", "Biodegradation: >90% in 28 days"],
      applications: ["Enhanced Oil Recovery", "Metal Cleaning", "Textile Processing", "Leather Treatment", "Paint Manufacturing"],
      benefits: ["Biodegradable formulation", "Low toxicity profile", "High performance efficiency", "Cost-effective solution", "Regulatory compliance", "Sustainable alternative"],
      ctaText: "Request Industrial Application Quote"
    },
    "Environmental Solutions": {
      title: "Environmental Solutions", 
      overview: "Bioremediation and environmental cleanup applications leveraging the natural properties of rhamnolipids for soil and water treatment.",
      detailedDescription: "Rhamnolipids excel in environmental applications due to their natural origin and biodegradability. They enhance the bioavailability of hydrophobic contaminants, making them more accessible to degrading microorganisms in bioremediation processes while being completely safe for the environment.",
      workingPrinciple: "In environmental applications, rhamnolipids enhance the solubilization and mobilization of hydrophobic contaminants from soil and groundwater. They increase the surface area available for microbial degradation and facilitate the transport of contaminants to treatment zones.",
      features: ["Bioremediation Enhancement", "Soil Washing", "Groundwater Treatment", "Oil Spill Cleanup", "Heavy Metal Extraction", "Eco-Friendly"],
      specifications: ["Biodegradability: >95% in 21 days", "Toxicity: LC50 >1000 mg/L", "Solubility: High in water", "Stability: Stable at environmental pH", "Biocompatibility: Excellent"],
      applications: ["Soil Remediation", "Groundwater Cleanup", "Oil Spill Response", "Industrial Site Cleanup", "Sediment Treatment"],
      benefits: ["100% biodegradable", "Non-toxic to environment", "Enhances natural processes", "Reduces cleanup time", "Cost-effective remediation", "Regulatory approved"],
      ctaText: "Get Environmental Solutions Quote"
    },
    "Biotechnology": {
      title: "Biotechnology",
      overview: "Research and development applications in biotechnology, pharmaceuticals, and specialty chemical manufacturing.",
      detailedDescription: "In biotechnology applications, rhamnolipids serve as key components in pharmaceutical formulations, drug delivery systems, and biotechnological processes. Their biocompatibility and unique properties make them valuable for various high-tech applications requiring natural, safe surfactants.",
      workingPrinciple: "Rhamnolipids function in biotechnology through their ability to interact with biological membranes, enhance drug solubility, and facilitate cellular uptake. Their natural origin and biocompatibility make them ideal for applications where synthetic surfactants would be unsuitable.",
      features: ["Pharmaceutical Grade", "Drug Delivery", "Cell Culture Media", "Protein Purification", "Vaccine Adjuvant", "Biocompatible"],
      specifications: ["Purity: >95%", "Endotoxin: <0.1 EU/mg", "Heavy Metals: <10 ppm", "Sterility: USP <71>", "pH: 6.0-8.0"],
      applications: ["Drug Formulation", "Gene Therapy", "Vaccine Development", "Cell Culture", "Protein Production"],
      benefits: ["Pharmaceutical grade quality", "Excellent biocompatibility", "Enhanced drug delivery", "Research grade purity", "Regulatory compliant", "Technical support included"],
      ctaText: "Request Biotech Grade Quote"
    },
    "Sustainable Manufacturing": {
      title: "Sustainable Manufacturing",
      overview: "Green manufacturing processes that require environmentally friendly surfactants and bio-based chemical solutions.",
      detailedDescription: "Rhamnolipids support sustainable manufacturing initiatives by replacing petroleum-based surfactants with renewable, biodegradable alternatives. They maintain high performance while reducing environmental impact and supporting circular economy principles in manufacturing processes.",
      workingPrinciple: "In sustainable manufacturing, rhamnolipids provide the same functionality as synthetic surfactants while offering superior environmental credentials. They can be produced from renewable feedstocks and completely biodegrade, supporting cradle-to-cradle manufacturing approaches.",
      features: ["Renewable Source", "Carbon Neutral", "Zero VOCs", "Circular Economy", "Green Chemistry", "Life Cycle Benefits"],
      specifications: ["Renewable Content: 100%", "Carbon Footprint: Neutral", "Biodegradation: Complete", "VOC Content: 0%", "Sustainability: Certified"],
      applications: ["Green Cleaning Products", "Sustainable Cosmetics", "Eco-Friendly Paints", "Bio-based Plastics", "Renewable Chemicals"],
      benefits: ["100% renewable origin", "Carbon neutral production", "Supports sustainability goals", "Reduces environmental impact", "Consumer preferred", "Future-ready technology"],
      ctaText: "Get Sustainable Solutions Quote"
    }
  };

  const applications = [
    {
      icon: Factory,
      title: "Industrial Applications",
      description: "Enhanced oil recovery, cleaning agents, and industrial processing applications where bio-based surfactants provide superior performance.",
      benefits: ["Biodegradable", "Low Toxicity", "High Performance", "Cost Effective"]
    },
    {
      icon: Leaf,
      title: "Environmental Solutions",
      description: "Bioremediation and environmental cleanup applications leveraging the natural properties of rhamnolipids for soil and water treatment.",
      benefits: ["Eco-Friendly", "Natural Origin", "Soil Compatible", "Water Treatment"]
    },
    {
      icon: Beaker,
      title: "Biotechnology",
      description: "Research and development applications in biotechnology, pharmaceuticals, and specialty chemical manufacturing.",
      benefits: ["Research Grade", "Custom Specifications", "Quality Assured", "Technical Support"]
    },
    {
      icon: Recycle,
      title: "Sustainable Manufacturing",
      description: "Green manufacturing processes that require environmentally friendly surfactants and bio-based chemical solutions.",
      benefits: ["Renewable", "Sustainable", "Green Chemistry", "Carbon Neutral"]
    }
  ];

  const partnershipBenefits = [
    {
      icon: Users,
      title: "Strategic Partnerships",
      description: "We work with leading biotechnology companies to bring rhamnolipid products to market through strategic partnerships."
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Leverage our worldwide distribution network to access rhamnolipid products and related biotechnology solutions."
    },
    {
      icon: Beaker,
      title: "Technical Expertise",
      description: "Access to technical expertise and application support for implementing rhamnolipid-based solutions in your processes."
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
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="outline" className="mb-4 border-white text-white bg-white/10 backdrop-blur-sm">
              Rhamnolipids Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Bio-Based Surfactant Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Access high-quality rhamnolipid products through our strategic partnerships, 
              offering sustainable and environmentally friendly surfactant solutions.
            </p>
            <Button 
              variant="cta" 
              size="lg" 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            >
              Request Information
            </Button>
          </div>
        </div>
      </section>

      {/* What are Rhamnolipids */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
                What are Rhamnolipids?
              </h2>
              <p className="text-lg text-muted-foreground">
                Understanding the revolutionary bio-based surfactant technology
              </p>
            </div>

            <Card className="shadow-[var(--shadow-card)] mb-8">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-corporate-blue">
                      Revolutionary Bio-Surfactants
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Rhamnolipids are glycolipid biosurfactants produced by certain bacteria, 
                      particularly Pseudomonas aeruginosa. These naturally occurring compounds 
                      offer superior performance compared to traditional chemical surfactants.
                    </p>
                    <p className="text-muted-foreground">
                      With excellent surface-active properties, biodegradability, and low toxicity, 
                      rhamnolipids represent the future of sustainable surfactant technology.
                    </p>
                  </div>
                  <div className="bg-corporate-blue-light/10 p-6 rounded-lg">
                    <h4 className="font-semibold text-corporate-blue mb-4">Key Advantages:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Leaf className="h-4 w-4 text-corporate-blue mr-2" />
                        <span className="text-muted-foreground">100% Biodegradable</span>
                      </li>
                      <li className="flex items-center">
                        <Beaker className="h-4 w-4 text-corporate-blue mr-2" />
                        <span className="text-muted-foreground">Low Toxicity</span>
                      </li>
                      <li className="flex items-center">
                        <Factory className="h-4 w-4 text-corporate-blue mr-2" />
                        <span className="text-muted-foreground">High Performance</span>
                      </li>
                      <li className="flex items-center">
                        <Recycle className="h-4 w-4 text-corporate-blue mr-2" />
                        <span className="text-muted-foreground">Renewable Source</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Rhamnolipid Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Versatile bio-surfactants with applications across multiple industries, 
              from environmental remediation to advanced manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {applications.map((application, index) => (
              <Card 
                key={index} 
                className="h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => setSelectedApplication(applicationDetails[application.title])}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mr-4">
                      <application.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-corporate-blue text-lg">
                        {application.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {application.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {application.benefits.map((benefit, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-corporate-blue">
                Our Partnership Approach
              </h2>
              <p className="text-lg text-muted-foreground">
                Connecting you with leading rhamnolipid producers through strategic partnerships
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {partnershipBenefits.map((benefit, index) => (
                <Card key={index} className="text-center shadow-[var(--shadow-card)]">
                  <CardHeader>
                    <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-corporate-blue">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="text-corporate-blue text-center">How We Support Your Rhamnolipid Needs</CardTitle>
                <CardDescription className="text-center">
                  Comprehensive support from sourcing to implementation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-3">Sourcing & Supply</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Access to vetted rhamnolipid producers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Quality assurance and product verification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Competitive pricing through partnerships</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Reliable supply chain management</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-blue mb-3">Technical Support</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Application development support</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Custom specification development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Process optimization consulting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Regulatory guidance and documentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-corporate-blue">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Rhamnolipids find applications across diverse industries seeking sustainable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-[var(--shadow-card)]">
              <h3 className="font-semibold text-corporate-blue mb-2">Oil & Gas</h3>
              <p className="text-sm text-muted-foreground">Enhanced oil recovery and drilling fluids</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-[var(--shadow-card)]">
              <h3 className="font-semibold text-corporate-blue mb-2">Environmental</h3>
              <p className="text-sm text-muted-foreground">Bioremediation and cleanup applications</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-[var(--shadow-card)]">
              <h3 className="font-semibold text-corporate-blue mb-2">Pharmaceuticals</h3>
              <p className="text-sm text-muted-foreground">Drug delivery and formulation</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-[var(--shadow-card)]">
              <h3 className="font-semibold text-corporate-blue mb-2">Agriculture</h3>
              <p className="text-sm text-muted-foreground">Pesticide formulations and soil treatment</p>
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
                Get Started with Rhamnolipids
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Contact our biotechnology specialists to explore how rhamnolipids 
                can provide sustainable solutions for your specific applications.
              </p>
            </div>
            
            <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-corporate-blue">
                  Why Choose Bio-Based Surfactants?
                </h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p><strong className="text-corporate-blue">Environmental Benefits:</strong> Biodegradable and non-toxic, reducing environmental impact</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p><strong className="text-corporate-blue">Superior Performance:</strong> Often outperform synthetic surfactants in challenging conditions</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p><strong className="text-corporate-blue">Regulatory Advantage:</strong> Meet increasingly strict environmental regulations</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-corporate-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p><strong className="text-corporate-blue">Future-Ready:</strong> Position your business for sustainable growth</p>
                  </div>
                </div>
              </div>
              
              <ContactForm 
                title="Request Rhamnolipids Information"
                description="Let us know about your surfactant requirements and we'll connect you with the right solutions."
                defaultQueryType="rhamnolipids"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedApplication && (
        <GenericModal
          isOpen={!!selectedApplication}
          onClose={() => setSelectedApplication(null)}
          data={selectedApplication}
        />
      )}
    </div>
  );
};

export default Rhamnolipids;