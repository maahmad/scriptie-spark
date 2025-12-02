import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, GraduationCap, Target, Heart, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  const values = [
    { icon: Target, title: "Results-Focused", description: "We measure success by your graduation, not by hours billed" },
    { icon: Heart, title: "Student-First", description: "Your success is our priority. We adapt to your needs and pace" },
    { icon: Award, title: "Excellence", description: "PhD-level expertise applied to every student, every thesis" },
    { icon: GraduationCap, title: "Practical", description: "No fluff, no generic advice. Just concrete steps to finish" },
  ];

  const stats = [
    { value: "500+", label: "Students Helped", sublabel: "From all Dutch universities" },
    { value: "95%", label: "Graduate On Time", sublabel: "Guaranteed results" },
    { value: "10+", label: "Years Experience", sublabel: "Proven expertise" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Graduate Faster with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-primary">ScriptieTutor</span>
              </h1>
              <p className="text-xl font-semibold text-foreground">
                Stop procrastinating. Start today and graduate on time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Many students get stuck with their thesis. Maybe you don't know which research question to ask, or you're struggling with statistical analyses. Maybe you're just losing motivation and need that extra push to keep going.
              </p>
              <p className="text-lg text-foreground font-medium">
                We help you at every step. From research question to data analysis. Personal guidance that helps you make consistent progress.
              </p>
              <p className="text-muted-foreground">
                Are you a bachelor's or master's student facing these challenges? Then ScriptieTutor is the right place for you.
              </p>
              <Button size="lg" onClick={scrollToContact} className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <Card className="p-8 bg-gradient-primary text-primary-foreground border-0 rounded-2xl">
                <div className="text-5xl font-bold mb-2">{stats[0].value}</div>
                <div className="text-lg font-semibold">{stats[0].label}</div>
                <div className="text-sm opacity-80">{stats[0].sublabel}</div>
              </Card>
              <Card className="p-8 bg-secondary text-secondary-foreground border-0 rounded-2xl">
                <div className="text-5xl font-bold mb-2">{stats[1].value}</div>
                <div className="text-lg font-semibold">{stats[1].label}</div>
                <div className="text-sm opacity-80">{stats[1].sublabel}</div>
              </Card>
              <Card className="p-8 bg-gradient-accent text-accent-foreground border-0 rounded-2xl">
                <div className="text-5xl font-bold mb-2">{stats[2].value}</div>
                <div className="text-lg font-semibold">{stats[2].label}</div>
                <div className="text-sm opacity-80">{stats[2].sublabel}</div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">What We Stand For</h2>
            <p className="text-lg text-muted-foreground">Our approach to helping you succeed</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full border-border hover:shadow-medium transition-all">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
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
            <h2 className="text-4xl font-bold text-foreground">Ready to Graduate?</h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your thesis and create a plan that works.
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

export default About;
