import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Label } from "./label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  title?: string;
  description?: string;
  compact?: boolean;
  defaultQueryType?: string;
}

const ContactForm = ({ 
  title = "Get In Touch", 
  description = "Submit your inquiry and we'll get back to you promptly.",
  compact = false,
  defaultQueryType = ""
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    queryType: defaultQueryType,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
      });
      const formattedDateTime = `${formattedDate} at ${formattedTime}`;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        query_type: formData.queryType,
        message: formData.message,
        to_email: import.meta.env.TO_EMAIL,
        date: formattedDate,
        time: formattedTime,
        date_time: formattedDateTime,
        subject: `New Form Submission - ${formattedDate}`,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });

      // Clear form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        queryType: defaultQueryType,
        message: "",
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <Label htmlFor="queryType">Query Type *</Label>
              <Select onValueChange={(value) => handleChange("queryType", value)} value={formData.queryType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select query type" />
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
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell us about your requirements..."
              rows={4}
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