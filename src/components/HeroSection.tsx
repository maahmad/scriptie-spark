import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-graduate.jpg";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const element = document.getElementById("features");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const checkmarks = [
    "Free consultation",
    "100% safe and private",
    "Start immediately",
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Content - 7 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6 relative z-20"
          >
            {/* Trustpilot Rating - Prominent placement */}
            <motion.a 
              href="https://www.trustpilot.com" 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="inline-flex items-center gap-3 bg-card border border-border rounded-2xl px-5 py-3 shadow-soft hover:shadow-medium transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-1.5">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#00B67A"/>
                </svg>
                <span className="font-bold text-[#00B67A]">Trustpilot</span>
              </div>
              <div className="h-5 w-px bg-border" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#00B67A] text-[#00B67A]" />
                ))}
              </div>
              <span className="font-semibold text-foreground">4.9</span>
              <span className="text-muted-foreground text-sm">(50+ reviews)</span>
            </motion.a>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-wrap gap-2"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  3 months faster on average
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/80 text-accent-foreground text-sm font-medium">
                  <CheckCircle className="w-4 h-4" />
                  No more delays
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground"
              >
                Stuck on Your{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-primary">
                    Thesis?
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 4 150 4 198 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
                  </svg>
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-primary">
                  Get Unstuck.
                </span>
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              Direct, practical help from research design to final submission. No fluff—just the support to get your thesis done.
            </motion.p>

            {/* Checkmarks */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-x-6 gap-y-3"
            >
              {checkmarks.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-medium text-base group px-8"
              >
                Free Non-binding Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToServices}
                className="border-2 border-border hover:border-primary text-foreground hover:text-primary text-base px-8"
              >
                See How I Can Help
              </Button>
            </motion.div>

            {/* Trust text */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-sm text-muted-foreground pt-2"
            >
              Trusted by students from <span className="font-medium text-foreground">UvA, VU, Erasmus, Tilburg</span>, and more
            </motion.p>
          </motion.div>

          {/* Right Content - Image with overlap effect - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="lg:col-span-6 relative"
          >
            {/* Floating accent shapes */}
            <div className="absolute -top-8 -right-4 w-24 h-24 bg-accent rounded-2xl rotate-12 opacity-60" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full" />
            
            {/* Main image container */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3 scale-105" />
              <div className="relative rounded-3xl overflow-hidden shadow-strong border-4 border-background">
                <img 
                  src={heroImage} 
                  alt="Graduate student celebrating success with diploma"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
              </div>
              
              {/* Floating stats card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-medium"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Students helped</p>
                  </div>
                </div>
              </motion.div>

              {/* Success rate badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="absolute -top-4 -right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-medium"
              >
                <p className="text-sm font-medium text-muted-foreground">Success rate</p>
                <p className="text-xl font-bold text-primary">98%</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
