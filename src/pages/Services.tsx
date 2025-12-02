import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, GraduationCap, LineChart, Database, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  const services = [
    {
      icon: GraduationCap,
      title: "Thesis Tutoring",
      description: "Complete guidance from topic selection to defense preparation. We support you through every phase of your thesis journey.",
      link: "/thesis-tutoring",
      highlights: ["Topic Selection", "Literature Review", "Research Design", "Writing Support", "Defense Prep"],
    },
    {
      icon: LineChart,
      title: "Data Analysis",
      description: "Not sure which test to run? We'll tell you, run it, check it, and explain what it means for your thesis.",
      link: "/data-analysis",
      highlights: ["SPSS & STATA", "R & Python", "Statistical Tests", "Visualization", "Interpretation"],
    },
    {
      icon: Database,
      title: "Data Collection",
      description: "Design effective surveys, gather quality data, and ensure the reliability of your research instruments.",
      link: "/data-collection",
      highlights: ["Survey Design", "Sample Selection", "Quality Control", "Distribution", "Response Management"],
    },
    {
      icon: BookOpen,
      title: "Training & Workshops",
      description: "Learn research methods and statistical analysis hands-on. Build skills you'll use throughout your career.",
      link: "/training",
      highlights: ["SPSS Training", "STATA Training", "R & Python", "Research Methods", "Academic Writing"],
    },
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
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical support for every stage of your thesis—from start to submission
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full hover:shadow-medium transition-all duration-300 border-border group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.highlights.map((highlight) => (
                        <span key={highlight} className="px-3 py-1 bg-muted rounded-full text-sm text-foreground">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      onClick={() => navigate(service.link)}
                      className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-foreground">Not Sure What You Need?</h2>
            <p className="text-xl text-muted-foreground">
              Schedule a free call. We'll discuss your situation and recommend the right approach.
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

export default Services;
