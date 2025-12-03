import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "When to Use a T-Test vs ANOVA in Your Thesis",
    excerpt: "Confused about which statistical test to use? A t-test compares means between two groups, while ANOVA handles three or more. Learn when each is appropriate for your research.",
    category: "Hypothesis Testing",
    date: "Nov 28, 2024",
    readTime: "4 min read",
    content: "The t-test is your go-to when comparing two groups (e.g., treatment vs control). Use ANOVA when you have 3+ groups to avoid inflating Type I error. Remember: ANOVA tells you IF there's a difference, post-hoc tests tell you WHERE."
  },
  {
    id: 2,
    title: "Understanding Regression Analysis: A Student's Guide",
    excerpt: "Regression helps you predict outcomes and understand relationships. Whether it's linear, multiple, or logistic—here's how to choose the right one for your thesis.",
    category: "Regression",
    date: "Nov 25, 2024",
    readTime: "5 min read",
    content: "Linear regression predicts continuous outcomes from one predictor. Multiple regression adds more predictors. Logistic regression is for binary outcomes (yes/no). Always check assumptions: linearity, normality of residuals, and homoscedasticity."
  },
  {
    id: 3,
    title: "P-Values Explained: What 0.05 Really Means",
    excerpt: "The p-value is the most misunderstood concept in statistics. It's not the probability your hypothesis is true—here's what it actually tells you.",
    category: "Fundamentals",
    date: "Nov 22, 2024",
    readTime: "3 min read",
    content: "A p-value of 0.05 means: IF the null hypothesis were true, there's a 5% chance of getting results this extreme. It does NOT mean there's a 95% chance your hypothesis is correct. Report effect sizes alongside p-values for meaningful interpretation."
  },
  {
    id: 4,
    title: "Chi-Square Test: Analyzing Categorical Data",
    excerpt: "When your variables are categories (gender, preference, yes/no), chi-square is your friend. Learn how to test independence and goodness of fit.",
    category: "Categorical Analysis",
    date: "Nov 18, 2024",
    readTime: "4 min read",
    content: "Chi-square tests if categorical variables are independent. Example: Is there a relationship between study major and career choice? Requirements: expected frequencies should be 5+ in each cell. For 2x2 tables with small samples, use Fisher's exact test instead."
  },
  {
    id: 5,
    title: "Correlation vs Causation: A Critical Distinction",
    excerpt: "Just because two variables move together doesn't mean one causes the other. This fundamental concept can make or break your thesis conclusions.",
    category: "Fundamentals",
    date: "Nov 15, 2024",
    readTime: "3 min read",
    content: "Correlation measures relationship strength (-1 to +1). Causation requires: temporal precedence, covariation, and ruling out alternatives. Ice cream sales correlate with drowning rates—but summer is the lurking variable. Always consider confounds in your discussion."
  },
  {
    id: 6,
    title: "SPSS vs R vs Python: Which Tool for Your Analysis?",
    excerpt: "Each statistical software has strengths. SPSS is user-friendly, R is powerful and free, Python integrates with machine learning. Here's how to choose.",
    category: "Tools",
    date: "Nov 12, 2024",
    readTime: "5 min read",
    content: "SPSS: Great for beginners, point-and-click interface, widely used in social sciences. R: Free, extensive packages, reproducible code. Python: Best for large datasets and ML integration. For most theses, SPSS suffices. Learning R pays off long-term."
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4">
              Statistical Insights
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Thesis Statistics Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick guides on statistical techniques to help you analyze your data with confidence.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.content}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center p-8 bg-muted/50 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Need Help With Your Statistics?
            </h2>
            <p className="text-muted-foreground mb-4">
              Reading about it is one thing. Getting expert guidance is another.
            </p>
            <button 
              onClick={() => navigate("/contact")}
              className="bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Book a Free Consultation
            </button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
