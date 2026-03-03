import ProductLineLayout from "@/components/ui/product-line-layout";
import { Wrench, Gauge, Flame, Pipette, Container, Cog } from "lucide-react";
import heroImage from "@/assets/oil-gas/industrial-pump.webp";
import storageImage from "@/assets/oil-gas/petroleum-storage-plant.jpg";
import gaugeImage from "@/assets/oil-gas/piping-pressure-gauge.webp";

const OilGasMechanical = () => {
    return (
        <ProductLineLayout
            seoTitle="Field Surface Facility Mechanical Equipment | Pumps, Compressors & Valves | ROS Global Solutions"
            seoDescription="Complete mechanical equipment for oil & gas surface facilities — pumps, compressors, valves, piping systems & process vessels. Custom-sourced to your specifications."
            seoKeywords="oil gas mechanical equipment, pumps oil gas, compressors oil gas, valves oil gas, process vessels, piping systems, custom mechanical equipment"
            seoPath="/oil-gas/field-surface-facility-mechanical"
            parentCategory={{ label: "Oil & Gas", href: "/oil-gas" }}
            heroTag="Oil & Gas — Mechanical"
            heroTitle="Field Surface Facility — Mechanical Equipment"
            heroSubtitle="From high-performance pumps and compressors to pressure vessels and piping systems — mechanical equipment sourced and specified for your exact operating conditions."
            heroImage={heroImage}
            ctaTitle="Get Your Mechanical Equipment Quote"
            ctaDescription="Our mechanical engineering team is ready to help you source the right pumps, compressors, valves, and process equipment — specified to your project requirements."
            ctaButtonText="Request Mechanical Quote"
            contactFormTitle="Request Mechanical Quote"
            contactFormDescription="Tell us about your project requirements and we'll provide a detailed quote."
            contactFormQueryType="oil-gas"
            overviewTitle="Engineered Mechanical Systems for Oil & Gas"
            overviewImage={storageImage}
            overviewParagraphs={[
                "The mechanical infrastructure of an oil & gas surface facility is the backbone of every production operation. From the pumps that move process fluids to the vessels that separate oil, gas, and water, every component must deliver reliable, continuous performance under demanding conditions.",
                "ROS Global Solutions supplies the full spectrum of mechanical equipment for upstream and midstream surface facilities. We work directly with you to understand your process requirements and source equipment from tier-1 manufacturers that is precisely specified for your application — meeting all applicable industry standards."
            ]}
            overviewListTitle="Our mechanical equipment supply range:"
            overviewList={[
                "Centrifugal and positive-displacement pumps",
                "Reciprocating, centrifugal, and screw compressors",
                "Gate, globe, ball, check, and plug valves",
                "Process piping and fittings",
                "Pressure vessels and separators",
                "Heat exchangers",
                "Storage tanks",
                "Mechanical seals and coupling systems"
            ]}
            featureHighlights={[
                {
                    icon: Pipette,
                    title: "Pumps",
                    description: "Centrifugal, reciprocating, controlled-volume, and rotary positive-displacement pumps — sourced to your pressure, flow, and material requirements."
                },
                {
                    icon: Gauge,
                    title: "Compressors",
                    description: "Centrifugal, reciprocating, and screw compressors with supporting systems — sized and specified for your process conditions."
                },
                {
                    icon: Cog,
                    title: "Valves",
                    description: "Gate, ball, check, plug, and wellhead valves in a wide range of pressure classes and materials — including fire-safe designs for critical applications."
                },
                {
                    icon: Container,
                    title: "Process Equipment",
                    description: "Separators, heat exchangers, and storage tanks designed and manufactured to applicable industry codes — sized for your production volumes."
                },
                {
                    icon: Wrench,
                    title: "Piping & Fittings",
                    description: "Carbon steel, alloy, and speciality material piping systems with flanges, fittings, and pipe supports — complete bill-of-material supply."
                },
                {
                    icon: Flame,
                    title: "Material Expertise",
                    description: "Corrosion-resistant alloys, duplex stainless steels, and exotic materials for sour, corrosive, and high-temperature services — specified to your operating conditions."
                }
            ]}
            detailedSections={[
                {
                    title: "Custom-Sourced for Your Requirements",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                No two oil & gas facilities have the same mechanical requirements. Operating pressures, flow rates, fluid compositions, ambient conditions, and regulatory frameworks vary enormously across projects and regions. That's why we don't offer standard catalogues — we supply equipment that is specified, sourced, and quality-assured for your exact needs.
                            </p>
                            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                                <img src={gaugeImage} alt="Industrial piping and pressure instrumentation" className="w-full h-auto object-contain" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-lg border border-border bg-card">
                                    <h4 className="font-semibold text-corporate-blue mb-3">Industry Standards Compliance</h4>
                                    <p className="text-sm text-muted-foreground">All rotating and static equipment we supply meets the applicable API, ASME, and regional standards — with full traceability and material certification documentation.</p>
                                </div>
                                <div className="p-6 rounded-lg border border-border bg-card">
                                    <h4 className="font-semibold text-corporate-blue mb-3">Tier-1 Manufacturer Sourcing</h4>
                                    <p className="text-sm text-muted-foreground">We source from globally recognised manufacturers to ensure proven reliability, availability of spare parts, and competitive pricing on every project.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            ]}
            applications={[
                { title: "Oil Production Facilities" },
                { title: "Gas Processing Plants" },
                { title: "Water Injection Systems" },
                { title: "Chemical Injection Skids" },
                { title: "Separation Systems" },
                { title: "Pipeline Stations" },
                { title: "Tank Farms" },
                { title: "Offshore Platforms & FPSOs" }
            ]}
            whyChoose={[
                { title: "Custom Supply", detail: "Equipment specified to your exact pressure, flow, material, and environmental requirements." },
                { title: "Standards Compliant", detail: "Every piece of equipment meets the applicable API, ASME, and regional standards." },
                { title: "Tier-1 Sourcing", detail: "We source from globally recognised manufacturers for proven reliability." },
                { title: "Material Expertise", detail: "Corrosion-resistant alloys and exotic materials for the most demanding services." },
                { title: "Competitive Pricing", detail: "Global supply chain optimisation delivers the best value on every project." },
                { title: "Technical Support", detail: "Equipment selection, datasheet review, and ongoing after-sales support." }
            ]}
        />
    );
};

export default OilGasMechanical;
