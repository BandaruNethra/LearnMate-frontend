'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Timer, Zap, Keyboard, Trophy, AlertCircle, RefreshCw } from 'lucide-react';

const CODE_SNIPPETS = [
  // React & Next.js
  'const [user, setUser] = useState(null);',
  'useEffect(() => { console.log("Mounted"); }, []);',
  'export default async function Page() {}',
  'const { data: session } = useSession();',
  '<div className="grid grid-cols-1 md:grid-cols-3">',
  'const filtered = items.filter(i => i.active);',
  
  // Python & Logic
  'def get_data(url: str) -> dict:',
  'with open("config.json", "r") as f:',
  'result = [x**2 for x in range(10) if x > 5]',
  'import pandas as pd; df = pd.read_csv("data.csv")',
  'async def main(): await asyncio.gather(*tasks)',
  
  // Backend & SQL
  'app.post("/api/v1/auth", (req, res) => {});',
  'SELECT * FROM users WHERE id = $1 LIMIT 10;',
  'const response = await fetch(url, { method: "POST" });',
  'db.collection("posts").find({ author: "gemini" });',
  'const token = jwt.sign({ id: user.id }, secret);',
  
  // CSS & Tailwind
  'flex items-center justify-center min-h-screen',
  'bg-gradient-to-r from-blue-500 to-indigo-600',
  'animate-pulse transition-all duration-300',
  'hover:shadow-xl transform hover:-translate-y-1',
  'backdrop-blur-md bg-white/30 border border-white/10',

  // Terminal & Git
  'git commit -m "feat: implement game logic"',
  'npm install lucide-react clsx tailwind-merge',
  'docker-compose up --build -d',
  'git push origin main --force',
  'curl -X GET https://api.learnmate.com/v1',
  
  // Advanced JS
  'const results = await Promise.all(requests);',
  'const unique = [...new Set(array)];',
  'const { name, ...rest } = userData;',
  'process.env.NEXT_PUBLIC_API_KEY;'
];

