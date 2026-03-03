import ProductLineLayout from "@/components/ui/product-line-layout";
import { Zap, Shield, Settings, Radio, AlertTriangle, Lightbulb } from "lucide-react";
import heroImage from "@/assets/oil-gas/power-lines.webp";
import controlPanel from "@/assets/oil-gas/control-panel.webp";
import refinery from "@/assets/oil-gas/petroleum-refinery.webp";

const OilGasElectrical = () => {
    return (
        <ProductLineLayout
            seoTitle="Field Surface Facility Electrical Systems | ROS Global Solutions"
            seoDescription="Complete electrical systems for oil & gas field surface facilities — power distribution, control panels, safety systems & hazardous area equipment. Custom-engineered for your requirements."
            seoKeywords="oil gas electrical systems, field surface facility electrical, power distribution oil field, control panels hazardous area, hazardous area equipment, custom electrical systems oil gas"
            seoPath="/oil-gas/field-surface-facility-electrical"
            parentCategory={{ label: "Oil & Gas", href: "/oil-gas" }}
            heroTag="Oil & Gas — Electrical"
            heroTitle="Field Surface Facility — Electrical Systems"
            heroSubtitle="Comprehensive electrical systems engineered for hazardous environments — from power distribution and control panels to safety-critical systems. Custom-built to meet your exact project specifications."
            heroImage={heroImage}
            ctaTitle="Request Your Electrical Systems Quote"
            ctaDescription="Our oil & gas electrical specialists are ready to review your facility requirements and deliver a competitive quote for any electrical system — tailored to your project."
            ctaButtonText="Request Electrical Quote"
            contactFormTitle="Request Electrical Quote"
            contactFormDescription="Tell us about your electrical system requirements and we'll provide a detailed quote."
            contactFormQueryType="oil-gas"
            overviewTitle="Powering Safe & Reliable Oil & Gas Operations"
            overviewImage={controlPanel}
            overviewParagraphs={[
                "Oil and gas field surface facilities operate in some of the most demanding environments on earth. From extreme temperatures and corrosive atmospheres to stringent regulatory requirements for hazardous-area compliance, the electrical infrastructure underpinning these operations must be designed for absolute reliability.",
                "ROS Global Solutions provides a comprehensive range of electrical systems and components for upstream and midstream oil & gas surface facilities. Whether you are building a new wellsite, upgrading an existing production facility, or outfitting a compressor station, we supply certified, field-proven electrical equipment — custom-engineered and sourced to meet your exact project requirements."
            ]}
            overviewListTitle="Our electrical supply capabilities:"
            overviewList={[
                "Power generation and distribution systems",
                "Motor control centres and variable frequency drives",
                "Custom-built control panels with PLC/SCADA/HMI integration",
                "Emergency shutdown (ESD) and fire & gas systems",
                "Hazardous area classified equipment",
                "Lighting systems for classified and unclassified areas",
                "Cable management and heat tracing systems",
                "UPS and emergency power systems"
            ]}
            featureHighlights={[
                {
                    icon: Zap,
                    title: "Power Distribution",
                    description: "Complete MV and LV switchgear, transformers, bus ducts, and grounding systems — all rated for hazardous locations and supplied to your project's voltage and capacity requirements."
                },
                {
                    icon: Settings,
                    title: "Control & Automation",
                    description: "PLC-based control panels, wellhead control panels, and motor control centres designed and built to your specifications — including solar-powered options for remote sites."
                },
                {
                    icon: Shield,
                    title: "Hazardous Area Equipment",
                    description: "Full range of explosion-proof, intrinsically safe, and increased safety equipment — certified to applicable international and regional standards for your operating environment."
                },
                {
                    icon: AlertTriangle,
                    title: "Safety Systems",
                    description: "Safety-rated ESD systems, fire and gas detection, and fire suppression integration — engineered to meet the safety integrity requirements of your facility."
                },
                {
                    icon: Radio,
                    title: "Communication & Monitoring",
                    description: "Real-time monitoring and remote operation capability with touchscreen HMI, data logging, and integration with your facility's communication architecture."
                },
                {
                    icon: Lightbulb,
                    title: "Lighting & Cable Systems",
                    description: "Hazardous-area LED lighting, cable management systems, heat tracing, and complete grounding and lightning protection — specified for your environment."
                }
            ]}
            detailedSections={[
                {
                    title: "Custom-Engineered for Every Environment",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                Every oil & gas facility has unique requirements driven by location, climate, process conditions, and regulatory frameworks. We don't offer off-the-shelf packages — we work with you to understand your project's specific needs and supply equipment that is precisely specified for your application.
                            </p>
                            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                                <img src={refinery} alt="Petroleum refinery electrical infrastructure" className="w-full h-auto object-contain" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-lg border border-border bg-card">
                                    <h4 className="font-semibold text-corporate-blue mb-3">Standards Compliance</h4>
                                    <p className="text-sm text-muted-foreground">All equipment we supply is certified to the applicable international and regional standards for your operating environment — including NEC, IEC, ATEX, IECEx, and regional codes.</p>
                                </div>
                                <div className="p-6 rounded-lg border border-border bg-card">
                                    <h4 className="font-semibold text-corporate-blue mb-3">Global Sourcing</h4>
                                    <p className="text-sm text-muted-foreground">We source from tier-1 manufacturers worldwide, giving you access to the best-quality equipment at competitive prices — regardless of where your project is located.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            ]}
            applications={[
                { title: "Well Sites & Well Pads" },
                { title: "Production & Processing Facilities" },
                { title: "Separator Stations" },
                { title: "Pump & Booster Stations" },
                { title: "Compressor Stations" },
                { title: "Gas Gathering Systems" },
                { title: "Tank Farms & Storage" },
                { title: "Pipeline Infrastructure" }
            ]}
            whyChoose={[
                { title: "Custom Supply", detail: "Every project is different — we supply equipment specified to your exact requirements, not generic packages." },
                { title: "Multi-Standard Compliance", detail: "Equipment certified to NEC, IEC, ATEX, IECEx, and other regional standards for global deployments." },
                { title: "Harsh Environment Proven", detail: "Designed and selected for extreme temperatures, corrosive atmospheres, and remote locations." },
                { title: "Complete System Supply", detail: "One supplier for power distribution, control panels, safety systems, cable management, and more." },
                { title: "Global Supply Chain", detail: "Sourcing from tier-1 manufacturers worldwide with competitive pricing and fast delivery." },
                { title: "Technical Support", detail: "Specification review, equipment selection assistance, and post-sale technical support." }
            ]}
        />
    );
};

export default OilGasElectrical;
