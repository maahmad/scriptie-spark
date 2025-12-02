import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, BookOpen, FileText, Target, Users, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ThesisTutoring = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  const steps = [
    { title: "Topic Selection", description: "Find a research topic that matches your interests and meets academic requirements" },
    { title: "Literature Review", description: "Build a solid theoretical framework with the latest academic research" },
    { title: "Research Design", description: "Choose the right methodology tailored to your research questions" },
    { title: "Data Collection", description: "Select appropriate methods, create surveys, ensure validity" },
    { title: "Data Analysis", description: "Pick the right statistical techniques and interpret results correctly" },
    { title: "Writing & Drafting", description: "Structure your thesis clearly with proper academic writing" },
    { title: "Citation & Referencing", description: "Follow your university's citation style (APA, MLA, Chicago)" },
    { title: "Editing & Proofreading", description: "Polish grammar, spelling, and formatting for professional submission" },
    { title: "Final Submission", description: "Final check to ensure it meets all university requirements" },
    { title: "Defense Preparation", description: "Anticipate questions and refine your presentation" },
  ];

  const benefits = [
    { icon: BookOpen, title: "Personalized Guidance", description: "One-on-one sessions tailored to your specific thesis and challenges" },
    { icon: FileText, title: "All Chapters Covered", description: "From introduction to conclusion—we help with every section" },
    { icon: Target, title: "Clear Milestones", description: "Structured planning so you always know what's next" },
    { icon: Users, title: "Expert Tutors", description: "Work with PhD-level researchers who've been through it" },
    { icon: Award, title: "University Standards", description: "Meet your institution's requirements—first time" },
    { icon: Clock, title: "Flexible Scheduling", description: "Sessions when it works for you—evenings and weekends included" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Complete thesis support</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Thesis Tutoring That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Gets Results</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Starting your thesis can feel overwhelming. We'll guide you through every step—from finding your topic to preparing for your defense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={scrollToContact} className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                Schedule Free Call <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/pricing')}>
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">What You Get</h2>
            <p className="text-lg text-muted-foreground">Comprehensive support for every stage of your thesis</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-medium transition-all duration-300 border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">The Complete Journey</h2>
            <p className="text-lg text-muted-foreground">We support you through every phase of your thesis</p>
          </motion.div>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-6 border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-foreground">Ready to Start Your Thesis?</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your topic and create a plan that works for you.
            </p>
            <Button size="lg" onClick={scrollToContact} className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
              Schedule Free Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThesisTutoring;
