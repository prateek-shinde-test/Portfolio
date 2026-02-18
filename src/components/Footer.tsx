import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t border-border/30 px-4 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">© 2026 Prateek Shinde. Crafted with precision and attention to detail.</p>

        <div className="flex items-center gap-4">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/prateek-shinde-3120413a9/" },
            { icon: Github, href: "https://github.com/Prateekshinde01" },
            { icon: Mail, href: "mailto:prateekshinde018@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <button onClick={scrollToTop} aria-label="Back to top" className="rounded-full border border-border/50 p-2 text-muted-foreground transition-all hover:border-primary hover:text-primary">
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
