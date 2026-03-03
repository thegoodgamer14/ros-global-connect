import ProductLineLayout from "@/components/ui/product-line-layout";
import { Activity, Shield, Wifi, Server, Settings, Zap } from "lucide-react";
import heroImage from "@/assets/datacenter/cable-management.webp";
import monitoringImage from "@/assets/datacenter/dc-power-monitoring.webp";
import ahuImage from "@/assets/datacenter/dc-air-handling-unit.webp";

const DataCenterEnvironmentalControl = () => {
    return (
        <ProductLineLayout
            seoTitle="Data Center Environmental Control | Monitoring & Management | ROS Global Solutions"
            seoDescription="Comprehensive data centre environmental control — integrated temperature, humidity, air quality monitoring and management. Custom solutions for maximum uptime."
            seoKeywords="data center environmental control, data center monitoring, temperature monitoring server room, humidity control data center, environmental management data center"
            seoPath="/datacenter/environmental-control"
            parentCategory={{ label: "Data Center", href: "/datacenter" }}
            heroTag="Data Center — Environmental Control"
            heroTitle="Environmental Control"
            heroSubtitle="Integrate air filtration, chemical protection, precision cooling, and environmental monitoring into a unified system — maintaining optimal conditions and maximising uptime."
            heroImage={heroImage}
            ctaTitle="Take Total Control of Your Data Centre Environment"
            ctaDescription="From environmental assessment to integrated monitoring and management, our team delivers comprehensive environmental control — custom-designed for your facility."
            ctaButtonText="Request Environmental Assessment"
            contactFormTitle="Request Environmental Assessment"
            contactFormDescription="Tell us about your data centre monitoring and control needs."
            contactFormQueryType="datacenter"
            overviewTitle="Total Environmental Intelligence"
            overviewImage={monitoringImage}
            overviewParagraphs={[
                "Modern data centres are complex ecosystems where temperature, humidity, air quality, and cooling efficiency must be continuously balanced. Individual systems operating in isolation lead to blind spots, slow response times, wasted energy, and reactive maintenance.",
                "Integrated environmental control solves these problems by connecting all monitoring points and control systems into a unified platform — giving you complete visibility, intelligent analytics, and automated response capability. We design and supply custom environmental control solutions tailored to your facility."
            ]}
            overviewListTitle="What we monitor and control:"
            overviewList={[
                "Temperature at rack level — multiple points per rack",
                "Humidity and dew point across the facility",
                "Particulate count for air quality compliance",
                "Gaseous contaminants for corrosion prevention",
                "Airflow direction and velocity",
                "Differential pressure across filters and containment",
                "Water leak detection",
                "Smoke and fire detection"
            ]}
            featureHighlights={[
                {
                    icon: Activity,
                    title: "Real-Time Dashboards",
                    description: "Visualise temperature, humidity, power, and air quality across your entire facility with heatmaps and historical trending."
                },
                {
                    icon: Wifi,
                    title: "Comprehensive Sensor Network",
                    description: "Rack-mounted sensors, particle counters, corrosion monitors, leak detectors, and smoke detection — integrated into one platform."
                },
                {
                    icon: Settings,
                    title: "Management System Integration",
                    description: "Seamless connection with your data centre infrastructure management and building management systems."
                },
                {
                    icon: Shield,
                    title: "Predictive Maintenance",
                    description: "Analytics-driven predictions that identify potential failures before they happen — reducing unplanned downtime significantly."
                },
                {
                    icon: Zap,
                    title: "Energy Optimisation",
                    description: "Coordinated, data-driven operation of all environmental systems to improve energy efficiency and reduce operating costs."
                },
                {
                    icon: Server,
                    title: "Maximum Uptime",
                    description: "Automated alerts, escalation protocols, and rapid response capability to prevent environmental excursions that threaten equipment."
                }
            ]}
            detailedSections={[
                {
                    title: "Integrated Solution — One Partner for Everything",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                ROS Global provides end-to-end environmental control by integrating our full product portfolio — air filtration, chemical filtration, precision cooling, and monitoring — under a unified management layer. This integrated approach eliminates the complexity of coordinating multiple vendors.
                            </p>
                            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                                <img src={ahuImage} alt="Data centre air handling and monitoring" className="w-full h-auto object-contain" />
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { title: "Air Filtration", items: "Particulate removal at every stage" },
                                    { title: "Chemical Filtration", items: "Corrosive gas removal and monitoring" },
                                    { title: "Precision Cooling", items: "Temperature and humidity control" },
                                    { title: "Monitoring", items: "Real-time environmental visibility" }
                                ].map((col, i) => (
                                    <div key={i} className="p-4 rounded border border-corporate-blue/20 bg-corporate-blue/5 text-center">
                                        <h5 className="font-semibold text-corporate-blue text-sm mb-1">{col.title}</h5>
                                        <p className="text-xs text-muted-foreground">{col.items}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                },
                {
                    title: "From Reactive to Predictive",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                Traditional data centre management relies on reactive or scheduled maintenance — fixing problems after they occur or performing maintenance on a calendar basis regardless of actual equipment condition. Our integrated approach enables predictive maintenance — using real-time data and analytics to identify issues before they cause downtime.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {[
                                    { value: "Reduced", label: "Unplanned downtime through predictive analytics" },
                                    { value: "Lower", label: "Maintenance costs through data-driven scheduling" },
                                    { value: "Extended", label: "Equipment lifespan through optimal conditions" },
                                    { value: "Improved", label: "Energy efficiency through coordinated operation" }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 rounded-lg border border-border bg-card text-center">
                                        <span className="text-xl font-bold text-corporate-blue block">{item.value}</span>
                                        <span className="text-sm text-muted-foreground">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }
            ]}
            applications={[
                { title: "Tier III & IV Data Centres", description: "Mission-critical environments requiring maximum uptime" },
                { title: "Cloud Service Providers", description: "Hyperscale facilities with thousands of servers" },
                { title: "Financial Services", description: "Trading platforms where reliability is paramount" },
                { title: "Healthcare IT", description: "Compliant data environments with strict uptime requirements" },
                { title: "Government & Military", description: "High-security, high-reliability facilities" },
                { title: "Edge Computing", description: "Remote facilities requiring autonomous management" }
            ]}
            whyChoose={[
                { title: "Integrated Approach", detail: "One partner for filtration, cooling, monitoring, and control — eliminating multi-vendor complexity." },
                { title: "Custom Design", detail: "Environmental control systems designed for your specific facility and requirements." },
                { title: "Standards Compliance", detail: "Systems designed to meet recognised data centre environmental standards." },
                { title: "Predictive Intelligence", detail: "Analytics-powered monitoring for proactive, predictive maintenance." },
                { title: "Maximum Uptime Target", detail: "Environmental control designed to prevent the unplanned downtime that costs millions." },
                { title: "Regional Expertise", detail: "Gulf climate considerations built into every system design." }
            ]}
        />
    );
};

export default DataCenterEnvironmentalControl;
