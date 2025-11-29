import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    initial: "S",
    messages: [
      { type: "student", text: "Hi! I'm really stuck on my methodology section. Can you help?", time: "10:23" },
      { type: "tutor", text: "Of course! What specific part are you struggling with?", time: "10:24" },
      { type: "student", text: "I don't know how to justify my research design choices", time: "10:25" },
      { type: "tutor", text: "No problem. Let's schedule a call and I'll walk you through it step by step. When works for you?", time: "10:26" },
      { type: "student", text: "Thank you so much! This is exactly what I needed 🙏", time: "10:28" }
    ]
  },
  {
    id: 2,
    name: "Michael K.",
    initial: "M",
    messages: [
      { type: "student", text: "Just wanted to say thank you! I passed my thesis defense yesterday 🎉", time: "14:15" },
      { type: "tutor", text: "Congratulations! That's amazing news! How did it go?", time: "14:16" },
      { type: "student", text: "Really well! The committee loved my methodology section. Your guidance made all the difference", time: "14:17" },
      { type: "tutor", text: "I'm so happy to hear that! You did all the hard work. Wishing you all the best! 🎓", time: "14:18" }
    ]
  },
  {
    id: 3,
    name: "Emma L.",
    initial: "E",
    messages: [
      { type: "student", text: "I'm panicking about my deadline. Can you help me prioritize?", time: "09:30" },
      { type: "tutor", text: "Absolutely! Let's break this down. What's your deadline?", time: "09:31" },
      { type: "student", text: "2 weeks. I still need to finish data analysis and write 3 chapters", time: "09:32" },
      { type: "tutor", text: "We can do this! Let me create a realistic timeline for you. First, let's focus on the analysis - that's the foundation", time: "09:33" },
      { type: "student", text: "This plan looks manageable. Thank you for calming me down!", time: "09:35" }
    ]
  },
  {
    id: 4,
    name: "David R.",
    initial: "D",
    messages: [
      { type: "student", text: "Your feedback on my literature review was incredibly helpful", time: "16:45" },
      { type: "tutor", text: "I'm glad it helped! How are you feeling about the rest of your thesis?", time: "16:46" },
      { type: "student", text: "Much more confident now. The structure you suggested really clarified everything", time: "16:47" },
      { type: "tutor", text: "That's great to hear! Keep up the good work 💪", time: "16:48" }
    ]
  },
  {
    id: 5,
    name: "Lisa T.",
    initial: "L",
    messages: [
      { type: "student", text: "I got my results back - 8.5! I can't believe it!", time: "11:20" },
      { type: "tutor", text: "Wow, that's fantastic! You should be so proud! 🎉", time: "11:21" },
      { type: "student", text: "I couldn't have done it without your support. Thank you for everything!", time: "11:22" },
      { type: "tutor", text: "You did all the work! I just helped guide you. Congratulations on your success 🎓", time: "11:23" }
    ]
  },
  {
    id: 6,
    name: "James P.",
    initial: "J",
    messages: [
      { type: "student", text: "I'm struggling with SPSS. Can you help me understand the output?", time: "13:10" },
      { type: "tutor", text: "Of course! Send me a screenshot of what you're seeing and I'll explain it", time: "13:11" },
      { type: "student", text: "This makes so much more sense now! Thank you!", time: "13:25" },
      { type: "tutor", text: "Happy to help! Let me know if you have any other questions 😊", time: "13:26" }
    ]
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from students who graduated with our help
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur">
                {/* WhatsApp-style header */}
                <div className="bg-primary p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center font-semibold text-primary-foreground">
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="font-semibold text-primary-foreground">{testimonial.name}</div>
                    <div className="text-xs text-primary-foreground/80 flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      online
                    </div>
                  </div>
                </div>

                {/* Chat messages */}
                <div className="p-4 bg-[#e5ddd5] dark:bg-muted/50 min-h-[320px] max-h-[320px] overflow-y-auto space-y-2">
                  {testimonial.messages.map((message, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: message.type === "student" ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className={`flex ${message.type === "student" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-lg px-3 py-2 ${
                          message.type === "student"
                            ? "bg-[#dcf8c6] dark:bg-primary/20"
                            : "bg-white dark:bg-card"
                        } shadow-sm`}
                      >
                        <p className="text-sm text-foreground leading-relaxed">{message.text}</p>
                        <span className="text-[10px] text-muted-foreground mt-1 block text-right">
                          {message.time}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Join 200+ students who graduated on time with our support
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-strong hover:scale-105"
          >
            Start Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};
