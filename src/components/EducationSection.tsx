import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative z-10">
      <div className="mx-auto max-w-3xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          <span className="gradient-text">Education</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="glass-card mx-auto flex max-w-md flex-col items-center p-8 text-center"
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 neon-glow">
            <GraduationCap className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mb-1 text-xl font-bold">Bachelor of Engineering</h3>
          <p className="text-primary font-semibold">Computer Science & Engineering</p>
          <p className="mt-2 text-sm text-muted-foreground">VTU Belagavi</p>
          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>Graduated 2023</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Built a strong foundation in software development lifecycle, testing methodologies, and quality assurance principles.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
