import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

const topicToModules: Record<string, string[]> = {
  // Year 1
  "Variables": ["CS161 - Introduction to Computer Science I"],
  "Loops": ["CS161 - Introduction to Computer Science I"],
  "Functions": ["CS161 - Introduction to Computer Science I"],
  "Data Types": ["CS161 - Introduction to Computer Science I"],
  "Arrays": ["CS161 - Introduction to Computer Science I"],
  "Errors": ["CS171 - Computer Systems I"],
  "Testing": ["CS171 - Computer Systems I"],
  "Debugging": ["CS171 - Computer Systems I"],
  "Probab": ["CS171 - Computer Systems I"],
  "Visualisation": ["CS171 - Computer Systems I"],
  "Regular Expressions": ["CS162 - Introduction to Computer Science II"],
  "Recursion": ["CS162 - Introduction to Computer Science II"],
  "Methods": ["CS162 - Introduction to Computer Science II"],
  "Inheritance": ["CS162 - Introduction to Computer Science II"],
  "Truth Tables": ["CS172 - Computer Systems II"],
  "Conjunction": ["CS172 - Computer Systems II"],
  "Disjunction": ["CS172 - Computer Systems II"],
  "Quantifiers": ["CS172 - Computer Systems II"],
  "Complexity": ["CS172 - Computer Systems II", "CS370 - Computation and Complexity"],
  // Year 2
  "Binary Searches": ["CS210 - Algorithm And Data Structures 1"],
  "Sorting": ["CS162 - Introduction to Computer Science II", "CS210 - Algorithm And Data Structures 1"],
  "Stacks": ["CS210 - Algorithm And Data Structures 1"],
  "Queues": ["CS210 - Algorithm And Data Structures 1"],
  "Classes": ["CS210 - Algorithm And Data Structures 1"],
  "Data Representation": ["CS220 - Computer Architecture"],
  "Functional Logic Design": ["CS220 - Computer Architecture"],
  "Sequential Logic Design": ["CS220 - Computer Architecture"],
  "Memory Technology": ["CS220 - Computer Architecture"],
  "Number systems": ["CS220 - Computer Architecture"],
  "Binary Search Trees": ["CS211 - Algorithm And Data Structures 2"],
  "Tree traversals": ["CS211 - Algorithm And Data Structures 2"],
  "Hash Tables": ["CS211 - Algorithm And Data Structures 2"],
  "Graph representations": ["CS211 - Algorithm And Data Structures 2"],
  "Backtracking algorithms": ["CS211 - Algorithm And Data Structures 2"],
  "Memory management": ["CS240 - Operating Systems, Communication and Concurrency"],
  "Virtual architecture": ["CS240 - Operating Systems, Communication and Concurrency"],
  "Management algorithm efficiency": ["CS240 - Operating Systems, Communication and Concurrency"],
  "Concurrency control": ["CS240 - Operating Systems, Communication and Concurrency"],
  "Space management options": ["CS240 - Operating Systems, Communication and Concurrency"],
  "Structured Query Language": ["CS130 - Databases"],
  "Conceptual data modelling": ["CS130 - Databases"],
  "Data integrity": ["CS130 - Databases"],
  "Relational algebra": ["CS130 - Databases"],
  "Database security": ["CS130 - Databases"],
  "Design": ["CS280 - Introduction to User Experience(UX), User Interface(UI) and Interaction Design"],
  "Development": ["CS280 - Introduction to User Experience(UX), User Interface(UI) and Interaction Design"],
  "Evaluation": ["CS280 - Introduction to User Experience(UX), User Interface(UI) and Interaction Design", "CS440 - Final Year Project CSSE"],
  "Iterative development": ["CS280 - Introduction to User Experience(UX), User Interface(UI) and Interaction Design"],
  "Analysing": ["CS335 - Software Engineering and Software Processing"],
  "Designing": ["CS335 - Software Engineering and Software Processing"],
  "Implementing": ["CS335 - Software Engineering and Software Processing"],
  "Maintaining software": ["CS335 - Software Engineering and Software Processing"],
  "Testing methods": ["CS265 - Software Testing"],
  "Testability": ["CS265 - Software Testing"],
  "Software quality": ["CS265 - Software Testing"],
  "Phases of testing": ["CS265 - Software Testing"],
  "Unit testing": ["CS265 - Software Testing"],
  "Finite automata": ["CS355 - Theory of Computation"],
  "Turing machines": ["CS355 - Theory of Computation", "CS370 - Computation and Complexity"],
  "Context-free languages": ["CS355 - Theory of Computation"],
  "Pushdown automata": ["CS355 - Theory of Computation"],
  "Frameworks": ["CS230 - Web Information Processing"],
  "Web services": ["CS230 - Web Information Processing"],
  "Database-driven": ["CS230 - Web Information Processing"],
  "Web applications": ["CS230 - Web Information Processing"],
  // Year 3
  "Computability theory": ["CS370 - Computation and Complexity"],
  "Computational complexity": ["CS370 - Computation and Complexity"],
  "Complexity classes": ["CS370 - Computation and Complexity"],
  "Rice's theorem": ["CS370 - Computation and Complexity"],
  "Packet switching": ["CS320 - Computer Networks"],
  "Application Layer": ["CS320 - Computer Networks"],
  "Transport Layer": ["CS320 - Computer Networks"],
  "Network Layer": ["CS320 - Computer Networks"],
  "Link Layer": ["CS320 - Computer Networks"],
  "Formal grammars": ["CS310 - Programming Languages & Compilers"],
  "Predictive parsing": ["CS310 - Programming Languages & Compilers"],
  "Code generation": ["CS310 - Programming Languages & Compilers"],
  "Interpreters": ["CS310 - Programming Languages & Compilers"],
  "Assemblers": ["CS310 - Programming Languages & Compilers"],
  "Software analysis": ["CS264 - Software Design"],
  "Design patterns": ["CS264 - Software Design"],
  "OOA/D": ["CS264 - Software Design"],
  "Software development": ["CS264 - Software Design"],
  "Design by Contract": ["CS357 - Software Verification"],
  "Hoare logic": ["CS357 - Software Verification"],
  "SMT solvers": ["CS357 - Software Verification"],
  "Formal proofs": ["CS357 - Software Verification"],
  "Program verification": ["CS357 - Software Verification"],
  "Project management": ["CS353 - Team Project"],
  "Meeting skills": ["CS353 - Team Project"],
  "SCRUM": ["CS353 - Team Project"],
  "DevOps": ["CS353 - Team Project"],
  // Year 4
  "Processing Architectures": ["CS433 - Advanced Computer Architecture"],
  "Interfacing": ["CS433 - Advanced Computer Architecture"],
  "Storage": ["CS433 - Advanced Computer Architecture"],
  "Assembly Language": ["CS433 - Advanced Computer Architecture"],
  "Memory": ["CS433 - Advanced Computer Architecture"],
  "Research Methods": ["CS430 - Advanced Concepts & Issues in Comp.Sci. 1"],
  "Emerging Technologies": ["CS430 - Advanced Concepts & Issues in Comp.Sci. 1"],
  "Ethics": ["CS430 - Advanced Concepts & Issues in Comp.Sci. 1"],
  "Critical Analysis": ["CS430 - Advanced Concepts & Issues in Comp.Sci. 1"],
  "Innovation": ["CS430 - Advanced Concepts & Issues in Comp.Sci. 1"],
  "NLP": ["CS404 - Artificial Intelligence & Language Processing"],
  "Parsing": ["CS404 - Artificial Intelligence & Language Processing"],
  "Semantics": ["CS404 - Artificial Intelligence & Language Processing"],
  "Machine Translation": ["CS404 - Artificial Intelligence & Language Processing"],
  "Text Mining": ["CS404 - Artificial Intelligence & Language Processing"],
  "Signal Processing": ["CS425 - Audio & Speech Processing"],
  "Speech Recognition": ["CS425 - Audio & Speech Processing"],
  "Audio Synthesis": ["CS425 - Audio & Speech Processing"],
  "Audio Effects": ["CS425 - Audio & Speech Processing"],
  "Filtering": ["CS425 - Audio & Speech Processing"],
  "Kinematics": ["CS427 - Autonomous Mobile Robotics", "CS422 - Robotics & Automation"],
  "Sensors": ["CS427 - Autonomous Mobile Robotics", "CS422 - Robotics & Automation"],
  "Locomotion": ["CS427 - Autonomous Mobile Robotics"],
  "Path Planning": ["CS427 - Autonomous Mobile Robotics"],
  "Perception": ["CS427 - Autonomous Mobile Robotics"],
  "Image Formats": ["CS426 - Computer Graphics"],
  "Shading": ["CS426 - Computer Graphics"],
  "Animation": ["CS426 - Computer Graphics"],
  "Graphics Cards": ["CS426 - Computer Graphics"],
  "Data formats": ["CS426 - Computer Graphics"],
  "Image Recognition": ["CS410 - Computer Vision"],
  "Feature Detection": ["CS410 - Computer Vision"],
  "Object Tracking": ["CS410 - Computer Vision"],
  "Deep Learning": ["CS410 - Computer Vision", "CS401 - Machine Learning & Neural Networks"],
  "Segmentation": ["CS410 - Computer Vision"],
  "Encryption": ["CS416 - Cryptography"],
  "Public Key": ["CS416 - Cryptography"],
  "Hash Functions": ["CS416 - Cryptography"],
  "Authentication": ["CS416 - Cryptography"],
  "Factorization": ["CS416 - Cryptography"],
  "VR Design": ["CS423 - Designing for Virtual Environments"],
  "3D Interaction": ["CS423 - Designing for Virtual Environments"],
  "Immersion": ["CS423 - Designing for Virtual Environments"],
  "User Experience": ["CS423 - Designing for Virtual Environments"],
  "Simulation": ["CS423 - Designing for Virtual Environments"],
  "Research": ["CS440 - Final Year Project CSSE"],
  "Prototyping": ["CS440 - Final Year Project CSSE"],
  "Writing": ["CS440 - Final Year Project CSSE"],
  "Presentation": ["CS440 - Final Year Project CSSE"],
  "Image Filtering": ["CS356 - Image and Optical Processing"],
  "Edge Detection": ["CS356 - Image and Optical Processing"],
  "Compression": ["CS356 - Image and Optical Processing"],
  "Optical Computing": ["CS356 - Image and Optical Processing"],
  "Object Recognition": ["CS356 - Image and Optical Processing"],
  "Backpropagation": ["CS401 - Machine Learning & Neural Networks"],
  "CNNs": ["CS401 - Machine Learning & Neural Networks"],
  "Supervised": ["CS401 - Machine Learning & Neural Networks"],
  "Unsupervised": ["CS401 - Machine Learning & Neural Networks"],
  "Sound Synthesis": ["CS322 - Music Programming 2"],
  "MIR": ["CS322 - Music Programming 2"],
  "Audio programming": ["CS322 - Music Programming 2"],
  "MIDI": ["CS322 - Music Programming 2"],
  "Signal processing": ["CS322 - Music Programming 2"],
  "Error explosion": ["CS417 - Numerical Computation"],
  "Numerical differentiation": ["CS417 - Numerical Computation"],
  "Non-linear equations": ["CS417 - Numerical Computation"],
  "Interpolation": ["CS417 - Numerical Computation"],
  "Error Control": ["CS417 - Numerical Computation"],
  "Edge Computing": ["CS402 - Parallel & Distributed Systems"],
  "MPI": ["CS402 - Parallel & Distributed Systems"],
  "Ubiquitous Computing": ["CS402 - Parallel & Distributed Systems"],
  "Cloud Computing": ["CS402 - Parallel & Distributed Systems"],
  "Scalability": ["CS402 - Parallel & Distributed Systems"],
  "Parsing techniques": ["CS424 - Programming Language Design & Semantics"],
  "Semantic Analysis": ["CS424 - Programming Language Design & Semantics"],
  "Type Checking": ["CS424 - Programming Language Design & Semantics"],
  "SAT": ["CS424 - Programming Language Design & Semantics"],
  "SMT": ["CS424 - Programming Language Design & Semantics"],
  "Quantum teleportation": ["MP472 - Quantum Information Processing"],
  "Quantum Communication": ["MP472 - Quantum Information Processing"],
  "Quantum Error Correction": ["MP472 - Quantum Information Processing"],
  "Quantum Algorithms": ["MP472 - Quantum Information Processing"],
  "Quantum Computing": ["MP472 - Quantum Information Processing"],
  "Control Systems": ["CS422 - Robotics & Automation"],
  "Actuators": ["CS422 - Robotics & Automation"],
  "Robotics": ["CS422 - Robotics & Automation"],
};

const allTopics = Object.keys(topicToModules);

const Topics = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  return (
    <Layout>
      <section className="py-16">
        <div className="container max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Explore <span className="text-primary">Topics</span>
          </motion.h1>
          <p className="text-muted-foreground mb-10">
            Select a topic to discover which modules cover it.
          </p>

          <Select onValueChange={setSelectedTopic} value={selectedTopic}>
            <SelectTrigger className="w-full bg-card border-border">
              <SelectValue placeholder="Choose a topic..." />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border z-50">
              {allTopics.map((topic) => (
                <SelectItem key={topic} value={topic}>
                  {topic}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedTopic && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 p-6 bg-card rounded-lg border border-border"
            >
              <h3 className="text-lg font-serif font-bold mb-3">
                Modules containing "{selectedTopic}"
              </h3>
              <ul className="space-y-2">
                {topicToModules[selectedTopic]?.map((mod) => (
                  <li key={mod}>
                    <Link
                      to="/modules"
                      className="text-primary hover:text-highlight transition-colors underline underline-offset-4"
                    >
                      {mod}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Topics;
