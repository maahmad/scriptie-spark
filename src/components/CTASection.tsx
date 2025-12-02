import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const hooks = [
    { icon: Clock, text: "Start this week" },
    { icon: Shield, text: "100% confidential" },
    { icon: CheckCircle, text: "Satisfaction guaranteed" },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Finally Finish Your Thesis?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Join 500+ students who graduated on time with ScriptieTutor
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {hooks.map((hook) => {
              const Icon = hook.icon;
              return (
                <div key={hook.text} className="flex items-center gap-2 text-primary-foreground">
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{hook.text}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-medium group"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => navigate("/pricing")}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Pricing
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
