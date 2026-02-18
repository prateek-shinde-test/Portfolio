import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bug, FileText, Wrench, GitBranch, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Testing",
    icon: Bug,
    skills: [
      { name: "Manual Testing", level: "EXPERT" },
      { name: "Functional Testing", level: "EXPERT" },
      { name: "API Testing", level: "ADVANCED" },
      { name: "Database Testing", level: "ADVANCED" },
      { name: "Regression Testing", level: "EXPERT" },
    ],
  },
  {
    title: "Tools & Tech",
    icon: Wrench,
    skills: [
      { name: "Postman", level: "ADVANCED" },
      { name: "SQL / MySQL", level: "ADVANCED" },
      { name: "JIRA", level: "EXPERT" },
      { name: "HP ALM", level: "PROFICIENT" },
      { name: "MySQL Workbench", level: "ADVANCED" },
    ],
  },
  {
    title: "Domain",
    icon: Globe,
    skills: [
      { name: "Banking", level: "EXPERT" },
      { name: "Investment Banking", level: "EXPERT" },
      { name: "Fund Transfers", level: "EXPERT" },
      { name: "Trade Operations", level: "ADVANCED" },
    ],
  },
  {
    title: "Process",
    icon: GitBranch,
    skills: [
      { name: "Agile / Scrum", level: "EXPERT" },
      { name: "SDLC", level: "EXPERT" },
      { name: "STLC", level: "EXPERT" },
      { name: "Defect Management", level: "EXPERT" },
    ],
  },
];

const levelColor: Record<string, string> = {
  EXPERT: "text-primary bg-primary/10",
  ADVANCED: "text-accent bg-accent/10",
  PROFICIENT: "text-muted-foreground bg-muted",
};

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          Skills & <span className="gradient-text">Expertise</span>
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * ci }}
              className="glass-card group p-6 transition-all hover:neon-glow"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <cat.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{cat.title}</h3>
              </div>

              <div className="space-y-2.5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{skill.name}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${levelColor[skill.level] || "text-muted-foreground bg-muted"}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
