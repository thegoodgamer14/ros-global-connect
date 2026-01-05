import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/ui/contact-form";
import ProductModal from "@/components/ui/product-modal";
import SocialMediaSidebar from "@/components/ui/social-media-sidebar";
import SEO from "@/components/SEO";
import { Wind, Droplets, Filter, Thermometer, Zap, Wrench, CheckCircle, Factory, Building, UtensilsCrossed, Heart, Globe, Users, Beaker, DollarSign, ThermometerSun, TrendingUp, AlertTriangle, CloudRain, Waves } from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";

const HVAC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Bry-Air Assets
  const bryAirLogo = "https://www.bryair.com/wp-content/uploads/2023/02/logo-group-img2.webp";
  const productImages = {
    dehumidifier: [
      "https://i0.wp.com/www.bryair.com/wp-content/uploads/2023/10/FLB-1-1.png?fit=646%2C306&ssl=1",
      "https://i0.wp.com/www.bryair.com/wp-content/uploads/2023/10/BBS-1.png?fit=646%2C306&ssl=1",
      "https://i0.wp.com/www.bryair.com/wp-content/uploads/2024/01/P95x.webp?fit=646%2C306&ssl=1"
    ],
    airPurifier: [
      "https://i0.wp.com/www.bryair.com/wp-content/uploads/2023/10/data-center-air-purifier.png?fit=646%2C306&ssl=1",
      "https://i0.wp.com/www.bryair.com/wp-content/uploads/2024/01/BryShield-Standing.png?fit=1346%2C638&ssl=1",
      "https://i0.wp.com/www.bryair.com/wp-content/uploads/2023/10/Thin-bed.png?fit=646%2C306&ssl=1"
    ]
  };

  const productDetails = {
    dehumidifier: {
      title: "Bry-Air Desiccant Dehumidifiers",
      overview: "Patented EcoDry and BrySmart® series using desiccant rotors for precision humidity control even at low temperatures.",
      detailedDescription: "Traditional refrigerant ACs often struggle in the Gulf's extreme humidity. Bry-Air's patented EcoDry and BrySmart® series use desiccant rotors to pull moisture directly from the air, ensuring precision humidity control even at low temperatures. These Industry 4.0-ready systems optimize performance in real-time with up to 48% more energy efficiency than standard systems.",
      workingPrinciple: "Desiccant dehumidification works by passing humid air through a rotating wheel impregnated with silica gel or other desiccant materials. The desiccant adsorbs moisture from the air stream, and a separate heated reactivation sector regenerates the desiccant for continuous operation. This process is effective even at low temperatures where refrigerant-based systems fail.",
      features: [
        "EcoDry Technology",
        "BrySmart® Industry 4.0 Ready",
        "Desiccant Rotor Technology",
        "48% Energy Savings",
        "Low Temperature Operation",
        "Real-time Optimization",
        "Tropicalized for 50°C+",
        "Precision Humidity Control"
      ],
      specifications: [
        "Energy Savings: Up to 48%",
        "Ambient Temp: Up to 55°C",
        "Dew Point: As low as -60°C",
        "Control: Industry 4.0 IoT",
        "Rotor Type: Silica Gel/Molecular Sieve",
        "Air Flow: Custom CFM ranges",
        "Power: 380-415V/3Ph/50Hz",
        "Warranty: 2 years parts & labor"
      ],
      applications: ["Data Centers", "Pharmaceutical Cleanrooms", "Commercial Swimming Pools", "Food Processing", "Cold Storage", "Museums & Archives", "Lithium Battery Manufacturing", "Offshore Control Rooms"],
      benefits: [
        "Up to 48% more energy-efficient than standard systems",
        "Precision control even at extreme temperatures",
        "Industry 4.0 real-time monitoring and optimization",
        "Designed for Gulf's high humidity and heat",
        "Prevents corrosion and equipment damage",
        "Reduces maintenance and downtime costs",
        "Meets stringent cleanroom standards",
        "Rapid ROI through energy savings"
      ],
      images: productImages.dehumidifier
    },
    airPurifier: {
      title: "Bry-Air Gas-Phase Air Filtration",
      overview: "Advanced honeycomb chemical filters protecting sensitive electronics from corrosive gases like H₂S and SO₂.",
      detailedDescription: "In industrial zones and urban centers, dust and corrosive gases (like H₂S or SO₂) can destroy sensitive electronics. Bry-Air air purifiers utilize advanced honeycomb chemical filters to protect server rooms and data centers, remove odors and harmful VOCs, and ensure 'Clean Room' standards for medical and food-grade facilities.",
      workingPrinciple: "Gas-phase filtration uses activated carbon and chemically impregnated media arranged in a honeycomb structure for maximum surface area. Air passes through the media where gaseous contaminants are adsorbed or chemically neutralized. This multi-stage approach removes a wide spectrum of pollutants including H₂S, SO₂, NOx, ammonia, and VOCs.",
      features: [
        "Honeycomb Chemical Filters",
        "H₂S & SO₂ Removal",
        "VOC Elimination",
        "Data Center Protection",
        "Clean Room Standards",
        "Odor Control",
        "Multi-Stage Filtration",
        "ISA G1 Corrosion Standards"
      ],
      specifications: [
        "Efficiency: >95% for target gases",
        "Media: Activated Carbon/Impregnated",
        "Corrosion Standard: ISA G1",
        "Particle Filtration: HEPA available",
        "Pressure Drop: Optimized design",
        "Media Life: 12-24 months typical",
        "Monitoring: Real-time sensors",
        "Configuration: Modular/Custom"
      ],
      applications: ["Server Rooms", "Data Centers", "Control Rooms", "Commercial Buildings", "Hospitals & Labs", "Food Processing", "Electronics Manufacturing", "Petrochemical Facilities"],
      benefits: [
        "Protects sensitive electronics from corrosion",
        "Extends equipment lifespan significantly",
        "Removes harmful VOCs and odors",
        "Meets ISA G1 corrosion standards",
        "Ensures clean room air quality",
        "Reduces maintenance costs",
        "Modular design for flexibility",
        "Real-time air quality monitoring"
      ],
      images: productImages.airPurifier
    },
    celdecPad: {
      title: "Celdec Evaporative Cooling Pads",
      overview: "High-performance evaporative cooling pads that provide efficient temperature reduction and air purification.",
      detailedDescription: "Celdec pads are manufactured using advanced cellulose technology with specially treated fibers that maximize water retention and air contact. These pads provide superior cooling efficiency while filtering airborne particles, making them ideal for both cooling and air purification applications in the demanding MENA climate.",
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
      ],
      images: [
        "https://www.climatecontrolairtreatment.com/emea/wp-content/uploads/sites/climatecontrol/2025/08/CELdek-RR-greenhouse-608.jpg",
        "https://cdn-ilblcbn.nitrocdn.com/XMgYWWKIvpBdgcpsxvqWjXsXkdbyzuHe/assets/images/optimized/rev-6bcdd7b/chinaexhaustfan.com/wp-content/uploads/2024/10/%E6%B9%BF%E5%B8%98-1-1.png"
      ]
    },
    gasFilter: {
      title: "Industrial Gas Filters",
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
      ],
      images: [
        "https://energas.co.za/wp-content/uploads/2022/07/Gas-Filtration.jpg",
        "https://www.filsonfilters.com/wp-content/uploads/2020/07/Figure-5-Components-of-gas-filter.jpg"
      ]
    }
  };

  // Bry-Air Featured Products (highlighted)
  const bryAirProducts = [
    {
      icon: Droplets,
      title: "Desiccant Dehumidifiers",
      description: "Bry-Air's patented EcoDry and BrySmart® series with desiccant rotors for precision humidity control. Up to 48% more energy-efficient than standard systems.",
      features: ["EcoDry Technology", "BrySmart® IoT Ready", "48% Energy Savings", "Low Temp Operation"],
      applications: ["Data Centers", "Pharmaceuticals", "Cold Storage", "Swimming Pools"],
      productKey: "dehumidifier",
      isBryAir: true
    },
    {
      icon: Wind,
      title: "Gas-Phase Air Filtration",
      description: "Advanced honeycomb chemical filters protecting sensitive electronics from corrosive gases like H₂S and SO₂. Meets ISA G1 corrosion standards.",
      features: ["Honeycomb Filters", "VOC Removal", "ISA G1 Standard", "Data Center Grade"],
      applications: ["Server Rooms", "Control Rooms", "Hospitals", "Clean Rooms"],
      productKey: "airPurifier",
      isBryAir: true
    }
  ];

  // Complementary Products (not Bry-Air)
  const complementaryProducts = [
    {
      icon: Filter,
      title: "Celdec Cooling Pads",
      description: "High-performance evaporative cooling pads for efficient temperature reduction and air purification.",
      features: ["High Efficiency", "Durable Cellulose", "Easy Installation", "Cost Effective"],
      applications: ["Cooling Towers", "Air Handlers", "Greenhouses", "Industrial Cooling"],
      productKey: "celdecPad",
      isBryAir: false
    },
    {
      icon: Thermometer,
      title: "Industrial Gas Filters",
      description: "Specialized gas filtration systems for removing harmful gases and ensuring safe air quality.",
      features: ["Chemical Removal", "Odor Control", "Industrial Grade", "Custom Solutions"],
      applications: ["Chemical Plants", "Laboratories", "Wastewater", "Refineries"],
      productKey: "gasFilter",
      isBryAir: false
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

                {/* Product Showcase */}
                <div className="grid grid-cols-2 gap-4">
                  {productImages.dehumidifier.slice(0, 2).map((img, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 flex flex-col items-center justify-center shadow-lg">
                      <img src={img} alt={`Bry-Air Product ${idx + 1}`} className="w-full h-auto max-h-32 object-contain" />
                      <span className="text-corporate-blue text-xs font-bold mt-2">{idx === 0 ? 'FLB Series' : 'BrySmart®'}</span>
                    </div>
                  ))}
                  <div className="col-span-2 bg-white rounded-xl p-4 flex items-center justify-center shadow-lg">
                    <div className="flex items-center space-x-4">
                      <img src={productImages.airPurifier[0]} alt="Data Center Air Purifier" className="h-24 object-contain" />
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

      {/* Bry-Air Featured Products */}
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
              <Card
                key={index}
                className="h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300 cursor-pointer hover:scale-105 border-2 border-corporate-blue/20"
                onClick={() => setSelectedProduct(productDetails[product.productKey as keyof typeof productDetails])}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-corporate-blue rounded-lg flex items-center justify-center mr-4">
                        <product.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-corporate-blue text-xl">
                          {product.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Badge className="bg-corporate-blue text-white">Bry-Air</Badge>
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
                </CardContent>
              </Card>
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
                <Card
                  key={index}
                  className="h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-corporate)] transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                  onClick={() => setSelectedProduct(productDetails[product.productKey as keyof typeof productDetails])}
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center mr-4">
                        <product.icon className="h-5 w-5 text-corporate-blue" />
                      </div>
                      <CardTitle className="text-corporate-blue text-lg">
                        {product.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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