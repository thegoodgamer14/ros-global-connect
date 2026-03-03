import ProductLineLayout from "@/components/ui/product-line-layout";
import { Droplets, Zap, Settings, Thermometer, Wifi, Shield } from "lucide-react";
import heroImage from "@/assets/hvac/BryShield-Standing.webp";
import bryCoolImage from "@/assets/hvac/BryCool-dehumidifier.webp";
import brySmartImage from "@/assets/hvac/brysmart.webp";
import enviroImage from "@/assets/hvac/enviroliner-with-desiccant.webp";

const HVACDesiccantDehumidifiers = () => {
    return (
        <ProductLineLayout
            seoTitle="Bry-Air Desiccant Dehumidifiers | EcoDry & BrySmart® | ROS Global Solutions"
            seoDescription="Bry-Air EcoDry & BrySmart® desiccant dehumidifiers for industrial humidity control. Tropicalized for Gulf climate. Exclusive MENA distributor. Custom solutions available."
            seoKeywords="Bry-Air dehumidifier, desiccant dehumidifier UAE, EcoDry dehumidifier, BrySmart IoT, industrial dehumidifier MENA, humidity control Gulf, custom dehumidifier"
            seoPath="/hvac/desiccant-dehumidifiers"
            parentCategory={{ label: "HVAC", href: "/hvac" }}
            heroTag="HVAC — Bry-Air Partnership"
            heroTitle="Desiccant Dehumidifiers"
            heroSubtitle="Bry-Air's patented EcoDry and BrySmart® series deliver precision humidity control with significant energy savings — designed for the Gulf's extreme heat and humidity. We are the exclusive MENA distributor."
            heroImage={heroImage}
            ctaTitle="Master Your Humidity Challenges"
            ctaDescription="Our HVAC specialists will evaluate your humidity control requirements and recommend the optimal Bry-Air system — with custom-engineered solutions available for unique applications."
            ctaButtonText="Request Dehumidifier Quote"
            contactFormTitle="Request Dehumidifier Quote"
            contactFormDescription="Tell us about your humidity control requirements."
            contactFormQueryType="hvac"
            overviewTitle="Precision Humidity Control for Extreme Climates"
            overviewImage={bryCoolImage}
            overviewParagraphs={[
                "In the Gulf region, relative humidity regularly exceeds 90% along the coast, while inland temperatures soar past 50°C. Traditional refrigerant-based air conditioning struggles to control humidity at these extremes — often wasting energy overcooling air just to wring out moisture.",
                "Bry-Air desiccant dehumidifiers work differently. They use a rotating desiccant wheel to adsorb moisture directly from the air — independent of temperature. The result is precision humidity control even in the most challenging environments, with significant energy savings over conventional approaches.",
                "As the exclusive MENA distributor for Bry-Air, ROS Global Solutions delivers these world-leading systems at the region's most competitive prices, with full technical support, after-sales service, and custom-engineered solutions for unique applications."
            ]}
            overviewListTitle="Our Bry-Air dehumidifier range:"
            overviewList={[
                "EcoDry compact series — significant energy savings",
                "BrySmart® IoT-enabled units — Industry 4.0 integration",
                "Standard range series — proven value for most applications",
                "Custom high-volume engineered solutions",
                "Tropicalized designs rated for extreme ambient temperatures",
                "Ultra-low dew point configurations available"
            ]}
            featureHighlights={[
                {
                    icon: Zap,
                    title: "Energy-Efficient",
                    description: "EcoDry technology dramatically reduces energy consumption compared to standard desiccant and refrigerant-based systems — lowering your operating costs."
                },
                {
                    icon: Wifi,
                    title: "Industry 4.0 Ready (BrySmart®)",
                    description: "IoT-enabled units with real-time monitoring, predictive maintenance, and remote optimisation via cloud platform — for smarter facility management."
                },
                {
                    icon: Thermometer,
                    title: "Tropicalized for Gulf Climate",
                    description: "Designed and tested for the highest ambient temperatures and humidity levels — purpose-built for MENA conditions."
                },
                {
                    icon: Droplets,
                    title: "Precision Dew Point Control",
                    description: "Achieves reliable dew point control far beyond the capability of refrigerant-based systems — ideal for sensitive processes."
                },
                {
                    icon: Settings,
                    title: "Desiccant Rotor Technology",
                    description: "Advanced rotor designs provide continuous moisture removal independent of temperature — with multiple media options for different applications."
                },
                {
                    icon: Shield,
                    title: "Exclusive MENA Distribution",
                    description: "Direct factory relationship ensures genuine products, competitive pricing, full warranty coverage, and access to custom-engineered solutions."
                }
            ]}
            detailedSections={[
                {
                    title: "How Desiccant Dehumidification Works",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                Unlike refrigerant-based systems that cool air to condense moisture (which fails at low temperatures), desiccant dehumidifiers use a rotating wheel impregnated with moisture-adsorbing material. This process works independently of temperature, making it ideal for the Gulf's challenging climate.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-corporate-blue font-bold text-lg">1</span>
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">Process Air</h4>
                                    <p className="text-sm text-muted-foreground">Humid air passes through the desiccant rotor where moisture is adsorbed from the air stream.</p>
                                </div>
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-corporate-blue font-bold text-lg">2</span>
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">Reactivation</h4>
                                    <p className="text-sm text-muted-foreground">Heated air regenerates the desiccant media, driving moisture out in a separate exhaust air stream.</p>
                                </div>
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-corporate-blue font-bold text-lg">3</span>
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">Dry Air Out</h4>
                                    <p className="text-sm text-muted-foreground">Dry, processed air is delivered to your space at the target humidity level — continuously.</p>
                                </div>
                            </div>
                            <div className="rounded-xl overflow-hidden shadow-lg mt-6">
                                <img src={brySmartImage} alt="BrySmart IoT-enabled desiccant dehumidifier" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    )
                },
                {
                    title: "Custom Solutions for Unique Requirements",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                Standard dehumidifiers don't suit every application. Whether you need ultra-low dew points, unusually high airflow volumes, integration with existing HVAC infrastructure, or operation in extreme environments — we can provide custom-engineered Bry-Air systems designed to your exact specifications.
                            </p>
                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <img src={enviroImage} alt="Enviroliner desiccant system" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    )
                }
            ]}
            applications={[
                { title: "Data Centres", description: "Precise humidity control to prevent static discharge and condensation" },
                { title: "Pharmaceutical Cleanrooms", description: "GMP-compliant humidity control for manufacturing" },
                { title: "Cold Storage Facilities", description: "Prevent frost and ice buildup in freezer environments" },
                { title: "Lithium Battery Manufacturing", description: "Ultra-low moisture for battery cell production" },
                { title: "Commercial Swimming Pools", description: "Control condensation and structural damage" },
                { title: "Museums & Archives", description: "Preserve sensitive documents and artifacts" },
                { title: "Offshore Control Rooms", description: "Protect electronics from marine humidity" },
                { title: "Food Processing", description: "Prevent moisture-related quality issues" }
            ]}
            whyChoose={[
                { title: "Exclusive MENA Distributor", detail: "Direct Bry-Air partnership — genuine products with full factory warranty and support." },
                { title: "Best Regional Pricing", detail: "Streamlined supply chain delivers the most competitive prices in the Middle East." },
                { title: "Custom Engineering", detail: "Bespoke solutions for unique applications — not limited to standard product range." },
                { title: "Tropicalized Designs", detail: "Systems engineered for the highest ambient temperatures — proven in Gulf conditions." },
                { title: "Full Technical Support", detail: "Application engineering, installation supervision, and commissioning assistance." },
                { title: "After-Sales Service", detail: "Spare parts, preventive maintenance, and emergency support across the region." }
            ]}
        />
    );
};

export default HVACDesiccantDehumidifiers;
