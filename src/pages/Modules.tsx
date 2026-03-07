import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const modules = [
  // Year 1
  {
    code: "CS161",
    name: "Introduction to Computer Science I",
    year: 1,
    topics: ["Variables", "Loops", "Functions", "Data Types", "Arrays"],
    description: "Module will be delivered using the Java programming language. Previous programming experience in any high-level programming language will be helpful but is not required.",
  },
  {
    code: "CS171",
    name: "Computer Systems I",
    year: 1,
    topics: ["Errors", "Testing", "Debugging", "Probab", "Visualisation"],
    description: "Understanding the breadth of topics in computer science and what is meant by computational thinking.",
  },
  {
    code: "CS162",
    name: "Introduction to Computer Science II",
    year: 1,
    topics: ["Regular Expressions", "Recursion", "Sorting", "Methods", "Inheritance"],
    description: "Mathematical foundations essential for algorithm analysis, cryptography, and theoretical computer science.",
  },
  {
    code: "CS172",
    name: "Computer Systems II",
    year: 1,
    topics: ["Truth Tables", "Conjunction", "Disjunction", "Quantifiers", "Complexity"],
    description: "Solve problems in computer science applying techniques from discrete mathematics, and give examples of standard proof techniques.",
  },
  // Year 2
  {
    code: "CS210",
    name: "Algorithm And Data Structures 1",
    year: 2,
    topics: ["Binary Searches", "Sorting", "Stacks", "Queues", "Classes"],
    description: "Describe a variety of structures for storing data such as arrays, linked lists, stacks and queues, and design, develop, test and debug object-oriented programs in Java.",
  },
  {
    code: "CS220",
    name: "Computer Architecture",
    year: 2,
    topics: ["Data Representation", "Functional Logic Design", "Sequential Logic Design", "Memory Technology", "Number systems"],
    description: "Understanding of how numeric data is represented in different formats and manipulated in digital circuits and how these circuits interact to perform processing.",
  },
  {
    code: "CS211",
    name: "Algorithm And Data Structures 2",
    year: 2,
    topics: ["Binary Search Trees", "Tree traversals", "Hash Tables", "Graph representations", " Backtracking algorithms"],
    description: "Describe a variety of structures for storing data such as binary search trees, balanced binary trees and hash tables.",
  },
  {
    code: "CS240",
    name: "Operating Systems, Communication and Concurrency",
    year: 2,
    topics: ["Memory management", "Virtual architecture", "Management algorithm efficiency", "Concurrency control ", "Space management options"],
    description: "Ability to understand the goals of operating systems in different processing environments and architectures and the concepts of how to achieve them",
  },
  {
    code: "CS130",
    name: "Databases",
    year: 2,
    topics: ["Structured Query Language", "Conceptual data modelling", "Data integrity", "Relational algebra", "Database security"],
    description: "Identify major Database Management Systems (DBMS) functions and describe their role in a database system.",
  },
  {
    code: "CS280",
    name: "Introduction to User Experience(UX), User Interface(UI) and Interaction Design",
    year: 2,
    topics: ["Design", "Development", "Evaluation", "Testing", " Iterative development"],
    description: "Describe key theories, principles and psychology underpinning User Experience (UX) and User Interaction (UI).",
  },
  {
    code: "CS335",
    name: "Sofytware Engineering and Software Processing",
    year: 2,
    topics: ["Analysing ", "Designing", "Implementing", "Testing", "Maintaining software"],
    description: "Explain the concept of a software life cycle and provide an example, illustrating its phases including the deliverables that are produced.",
  },
  {
    code: "CS265",
    name: "Software Testing",
    year: 2,
    topics: ["Testing methods", "Testability", "Software quality", "Phases of testing", "Unit testing"],
    description: "Explain the software testing process from unit testing up to system testing and describe the difference between software verification and software validation.",
  },
  {
    code: "CS355",
    name: "Theory of Computation",
    year: 2,
    topics: ["Finite automata", "Regular expressions", "Turing machines", "Context-free languages", "Pushdown automata"],
    description: "Design the corresponding machine model to accept a specified language and explain how some problems have no algorithmic solution.",
  },
  {
    code: "CS230",
    name: "Web Information Processing",
    year: 2,
    topics: ["Frameworks", "Web services,", "Database-driven", "Web applications", "Web services"],
    description: "Design and build a dynamic, database-driven, interactive browser-based web-based applications.",
  },
  // Year 3
  {
    code: "CS370",
    name: "Computation and Complexity",
    year: 3,
    topics: ["Computability theory", "Computational complexity", "Complexity classes", "Turing machines", "Rice's theorem"],
    description: "Explain how some problems have no algorithmic solution and provide examples that illustrate the concept of uncomputability.",
  },
  {
    code: "CS320",
    name: "Computer Networks",
    year: 3,
    topics: ["Packet switching", "Application Layer", "Transport Layer", "Network Layer", "Link Layer"],
    description: "Understand the fundamental concepts and protocols of computer networks and their applications.",
  },
  {
    code: "CS310",
    name: "Programming Languages & Compilers",
    year: 3,
    topics: ["Formal grammars", "Predictive parsing", "Code generation", "Interpreters ", "Assemblers"],
    description: "Recognise the underlying formal models such as finite state automata, push-down automata and their connection to language definition through regular expressions and grammars.",
  },
  {
    code: "CS264",
    name: "Software Design",
    year: 3,
    topics: ["Software analysis", "Design patterns", "OOA/D", "Software development"],
    description: "Analyse, design, and implement software based solutions to problems using the specified object oriented programming language.",
  },
  {
    code: "CS357",
    name: "Software Verification",
    year: 3,
    topics: ["Design by Contract", "Hoare logic", "SMT solvers", " Formal proofs ", "Program verification"],
    description: "Explain the limitations of testing as a means to ensure correctness and evaluate the role of verification in software engineering.",
  },
  {
    code: "CS353",
    name: "Team Project",
    year: 3,
    topics: ["Project management", "Meeting skills", "Development ", "SCRUM", "DevOps"],
    description: "Work effectively as a member of a software development team in an Agile environment and apply learned skills and experience more effectively in future project work.",
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
