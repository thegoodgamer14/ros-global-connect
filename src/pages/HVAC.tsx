import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/contact-form";
import SocialMediaSidebar from "@/components/ui/social-media-sidebar";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Wind, Droplets, Filter, Thermometer, Zap, ArrowRight, DollarSign, ThermometerSun, TrendingUp, AlertTriangle, CloudRain, Waves, Factory, Building, UtensilsCrossed, Heart, Beaker } from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";
import flbSeriesImage from "@/assets/hvac/flb-series.webp";
import brySmartImage from "@/assets/hvac/brysmart.webp";
import dcAirPurifier from "@/assets/hvac/data-center-air-purifier.webp";

const HVAC = () => {
  const bryAirLogo = "https://www.bryair.com/wp-content/uploads/2023/02/logo-group-img2.webp";

  const bryAirProducts = [
    {
      icon: Droplets,
      title: "Desiccant Dehumidifiers",
      description: "Bry-Air's patented EcoDry and BrySmart® series with desiccant rotors for precision humidity control. Up to 48% more energy-efficient than standard systems.",
      features: ["EcoDry Technology", "BrySmart® IoT Ready", "48% Energy Savings", "Low Temp Operation"],
      applications: ["Data Centers", "Pharmaceuticals", "Cold Storage", "Swimming Pools"],
      href: "/hvac/desiccant-dehumidifiers"
    },
    {
      icon: Wind,
      title: "Gas-Phase Air Filtration",
      description: "Advanced DRISORB™ honeycomb chemical filters protecting sensitive electronics from corrosive gases like H₂S and SO₂. Meets ISA G1 corrosion standards.",
      features: ["DRISORB™ Filters", "VOC Removal", "ISA G1 Standard", "Data Center Grade"],
      applications: ["Server Rooms", "Control Rooms", "Hospitals", "Clean Rooms"],
      href: "/hvac/gas-phase-air-filtration"
    }
  ];

  const complementaryProducts = [
    {
      icon: Filter,
      title: "Celdec Cooling Pads",
      description: "High-performance evaporative cooling pads with 80-90% efficiency. Cross-fluted cellulose design delivers superior cooling with minimal energy.",
      features: ["80-90% Efficiency", "Cross-Fluted Design", "Low Energy", "Self-Cleaning"],
      href: "/hvac/celdec-cooling-pads"
    },
    {
      icon: Thermometer,
      title: "Industrial Gas Filters",
      description: "Activated carbon and chemically impregnated media for VOC, H₂S, ammonia, and odor removal across industrial applications.",
      features: ["Activated Carbon", "90-99% Removal", "Custom Media", "Multiple Configs"],
      href: "/hvac/industrial-gas-filters"
    }
  ];

  const climateChallenge = [
    { icon: CloudRain, title: "Extreme Humidity", description: "Humidity levels regularly exceed 90% RH in coastal areas" },
    { icon: AlertTriangle, title: "Corrosive Gases", description: "H₂S, SO₂, and saline air destroy sensitive electronics" },
    { icon: ThermometerSun, title: "Extreme Heat", description: "Ambient temperatures routinely exceed 50°C" },
    { icon: Waves, title: "Saline Air", description: "High salt content accelerates equipment corrosion" }
  ];

  const whyChoose = [
    { icon: DollarSign, title: "Best-in-Class Cost", description: "Streamlined supply chain delivers Bry-Air's premium technology at the most competitive prices in the Middle East." },
    { icon: ThermometerSun, title: "Tropicalized Design", description: "Systems engineered to withstand ambient temperatures exceeding 50°C—perfect for Gulf conditions." },
    { icon: TrendingUp, title: "Rapid ROI", description: "Reduced energy consumption and lower maintenance costs mean these units pay for themselves faster than alternatives." }
  ];

  const industries = [
    { icon: Factory, title: "Oil & Gas", description: "Corrosion control for offshore and onshore control rooms" },
    { icon: UtensilsCrossed, title: "Cold Storage & Food", description: "Preventing frost build-up and maintaining dry-room integrity" },
    { icon: Building, title: "Hospitality", description: "Humidity control for luxury hotels, spas, and indoor water parks" },
    { icon: Heart, title: "Healthcare", description: "Sterile air environments for hospitals and labs" }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Dehumidifiers & Air Purifiers | Bry-Air MENA Distributor | ROS Global"
        description="Exclusive MENA distributor of Bry-Air dehumidifiers and gas-phase filtration systems. Up to 48% energy savings. Tropicalized for Gulf conditions. Best prices in Middle East."
        keywords="Bry-Air distributor UAE, desiccant dehumidifier MENA, EcoDry, BrySmart, gas phase filtration Dubai, industrial dehumidifier Middle East, data center air purifier"
        path="/hvac"
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
              Exclusive Distributor: Bry-Air
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Mastering the Middle East Climate
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              We provide the UAE and wider Middle East market with Bry-Air's world-leading dehumidifiers
              and gas-phase filtration systems at the region's most competitive costs.
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

      {/* The Climate Challenge Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              The Middle East Climate Challenge
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In the MENA region, temperature is only half the battle. High humidity and airborne
              contaminants pose constant threats to industrial equipment, product shelf-life, and indoor air quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {climateChallenge.map((challenge, index) => (
              <Card key={index} className="text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <challenge.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-corporate-blue">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partnership Section */}
      <section id="partnership" className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-corporate-blue mb-2">Global Partnership</h2>
                <h3 className="text-xl text-muted-foreground">ROS Global <span className="text-corporate-blue font-bold">×</span> Bry-Air</h3>
              </div>
              <img
                src={bryAirLogo}
                alt="Bry-Air Logo"
                className="h-12 md:h-16 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "https://www.bryair.com/wp-content/themes/developer starter theme/assets/images/Bry-air-logo.png";
                }}
              />
            </div>

            <div className="bg-corporate-blue rounded-lg p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">World Leader in Dehumidification</h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Bry-Air is the world's foremost manufacturer of industrial desiccant dehumidifiers and
                    gas-phase filtration systems. Through our exclusive partnership, ROS Global ensures
                    industries across the MENA region have access to their cutting-edge technology at
                    unbeatable prices.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Beaker className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold">Patented Technology</h4>
                        <p className="text-sm text-white/70">EcoDry and BrySmart® series with Industry 4.0 optimization.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold">48% Energy Savings</h4>
                        <p className="text-sm text-white/70">More efficient than standard refrigerant-based systems.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Product images */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-lg aspect-square">
                    <div className="w-full flex-1 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                      <img src={flbSeriesImage} alt="FLB Series Dehumidifier" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-corporate-blue text-xs font-bold mt-2">FLB Series</span>
                  </div>
                  <div className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-lg aspect-square">
                    <div className="w-full flex-1 rounded-lg flex items-center justify-center mb-2 overflow-hidden">
                      <img src={brySmartImage} alt="BrySmart® IoT Dehumidifier" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-corporate-blue text-xs font-bold mt-2">BrySmart®</span>
                  </div>
                  <div className="col-span-2 bg-white rounded-xl p-4 flex items-center justify-center shadow-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-24 h-20 rounded-lg flex items-center justify-center overflow-hidden">
                        <img src={dcAirPurifier} alt="Data Center Air Purifier" className="w-full h-full object-contain" />
                      </div>
                      <div className="text-left">
                        <span className="block text-corporate-blue text-sm font-bold">Data Center Protection</span>
                        <span className="text-xs text-muted-foreground">Gas-Phase Filtration System</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bry-Air Featured Products — now linking to pages */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Bry-Air Solutions</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Our Core HVAC Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Premium Bry-Air technology engineered for the Gulf's extreme conditions—available
              at the most competitive prices in the Middle East.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {bryAirProducts.map((product, index) => (
              <Link key={index} to={product.href} className="block group">
                <Card className="h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300 group-hover:scale-[1.02] border-2 border-corporate-blue/20 group-hover:border-corporate-blue/40">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mr-4">
                          <product.icon className="h-6 w-6 text-white" />
                        </div>
                        <CardTitle className="text-corporate-blue text-xl">
                          {product.title}
                        </CardTitle>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-corporate-blue text-white">Bry-Air</Badge>
                        <ArrowRight className="h-5 w-5 text-corporate-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed text-foreground">
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
                    <span className="text-sm font-medium text-corporate-blue group-hover:underline inline-block mt-2">
                      View Details →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Complementary Products */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-corporate-blue mb-2">Complementary Solutions</h3>
              <p className="text-muted-foreground">Additional products for complete environmental control</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {complementaryProducts.map((product, index) => (
                <Link key={index} to={product.href} className="block group">
                  <Card className="h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300 group-hover:scale-[1.02]">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mr-4">
                          <product.icon className="h-5 w-5 text-corporate-blue" />
                        </div>
                        <CardTitle className="text-corporate-blue text-lg flex-1">
                          {product.title}
                        </CardTitle>
                        <ArrowRight className="h-5 w-5 text-corporate-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <CardDescription className="text-sm leading-relaxed">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {product.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <span className="text-sm font-medium text-corporate-blue group-hover:underline inline-block mt-2">
                        Learn More →
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Bry-Air through ROS Global */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-blue">Why Choose Bry-Air through ROS Global?</h2>
            <p className="text-muted-foreground mt-2">We don't just sell units; we sell engineered solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
            {whyChoose.map((item, index) => (
              <div key={index} className="p-6">
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

      {/* Industries We Serve */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-corporate-blue">Industries We Serve in MENA</h2>
            <p className="text-muted-foreground mt-2">Tailored environmental control for every sector</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-corporate-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="h-7 w-7 text-corporate-blue" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-corporate-blue">{industry.title}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
                Optimize Your Environment Today
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stop fighting the humidity and start controlling it. Contact us for a technical audit
                of your HVAC requirements and a quote on our Bry-Air inventory.
              </p>
            </div>

            <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-corporate-blue">
                  Bry-Air Solutions for Your Industry
                </h3>
                <p className="text-muted-foreground mb-8">
                  Our HVAC specialists will recommend the perfect climate control and air quality
                  solutions for your specific requirements—at the best prices in the region.
                </p>
                <div className="space-y-4 text-muted-foreground">
                  <img
                    src={bryAirLogo}
                    alt="Bry-Air"
                    className="h-10 opacity-80 mb-6"
                    onError={(e) => {
                      e.currentTarget.src = "https://www.bryair.com/wp-content/themes/developer starter theme/assets/images/Bry-air-logo.png";
                    }}
                  />
                  <p className="font-medium text-corporate-blue">Exclusive Distributor for MENA Region</p>
                  <p>ROS Global × Bry-Air</p>
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
    </div>
  );
};

export default HVAC;