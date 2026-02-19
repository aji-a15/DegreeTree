import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const modules = [
  {
    code: "CS101",
    name: "Introduction to Programming",
    year: 1,
    topics: ["Variables", "Loops", "Functions", "Data Types", "Debugging"],
    description: "Foundational programming concepts using Python. Covers algorithmic thinking, control structures, and problem-solving techniques.",
  },
  {
    code: "CS102",
    name: "Computer Systems",
    year: 1,
    topics: ["Binary", "Logic Gates", "Memory", "CPU Architecture", "Assembly"],
    description: "Understanding how computers work at hardware and software levels, from transistors to operating systems.",
  },
  {
    code: "CS103",
    name: "Mathematics for Computing",
    year: 1,
    topics: ["Discrete Maths", "Set Theory", "Logic", "Combinatorics", "Graph Theory"],
    description: "Mathematical foundations essential for algorithm analysis, cryptography, and theoretical computer science.",
  },
  {
    code: "CS104",
    name: "Data Structures & Algorithms",
    year: 1,
    topics: ["Arrays", "Linked Lists", "Sorting", "Searching", "Complexity"],
    description: "Core data structures and algorithmic strategies that underpin efficient software development.",
  },
];

const Modules = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            First-Year <span className="text-primary">Modules</span>
          </motion.h1>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Explore the foundational modules that shape your entire computer science degree.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold px-2 py-1 bg-primary/20 text-primary rounded">
                    {mod.code}
                  </span>
                  <span className="text-xs text-muted-foreground">Year {mod.year}</span>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{mod.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{mod.description}</p>
                <div className="flex flex-wrap gap-2">
                  {mod.topics.map((topic) => (
                    <span key={topic} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Modules;
