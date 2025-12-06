import { motion } from "framer-motion";

export const AboutSection = () => {
  const stats = [
    { value: "200+", label: "Students Helped" },
    { value: "95%", label: "Graduate On Time" },
    { value: "5+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="bg-background">
      {/* Stats Banner */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 py-12 lg:py-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center border-r border-primary-foreground/20 last:border-r-0"
              >
                <div className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-primary-foreground/80 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Graduate on Time with ScriptieTutor
            </h2>
            <p className="text-lg text-muted-foreground">
              Stop procrastinating. Start today.
            </p>
          </motion.div>

          {/* Content Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12"
          >
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Been putting off your thesis for months?</span> You're not alone. 
                Most of my students are working professionals who delayed their thesis because of jobs, internships, 
                or life getting in the way.
              </p>
              <p className="text-lg text-foreground font-medium leading-relaxed">
                Now the deadline is real—and the pressure is on.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                That's exactly why I offer a hassle-free service: hand me your thesis, and I'll guide you 
                to graduation. Students from <span className="font-medium text-foreground">UvA, VU Amsterdam, Erasmus, Tilburg, and Radboud</span> have all 
                finished with my help—even after months of delay.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No complicated processes. No endless back-and-forth. Just give me your project, follow my guidance, 
                and get it done.
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12 pt-8 border-t border-border"
          >
            <p className="text-xl font-semibold text-foreground">
              Book a free call and let's get you graduated—finally.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
