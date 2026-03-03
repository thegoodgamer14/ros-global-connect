import ProductLineLayout from "@/components/ui/product-line-layout";
import { Snowflake, Zap, Thermometer, Container, Droplets, Settings } from "lucide-react";
import heroImage from "@/assets/datacenter/data-center-cooling.webp";
import cracImage from "@/assets/datacenter/crac-vs-crah.webp";
import heatExchangerImage from "@/assets/datacenter/heat-exchanger.webp";

const DataCenterPrecisionCooling = () => {
    return (
        <ProductLineLayout
            seoTitle="Data Center Precision Cooling | ROS Global Solutions"
            seoDescription="Precision cooling solutions for data centres — room-level, in-row, and liquid cooling. Custom-designed for your heat load and efficiency targets."
            seoKeywords="data center precision cooling, data center cooling, server room cooling, in-row cooling, liquid cooling data center, custom cooling solution"
            seoPath="/datacenter/precision-cooling"
            parentCategory={{ label: "Data Center", href: "/datacenter" }}
            heroTag="Data Center — Precision Cooling"
            heroTitle="Precision Cooling"
            heroSubtitle="From room-level air conditioning to advanced liquid cooling — precision temperature control designed for your data centre's heat loads, efficiency targets, and growth plans."
            heroImage={heroImage}
            ctaTitle="Optimise Your Data Centre Cooling"
            ctaDescription="Whether you're building a new facility or upgrading an existing one, our cooling specialists will design a precision cooling strategy that maximises efficiency — custom-engineered for your requirements."
            ctaButtonText="Request Cooling System Quote"
            contactFormTitle="Request Cooling System Quote"
            contactFormDescription="Tell us about your data centre cooling requirements."
            contactFormQueryType="datacenter"
            overviewTitle="Precision Temperature Control for Peak Performance"
            overviewImage={cracImage}
            overviewParagraphs={[
                "Standard HVAC systems were not designed for the concentrated heat loads of modern data centres. High-density server racks generate enormous amounts of heat in compact footprints — requiring purpose-built cooling systems that deliver precise temperature control with maximum energy efficiency.",
                "We supply the full range of data centre cooling solutions — from traditional room-level systems to the latest liquid cooling technologies. Every system is specified to match your facility's heat loads, density targets, and energy efficiency goals. We also provide custom solutions for non-standard requirements."
            ]}
            overviewListTitle="Our cooling supply range:"
            overviewList={[
                "Computer Room Air Conditioners (CRAC)",
                "Computer Room Air Handlers (CRAH)",
                "In-row cooling units",
                "Rear door heat exchangers",
                "Hot and cold aisle containment systems",
                "Direct-to-chip liquid cooling",
                "Immersion cooling systems",
                "Free cooling and economiser systems"
            ]}
            featureHighlights={[
                {
                    icon: Snowflake,
                    title: "Room-Level Cooling",
                    description: "CRAC and CRAH systems for room-level temperature and humidity control — available in direct expansion and chilled water configurations to suit your facility."
                },
                {
                    icon: Container,
                    title: "Airflow Management",
                    description: "Hot and cold aisle containment systems that significantly improve cooling efficiency by preventing hot exhaust air from mixing with cool supply air."
                },
                {
                    icon: Droplets,
                    title: "Liquid Cooling",
                    description: "Direct-to-chip and immersion cooling solutions for high-density computing environments — far greater heat removal capacity than air-based cooling."
                },
                {
                    icon: Thermometer,
                    title: "Precise Temperature Control",
                    description: "Variable-capacity systems and intelligent controls respond quickly to IT load changes — maintaining tight temperature accuracy across your facility."
                },
                {
                    icon: Zap,
                    title: "Energy Optimisation",
                    description: "Variable-speed fans, economiser modes, and efficient system design to minimise your cooling energy consumption and improve PUE."
                },
                {
                    icon: Settings,
                    title: "Standards Compliant",
                    description: "Systems designed to maintain environmental conditions per recognised industry guidelines for data centre operations."
                }
            ]}
            detailedSections={[
                {
                    title: "The Right Cooling Strategy for Your Facility",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                There is no one-size-fits-all approach to data centre cooling. The right strategy depends on your rack densities, total heat load, facility layout, climate conditions, and energy efficiency goals. We work with your team to design a cooling solution that meets your current needs and accommodates future growth.
                            </p>
                            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                                <img src={heatExchangerImage} alt="Data centre heat exchanger system" className="w-full h-auto object-contain" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "In-Row Cooling", desc: "Units placed between server racks for targeted cooling close to the heat source — ideal for high-density environments." },
                                    { title: "Rear Door Heat Exchangers", desc: "Cabinet doors with cooling coils that remove heat directly at the rack exhaust — supplementing or replacing room-level cooling." },
                                    { title: "Overhead Cooling", desc: "Ceiling-mounted units for supplemental or primary cooling in facilities without raised floors." },
                                    { title: "Free Cooling", desc: "Economiser systems that use outside air conditions to reduce or eliminate compressor operation — significantly cutting energy costs." }
                                ].map((item, i) => (
                                    <div key={i} className="p-5 rounded-lg border border-border bg-card">
                                        <h5 className="font-semibold text-corporate-blue mb-2">{item.title}</h5>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }
            ]}
            applications={[
                { title: "Hyperscale Data Centres" },
                { title: "Enterprise Server Rooms" },
                { title: "Edge Computing Facilities" },
                { title: "Colocation Facilities" },
                { title: "High-Performance Computing (HPC)" },
                { title: "AI/ML Training Clusters" },
                { title: "Financial Trading Data Centres" },
                { title: "Government & Military IT" }
            ]}
            whyChoose={[
                { title: "Full Cooling Portfolio", detail: "Room-level, in-row, rear door, and liquid cooling — every approach covered." },
                { title: "Custom Design", detail: "Solutions engineered for your specific heat loads, densities, and efficiency targets." },
                { title: "Energy Optimisation", detail: "PUE-focused design approach to minimise operational costs." },
                { title: "Containment Expertise", detail: "Hot and cold aisle containment design and implementation." },
                { title: "Regional Climate Knowledge", detail: "Cooling solutions optimised for Gulf climate conditions." },
                { title: "Lifecycle Support", detail: "Installation, commissioning, maintenance, and future upgrades." }
            ]}
        />
    );
};

export default DataCenterPrecisionCooling;
