import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const modules = [
  // Year 1
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
  // Year 2
  {
    code: "CS201",
    name: "Object-Oriented Programming",
    year: 2,
    topics: ["Classes", "Inheritance", "Polymorphism", "Design Patterns", "UML"],
    description: "Advanced programming paradigms focusing on modular, reusable, and maintainable software design using Java or C++.",
  },
  {
    code: "CS202",
    name: "Database Systems",
    year: 2,
    topics: ["SQL", "Normalisation", "ER Diagrams", "Indexing", "Transactions"],
    description: "Relational database design, querying, and management. Covers data modelling and performance optimisation.",
  },
  {
    code: "CS203",
    name: "Operating Systems",
    year: 2,
    topics: ["Processes", "Threads", "Scheduling", "Memory Management", "File Systems"],
    description: "How operating systems manage hardware resources, concurrency, and provide abstractions for software.",
  },
  {
    code: "CS204",
    name: "Software Engineering",
    year: 2,
    topics: ["Agile", "Testing", "Version Control", "CI/CD", "Requirements"],
    description: "Principles and practices for building reliable software in teams, from requirements to deployment.",
  },
  // Year 3
  {
    code: "CS301",
    name: "Artificial Intelligence",
    year: 3,
    topics: ["Search Algorithms", "Machine Learning", "Neural Networks", "NLP", "Ethics"],
    description: "Core AI techniques including supervised learning, search strategies, and ethical considerations of intelligent systems.",
  },
  {
    code: "CS302",
    name: "Computer Networks",
    year: 3,
    topics: ["TCP/IP", "Routing", "DNS", "HTTP", "Network Security"],
    description: "How data travels across the internet. Covers protocols, network architecture, and security fundamentals.",
  },
  {
    code: "CS303",
    name: "Compiler Design",
    year: 3,
    topics: ["Lexical Analysis", "Parsing", "ASTs", "Code Generation", "Optimisation"],
    description: "Theory and practice of translating high-level languages into machine code through compiler construction.",
  },
  {
    code: "CS304",
    name: "Cyber Security",
    year: 3,
    topics: ["Cryptography", "Penetration Testing", "Firewalls", "Authentication", "Risk Analysis"],
    description: "Defensive and offensive security techniques, threat modelling, and building secure systems.",
  },
  // Year 4
  {
    code: "CS401",
    name: "Distributed Systems",
    year: 4,
    topics: ["Consensus", "Replication", "CAP Theorem", "Microservices", "Cloud Computing"],
    description: "Designing and building systems that operate across multiple machines with fault tolerance and scalability.",
  },
  {
    code: "CS402",
    name: "Machine Learning & Data Science",
    year: 4,
    topics: ["Deep Learning", "Feature Engineering", "Model Evaluation", "Big Data", "Visualisation"],
    description: "Advanced ML techniques and data-driven decision making at scale, from model training to deployment.",
  },
  {
    code: "CS403",
    name: "Final Year Project",
    year: 4,
    topics: ["Research", "Prototyping", "Evaluation", "Writing", "Presentation"],
    description: "An independent research or development project demonstrating mastery of computer science principles.",
  },
  {
    code: "CS404",
    name: "Advanced Topics in CS",
    year: 4,
    topics: ["Quantum Computing", "Blockchain", "Computer Vision", "Robotics", "HCI"],
    description: "Cutting-edge areas of computer science exploring emerging technologies and research frontiers.",
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
            All <span className="text-primary">Modules</span>
          </motion.h1>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Explore every module across your four-year computer science degree.
          </p>

          {[1, 2, 3, 4].map((year) => (
            <div key={year} className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-serif font-bold mb-6 text-primary"
              >
                Year {year}
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-6">
                {modules
                  .filter((mod) => mod.year === year)
                  .map((mod, i) => (
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
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Modules;
