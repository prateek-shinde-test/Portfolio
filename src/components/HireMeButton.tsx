const HireMeButton = () => {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg animate-pulse-glow transition-transform hover:scale-105"
      aria-label="Hire Me"
    >
      Hire Me 🚀
    </button>
  );
};

export default HireMeButton;
