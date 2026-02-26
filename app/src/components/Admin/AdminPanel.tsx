import React, { useState, useEffect } from 'react';
import { ref, get, set, remove } from "firebase/database";
import { database } from "../../firebase";
import { createSecondaryUser, updateSecondaryUser } from "../../utils/adminAuth";
import '../../styles/AdminPanel.css';

interface UserData {
    uid: string;
    email: string;
    role: 'teacher' | 'admin' | 'student';
    name?: string;
    studentId?: string;
    password?: string;
}

interface AdminPanelProps {
    onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ onClose }) => {
    const [users, setUsers] = useState<UserData[]>([]);
    
    // Teacher form state
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newName, setNewName] = useState('');
    
    // Student form state
    const [studentName, setStudentName] = useState('');
    const [studentYear, setStudentYear] = useState(new Date().getFullYear().toString().slice(-2));
    const [studentCourseCode, setStudentCourseCode] = useState('BT');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // Edit state
    const [editingUid, setEditingUid] = useState<string | null>(null);
    const [editData, setEditData] = useState({ name: '', studentId: '', password: '' });

    // Filter/Search State
    const [studentSearchQuery, setStudentSearchQuery] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const usersRef = ref(database, 'users');
        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
            const data = snapshot.val();
            const userList = Object.entries(data).map(([uid, val]: [string, any]) => ({
                uid,
                ...val
            }));
            setUsers(userList);
        }
    };

    const handleAddTeacher = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // 1. Create Auth Account
            const user = await createSecondaryUser(newEmail, newPassword);
            
            // 2. Add to Database
            await set(ref(database, `users/${user.uid}`), {
                email: newEmail,
                role: 'teacher',
                name: newName || 'Teacher',
                password: newPassword
            });

            alert('Teacher added successfully!');
            setNewEmail('');
            setNewPassword('');
            setNewName('');
            fetchUsers(); // Refresh list
        } catch (err: any) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleAddStudent = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const yearCode = studentYear.replace(/\D/g, '').substring(0, 2);
            if(yearCode.length !== 2) throw new Error("Year must be 2 digits (e.g. 25)");
            
            const course = studentCourseCode.toUpperCase().replace(/[^A-Z]/g, '');
            if(course.length < 2) throw new Error("Course Code must be at least 2 letters (e.g. BT)");

            const prefix = `${yearCode}${course}`;

            // Find max sequence number
            const studentUsers = users.filter(u => u.role === 'student' && (u.studentId?.startsWith(prefix) || u.email.toUpperCase().startsWith(prefix)));
            let maxSeq = 0;
            studentUsers.forEach(u => {
                const idToCheck = u.studentId || u.email.split('@')[0].toUpperCase();
                const seqStr = idToCheck.substring(prefix.length);
                const seq = parseInt(seqStr, 10);
                if (!isNaN(seq) && seq > maxSeq) {
                    maxSeq = seq;
                }
            });

            const nextSeq = maxSeq + 1;
            const sequenceStr = nextSeq.toString().padStart(4, '0');
            const generatedId = `${prefix}${sequenceStr}`; // e.g. 25BT0001
            const generatedPassword = `${prefix}@${sequenceStr}`; // e.g. 25BT@0001
            const generatedEmail = `${generatedId.toLowerCase()}@student.livebook.edu`;

            // 1. Create Auth Account
            const user = await createSecondaryUser(generatedEmail, generatedPassword);
            
            // 2. Add to Database
            await set(ref(database, `users/${user.uid}`), {
                email: generatedEmail,
                role: 'student',
                name: studentName || 'Student',
                studentId: generatedId,
                password: generatedPassword
            });

            alert(`Student Generated Successfully!\n\nID: ${generatedId}\nPassword: ${generatedPassword}`);
            setStudentName('');
            fetchUsers(); // Refresh list
        } catch (err: any) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteUser = async (uid: string) => {
        if(!confirm("Create this user in Firebase Auth Console? \n\nNOTE: Deleting here only removes their role/access. The account remains in Firebase Auth unless you delete it manually in the Console.")) return;
         
        await remove(ref(database, `users/${uid}`));
        fetchUsers();
    };

    const openEditStudent = (user: UserData) => {
        setEditingUid(user.uid);
        setEditData({
            name: user.name || '',
            studentId: user.studentId || '',
            password: user.password || ''
        });
    };

    const handleSaveEdit = async (user: UserData) => {
        setLoading(true);
        setError('');
        try {
            let newEmail = user.email;
            if (editData.studentId && editData.studentId !== user.studentId) {
                newEmail = `${editData.studentId.toLowerCase()}@student.livebook.edu`;
            }

            // Sync with Auth if needed
            if (user.password && (user.password !== editData.password || user.email !== newEmail)) {
                await updateSecondaryUser(user.email, user.password, newEmail, editData.password);
            } else if (!user.password && (editData.password || newEmail !== user.email)) {
               throw new Error("Old password is required to change Auth credentials.");
            }

            await set(ref(database, `users/${user.uid}`), {
                ...user,
                name: editData.name,
                studentId: editData.studentId || user.studentId,
                email: newEmail,
                password: editData.password || user.password
            });

            setEditingUid(null);
            fetchUsers();
            alert("Updated successfully!");
        } catch (err: any) {
            console.error(err);
            setError("Edit Failed: " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-panel-container">
            <div className="admin-header">
                <h2>Admin Dashboard</h2>
                <button onClick={onClose} className="close-btn-admin">Close</button>
            </div>

            <div className="admin-grid">
                {/* Add User Section */}
                <div className="admin-card add-user-card">
                    <h3>➕ Add New Teacher</h3>
                    <form onSubmit={handleAddTeacher}>
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                                value={newName} 
                                onChange={e => setNewName(e.target.value)}
                                placeholder="e.g. Mr. Sharma"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input 
                                type="email"
                                value={newEmail} 
                                onChange={e => setNewEmail(e.target.value)}
                                placeholder="teacher@school.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="text"
                                value={newPassword} 
                                onChange={e => setNewPassword(e.target.value)}
                                placeholder="Initial Password"
                                required
                            />
                        </div>
                        {error && <p className="error-text">{error}</p>}
                        <button disabled={loading} className="btn-save">
                            {loading ? 'Creating...' : 'Create Teacher'}
                        </button>
                    </form>
                </div>

                {/* Add Student Section */}
                <div className="admin-card add-user-card">
                    <h3>🎓 Generate Student Account</h3>
                    <form onSubmit={handleAddStudent}>
                        <div className="form-group">
                            <label>Student Name</label>
                            <input 
                                value={studentName} 
                                onChange={e => setStudentName(e.target.value)}
                                placeholder="e.g. Rahul Kumar"
                                required
                            />
                        </div>
                        <div className="form-group" style={{ display: 'flex', gap: '10px' }}>
                            <div style={{ flex: 1 }}>
                                <label>Year (e.g. 25)</label>
                                <input 
                                    value={studentYear} 
                                    onChange={e => setStudentYear(e.target.value)}
                                    maxLength={2}
                                    required
                                />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label>Course (e.g. BT)</label>
                                <input 
                                    value={studentCourseCode} 
                                    onChange={e => setStudentCourseCode(e.target.value)}
                                    maxLength={4}
                                    required
                                />
                            </div>
                        </div>
                        {error && <p className="error-text">{error}</p>}
                        <button disabled={loading} className="btn-save">
                            {loading ? 'Generating...' : 'Generate Account'}
                        </button>
                    </form>
                </div>

                {/* Teacher List Section */}
                <div className="admin-card user-list-card" style={{ gridColumn: '1 / -1', overflowX: 'auto' }}>
                    <h3>👨‍🏫 Teacher Directory</h3>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#475569' }}>
                                <th style={{ padding: '12px 8px' }}>Name</th>
                                <th style={{ padding: '12px 8px' }}>Email</th>
                                <th style={{ padding: '12px 8px' }}>Password</th>
                                <th style={{ padding: '12px 8px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.filter(u => u.role === 'teacher').map(user => (
                                <tr key={user.uid} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    {editingUid === user.uid ? (
                                        <td colSpan={4} style={{ padding: '12px 8px' }}>
                                            <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                                                <input value={editData.name} onChange={e => setEditData({...editData, name: e.target.value})} placeholder="Name" style={{padding: '6px', borderRadius: '4px', border: '1px solid #ccc'}} />
                                                <input value={editData.password} onChange={e => setEditData({...editData, password: e.target.value})} placeholder="Password" style={{padding: '6px', borderRadius: '4px', border: '1px solid #ccc'}} />
                                                <button className="btn btn-primary" style={{padding: '6px 12px'}} onClick={() => handleSaveEdit(user)}>Save</button>
                                                <button className="btn btn-outline" style={{padding: '6px 12px'}} onClick={() => setEditingUid(null)}>Cancel</button>
                                            </div>
                                        </td>
                                    ) : (
                                        <>
                                            <td style={{ padding: '12px 8px', fontWeight: 600, color: '#334155' }}>{user.name || 'Unknown'}</td>
                                            <td style={{ padding: '12px 8px', color: '#64748b' }}>{user.email}</td>
                                            <td style={{ padding: '12px 8px', color: '#64748b', fontFamily: 'monospace' }}>{user.password || '••••••••'}</td>
                                            <td style={{ padding: '12px 8px' }}>
                                                <div style={{ display: 'flex', gap: '8px' }}>
                                                    <button onClick={() => openEditStudent(user)} className="btn-outline" style={{padding: '4px 8px', fontSize: '0.8rem', cursor: 'pointer'}}>Edit</button>
                                                    <button onClick={() => handleDeleteUser(user.uid)} className="btn-delete-sm">Block / Restrict</button>
                                                </div>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                            {users.filter(u => u.role === 'teacher').length === 0 && (
                                <tr><td colSpan={4} style={{ padding: '12px', textAlign: 'center', color: '#94a3b8' }}>No teachers found.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Student List Section */}
                <div className="admin-card user-list-card" style={{ gridColumn: '1 / -1', overflowX: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '2px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                        <h3 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>🎓 Student Directory</h3>
                        <input 
                            type="text" 
                            placeholder="Filter by Name, ID, Batch (25) or Course (BT)..." 
                            value={studentSearchQuery}
                            onChange={(e) => setStudentSearchQuery(e.target.value)}
                            style={{
                                padding: '8px 12px',
                                borderRadius: '6px',
                                border: '1px solid #cbd5e1',
                                width: '300px',
                                fontSize: '0.9rem'
                            }}
                        />
                    </div>
                    
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #e2e8f0', color: '#475569' }}>
                                <th style={{ padding: '12px 8px' }}>Name</th>
                                <th style={{ padding: '12px 8px' }}>Student ID</th>
                                <th style={{ padding: '12px 8px' }}>Password</th>
                                <th style={{ padding: '12px 8px' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.filter(u => u.role === 'student' && (
                                !studentSearchQuery || 
                                u.name?.toLowerCase().includes(studentSearchQuery.toLowerCase()) || 
                                u.studentId?.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
                                u.email.toLowerCase().includes(studentSearchQuery.toLowerCase())
                            )).map(user => (
                                <tr key={user.uid} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                    {editingUid === user.uid ? (
                                        <td colSpan={4} style={{ padding: '12px 8px' }}>
                                            <div style={{display: 'flex', gap: '8px', alignItems: 'center'}}>
                                                <input value={editData.name} onChange={e => setEditData({...editData, name: e.target.value})} placeholder="Name" style={{padding: '6px', borderRadius: '4px', border: '1px solid #ccc'}} />
                                                <input value={editData.studentId} onChange={e => setEditData({...editData, studentId: e.target.value})} placeholder="Student ID" style={{padding: '6px', borderRadius: '4px', border: '1px solid #ccc'}} />
                                                <input value={editData.password} onChange={e => setEditData({...editData, password: e.target.value})} placeholder="Password" style={{padding: '6px', borderRadius: '4px', border: '1px solid #ccc'}} />
                                                <button className="btn btn-primary" style={{padding: '6px 12px'}} onClick={() => handleSaveEdit(user)}>Save</button>
                                                <button className="btn btn-outline" style={{padding: '6px 12px'}} onClick={() => setEditingUid(null)}>Cancel</button>
                                            </div>
                                        </td>
                                    ) : (
                                        <>
                                            <td style={{ padding: '12px 8px', fontWeight: 600, color: '#334155' }}>{user.name || 'Unknown'}</td>
                                            <td style={{ padding: '12px 8px', color: '#64748b' }}>{user.studentId || user.email}</td>
                                            <td style={{ padding: '12px 8px', color: '#64748b', fontFamily: 'monospace' }}>{user.password || '••••••••'}</td>
                                            <td style={{ padding: '12px 8px' }}>
                                                <div style={{ display: 'flex', gap: '8px' }}>
                                                    <button onClick={() => openEditStudent(user)} className="btn-outline" style={{padding: '4px 8px', fontSize: '0.8rem', cursor: 'pointer'}}>Edit</button>
                                                    <button onClick={() => handleDeleteUser(user.uid)} className="btn-delete-sm">Block / Restrict</button>
                                                </div>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                            {users.filter(u => u.role === 'student' && (
                                !studentSearchQuery || 
                                u.name?.toLowerCase().includes(studentSearchQuery.toLowerCase()) || 
                                u.studentId?.toLowerCase().includes(studentSearchQuery.toLowerCase()) ||
                                u.email.toLowerCase().includes(studentSearchQuery.toLowerCase())
                            )).length === 0 && (
                                <tr><td colSpan={4} style={{ padding: '12px', textAlign: 'center', color: '#94a3b8' }}>No students found matching your criteria.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
