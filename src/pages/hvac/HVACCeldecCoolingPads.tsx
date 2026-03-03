import ProductLineLayout from "@/components/ui/product-line-layout";
import { Thermometer, Droplets, Leaf, Settings, Zap, Factory } from "lucide-react";
import heroImage from "@/assets/hvac/CELdek-greenhouse.webp";
import coolerPadsImage from "@/assets/hvac/evaporative-cooler-pads.webp";

const HVACCeldecCoolingPads = () => {
    return (
        <ProductLineLayout
            seoTitle="Celdec Evaporative Cooling Pads | High-Efficiency Cellulose Media | ROS Global Solutions"
            seoDescription="High-performance Celdec evaporative cooling pads for industrial, agricultural & commercial HVAC. Eco-friendly, energy-efficient cooling. Custom sizing available."
            seoKeywords="Celdec cooling pads, evaporative cooling pads, cellulose cooling pad, air cooler pad, greenhouse cooling, industrial evaporative cooling, custom cooling pads"
            seoPath="/hvac/celdec-cooling-pads"
            parentCategory={{ label: "HVAC", href: "/hvac" }}
            heroTag="HVAC — Evaporative Cooling"
            heroTitle="Celdec Evaporative Cooling Pads"
            heroSubtitle="High-efficiency cellulose media delivering superior evaporative cooling with minimal energy consumption — for industrial, commercial, and agricultural applications."
            heroImage={heroImage}
            ctaTitle="Cool Your Facility. Cut Your Energy Bill."
            ctaDescription="Our HVAC specialists can help you select the right Celdec cooling pad configuration for your application — with custom sizing available for non-standard installations."
            ctaButtonText="Request Cooling Pad Quote"
            contactFormTitle="Request Cooling Pad Quote"
            contactFormDescription="Tell us about your cooling requirements."
            contactFormQueryType="hvac"
            overviewTitle="Efficient, Eco-Friendly Cooling — Powered by Evaporation"
            overviewImage={coolerPadsImage}
            overviewParagraphs={[
                "Evaporative cooling is one of the most energy-efficient and environmentally friendly methods of reducing air temperature. Celdec pads use the natural process of water evaporation to cool incoming air — consuming only a fraction of the energy required by mechanical refrigeration systems.",
                "When hot air passes through a water-saturated Celdec pad, the water absorbs heat from the air as it evaporates. The result is a significant temperature drop delivered with minimal energy input. The pads also act as a natural filter, trapping dust and airborne particles. We supply the full range of standard sizes and can source custom dimensions for non-standard installations."
            ]}
            overviewListTitle="Key advantages over mechanical cooling:"
            overviewList={[
                "Dramatically lower energy consumption than mechanical cooling",
                "Zero refrigerants required — uses only water and fan power",
                "Simultaneous cooling and air filtration",
                "Simple installation and low maintenance",
                "Long service life with proper care",
                "Environmentally responsible cooling"
            ]}
            featureHighlights={[
                {
                    icon: Thermometer,
                    title: "High Cooling Efficiency",
                    description: "Cross-fluted cellulose design achieves high saturation efficiency, delivering meaningful temperature drops for your space."
                },
                {
                    icon: Zap,
                    title: "Minimal Energy Consumption",
                    description: "Uses dramatically less energy than mechanical cooling — only water and fan power are required to operate."
                },
                {
                    icon: Settings,
                    title: "Cross-Fluted Design",
                    description: "Patented flute geometry creates self-cleaning action while preventing water carry-over — extending pad life and maintaining dry conditions downstream."
                },
                {
                    icon: Leaf,
                    title: "Eco-Friendly Cooling",
                    description: "Zero refrigerants, zero chemical treatment — just water and natural evaporation. A sustainable cooling choice for environmentally conscious operations."
                },
                {
                    icon: Droplets,
                    title: "Superior Water Absorption",
                    description: "Specially treated cellulose fibres maximise water retention and evaporative contact area for optimal cooling performance."
                },
                {
                    icon: Factory,
                    title: "Multiple Thickness Options",
                    description: "Available in various thicknesses to match your airflow, cooling requirements, and installation constraints — including custom sizing."
                }
            ]}
            detailedSections={[
                {
                    title: "Designed for Your Application",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                The right cooling pad selection depends on your air volume, ambient conditions, desired temperature drop, and installation space. We provide application engineering support to help you select the optimal pad thickness, configuration, and water distribution design for maximum performance.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-lg border border-border bg-card">
                                    <h4 className="font-semibold text-corporate-blue mb-3">Authentic Product</h4>
                                    <p className="text-sm text-muted-foreground">We supply genuine Celdec (CELdek) media — not imitation products. Authentic pads deliver superior cooling performance, longer service life, and better resistance to deterioration.</p>
                                </div>
                                <div className="p-6 rounded-lg border border-border bg-card">
                                    <h4 className="font-semibold text-corporate-blue mb-3">Custom Sizing Available</h4>
                                    <p className="text-sm text-muted-foreground">Standard sizes for common applications, plus custom-cut dimensions for non-standard installations and retrofit projects — ensuring a perfect fit every time.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            ]}
            applications={[
                { title: "Gas Turbine Air Intake", description: "Pre-cooling combustion air to improve turbine efficiency" },
                { title: "Industrial Warehouses", description: "Cost-effective cooling for large open spaces" },
                { title: "Greenhouses", description: "Precise temperature control for crop growth" },
                { title: "Poultry Houses", description: "Maintaining optimal temperatures for bird health" },
                { title: "Manufacturing Plants", description: "Comfortable working conditions at low energy cost" },
                { title: "Air Washer Units", description: "Integration into industrial air handling systems" }
            ]}
            whyChoose={[
                { title: "Authentic Product", detail: "Genuine Celdec (CELdek) media — not imitation products." },
                { title: "Full Size Range", detail: "All standard thicknesses and dimensions — plus custom sizing available." },
                { title: "Technical Support", detail: "Application engineering for system design and pad selection." },
                { title: "Competitive Pricing", detail: "Direct supply chain for best value on every order." },
                { title: "Regional Expertise", detail: "Understanding of Gulf climate conditions and optimal pad selection." },
                { title: "Fast Delivery", detail: "Regional warehousing for rapid availability." }
            ]}
        />
    );
};

export default HVACCeldecCoolingPads;
