import { motion } from "framer-motion";
import { UserCheck, Target, Zap, Heart, Award, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: UserCheck,
    title: "Expert help",
    description: "Work with researchers who helps you graduate, not just gives advice.",
  },
  {
    icon: Target,
    title: "Your Topic, Your Needs",
    description: "Customized help for your specific research—not generic templates.",
  },
  {
    icon: Zap,
    title: "24hr Response",
    description: "Stuck on something? Get answers within hours, not in a week.",
  },
  {
    icon: Heart,
    title: "100% Confidential",
    description: "Your thesis, documents, and conversations stay confidential. Discreet, safe, and secure.",
  },
  {
    icon: Award,
    title: "University Standards",
    description: "Meet your institution's requirements—first time, no revisions.",
  },
  {
    icon: Clock,
    title: "Hit Your Deadline",
    description: "Realistic planning and consistent progress tracking so you finish on time.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why ScriptieTutor Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Direct support that gets results—no promises we can't keep
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card border-border">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
