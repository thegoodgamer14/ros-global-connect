import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/contact-form";
import SocialMediaSidebar from "@/components/ui/social-media-sidebar";
import GenericModal, { GenericModalData } from "@/components/ui/generic-modal";
import { Leaf, Users, Globe, Beaker, Factory, Recycle, Droplets, Shield, CheckCircle } from "lucide-react";

const Rhamnolipids = () => {
  const [selectedApplication, setSelectedApplication] = useState<GenericModalData | null>(null);

  // AGAE Assets
  const agaeLogo = "https://www.agaetech.com/cdn/shop/files/AGAE-logos_300x90.jpg?v=1647969471";
  const productImages = [
    "https://www.agaetech.com/cdn/shop/files/AGAER90_600x600.png?v=1710523604",
    "https://www.agaetech.com/cdn/shop/files/AGAER95Md_600x600.png?v=1710523804",
    "https://www.agaetech.com/cdn/shop/files/dR95D90-edited_600x600.png?v=1719269812"
  ];
  const contextImages = {
    science: "https://www.agaetech.com/cdn/shop/files/tubes_1440x.jpg?v=1614295070",
    agriculture: "https://www.agaetech.com/cdn/shop/files/horti_1440x.jpg?v=1614295130",
    nature: "https://www.agaetech.com/cdn/shop/files/North_West_Mountain_Picture_1440x.jpg?v=1754766557"
  };

  const applicationDetails: { [key: string]: GenericModalData } = {
    "Energy & Oil": {
      title: "Energy & Oil",
      overview: "Microbial Enhanced Oil Recovery (MEOR) & Tank Cleaning solutions optimized for high-salinity environments.",
      detailedDescription: "In the Energy & Oil sector, our Rhamnolipids offer a sustainable revolution. Specifically optimized for the high-salinity and high-heat environments characteristic of the Gulf region, these bio-surfactants excel in Microbial Enhanced Oil Recovery (MEOR) and tank cleaning applications where traditional chemicals fail.",
      workingPrinciple: "The unique chemical structure of Rhamnolipids allows them to reduce surface tension effectively even in extreme conditions. They mobilize residual oil trapped in porous rock formations and emulsify heavy crude for easier extraction and transport, all while being 100% biodegradable.",
      features: ["High Salinity Tolerance", "Thermal Stability", "Superior Emulsification", "Biodegradable", "Non-Corrosive"],
      specifications: ["Purity: 90-95%", "pH Stability: 2-12", "Temp Stability: >90°C", "Salinity Tolerance: >10%"],
      applications: ["MEOR", "Tank Cleaning", "Sludge Removal", "Drilling Mud Additives", "Flow Assurance"],
      benefits: ["Increases recovery rates", "Reduces environmental liability", "Lowers treatment costs", "Safe for personnel", "Regulatory compliance"],
      images: productImages,
      ctaText: "Request Quote"
    },
    "Personal Care": {
      title: "Personal Care",
      overview: "Premium ingredients for luxury skincare, sulfate-free shampoos, and mild cleansers.",
      detailedDescription: "Meeting the rising demand for 'Clean Beauty' in the booming Middle Eastern cosmetic market, our Pharmaceutical and Cosmetic grade Rhamnolipids provide a gentle yet effective alternative to harsh synthetic surfactants. They are perfect for formulating luxury skincare, sulfate-free shampoos, and hypoallergenic cleansers.",
      workingPrinciple: "Rhamnolipids act as natural foaming agents and emulsifiers that are ultra-mild on the skin. They possess inherent anti-microbial properties and moisturization benefits, allowing formulators to create high-performance products with simple, clean labels.",
      features: ["Sulfate-Free", "Ultra-Mild", "Natural Foaming", "Anti-Microbial", "Eco-Certified"],
      specifications: ["Purity: 99% (Pharmaceutical Grade)", "Grade: R99/dR99", "Appearance: White Powder", "Solubility: Water Soluble"],
      applications: ["Anti-Aging Creams", "Sulfat-Free Shampoos", "Facial Cleansers", "Natural Deodorants", "Baby Care"],
      benefits: ["Gentle on skin", "Rich foaming lather", "Clean label ingredient", "Natural preservation boost", "Sustainability claim"],
      images: [productImages[2], productImages[1]], // White powders for cosmetics
      ctaText: "Request Quote"
    },
    "Agriculture": {
      title: "Agriculture",
      overview: "Natural biopesticides and soil wetting agents crucial for water conservation in arid climates.",
      detailedDescription: "For the agricultural sector, specifically in arid climates, Rhamnolipids are game-changers. They serve as highly effective natural biopesticides (zoospores control) and superior soil wetting agents, helping to maximize water retention and nutrient uptake in challenging soil conditions.",
      workingPrinciple: "As biosurfactants, they significantly lower the surface tension of water, allowing for better spreading and penetration into hydrophobic soils. They also disrupt the cell membranes of certain pests and pathogens, providing natural crop protection without toxic residues.",
      features: ["Water Conservation", "Soil Penetration", "Natural Pesticide", "Nutrient Uptake", "Biodegradable"],
      specifications: ["Concentration: Custom Blends", "Activity: Surface Active", "Safety: Non-Phytotoxic", "Organic Certified"],
      applications: ["Soil Wetting Agents", "Biopesticide Formulation", "Foliar Sprays", "Hydroponics", "Nutrient Delivery"],
      benefits: ["Improves water efficiency", "Enhances crop yields", "Reduces chemical runoff", "Safe for pollinators", "Organic farming compliant"],
      images: [contextImages.agriculture, productImages[0]],
      ctaText: "Request Quote"
    },
    "Environmental": {
      title: "Environmental",
      overview: "Oil spill remediation and heavy metal removal solutions protecting coastlines and desert ecosystems.",
      detailedDescription: "We are committed to protecting our coastlines and desert ecosystems with non-toxic chemistry. Our Rhamnolipids are powerful agents for oil spill remediation and heavy metal removal, offering a solution that cleans up pollution without adding new toxins to the environment.",
      workingPrinciple: "Rhamnolipids increase the bioavailability of hydrophobic pollutants, accelerating their natural biodegradation by native bacteria. They also chelate heavy metals, allowing for their effective removal from soil and water.",
      features: ["Bioremediation", "Metal Chelation", "Non-Toxic", "Marine Safe", "Rapid Action"],
      specifications: ["Eco-Toxicity: None", "Biodegradability: 100%", "Form: Liquid/Powder", "Application: Spray/Injection"],
      applications: ["Oil Spill Response", "Soil Remediation", "Tank Bottom Recovery", "Wastewater Treatment", "Heavy Metal Removal"],
      benefits: ["Restores ecosystems", "Fast recovery time", "No secondary pollution", "Cost-effective", "Public safety"],
      images: [contextImages.nature, productImages[0]],
      ctaText: "Request Quote"
    }
  };

  const applications = [
    {
      icon: Factory,
      title: "Energy & Oil",
      description: "Microbial Enhanced Oil Recovery (MEOR) & Tank Cleaning. Optimized for the high-salinity and high-heat environments of the Gulf.",
      benefits: ["High Salinity Tolerance", "Thermal Stability", "Biodegradable"]
    },
    {
      icon: Droplets,
      title: "Personal Care",
      description: "Luxury skincare, sulfate-free shampoos, and mild cleansers. Meets the rising demand for 'Clean Beauty' in the Middle East.",
      benefits: ["Clean Beauty", "Sulfate-Free", "Gentle & Mild"]
    },
    {
      icon: Leaf,
      title: "Agriculture",
      description: "Natural biopesticides and soil wetting agents. Crucial for water conservation and sustainable farming in arid climates.",
      benefits: ["Water Conservation", "Biopesticide", "Soil Health"]
    },
    {
      icon: Recycle,
      title: "Environmental",
      description: "Oil spill remediation and heavy metal removal. Protecting our coastlines and desert ecosystems with non-toxic chemistry.",
      benefits: ["Non-Toxic", "Marine Safe", "Remediation"]
    }
  ];

  return (
    <div className="min-h-screen">
      <SocialMediaSidebar />
      {/* Hero Section */}
      <section
        className="py-16 lg:py-24 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contextImages.nature})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="outline" className="mb-4 border-white text-white bg-white/10 backdrop-blur-sm">
              Exclusive Distributor: AGAE Technologies
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Bio-surfactant Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              We provide the world's most versatile biosurfactants to industries that refuse to compromise on performance or the planet.
            </p>
            <Button
              variant="cta"
              size="lg"
              onClick={() => document.getElementById('partnership')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Explore Our Partnership
            </Button>
          </div>
        </div>
      </section>

      {/* The Science Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
              <img
                src={contextImages.science}
                alt="Rhamnolipid Science"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-corporate-blue">
                The Science of Rhamnolipids
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Rhamnolipids are not just "green" alternatives—they are <span className="font-semibold text-foreground">superior molecules</span>.
                Produced through specialized microbial fermentation, these glycolipids offer a unique chemical structure found nowhere else in nature.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Unlike synthetic, petroleum-derived surfactants, they outperform across a massive range of temperatures, salinities, and pH levels,
                making them the ultimate choice for demanding industrial applications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="font-medium text-white">High Salinity Tolerance</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="font-medium text-white">Extreme pH Stability</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="font-medium text-white">Thermal Resistance</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
                  <CheckCircle className="h-5 w-5 text-white" />
                  <span className="font-medium text-white">Superior Surface Activity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Global Advantages */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-corporate-blue">
              Key Global Advantages
            </h2>
            <p className="text-lg text-muted-foreground">
              Sustainable solutions delivering superior performance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-corporate-blue">Carbon Neutrality</h3>
                <p className="text-sm text-muted-foreground">A direct answer to global ESG mandates and carbon-reduction goals.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-corporate-blue">100% Biodegradable</h3>
                <p className="text-sm text-muted-foreground">Breaks down naturally in soil and marine environments completely.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-corporate-blue">Surface Activity</h3>
                <p className="text-sm text-muted-foreground">Achieves lower surface tension than many synthetic counterparts.</p>
              </CardContent>
            </Card>
            <Card className="text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-corporate-blue">Low Toxicity</h3>
                <p className="text-sm text-muted-foreground">Safe for distinct formulations ranging from cosmetics to agriculture.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Partnership Section */}
      <section id="partnership" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">Global Partnership</h2>
                <h3 className="text-xl text-muted-foreground">ROS Global <span className="text-corporate-blue font-bold">×</span> AGAE Technologies</h3>
              </div>
              <img src={agaeLogo} alt="AGAE Technologies Logo" className="h-16 object-contain transition-all duration-300" />
            </div>

            <div className="bg-corporate-blue rounded-lg p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">World’s Premier Manufacturer</h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Based in the USA, AGAE Technologies is the world’s premier manufacturer of high-purity Rhamnolipids.
                    Through our exclusive partnership, ROS Global ensures that industries across the MENA region
                    and beyond have access to American-engineered molecules backed by rigorous global certifications.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Beaker className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold">Purity Grades</h4>
                        <p className="text-sm text-white/70">From 85% to 99% purity for specialized lab and industrial use.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Factory className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold">Scalability</h4>
                        <p className="text-sm text-white/70">The capacity to support multi-ton industrial requirements.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Product Showcase */}
                <div className="grid grid-cols-2 gap-4">
                  {productImages.slice(0, 2).map((img, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-lg">
                      <img src={img} alt={`Rhamnolipid Product ${idx + 1}`} className="w-full h-auto max-h-32 object-contain" />
                      <span className="text-corporate-blue text-xs font-bold mt-2">Industrial Grade</span>
                    </div>
                  ))}
                  <div className="col-span-2 bg-white rounded-xl p-4 flex items-center justify-center shadow-lg">
                    <div className="flex items-center space-x-4">
                      <img src={productImages[2]} alt="Pure Rhamnolipid" className="h-24 object-contain" />
                      <div className="text-left">
                        <span className="block text-corporate-blue text-sm font-bold">R99 Pharma Grade</span>
                        <span className="text-xs text-muted-foreground">99% Purity (White Powder)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Solutions */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Strategic Solutions for Global Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering high-impact bio-solutions tailored for regional challenges.
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
                      <CardTitle className="text-corporate-blue text-xl">
                        {application.title}
                      </CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {application.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
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

      {/* Why Partner Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-blue">Why Partner with ROS Global?</h2>
            <p className="text-muted-foreground mt-2">While our reach is global, our focus is personal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">Regional Expertise</h3>
              <p className="text-muted-foreground">We understand the specific regulatory frameworks and business landscape of the Middle East and North Africa.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">Global Distribution Hub</h3>
              <p className="text-muted-foreground">Leveraging the UAE’s world-class logistics infrastructure to ship AGAE’s innovations efficiently worldwide.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Beaker className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">Technical Support</h3>
              <p className="text-muted-foreground">Our specialists provide formulation guidance to help you transition from synthetic to bio-based surfactants seamlessly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio-Revolution CTA */}
      {/* <section className="py-16 lg:py-24 bg-corporate-blue">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-6 border-white/30 text-white">Sustainability First</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the Bio-Revolution</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Whether you are a formulator in Europe, a producer in Asia, or an operator in the GCC,
            ROS Global provides the high-purity Rhamnolipids you need to lead your industry’s transition to green chemistry.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
              variant="secondary"
                size="lg"
              className="font-bold text-lg px-8"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'end' })}
              >
                Take the Next Step
              </Button>
              <Button
                variant="outline"
                size="lg"
              className="border-white text-white hover:bg-white/10 font-bold text-lg px-8 bg-transparent"
                onClick={() => document.getElementById('partnership')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Products
              </Button>
            </div>
          </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-corporate-blue">
                  Explore Rhamnolipids Potential
                </h3>
                <p className="text-muted-foreground mb-8">
                  Explore how Rhamnolipids can optimize your formulations and elevate your brand's sustainability profile.
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <img src="https://www.agaetech.com/cdn/shop/files/AGAE-logos_300x90.jpg?v=1647969471" alt="AGAE" className="h-12 opacity-80 mb-6 mix-blend-multiply" />
                  <p className="font-medium text-corporate-blue">Exclusive Distributor for MENA Region</p>
                  <p>ROS Global x AGAE Technologies</p>
                </div>
              </div>

              <ContactForm
                title="Connect with Our Specialists"
                description="Ready to transition to high-performance bio-surfactants? Send us your inquiry."
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