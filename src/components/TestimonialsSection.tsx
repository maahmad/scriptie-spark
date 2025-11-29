import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

// Placeholder images - replace these with your actual WhatsApp screenshot paths
const whatsappScreenshots = [
  {
    id: 1,
    // Add your screenshot path here, e.g.: import screenshot1 from "@/assets/whatsapp-1.jpg"
    // Then use: image: screenshot1
    image: "https://placehold.co/400x800/dcf8c6/000000?text=WhatsApp+Screenshot+1",
    alt: "Student testimonial - Passed thesis defense",
    size: "large" // takes 2 columns and 2 rows
  },
  {
    id: 2,
    image: "https://placehold.co/400x600/dcf8c6/000000?text=WhatsApp+Screenshot+2",
    alt: "Student testimonial - Got unstuck",
    size: "medium" // takes 1 column and 2 rows
  },
  {
    id: 3,
    image: "https://placehold.co/400x500/dcf8c6/000000?text=WhatsApp+Screenshot+3",
    alt: "Student testimonial - Finished on time",
    size: "small" // takes 1 column and 1 row
  },
  {
    id: 4,
    image: "https://placehold.co/400x500/dcf8c6/000000?text=WhatsApp+Screenshot+4",
    alt: "Student testimonial - Great results",
    size: "small"
  },
  {
    id: 5,
    image: "https://placehold.co/400x800/dcf8c6/000000?text=WhatsApp+Screenshot+5",
    alt: "Student testimonial - Analysis help",
    size: "large"
  },
  {
    id: 6,
    image: "https://placehold.co/400x600/dcf8c6/000000?text=WhatsApp+Screenshot+6",
    alt: "Student testimonial - Methodology clarity",
    size: "medium"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <MessageSquare className="w-5 h-5" />
            <span className="font-semibold">Real Conversations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Students Who Made It
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real WhatsApp conversations with students we've helped graduate on time
          </p>
        </motion.div>

        {/* WhatsApp Screenshots Gallery - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mb-12">
          {whatsappScreenshots.map((screenshot, index) => (
            <motion.div
              key={screenshot.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
                relative group overflow-hidden rounded-2xl
                ${screenshot.size === "large" ? "lg:col-span-2 lg:row-span-2" : ""}
                ${screenshot.size === "medium" ? "lg:row-span-2" : ""}
                ${screenshot.size === "small" ? "lg:col-span-1" : ""}
              `}
            >
              <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border-2 border-border/50 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-strong">
                <img
                  src={screenshot.image}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-sm text-foreground/90">
                    <MessageSquare className="w-5 h-5 text-primary mb-2" />
                    <p className="font-medium">{screenshot.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructions for adding your own screenshots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 p-6 bg-muted/30 rounded-lg max-w-3xl mx-auto"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">To add your WhatsApp screenshots:</span><br />
            1. Save your screenshots to <code className="px-2 py-1 bg-background rounded">src/assets/</code><br />
            2. Import them at the top of this file<br />
            3. Replace the placeholder image URLs with your imported images
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">200+</div>
            <div className="text-sm text-muted-foreground">Students Helped</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">95%</div>
            <div className="text-sm text-muted-foreground">Graduate On Time</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Response Time</div>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join them?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-strong hover:scale-105"
          >
            Schedule Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};
