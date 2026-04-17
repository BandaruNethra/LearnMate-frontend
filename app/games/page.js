'use client';
import React, { useState } from 'react';
import { Gamepad2, Brain, Zap, Target, ArrowLeft } from 'lucide-react';
// We will create these components next
import MemoryGame from '@/components/games/MemoryGame';
import TypingGame from '@/components/games/TypingGame';
import Game2048 from '@/components/games/Game2048';

export default function GamesPage() {
  const [activeGame, setActiveGame] = useState(null);

  const gameList = [
  {
    id: 'memory',
    name: 'Brain Match',
    desc: 'Sharpen your focus by matching pairs.',
    icon: <Brain className="text-pink-500" size={32} />,
    color: 'hover:border-pink-500'
  },
  {
    id: 'typing',
    name: 'Dev Type',
    desc: 'How fast can you type tech terms?',
    icon: <Zap className="text-yellow-500" size={32} />,
    color: 'hover:border-yellow-500'
  },
  {
    id: 'math', // New game
    name: 'Game2048',
    desc: 'A simple math-based puzzle game.',
    icon: <Target className="text-indigo-500" size={32} />,
    color: 'hover:border-indigo-500'
  }
];

  if (activeGame) {
    return (
      <div className="p-8 bg-slate-50 min-h-screen">
        <button 
          onClick={() => setActiveGame(null)}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold mb-8 transition-all"
        >
          <ArrowLeft size={20} /> Back to Arcade
        </button>
        
        <div className="max-w-4xl mx-auto">
            {activeGame === 'memory' && <MemoryGame />}
            {activeGame === 'typing' && <TypingGame />}
            {activeGame === 'math' && <Game2048 />} {/* New check */}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-indigo-600 font-black uppercase tracking-widest text-xs mb-2">Cognitive Recharge</p>
          <h1 className="text-5xl font-black text-slate-900 mb-4">Focus Zone</h1>
          <p className="text-slate-500 font-medium">Short games to sharpen your mind or take a productive break.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {gameList.map((game) => (
            <button
              key={game.id}
              onClick={() => setActiveGame(game.id)}
              className={`bg-white p-8 rounded-[2.5rem] border-2 border-transparent ${game.color} shadow-sm hover:shadow-xl transition-all text-left group`}
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {game.icon}
              </div>
              <h2 className="text-2xl font-black text-slate-800 mb-2">{game.name}</h2>
              <p className="text-slate-500 font-medium leading-relaxed">{game.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}