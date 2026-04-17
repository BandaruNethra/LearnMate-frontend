'use client';
import React, { useState, use, useEffect } from 'react';
import { coursesData } from '@/data';
import { useRouter } from 'next/navigation';
import { useCourseStorage } from '@/hooks/useCourseStorage'; 
import { 
  ArrowLeft, ChevronRight, FileText, Beaker, 
  CheckCircle2, Trophy, Sparkles, Lock, PlayCircle 
} from 'lucide-react';
import Link from 'next/link';

export default function CoursePage({ params }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const course = coursesData[id];

  const { isEnrolled, isCompleted, isLoaded, enroll, completeCourse } = useCourseStorage(id);

  const [activeModuleIdx, setActiveModuleIdx] = useState(0);
  const [activeLessonIdx, setActiveLessonIdx] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeLessonIdx, activeModuleIdx]);

  if (!isLoaded) return null; 
  if (!course) return <div className="p-20 text-center font-black">COURSE NOT FOUND</div>;

  const currentModule = course.modules[activeModuleIdx];
  const currentLesson = currentModule?.lessons[activeLessonIdx];

  const handleNext = () => {
    const isLastLesson = activeLessonIdx === currentModule.lessons.length - 1;
    const isLastModule = activeModuleIdx === course.modules.length - 1;

    if (!isLastLesson) {
      setActiveLessonIdx(prev => prev + 1);
    } else if (!isLastModule) {
      setActiveModuleIdx(prev => prev + 1);
      setActiveLessonIdx(0);
    } else {
      completeCourse(); 
      router.push(`/lab?courseId=${id}`);
    }
  };

  if (!isEnrolled) {
    return (
      <div className="min-h-screen bg-white">
        <header className="h-20 border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between px-10">
          <Link href="/courses" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600">
            <ArrowLeft size={16} /> Back to Academy
          </Link>
          <button 
            onClick={enroll} 
            className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-indigo-100"
          >
            Enroll Now
          </button>
        </header>

        <main className="max-w-6xl mx-auto py-20 px-10">
          <div className="mb-20 text-center lg:text-left">
            <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Professional Series</span>
            <h1 className="text-8xl font-black text-slate-900 tracking-tightest leading-[0.9] mb-8 capitalize">
              {course.title}
            </h1>
            <p className="text-2xl text-slate-500 max-w-2xl leading-relaxed">
              {course.description || "Build a rock-solid foundation with industry-standard expertise."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-10">Course Syllabus</h3>
              <div className="space-y-6">
                {course.modules.map((mod, i) => (
                  <div key={i} className="p-10 border-2 border-slate-50 rounded-[3rem]">
                    <span className="text-[10px] font-black text-indigo-500 uppercase mb-2 block tracking-widest">Module 0{i+1}</span>
                    <h4 className="text-2xl font-black text-slate-900 mb-6">{mod.title}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {mod.lessons.map((less, j) => (
                        <div key={j} className="flex items-center gap-3 text-sm font-bold text-slate-400">
                          <Lock size={14} className="text-slate-200" /> {less.title}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 p-10 bg-slate-900 rounded-[3rem] text-white shadow-3xl">
                <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-8">Enrollment</h4>
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Access</span>
                    <span className="font-bold">Lifetime</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Environment</span>
                    <span className="font-bold text-emerald-400">Cloud Lab</span>
                  </div>
                </div>
                <button 
                  onClick={enroll} 
                  className="w-full bg-indigo-600 py-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-indigo-600 transition-all shadow-2xl"
                >
                  Start Learning Now
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="h-20 border-b flex items-center justify-between px-10 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <Link href="/courses" className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600">
            <ArrowLeft size={20} />
          </Link>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                {isCompleted ? "✓ COURSE COMPLETED" : "STUDENT VIEW"}
            </span>
            <span className="font-black text-slate-900 text-xl tracking-tight leading-none capitalize">
              {course.title}
            </span>
          </div>
        </div>
        <button onClick={handleNext} className="bg-slate-900 text-white px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-600 transition-all">
          {activeModuleIdx === course.modules.length - 1 && activeLessonIdx === currentModule.lessons.length - 1 ? "Finish Course" : "Next Lesson"}
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-85 border-r bg-slate-50/50 overflow-y-auto hidden lg:block p-8">
          {course.modules.map((mod, mIdx) => (
            <div key={mIdx} className="mb-8">
              <h4 className={`text-[10px] font-black uppercase mb-4 tracking-widest ${activeModuleIdx === mIdx ? 'text-indigo-600' : 'text-slate-400'}`}>
                {mod.title}
              </h4>
              <div className="flex flex-col gap-1">
                {mod.lessons.map((lesson, lIdx) => (
                  <button
                    key={lIdx}
                    onClick={() => {
                        setActiveModuleIdx(mIdx);
                        setActiveLessonIdx(lIdx);
                    }}
                    className={`text-left py-2 px-3 rounded-xl text-sm transition-all ${
                      activeModuleIdx === mIdx && activeLessonIdx === lIdx 
                        ? 'bg-indigo-600 text-white font-bold shadow-lg shadow-indigo-100' 
                        : 'text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    {lesson.title}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        <main className="flex-1 overflow-y-auto p-20 scroll-smooth">
          <div className="max-w-3xl mx-auto">
            {/* UPDATED CONTENT LOGIC FOR LABS */}
            {currentLesson.type === "lab" ? (
              <div className="animate-in fade-in zoom-in duration-700 mt-10">
                <div className="text-center py-20 bg-indigo-600 rounded-[3rem] shadow-2xl shadow-indigo-100 border border-white/10 relative overflow-hidden">
                  <div className="relative z-10 px-10">
                    <h2 className="text-6xl font-black text-white mb-6">Congratulations!</h2>
                    <p className="text-indigo-100 mb-12 text-xl max-w-sm mx-auto leading-relaxed">
                      You've mastered the curriculum for {course.title}. Now prove it in the final lab assessment.
                    </p>
                    <div className="flex flex-col gap-4 max-w-xs mx-auto">
                        <button 
                          onClick={() => router.push(`/lab?courseId=${id}`)}
                          className="bg-white text-indigo-600 py-6 rounded-2xl font-black tracking-widest uppercase text-sm hover:scale-105 transition-all shadow-xl"
                        >
                          Take Final Quiz
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <h1 className="text-6xl font-black text-slate-900 mb-10 tracking-tightest leading-[0.9]">{currentLesson.title}</h1>
                <article 
                  className="prose prose-indigo prose-2xl max-w-none text-slate-600 leading-relaxed prose-pre:bg-slate-900 prose-pre:rounded-[2.5rem] prose-pre:p-10"
                  dangerouslySetInnerHTML={{ __html: currentLesson.content }}
                />
              </>
            )}

            <div className="mt-20 pt-10 border-t flex justify-end">
                <button onClick={handleNext} className="bg-indigo-600 text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] flex items-center gap-2 shadow-2xl">
                    {activeModuleIdx === course.modules.length - 1 && activeLessonIdx === currentModule.lessons.length - 1 ? "Enter Lab" : "Next Lesson"} <ChevronRight size={16}/>
                </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}