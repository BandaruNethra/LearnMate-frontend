'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Trophy, CheckCircle2, Award } from 'lucide-react';

const COURSE_DATABASE = [
  { id: "java-fundamentals", title: "Java Fundamentals", cat: "Java", thumb: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500" },
  { id: "java-spring-boot", title: "Advanced Java Spring Boot", cat: "Java", thumb: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500" },
  { id: "java-dsa", title: "Java Data Structures", cat: "Java", thumb: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500" },
  { id: "java-android", title: "Java Android Dev", cat: "Java", thumb: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=500" },
  { id: "c-101", title: "C Programming 101", cat: "C", thumb: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500" },
  { id: "embedded-c", title: "Embedded Systems in C", cat: "C", thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500" },
  { id: "c-graphics", title: "C Graphics Library", cat: "C", thumb: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500" },
  { id: "python-beginners", title: "Python for Beginners", cat: "Python", thumb: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500" },
  { id: "python-data-science", title: "Python Data Science", cat: "Python", thumb: "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9uJTIwZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D" },
  { id: "python-ai", title: "AI with Python", cat: "Python", thumb: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500" },
  { id: "react-mastery", title: "React Mastery", cat: "Web", thumb: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500" },
  { id: "modern-css", title: "Modern CSS/Tailwind", cat: "Web", thumb: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=500" },
  { id: "nextjs-fullstack", title: "Next.js Fullstack", cat: "Web", thumb: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=500" },
  { id: "javascript-pro", title: "JavaScript Pro", cat: "Web", thumb: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500" },
  { id: "java-big-data", title: "Big Data Java", cat: "Java", thumb: "https://media.istockphoto.com/id/870344898/photo/3d-text-of-java.webp?a=1&b=1&s=612x612&w=0&k=20&c=j7l0I1bmoYU7m_HNgyRqG5YxlcSH9vXTaY4ihXf322U=" },
  { id: "java-testing", title: "Java Testing (JUnit)", cat: "Java", thumb: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=500" },
  { id: "python-fastapi", title: "FastAPI Python", cat: "Python", thumb: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500" },
];

// REUSABLE CARD COMPONENT
function CourseCard({ course, isEnrolled, isCompleted }) {
  return (
    <div className={`group bg-white rounded-[2.5rem] overflow-hidden border-2 transition-all duration-500 ${isEnrolled ? 'border-indigo-100 shadow-sm' : 'border-slate-50'}`}>
      <div className="h-44 overflow-hidden relative">
        <img src={course.thumb} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={course.title} />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[9px] font-black uppercase text-indigo-600 shadow-sm">
          {course.cat}
        </div>
        {isCompleted && (
          <div className="absolute top-4 right-4 bg-emerald-500 text-white p-1.5 rounded-full shadow-lg border-2 border-white">
            <CheckCircle2 size={14} strokeWidth={3} />
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-black text-slate-800 mb-6 leading-tight h-12 overflow-hidden">
          {course.title}
        </h3>
        
        {isEnrolled ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className={`text-[10px] font-black uppercase tracking-widest ${isCompleted ? 'text-emerald-500' : 'text-indigo-600'}`}>
                {isCompleted ? "Mastered" : "Final Lab Pending"}
              </span>
              <span className="text-[10px] font-black text-slate-400">{isCompleted ? "100%" : "80%"}</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className={`h-full transition-all duration-1000 ${isCompleted ? 'bg-emerald-500 w-full' : 'bg-indigo-500 w-[80%]'}`} />
            </div>
            
            {/* If completed, show Certificate claim button, else continue to course */}
            {isCompleted ? (
                <Link href={`/certificate?courseId=${course.id}`} className="block">
                    <button className="w-full py-3.5 bg-emerald-600 text-white font-black rounded-xl text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all">
                        <Award size={14} /> Claim Certificate
                    </button>
                </Link>
            ) : (
                <Link href={`/courses/${course.id}`} className="block">
                    <button className="w-full py-3.5 bg-indigo-50 text-indigo-600 font-black rounded-xl text-[10px] uppercase tracking-widest hover:bg-indigo-600 hover:text-white transition-all">
                        Complete Final Lab
                    </button>
                </Link>
            )}
          </div>
        ) : (
          <Link href={`/courses/${course.id}`} className="block">
            <button className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl text-[10px] uppercase tracking-widest hover:bg-indigo-600 hover:-translate-y-1 transition-all shadow-xl shadow-slate-200">
              Enroll Now
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Academy() {
  const [enrolledIds, setEnrolledIds] = useState([]);
  const [completedIds, setCompletedIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [activeCat, setActiveCat] = useState('All');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const sync = () => {
        // We strictly check for 'learnmate_completed_' which is only set after the Project analysis succeeds
        const enrolled = COURSE_DATABASE.filter(c => localStorage.getItem(`learnmate_enrolled_${c.id}`) === 'true').map(c => c.id);
        const completed = COURSE_DATABASE.filter(c => localStorage.getItem(`learnmate_completed_${c.id}`) === 'true').map(c => c.id);
        setEnrolledIds(enrolled);
        setCompletedIds(completed);
    }
    sync();
    window.addEventListener('focus', sync);
    return () => window.removeEventListener('focus', sync);
  }, []);

  if (!mounted) return null;

  const categories = ['All', 'Java', 'C', 'Python', 'Web'];

  // Data Filtering
  const completedCourses = COURSE_DATABASE.filter(c => completedIds.includes(c.id));
  const activeCourses = COURSE_DATABASE.filter(c => enrolledIds.includes(c.id) && !completedIds.includes(c.id));
  const otherCourses = COURSE_DATABASE.filter(c => !enrolledIds.includes(c.id));

  return (
    <div className="min-h-screen bg-slate-50 p-8 lg:p-16">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <header className="mb-12">
          <h1 className="text-6xl font-black text-slate-900 mb-10 tracking-tighter text-center md:text-left">LearnMate Academy</h1>
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10">
            <div className="flex bg-slate-200/60 p-1.5 rounded-2xl w-fit">
              {['All', 'Enrolled', 'Completed'].map(t => (
                <button key={t} onClick={() => setActiveTab(t)}
                  className={`px-8 py-3 rounded-xl text-sm font-black transition-all ${activeTab === t ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-800'}`}>
                  {t}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" placeholder="Search courses..."
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-500 font-bold"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(c => (
              <button key={c} onClick={() => setActiveCat(c)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest border-2 transition-all ${activeCat === c ? 'bg-slate-900 text-white border-slate-900 shadow-lg' : 'bg-white text-slate-400 border-slate-100 hover:border-indigo-400'}`}>
                {c}
              </button>
            ))}
          </div>
        </header>

        {/* SECTIONED GRID */}
        <div className="space-y-16">
          
          {/* 1. COMPLETED COURSES SECTION */}
          {(activeTab === 'All' || activeTab === 'Completed') && completedCourses.length > 0 && (
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-8 flex items-center gap-2">
                <Trophy size={14} /> Completed Mastery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {completedCourses
                  .filter(c => (activeCat === 'All' || c.cat === activeCat) && c.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(course => (
                    <CourseCard key={course.id} course={course} isEnrolled={true} isCompleted={true} />
                ))}
              </div>
            </section>
          )}

          {/* 2. ACTIVE ENROLLED SECTION */}
          {(activeTab === 'All' || activeTab === 'Enrolled') && activeCourses.length > 0 && (
            <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-600 mb-8">Active Learning</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {activeCourses
                  .filter(c => (activeCat === 'All' || c.cat === activeCat) && c.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(course => (
                    <CourseCard key={course.id} course={course} isEnrolled={true} isCompleted={false} />
                ))}
              </div>
            </section>
          )}

          {/* 3. EXPLORE ALL SECTION */}
          {activeTab === 'All' && (
            <section>
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8">Explore Catalog</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {otherCourses
                  .filter(c => (activeCat === 'All' || c.cat === activeCat) && c.title.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(course => (
                    <CourseCard key={course.id} course={course} isEnrolled={false} isCompleted={false} />
                ))}
              </div>
            </section>
          )}

          {/* EMPTY STATES */}
          {activeTab === 'Completed' && completedCourses.length === 0 && (
             <div className="text-center py-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-100">
                <p className="text-slate-400 font-bold">No completed courses yet. Verify a project to earn your first certificate!</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}