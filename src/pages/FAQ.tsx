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
    answer: "Java is the primary language used in CS161 — Introduction to Computer Science I. Previous programming experience is helpful but not required.",
  },
  {
    question: "Do I need prior coding experience?",
    answer: "No. The first-year modules like CS161 and CS171 are designed to take you from zero knowledge to a solid foundation in programming and computer science fundamentals.",
  },
  {
    question: "How does first-year maths connect to later modules?",
    answer: "Logic, truth tables, and complexity from CS172 — Computer Systems II are directly used in algorithms, computation theory, cryptography, and AI modules in later years.",
  },
  {
    question: "What pages are available on DegreeTree?",
    answer: "You can explore the Modules page to browse all modules across Years 1–4, the Topics page to discover grouped topic areas and which modules cover them, the About page, and this FAQ.",
  },
  {
    question: "What career paths do these modules lead to?",
    answer: "The degree covers software engineering, data science, cybersecurity, AI/ML, robotics, computer graphics, networking, and many more fields through its Year 1–4 modules.",
  },
  {
    question: "How are modules connected across years?",
    answer: "DegreeTree organises modules by year (1–4). For example, CS161 & CS162 (Year 1 programming) build into CS210 & CS211 (Year 2 data structures & algorithms), which feed into Year 3 and 4 modules like Software Design, AI, and Distributed Systems.",
  },
  {
    question: "How many modules are there in total?",
    answer: "There are modules spread across all four years — from foundational topics like programming and computer systems in Year 1, to specialised areas like Quantum Computing, Robotics, and Computer Vision in Year 4.",
  },
  {
    question: "What does the Topics page show?",
    answer: "The Topics page groups related areas together (e.g. 'AI & Machine Learning', 'Security & Cryptography') and shows you which modules fall under each topic area.",
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
