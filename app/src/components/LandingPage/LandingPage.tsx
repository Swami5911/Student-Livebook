import React from 'react';
import './LandingPage.css';
import landingLogo from '../../assets/landinglogo1.png';

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="lp-header">
        <div className="lp-container lp-nav">
          <div className="lp-brand">
            <img src={landingLogo} alt="Skill Kindle Discovery" className="lp-logo" style={{height: '80px', width: 'auto'}} />
          </div>
          <div className="lp-nav-actions">
            <button className="lp-btn-nav" onClick={onEnter}>
                Enter Livebook
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="lp-hero">
        <div className="lp-container lp-hero-content">
          <div className="lp-hero-emblem">
            <span className="emblem-icon">🧠</span>
            <span className="emblem-icon">🔑</span>
            <span className="emblem-icon">📖</span>
          </div>
          <div className="lp-hero-text">
            <h1 className="hero-title-skd">SKD</h1>
            <h2 className="hero-subtitle">Skill Kindle Discovery</h2>
            <p className="hero-tagline">UNLOCK YOUR POTENTIAL</p>
            <button className="lp-btn-hero" onClick={onEnter}>
              Go to Livebook
            </button>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="lp-section">
        <div className="lp-container">
          <div className="lp-section-title">
            <h2>Powered by SKD Livebook</h2>
            <p>A comprehensive digital ecosystem built for modern educators and students.</p>
          </div>
          <div className="lp-grid">
            <div className="lp-card">
              <span className="lp-card-icon">📊</span>
              <h3>Admin & Teacher Dashboards</h3>
              <p>Dedicated tools for educators to manage classes, upload interactive lecture content, track student progress, and seamlessly handle stream structures.</p>
            </div>
            <div className="lp-card">
              <span className="lp-card-icon">✅</span>
              <h3>Smart Attendance Tracking</h3>
              <p>Fast and robust attendance management. Mark students present, absent, or late, perform bulk uploads via CSV, and export historical attendance records.</p>
            </div>
            <div className="lp-card">
              <span className="lp-card-icon">�</span>
              <h3>Interactive Lectures</h3>
              <p>Experience content through rich multimedia blocks. Engage with embedded videos, runnable code snippets, Markdown notes, and responsive visual materials.</p>
            </div>
          </div>
        </div>
      </section>

       {/* Integration Section */}
       <section className="lp-section lp-bg-light">
        <div className="lp-container">
          <div className="lp-section-title">
            <h2>Seamless Integrations</h2>
            <p>Connect your existing workflow directly within the Livebook platform</p>
          </div>
          <div className="lp-grid">
            <div className="lp-card">
              <span className="lp-card-icon">�</span>
              <h3>Google Docs & Sheets Sync</h3>
              <p>Link your Livebook account directly to Google Workspace to fetch, embed, and sync Google Docs right into your lecture streams for collaborative editing.</p>
            </div>
            <div className="lp-card">
              <span className="lp-card-icon">📱</span>
              <h3>App-Like Experience (PWA)</h3>
              <p>Install SKD Livebook on your desktop or mobile device. Navigate seamlessly with intuitive touch gestures and swipe navigation on supported devices.</p>
            </div>
            <div className="lp-card">
              <span className="lp-card-icon">☁️</span>
              <h3>Cloud-First Infrastructure</h3>
              <p>Powered securely by Firebase. All your lecture data, student information, and attendance records are synced globally in real-time without latency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="lp-footer">
        <div className="lp-container">
          <p>&copy; {new Date().getFullYear()} Skill Kindle Discovery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
