import React from 'react';
import './LandingPage.css';
import landingLogo from '../../assets/landing_logo.png';

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
            <img src={landingLogo} alt="Shri Khushal Das University" className="lp-logo" style={{height: '80px', width: 'auto'}} />
          </div>
          <div className="lp-nav-actions">
            <a href="https://www.skduniversity.com/" target="_blank" rel="noopener noreferrer" className="lp-btn-outline">
                Visit University Website
            </a>
            <button className="lp-btn-nav" onClick={onEnter}>
                Enter Livebook
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="lp-hero">
        <div className="lp-container lp-hero-content">
          <h1>Shri Khushal Das University</h1>
          <p>Excellence in Education, Innovation in Learning</p>
          <button className="lp-btn-hero" onClick={onEnter}>
            Go to Livebook
          </button>
        </div>
      </section>

      {/* About Livebook Section */}
      <section className="lp-section">
        <div className="lp-container">
          <div className="lp-section-title">
            <h2>About Livebook</h2>
            <p>The Digital Learning Ecosystem of SKDU</p>
          </div>
          <div className="lp-grid">
            <div className="lp-card">
              <span className="lp-card-icon">🎓</span>
              <h3>Digital Campus</h3>
              <p>Livebook brings the university experience to your device. Access lectures, streams, and resources anytime, anywhere, ensuring your education never stops.</p>
            </div>
            <div className="lp-card">
              <span className="lp-card-icon">🚀</span>
              <h3>Advanced Learning</h3>
              <p>Powered by modern technology, Livebook offers a seamless interface for managing courses, tracking attendance, and engaging with content effectively.</p>
            </div>
          </div>
        </div>
      </section>

       {/* What You Can Learn Section */}
       <section className="lp-section lp-bg-light">
        <div className="lp-container">
          <div className="lp-section-title">
            <h2>What You Can Learn</h2>
            <p>Unlock your potential with our comprehensive digital resources</p>
          </div>
          <div className="lp-grid">
            <div className="lp-card">
              <span className="lp-card-icon">📚</span>
              <h3>Course Mastery</h3>
              <p>Dive deep into subject-specific streams. From Engineering to Arts, find structured content tailored to your curriculum.</p>
            </div>
            <div className="lp-card">
              <span className="lp-card-icon">🎥</span>
              <h3>Interactive Lectures</h3>
              <p>Engage with dynamic lecture content. View video blocks, code snippets, and textual explanations all in one place.</p>
            </div>
            <div className="lp-card">
              <span className="lp-card-icon">📝</span>
              <h3>Self Assessment</h3>
              <p>Test your knowledge with integrated quizzes and track your progress through immediate feedback and results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="lp-footer">
        <div className="lp-container">
          <p>&copy; {new Date().getFullYear()} Shri Khushal Das University, Hanumangarh. All rights reserved.</p>
          <p>Powered by Livebook</p>
        </div>
      </footer>
    </div>
  );
};
