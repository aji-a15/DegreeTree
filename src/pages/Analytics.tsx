import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "Programming", firstYear: 100, advanced: 85, industry: 95 },
  { name: "Computer Systems", firstYear: 100, advanced: 70, industry: 75 },
  { name: "Maths for CS", firstYear: 100, advanced: 90, industry: 60 },
  { name: "Data Structures", firstYear: 100, advanced: 95, industry: 90 },
];

const connectionData = [
  { topic: "Loops & Control Flow", connections: 12 },
  { topic: "Data Types", connections: 10 },
  { topic: "Discrete Maths", connections: 14 },
  { topic: "Binary & Logic", connections: 8 },
  { topic: "Sorting Algorithms", connections: 11 },
  { topic: "Graph Theory", connections: 13 },
];

const Analytics = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Analytics & <span className="text-primary">Insights</span>
          </motion.h1>
          <p className="text-muted-foreground mb-12 max-w-xl">
            See how first-year topics branch out and become essential across academia and industry.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-card rounded-lg border border-border"
            >
              <h3 className="text-lg font-serif font-bold mb-6">Topic Connections to Advanced Modules</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={connectionData} layout="vertical">
                  <XAxis type="number" tick={{ fill: "hsl(80, 10%, 70%)", fontSize: 12 }} />
                  <YAxis dataKey="topic" type="category" width={120} tick={{ fill: "hsl(80, 10%, 70%)", fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(82, 15%, 25%)",
                      border: "1px solid hsl(82, 12%, 42%)",
                      borderRadius: "8px",
                      color: "hsl(60, 20%, 95%)",
                    }}
                  />
                  <Bar dataKey="connections" radius={[0, 4, 4, 0]}>
                    {connectionData.map((_, i) => (
                      <Cell key={i} fill={`hsl(152, ${50 + i * 5}%, ${35 + i * 3}%)`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 bg-card rounded-lg border border-border"
            >
              <h3 className="text-lg font-serif font-bold mb-6">Module Relevance: Advanced Study vs Industry</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <XAxis dataKey="name" tick={{ fill: "hsl(80, 10%, 70%)", fontSize: 11 }} />
                  <YAxis tick={{ fill: "hsl(80, 10%, 70%)", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(82, 15%, 25%)",
                      border: "1px solid hsl(82, 12%, 42%)",
                      borderRadius: "8px",
                      color: "hsl(60, 20%, 95%)",
                    }}
                  />
                  <Bar dataKey="advanced" name="Advanced Study" fill="hsl(152, 62%, 38%)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="industry" name="Industry Relevance" fill="hsl(152, 45%, 55%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Analytics;
