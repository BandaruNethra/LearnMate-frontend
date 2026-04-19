'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight, BookOpen, UserCircle } from 'lucide-react';

export default function Onboarding() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("Python Basics");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleStart = async () => {
    // 1. Validation
    if (!name.trim()) {
      alert("Please enter your name to personalize your experience!");
      return;
    }

    setLoading(true);

    try {
      // 2. The Fetch call to your FastAPI backend
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      username: name, 
      interests: topic, 
      skill_level: "Beginner" 
    })
});

      // 3. Handle Backend Response
      if (!res.ok) {
        const errorData = await res.json();
        console.error("Backend Error Details:", errorData);
        alert("Signup failed. Check if your Python server is running.");
        setLoading(false);
        return;
      }

      const user = await res.json();
      console.log("Success! User created:", user);
      
      // 4. Save user ID and Redirect
      localStorage.setItem('learnmate_user_id', user.id);
      
      // Using a small delay for a smooth transition
      setTimeout(() => {
        window.location.href = "/";
      }, 500);

    } catch (err) {
      console.error("Connection failed:", err);
      alert("Could not connect to backend. Is uvicorn running on port 8000?");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white font-sans selection:bg-blue-500/30">
      <div className="max-w-md w-full space-y-10 text-center">
        
        {/* Animated Logo Icon */}
        <div className="relative mx-auto w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.4)] animate-pulse">
          <Sparkles size={40} className="text-white" />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            LearnMate AI
          </h1>
          <p className="text-slate-400 text-lg">Your personalized 2026 tutor is ready.</p>
        </div>

        <div className="space-y-6 pt-4 text-left">
          {/* Name Input */}
          <div className="group">
            <label className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
              <UserCircle size={14} className="mr-2" /> Your Name
            </label>
            <input 
              type="text" 
              className="w-full bg-slate-900 border border-slate-800 p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all hover:border-slate-700 placeholder:text-slate-600 text-lg"
              placeholder="e.g. Alex"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Goal Select */}
          <div className="group">
            <label className="flex items-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
              <BookOpen size={14} className="mr-2" /> Learning Goal
            </label>
            <div className="relative">
              <select 
                className="w-full bg-slate-900 border border-slate-800 p-4 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer transition-all hover:border-slate-700 text-lg"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              >
                <option>Python Basics</option>
                <option>Data Science</option>
                <option>Web Development</option>
                <option>Machine Learning</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                <ArrowRight size={18} className="rotate-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button 
          onClick={handleStart}
          disabled={loading}
          className="group w-full bg-white text-slate-950 py-5 rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-blue-500 hover:text-white transition-all active:scale-[0.98] shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="text-lg">{loading ? "Setting up..." : "Start Learning"}</span>
          {!loading && <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />}
        </button>

        <p className="text-slate-600 text-xs uppercase tracking-widest font-medium">
          Secure • AI-Powered • Free Tier
        </p>
      </div>
    </div>
  );
}
