import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Label } from "./label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  title?: string;
  description?: string;
  compact?: boolean;
  defaultProductLine?: string;
}

const ContactForm = ({ 
  title = "Get In Touch", 
  description = "Submit your inquiry and we'll get back to you promptly.",
  compact = false,
  defaultProductLine = ""
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productLine: defaultProductLine,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        productLine: defaultProductLine,
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-[var(--shadow-card)]">
      <CardHeader className={compact ? "pb-4" : ""}>
        <CardTitle className="text-corporate-blue">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="productLine">Product Line</Label>
              <Select onValueChange={(value) => handleChange("productLine", value)} value={formData.productLine}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a product line" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oil-gas">Oil & Gas</SelectItem>
                  <SelectItem value="hvac">HVAC</SelectItem>
                  <SelectItem value="datacenter">Data Center</SelectItem>
                  <SelectItem value="rhamnolipids">Rhamnolipids</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell us about your requirements..."
              rows={4}
              required
            />
          </div>

          <Button 
            type="submit" 
            variant="corporate" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;