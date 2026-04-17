'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { RotateCcw } from 'lucide-react';

export default function Game2048() {
  const [grid, setGrid] = useState(Array(4).fill(0).map(() => Array(4).fill(0)));
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Initialize game
  const initGame = useCallback(() => {
    let newGrid = Array(4).fill(0).map(() => Array(4).fill(0));
    newGrid = addNumber(newGrid);
    newGrid = addNumber(newGrid);
    setGrid(newGrid);
    setScore(0);
    setGameOver(false);
  }, []);

  useEffect(() => {
    initGame();
  }, [initGame]);

  // Add a random 2 or 4 to an empty cell
  const addNumber = (currentGrid) => {
    let added = false;
    let gridCopy = JSON.parse(JSON.stringify(currentGrid));
    while (!added) {
      let r = Math.floor(Math.random() * 4);
      let c = Math.floor(Math.random() * 4);
      if (gridCopy[r][c] === 0) {
        gridCopy[r][c] = Math.random() > 0.1 ? 2 : 4;
        added = true;
      }
      if (!gridCopy.flat().includes(0)) added = true; // Safety break
    }
    return gridCopy;
  };

  // Slide and Merge Logic
  const operate = (row) => {
    // 1. Slide everything to the left
    let filtered = row.filter(num => num !== 0);
    // 2. Merge identical adjacent numbers
    for (let i = 0; i < filtered.length - 1; i++) {
      if (filtered[i] === filtered[i + 1]) {
        filtered[i] *= 2;
        setScore(prev => prev + filtered[i]);
        filtered[i + 1] = 0;
      }
    }
    // 3. Slide again after merging
    filtered = filtered.filter(num => num !== 0);
    // 4. Pad with zeros to keep length 4
    while (filtered.length < 4) filtered.push(0);
    return filtered;
  };

  const move = (direction) => {
    let oldGrid = JSON.stringify(grid);
    let newGrid = JSON.parse(oldGrid);

    if (direction === 'LEFT' || direction === 'RIGHT') {
      newGrid = newGrid.map(row => {
        if (direction === 'RIGHT') row.reverse();
        let processed = operate(row);
        if (direction === 'RIGHT') processed.reverse();
        return processed;
      });
    } else {
      // Transpose for Up/Down movement
      for (let c = 0; c < 4; c++) {
        let col = [newGrid[0][c], newGrid[1][c], newGrid[2][c], newGrid[3][c]];
        if (direction === 'DOWN') col.reverse();
        let processed = operate(col);
        if (direction === 'DOWN') processed.reverse();
        for (let r = 0; r < 4; r++) newGrid[r][c] = processed[r];
      }
    }

    if (JSON.stringify(newGrid) !== oldGrid) {
      setGrid(addNumber(newGrid));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver) return;
      if (e.key === 'ArrowUp') move('UP');
      else if (e.key === 'ArrowDown') move('DOWN');
      else if (e.key === 'ArrowLeft') move('LEFT');
      else if (e.key === 'ArrowRight') move('RIGHT');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [grid, gameOver]);

  const getTileColor = (val) => {
    const colors = {
      0: 'bg-slate-200 text-transparent',
      2: 'bg-[#eee4da] text-[#776e65]',
      4: 'bg-[#ede0c8] text-[#776e65]',
      8: 'bg-[#f2b179] text-white',
      16: 'bg-[#f59563] text-white',
      32: 'bg-[#f67c5f] text-white',
      64: 'bg-[#f65e3b] text-white',
      128: 'bg-[#edcf72] text-white text-2xl',
      256: 'bg-[#edcc61] text-white text-2xl',
      512: 'bg-[#edc850] text-white text-2xl',
      1024: 'bg-[#edc53f] text-white text-xl',
      2048: 'bg-[#edc22e] text-white text-xl',
    };
    return colors[val] || 'bg-slate-900 text-white';
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between w-full max-w-[320px] mb-6">
        <div className="bg-slate-800 p-3 rounded-2xl text-center min-w-[100px]">
          <p className="text-[10px] text-slate-400 font-bold uppercase">Score</p>
          <p className="text-xl font-black text-white">{score}</p>
        </div>
        <button 
          onClick={initGame}
          className="bg-indigo-600 hover:bg-indigo-700 p-4 rounded-2xl text-white transition-all shadow-lg"
        >
          <RotateCcw size={24} />
        </button>
      </div>

      <div className="bg-[#bbada0] p-3 rounded-2xl shadow-xl">
        <div className="grid grid-cols-4 gap-3">
          {grid.map((row, r) => 
            row.map((val, c) => (
              <div 
                key={`${r}-${c}`}
                className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-xl font-black text-3xl transition-all duration-100 ${getTileColor(val)}`}
              >
                {val !== 0 ? val : ''}
              </div>
            ))
          )}
        </div>
      </div>

      <div className="mt-8 text-slate-400 font-bold text-sm animate-pulse">
        Use Arrow Keys to Move Tiles
      </div>
    </div>
  );
}