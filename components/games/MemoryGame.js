// frontend/components/games/MemoryGame.js
import React, { useState, useEffect } from 'react';

const EMOJI_POOL = ['🚀','💻','💡','⚛️','🐍','🦀','🔥','🛡️','⚡','🌈','🎨','🍕','🎸','👾','🤖','🛸','⭐','🌙','🍀','🎈','💎','🔑','🍎','🐳','🐯','🦁','🐼','🦊','🦄','🍄','🌵','🍦'];

export default function MemoryGame() {
  const [gridSize, setGridSize] = useState(4); // 4, 6, or 8
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);

  const initGame = (size) => {
    const numPairs = (size * size) / 2;
    const selectedEmojis = EMOJI_POOL.slice(0, numPairs);
    const shuffled = [...selectedEmojis, ...selectedEmojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, index) => ({ id: index, emoji }));
    setCards(shuffled);
    setGridSize(size);
    setSolved([]);
    setFlipped([]);
  };
  const handleClick = (id) => {
    // 1. Prevent clicking if 2 cards are already flipped, 
    // or if the card is already flipped/solved
    if (flipped.length === 2 || flipped.includes(id) || solved.includes(id)) return;
    
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    // 2. Check for match when 2 cards are flipped
    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].emoji === cards[second].emoji) {
        // Match found!
        setSolved(prev => [...prev, first, second]);
      }
      // 3. Reset flipped cards after a short delay
      setTimeout(() => setFlipped([]), 800);
    }
  };

  return (
    <div className="bg-white p-6 rounded-[3rem] shadow-2xl text-center">
      {!cards.length ? (
        <div className="py-10">
          <h2 className="text-3xl font-black mb-6">Select Difficulty</h2>
          <div className="flex justify-center gap-4">
            {[4, 6, 8].map(size => (
              <button key={size} onClick={() => initGame(size)} className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:scale-105 transition-all">
                {size}x{size} {size === 8 ? '🔥' : ''}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className={`grid gap-2 mx-auto`} style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`, maxWidth: gridSize * 60 }}>
          {cards.map((card, index) => (
            <div key={index} onClick={() => handleClick(index)} className={`${gridSize > 6 ? 'h-10 text-xl' : 'h-16 text-2xl'} flex items-center justify-center cursor-pointer rounded-lg transition-all ${flipped.includes(index) || solved.includes(index) ? 'bg-indigo-500' : 'bg-slate-200'}`}>
              {(flipped.includes(index) || solved.includes(index)) && card.emoji}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}