import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, ClipboardList, Users, Shield, Send, BarChart, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DataCollection = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  const services = [
    { icon: ClipboardList, title: "Survey Design", description: "Create questionnaires that actually answer your research questions—validated and tested" },
    { icon: Users, title: "Sample Selection", description: "Identify the right target group and determine the optimal sample size for statistical significance" },
    { icon: Shield, title: "Data Quality", description: "Ensure reliability and validity of your measurement instruments with proper testing" },
    { icon: Send, title: "Distribution Strategy", description: "Choose effective channels to reach your respondents and maximize response rates" },
    { icon: BarChart, title: "Response Management", description: "Track responses and manage follow-ups for better completion rates" },
    { icon: FileCheck, title: "Data Preparation", description: "Clean and organize collected data, ready for analysis" },
  ];

  const methods = [
    "Online Surveys (Qualtrics, Google Forms, SurveyMonkey)",
    "In-depth Interviews",
    "Focus Groups",
    "Observational Studies",
    "Secondary Data Collection",
    "Mixed Methods Research",
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
              <span className="text-sm font-medium text-primary">Quality data collection</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Data Collection{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Done Right</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Collecting the right data is crucial. We help you design effective surveys and gather reliable data for your research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={scrollToContact} className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                Get Collection Help <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/pricing')}>
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">What We Offer</h2>
            <p className="text-lg text-muted-foreground">End-to-end support for your data collection needs</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <Card className="p-6 h-full hover:shadow-medium transition-all duration-300 border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Collection Methods</h2>
            <p className="text-lg text-muted-foreground">We support various data collection approaches</p>
          </motion.div>
          
          <Card className="p-8 border-border">
            <div className="grid md:grid-cols-2 gap-4">
              {methods.map((method) => (
                <div key={method} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{method}</span>
                </div>
              ))}
            </div>
          </Card>
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
            <h2 className="text-4xl font-bold text-foreground">Need Help With Data Collection?</h2>
            <p className="text-xl text-muted-foreground">
              Let's design a collection strategy that fits your research.
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

export default DataCollection;
