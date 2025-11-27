import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Graduate Faster with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                ScriptieTutor
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our ultimate goal is to ease your thesis writing journey and ensure a successful and timely graduation!
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Whether you are having trouble identifying a research gap, figuring out the statistical analyses to best answer your research question, or simply struggling to stay motivated and need that extra push to keep going, we have got you covered. Our personalized assistance is intended to address these challenges and guide you toward consistent progress in your thesis writing journey.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              If you are a bachelor's or master's student facing these challenges and in need of additional assistance, look no further.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-8 bg-gradient-primary text-primary-foreground border-0 shadow-medium">
              <div className="text-5xl font-bold mb-2">0</div>
              <div className="text-lg opacity-90">Years of Experience</div>
            </Card>
            
            <Card className="p-8 bg-secondary text-secondary-foreground border-0 shadow-medium">
              <div className="text-5xl font-bold mb-2">23+</div>
              <div className="text-lg opacity-90">Happy Students</div>
            </Card>
            
            <Card className="p-8 bg-gradient-accent text-accent-foreground border-0 shadow-medium">
              <div className="text-5xl font-bold mb-2">11%</div>
              <div className="text-lg opacity-90">Timely Graduation</div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
