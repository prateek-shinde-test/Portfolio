import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";

const responsibilities = [
  "Followed Agile Scrum methodology with sprint-based delivery cycles",
  "Analyzed business & functional requirements to create comprehensive test plans",
  "Conducted Sanity, Functional, Regression, and Database testing",
  "Used JIRA and HP ALM for defect tracking and test management",
  "Developed 65+ test scenarios and 210+ test cases with 6 RTMs",
  "Validated APIs using Postman for fund transfer and account services",
  "Performed SQL queries for backend data validation and verification",
  "Participated in daily stand-ups, sprint planning, and retrospectives",
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative z-10">
      <div className="mx-auto max-w-4xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          Work <span className="gradient-text">Experience</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-8" />

          {/* Role card */}
          <div className="relative ml-14 md:ml-20">
            <div className="absolute -left-[2.6rem] top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background neon-glow md:-left-[3.6rem] md:h-12 md:w-12">
              <Building2 className="h-5 w-5 text-primary" />
            </div>

            <div className="glass-card p-6 md:p-8">
              <div className="mb-1 flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-bold">Manual Test Engineer</h3>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Current</span>
              </div>
              <p className="mb-1 text-primary font-semibold">Cognizant Technology Solutions</p>
              <p className="mb-6 text-sm text-muted-foreground">Global IT Services • Investment Banking & Internet Banking</p>

              <div className="space-y-3">
                {responsibilities.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
