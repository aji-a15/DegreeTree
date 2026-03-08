import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

interface Module {
  code: string;
  name: string;
  year: number;
  topics: string[];
  description: string;
  feedsFrom: string[];
  leadsTo: string[];
  careers: string[];
}

const modules: Module[] = [
  // Year 1
  {
    code: "CS161",
    name: "Introduction to Computer Science I",
    year: 1,
    topics: ["Variables", "Loops", "Functions", "Data Types", "Arrays"],
    description: "Module will be delivered using the Java programming language. Previous programming experience in any high-level programming language will be helpful but is not required.",
    feedsFrom: [],
    leadsTo: ["CS162", "CS210", "CS230"],
  },
  {
    code: "CS171",
    name: "Computer Systems I",
    year: 1,
    topics: ["Errors", "Testing", "Debugging", "Probab", "Visualisation"],
    description: "Understanding the breadth of topics in computer science and what is meant by computational thinking.",
    feedsFrom: [],
    leadsTo: ["CS172", "CS220", "CS265"],
  },
  {
    code: "CS162",
    name: "Introduction to Computer Science II",
    year: 1,
    topics: ["Regular Expressions", "Recursion", "Sorting", "Methods", "Inheritance"],
    description: "Mathematical foundations essential for algorithm analysis, cryptography, and theoretical computer science.",
    feedsFrom: ["CS161"],
    leadsTo: ["CS210", "CS211", "CS310"],
  },
  {
    code: "CS172",
    name: "Computer Systems II",
    year: 1,
    topics: ["Truth Tables", "Conjunction", "Disjunction", "Quantifiers", "Complexity"],
    description: "Solve problems in computer science applying techniques from discrete mathematics, and give examples of standard proof techniques.",
    feedsFrom: ["CS171"],
    leadsTo: ["CS355", "CS370", "CS357"],
  },
  // Year 2
  {
    code: "CS210",
    name: "Algorithm And Data Structures 1",
    year: 2,
    topics: ["Binary Searches", "Sorting", "Stacks", "Queues", "Classes"],
    description: "Describe a variety of structures for storing data such as arrays, linked lists, stacks and queues, and design, develop, test and debug object-oriented programs in Java.",
    feedsFrom: ["CS161", "CS162"],
    leadsTo: ["CS211", "CS264"],
  },
  {
    code: "CS220",
    name: "Computer Architecture",
    year: 2,
    topics: ["Data Representation", "Functional Logic Design", "Sequential Logic Design", "Memory Technology", "Number systems"],
    description: "Understanding of how numeric data is represented in different formats and manipulated in digital circuits and how these circuits interact to perform processing.",
    feedsFrom: ["CS171"],
    leadsTo: ["CS433", "CS402"],
  },
  {
    code: "CS211",
    name: "Algorithm And Data Structures 2",
    year: 2,
    topics: ["Binary Search Trees", "Tree traversals", "Hash Tables", "Graph representations", "Backtracking algorithms"],
    description: "Describe a variety of structures for storing data such as binary search trees, balanced binary trees and hash tables.",
    feedsFrom: ["CS210", "CS162"],
    leadsTo: ["CS310", "CS401", "CS370"],
  },
  {
    code: "CS240",
    name: "Operating Systems, Communication and Concurrency",
    year: 2,
    topics: ["Memory management", "Virtual architecture", "Management algorithm efficiency", "Concurrency control", "Space management options"],
    description: "Ability to understand the goals of operating systems in different processing environments and architectures and the concepts of how to achieve them.",
    feedsFrom: ["CS171", "CS161"],
    leadsTo: ["CS320", "CS402"],
  },
  {
    code: "CS130",
    name: "Databases",
    year: 2,
    topics: ["Structured Query Language", "Conceptual data modelling", "Data integrity", "Relational algebra", "Database security"],
    description: "Identify major Database Management Systems (DBMS) functions and describe their role in a database system.",
    feedsFrom: ["CS161"],
    leadsTo: ["CS230", "CS264"],
  },
  {
    code: "CS280",
    name: "Introduction to User Experience(UX), User Interface(UI) and Interaction Design",
    year: 2,
    topics: ["Design", "Development", "Evaluation", "Testing", "Iterative development"],
    description: "Describe key theories, principles and psychology underpinning User Experience (UX) and User Interaction (UI).",
    feedsFrom: ["CS161"],
    leadsTo: ["CS423", "CS264"],
  },
  {
    code: "CS335",
    name: "Software Engineering and Software Processing",
    year: 2,
    topics: ["Analysing", "Designing", "Implementing", "Testing", "Maintaining software"],
    description: "Explain the concept of a software life cycle and provide an example, illustrating its phases including the deliverables that are produced.",
    feedsFrom: ["CS161", "CS162"],
    leadsTo: ["CS264", "CS353"],
  },
  {
    code: "CS265",
    name: "Software Testing",
    year: 2,
    topics: ["Testing methods", "Testability", "Software quality", "Phases of testing", "Unit testing"],
    description: "Explain the software testing process from unit testing up to system testing and describe the difference between software verification and software validation.",
    feedsFrom: ["CS171", "CS161"],
    leadsTo: ["CS357", "CS353"],
  },
  {
    code: "CS355",
    name: "Theory of Computation",
    year: 2,
    topics: ["Finite automata", "Regular expressions", "Turing machines", "Context-free languages", "Pushdown automata"],
    description: "Design the corresponding machine model to accept a specified language and explain how some problems have no algorithmic solution.",
    feedsFrom: ["CS172"],
    leadsTo: ["CS370", "CS310", "CS424"],
  },
  {
    code: "CS230",
    name: "Web Information Processing",
    year: 2,
    topics: ["Frameworks", "Web services", "Database-driven", "Web applications", "Web services"],
    description: "Design and build a dynamic, database-driven, interactive browser-based web-based applications.",
    feedsFrom: ["CS161", "CS130"],
    leadsTo: ["CS264", "CS353"],
  },
  // Year 3
  {
    code: "CS370",
    name: "Computation and Complexity",
    year: 3,
    topics: ["Computability theory", "Computational complexity", "Complexity classes", "Turing machines", "Rice's theorem"],
    description: "Explain how some problems have no algorithmic solution and provide examples that illustrate the concept of uncomputability.",
    feedsFrom: ["CS355", "CS172", "CS211"],
    leadsTo: ["CS424", "MP472"],
  },
  {
    code: "CS320",
    name: "Computer Networks",
    year: 3,
    topics: ["Packet switching", "Application Layer", "Transport Layer", "Network Layer", "Link Layer"],
    description: "Understand the fundamental concepts and protocols of computer networks and their applications.",
    feedsFrom: ["CS240"],
    leadsTo: ["CS402", "CS416"],
  },
  {
    code: "CS310",
    name: "Programming Languages & Compilers",
    year: 3,
    topics: ["Formal grammars", "Predictive parsing", "Code generation", "Interpreters", "Assemblers"],
    description: "Recognise the underlying formal models such as finite state automata, push-down automata and their connection to language definition through regular expressions and grammars.",
    feedsFrom: ["CS211", "CS355", "CS162"],
    leadsTo: ["CS424", "CS404"],
  },
  {
    code: "CS264",
    name: "Software Design",
    year: 3,
    topics: ["Software analysis", "Design patterns", "OOA/D", "Software development"],
    description: "Analyse, design, and implement software based solutions to problems using the specified object oriented programming language.",
    feedsFrom: ["CS210", "CS335", "CS280", "CS130", "CS230"],
    leadsTo: ["CS353", "CS440"],
  },
  {
    code: "CS357",
    name: "Software Verification",
    year: 3,
    topics: ["Design by Contract", "Hoare logic", "SMT solvers", "Formal proofs", "Program verification"],
    description: "Explain the limitations of testing as a means to ensure correctness and evaluate the role of verification in software engineering.",
    feedsFrom: ["CS172", "CS265"],
    leadsTo: ["CS424", "CS440"],
  },
  {
    code: "CS353",
    name: "Team Project",
    year: 3,
    topics: ["Project management", "Meeting skills", "Development", "SCRUM", "DevOps"],
    description: "Work effectively as a member of a software development team in an Agile environment and apply learned skills and experience more effectively in future project work.",
    feedsFrom: ["CS335", "CS265", "CS264", "CS230"],
    leadsTo: ["CS440"],
  },
  // Year 4
  {
    code: "CS433",
    name: "Advanced Computer Architecture",
    year: 4,
    topics: ["Processing Architectures", "Interfacing", "Storage", "Assembly Language", "Memory"],
    description: "Describe the architecture of both traditional and up-to-date microprocessors.",
    feedsFrom: ["CS220"],
    leadsTo: [],
  },
  {
    code: "CS430",
    name: "Advanced Concepts & Issues in Comp.Sci. 1",
    year: 4,
    topics: ["Research Methods", "Emerging Technologies", "Ethics", "Critical Analysis", "Innovation"],
    description: "Describe the background to several advanced research topics in the concepts, technologies or major theorems in the foundations of Computer Science.",
    feedsFrom: [],
    leadsTo: [],
  },
  {
    code: "CS404",
    name: "Artificial Intelligence & Language Processing",
    year: 4,
    topics: ["NLP", "Parsing", "Semantics", "Machine Translation", "Text Mining"],
    description: "Advanced AI techniques with a focus on natural language processing and understanding.",
    feedsFrom: ["CS310", "CS211"],
    leadsTo: [],
  },
  {
    code: "CS425",
    name: "Audio & Speech Processing",
    year: 4,
    topics: ["Signal Processing", "Speech Recognition", "Audio Synthesis", "Audio Effects", "Filtering"],
    description: "Illustrate the mathematical theory underlying each signal processing approach for speech and audio.",
    feedsFrom: [],
    leadsTo: [],
  },
  {
    code: "CS427",
    name: "Autonomous Mobile Robotics",
    year: 4,
    topics: ["Kinematics", "Sensors", "Locomotion", "Path Planning", "Perception"],
    description: "Design and programming of autonomous mobile robots including navigation and perception.",
    feedsFrom: ["CS422"],
    leadsTo: [],
  },
  {
    code: "CS426",
    name: "Computer Graphics",
    year: 4,
    topics: ["Image Formats", "Shading", "Animation", "Graphics Cards", "Data formats"],
    description: "Discuss the history of computer graphics; explain application areas of graphics and current areas of research.",
    feedsFrom: [],
    leadsTo: [],
  },
  {
    code: "CS410",
    name: "Computer Vision",
    year: 4,
    topics: ["Image Recognition", "Feature Detection", "Object Tracking", "Deep Learning", "Segmentation"],
    description: "Describe the different types of image sensors and identify a suitable camera setup based on the requirements of a computer vision system.",
    feedsFrom: ["CS401"],
    leadsTo: [],
  },
  {
    code: "CS416",
    name: "Cryptography",
    year: 4,
    topics: ["Encryption", "Public Key", "Hash Functions", "Authentication", "Factorization"],
    description: "Throughout the course students will obtain the ability to analyse the main areas of cryptology with an emphasis on implementation and cryptanalysis of concepts.",
    feedsFrom: ["CS320", "CS172"],
    leadsTo: [],
  },
  {
    code: "CS423",
    name: "Designing for Virtual Environments",
    year: 4,
    topics: ["VR Design", "3D Interaction", "Immersion", "User Experience", "Simulation"],
    description: "Relate user experience (UX) and usability guidelines to practical XR requirement and apply current tools/APIs/gaming engines for XR.",
    feedsFrom: ["CS280"],
    leadsTo: [],
  },
  {
    code: "CS440",
    name: "Final Year Project CSSE",
    year: 4,
    topics: ["Research", "Prototyping", "Evaluation", "Writing", "Presentation"],
    description: "Conduct a reasonably thorough investigation into a topic of interest, importance or relevance to computer science or its applications.",
    feedsFrom: ["CS353", "CS264", "CS357"],
    leadsTo: [],
  },
  {
    code: "CS356",
    name: "Image and Optical Processing",
    year: 4,
    topics: ["Image Filtering", "Edge Detection", "Compression", "Optical Computing", "Object Recognition"],
    description: "Discuss applications of image processing in academia and industry.",
    feedsFrom: [],
    leadsTo: [],
  },
  {
    code: "CS401",
    name: "Machine Learning & Neural Networks",
    year: 4,
    topics: ["Deep Learning", "Backpropagation", "CNNs", "Supervised", "Unsupervised"],
    description: "Distinguish the different categories of Machine Learning techniques and identify situations in which they might be used.",
    feedsFrom: ["CS211"],
    leadsTo: ["CS410"],
  },
  {
    code: "CS322",
    name: "Music Programming 2",
    year: 4,
    topics: ["Sound Synthesis", "MIR", "Audio programming", "MIDI", "Signal processing"],
    description: "Understand and employ machine learning/deep learning approaches in processing and analysing music and employ AI techniques for music classification and recommendation.",
    feedsFrom: [],
    leadsTo: [],
  },
  {
    code: "CS417",
    name: "Numerical Computation",
    year: 4,
    topics: ["Error explosion", "Numerical differentiation", "Non-linear equations", "Interpolation", "Error Control"],
    description: "Introduce students to the basic techniques of Numerical Computation used to solve real world problems from a variety of disciplines.",
    feedsFrom: [],
    leadsTo: [],
  },
  {
    code: "CS402",
    name: "Parallel & Distributed Systems",
    year: 4,
    topics: ["Edge Computing", "MPI", "Ubiquitous Computing", "Cloud Computing", "Scalability"],
    description: "Gain an understanding of the benefits & complexities surrounding parallel and distributed systems design in an Internet context.",
    feedsFrom: ["CS220", "CS240", "CS320"],
    leadsTo: [],
  },
  {
    code: "CS424",
    name: "Programming Language Design & Semantics",
    year: 4,
    topics: ["Parsing techniques", "Semantic Analysis", "Type Checking", "SAT", "SMT"],
    description: "Knowing the history of programming languages and understanding programming language design principles.",
    feedsFrom: ["CS310", "CS355", "CS370", "CS357"],
    leadsTo: [],
  },
  {
    code: "MP472",
    name: "Quantum Information Processing",
    year: 4,
    topics: ["Quantum teleportation", "Quantum Communication", "Quantum Error Correction", "Quantum Algorithms", "Quantum Computing"],
    description: "Define quantum bits, their composition and elementary quantum operations including measurement.",
    feedsFrom: ["CS370"],
    leadsTo: [],
  },
  {
    code: "CS422",
    name: "Robotics & Automation",
    year: 4,
    topics: ["Kinematics", "Control Systems", "Sensors", "Actuators", "Robotics"],
    description: "Describe the anatomy and features of a typical robot and evaluate mobility of a simple machine using number synthesis, joints and pairs.",
    feedsFrom: [],
    leadsTo: ["CS427"],
  },
];

