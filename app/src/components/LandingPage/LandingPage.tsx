import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Zap,
  Play,
  ClipboardCheck,
  Layout,
  FileCode
} from 'lucide-react';

/**
 * Custom Hook for Scroll Animations
 */
const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (elementRef.current) observer.unobserve(elementRef.current);
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return [elementRef, isIntersecting] as const;
};

/**
 * Animated Section Component
 */
const RevealSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
};

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter = () => console.log("Enter Livebook clicked") }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePreview, setActivePreview] = useState<'streams' | 'attendance' | 'courses'>('streams');

  // Preview data focused on the specific startup features requested
  const previewTabs = {
    streams: {
      title: "Livebook Streams",
      desc: "Every lecture is a living document. Mix markdown, runnable code, and video into a single interactive stream.",
      color: "bg-indigo-600",
      icon: <Play className="w-6 h-6" />
    },
    attendance: {
      title: "Digital Attendance",
      desc: "Instant tracking with CSV bulk uploads and historical exports. No more manual spreadsheets.",
      color: "bg-emerald-500",
      icon: <ClipboardCheck className="w-6 h-6" />
    },
    courses: {
      title: "Course Architecture",
      desc: "Organize your streams into structured courses. A seamless hierarchy for departments and classes.",
      color: "bg-amber-500",
      icon: <Layout className="w-6 h-6" />
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-200">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-indigo-950 rounded-lg flex items-center justify-center text-amber-400 group-hover:rotate-12 transition-transform">
              <Zap size={24} fill="currentColor" />
            </div>
            <div>
              <h1 className="font-black text-xl leading-tight text-indigo-950 italic">SKD</h1>
              <p className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Project Livebook</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="font-bold text-sm uppercase tracking-wider text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#vision" className="font-bold text-sm uppercase tracking-wider text-slate-600 hover:text-indigo-600 transition-colors">Our Vision</a>
            <button 
              onClick={onEnter}
              className="bg-indigo-950 hover:bg-indigo-900 text-white px-6 py-2.5 rounded-xl font-bold transition-all hover:shadow-lg"
            >
              Enter Beta
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 p-6 space-y-4">
            <a href="#features" className="block text-lg font-bold" onClick={() => setIsMenuOpen(false)}>Features</a>
            <button onClick={onEnter} className="w-full bg-indigo-950 text-white py-4 rounded-xl font-bold">Launch App</button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <RevealSection>
            <div className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-1.5 rounded-full mb-8">
              <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-amber-400 text-indigo-950 rounded">New</span>
              <span className="text-xs font-bold opacity-80 uppercase tracking-widest">Smart Attendance v2.0 is live</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-indigo-950 mb-6 leading-[0.9] tracking-tighter">
              EVERY LECTURE, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">IS A LIVEBOOK.</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-10 leading-relaxed font-medium">
              A startup building the future of classroom interaction. Replace static PDFs with dynamic streams that students actually want to read.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={onEnter}
                className="w-full sm:w-auto bg-indigo-950 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-indigo-900 transition-all hover:scale-[1.02] shadow-xl shadow-indigo-100"
              >
                Go to Livebook
                <ArrowRight size={20} />
              </button>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* --- FEATURE DEEP DIVE: THE STREAM --- */}
      <section id="features" className="py-24 bg-indigo-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealSection>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Livebook Streams: <br />
                <span className="text-amber-400">Beyond the PDF.</span>
              </h2>
              <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
                A "Stream" is our core innovation. Instead of static files, teachers create interactive feeds. Each stream is a collection of "Blocks" that can be moved, updated, and synced in real-time.
              </p>
              
              <ul className="space-y-4">
                {[
                  { icon: <FileCode className="text-amber-400" />, title: "Code Blocks", desc: "Runnable snippets for tech courses." },
                  { icon: <BookOpen className="text-amber-400" />, title: "Markdown Notes", desc: "Clean, distraction-free reading." },
                  { icon: <Play className="text-amber-400" />, title: "Media Embeds", desc: "Directly link YouTube or drive videos." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-indigo-300 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </RevealSection>

            <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 blur-[100px] opacity-20"></div>
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-6 space-y-4 rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="h-4 w-32 bg-amber-400/20 rounded"></div>
                    <div className="h-40 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center italic text-white/40">Interactive Stream Block #1</div>
                    <div className="h-20 bg-indigo-500/20 rounded-xl border border-indigo-500/30 flex items-center px-6">
                        <div className="w-full h-2 bg-indigo-400/30 rounded"></div>
                    </div>
                    <div className="h-32 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center italic text-white/40">Interactive Stream Block #2</div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE FEATURES: COURSES & ATTENDANCE --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <RevealSection className="bg-white p-12 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                    <ClipboardCheck size={32} />
                </div>
                <h3 className="text-3xl font-black text-indigo-950 mb-4">Digital Attendance</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">
                    Fast, robust attendance management for small institutions. 
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-xl text-center">
                        <div className="font-black text-emerald-600 uppercase text-[10px] tracking-widest mb-1">Method</div>
                        <div className="font-bold text-slate-800">CSV Bulk Upload</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl text-center">
                        <div className="font-black text-emerald-600 uppercase text-[10px] tracking-widest mb-1">Reports</div>
                        <div className="font-bold text-slate-800">History Export</div>
                    </div>
                </div>
            </RevealSection>

            <RevealSection className="bg-white p-12 rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50">
                <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-8">
                    <Layout size={32} />
                </div>
                <h3 className="text-3xl font-black text-indigo-950 mb-4">Course Architecture</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-6">
                    Organize your content by department, semester, or course title. 
                </p>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-700 font-bold">
                        <CheckCircle2 size={18} className="text-amber-500" />
                        Seamless Stream Hierarchy
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 font-bold">
                        <CheckCircle2 size={18} className="text-amber-500" />
                        Admin & Teacher Permission Levels
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 font-bold">
                        <CheckCircle2 size={18} className="text-amber-500" />
                        Real-time Student Access
                    </div>
                </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE DEMO --- */}
      <section id="vision" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl font-black text-indigo-950 mb-4 italic">Experience the Ecosystem</h2>
            <p className="text-slate-500 font-medium">Click a tab to see how the SKD Livebook app adapts to your workflow.</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              {Object.entries(previewTabs).map(([key, data]) => (
                <button
                  key={key}
                  onClick={() => setActivePreview(key as 'streams' | 'attendance' | 'courses')}
                  className={`w-full text-left p-6 rounded-3xl border-2 transition-all duration-300 flex items-start gap-5 ${
                    activePreview === key 
                      ? 'bg-slate-50 border-indigo-600 shadow-xl scale-105' 
                      : 'bg-transparent border-transparent hover:bg-slate-50 opacity-60'
                  }`}
                >
                  <div className={`p-4 rounded-2xl ${activePreview === key ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-400'}`}>
                    {data.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-indigo-950 mb-1">{data.title}</h3>
                    <p className="text-slate-500 font-medium leading-tight">{data.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="relative">
              <div className="relative bg-slate-900 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col">
                <div className="h-10 bg-slate-800 flex items-center px-6 border-b border-slate-700/50">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                    </div>
                </div>
                
                <div className="flex-1 p-8 text-white space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="flex justify-between items-center">
                    <div className="h-6 w-40 bg-slate-700 rounded-lg"></div>
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${previewTabs[activePreview].color}`}>
                       {previewTabs[activePreview].icon}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="h-12 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center px-4">
                        <div className="h-2 w-3/4 bg-slate-600 rounded"></div>
                    </div>
                    <div className="h-12 bg-slate-800/50 rounded-xl border border-slate-700 flex items-center px-4">
                        <div className="h-2 w-1/2 bg-slate-600 rounded"></div>
                    </div>
                    <div className="h-24 bg-slate-800/50 rounded-xl border border-slate-700 p-4">
                        <div className="grid grid-cols-4 gap-2">
                            {[1,2,3,4].map(i => <div key={i} className="h-10 bg-slate-700 rounded-md"></div>)}
                        </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white text-indigo-950 p-4 rounded-xl shadow-lg text-center font-black uppercase text-xs tracking-widest">
                    Live System: {previewTabs[activePreview].title}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <RevealSection className="bg-indigo-950 rounded-[3rem] p-16 text-center text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-1000">
               <Zap size={300} fill="currentColor" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 relative z-10">Start Your Livebook.</h2>
            <p className="text-indigo-200 font-bold mb-10 relative z-10 max-w-xl mx-auto">
                Join our beta and transform your lectures into dynamic streams today.
            </p>
            <button 
                onClick={onEnter}
                className="bg-amber-400 text-indigo-950 px-12 py-5 rounded-2xl font-black text-xl hover:bg-white transition-all relative z-10"
            >
                Launch App
            </button>
          </RevealSection>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-950 rounded flex items-center justify-center text-amber-400">
              <Zap size={14} fill="currentColor" />
            </div>
            <span className="font-black text-lg text-indigo-950 italic">SKD</span>
          </div>
          <div className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
            SKD Project &copy; {new Date().getFullYear()} — Pioneer Education
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -40px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 8s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}} />
    </div>
  );
};
