'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Send, User, Bot, Trash2, Sparkles, AlertCircle } from 'lucide-react';

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const userId = localStorage.getItem('learnmate_user_id');
    
    // Guard: Prevent calling backend if userId is missing or the string "null"
    if (!userId || userId === "null") {
      console.warn("System: No valid User ID found. Auth required.");
      setAuthError(true);
      return; 
    }

    setAuthError(false);
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/chat/history/${userId}`)
      .then(res => {
        if (!res.ok) throw new Error("Backend validation failed");
        return res.json();
      })
      .then(data => {
        // Ultimate safety check: Ensure data is an array before setting state
        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          setMessages([]);
        }
      })
      .catch(err => {
        console.error("History fetch failed:", err);
        setMessages([]);
      });
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('learnmate_user_id');

    // Validation Guard
    if (!input.trim() || loading) return;
    if (!userId || userId === "null") {
      alert("Session expired. Please log in again to chat with the AI.");
      return;
    }

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        user_id: userId,
        message: currentInput
    })
});

      if (!res.ok) throw new Error("Server rejected request");

      const data = await res.json();
      
      // LOG THE DATA: Check your browser console (F12) to see this!
      console.log("Backend Response:", data);

      // FLEXIBLE KEY CHECK: Tries 'reply', then 'response', then 'message'
      const aiText = data.reply || data.response || data.message;

      if (aiText) {
        setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
      } else {
        // If data exists but the key is wrong
        console.warn("AI responded but the JSON key didn't match 'reply' or 'response'");
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "I received your message, but I couldn't format the response correctly. Check backend keys." 
        }]);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "Connection to AI Server failed. Please check your backend." 
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* HEADER */}
      <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white z-10">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Sparkles className="text-blue-600" /> AI Personal Tutor
          </h1>
          <p className="text-sm text-slate-500">Ask questions, generate summaries, or request basics.</p>
        </div>
      </div>

      {/* CHAT MESSAGES AREA */}
      <div className="flex-1 overflow-y-auto p-4 md:p-10 space-y-6">
        {authError && (
          <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-2xl text-amber-700 max-w-2xl mx-auto">
            <AlertCircle size={20} />
            <p className="text-sm font-medium">User session not found. Please log in to see your history and chat.</p>
          </div>
        )}

        {/* Safety: Ensure messages is an array before mapping */}
        {Array.isArray(messages) && messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
            <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-blue-600' : 'bg-slate-100'}`}>
                {msg.role === 'user' ? <User size={18} className="text-white"/> : <Bot size={18} className="text-blue-600"/>}
              </div>
              <div className={`p-4 rounded-2xl shadow-sm ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-800 border border-slate-100'}`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex gap-3 animate-pulse">
            <div className="w-10 h-10 bg-slate-100 rounded-full" />
            <div className="bg-slate-50 h-16 w-32 rounded-2xl border border-slate-100" />
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* INPUT AREA */}
      <div className="p-6 border-t border-slate-100">
        <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto w-full relative">
          <textarea 
            rows="1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={authError}
            placeholder={authError ? "Log in to chat..." : "Ask your AI tutor anything..."}
            className="w-full p-4 pr-16 bg-slate-100 border-none rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            onKeyDown={(e) => { 
              if(e.key === 'Enter' && !e.shiftKey) { 
                e.preventDefault(); 
                handleSendMessage(e); 
              }
            }}
          />
          <button 
            type="submit" 
            disabled={loading || authError || !input.trim()}
            className="absolute right-3 top-2.5 bg-blue-600 p-2 rounded-xl text-white hover:bg-blue-700 transition-all disabled:opacity-30 disabled:grayscale"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}