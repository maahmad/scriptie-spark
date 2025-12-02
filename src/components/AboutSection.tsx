import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  const stats = [
    { value: "500+", label: "Students Helped", sublabel: "From all Dutch universities", color: "bg-gradient-primary text-primary-foreground" },
    { value: "95%", label: "Graduate On Time", sublabel: "Guaranteed results", color: "bg-secondary text-secondary-foreground" },
    { value: "10+", label: "Years Experience", sublabel: "Proven expertise", color: "bg-gradient-accent text-accent-foreground" },
  ];

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
            <p className="text-xl font-semibold text-foreground mb-4">
              Stop procrastinating. Start today and graduate on time.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Many students get stuck with their thesis. Maybe you don't know which research question to ask, or you're struggling with statistical analyses. Maybe you're just losing motivation and need that extra push to keep going.
            </p>
            <p className="text-lg text-foreground font-medium mb-6">
              We help you at every step. From research question to data analysis. Personal guidance that helps you make consistent progress.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Are you a bachelor's or master's student facing these challenges? Then ScriptieTutor is the right place for you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Card className={`p-8 ${stat.color} border-0 shadow-medium rounded-2xl`}>
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold">{stat.label}</div>
                  <div className="text-sm opacity-80">{stat.sublabel}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
