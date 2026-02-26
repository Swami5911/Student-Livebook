import { useState, useEffect } from 'react';
import './styles/theme.css';
import { ref, onValue, set, get } from "firebase/database";
import { database, auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ClassSelection } from './components/Dashboard/ClassSelection';
import { StreamSelection } from './components/Dashboard/StreamSelection';
import { UnitDashboard } from './components/Dashboard/UnitDashboard';
import { COURSE_DATA } from './data/courseData';
import { LectureView } from './components/Lecture/LectureView';
import { LoginModal } from './components/Auth/LoginModal';
import { AdminPanel } from './components/Admin/AdminPanel';
import { AttendanceDashboard } from './components/Attendance/AttendanceDashboard';
import type { UserRole } from './types';
import universityLogo from './assets/universitylogo.png';
import { initGoogleClient, signIn, signOut, syncLectureToGoogleDoc } from './utils/googleDocs';
import { lectureToRawText } from './utils/LectureParser';
import { LandingPage } from './components/LandingPage/LandingPage';
import { ErrorBoundary } from './components/ErrorBoundary';


const sanitizeForFirebase = (data: any) => {
  // Removes undefined values which Firebase doesn't support
  return JSON.parse(JSON.stringify(data));
};


function App() {
  // State for course data to allow in-memory updates
  const [courseData, setCourseData] = useState(COURSE_DATA);

  // Sync with Firebase
  useEffect(() => {
    const dataRef = ref(database, 'courseData');
    const unsubscribe = onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // MIGRATION LOGIC: Check if data needs update (e.g., missing keys)
        const needsUpdate = data.some((cls: any) => !cls.institutionName || !cls.logo);
        
        if (needsUpdate) {
            const updatedData = data.map((cls: any) => {
                const defaultCls = COURSE_DATA.find(c => c.id === cls.id);
                return {
                    ...cls,
                    institutionName: cls.institutionName || defaultCls?.institutionName || "My Institution",
                    type: cls.type || defaultCls?.type || 'university',
                    logo: cls.logo || defaultCls?.logo || '/src/assets/universitylogo.png'
                };
            });
            set(dataRef, sanitizeForFirebase(updatedData)); // Auto-fix DB
            setCourseData(updatedData);
        } else {
            setCourseData(data);
        }
      } else {
        set(dataRef, sanitizeForFirebase(COURSE_DATA));
      }
    }, (error) => {
        console.error("Firebase Read Error:", error);
    });
    return () => unsubscribe();
  }, []);

  const [authUser, setAuthUser] = useState<any>(null);
  const [userName, setUserName] = useState<string>('');
  const [role, setRole] = useState<UserRole>('student');
  const [selectedClassId, setSelectedClassId] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('classId');
  });
  const [selectedStreamId, setSelectedStreamId] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('streamId');
  });
  const [activeLectureId, setActiveLectureId] = useState<string | null>(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('lectureId');
  });

  // Landing Page State
  const [showLandingPage, setShowLandingPage] = useState<boolean>(() => {
    const params = new URLSearchParams(window.location.search);
    // Show landing page only if no deep link is present
    return !params.has('classId'); 
  });

  // Sync state to URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedClassId) params.set('classId', selectedClassId);
    if (selectedStreamId) params.set('streamId', selectedStreamId);
    if (activeLectureId) params.set('lectureId', activeLectureId);

    const newSearch = params.toString();
    const currentSearch = window.location.search.replace('?', '');

    if (newSearch !== currentSearch) {
      const newUrl = newSearch ? `/?${newSearch}` : '/';
      window.history.pushState(null, '', newUrl);
    }
  }, [selectedClassId, selectedStreamId, activeLectureId]);

  // Handle Browser Back/Forward
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setSelectedClassId(params.get('classId'));
      setSelectedStreamId(params.get('streamId'));
      setActiveLectureId(params.get('lectureId'));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isGoogleSignedIn, setIsGoogleSignedIn] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);


  // Apply role to body for global CSS theming
  useEffect(() => {
    document.body.setAttribute('data-role', role);
  }, [role]);

  // Auth Listener
  useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
          setAuthUser(user);
          if (user) {
              // Fetch Role
              const userRef = ref(database, `users/${user.uid}`);
              const snapshot = await get(userRef);
              if (snapshot.exists()) {
                  const userData = snapshot.val();
                  setRole(userData.role);
                  setUserName(userData.name || 'User');
              } else {
                  // FIRST TIME SETUP: Make first user Admin
                  const allUsersRef = ref(database, 'users');
                  const allUsersSnap = await get(allUsersRef);
                  if (!allUsersSnap.exists()) {
                      set(userRef, { email: user.email, role: 'admin', name: 'Super Admin' });
                      setRole('admin');
                      setUserName('Super Admin');
                      alert("Welcome! You are the first user, so you have been made ADMIN.");
                  } else {
                      setRole('student');
                      setUserName('Student');
                      // Fix: since user was successfully created but not in DB, assume they are a student or prompt them
                  }
              }
              setIsLoginOpen(false);
          } else {
              setRole('student'); // Guest state
          }
      });
      return () => unsubscribe();
  }, []);

  // Init Google Client
  useEffect(() => {
    initGoogleClient((isSignedIn) => {
        setIsGoogleSignedIn(isSignedIn);
    });
  }, []);


    // Derived state from the stateful courseData
    const activeClass = courseData.find(c => c.id === selectedClassId);
    const activeStream = (activeClass?.streams || []).find(s => s.id === selectedStreamId);
    const activeLectureIndex = (activeStream?.lectures || []).findIndex(l => l.id === activeLectureId);
    const activeLecture = activeLectureIndex !== -1 ? (activeStream?.lectures || [])[activeLectureIndex] : undefined;

    const resetAll = () => {
        setActiveLectureId(null);
        setSelectedStreamId(null);
        setSelectedClassId(null);
    };


  const handleUpdateResources = (lectureId: string, resources: { quizLink: string, pptLink: string, pdfLink: string }) => {
    const updatedData = courseData.map(cls => ({
        ...cls,
        streams: (cls.streams || []).map(stream => ({
            ...stream,
            lectures: (stream.lectures || []).map(lecture => {
                if (lecture.id === lectureId) {
                    return { 
                        ...lecture, 
                        quizLink: resources.quizLink,
                        pptLink: resources.pptLink,
                        pdfLink: resources.pdfLink
                    };
                }
                return lecture;
            })
        }))
    }));
    set(ref(database, 'courseData'), sanitizeForFirebase(updatedData))
        .then(() => alert(`Resources updated for this session!`))
        .catch((error) => {
            console.error("Firebase update failed:", error);
            alert(`Error saving resources: ${error.message}`);
        });
  };

  const handleAddLecture = async (newLecture: import('./types').Lecture) => {
    if (!selectedClassId || !selectedStreamId) return;

    if (isGoogleSignedIn) {
        try {
            const rawText = lectureToRawText(newLecture);
            const docId = await syncLectureToGoogleDoc(newLecture.title, rawText);
            if (docId) {
                newLecture.googleDocId = docId;
            }
        } catch (e) {
            console.error("Google Sync Failed", e);
            alert("Warning: Failed to create Google Doc. Lecture will be saved locally only.");
        }
    }

    const updatedData = courseData.map(cls => {
        if (cls.id !== selectedClassId) return cls;
        return {
            ...cls,
            streams: (cls.streams || []).map(stream => {
                if (stream.id !== selectedStreamId) return stream;
                return {
                    ...stream,
                    lectures: [...(stream.lectures || []), newLecture]
                };
            })
        };
    });

    set(ref(database, 'courseData'), sanitizeForFirebase(updatedData));
  };

  const handleEditLecture = async (updatedLecture: import('./types').Lecture) => {
    if (!selectedClassId || !selectedStreamId) return;

    if (isGoogleSignedIn) {
        try {
            const rawText = lectureToRawText(updatedLecture);
            const docId = await syncLectureToGoogleDoc(updatedLecture.title, rawText, updatedLecture.googleDocId);
            if (docId) {
                updatedLecture.googleDocId = docId;
            }
        } catch (e) {
            console.error("Google Sync Failed", e);
            alert("Warning: Failed to sync to Google Doc. Changes saved locally.");
        }
    }

    const updatedData = courseData.map(cls => {
        if (cls.id !== selectedClassId) return cls;
        return {
            ...cls,
            streams: (cls.streams || []).map(stream => {
                if (stream.id !== selectedStreamId) return stream;
                return {
                    ...stream,
                    lectures: (stream.lectures || []).map(l => 
                        l.id === updatedLecture.id ? updatedLecture : l
                    )
                };
            })
        };
    });

    set(ref(database, 'courseData'), sanitizeForFirebase(updatedData));
  };

    // 3. Course (ClassLevel) Management
    const handleAddClass = () => {
        const name = prompt("Enter Course Name (e.g., 'B.Tech - Computer Science')");
        if (!name) return;
        const description = prompt("Enter Description", "Bachelor of Technology");
        if (!description) return;

        const newClass: import('./types').ClassLevel = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            description,
            streams: []
        };
        
        const updatedData = [...courseData, newClass];
        set(ref(database, 'courseData'), sanitizeForFirebase(updatedData));
    };

    const handleEditClass = (cls: import('./types').ClassLevel) => {
        const name = prompt("Edit Course Name", cls.name);
        if (name === null) return; 
        const description = prompt("Edit Description", cls.description);
        
        const institutionName = prompt("Edit Institution Name", cls.institutionName || "");
        const typeInput = prompt("Edit Type: 'school' or 'university'", cls.type || "university");
        const type: 'school' | 'university' | 'other' = (typeInput === 'school' || typeInput === 'university') ? typeInput : 'other';
        const logo = prompt("Edit Logo Path (e.g. /src/assets/schoollogo.png or https://...)", cls.logo || "");

        const updatedData = courseData.map(c => c.id === cls.id ? { 
            ...c, 
            name: name || c.name, 
            description: description || c.description,
            institutionName: institutionName || c.institutionName,
            type: type || c.type,
            logo: logo || c.logo
        } : c);
        set(ref(database, 'courseData'), sanitizeForFirebase(updatedData));
    };

    const handleDeleteClass = (id: string) => {
        const updatedData = courseData.filter(c => c.id !== id);
        set(ref(database, 'courseData'), sanitizeForFirebase(updatedData));
    };

    // 4. Stream Management
    const handleAddStream = () => {
        if (!selectedClassId) return;
        const name = prompt("Enter Subject Name (e.g., 'Data Structures')");
        if (!name) return;
        const description = prompt("Enter Description", "Core Subject");
        if (!description) return;

        const thumbnail = '/images/thumb_computer_basics.png'; 

        const newStream: import('./types').Stream = {
            id: Math.random().toString(36).substr(2, 9),
            name,
            description,
            thumbnail,
            lectures: []
        };
        
        const updatedData = courseData.map(c => {
            if (c.id === selectedClassId) {
                return { ...c, streams: [...(c.streams || []), newStream] };
            }
            return c;
        });
        set(ref(database, 'courseData'), sanitizeForFirebase(updatedData));
    };

    const handleEditStream = (stream: import('./types').Stream) => {
        if (!selectedClassId) return;
        const name = prompt("Edit Subject Name", stream.name);
        if (name === null) return;
        const description = prompt("Edit Description", stream.description);
        
        const updatedData = courseData.map(c => {
            if (c.id === selectedClassId) {
                return { 
                    ...c, 
                    streams: (c.streams || []).map(s => s.id === stream.id ? { ...s, name: name || s.name, description: description || s.description } : s)
                };
            }
            return c;
        });
        set(ref(database, 'courseData'), sanitizeForFirebase(updatedData));
    };

    const handleDeleteStream = (streamId: string) => {
        if (!selectedClassId) return;
        const updatedData = courseData.map(c => {
            if (c.id === selectedClassId) {
                return { ...c, streams: (c.streams || []).filter(s => s.id !== streamId) };
            }
            return c;
        });
        set(ref(database, 'courseData'), sanitizeForFirebase(updatedData));
    };

  if (showLandingPage) {
    return <LandingPage onEnter={() => {
      setShowLandingPage(false);
      if (!authUser) setIsLoginOpen(true);
    }} />;
  }

  return (
    <ErrorBoundary>
    <div className="app-shell">
      <nav className="top-nav">
        <div className="container nav-content">
          <div className="brand" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <img 
                src={activeClass?.logo || universityLogo} 
                alt="Logo" 
                style={{height: '50px', maxHeight: '100%', cursor: 'pointer', objectFit: 'contain'}} 
                className="nav-logo" 
                onClick={() => setShowLandingPage(true)}
                title="Back to Landing Page"
            />
            <div onClick={resetAll} style={{cursor: 'pointer'}}>
              Livebook <span style={{display: 'block', fontSize: '0.8rem', color: 'var(--color-primary)'}}>{activeClass ? activeClass.name : 'Portable'}</span>
            </div>
          </div>
          <div className="controls">

            {activeLectureId && (
                <button className="btn" onClick={() => setActiveLectureId(null)} style={{marginRight: '1rem'}}>
                    &larr; Back to Stream
                </button>
            )}
            <span className="role-label">Current View: <strong>{role.toUpperCase()}</strong></span>
            
            {role === 'admin' && (
                <button 
                    className="btn btn-outline"
                    onClick={() => setIsAdminPanelOpen(true)}
                    style={{ marginRight: '8px', borderColor: '#7c3aed', color: '#7c3aed' }}
                >
                    Admin Panel
                </button>
            )}

            {role === 'teacher' && (
               <button 
                  className="btn btn-outline"
                  onClick={() => setIsAttendanceOpen(true)}
                  style={{ marginRight: '8px', borderColor: '#10b981', color: '#10b981' }}
               >
                  📝 Attendance
               </button>
            )}

            {!authUser ? (
                <button 
                className="btn btn-primary"
                onClick={() => setIsLoginOpen(true)}
                >
                Log In
                </button>
            ) : (
                <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-primary)', marginRight: '8px', fontWeight: 600 }}>
                        Welcome, {userName}
                    </span>
                    {isGoogleSignedIn ? (
                         <span style={{fontSize: '0.8rem', color: 'green', display: 'flex', alignItems: 'center', gap: '4px'}}>
                            ✅ Google Linked
                            <button onClick={signOut} className="btn-sm" style={{marginLeft: '5px', padding: '2px 5px', fontSize: '0.7rem', cursor: 'pointer'}}>Unlink</button>
                         </span>
                    ) : (
                        <button className="btn btn-outline" onClick={signIn} style={{fontSize: '0.8rem'}}>
                            Link Google Docs
                        </button>
                    )}
                    <button 
                    className="btn btn-outline"
                    onClick={() => {
                      auth.signOut();
                      window.location.reload();
                    }}
                    >
                    Logout
                    </button>
                </div>
            )}
          </div>
        </div>
      </nav>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />

      {isAdminPanelOpen && (
          <AdminPanel onClose={() => setIsAdminPanelOpen(false)} />
      )}

      {isAttendanceOpen ? (
          <AttendanceDashboard onBack={() => setIsAttendanceOpen(false)} />
      ) : (
          <main className="container main-content">
        {activeLecture ? (
            <LectureView 
                lecture={activeLecture} 
                role={role} 
                lectureIndex={activeLectureIndex} 
                onBack={() => setActiveLectureId(null)}
            />
        ) : activeStream ? (
            <UnitDashboard 
                lectures={activeStream.lectures || []} 
                title={activeStream.name}
                description={activeStream.description}
                role={role}
                onSelectLecture={(id) => setActiveLectureId(id)} 
                onBack={() => setSelectedStreamId(null)}
                onUpdateResources={handleUpdateResources}
                onAddLecture={handleAddLecture}
                onEditLecture={handleEditLecture}
            />
        ) : activeClass ? (
            <StreamSelection 
                streams={activeClass.streams || []}
                onSelectStream={(id) => {
                    setSelectedStreamId(id);
                    setActiveLectureId(null);
                }}
                onBack={() => setSelectedClassId(null)}
                role={role}
                onAddStream={handleAddStream}
                onEditStream={handleEditStream}
                onDeleteStream={handleDeleteStream}
            />
        ) : (
            <ClassSelection 
                classes={courseData}
                onSelectClass={(id) => {
                    if (!authUser) {
                        setIsLoginOpen(true);
                        return;
                    }
                    setSelectedClassId(id);
                    setSelectedStreamId(null);
                    setActiveLectureId(null);
                }}
                role={role}
                onAddClass={handleAddClass}
                onEditClass={handleEditClass}
                onDeleteClass={handleDeleteClass}
            />
        )}
      </main>
      )}
    </div>
    </ErrorBoundary>
  );
}

export default App;
