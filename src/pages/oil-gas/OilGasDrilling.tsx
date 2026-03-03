import ProductLineLayout from "@/components/ui/product-line-layout";
import { Drill, Droplets, Settings, Wrench, ArrowDownUp, Container } from "lucide-react";
import heroImage from "@/assets/oil-gas/high-performance-drilling-equipment.webp";
import drillingPump from "@/assets/oil-gas/drilling-pump.webp";
import drillingPumpWorking from "@/assets/oil-gas/drilling-pump-working.webp";

const OilGasDrilling = () => {
    return (
        <ProductLineLayout
            seoTitle="Drilling Rig Equipment & Mud Pumps | ROS Global Solutions"
            seoDescription="High-performance drilling rig equipment and mud pump systems — mud pumps, rig floor equipment, solids control & consumable components. Custom-sourced for your requirements."
            seoKeywords="mud pump drilling, drilling rig equipment, mud circulation system, drilling fluid pump, rig floor equipment, drilling consumables, custom drilling equipment"
            seoPath="/oil-gas/drilling-rig-spaces-mud-pumps"
            parentCategory={{ label: "Oil & Gas", href: "/oil-gas" }}
            heroTag="Oil & Gas — Drilling"
            heroTitle="Drilling — Rig Spaces & Mud Pumps"
            heroSubtitle="From mud pumps to complete rig floor equipment — we supply the drilling components that keep your operations running efficiently and safely, onshore and offshore."
            heroImage={heroImage}
            ctaTitle="Get Your Drilling Equipment Quote"
            ctaDescription="From complete mud pump systems to individual consumable components, our drilling equipment specialists are ready to support your next project."
            ctaButtonText="Request Drilling Quote"
            contactFormTitle="Request Drilling Equipment Quote"
            contactFormDescription="Tell us about your rig and drilling requirements."
            contactFormQueryType="oil-gas"
            overviewTitle="Reliable Drilling Equipment for Every Operation"
            overviewImage={drillingPump}
            overviewParagraphs={[
                "Drilling operations are the starting point of every oil and gas production asset. The equipment deployed on the rig floor and in the mud system directly impacts drilling efficiency, wellbore quality, and — most critically — safety.",
                "ROS Global Solutions supplies a comprehensive range of drilling rig equipment with a particular focus on mud pump systems and their consumable components. Whether you're equipping a new rig, refurbishing existing equipment, or sourcing replacement parts, we supply components compatible with all major OEM platforms — delivered with fast turnaround and competitive pricing."
            ]}
            overviewListTitle="Our drilling equipment supply range:"
            overviewList={[
                "Triplex, duplex, and quintuplex mud pumps",
                "Mud pump consumables — liners, pistons, valves, seats",
                "Rig floor equipment",
                "Solids control equipment",
                "Mud system tanks and mixing equipment",
                "Pulsation dampeners",
                "High-pressure manifolds and piping"
            ]}
            featureHighlights={[
                {
                    icon: Drill,
                    title: "Mud Pumps",
                    description: "Triplex, duplex, and quintuplex mud pumps sourced to your rig's horsepower, pressure, and flow requirements — for both onshore and offshore operations."
                },
                {
                    icon: Droplets,
                    title: "Mud Circulation System",
                    description: "Complete fluid path equipment — from mud tanks and mixing systems through to the drill string and back, including all ancillary components."
                },
                {
                    icon: Wrench,
                    title: "Consumables & Spares",
                    description: "Bi-metallic liners, rubber pistons, carbide valves and seats, modules, and piston rods — compatible with all major OEM mud pump platforms."
                },
                {
                    icon: ArrowDownUp,
                    title: "Solids Control",
                    description: "Shale shakers, degassers, desanders, desilters, and centrifuges for efficient drilling fluid cleaning and recycling."
                },
                {
                    icon: Container,
                    title: "Rig Floor Equipment",
                    description: "Rotary tables, top drive components, elevators, slips, tongs, spinning wrenches, and drill string components — for your specific rig configuration."
                },
                {
                    icon: Settings,
                    title: "Multi-OEM Compatibility",
                    description: "Consumables and spare parts compatible with all major manufacturers — ensuring you can source what you need regardless of your rig's original equipment."
                }
            ]}
            detailedSections={[
                {
                    title: "Built for Your Rig's Requirements",
                    content: (
                        <div className="space-y-6">
                            <p className="text-muted-foreground leading-relaxed">
                                Every drilling operation has unique demands — from the formation being drilled to the depth target, from the rig configuration to the mud system design. We don't offer one-size-fits-all solutions. We work with your drilling team to supply equipment and consumables that match your rig's exact specifications.
                            </p>
                            <div className="rounded-xl overflow-hidden shadow-lg mb-6">
                                <img src={drillingPumpWorking} alt="Drilling pump in operation" className="w-full h-auto object-contain" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-lg border border-border bg-card">
                                    <h4 className="font-semibold text-corporate-blue mb-3">OEM-Compatible Consumables</h4>
                                    <p className="text-sm text-muted-foreground">Liners, pistons, valves, and seats that meet or exceed OEM specifications — compatible with NOV, Gardner Denver, BOMCO, and other major mud pump manufacturers.</p>
                                </div>
                                <div className="p-6 rounded-lg border border-border bg-card">
                                    <h4 className="font-semibold text-corporate-blue mb-3">Rapid Turnaround</h4>
                                    <p className="text-sm text-muted-foreground">Drilling operations can't wait. We maintain strategic inventory of fast-moving consumables and provide expedited logistics to keep your rig running.</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            ]}
            applications={[
                { title: "Onshore Conventional Drilling" },
                { title: "Offshore Platform & Jack-up Drilling" },
                { title: "Extended-Reach & Directional Drilling" },
                { title: "Deep & High-Temperature Wells" },
                { title: "Horizontal & Multilateral Drilling" },
                { title: "Workover & Well Intervention" },
                { title: "Coiled Tubing Operations" },
                { title: "Geothermal Drilling" }
            ]}
            whyChoose={[
                { title: "Multi-OEM Compatibility", detail: "Consumables for all major mud pump manufacturers — one supplier for all your rig needs." },
                { title: "Strategic Inventory", detail: "Fast-moving consumables stocked for rapid dispatch to your rig site." },
                { title: "Quality Assured", detail: "All products inspected and certified to meet or exceed OEM specifications." },
                { title: "Global Logistics", detail: "Expedited delivery to rig sites worldwide — onshore and offshore." },
                { title: "Competitive Pricing", detail: "Direct-from-manufacturer sourcing eliminates middlemen and delivers the best value." },
                { title: "Technical Support", detail: "Application-specific recommendations for consumable selection and compatibility." }
            ]}
        />
    );
};

export default OilGasDrilling;
