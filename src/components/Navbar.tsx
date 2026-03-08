import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, TreeDeciduous } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "TOPICS", path: "/topics" },
  { label: "MODULES", path: "/modules" },
  { label: "ABOUT", path: "/about" },
  { label: "FAQ", path: "/faq" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-nav-bg/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">

        <Link to="/" className="flex items-center gap-2">
          <TreeDeciduous className="h-7 w-7 text-primary" />
          <span className="text-xl font-serif font-bold text-primary">
            DegreeTree
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold tracking-wider transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="navOutline" size="sm" asChild>
            <Link to="/login">Login</Link>
          </Button>

          <Button variant="navFilled" size="sm" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

      </div>

      {mobileOpen && (
        <div className="md:hidden bg-nav-bg border-t border-border px-6 py-4 space-y-4">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-semibold tracking-wider ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex gap-3 pt-2">

            <Button variant="navOutline" size="sm" asChild>
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                Login
              </Link>
            </Button>

            <Button variant="navFilled" size="sm" asChild>
              <Link to="/signup" onClick={() => setMobileOpen(false)}>
                Sign Up
              </Link>
            </Button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;