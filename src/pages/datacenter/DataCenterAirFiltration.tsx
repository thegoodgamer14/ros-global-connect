import ProductLineLayout from "@/components/ui/product-line-layout";
import { Filter, Shield, Zap, Server, Settings, Activity } from "lucide-react";
import heroImage from "@/assets/datacenter/air-filter.webp";
import dcAirFilter from "@/assets/datacenter/dc-air-filter.webp";
import hepaImage from "@/assets/datacenter/hepa-vs-ulpa.webp";

const DataCenterAirFiltration = () => {
    return (
        <ProductLineLayout
            seoTitle="Data Center Air Filtration Systems | ROS Global Solutions"
            seoDescription="Advanced air filtration for data centres — multi-stage particulate filtration to protect servers, extend hardware life, and maintain uptime. Custom solutions available."
            seoKeywords="data center air filtration, data center filter, server room filtration, particulate filtration data center, custom air filtration"
            seoPath="/datacenter/air-filtration-systems"
            parentCategory={{ label: "Data Center", href: "/datacenter" }}
            heroTag="Data Center — Air Filtration"
            heroTitle="Air Filtration Systems"
            heroSubtitle="Multi-stage air filtration systems designed to remove airborne contaminants and protect your critical data centre infrastructure — extending hardware life and maintaining maximum uptime."
            heroImage={heroImage}
            ctaTitle="Protect Your Data Centre with Clean Air"
            ctaDescription="Our filtration specialists will assess your facility's air quality, recommend the optimal multi-stage filtration strategy, and deliver a competitive quote — including custom solutions."
            ctaButtonText="Request Air Filtration Assessment"
            contactFormTitle="Request Air Filtration Assessment"
            contactFormDescription="Tell us about your data centre's filtration needs."
            contactFormQueryType="datacenter"
            overviewTitle="Clean Air. Protected Equipment. Maximum Uptime."
            overviewImage={dcAirFilter}
            overviewParagraphs={[
                "Data centre equipment is extremely sensitive to airborne contamination. Even microscopic particles can cause short circuits from conductive dust bridging PCB traces, overheating from dust accumulation blocking airflow paths, and disk drive failures from particle ingress.",
                "Proper air filtration is one of the most cost-effective investments you can make to protect your data centre — extending equipment life, reducing unplanned downtime, and lowering overall maintenance costs. We supply complete multi-stage filtration systems tailored to your facility's specific requirements."
            ]}
            overviewListTitle="Our data centre filtration supply range:"
            overviewList={[
                "Pre-filter panels for initial particle capture",
                "Secondary bag and pocket filters",
                "Rigid box filters for high-efficiency applications",
                "High-efficiency particulate filters",
                "Ultra-high-efficiency filters for critical environments",
                "Fan filter units (FFUs)",
                "Filter monitoring and differential pressure systems",
                "Custom filter housings and configurations"
            ]}
            featureHighlights={[
                {
                    icon: Filter,
                    title: "Multi-Stage Filtration",
                    description: "Pre-filters, secondary filters, and high-efficiency final filters in a staged approach that maximises performance and extends filter life."
                },
                {
                    icon: Shield,
                    title: "Standards Compliant",
                    description: "Systems designed to achieve and maintain recognised cleanroom and data centre environmental standards for your facility classification."
                },
                {
                    icon: Zap,
                    title: "Energy-Optimised Design",
                    description: "Low pressure drop filter designs that minimise fan energy consumption while maintaining high capture efficiency."
                },
                {
                    icon: Server,
                    title: "Data Centre Specific",
                    description: "Filtration systems designed specifically for data centre environments — accounting for heat loads, airflow patterns, and contamination sources."
                },
                {
                    icon: Activity,
                    title: "Monitoring & Alerts",
                    description: "Differential pressure sensors for real-time filter status, loading alerts, and predictive maintenance — so you always know when to replace."
                },
                {
                    icon: Settings,
                    title: "Complete Lifecycle Management",
                    description: "Filter selection, installation, monitoring, replacement scheduling, and disposal — we manage the entire filtration lifecycle."
                }
            ]}
            detailedSections={[
                {
                    title: "Tailored to Your Facility",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                Every data centre has unique air quality challenges. Location, local industry, construction activity, and even internal contamination sources all influence the right filtration strategy. We start by understanding your facility's specific environment and design a multi-stage filtration system that delivers the right level of protection.
                            </p>
                            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                                <img src={hepaImage} alt="High-efficiency air filtration comparison" className="w-full h-auto object-contain" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-corporate-blue font-bold text-lg">1</span>
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">Pre-Filtration</h4>
                                    <p className="text-sm text-muted-foreground">First line of defence — captures large particles like dust, fibres, and pollen. Low cost, frequently replaced to protect downstream filters.</p>
                                </div>
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-corporate-blue font-bold text-lg">2</span>
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">Secondary Filtration</h4>
                                    <p className="text-sm text-muted-foreground">Higher-efficiency filters that capture finer particles — mould spores, fine dust, and smaller contaminants that pass through pre-filters.</p>
                                </div>
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-corporate-blue font-bold text-lg">3</span>
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">High-Efficiency Final</h4>
                                    <p className="text-sm text-muted-foreground">The highest level of particulate capture for critical environments — removing virtually all airborne particles from the supply air.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            ]}
            applications={[
                { title: "Hyperscale Data Centres" },
                { title: "Enterprise Data Centres" },
                { title: "Colocation Facilities" },
                { title: "Telecom Central Offices" },
                { title: "Network Operations Centres" },
                { title: "Edge Computing Facilities" },
                { title: "Financial Data Centres" },
                { title: "Government IT Facilities" }
            ]}
            whyChoose={[
                { title: "Full Filtration Portfolio", detail: "Pre-filters through to ultra-high-efficiency — complete multi-stage solutions." },
                { title: "Standards Compliant", detail: "Systems designed to meet recognised data centre environmental standards." },
                { title: "Energy-Optimised", detail: "Low pressure drop designs that minimise fan energy consumption." },
                { title: "Custom Solutions", detail: "Non-standard filter sizes, housings, and configurations for any requirement." },
                { title: "Lifecycle Management", detail: "Replacement scheduling, pressure monitoring, and disposal services." },
                { title: "Site Assessment", detail: "Air quality audits to determine current contamination levels and design the right solution." }
            ]}
        />
    );
};

export default DataCenterAirFiltration;
