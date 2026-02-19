import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What programming language is taught in first year?",
    answer: "Python is the primary language used in CS101 — Introduction to Programming. It's chosen for its readability and broad applicability.",
  },
  {
    question: "Do I need prior coding experience?",
    answer: "No. The first-year modules are designed to take you from zero knowledge to a solid foundation in programming and computer science fundamentals.",
  },
  {
    question: "How does first-year maths connect to later modules?",
    answer: "Discrete mathematics, logic, and graph theory from CS103 are directly used in algorithms, databases, AI, and cryptography modules in later years.",
  },
  {
    question: "Can I track my progress through the degree?",
    answer: "Yes! Create a DegreeTree account to build a personalized learning profile that tracks your progress and shows how foundational modules contribute to your journey.",
  },
  {
    question: "What career paths do these modules lead to?",
    answer: "First-year foundations open doors to software engineering, data science, cybersecurity, AI/ML research, systems architecture, and many more fields.",
  },
  {
    question: "How are modules connected across years?",
    answer: "DegreeTree visualizes these connections. For example, Data Structures (Year 1) feeds directly into Algorithms (Year 2), Databases (Year 3), and Distributed Systems (Year 4).",
  },
];

const FAQ = () => {
  const [search, setSearch] = useState("");

  const filtered = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <section className="py-16">
        <div className="container max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h1>
          <p className="text-muted-foreground mb-8">
            Search and browse common questions about the CS degree.
          </p>

          <Input
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-8 bg-card border-border"
          />

          <Accordion type="single" collapsible className="space-y-2">
            {filtered.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">No matching questions found.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
