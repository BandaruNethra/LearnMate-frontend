'use client';
import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Trophy, Award, Calendar, Download, ShieldCheck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function CertificateContent() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get('courseId') || "Skill";
  const [userName, setUserName] = useState("Learner");
  const [today, setToday] = useState("");

  useEffect(() => {
    // 1. Get User Name from localStorage
    const savedName = localStorage.getItem('learnmate_user_name') || "Learner Name";
    setUserName(savedName);

    // 2. Format today's date
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setToday(date);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-900 p-6 md:p-20 flex flex-col items-center justify-center">
      
      {/* TOOLBAR (Hidden when printing) */}
      <div className="max-w-4xl w-full flex justify-between mb-8 print:hidden">
        <Link href="/courses" className="text-white flex items-center gap-2 font-bold hover:text-blue-400 transition-colors">
          <ArrowLeft size={20} /> Back to Academy
        </Link>
        <button 
          onClick={handlePrint}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-black flex items-center gap-2 hover:bg-blue-500 transition-all shadow-2xl"
        >
          <Download size={20} /> DOWNLOAD PDF
        </button>
      </div>

      {/* THE ACTUAL CERTIFICATE */}
      <div id="certificate" className="bg-white max-w-[1000px] w-full aspect-[1.414/1] p-12 relative border-[16px] border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.4)] overflow-hidden">
        
        {/* Decorative Background Elements */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50" />

        <div className="relative z-10 border-4 border-slate-900 h-full w-full flex flex-col items-center p-12 text-center">
          
          <Award className="text-blue-600 mb-6" size={80} strokeWidth={1} />
          
          <p className="text-slate-500 uppercase tracking-[0.4em] font-black text-xs mb-8">Official Certificate of Achievement</p>
          
          <h2 className="text-lg font-serif italic text-slate-400 mb-2">This is to certify that</h2>
          
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-4 capitalize">
            {userName}
          </h1>
          
          <div className="w-40 h-1 bg-blue-600 mb-10" />
          
          <p className="text-lg text-slate-500 max-w-lg mb-8 leading-relaxed">
            Has successfully demonstrated mastery and verified logic completion in the comprehensive course
          </p>

          <h3 className="text-4xl font-black text-blue-600 uppercase tracking-tight mb-12">
            {courseId.replace(/-/g, ' ')}
          </h3>

          <div className="grid grid-cols-3 w-full mt-auto pt-10 border-t border-slate-100">
            <div className="flex flex-col items-center">
              <Calendar className="text-slate-300 mb-2" size={24} />
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Completion Date</p>
              <p className="font-bold text-slate-900">{today}</p>
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center text-white mb-2 shadow-lg">
                <Trophy size={40} />
              </div>
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Seal of Excellence</p>
            </div>

            <div className="flex flex-col items-center">
              <ShieldCheck className="text-slate-300 mb-2" size={24} />
              <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Verification ID</p>
              <p className="font-mono text-slate-900">LM-{Math.random().toString(36).substring(2, 9).toUpperCase()}</p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-[10px] font-black italic text-slate-300">LearnMate AI Academy - Verified Project-Based Learning Certificate</p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body { background: white !important; }
          .print\:hidden { display: none !important; }
          #certificate { 
            box-shadow: none !important; 
            border: none !important;
            width: 100vw !important;
            height: 100vh !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

export default function CertificatePage() {
  return (
    <Suspense fallback={<div className="p-20 text-center text-white font-bold">Generating Certificate...</div>}>
      <CertificateContent />
    </Suspense>
  );
}