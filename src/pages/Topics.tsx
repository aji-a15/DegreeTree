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
  // Programming Fundamentals
  "Programming Fundamentals": [
    "CS161 - Introduction to Computer Science I",
    "CS162 - Introduction to Computer Science II",
  ],
  // Data Structures & Algorithms
  "Data Structures & Algorithms": [
    "CS210 - Algorithm And Data Structures 1",
    "CS211 - Algorithm And Data Structures 2",
  ],
  // Logic & Computation Theory
  "Logic & Computation": [
    "CS172 - Computer Systems II",
    "CS355 - Theory of Computation",
    "CS370 - Computation and Complexity",
  ],
  // Computer Architecture & Systems
  "Computer Architecture & Systems": [
    "CS171 - Computer Systems I",
    "CS220 - Computer Architecture",
    "CS240 - Operating Systems, Communication and Concurrency",
    "CS433 - Advanced Computer Architecture",
  ],
  // Databases & Web
  "Databases & Web Development": [
    "CS130 - Databases",
    "CS230 - Web Information Processing",
  ],
  // Software Engineering & Testing
  "Software Engineering & Testing": [
    "CS265 - Software Testing",
    "CS264 - Software Design",
    "CS335 - Software Engineering and Software Processing",
    "CS357 - Software Verification",
  ],
  // UX/UI & Design
  "UX/UI & Design": [
    "CS280 - Introduction to User Experience(UX), User Interface(UI) and Interaction Design",
    "CS423 - Designing for Virtual Environments",
  ],
  // Networking & Distributed Systems
  "Networks & Distributed Systems": [
    "CS320 - Computer Networks",
    "CS402 - Parallel & Distributed Systems",
  ],
  // AI & Machine Learning
  "AI & Machine Learning": [
    "CS401 - Machine Learning & Neural Networks",
    "CS410 - Computer Vision",
    "CS404 - Artificial Intelligence & Language Processing",
  ],
  // Programming Languages & Compilers
  "Programming Languages & Compilers": [
    "CS310 - Programming Languages & Compilers",
    "CS424 - Programming Language Design & Semantics",
  ],
  // Graphics, Vision & Image Processing
  "Graphics & Image Processing": [
    "CS426 - Computer Graphics",
    "CS356 - Image and Optical Processing",
  ],
  // Audio & Music
  "Audio & Signal Processing": [
    "CS425 - Audio & Speech Processing",
    "CS322 - Music Programming 2",
  ],
  // Robotics
  "Robotics & Automation": [
    "CS427 - Autonomous Mobile Robotics",
    "CS422 - Robotics & Automation",
  ],
  // Security & Cryptography
  "Security & Cryptography": [
    "CS416 - Cryptography",
  ],
  // Numerical Methods
  "Numerical Computation": [
    "CS417 - Numerical Computation",
  ],
  // Quantum
  "Quantum Computing": [
    "MP472 - Quantum Information Processing",
  ],
  // Project & Professional Skills
  "Project & Professional Skills": [
    "CS353 - Team Project",
    "CS440 - Final Year Project CSSE",
    "CS430 - Advanced Concepts & Issues in Comp.Sci. 1",
  ],
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
