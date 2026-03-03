import ProductLineLayout from "@/components/ui/product-line-layout";
import { Shield, Activity, Beaker, Server, Filter, Radio } from "lucide-react";
import heroImage from "@/assets/datacenter/chemical-filter-with-tubes.webp";
import chemFilterImage from "@/assets/datacenter/absolute-opakfil.webp";

const DataCenterChemicalFiltration = () => {
    return (
        <ProductLineLayout
            seoTitle="Data Center Chemical Filtration | Corrosive Gas Removal | ROS Global Solutions"
            seoDescription="Protect data centre electronics from corrosive gases with chemical filtration. Activated carbon systems remove airborne molecular contaminants. Custom solutions available."
            seoKeywords="data center chemical filtration, corrosive gas removal, airborne molecular contamination, server corrosion prevention, custom chemical filtration"
            seoPath="/datacenter/chemical-filtration"
            parentCategory={{ label: "Data Center", href: "/datacenter" }}
            heroTag="Data Center — Chemical Filtration"
            heroTitle="Chemical Filtration"
            heroSubtitle="Invisible airborne molecular contaminants silently corrode circuit boards, disk drives, and connectors. Our chemical filtration systems remove corrosive gases to protect your critical infrastructure."
            heroImage={heroImage}
            ctaTitle="Protect Your Electronics from Corrosive Gases"
            ctaDescription="Our chemical filtration engineers will assess your data centre's corrosion risk, design a filtration solution, and verify compliance — including custom media blends for your environment."
            ctaButtonText="Request Chemical Filtration Assessment"
            contactFormTitle="Request Chemical Filtration Assessment"
            contactFormDescription="Tell us about your data centre's air quality concerns."
            contactFormQueryType="datacenter"
            overviewTitle="Shield Your Data Centre from Corrosive Gases"
            overviewImage={chemFilterImage}
            overviewParagraphs={[
                "Airborne molecular contamination refers to gas-phase chemicals that cause corrosion of contacts on circuit boards, degrade optical fibre connectors, attack solder joints, and create data errors and intermittent failures. These invisible contaminants can cause millions in equipment damage and unplanned downtime.",
                "Common sources include proximity to industrial zones, refineries, wastewater treatment plants, high-traffic urban locations, and coastal environments. Even internal sources like cleaning agents and outgassing from building materials contribute. We design chemical filtration systems that address your facility's specific contaminant sources."
            ]}
            overviewListTitle="Chemical filtration supply range:"
            overviewList={[
                "Recirculating air purification units",
                "Fresh-air treatment systems for makeup air",
                "Hybrid recirculating and fresh-air systems",
                "Corrosion monitoring and assessment services",
                "Real-time reactivity monitoring equipment",
                "Custom media blends for specific contaminant profiles"
            ]}
            featureHighlights={[
                {
                    icon: Shield,
                    title: "Corrosion Standards Compliance",
                    description: "Systems designed to achieve and maintain recognised corrosivity standards — protecting your electronics and supporting equipment warranty compliance."
                },
                {
                    icon: Activity,
                    title: "Real-Time Monitoring",
                    description: "Continuous electronic corrosion rate measurement alongside traditional monitoring methods — giving you visibility into your air quality at all times."
                },
                {
                    icon: Beaker,
                    title: "Custom Media Blends",
                    description: "Activated carbon and impregnated media tailored to your facility's specific contaminant profile — because every location has unique challenges."
                },
                {
                    icon: Server,
                    title: "Multiple Configurations",
                    description: "Recirculating units for sealed rooms, fresh-air treatment for economiser-mode facilities, or hybrid systems — designed for your infrastructure."
                },
                {
                    icon: Filter,
                    title: "High Removal Efficiency",
                    description: "High-capacity media beds remove a wide range of corrosive gases and volatile compounds to protect sensitive electronic equipment."
                },
                {
                    icon: Radio,
                    title: "Industry Standards Compliant",
                    description: "Systems designed per recognised environmental guidelines for data centre operations — ensuring your facility meets industry best practices."
                }
            ]}
            detailedSections={[
                {
                    title: "From Assessment to Verified Protection",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                Effective chemical filtration starts with understanding your facility's specific corrosion risk. We provide a comprehensive approach — from initial air quality assessment through to system design, installation, and ongoing verification that your equipment is being protected.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-corporate-blue font-bold text-lg">1</span>
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">Corrosion Assessment</h4>
                                    <p className="text-sm text-muted-foreground">We evaluate your facility's corrosion risk using monitoring coupons and analysis to identify the specific contaminants and their sources.</p>
                                </div>
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-corporate-blue font-bold text-lg">2</span>
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">Custom System Design</h4>
                                    <p className="text-sm text-muted-foreground">We select the optimal media types, system configuration, and airflow design to target your specific contaminant profile effectively.</p>
                                </div>
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-corporate-blue font-bold text-lg">3</span>
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">Ongoing Verification</h4>
                                    <p className="text-sm text-muted-foreground">Post-installation monitoring confirms the system achieves protection targets — with regular reporting and media replacement scheduling.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            ]}
            applications={[
                { title: "Enterprise Data Centres" },
                { title: "Hyperscale Facilities" },
                { title: "Colocation & Managed Hosting" },
                { title: "Telecom Switching Centres" },
                { title: "Financial Trading Platforms" },
                { title: "Government & Military Data Facilities" },
                { title: "Edge Computing in Industrial Areas" },
                { title: "Oil & Gas Control Rooms" }
            ]}
            whyChoose={[
                { title: "Air Quality Expertise", detail: "End-to-end service from corrosion assessment to verified protection." },
                { title: "Corrosion Monitoring", detail: "Coupon analysis and real-time reactivity monitoring for ongoing verification." },
                { title: "Custom Media Selection", detail: "Application-specific carbon and impregnated media for your contaminant profile." },
                { title: "Integration Support", detail: "Retrofit into existing HVAC systems or deploy as standalone purification units." },
                { title: "Media Replacement Program", detail: "Scheduled changeout with spent media disposal and performance verification." },
                { title: "Regional Knowledge", detail: "Understanding of Gulf-specific contaminant sources and environmental challenges." }
            ]}
        />
    );
};

export default DataCenterChemicalFiltration;
