import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Languages, Calendar } from "lucide-react";

const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Test Scenarios", value: 65, suffix: "+" },
  { label: "Test Cases", value: 210, suffix: "+" },
  { label: "Test Coverage", value: 100, suffix: "%" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl font-bold gradient-text md:text-4xl">
      {count}{suffix}
    </span>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative z-10">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center text-3xl font-bold md:text-4xl"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 md:p-8"
          >
            <p className="mb-4 leading-relaxed text-muted-foreground">
              A dedicated <span className="text-primary font-semibold">QA Engineer</span> with hands-on experience in functional testing, API testing, and database validation across Banking and Investment Banking domains.
            </p>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              Specialized in end-to-end testing for critical financial systems including <span className="text-primary font-semibold">HSBC's Equity Trade Book System</span> and <span className="text-primary font-semibold">Union Bank's Internet Banking</span> operations. Proficient in creating comprehensive test documentation, executing complex test scenarios, and ensuring data integrity through SQL validation.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Passionate about quality assurance methodologies, Agile practices, and delivering defect-free software. Now transitioning to <span className="text-accent font-semibold">Java Backend Development</span>, bringing a quality-first mindset to building robust systems.
            </p>

            {/* Personal info */}
            <div className="mt-6 flex flex-wrap gap-4">
              {[
                { icon: MapPin, text: "Navi Mumbai, India" },
                { icon: Languages, text: "English, Hindi, Kannada, Marathi" },
                { icon: Calendar, text: "31/08/2001" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card flex flex-col items-center justify-center p-6 text-center">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <span className="mt-2 text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
