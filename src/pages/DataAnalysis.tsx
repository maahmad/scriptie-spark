import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, BarChart3, Database, LineChart, PieChart } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const DataAnalysis = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  const services = [
    { icon: Database, title: "Data Preparation", description: "Clean datasets, handle missing values, remove outliers, and prepare your data for analysis" },
    { icon: BarChart3, title: "Statistical Analysis", description: "From t-tests to structural equation modeling—we match the method to your research question" },
    { icon: LineChart, title: "Data Visualization", description: "Clear charts and graphs that make your findings obvious and presentation-ready" },
    { icon: PieChart, title: "Results Interpretation", description: "Understand what your numbers mean for your thesis—in plain language" },
  ];

  const basicTechniques = [
    "Descriptive Statistics",
    "T-Tests & Chi-Square",
    "Correlation Analysis",
    "Regression Analysis",
    "ANOVA / MANOVA",
    "Factor Analysis",
  ];

  const advancedTechniques = [
    "Structural Equation Modeling (SEM)",
    "Panel Data Analysis",
    "Hierarchical Linear Models",
    "Time Series Analysis",
    "Survival Analysis",
    "Propensity Score Matching",
  ];

  const software = ["SPSS", "STATA", "R", "Python", "EViews", "Excel"];

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
              <span className="text-sm font-medium text-primary">Expert statistical support</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Data Analysis That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Actually Works</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Not sure which test to run? We'll tell you, run it, check it, and explain what it means for your thesis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={scrollToContact} className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                Get Analysis Help <ArrowRight className="ml-2 w-5 h-5" />
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
            <h2 className="text-4xl font-bold mb-4 text-foreground">What You Get</h2>
            <p className="text-lg text-muted-foreground">Complete data analysis support from start to finish</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
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
                  <Card className="p-8 h-full hover:shadow-medium transition-all duration-300 border-border">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Statistical Techniques</h2>
            <p className="text-lg text-muted-foreground">From basic tests to advanced modeling</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-border">
              <h3 className="text-xl font-bold mb-6 text-foreground">Basic Techniques</h3>
              <div className="space-y-3">
                {basicTechniques.map((tech) => (
                  <div key={tech} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-8 border-border">
              <h3 className="text-xl font-bold mb-6 text-foreground">Advanced Techniques</h3>
              <div className="space-y-3">
                {advancedTechniques.map((tech) => (
                  <div key={tech} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-8 border-border">
            <h3 className="text-xl font-bold mb-6 text-center text-foreground">Software We Use</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {software.map((soft) => (
                <span key={soft} className="px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold">
                  {soft}
                </span>
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
            <h2 className="text-4xl font-bold text-foreground">Stuck on Your Analysis?</h2>
            <p className="text-xl text-muted-foreground">
              Let's look at your data together and figure out the best approach.
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

export default DataAnalysis;
