'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Onboarding() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("Python");
  const router = useRouter();

  const handleStart = async () => {
    const res = await fetch('http://127.0.0.1:8000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        username: name, 
        interests: topic, 
        skill_level: "Beginner" 
      })
    });
    const user = await res.json();
    
    // Save user ID to local storage so the dashboard knows who you are
    localStorage.setItem('learnmate_user_id', user.id);
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6 text-white font-sans">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/30">
          <Sparkles size={32} />
        </div>
        
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Personalize your Tutor</h1>
          <p className="text-slate-400 mt-4 text-lg">Let's set up your learning environment.</p>
        </div>

        <div className="space-y-4 pt-4 text-left">
          <div>
            <label className="text-sm font-bold text-slate-500 uppercase ml-1">Your Name</label>
            <input 
              type="text" 
              className="w-full bg-slate-800 border border-slate-700 p-4 rounded-2xl mt-2 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="e.g. Alex"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-bold text-slate-500 uppercase ml-1">Learning Goal</label>
            <select 
              className="w-full bg-slate-800 border border-slate-700 p-4 rounded-2xl mt-2 focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
              onChange={(e) => setTopic(e.target.value)}
            >
              <option>Python Basics</option>
              <option>Data Science</option>
              <option>Web Development</option>
              <option>Robotics</option>
            </select>
          </div>
        </div>

        <button 
          onClick={handleStart}
          className="w-full bg-white text-slate-900 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-400 hover:text-white transition-all active:scale-95 shadow-xl"
        >
          <span>Start Learning</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
