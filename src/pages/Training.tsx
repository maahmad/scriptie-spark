import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ArrowRight, BookOpen, Code, FileText, Search, PenTool, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Training = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  const trainings = [
    {
      icon: BookOpen,
      title: "Research Methods",
      description: "Learn qualitative and quantitative research design from scratch",
      topics: ["Research Design", "Methodology Selection", "Sampling Techniques", "Ethics & Validity"],
    },
    {
      icon: Code,
      title: "SPSS Training",
      description: "Master data analysis in SPSS from basics to advanced techniques",
      topics: ["Data Entry & Management", "Descriptive Statistics", "T-Tests & ANOVA", "Regression Analysis"],
    },
    {
      icon: Code,
      title: "STATA Training",
      description: "Learn statistical analysis and econometrics in STATA",
      topics: ["Data Management", "Panel Data Analysis", "Time Series", "Advanced Econometrics"],
    },
    {
      icon: Code,
      title: "R & Python Training",
      description: "Build skills in modern data analysis programming",
      topics: ["Data Wrangling", "Statistical Analysis", "Visualization", "Machine Learning Basics"],
    },
    {
      icon: PenTool,
      title: "Academic Writing",
      description: "Improve your scientific writing and argumentation",
      topics: ["Thesis Structure", "Academic Style", "Citation & References", "Editing Techniques"],
    },
    {
      icon: Search,
      title: "Literature Review",
      description: "Learn systematic literature search and synthesis",
      topics: ["Database Search", "Source Evaluation", "Synthesis Methods", "Writing Reviews"],
    },
  ];

  const benefits = [
    { icon: Users, title: "One-on-One Sessions", description: "Personalized training tailored to your pace and needs" },
    { icon: BookOpen, title: "Practical Focus", description: "Learn by doing with your own data and research" },
    { icon: FileText, title: "Materials Included", description: "Get guides and resources to reference later" },
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
              <span className="text-sm font-medium text-primary">Hands-on learning</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Training &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">Workshops</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Want to learn how to do it yourself? We offer personalized training in research methods and statistical analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={scrollToContact} className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                Book Training Session <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/pricing')}>
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
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
                  <Card className="p-6 text-center border-border hover:shadow-medium transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trainings */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Available Training</h2>
            <p className="text-lg text-muted-foreground">Choose the training that fits your needs</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainings.map((training, index) => {
              const Icon = training.icon;
              return (
                <motion.div
                  key={training.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-medium transition-all duration-300 border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{training.title}</h3>
                    <p className="text-muted-foreground mb-4">{training.description}</p>
                    <div className="space-y-2">
                      {training.topics.map((topic) => (
                        <div key={topic} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
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
            <h2 className="text-4xl font-bold text-foreground">Ready to Learn?</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss which training fits your needs and schedule your first session.
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

export default Training;
