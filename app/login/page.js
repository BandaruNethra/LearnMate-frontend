'use client';
import React, { useState } from 'react';
import { BrainCircuit, Sparkles, ArrowRight } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ 
  email: '', password: '', full_name: '', skill_level: 'Beginner' 
});
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  const endpoint = isLogin ? '/login' : '/signup';
  
  try {
    const res = await fetch(`http://localhost:8000${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const data = await res.json();

    if (!res.ok) {
      // If data.detail is an object (which FastAPI sometimes sends), 
      // we convert it to a string so it doesn't show [object Object]
      const errorMsg = typeof data.detail === 'object' 
        ? JSON.stringify(data.detail) 
        : data.detail;
      throw new Error(errorMsg || "Something went wrong");
    }

    // SUCCESS: Save data
    localStorage.setItem('token', data.access_token);
    localStorage.setItem('learnmate_user_id', data.user.id);
    localStorage.setItem('learnmate_user_name', data.user.full_name); // Save name for quick access
    
    // Redirect to dashboard
    window.location.href = '/';
  } catch (err) {
    // This is where [object Object] usually comes from
    setError(err.message); 
  }
};

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
            <BrainCircuit className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">
            {isLogin ? "Welcome Back" : "Start Learning"}
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            {isLogin ? "Log in to continue your journey" : "Create your AI tutor account"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          // Inside handleSubmit, make sure the formData has email
	
  {!isLogin && (
  <div>
    <label className="text-xs font-bold text-slate-500 uppercase ml-1">Full Name</label>
    <input 
      className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl mt-1 text-white outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="e.g. John Doe"
      onChange={e => setFormData({...formData, full_name: e.target.value})}
      required
    />
  </div>
)}
  <div>
	  <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
	  <input 
	    type="email"
	    className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl mt-1 text-white outline-none focus:ring-2 focus:ring-blue-500"
	    placeholder="name@example.com"
	    onChange={e => setFormData({...formData, email: e.target.value})}
	    required
	  />
	</div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase ml-1">Password</label>
            <input 
              type="password"
              className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl mt-1 text-white outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              onChange={e => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          {!isLogin && (
            <div className="grid grid-cols-2 gap-4 animate-in fade-in duration-500">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Interest</label>
                <select 
                  className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl mt-1 text-white outline-none"
                  onChange={e => setFormData({...formData, interests: e.target.value})}
                >
                  <option>Python</option>
                  <option>JavaScript</option>
                  <option>AI Basics</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase ml-1">Level</label>
                <select 
                  className="w-full bg-slate-800 border border-slate-700 p-3 rounded-xl mt-1 text-white outline-none"
                  onChange={e => setFormData({...formData, skill_level: e.target.value})}
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                </select>
              </div>
            </div>
          )}

          {error && <p className="text-red-400 text-xs text-center">{error}</p>}

          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-900/20">
            <span>{isLogin ? "Login" : "Sign Up"}</span>
            <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-slate-400 hover:text-blue-400 transition"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
          </button>
        </div>
      </div>
    </div>
  );
}
