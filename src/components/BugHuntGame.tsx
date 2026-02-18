import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const bugs = ["🐛", "🐞", "🐜", "🪲"];
const difficulties: Record<string, { interval: number; duration: number }> = {
  easy: { interval: 1200, duration: 30 },
  medium: { interval: 900, duration: 30 },
  hard: { interval: 600, duration: 25 },
  expert: { interval: 400, duration: 20 },
};

interface Bug {
  id: number;
  emoji: string;
  x: number;
  y: number;
}

const BugHuntGame = () => {
  const [difficulty, setDifficulty] = useState("medium");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [activeBugs, setActiveBugs] = useState<Bug[]>([]);
  const arenaRef = useRef<HTMLDivElement>(null);
  const bugIdRef = useRef(0);
  const spawnRef = useRef<ReturnType<typeof setInterval>>();
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const startGame = useCallback(() => {
    setScore(0);
    setTimeLeft(difficulties[difficulty].duration);
    setActiveBugs([]);
    setPlaying(true);
    setGameOver(false);
    bugIdRef.current = 0;
  }, [difficulty]);

  useEffect(() => {
    if (!playing) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          setPlaying(false);
          setGameOver(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [playing]);

  useEffect(() => {
    if (!playing) {
      clearInterval(spawnRef.current);
      return;
    }
    spawnRef.current = setInterval(() => {
      const id = ++bugIdRef.current;
      const emoji = bugs[Math.floor(Math.random() * bugs.length)];
      const x = 5 + Math.random() * 85;
      const y = 5 + Math.random() * 85;
      setActiveBugs((prev) => [...prev.slice(-8), { id, emoji, x, y }]);
      setTimeout(() => {
        setActiveBugs((prev) => prev.filter((b) => b.id !== id));
      }, 2000);
    }, difficulties[difficulty].interval);
    return () => clearInterval(spawnRef.current);
  }, [playing, difficulty]);

  useEffect(() => {
    if (gameOver && score > highScore) setHighScore(score);
  }, [gameOver, score, highScore]);

  const catchBug = (id: number) => {
    setActiveBugs((prev) => prev.filter((b) => b.id !== id));
    setScore((s) => s + 1);
  };

  return (
    <section className="section-padding relative z-10">
      <div className="mx-auto max-w-2xl">
        <div className="glass-card p-6 md:p-8">
          <h3 className="mb-2 text-center text-xl font-bold">
            🎮 Bug Hunt <span className="gradient-text">Challenge</span>
          </h3>
          <p className="mb-6 text-center text-sm text-muted-foreground">
            Think you can catch bugs as fast as a QA engineer? Click the bugs before they escape!
          </p>

          {/* Difficulty */}
          <div className="mb-4 flex flex-wrap justify-center gap-2">
            {Object.keys(difficulties).map((d) => (
              <button
                key={d}
                onClick={() => !playing && setDifficulty(d)}
                className={`rounded-full px-3 py-1 text-xs font-semibold capitalize transition-all ${
                  d === difficulty ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="mb-4 grid grid-cols-3 gap-3 text-center">
            <div className="glass-card p-2">
              <div className="text-lg font-bold text-primary">{score}</div>
              <div className="text-[10px] text-muted-foreground">Bugs Caught</div>
            </div>
            <div className="glass-card p-2">
              <div className="text-lg font-bold text-primary">{timeLeft}</div>
              <div className="text-[10px] text-muted-foreground">Time Left</div>
            </div>
            <div className="glass-card p-2">
              <div className="text-lg font-bold text-primary">{highScore}</div>
              <div className="text-[10px] text-muted-foreground">High Score</div>
            </div>
          </div>

          {/* Arena */}
          <div
            ref={arenaRef}
            className="relative mb-4 h-48 overflow-hidden rounded-lg border border-border/30 bg-background/50 md:h-64"
          >
            {activeBugs.map((bug) => (
              <motion.button
                key={bug.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                onClick={() => catchBug(bug.id)}
                className="absolute cursor-pointer text-2xl transition-transform hover:scale-125 md:text-3xl"
                style={{ left: `${bug.x}%`, top: `${bug.y}%` }}
              >
                {bug.emoji}
              </motion.button>
            ))}
            {!playing && !gameOver && (
              <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
                Click Start to begin!
              </div>
            )}
            {gameOver && (
              <div className="flex h-full flex-col items-center justify-center">
                <div className="text-2xl font-bold gradient-text mb-1">Game Over!</div>
                <div className="text-sm text-muted-foreground">You caught {score} bugs!</div>
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex justify-center">
            {!playing && !gameOver && (
              <button onClick={startGame} className="rounded-lg bg-primary px-6 py-2 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90">
                Start Hunt
              </button>
            )}
            {gameOver && (
              <button onClick={startGame} className="rounded-lg bg-primary px-6 py-2 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90">
                Play Again
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BugHuntGame;