const getModuleByCode = (code: string) => modules.find((m) => m.code === code);

const ModuleCard = ({ mod, isHighlighted, onToggle, isExpanded }: {
  mod: Module;
  isHighlighted: boolean;
  onToggle: () => void;
  isExpanded: boolean;
}) => {
  const feedsFromModules = mod.feedsFrom.map(getModuleByCode).filter(Boolean) as Module[];
  const leadsToModules = mod.leadsTo.map(getModuleByCode).filter(Boolean) as Module[];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-lg border transition-all duration-300 cursor-pointer ${
        isHighlighted
          ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
          : isExpanded
          ? "border-primary/50 bg-card"
          : "border-border bg-card hover:border-primary/30"
      }`}
      onClick={onToggle}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-2 py-1 bg-primary/20 text-primary rounded">
              {mod.code}
            </span>
            <span className="text-xs text-muted-foreground">Year {mod.year}</span>
          </div>
          <ChevronDown
            className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
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
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 border-t border-border/50 space-y-4">
              {feedsFromModules.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowLeft className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">Builds on</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {feedsFromModules.map((m) => (
                      <span
                        key={m.code}
                        className="text-xs font-medium px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full"
                      >
                        {m.code} — {m.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {leadsToModules.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <ArrowRight className="h-4 w-4 text-accent" />
                    <span className="text-sm font-semibold text-accent">Leads to</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {leadsToModules.map((m) => (
                      <span
                        key={m.code}
                        className="text-xs font-medium px-3 py-1.5 bg-accent/10 text-accent border border-accent/20 rounded-full"
                      >
                        {m.code} — {m.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {feedsFromModules.length === 0 && leadsToModules.length === 0 && (
                <p className="text-sm text-muted-foreground italic">
                  This is a standalone module with no direct prerequisite chain.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Modules = () => {
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const expandedModule = expandedCode ? getModuleByCode(expandedCode) : null;
  const highlightedCodes = new Set<string>();

  if (expandedModule) {
    expandedModule.feedsFrom.forEach((c) => highlightedCodes.add(c));
    expandedModule.leadsTo.forEach((c) => highlightedCodes.add(c));
  }

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
          <p className="text-muted-foreground mb-2 max-w-xl">
            Explore every module across your four-year computer science degree.
          </p>
          <p className="text-sm text-muted-foreground/70 mb-12 max-w-xl">
            Click any module to see what it builds on and where it leads.
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
                  .map((mod) => (
                    <ModuleCard
                      key={mod.code}
                      mod={mod}
                      isHighlighted={highlightedCodes.has(mod.code)}
                      isExpanded={expandedCode === mod.code}
                      onToggle={() =>
                        setExpandedCode(expandedCode === mod.code ? null : mod.code)
                      }
                    />
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
