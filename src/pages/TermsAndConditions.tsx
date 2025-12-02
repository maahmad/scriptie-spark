import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Terms and Conditions</h1>
            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ScriptieTutor provides thesis tutoring, data analysis support, data collection assistance, and training services for students. Our services are designed to guide and support students in completing their academic work independently.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Academic Integrity</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are intended to support and guide students in their academic work. We do not write theses, papers, or complete assignments on behalf of students. All work submitted to educational institutions must be the student's own original work. Students are responsible for adhering to their institution's academic integrity policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Pricing and Payment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Services are charged on an hourly basis according to the package selected. Payment is required upfront before sessions begin. Prices are subject to change but confirmed bookings will be honored at the agreed rate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Scheduling and Cancellation</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sessions are scheduled by mutual agreement. Cancellations must be made at least 24 hours in advance. Late cancellations or no-shows may result in the session being charged. We reserve the right to reschedule sessions when necessary.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Refunds</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you are not satisfied after the first session, we will refund unused hours upon request. Refund requests must be made within 30 days of purchase. Completed sessions are non-refundable.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All student information, thesis content, and communications are kept strictly confidential. We do not share student information with third parties. Your documents and data are handled securely and deleted upon request.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ScriptieTutor provides guidance and support but does not guarantee specific grades or outcomes. Students are ultimately responsible for the quality and integrity of their own work. We are not liable for any academic consequences resulting from the student's submitted work.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these terms, please contact us at info@scriptietutor.nl.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
