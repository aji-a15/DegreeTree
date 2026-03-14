import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { TreeDeciduous } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <TreeDeciduous className="h-10 w-10 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">
                About <span className="text-primary">DegreeTree</span>
              </h1>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                DegreeTree is an educational web application built to help Maynooth University computer science students understand the foundational modules introduced during their first year — and see how those concepts branch into every corner of their degree.
              </p>
              <p>
                The project demonstrates that first-year modules aren't just introductory hurdles. They're the roots of a vast tree of knowledge that extends into advanced coursework, professional careers, and cutting-edge research.
              </p>
              <p>
                Whether you're a first-year student wondering why Computer Systems matters, or why Algorithm and Data Structures are important, DegreeTree provides a clear, visual, and interactive way to explore these connections.
              </p>

              <div className="p-6 bg-card rounded-lg border border-border mt-8">
                <h3 className="text-lg font-serif font-bold text-foreground mb-3">Our Mission</h3>
                <p>
                  To provide a user-friendly environment for professionals, educators, and students to investigate core Computer Science concepts, showing their real-world applications and linking them to advanced computer science topics.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
