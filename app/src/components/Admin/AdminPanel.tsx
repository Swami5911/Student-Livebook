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
                name: newName || 'Teacher'
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

                {/* User List Section */}
                <div className="admin-card user-list-card">
                    <h3>👥 Current Users</h3>
                    <ul className="user-list">
                        {users.map(user => (
                            <li key={user.uid} className={`user-item role-${user.role}`}>
                                {editingUid === user.uid ? (
                                    <div className="user-edit-form" style={{display: 'flex', flexDirection: 'column', gap: '8px', width: '100%'}}>
                                         <input 
                                            value={editData.name} 
                                            onChange={e => setEditData({...editData, name: e.target.value})}
                                            placeholder="Student Name"
                                            className="nav-search"
                                         />
                                         <input 
                                            value={editData.studentId} 
                                            onChange={e => setEditData({...editData, studentId: e.target.value})}
                                            placeholder="Student ID (e.g. 25BT0001)"
                                            className="nav-search"
                                         />
                                         <input 
                                            value={editData.password} 
                                            onChange={e => setEditData({...editData, password: e.target.value})}
                                            placeholder="Password"
                                            className="nav-search"
                                         />
                                         <div style={{display: 'flex', gap: '10px'}}>
                                            <button className="btn btn-primary" onClick={() => handleSaveEdit(user)}>Save</button>
                                            <button className="btn btn-outline" onClick={() => setEditingUid(null)}>Cancel</button>
                                         </div>
                                    </div>
                                ) : (
                                    <>
                                    <div className="user-info">
                                        <span className="user-name">{user.name || 'Unknown'}</span>
                                        <span className="user-email">{user.studentId || user.email}</span>
                                        <span className="user-role-badge">{user.role.toUpperCase()}</span>
                                    </div>
                                    <div style={{display: 'flex', gap: '8px'}}>
                                        {user.role === 'student' && (
                                            <button 
                                                onClick={() => openEditStudent(user)}
                                                className="btn-outline"
                                                style={{padding: '4px 8px', fontSize: '0.8rem', cursor: 'pointer'}}
                                            >
                                                Edit
                                            </button>
                                        )}
                                        {user.role !== 'admin' && (
                                            <button 
                                                onClick={() => handleDeleteUser(user.uid)}
                                                className="btn-delete-sm"
                                            >
                                                Remove Access
                                            </button>
                                        )}
                                    </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
