'use client';
import React, { useState, useEffect } from 'react';
import { Newspaper, ExternalLink, Clock, CalendarDays, BookOpen, Loader2 } from 'lucide-react';

export default function NewsPage() {
  // Initialize with the correct structure to prevent "undefined" errors
  const [data, setData] = useState({ headlines: [], papers: [], date: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/news');
        if (!res.ok) throw new Error("Failed to fetch from backend");
        const json = await res.json();
        
        // Safety: Ensure headlines is always an array
        setData({
          headlines: json.headlines || [],
          papers: json.papers || [],
          date: json.date || new Date().toLocaleDateString()
        });
      } catch (err) {
        console.error("News Fetch Error:", err);
        setError("Could not connect to news server.");
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  if (loading) return (
    <div className="flex h-screen items-center justify-center bg-slate-50">
      <div className="text-center">
        <Loader2 className="animate-spin text-blue-600 mx-auto mb-4" size={40} />
        <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">Fetching Today's News...</p>
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-10 text-center">
            <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-2">Global Intelligence Hub</p>
            <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tighter italic">THE DAILY PULSE</h1>
            <div className="flex justify-center items-center gap-2 text-slate-400 font-bold">
                <CalendarDays size={18} />
                <span className="text-sm uppercase">{data.date}</span>
            </div>
        </div>

        {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-2xl mb-6 text-center font-bold border border-red-100">
                ⚠️ {error}
            </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* MAIN HEADLINES COLUMN (Span 3 for more width) */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-black flex items-center gap-2 mb-6 tracking-widest text-slate-400 uppercase">
                <Clock size={16} className="text-orange-500" /> Live Multimedia Feed
            </h2>
            
            {data.headlines.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-min">
                    {data.headlines.map((news, i) => (
                        <div key={i} className="bg-white p-5 rounded-[2rem] border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group h-fit">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-wrap gap-2">
                                        <span className="text-[9px] font-black bg-slate-900 text-white px-2 py-0.5 rounded uppercase tracking-tighter">
                                            {news.source.split('|')[0]}
                                        </span>
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">
                                            {news.source.split('|')[1] || 'News'}
                                        </span>
                                    </div>
                                    <a 
                                        href={news.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-slate-300 hover:text-blue-600 transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 leading-tight group-hover:text-blue-700 transition-colors">
                                    {news.title}
                                </h3>
                                <div className="text-[10px] font-bold text-blue-500/50 uppercase italic">
                                    {news.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="bg-white p-12 rounded-[3rem] text-center border-2 border-dashed border-slate-200">
                    <p className="text-slate-400 font-bold">Assembling today's news... Please wait.</p>
                </div>
            )}
          </div>

          {/* NEWSPAPER PORTAL COLUMN (Right Side) */}
          <div className="space-y-6">
            <h2 className="text-xs font-black flex items-center gap-2 mb-6 tracking-widest text-slate-400 uppercase">
                <BookOpen size={16} className="text-blue-500" /> Digital Archives
            </h2>
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl border border-slate-800 sticky top-8">
                <p className="text-blue-400 text-[10px] font-black mb-6 uppercase tracking-widest">E-Paper Access</p>
                <div className="space-y-3">
                    {data.papers.map((paper, i) => (
                        <a key={i} href={paper.url} target="_blank" rel="noreferrer" className="flex items-center justify-between group p-4 border border-white/5 rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300">
                            <span className="font-bold text-xs tracking-tight">{paper.name}</span>
                            <Newspaper size={16} className="opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all" />
                        </a>
                    ))}
                </div>
                <div className="mt-10 p-5 bg-white/5 rounded-3xl border border-dashed border-white/10">
                    <p className="text-[10px] text-slate-400 italic leading-relaxed text-center">
                        "Access the full digital editions for in-depth editorial analysis."
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
);
}