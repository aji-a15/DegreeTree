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
  "Variables": ["CS101 - Introduction to Programming"],
  "Loops": ["CS101 - Introduction to Programming"],
  "Functions": ["CS101 - Introduction to Programming"],
  "Data Types": ["CS101 - Introduction to Programming"],
  "Debugging": ["CS101 - Introduction to Programming"],
  "Binary": ["CS102 - Computer Systems"],
  "Logic Gates": ["CS102 - Computer Systems"],
  "Memory": ["CS102 - Computer Systems"],
  "CPU Architecture": ["CS102 - Computer Systems"],
  "Assembly": ["CS102 - Computer Systems"],
  "Discrete Maths": ["CS103 - Mathematics for Computing"],
  "Set Theory": ["CS103 - Mathematics for Computing"],
  "Logic": ["CS103 - Mathematics for Computing"],
  "Combinatorics": ["CS103 - Mathematics for Computing"],
  "Graph Theory": ["CS103 - Mathematics for Computing"],
  "Arrays": ["CS104 - Data Structures & Algorithms"],
  "Linked Lists": ["CS104 - Data Structures & Algorithms"],
  "Sorting": ["CS104 - Data Structures & Algorithms"],
  "Searching": ["CS104 - Data Structures & Algorithms"],
  "Complexity": ["CS104 - Data Structures & Algorithms"],
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
