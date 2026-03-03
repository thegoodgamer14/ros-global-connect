import ProductLineLayout from "@/components/ui/product-line-layout";
import { Wind, Shield, Activity, Server, Beaker, Filter } from "lucide-react";
import heroImage from "@/assets/hvac/gas-filtration-system.jpg";
import airPurifier from "@/assets/hvac/data-center-air-purifier.webp";

const HVACGasPhaseAirFiltration = () => {
    return (
        <ProductLineLayout
            seoTitle="Bry-Air Gas-Phase Air Filtration | Chemical Filters | ROS Global Solutions"
            seoDescription="Bry-Air gas-phase filtration for corrosive gas removal. Protect electronics & equipment from airborne molecular contaminants. Custom solutions. Exclusive MENA distributor."
            seoKeywords="gas phase air filtration, Bry-Air filtration, chemical filter, corrosive gas removal, data center air purifier, VOC removal, custom gas filtration"
            seoPath="/hvac/gas-phase-air-filtration"
            parentCategory={{ label: "HVAC", href: "/hvac" }}
            heroTag="HVAC — Bry-Air Partnership"
            heroTitle="Gas-Phase Air Filtration"
            heroSubtitle="Bry-Air's advanced gas-phase filter technology removes corrosive gases and airborne molecular contaminants — protecting sensitive electronics and ensuring clean air quality in critical environments."
            heroImage={heroImage}
            ctaTitle="Protect Your Equipment from Corrosive Air"
            ctaDescription="Our gas-phase filtration specialists will assess your facility's corrosive gas risk and recommend the optimal Bry-Air solution — including custom media blends for your specific contaminant profile."
            ctaButtonText="Request Filtration Assessment"
            contactFormTitle="Request Filtration Assessment"
            contactFormDescription="Tell us about your air quality challenges."
            contactFormQueryType="hvac"
            overviewTitle="Remove Corrosive Gases. Protect Your Investment."
            overviewImage={airPurifier}
            overviewParagraphs={[
                "In industrial zones, urban centres, and coastal regions, invisible airborne molecular contaminants silently corrode circuit boards, disk drives, connectors, and optical components. These gases — including hydrogen sulphide, sulphur dioxide, nitrogen oxides, and volatile organic compounds — can cause millions in equipment damage.",
                "Bry-Air's gas-phase air filtration systems use advanced activated carbon and chemically impregnated media to remove these contaminants with high efficiency. The result: clean air quality that protects electronics, preserves product integrity, and ensures worker safety.",
                "As the exclusive MENA distributor, ROS Global provides genuine Bry-Air gas-phase filtration products with full technical support, custom media formulations, and the region's most competitive prices."
            ]}
            overviewListTitle="Our gas-phase filtration capabilities:"
            overviewList={[
                "Honeycomb media modules",
                "Recirculating air purification units",
                "Fresh-air makeup treatment systems",
                "Combination particulate and chemical filters",
                "Corrosion monitoring and assessment services",
                "Custom media formulations for specific contaminant profiles"
            ]}
            featureHighlights={[
                {
                    icon: Wind,
                    title: "Advanced Filter Technology",
                    description: "Honeycomb-structured media maximises surface area while minimising pressure drop — delivering superior gas removal with low energy consumption."
                },
                {
                    icon: Shield,
                    title: "Corrosion Standards Compliance",
                    description: "Systems designed to achieve and maintain recognised corrosivity standards — meeting OEM warranty requirements for electronic equipment."
                },
                {
                    icon: Activity,
                    title: "Multi-Gas Removal",
                    description: "Removes a wide range of corrosive gases and volatile organic compounds using targeted chemical media formulations — tailored to your contaminant profile."
                },
                {
                    icon: Server,
                    title: "Data Centre Protection",
                    description: "Purpose-built solutions for server rooms and data centres — prevent electronic corrosion that causes equipment failures and data loss."
                },
                {
                    icon: Beaker,
                    title: "Custom Media Blends",
                    description: "Media formulations tailored to your specific contaminant profile — because no two facilities face the same air quality challenges."
                },
                {
                    icon: Filter,
                    title: "Multi-Stage Filtration",
                    description: "Combined particulate pre-filtration and gas-phase chemical filtration in a single, compact system for complete air purification."
                }
            ]}
            detailedSections={[
                {
                    title: "Tailored Solutions for Every Facility",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                The contaminant profile of every facility is unique — influenced by proximity to industrial sources, traffic, coastal conditions, and even internal sources like cleaning agents and building materials. We start with a thorough assessment of your air quality challenges and design a filtration solution that addresses your specific needs.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-corporate-blue font-bold text-lg">1</span>
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">Assess</h4>
                                    <p className="text-sm text-muted-foreground">We evaluate your facility's air quality through monitoring and analysis to identify the specific contaminants present.</p>
                                </div>
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-corporate-blue font-bold text-lg">2</span>
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">Design</h4>
                                    <p className="text-sm text-muted-foreground">We select the optimal media types and system configuration to target your specific contaminant profile effectively.</p>
                                </div>
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-corporate-blue font-bold text-lg">3</span>
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">Verify</h4>
                                    <p className="text-sm text-muted-foreground">Post-installation monitoring confirms the system achieves the required air quality standards for your equipment.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            ]}
            applications={[
                { title: "Server Rooms & Data Centres", description: "Corrosion protection for electronic equipment" },
                { title: "Control Rooms", description: "Oil & gas, petrochemical, and industrial control rooms" },
                { title: "Commercial Buildings", description: "Indoor air quality in urban and industrial areas" },
                { title: "Hospitals & Laboratories", description: "Clean-room and sterile-air environments" },
                { title: "Electronics Manufacturing", description: "Contamination control for sensitive assembly" },
                { title: "Museums & Archives", description: "Protect valuable documents and artwork from acid gases" }
            ]}
            whyChoose={[
                { title: "Exclusive MENA Distributor", detail: "Direct Bry-Air partnership — genuine products with factory warranty and full support." },
                { title: "Air Quality Expertise", detail: "End-to-end service from assessment to verified compliance with corrosivity standards." },
                { title: "Custom Media Selection", detail: "Application-specific media formulations for your unique contaminant profile." },
                { title: "Corrosion Monitoring", detail: "Ongoing monitoring services to verify air quality performance over time." },
                { title: "Best Regional Pricing", detail: "Direct supply chain delivers the most competitive prices in MENA." },
                { title: "Full Technical Support", detail: "Site assessment, system design, installation supervision, and after-sales service." }
            ]}
        />
    );
};

export default HVACGasPhaseAirFiltration;
