import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const contactCards = [
  { icon: Phone, label: "+91-7038897670", href: "tel:+917038897670" },
  { icon: Mail, label: "prateekshinde018@gmail.com", href: "mailto:prateekshinde018@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/prateek-shinde-3120413a9/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Prateekshinde01" },
  { icon: MapPin, label: "Navi Mumbai, India", href: null },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative z-10">
      <div className="mx-auto max-w-5xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card space-y-4 p-6"
          >
            <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="border-border/50 bg-background/50" />
            <Input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="border-border/50 bg-background/50" />
            <Textarea placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} className="border-border/50 bg-background/50" />
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-3"
          >
            {contactCards.map(({ icon: Icon, label, href }) => {
              const content = (
                <div className="glass-card flex items-center gap-4 p-4 transition-all hover:neon-glow">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{label}</span>
                </div>
              );
              return href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">{content}</a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
