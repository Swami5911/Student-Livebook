import React, { useState } from 'react';
import '../../styles/LoginModal.css';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    let loginEmail = email.trim();
    if (!loginEmail.includes('@')) {
      loginEmail = loginEmail.toLowerCase() + '@student.livebook.edu';
    }

    try {
      await signInWithEmailAndPassword(auth, loginEmail, password);
      // Role will be handled by App.tsx listener, but we call this to close for now
      // Actually, App.tsx will detect the auth state change. 
      // We'll just close the modal.
      onClose();
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/invalid-credential') {
          setError('Invalid email or password.');
      } else {
          setError('Login failed: ' + err.message);
      }
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content login-modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Welcome to Livebook</h2>
        <p style={{textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-secondary, #64748b)'}}>Login for Students, Teachers & Admin</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Student ID / Email</label>
            <input 
              type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="e.g. 25BT0001 or teacher@school.com"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="********"
              required
            />
          </div>
          {error && <p className="error-msg">{error}</p>}
          <button type="submit" className="btn btn-primary full-width" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};