export default function TypingGame() {
  const [snippet, setSnippet] = useState('');
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [charResults, setCharResults] = useState([]);
  const [completedCount, setCompletedCount] = useState(0);
  
  // STATS TRACKING
  const [wpm, setWpm] = useState(0);
  const [highWpm, setHighWpm] = useState(0);
  const [errors, setErrors] = useState(0);
  const [totalCharsTyped, setTotalCharsTyped] = useState(0);
  
  const inputRef = useRef(null);

  // Load High Score on mount
  useEffect(() => {
    const savedHigh = localStorage.getItem('devType_highWpm');
    if (savedHigh) setHighWpm(parseInt(savedHigh));
  }, []);

  const startChallenge = () => {
    setIsActive(true);
    setTimeLeft(30);
    setWpm(0);
    setErrors(0);
    setTotalCharsTyped(0);
    setUserInput('');
    getNextSnippet();
    setCompletedCount(0);
    setTimeout(() => inputRef.current?.focus(), 10);
  };

  const getNextSnippet = () => {
    const next = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
    setSnippet(next);
    setUserInput('');
    setCharResults([]);
    if (isActive) setCompletedCount(prev => prev + 1); // Track how many they did
 };

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft(t => t - 1), 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // Check for new High Score
      if (wpm > highWpm) {
        setHighWpm(wpm);
        localStorage.setItem('devType_highWpm', wpm.toString());
      }
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, wpm, highWpm]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const lastChar = value[value.length - 1];
    const targetChar = snippet[value.length - 1];

    // Check for error on the latest character typed
    if (value.length > userInput.length) {
      setTotalCharsTyped(prev => prev + 1);
      if (lastChar !== targetChar) {
        setErrors(prev => prev + 1);
      }
    }

    setUserInput(value);

    // Visual feedback logic
    const results = snippet.split('').map((char, i) => {
      if (i >= value.length) return 'pending';
      return value[i] === char ? 'correct' : 'wrong';
    });
    setCharResults(results);

    // WPM Calculation (updated in real-time)
    const timePassed = (30 - timeLeft) / 60;
    if (timePassed > 0) {
      const currentWpm = Math.round(((totalCharsTyped - errors) / 5) / timePassed);
      setWpm(currentWpm > 0 ? currentWpm : 0);
    }

    if (value === snippet) getNextSnippet();
  };

  return (
    <div className="bg-slate-900 p-8 rounded-[3rem] shadow-2xl border-b-8 border-indigo-600 text-white">
      
      {/* PROFESSIONAL STATS HEADER */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 flex flex-col items-center">
            <Timer className="text-orange-400 mb-1" size={16} />
            <span className="text-[9px] text-slate-400 font-bold uppercase">Time</span>
            <span className="text-xl font-black">{timeLeft}s</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 flex flex-col items-center">
            <Zap className="text-indigo-400 mb-1" size={16} />
            <span className="text-[9px] text-slate-400 font-bold uppercase">Current WPM</span>
            <span className="text-xl font-black">{wpm}</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 flex flex-col items-center">
            <AlertCircle className="text-red-400 mb-1" size={16} />
            <span className="text-[9px] text-slate-400 font-bold uppercase">Errors</span>
            <span className="text-xl font-black text-red-400">{errors}</span>
        </div>
        <div className="bg-indigo-900/30 p-4 rounded-2xl border border-indigo-500/20 flex flex-col items-center">
            <Trophy className="text-yellow-400 mb-1" size={16} />
            <span className="text-[9px] text-indigo-300 font-bold uppercase">Best WPM</span>
            <span className="text-xl font-black text-yellow-400">{highWpm}</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-2xl border border-white/5 flex flex-col items-center">
            <Zap className="text-purple-400 mb-1" size={16} />
            <span className="text-[9px] text-slate-400 font-bold uppercase">Snippets Done</span>
            <span className="text-xl font-black">{completedCount}</span>
        </div>
      </div>

      {!isActive ? (
        <div className="text-center py-10">
          <Keyboard className="mx-auto mb-4 text-slate-700" size={48} />
          <h2 className="text-3xl font-black mb-2 italic">CODE SPRINT</h2>
          <p className="text-slate-500 text-sm mb-8 font-medium">Beat your record. Perfect your syntax.</p>
          <button 
            onClick={startChallenge}
            className="group flex items-center gap-3 px-10 py-4 bg-indigo-600 hover:bg-white hover:text-indigo-600 font-black rounded-2xl transition-all mx-auto"
          >
            {wpm > 0 ? <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" /> : <Zap size={20} />}
            {wpm > 0 ? 'RESTART SESSION' : 'INITIALIZE'}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-black/40 p-8 rounded-3xl border border-white/5 font-mono text-xl leading-relaxed relative min-h-[120px] flex items-center justify-center">
            <div className="tracking-widest">
                {snippet.split('').map((char, i) => (
                <span 
                    key={i} 
                    className={`transition-all ${
                    charResults[i] === 'correct' ? 'text-indigo-400' : 
                    charResults[i] === 'wrong' ? 'bg-red-500/50 text-white rounded px-0.5' : 
                    'text-slate-600'
                    } ${i === userInput.length ? 'border-b-2 border-indigo-400 animate-pulse' : ''}`}
                >
                    {char}
                </span>
                ))}
            </div>
          </div>

          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleInputChange}
            className="w-full bg-slate-800 border-2 border-slate-700 p-6 rounded-[2rem] font-mono text-lg focus:border-indigo-500 outline-none transition-all shadow-inner text-indigo-100"
            placeholder="Type exactly as shown..."
            autoComplete="off"
            spellCheck="false"
          />
          
          <p className="text-[10px] text-slate-600 font-bold uppercase text-center tracking-[0.2em]">
            Precision is key • Errors slow down your WPM
          </p>
        </div>
      )}
    </div>
  );
}