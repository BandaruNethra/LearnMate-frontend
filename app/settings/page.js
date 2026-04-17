'use client';
import React, { useState, useEffect } from 'react';
import { 
  User, Mail, Phone, ShieldCheck, LogOut, 
  Camera, Save, Lock, ChevronRight, 
  Trash2, Globe, CheckCircle2 
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SettingsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');
  const [isSaved, setIsSaved] = useState(false);
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    profilePic: '' 
  });

  // Load user data on mount
  useEffect(() => {
    const savedName = localStorage.getItem('learnmate_user_name') || 'Learner';
    const savedEmail = localStorage.getItem('learnmate_user_email') || 'student@learnmate.com';
    const savedPic = localStorage.getItem('learnmate_user_pic') || `https://api.dicebear.com/7.x/avataaars/svg?seed=${savedName}`;
    
    setFormData({
      username: savedName,
      email: savedEmail,
      phone: localStorage.getItem('learnmate_user_phone') || '',
      profilePic: savedPic 
    });
  }, []);

  // 📸 PROFILE PIC UPLOAD LOGIC
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2000000) { // 2MB Limit for LocalStorage
        alert("File too large! Please choose an image under 2MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setFormData(prev => ({ ...prev, profilePic: base64String }));
        localStorage.setItem('learnmate_user_pic', base64String); // Instant Save
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Sync all text data to Local Storage
    localStorage.setItem('learnmate_user_name', formData.username);
    localStorage.setItem('learnmate_user_email', formData.email);
    localStorage.setItem('learnmate_user_phone', formData.phone);
    
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const handleLogout = () => {
    localStorage.clear();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight text-center md:text-left">Settings</h1>
            <p className="text-slate-500 font-medium">Update your profile and account details.</p>
          </div>
          <Link href="/courses" className="p-4 bg-white border-2 border-slate-100 rounded-2xl text-slate-400 hover:text-indigo-600 transition-all shadow-sm">
            <ArrowLeft size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* SIDE NAVIGATION */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'profile', label: 'My Profile', icon: User },
              { id: 'security', label: 'Security', icon: Lock },
              { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl font-black text-sm transition-all ${
                  activeTab === tab.id ? 'bg-slate-900 text-white shadow-xl translate-x-2' : 'bg-white text-slate-500 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <tab.icon size={18} /> {tab.label}
                </div>
              </button>
            ))}

            <button onClick={handleLogout} className="w-full flex items-center gap-3 p-4 rounded-2xl font-black text-sm text-red-500 hover:bg-red-50 transition-all mt-10">
              <LogOut size={18} /> Sign Out
            </button>
          </div>

          {/* FORM AREA */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100">
              
              {activeTab === 'profile' && (
                <div className="animate-in fade-in duration-500">
                  <form onSubmit={handleUpdate} className="space-y-10">
                    
                    {/* AVATAR SECTION */}
                    <div className="flex flex-col md:flex-row items-center gap-8 pb-10 border-b border-slate-50">
                      <div className="relative group">
                        <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden bg-indigo-50 border-4 border-white shadow-2xl">
                          <img 
                            src={formData.profilePic} 
                            alt="Profile" 
                            className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                          />
                        </div>
                        <label className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-3.5 rounded-2xl hover:bg-slate-900 transition-all cursor-pointer shadow-xl border-2 border-white">
                          <Camera size={20} />
                          <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                        </label>
                      </div>
                      <div className="text-center md:text-left">
                        <h2 className="text-3xl font-black text-slate-900">{formData.username}</h2>
                        <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">Global Account</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 ml-2">Display Name</label>
                        <input type="text" className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-indigo-500 rounded-2xl font-bold outline-none transition-all"
                          value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})} />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 ml-2">Email Address</label>
                        <input type="email" className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-indigo-500 rounded-2xl font-bold outline-none transition-all"
                          value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 ml-2">Phone Number</label>
                        <input type="tel" className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-indigo-500 rounded-2xl font-bold outline-none transition-all"
                          value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 ml-2">Default Language</label>
                        <select className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-indigo-500 rounded-2xl font-bold outline-none appearance-none">
                          <option>English (US)</option>
                          <option>Hindi</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                      {isSaved ? (
                        <div className="flex items-center gap-2 text-emerald-500 font-black animate-in zoom-in">
                          <CheckCircle2 size={24} /> PROFILE SYNCED!
                        </div>
                      ) : <div />}
                      <button type="submit" className="bg-slate-900 text-white px-12 py-5 rounded-[1.5rem] font-black flex items-center gap-3 hover:bg-indigo-600 transition-all shadow-xl hover:-translate-y-1 active:scale-95">
                        <Save size={20} /> SAVE CHANGES
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'privacy' && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-6">
                  <h2 className="text-3xl font-black text-slate-900">Privacy Policy</h2>
                  <div className="prose text-slate-500 font-medium leading-relaxed">
                    <p>At LearnMate, your privacy is our top priority. We only collect the data necessary to provide you with a personalized learning experience and to generate your verified certificates.</p>
                    <h3 className="text-slate-900 font-bold mt-4">1. Data Collection</h3>
                    <p>We store your name, email, and course progress to ensure your achievements are recorded accurately.</p>
                    <h3 className="text-slate-900 font-bold mt-4">2. Project Submissions</h3>
                    <p>ZIP files uploaded for lab verification are analyzed for logic entry points and are not stored indefinitely on our public servers.</p>
                    <h3 className="text-slate-900 font-bold mt-4">3. Security</h3>
                    <p>We use industry-standard encryption to protect your account information.</p>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                  <div className="p-6 bg-amber-50 rounded-[2rem] border border-amber-100 flex gap-4">
                    <Trash2 className="text-amber-500 shrink-0" />
                    <div>
                      <h4 className="font-black text-amber-900">Delete Account</h4>
                      <p className="text-sm text-amber-700 font-medium">Once you delete your account, there is no going back. All course progress and certificates will be lost.</p>
                      <button className="mt-4 text-red-600 font-black text-xs uppercase tracking-widest hover:underline">Deactivate account</button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add this at the top of the file so ArrowLeft works
import { ArrowLeft } from 'lucide-react';