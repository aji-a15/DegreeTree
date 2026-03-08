import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Layout>
      <section className="py-16 flex items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-8 bg-card rounded-lg border border-border"
        >
          <h1 className="text-3xl font-serif font-bold mb-2">Join DegreeTree</h1>
          <p className="text-muted-foreground mb-8">Create your account to track your CS journey</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" placeholder="Your name" className="bg-muted border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="firstname.lastname.year@mumail.ie" className="bg-muted border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" className="bg-muted border-border" />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Create Account
            </Button>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">Log in</Link>
          </p>
        </motion.div>
      </section>
    </Layout>
  );
};

export default SignUp;
