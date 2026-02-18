import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Trophy, Target, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "HSBC Equity Trade Book System",
    domain: "Investment Banking",
    client: "HSBC UK",
    description:
      "Led comprehensive testing of HSBC's critical equity trading platform, ensuring seamless real-time trade execution and data accuracy across the investment banking infrastructure.",
    details: [
      "Designed and executed 85+ test scenarios covering all trade lifecycle stages",
      "Validated real-time trade flows including order placement, modification, and cancellation",
      "Performed functional, smoke, and regression testing across multiple releases",
      "Authenticated trade execution processes and confirmation workflows against business rules",
      "Validated behavioral aspects, input domain coverage, and error handling for edge cases",
      "Generated detailed status reports and metrics for stakeholder communication",
    ],
    achievements: [
      { value: "40+", label: "Critical Defects Identified" },
      { value: "100%", label: "Test Coverage" },
      { value: "65%", label: "Defect Reduction" },
    ],
    tech: ["JIRA", "HP ALM", "SQL", "Excel", "Manual Testing"],
  },
  {
    title: "Union Bank Internet Banking",
    domain: "Banking",
    client: "Union Bank of India",
    description:
      "Executed comprehensive testing for Union Bank's Internet Banking platform, ensuring secure and reliable fund transfer operations and portal functionality for millions of users.",
    details: [
      "Tested RTGS, NEFT, and IMPS fund transfer operations with complete E2E validation",
      "Validated user portal and employee portal functionality ensuring role-based access control",
      "Performed integration testing between frontend portals and backend core systems",
      "Confirmed backend transactions using SQL queries in MySQL Workbench for data integrity",
      "Validated data flow and consistency across multiple banking systems and databases",
      "Tested authentication, MFA, OTP validation, and session management",
    ],
    achievements: [
      { value: "25+", label: "Critical Defects Found" },
      { value: "120+", label: "Test Cases Created" },
      { value: "70%", label: "UAT Defect Reduction" },
    ],
    tech: ["MySQL Workbench", "JIRA", "HP ALM", "SQL", "Chrome DevTools"],
  },
  {
    title: "Fund Transfer & Account Services API",
    domain: "API Testing",
    client: "Banking Services",
    description:
      "Conducted comprehensive API testing using Postman for critical banking services, ensuring reliable request/response flows and preventing defects before production deployment.",
    details: [
      "Set up Postman environments for Dev, QA, and UAT with proper variable management",
      "Validated API request/response flows for all 50+ banking endpoints",
      "Verified HTTP status codes for various scenarios (200, 201, 400, 401, 403, 404, 500)",
      "Tested fund transfer transaction API responses including success, failure, and pending states",
      "Created detailed API test documentation, collections, and automated reports using Newman",
      "Validated OAuth 2.0 flows, JWT token management, and API security (CORS, rate limiting)",
    ],
    achievements: [
      { value: "100%", label: "API Coverage" },
      { value: "15+", label: "Defects Prevented" },
      { value: "80%", label: "Incident Reduction" },
    ],
    tech: ["Postman", "Newman", "REST API", "OAuth 2.0", "JWT", "JSON"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i }}
              className="glass-card group cursor-pointer p-6 transition-all hover:neon-glow"
              onClick={() => setSelected(i)}
            >
              <div className="mb-3 flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">{project.domain}</Badge>
                <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-bold">{project.title}</h3>
              <p className="mb-2 text-xs text-primary">Client: {project.client}</p>
              <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{project.description}</p>

              {/* Mini achievements */}
              <div className="mb-4 grid grid-cols-3 gap-2">
                {project.achievements.map((a) => (
                  <div key={a.label} className="text-center">
                    <div className="text-sm font-bold text-primary">{a.value}</div>
                    <div className="text-[10px] text-muted-foreground leading-tight">{a.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map((t) => (
                  <span key={t} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">{t}</span>
                ))}
                {project.tech.length > 4 && (
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">+{project.tech.length - 4}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card relative max-h-[85vh] w-full max-w-2xl overflow-y-auto p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
              <Badge variant="secondary" className="mb-3">{projects[selected].domain}</Badge>
              <h3 className="mb-1 text-xl font-bold">{projects[selected].title}</h3>
              <p className="mb-4 text-sm text-primary">Client: {projects[selected].client}</p>
              <p className="mb-6 text-sm text-muted-foreground">{projects[selected].description}</p>

              {/* Achievements */}
              <div className="mb-6 grid grid-cols-3 gap-3">
                {projects[selected].achievements.map((a) => (
                  <div key={a.label} className="glass-card flex flex-col items-center p-3 text-center">
                    <Trophy className="mb-1 h-4 w-4 text-primary" />
                    <div className="text-lg font-bold gradient-text">{a.value}</div>
                    <div className="text-xs text-muted-foreground">{a.label}</div>
                  </div>
                ))}
              </div>

              {/* Responsibilities */}
              <h4 className="mb-3 flex items-center gap-2 font-semibold">
                <Target className="h-4 w-4 text-primary" /> Key Responsibilities
              </h4>
              <ul className="mb-6 space-y-2">
                {projects[selected].details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <h4 className="mb-3 flex items-center gap-2 font-semibold">
                <Shield className="h-4 w-4 text-primary" /> Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {projects[selected].tech.map((t) => (
                  <span key={t} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{t}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
