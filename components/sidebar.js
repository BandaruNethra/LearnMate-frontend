'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, MessageSquare, BookOpen, Settings, BrainCircuit, Trophy, Gamepad2 } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: 'Overview', href: '/' },
    { icon: MessageSquare, label: 'AI Tutor', href: '/chat' },
    { icon: BookOpen, label: 'My Courses', href: '/courses' },
    { icon: Trophy, label: 'Lab Center', href: '/lab' },
    { icon: BrainCircuit, label: 'Hackathons', href: '/hackathons' },
    { icon: BookOpen, label: 'News', href: '/news' },
    { icon: Gamepad2, label: 'Games', href: '/games' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-6 fixed left-0 top-0 hidden lg:block border-r border-slate-800">
      <div className="flex items-center space-x-2 mb-10">
        <div className="bg-blue-600 p-2 rounded-lg">
          <BrainCircuit size={24} className="text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">LearnMate</h1>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link key={item.label} href={item.href}>
            <div 
              className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${
                pathname === item.href 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20' 
                  : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </div>
          </Link>
        ))}
      </nav>
      {/* ... keep your Pro Plan upgrade box here ... */}
    </div>
  );
}