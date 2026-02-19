import { Link } from "react-router-dom";
import { TreeDeciduous } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nav-bg border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <TreeDeciduous className="h-5 w-5 text-primary" />
          <span className="font-serif font-bold text-primary">DegreeTree</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          <Link to="/modules" className="hover:text-primary transition-colors">Modules</Link>
          <Link to="/topics" className="hover:text-primary transition-colors">Topics</Link>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 DegreeTree — Maynooth University CS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
