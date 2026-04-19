'use client';
import JSZip from 'jszip';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  BrainCircuit, Upload, CheckCircle, XCircle, Loader2, 
  Trophy, Code, ArrowLeft, Zap, Search, 
  Cpu, AlertTriangle, RefreshCcw, Download 
} from 'lucide-react';
import Link from 'next/link';
import { LAB_DATA_BANK } from '@/data/lab-content';

function LabContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const courseId = searchParams.get('courseId') || "python-beginners";
  
  const [questions, setQuestions] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(null);

  // Analysis States
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [isAnalysisComplete, setIsAnalysisComplete] = useState(false);
  const [detectedFiles, setDetectedFiles] = useState([]);
  const [analysisError, setAnalysisError] = useState(null);

  useEffect(() => {
    const loadLab = async () => {
      setLoading(true);
      setError(null);

      const localData = LAB_DATA_BANK[courseId];
      
      // 1. Load Questions or Fallback
      const qData = localData?.questions || [];
      setQuestions(qData);

      // 2. Load Project or Fallback (Ensures button always exists)
      setCurrentProject(localData?.project || {
        title: "Final Technical Assessment",
        desc: "Apply the core concepts of this course to build a functional source-code solution.",
        requirements: ["Verified Logic Entry Point", "Module Implementation", "Clean Architecture"]
      });

      // 3. AUTO-UNLOCK: If no quiz exists, skip straight to project
      if (qData.length === 0) {
        setShowResults(true);
      }

      setLoading(false);
    };

    loadLab();
  }, [courseId]);

  const handleFinalCompletion = async () => {
    const score = calculateScore();
    const userId = localStorage.getItem('learnmate_user_id');
    
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/update-progress`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: userId,
          course_id: courseId,
          score: score,
          progress: 100, 
          status: "completed",
          project_verified: true
        })
      });

      localStorage.setItem(`learnmate_completed_${courseId}`, 'true');
      localStorage.setItem(`learnmate_progress_${courseId}`, '100');
    } catch (err) {
      console.error("Final sync failed:", err);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsAnalyzing(true);
    setAnalysisProgress(0);
    setAnalysisError(null);
    setDetectedFiles([]);

    try {
      const zip = new JSZip();
      const contents = await zip.loadAsync(file);
      const fileNames = Object.keys(contents.files).filter(name => 
        !contents.files[name].dir && !name.includes('__MACOSX') && !name.includes('.DS_Store')
      );
      setDetectedFiles(fileNames.slice(0, 6));

      let logicVerified = false;
      const isJava = courseId.includes('java');
      const isPython = courseId.includes('python');

      for (let name of fileNames) {
        const fileContent = await contents.files[name].async("string");
        const lowerName = name.toLowerCase();

        if (isJava && lowerName.endsWith('.java')) {
          if (fileContent.includes("public static void main") || fileContent.includes("@SpringBootApplication")) {
            logicVerified = true; break;
          }
        } else if (isPython && lowerName.endsWith('.py')) {
          if (fileContent.includes("if __name__ ==") || (fileContent.includes("def ") && fileContent.includes("import "))) {
            logicVerified = true; break;
          }
        } else if (!isJava && !isPython && fileNames.length >= 1) {
          logicVerified = true; break;
        }
      }

      let progress = 0;
      const interval = setInterval(() => {
        progress += 2;
        setAnalysisProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          if (logicVerified) {
            setIsAnalysisComplete(true);
            handleFinalCompletion(); 
          } else {
            setAnalysisError(`Verification failed. No valid entry points detected in the uploaded files.`);
          }
        }
      }, 30);
    } catch (err) {
      setIsAnalyzing(false);
      setAnalysisError("Invalid ZIP archive. Please try again.");
    }
  };

  const calculateScore = () => {
    if (!questions.length) return 100;
    let correct = 0;
    questions.forEach((q, index) => { if (answers[index] === q.correct) correct++; });
    return Math.round((correct / questions.length) * 100);
  };

  const handleFinish = () => {
    setShowResults(true);
    window.scrollTo({ top: 1000, behavior: 'smooth' });
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-center">
      <Loader2 className="animate-spin text-blue-600 mb-4" size={50} />
      <h2 className="text-xl font-bold text-slate-700 tracking-tighter">Initializing {courseId} Lab...</h2>
    </div>
  );

  return (
    <div className="p-6 md:p-12 bg-slate-50 min-h-screen relative">
      
      {isAnalyzing && (
        <div className="fixed inset-0 bg-slate-900/98 z-[100] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
          <Cpu className="text-blue-500 animate-pulse mb-8" size={80} strokeWidth={1} />
          <h2 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase italic">Deep-Scan Logic Analysis</h2>
          <div className="w-full max-w-md bg-white/10 h-2 rounded-full overflow-hidden mb-6">
            <div className="bg-blue-600 h-full transition-all duration-300" style={{ width: `${analysisProgress}%` }}></div>
          </div>
          <span className="text-blue-500 font-mono font-bold mb-10">{analysisProgress}% Verified</span>
          <div className="w-full max-w-lg bg-black/60 rounded-3xl p-8 border border-white/10 text-left font-mono text-xs text-emerald-500/80">
             <div className="flex items-center gap-2 text-slate-500 mb-4 border-b border-white/5 pb-2 uppercase tracking-widest text-[10px]"><Search size={14} /> Assets Detected:</div>
             {detectedFiles.map((f, i) => (<div key={i} className="flex gap-3"><span className="text-slate-700">0{i+1}</span><span className="truncate">{f}</span><span className="text-emerald-900 ml-auto">READ_SUCCESS</span></div>))}
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        <Link href="/courses" className="flex items-center gap-2 text-slate-400 hover:text-blue-600 mb-8 transition-colors font-bold group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Academy
        </Link>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <span className="text-blue-600 font-black tracking-widest uppercase text-xs">Final Assessment Phase</span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight capitalize">{courseId.replace(/-/g, ' ')} Lab</h1>
          </div>
          {showResults && questions.length > 0 && (
            <div className="bg-blue-600 text-white p-6 rounded-[2rem] shadow-2xl animate-in zoom-in duration-500">
              <p className="text-xs uppercase font-black opacity-70 mb-1">Grade</p>
              <p className="text-4xl font-black">{calculateScore()}%</p>
            </div>
          )}
        </div>

        {/* Part 01: Quiz (Only if exists) */}
        {questions.length > 0 && (
          <section className="mb-20 space-y-6">
            <div className="flex items-center gap-3 mb-8 text-slate-500"><BrainCircuit size={24} /><h2 className="text-xl font-bold uppercase tracking-widest">Part 01: Theoretical Mastery</h2></div>
            {questions.map((q, index) => (
              <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm transition-all hover:shadow-md">
                <p className="text-xl font-bold text-slate-800 mb-6">{index + 1}. {q.q}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {q.a.map((opt) => (
                    <button key={opt} disabled={showResults} onClick={() => setAnswers({...answers, [index]: opt})}
                      className={`p-5 rounded-2xl border-2 text-left font-bold transition-all ${answers[index] === opt ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-100 bg-slate-50 text-slate-600'} ${showResults && opt === q.correct ? 'border-green-500 bg-green-50 text-green-700' : ''}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            {!showResults && <button onClick={handleFinish} className="w-full py-6 bg-slate-900 text-white rounded-[2.5rem] font-black text-2xl hover:bg-blue-600 transition-all shadow-xl">Verify Knowledge & Open Capstone</button>}
          </section>
        )}

        {/* Part 02: Project */}
        {currentProject && (
          <section className={`mb-20 transition-all duration-1000 transform ${showResults ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-30 grayscale pointer-events-none'}`}>
             <div className="flex items-center gap-3 mb-8 text-slate-500"><Code size={24} /><h2 className="text-xl font-bold uppercase tracking-widest">Part 02: Real-World Build</h2></div>
             <div className="bg-slate-900 rounded-[3.5rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-4xl font-black mb-4">{currentProject.title}</h3>
                  <p className="text-xl text-slate-400 mb-10 max-w-2xl">{currentProject.desc}</p>
                  
                  <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 mb-10">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentProject.requirements.map((req, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-200"><CheckCircle size={18} className="text-blue-500" /> {req}</li>
                      ))}
                    </ul>
                  </div>

                  {isAnalysisComplete ? (
                    <div className="bg-indigo-600 border-4 border-indigo-400 p-10 rounded-[3rem] text-center shadow-2xl animate-in zoom-in duration-700">
                      <Trophy size={80} className="mx-auto mb-6 text-yellow-400" />
                      <h2 className="text-4xl font-black text-white mb-4 uppercase italic">Course Mastered!</h2>
                      <p className="text-indigo-100 text-xl mb-10 max-w-md mx-auto">Your technical logic has been verified. You are now eligible for graduation.</p>
                      <button onClick={() => router.push(`/certificate?courseId=${courseId}`)} className="bg-white text-indigo-600 px-12 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all flex items-center gap-3 mx-auto shadow-xl">
                        <Download size={24} /> DOWNLOAD CERTIFICATE
                      </button>
                    </div>
                  ) : analysisError ? (
                    <div className="bg-red-600/10 border border-red-500/50 p-8 rounded-[2rem] animate-in shake duration-500">
                      <div className="flex items-start gap-6 mb-6"><AlertTriangle size={40} className="text-red-500 shrink-0" /><div><p className="font-black text-2xl text-red-500 uppercase italic">Verification Failed</p><p className="text-lg text-slate-300 mt-1">{analysisError}</p></div></div>
                      <label className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-xl font-black cursor-pointer hover:bg-red-500 hover:text-white transition-all shadow-lg"><RefreshCcw size={18} />RETRY UPLOAD<input type="file" accept=".zip" onChange={handleFileUpload} className="hidden" /></label>
                    </div>
                  ) : (
                    <label className="w-full bg-blue-600 hover:bg-blue-500 text-center py-6 rounded-2xl font-black cursor-pointer transition-all flex items-center justify-center gap-3 shadow-xl">
                      <Upload size={24} /> SUBMIT PROJECT (.ZIP)
                      <input type="file" accept=".zip" onChange={handleFileUpload} className="hidden" />
                    </label>
                  )}
                </div>
             </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default function LabPage() {
  return (<Suspense fallback={<div className="p-20 text-center font-bold">Loading Lab Engine...</div>}><LabContent /></Suspense>);
}