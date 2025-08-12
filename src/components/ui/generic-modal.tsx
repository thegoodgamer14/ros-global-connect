import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, CheckCircle, Phone, Mail, Headphones } from "lucide-react";

export interface GenericModalData {
  title: string;
  overview: string;
  detailedDescription: string;
  features: string[];
  specifications?: string[];
  workingPrinciple?: string;
  applications: string[];
  benefits: string[];
  images?: string[];
  ctaText?: string;
}

interface GenericModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: GenericModalData;
}

const GenericModal = ({ isOpen, onClose, data }: GenericModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader className="border-b border-border pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-corporate-blue">
              {data.title}
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-muted-foreground text-left mt-2">{data.overview}</p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Product Images Placeholder */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary rounded-lg h-48 flex items-center justify-center">
              <span className="text-muted-foreground">Product Image 1</span>
            </div>
            <div className="bg-secondary rounded-lg h-48 flex items-center justify-center">
              <span className="text-muted-foreground">Product Image 2</span>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="text-xl font-semibold text-corporate-blue mb-3">Overview</h3>
            <p className="text-foreground leading-relaxed">{data.detailedDescription}</p>
          </div>

          {/* Working Principle (optional) */}
          {data.workingPrinciple && (
            <div>
              <h3 className="text-xl font-semibold text-corporate-blue mb-3">How It Works</h3>
              <p className="text-foreground leading-relaxed">{data.workingPrinciple}</p>
            </div>
          )}

          {/* Features and Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-[var(--shadow-card)]">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-corporate-blue mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {data.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-corporate-blue mt-1 flex-shrink-0" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {data.specifications && data.specifications.length > 0 && (
              <Card className="shadow-[var(--shadow-card)]">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-corporate-blue mb-4">Specifications</h4>
                  <ul className="space-y-2">
                    {data.specifications.map((spec, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-corporate-blue mt-1 flex-shrink-0" />
                        <span className="text-foreground text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Applications */}
          <div>
            <h3 className="text-xl font-semibold text-corporate-blue mb-3">Applications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {data.applications.map((app, index) => (
                <Badge key={index} variant="outline" className="text-center">
                  {app}
                </Badge>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-semibold text-corporate-blue mb-3">Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-corporate-blue mt-1 flex-shrink-0" />
                  <span className="text-foreground text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Support Section */}
          <Card className="bg-corporate-blue/5 border-corporate-blue/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-corporate-blue mb-4 flex items-center">
                <Headphones className="h-5 w-5 mr-2" />
                Customer Support & After-Sales Service
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-2">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-corporate-blue mb-1">24/7 Technical Support</h4>
                  <p className="text-sm text-muted-foreground">Round-the-clock assistance for all technical inquiries</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-corporate-blue mb-1">Extended Warranty</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive warranty coverage and service guarantees</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-corporate-blue rounded-full flex items-center justify-center mx-auto mb-2">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-corporate-blue mb-1">On-Site Service</h4>
                  <p className="text-sm text-muted-foreground">Professional installation and maintenance services</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="text-center pt-4 border-t border-border">
            <Button 
              variant="cta" 
              size="lg" 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'end' })}
            >
              {data.ctaText || `Request Quote for ${data.title}`}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GenericModal;