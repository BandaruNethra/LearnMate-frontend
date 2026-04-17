'use client';
import OpenAI from 'openai';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Send, Loader2, ArrowRight, CheckCircle2, 
  User, LogOut, Settings, ChevronDown 
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  // State for Profile Sync
  const [userName, setUserName] = useState('Explorer');
  const [userPic, setUserPic] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef(null);

  // Sync Data on Mount
  useEffect(() => {
    const savedName = localStorage.getItem('learnmate_user_name');
    const savedPic = localStorage.getItem('learnmate_user_pic');
    
    if (savedName) setUserName(savedName);
    if (savedPic) setUserPic(savedPic);
    else setUserPic(`https://api.dicebear.com/7.x/avataaars/svg?seed=${savedName || 'Learner'}`);

    if (videoRef.current) videoRef.current.play().catch(() => {});
  }, []);

  const handleAiSearch = async (e) => {
  e.preventDefault();
  if (!aiQuery) return;

  setIsLoading(true);
  setAiResponse(""); 

  try {
    const openai = new OpenAI({
      baseURL: "https://api.groq.com/openai/v1",
      // Paste your key directly inside these quotes
      apiKey: process.env.NEXT_PUBLIC_GROK_API_KEY, 
      dangerouslyAllowBrowser: true 
    });

    const completion = await openai.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { 
          role: "system", 
          content: "You are Grok, the brilliant and witty AI tutor. Student name: " + userName 
        },
        { role: "user", content: aiQuery }
      ],
    });

    setAiResponse(completion.choices[0].message.content);

  } catch (error) {
    console.error("AI Error:", error);
    setAiResponse("Grok is offline. Check your console for details.");
  } finally {
    setIsLoading(false);
  }
};

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-white pb-16 font-sans selection:bg-indigo-100 relative">
      
      {/* --- NEW FLOATING PROFILE HEADER --- */}
      <header className="fixed top-6 right-6 z-[100]">
        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-3 bg-white/90 backdrop-blur-md p-2 pr-4 rounded-2xl shadow-xl border border-slate-200 hover:border-indigo-500 transition-all group"
          >
            <img src={userPic} className="w-10 h-10 rounded-xl object-cover bg-indigo-50" alt="Profile" />
            <div className="text-left hidden md:block">
              <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest leading-none mb-1">Learner</p>
              <p className="text-sm font-bold text-slate-900 leading-none">{userName}</p>
            </div>
            <ChevronDown size={16} className={`text-slate-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
          </button>

          {/* DROPDOWN MENU */}
          {showDropdown && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="p-2">
                <button onClick={() => router.push('/settings')} className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 rounded-2xl transition-all text-slate-600 font-bold text-sm">
                  <User size={18} className="text-indigo-500" /> My Profile
                </button>
                <button onClick={() => router.push('/settings')} className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 rounded-2xl transition-all text-slate-600 font-bold text-sm">
                  <Settings size={18} className="text-slate-400" /> Settings
                </button>
                <div className="h-px bg-slate-100 my-1 mx-4" />
                <button onClick={handleLogout} className="w-full flex items-center gap-3 p-4 hover:bg-red-50 rounded-2xl transition-all text-red-500 font-bold text-sm">
                  <LogOut size={18} /> Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* 1. HERO SECTION */}
      <section className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden bg-slate-900">
        <video ref={videoRef} autoPlay muted loop playsInline className="absolute z-0 w-full h-full object-cover opacity-50 scale-105">
          <source src="https://cdn.pixabay.com/video/2021/04/12/70796-537443902_large.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center px-6">
          <span className="bg-indigo-600/20 backdrop-blur-md text-indigo-400 px-6 py-2 rounded-full font-black text-xs uppercase tracking-[0.3em] mb-6 inline-block border border-indigo-500/30">Intelligence Evolved</span>
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">LearnMate</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight opacity-90">Welcome back, <span className="text-indigo-400 italic">{userName}</span> 👋</h2>
        </div>
      </section>

      {/* 2. AI TUTOR */}
      <section className="max-w-4xl mx-auto -mt-16 relative z-20 px-6 mb-16">
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border border-white">
          <form onSubmit={handleAiSearch} className="flex gap-4">
            <div className="flex-1 relative">
              <Sparkles className="absolute left-5 top-5 text-indigo-500" size={24} />
              <input 
                type="text" value={aiQuery} onChange={(e) => setAiQuery(e.target.value)}
                placeholder="Ask your AI Tutor about Java, Certificates, or anything..."
                className="w-full p-5 pl-14 bg-slate-100/50 rounded-2xl outline-none focus:ring-4 ring-indigo-500/20 font-bold transition-all text-slate-800 placeholder:text-slate-400"
              />
            </div>
            <button className="bg-slate-900 text-white px-10 rounded-2xl font-black hover:bg-indigo-600 transition-all shadow-lg active:scale-95">
              {isLoading ? <Loader2 className="animate-spin" /> : <Send size={22} />}
            </button>
          </form>
          {aiResponse && (
            <div className="mt-6 p-6 bg-slate-900 rounded-[2rem] text-indigo-100 font-medium leading-relaxed animate-in slide-in-from-bottom-4 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10"><Sparkles size={40}/></div>
               <p className="relative z-10">"{aiResponse}"</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section className="max-w-7xl mx-auto px-8 mb-12">
        <div className="mb-10 text-center lg:text-left">
          <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">Recommended Systems</h2>
          <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Your Personalized Ecosystem</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard 
            img="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80"
            title="The Academy" desc="Master core programming architecture." link="/courses"
          />
          <ServiceCard 
            img="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=80"
            title="Global Events" desc="Connect at hackathons & meetups." link="/hackathons"
          />
          <ServiceCard 
            img="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=500&q=80"
            title="Neural News" desc="Latest breakthroughs in AI technology." link="/news"
          />
          <ServiceCard 
            img="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=500&q=80"
            title="Logic Arcade" desc="Competitive games to boost logic." link="/games"
          />
        </div>
      </section>

      {/* 4. WHY SECTION */}
      <section className="max-w-7xl mx-auto px-8 py-20 bg-slate-900 rounded-[4rem] mb-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
        <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tighter">
              The Future of <span className="text-indigo-500">Mastery.</span>
            </h2>
            <p className="text-xl text-slate-400 font-medium leading-relaxed">
              LearnMate isn't just a platform; it's a dynamic feedback loop that verifies your logic and rewards your technical growth.
            </p>
            <div className="space-y-4">
              <FeatureItem text="Verified Technical Certification" />
              <FeatureItem text="Instant Logic Verification System" />
              <FeatureItem text="Integrated LLM Support" />
            </div>
            <button onClick={() => router.push('/courses')} className="px-10 py-5 bg-white text-slate-900 font-black rounded-2xl hover:bg-indigo-500 hover:text-white transition-all flex items-center gap-3 text-lg">
              Start Learning Now <ArrowRight size={20} />
            </button>
          </div>

          <div className="lg:w-1/2">
            <div className="relative p-4 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Community" 
                className="rounded-[2.5rem] shadow-2xl object-cover h-[450px] w-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-Components
function ServiceCard({ img, title, desc, link }) {
  return (
    <a href={link} className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors z-10" />
        <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
      <div className="p-7">
        <h3 className="text-xl font-black text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">{desc}</p>
        <div className="flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-[0.2em]">
           Launch Module <ArrowRight size={16} />
        </div>
      </div>
    </a>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="bg-indigo-500 p-1 rounded-full text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
        <CheckCircle2 size={18} />
      </div>
      <span className="font-black text-lg text-slate-300 group-hover:text-white transition-colors">{text}</span>
    </div>
  );
}