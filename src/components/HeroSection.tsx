import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-hero-bg">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[12rem] md:text-[18rem] font-serif font-black text-watermark/40 leading-none tracking-tighter">
          DegreeTree
        </span>
      </div>

      {/* Tree SVG decoration */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
        <svg width="200" height="400" viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="100" y1="400" x2="100" y2="120" stroke="currentColor" strokeWidth="4" className="text-foreground" />
          <line x1="100" y1="200" x2="50" y2="130" stroke="currentColor" strokeWidth="3" className="text-foreground" />
          <line x1="100" y1="200" x2="150" y2="130" stroke="currentColor" strokeWidth="3" className="text-foreground" />
          <line x1="100" y1="160" x2="60" y2="80" stroke="currentColor" strokeWidth="3" className="text-foreground" />
          <line x1="100" y1="160" x2="140" y2="80" stroke="currentColor" strokeWidth="3" className="text-foreground" />
          <ellipse cx="50" cy="115" rx="25" ry="30" className="fill-foreground/30" />
          <ellipse cx="150" cy="115" rx="25" ry="30" className="fill-foreground/30" />
          <ellipse cx="60" cy="65" rx="25" ry="30" className="fill-foreground/30" />
          <ellipse cx="140" cy="65" rx="25" ry="30" className="fill-foreground/30" />
          <ellipse cx="100" cy="100" rx="28" ry="35" className="fill-foreground/30" />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Map Your{" "}
            <span className="text-primary italic">Computer Science</span>{" "}
            Journey
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
            DegreeTree helps first-year CS students understand their core modules and see how they branch into advanced topics and pathways across the degree.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/signup">Join Us</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
