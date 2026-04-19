'use client';
import React, { useState, useEffect } from 'react';
import { Trophy, Calendar, MapPin, ExternalLink, Search, Rocket, Sparkles, RefreshCw, CheckCircle2 } from 'lucide-react';

// This acts as our "Fallback" if the backend is not running
const FALLBACK_HACKATHONS = [
  {
    id: 1,
    title: "Google Girl Hackathon 2026",
    organizer: "Google",
    date: "Apply by May 2026",
    location: "Online / India",
    prize: "Google Careers + Swags",
    tags: ["Women in Tech", "Coding", "DSA"],
    link: "https://buildyourfuture.withgoogle.com/programs/girl-hackathon"
  },
  {
    id: 2,
    title: "HackMIT 2026",
    organizer: "MIT University",
    date: "September 14-15, 2026",
    location: "Cambridge, MA / Hybrid",
    prize: "$30,000 Pool",
    tags: ["Elite", "Innovation", "Research"],
    link: "https://hackmit.org/"
  },
  {
    id: 3,
    title: "Microsoft Imagine Cup",
    organizer: "Microsoft",
    date: "Ongoing - Jan 2026",
    location: "Global / Online",
    prize: "$100,000 + Mentorship",
    tags: ["Social Impact", "Azure", "AI"],
    link: "https://imaginecup.microsoft.com/en-us/Events"
  },
  {
    id: 4,
    title: "Smart India Hackathon 2026",
    organizer: "Govt of India",
    date: "Aug - Dec 2026",
    location: "National Centers",
    prize: "₹1,00,000 per problem",
    tags: ["Public Policy", "Hardware", "Software"],
    link: "https://www.sih.gov.in/sih2024" 
  },
  {
    id: 5,
    title: "Chainlink Constellation",
    organizer: "Chainlink Labs",
    date: "November 2026",
    location: "Online",
    prize: "$500,000 Pool",
    tags: ["Web3", "Blockchain", "Smart Contracts"],
    link: "https://constellation.devpost.com/"
  }
];

export default function HackathonPage() {
  const [hackathons, setHackathons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [syncing, setSyncing] = useState(false);
  const [lastSync, setLastSync] = useState(null);

  // 1. Load data from Backend "Database"
  const fetchHackathons = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/get-hackathons`);
      if (!res.ok) throw new Error("Backend offline");
      const data = await res.json();
      
      // If backend returns data, use it. Otherwise, use Fallback.
      setHackathons(data.length > 0 ? data : FALLBACK_HACKATHONS);
    } catch (err) {
      console.log("Using local fallback data");
      setHackathons(FALLBACK_HACKATHONS);
    }
  };

  // 2. Trigger the "3 AM AI Sync" Manually for Demo
  const handleAISync = async () => {
    setSyncing(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/sync-hackathons`, { method: 'POST' });
      const data = await res.json();
      setLastSync(data.time);
      await fetchHackathons(); // Refresh list after sync
    } catch (err) {
      alert("Backend must be running to sync with AI!");
    } finally {
      setSyncing(false);
    }
  };

  useEffect(() => {
    fetchHackathons();
  }, []);

  const filteredHackathons = hackathons.filter(hack => 
    hack.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hack.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6 md:p-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP STATUS BAR */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-xs text-slate-400 font-bold tracking-wide uppercase">
              {lastSync ? `AI Last Sync: ${lastSync}` : "Live Updates: April 2026 Season"}
            </p>
          </div>
          
          <button 
            onClick={handleAISync}
            disabled={syncing}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm disabled:opacity-50"
          >
            <RefreshCw size={16} className={syncing ? "animate-spin" : ""} />
            {syncing ? "Syncing AI..." : "Sync Opportunities"}
          </button>
        </div>

        {/* HEADER SECTION */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 text-blue-600 font-bold mb-2">
              <Sparkles size={18} />
              <span className="uppercase tracking-widest text-xs font-black">Career Growth</span>
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Upcoming Hackathons</h1>
            <p className="text-slate-500 mt-2 font-medium">Verified direct application links for the 2026 season.</p>
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text"
              placeholder="Search tech, name or prizes..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all shadow-sm font-medium"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        {/* STATS / HIGHLIGHTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-600 p-6 rounded-[2rem] text-white flex items-center gap-4 shadow-xl shadow-blue-100">
            <div className="bg-white/20 p-3 rounded-xl"><Trophy size={24}/></div>
            <div>
              <p className="text-sm font-bold opacity-80">Total Prizes</p>
              <p className="text-2xl font-black">$850k+</p>
            </div>
          </div>
          <div className="bg-slate-900 p-6 rounded-[2rem] text-white flex items-center gap-4 shadow-xl">
            <div className="bg-white/20 p-3 rounded-xl"><Rocket size={24}/></div>
            <div>
              <p className="text-sm font-bold opacity-80">Verified Events</p>
              <p className="text-2xl font-black">{hackathons.length}</p>
            </div>
          </div>
        </div>

        {/* HACKATHON GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredHackathons.map((hack, index) => (
            <div key={index} className="group bg-white rounded-[2.5rem] border border-slate-200 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col relative overflow-hidden">
              
              <div className="flex justify-between items-start mb-6">
                <div className="bg-slate-50 px-4 py-1 rounded-full text-[10px] font-black text-slate-500 border border-slate-100 uppercase tracking-tighter">
                  {hack.organizer}
                </div>
                <div className="text-slate-300 group-hover:text-blue-600 transition-colors">
                  <ExternalLink size={20} />
                </div>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                {hack.title}
              </h3>

              <div className="space-y-3 mb-8 flex-grow">
                <div className="flex items-center gap-3 text-slate-500 text-sm font-bold">
                  <Calendar size={18} className="text-blue-400" />
                  {hack.date}
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm font-bold">
                  <MapPin size={18} className="text-red-400" />
                  {hack.location}
                </div>
                <div className="flex items-center gap-3 text-slate-900 text-sm font-black">
                  <Trophy size={18} className="text-amber-400" />
                  {hack.prize}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {hack.tags.map(tag => (
                  <span key={tag} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={hack.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-center group-hover:bg-blue-600 transition-all shadow-lg active:scale-95"
              >
                Apply Directly
              </a>
            </div>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredHackathons.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-300 mt-10">
            <Search size={48} className="mx-auto text-slate-200 mb-4" />
            <h3 className="text-xl font-bold text-slate-800">No results found</h3>
            <p className="text-slate-500 mt-1">Try searching for "AI" or "India"</p>
          </div>
        )}
      </div>
    </div>
  );
}