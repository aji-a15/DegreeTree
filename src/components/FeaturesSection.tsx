import { motion } from "framer-motion";
import { BookOpen, GitBranch, Compass, Search } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Explore Modules",
    description: "Browse first-year CS modules and discover their core topics, learning outcomes, and connections.",
  },
  {
    icon: GitBranch,
    title: "Trace Connections",
    description: "Visualize how foundational topics branch into advanced subjects across all four years.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "See how first-year concepts cultivate skills essential for academia and industry success.",
  },
  {
    icon: Search,
    title: "FAQ & Resources",
    description: "Search frequently asked questions and get clarity on your computer science journey.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Why <span className="text-primary">DegreeTree</span>?
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors"
            >
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-serif font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
