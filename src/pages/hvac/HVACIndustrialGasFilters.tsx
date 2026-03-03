import ProductLineLayout from "@/components/ui/product-line-layout";
import { Filter, Shield, Beaker, Factory, Settings, Wrench } from "lucide-react";
import heroImage from "@/assets/hvac/high-temp-gas-filter.webp";
import flbImage from "@/assets/hvac/flb-series.webp";
import ffbImage from "@/assets/hvac/FFB2000.webp";

const HVACIndustrialGasFilters = () => {
    return (
        <ProductLineLayout
            seoTitle="Industrial Gas Filters | Activated Carbon & Chemical Media | ROS Global Solutions"
            seoDescription="Specialised industrial gas filtration with activated carbon and chemical media for VOC removal, odour control, and environmental compliance. Custom-engineered solutions."
            seoKeywords="industrial gas filters, activated carbon filter, VOC removal filter, odour control filter, chemical gas filtration, custom gas filtration"
            seoPath="/hvac/industrial-gas-filters"
            parentCategory={{ label: "HVAC", href: "/hvac" }}
            heroTag="HVAC — Industrial Filtration"
            heroTitle="Industrial Gas Filters"
            heroSubtitle="Advanced activated carbon and chemically impregnated media filtration to remove volatile compounds, toxic gases, and odours — custom-engineered for your specific contaminant profile."
            heroImage={heroImage}
            ctaTitle="Take Control of Your Air Quality"
            ctaDescription="Whether you need toxic gas removal, emission control, or odour elimination, our gas filtration specialists will design the right system for your application."
            ctaButtonText="Request Gas Filtration Quote"
            contactFormTitle="Request Gas Filtration Quote"
            contactFormDescription="Tell us about your gas filtration requirements."
            contactFormQueryType="hvac"
            overviewTitle="Remove Harmful Gases. Protect Your People & Equipment."
            overviewImage={flbImage}
            overviewParagraphs={[
                "Industrial facilities generate a wide range of gaseous contaminants — from volatile organic compounds and hydrogen sulphide to ammonia, chlorine, and other harmful compounds. Left untreated, these gases threaten worker health and safety, corrode equipment, cause environmental violations, and generate community complaints from odours.",
                "ROS Global Solutions supplies specialised gas filtration systems that effectively remove these contaminants from air streams. We use activated carbon and chemically impregnated media tailored to target your specific gas species — from small panel filters to large industrial installations, every system is engineered for your requirements."
            ]}
            overviewListTitle="Our gas filter capabilities:"
            overviewList={[
                "Activated carbon panel and cartridge filters",
                "Deep-bed carbon adsorption systems",
                "Chemically impregnated media filters",
                "Honeycomb carbon modules",
                "Multi-stage gas filtration systems",
                "Custom-engineered solutions for specific contaminant profiles"
            ]}
            featureHighlights={[
                {
                    icon: Beaker,
                    title: "Multiple Removal Technologies",
                    description: "Physical adsorption, chemisorption, and catalytic oxidation mechanisms — we select the right approach for your specific gas species."
                },
                {
                    icon: Filter,
                    title: "Flexible Configurations",
                    description: "Panel filters, cartridge systems, deep-bed vessels, V-bank configurations, and scrubber integration — sized for your airflow and space constraints."
                },
                {
                    icon: Shield,
                    title: "Environmental Compliance",
                    description: "Systems sized and documented to meet local and international emission standards — helping you achieve and maintain regulatory compliance."
                },
                {
                    icon: Factory,
                    title: "Industrial-Grade Construction",
                    description: "Housings and vessels designed for continuous industrial operation with easy media changeout access and minimal maintenance downtime."
                },
                {
                    icon: Settings,
                    title: "Custom Media Formulation",
                    description: "Impregnated carbon blends tailored to your exact gas species — because every facility has a unique contaminant profile."
                },
                {
                    icon: Wrench,
                    title: "Media Replacement Programs",
                    description: "Scheduled media changeout with spent carbon disposal and recycling services — complete lifecycle management."
                }
            ]}
            detailedSections={[
                {
                    title: "Engineered for Your Contaminant Profile",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                Every industrial gas filtration challenge is different. The type of contaminant, its concentration, your airflow volume, operating temperature, and regulatory requirements all influence the design. We provide complete application engineering — from initial air quality assessment through to system design, installation, and ongoing media management.
                            </p>
                            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                                <img src={ffbImage} alt="Industrial gas filtration equipment" className="w-full h-auto object-contain" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-lg border border-border bg-card">
                                    <h4 className="font-semibold text-corporate-blue mb-3">Custom Media Selection</h4>
                                    <p className="text-sm text-muted-foreground">We specify the right carbon type and chemical impregnation for your specific contaminant profile — ensuring maximum removal efficiency and media life.</p>
                                </div>
                                <div className="p-6 rounded-lg border border-border bg-card">
                                    <h4 className="font-semibold text-corporate-blue mb-3">Complete Lifecycle Support</h4>
                                    <p className="text-sm text-muted-foreground">From initial air quality assessment through system design, installation, media replacement scheduling, and spent media disposal — we manage the entire process.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            ]}
            applications={[
                { title: "Oil & Gas", description: "Toxic gas removal from process and vent streams" },
                { title: "Petrochemical", description: "VOC emission control from storage and processing" },
                { title: "Wastewater Treatment", description: "Odour control at treatment facilities" },
                { title: "Industrial Manufacturing", description: "Indoor air quality improvement in factories" },
                { title: "Environmental Remediation", description: "Soil vapour and off-gas treatment" },
                { title: "Printing & Packaging", description: "Solvent vapour capture and exhaust treatment" }
            ]}
            whyChoose={[
                { title: "Application Engineering", detail: "We specify the right system design for your specific contaminant profile and operating conditions." },
                { title: "Custom Media Formulation", detail: "Impregnated carbon blends tailored to your exact gas species for maximum performance." },
                { title: "Complete Systems", detail: "From small panel filters to large industrial deep-bed installations — any scale." },
                { title: "Competitive Pricing", detail: "Direct-from-manufacturer sourcing for activated carbon and filter systems." },
                { title: "Media Replacement Programs", detail: "Scheduled media changeout with spent carbon disposal and recycling." },
                { title: "Compliance Support", detail: "System sizing and documentation to meet emission and air quality standards." }
            ]}
        />
    );
};

export default HVACIndustrialGasFilters;
