import ProductLineLayout from "@/components/ui/product-line-layout";
import { Gauge, Radio, Shield, Activity, Wifi, Thermometer } from "lucide-react";
import heroImage from "@/assets/oil-gas/industrial-instruments.webp";
import gaugeImage from "@/assets/oil-gas/piping-pressure-gauge.webp";

const OilGasInstrumentation = () => {
    return (
        <ProductLineLayout
            seoTitle="Field Surface Facility Instrumentation | Flow, Pressure & Level | ROS Global Solutions"
            seoDescription="Precision instrumentation for oil & gas field surface facilities — smart transmitters, flow meters, pressure & level sensors, safety instruments. Custom-sourced for your requirements."
            seoKeywords="oil gas instrumentation, smart transmitters, flow measurement, pressure transmitters, level sensors, safety instruments oil gas, custom instrumentation"
            seoPath="/oil-gas/field-surface-facility-instrumentation"
            parentCategory={{ label: "Oil & Gas", href: "/oil-gas" }}
            heroTag="Oil & Gas — Instrumentation"
            heroTitle="Field Surface Facility — Instrumentation"
            heroSubtitle="Smart instrumentation delivering real-time data, predictive diagnostics, and safety-critical measurement — sourced from leading manufacturers and specified to your exact process requirements."
            heroImage={heroImage}
            ctaTitle="Request Your Instrumentation Quote"
            ctaDescription="Our instrumentation specialists can help you select the right devices for your process variables, safety requirements, and communication architecture."
            ctaButtonText="Request Instrumentation Quote"
            contactFormTitle="Request Instrumentation Quote"
            contactFormDescription="Tell us about your measurement and control requirements."
            contactFormQueryType="oil-gas"
            overviewTitle="Precision Measurement. Intelligent Control."
            overviewImage={gaugeImage}
            overviewParagraphs={[
                "Instrumentation is the nervous system of any oil & gas surface facility. Accurate, real-time measurement of flow, pressure, temperature, and level is critical for process optimisation, production accounting, regulatory compliance, and safety.",
                "ROS Global Solutions supplies a comprehensive range of smart instruments for oil & gas operations — from safety-rated devices to advanced diagnostic transmitters. We source from the world's leading manufacturers and specify every instrument to match your process conditions, communication architecture, and safety requirements."
            ]}
            overviewListTitle="Our instrumentation supply range:"
            overviewList={[
                "Pressure transmitters and gauges",
                "Temperature transmitters and sensors",
                "Flow meters — multiple technologies",
                "Level transmitters and switches",
                "Gas analysers and detectors",
                "Control valves with smart positioners",
                "Safety instrumented system (SIS) components",
                "Wireless and remote monitoring solutions"
            ]}
            featureHighlights={[
                {
                    icon: Gauge,
                    title: "Smart Transmitters",
                    description: "Pressure, temperature, level, and multivariable transmitters with built-in diagnostics and predictive maintenance alerts — specified for your process conditions."
                },
                {
                    icon: Activity,
                    title: "Flow Measurement",
                    description: "Coriolis, ultrasonic, differential pressure, turbine, and vortex flow meters — selected for your fluid type, accuracy needs, and metering application."
                },
                {
                    icon: Radio,
                    title: "Digital Communication",
                    description: "Full protocol support for seamless integration with your DCS and SCADA systems — including wireless solutions for hard-to-reach or remote locations."
                },
                {
                    icon: Shield,
                    title: "Safety Instrumented Systems",
                    description: "Safety-rated instruments for emergency shutdown, fire & gas detection, and high-integrity protection — engineered for your facility's safety requirements."
                },
                {
                    icon: Wifi,
                    title: "Wireless Solutions",
                    description: "Self-organising wireless mesh networks for remote monitoring — eliminate costly cable infrastructure while maintaining reliable data transmission."
                },
                {
                    icon: Thermometer,
                    title: "Analysers & Detectors",
                    description: "Gas chromatographs, process gas analysers, and flame detectors — selected for your specific measurement application and hazardous environment."
                }
            ]}
            detailedSections={[
                {
                    title: "Specified for Your Application",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                Instrumentation selection is more than choosing a model number. Process fluid properties, ambient conditions, accuracy requirements, safety integrity levels, and communication protocols all influence the right selection. We provide application engineering support to ensure every instrument is optimally specified.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Gauge className="h-6 w-6 text-corporate-blue" />
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">Process Analysis</h4>
                                    <p className="text-sm text-muted-foreground">We review your process data sheets and conditions to recommend the optimal instrument type and configuration.</p>
                                </div>
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Shield className="h-6 w-6 text-corporate-blue" />
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">Safety Compliance</h4>
                                    <p className="text-sm text-muted-foreground">Instruments rated for the required safety integrity level and certified for your hazardous area classification.</p>
                                </div>
                                <div className="p-5 rounded-lg border border-border bg-card text-center">
                                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Radio className="h-6 w-6 text-corporate-blue" />
                                    </div>
                                    <h4 className="font-semibold text-corporate-blue mb-2">System Integration</h4>
                                    <p className="text-sm text-muted-foreground">Instruments selected for compatibility with your existing control and communication architecture.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            ]}
            applications={[
                { title: "Flow Measurement at Wellheads" },
                { title: "Pressure Monitoring — Pipelines & Vessels" },
                { title: "Temperature Control — Heat Exchangers" },
                { title: "Level Detection — Tanks & Separators" },
                { title: "Gas Analysis for Quality & Safety" },
                { title: "Emergency Shutdown Instrumentation" },
                { title: "Flare Gas Measurement" },
                { title: "Environmental Compliance Monitoring" }
            ]}
            whyChoose={[
                { title: "Custom Sourcing", detail: "Every instrument specified to your exact process conditions, not generic selections." },
                { title: "Safety Rated Portfolio", detail: "Instruments certified for process safety applications and hazardous environments." },
                { title: "Multi-Vendor Sourcing", detail: "Best-of-breed selection from leading global instrument manufacturers." },
                { title: "Technical Expertise", detail: "Data sheet review, instrument selection guidance, and application engineering support." },
                { title: "Fast Delivery", detail: "Strategic inventory of fast-moving items combined with expedited logistics." },
                { title: "After-Sales Support", detail: "Calibration support, spare parts supply, and technical assistance." }
            ]}
        />
    );
};

export default OilGasInstrumentation;
