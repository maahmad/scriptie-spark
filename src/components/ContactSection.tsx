import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    areaOfStudy: "",
    university: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      areaOfStudy: "",
      university: "",
      email: "",
      phone: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Request A Free Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill in your details below and take the first step towards an exceptional thesis!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 bg-card border-border shadow-medium">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="mt-2 bg-background border-border"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="mt-2 bg-background border-border"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="areaOfStudy">Area of Study *</Label>
                  <Textarea
                    id="areaOfStudy"
                    placeholder="e.g., Economics, Psychology, Business Administration"
                    value={formData.areaOfStudy}
                    onChange={(e) => setFormData({ ...formData, areaOfStudy: e.target.value })}
                    className="mt-2 bg-background border-border min-h-[80px] resize-none"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="university">University *</Label>
                  <Textarea
                    id="university"
                    placeholder="e.g., University of Amsterdam, Erasmus University"
                    value={formData.university}
                    onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                    className="mt-2 bg-background border-border min-h-[80px] resize-none"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 bg-background border-border"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+31 6 1234 5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 bg-background border-border"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-medium"
                >
                  SUBMIT
                </Button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-card border-border shadow-subtle">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-sm text-muted-foreground">info@scriptietutor.nl</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border shadow-subtle">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <p className="text-sm text-muted-foreground">+31 6 1234 5678</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border shadow-subtle">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">Amsterdam, Netherlands</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-primary text-primary-foreground border-0 shadow-medium">
              <h3 className="font-bold text-lg mb-2">Response Time</h3>
              <p className="text-sm opacity-90">
                We typically respond to all inquiries within 24 hours, often much sooner!
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
