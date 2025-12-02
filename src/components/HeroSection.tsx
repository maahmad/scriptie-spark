import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-graduate.jpg";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.getElementById("features");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const badges = [
    { text: "3 months faster on average", color: "bg-accent text-accent-foreground" },
    { text: "No more delays", color: "bg-accent text-accent-foreground" },
  ];

  const checkmarks = [
    "Free consultation",
    "100% safe and private",
    "Start immediately",
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-background via-background to-muted/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.08),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div 
                  key={badge.text}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${badge.color} text-sm font-medium`}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
              Stuck on Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Thesis? Get Unstuck.
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Direct, practical help from research design to final submission. No fluff—just the support to get your thesis done.
            </p>

            {/* Checkmarks */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {checkmarks.map((item) => (
                <div key={item} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <p className="text-sm text-muted-foreground">
              Trusted by students from UvA, VU, Erasmus, Tilburg, and more
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-medium text-base group"
              >
                Free non-binding call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToServices}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base"
              >
                See How I Can Help
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Graduate student celebrating success with diploma"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
