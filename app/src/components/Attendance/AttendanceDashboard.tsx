import React, { useState } from 'react';
import { useSwipeBack } from '../../hooks/useSwipeBack';
import { SwipeIndicator } from '../Common/SwipeIndicator';
import { fetchAttendanceData, initializeAttendanceSheet, addStudentToSheet, markAttendanceColumn, ensureSheetApiLoaded } from '../../utils/googleDocs';
import '../../styles/Attendance.css';

interface AttendanceDashboardProps {
    onBack: () => void;
}

export const AttendanceDashboard: React.FC<AttendanceDashboardProps> = ({ onBack }) => {
    const [sheetLink, setSheetLink] = useState(localStorage.getItem('attendance_sheet_id') || '');
    const [isSheetConnected, setIsSheetConnected] = useState(!!localStorage.getItem('attendance_sheet_id'));
    const [loading, setLoading] = useState(false);
    
    // Data
    const [grid, setGrid] = useState<string[][]>([]);
    const [students, setStudents] = useState<{roll: string, name: string}[]>([]);
    
    // Actions
    const [viewMode, setViewMode] = useState<'matrix' | 'mark'>('matrix');
    const [newStudent, setNewStudent] = useState({ name: '', roll: '' });
    const [todayAttendance, setTodayAttendance] = useState<{[roll: string]: boolean}>({});

    const extractId = (url: string) => {
        const match = url.match(/\/d\/(.*?)(\/|$)/);
        return match ? match[1] : url;
    };

    const handleConnect = async () => {
        const id = extractId(sheetLink);
        if(!id) return alert("Invalid Link");
        setLoading(true);
        try {
            await ensureSheetApiLoaded();
            await initializeAttendanceSheet(id);
            localStorage.setItem('attendance_sheet_id', id);
            setSheetLink(id);
            setIsSheetConnected(true);
            loadData(id);
        } catch (e: any) {
            console.error("Connection Error:", e);
            let msg = e.message;
            if (!msg && e.result && e.result.error) {
                msg = e.result.error.message;
            }
            if (!msg && e.status) {
                msg = `Status ${e.status}`;
            }
            alert("Failed to connect: " + (msg || JSON.stringify(e)) + "\nMake sure you signed in with Google!");
        } finally {
            setLoading(false);
        }
    };

    const loadData = async (id: string = sheetLink) => {
        setLoading(true);
        try {
            await ensureSheetApiLoaded();
            const data = await fetchAttendanceData(id);
            setGrid(data);
            
            // Parse students (Row 1 onwards, Col 0 & 1)
            const studList = data.slice(1).map((row: string[]) => ({
                roll: row[0],
                name: row[1]
            })).filter((s: {roll: string, name: string}) => s.roll); // Filter empty
            setStudents(studList);
            
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleAddStudent = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await addStudentToSheet(sheetLink, newStudent.roll, newStudent.name);
            setNewStudent({ name: '', roll: '' });
            await loadData();
        } catch (e: any) {
            alert("Error: " + e.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSaveAttendance = async () => {
        const date = new Date().toISOString().split('T')[0];
        setLoading(true);
        try {
            await markAttendanceColumn(sheetLink, date, todayAttendance);
            alert("Attendance Marked for " + date);
            setViewMode('matrix');
            loadData();
        } catch (e: any) {
             alert("Error: " + e.message);
        } finally {
            setLoading(false);
        }
    };

    const toggleAttendance = (roll: string) => {
        setTodayAttendance(prev => ({
            ...prev,
            [roll]: !prev[roll]
        }));
    };

    const { onTouchStart, onTouchMove, onTouchEnd, dragOffset } = useSwipeBack({ onBack });

    if (!isSheetConnected) {
        return (
            <div 
                className="attendance-setup" 
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                style={{ touchAction: 'pan-y' }}
            >
                <SwipeIndicator offset={dragOffset} />
                <button className="back-btn-float" onClick={onBack}>&larr; Back</button>
                <div className="setup-card">
                    <h2>📊 Connect Attendance Sheet</h2>
                    <p>Paste the link to your Google Sheet. We will use it to store student lists and daily attendance.</p>
                    <input 
                        value={sheetLink} 
                        onChange={e => setSheetLink(e.target.value)} 
                        placeholder="https://docs.google.com/spreadsheets/d/..." 
                    />
                    <button className="btn-connect" onClick={handleConnect} disabled={loading}>
                        {loading ? 'Connecting...' : 'Connect Sheet'}
                    </button>
                    <p className="hint">Make sure you are signed in with the Google Account that has edit access.</p>
                </div>
            </div>
        );
    }

    return (
        <div 
            className="attendance-dashboard" 
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            style={{ touchAction: 'pan-y' }}
        >
            <SwipeIndicator offset={dragOffset} />
            <header className="att-header">
                <button onClick={onBack} className="btn-icon">&larr;</button>
                <h2>Class Attendance</h2>
                <div className="att-actions">
                    <button className={`btn-tab ${viewMode === 'matrix' ? 'active' : ''}`} onClick={() => setViewMode('matrix')}>View Sheet</button>
                    <button className={`btn-tab ${viewMode === 'mark' ? 'active' : ''}`} onClick={() => setViewMode('mark')}>Mark Today</button>
                    <button className="btn-refresh" onClick={() => loadData()}>🔄</button>
                </div>
            </header>

            <div className="att-content">
                {/* Sidebar: Add Student */}
                <aside className="att-sidebar">
                    <h3>Add Student</h3>
                    <form onSubmit={handleAddStudent}>
                         <div className="form-group">
                            <label>Roll No</label>
                            <input value={newStudent.roll} onChange={e => setNewStudent({...newStudent, roll: e.target.value})} required placeholder="001" />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input value={newStudent.name} onChange={e => setNewStudent({...newStudent, name: e.target.value})} required placeholder="John Doe" />
                        </div>
                        <button disabled={loading} className="btn-add-student">+ Add</button>
                    </form>
                    <div className="student-stats">
                        <p>Total Students: <strong>{students.length}</strong></p>
                    </div>
                </aside>

                <main className="att-main-view">
                    {loading && <div className="loading-overlay">Syncing...</div>}

                    {viewMode === 'matrix' ? (
                        <div className="table-container">
                            <table className="att-table">
                                <thead>
                                    <tr>
                                        {grid[0] && grid[0].map((header, i) => (
                                            <th key={i}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {grid.slice(1).map((row, rI) => (
                                        <tr key={rI}>
                                            {row.map((cell, cI) => (
                                                <td key={cI} className={cell === 'P' ? 'status-p' : cell === 'A' ? 'status-a' : ''}>
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="mark-view">
                            <h3>Mark Attendance: {new Date().toLocaleDateString()}</h3>
                            <button className="btn-save-att" onClick={handleSaveAttendance}>💾 Save to Sheet</button>
                            <div className="mark-grid">
                                {students.map(s => (
                                    <div 
                                        key={s.roll} 
                                        className={`mark-card ${todayAttendance[s.roll] ? 'selected' : ''}`}
                                        onClick={() => toggleAttendance(s.roll)}
                                    >
                                        <div className="mark-roll">{s.roll}</div>
                                        <div className="mark-name">{s.name}</div>
                                        <div className="mark-status">
                                            {todayAttendance[s.roll] ? '✅ Present' : '❌ Absent'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};
