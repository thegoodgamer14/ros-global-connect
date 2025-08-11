import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/ui/contact-form";
import SocialMediaSidebar from "@/components/ui/social-media-sidebar";
import { MapPin, Mail, Phone, Clock, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <SocialMediaSidebar />
      {/* Contact Information & Form */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-corporate-blue">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Our global team is ready to assist you with all your industrial supply needs. 
                    Contact us today to discuss your requirements and discover how ROS Global 
                    can support your business objectives.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  <Card className="shadow-[var(--shadow-card)]">
                    <CardContent className="flex items-center p-6">
                      <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-corporate-blue">Email</h3>
                        <p className="text-muted-foreground">info@rosglobal.com</p>
                        <p className="text-sm text-muted-foreground">sales@rosglobal.com</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-[var(--shadow-card)]">
                    <CardContent className="flex items-center p-6">
                      <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-corporate-blue">Phone</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4568 (Sales)</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-[var(--shadow-card)]">
                    <CardContent className="flex items-center p-6">
                      <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-corporate-blue">Headquarters</h3>
                        <p className="text-muted-foreground">123 Global Business Plaza</p>
                        <p className="text-muted-foreground">International District</p>
                        <p className="text-muted-foreground">Houston, TX 77001, USA</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-[var(--shadow-card)]">
                    <CardContent className="flex items-center p-6">
                      <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center mr-4">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-corporate-blue">Business Hours</h3>
                        <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM CST</p>
                        <p className="text-sm text-muted-foreground">Emergency support available 24/7</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-[var(--shadow-card)]">
                    <CardContent className="flex items-center p-6">
                      <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center mr-4">
                        <Linkedin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-corporate-blue">Social Media</h3>
                        <p className="text-muted-foreground">Connect with us on LinkedIn</p>
                        <a href="#" className="text-corporate-blue hover:text-corporate-blue-light text-sm">
                          linkedin.com/company/ros-global
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <ContactForm 
                  title="Send Us A Message"
                  description="Fill out the form below and our team will get back to you within 24 hours."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-corporate-blue">
                Global Presence
              </h2>
              <p className="text-lg text-muted-foreground">
                ROS Global serves clients worldwide through our network of offices and partners
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-corporate-blue">North America</CardTitle>
                  <CardDescription>Houston, TX (Headquarters)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Primary hub for oil & gas operations and HVAC solutions across 
                    North and South America.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-corporate-blue">Europe</CardTitle>
                  <CardDescription>London, UK (Regional Office)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Serving European markets with data center solutions and 
                    specialized filtration systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-corporate-blue">Asia Pacific</CardTitle>
                  <CardDescription>Singapore (Regional Office)</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Supporting industrial operations and biotechnology partnerships 
                    across the Asia Pacific region.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-corporate-blue">
                Visit Our Headquarters
              </h2>
              <p className="text-lg text-muted-foreground">
                Located in the heart of Houston's energy corridor
              </p>
            </div>

            <Card className="shadow-[var(--shadow-card)]">
              <CardContent className="p-0">
                <div className="aspect-video bg-corporate-gray-light rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-corporate-blue mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-corporate-blue mb-2">
                      ROS Global Headquarters
                    </h3>
                    <p className="text-muted-foreground">
                      123 Global Business Plaza<br />
                      International District<br />
                      Houston, TX 77001, USA
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      [Interactive map would be embedded here]
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-corporate-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our team of specialists is standing by to help you find the perfect 
            solutions for your industrial supply and consulting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@rosglobal.com" className="inline-block">
              <button className="px-8 py-3 bg-white text-corporate-blue font-semibold rounded-md hover:bg-gray-100 transition-colors">
                Email Us Now
              </button>
            </a>
            <a href="tel:+15551234567" className="inline-block">
              <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-colors">
                Call Today
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;