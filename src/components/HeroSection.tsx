import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const fullText = "Prateek Shinde - Software Test Engineer";

const sqlLines = [
  { parts: [{ type: "keyword", text: "SELECT" }, { type: "plain", text: " * " }, { type: "keyword", text: "FROM" }, { type: "plain", text: " qa_engineers" }] },
  { parts: [{ type: "keyword", text: "WHERE" }, { type: "plain", text: " name = " }, { type: "string", text: "'Prateek Shinde'" }] },
  { parts: [{ type: "keyword", text: "AND" }, { type: "plain", text: " test_cases_created > " }, { type: "value", text: "210" }] },
  { parts: [{ type: "keyword", text: "AND" }, { type: "plain", text: " expertise " }, { type: "keyword", text: "IN" }, { type: "plain", text: " (" }, { type: "string", text: "'Banking'" }, { type: "plain", text: ", " }, { type: "string", text: "'Investment'" }, { type: "plain", text: ", " }, { type: "string", text: "'API Testing'" }, { type: "plain", text: ")" }] },
  { parts: [{ type: "keyword", text: "AND" }, { type: "plain", text: " location = " }, { type: "string", text: "'Navi Mumbai'" }] },
  { parts: [{ type: "keyword", text: "ORDER BY" }, { type: "plain", text: " impact " }, { type: "keyword", text: "DESC" }, { type: "plain", text: ";" }] },
  { parts: [{ type: "comment", text: "-- 1 row returned 🐛" }] },
];

const HeroSection = () => {
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTyped(fullText.slice(0, index + 1));
        setIndex(index + 1);
      }, 45);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background to-accent/10" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="text-sm font-medium text-primary">🐛 Open to Opportunities</span>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mx-auto mb-8 flex h-32 w-32 items-center justify-center rounded-full border-2 border-primary/50 bg-muted neon-glow"
        >
          <span className="text-4xl font-bold gradient-text">PS</span>
        </motion.div>

        {/* Typing title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-2xl font-bold leading-tight md:text-4xl lg:text-5xl"
        >
          <span className="neon-text">{typed}</span>
          <span className="animate-pulse text-primary">|</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mx-auto mb-8 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          QA Engineer 🐞 Bug Hunter 🐜 Quality Advocate | 3+ Years in Banking & Capital Markets
        </motion.p>

        {/* SQL Query Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mx-auto mb-10 max-w-xl rounded-lg border border-border/40 bg-card/60 p-4 font-mono text-xs text-left backdrop-blur-sm md:text-sm"
        >
          {sqlLines.map((line, i) => (
            <div key={i} className="leading-relaxed">
              {line.parts.map((part, j) => (
                <span
                  key={j}
                  className={
                    part.type === "keyword" ? "text-primary font-semibold" :
                    part.type === "string" ? "text-accent" :
                    part.type === "value" ? "text-primary" :
                    part.type === "comment" ? "text-muted-foreground italic" :
                    "text-foreground/70"
                  }
                >
                  {part.text}
                </span>
              ))}
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button onClick={() => scrollTo("projects")} className="animate-pulse-glow bg-primary text-primary-foreground hover:bg-primary/90">
            View Projects
          </Button>
          <a href="/Prateek_Shinde-CV.pdf" download>
            <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </a>
          <Button variant="ghost" onClick={() => scrollTo("contact")} className="hover:text-primary">
            Contact Me
          </Button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/prateek-shinde-3120413a9/", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/Prateekshinde01", label: "GitHub" },
            { icon: Mail, href: "mailto:prateekshinde018@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full border border-border/50 p-3 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:neon-glow"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-16"
        >
          <button onClick={() => scrollTo("about")} aria-label="Scroll down" className="text-muted-foreground animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
