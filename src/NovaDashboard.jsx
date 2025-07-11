import React from 'react';
import './NovaDashboard.css';

const NovaDashboard = () => {
  return (
    <div className="nova-dashboard">
      <header className="nova-header">
        <h1>Welcome Back, Scrollbearer</h1>
        <p>Your Nova Status Report is Ready</p>
      </header>

      <section className="nova-section">
        <h2>Mission Status</h2>
        <ul>
          <li>🌀 Scroll Hunt: Active in 3 Cities</li>
          <li>💡 Dream: 4 New “What If” Contests Live</li>
          <li>🏛 Legacy U: 2 New Guild Modules Added</li>
        </ul>
      </section>

      <section className="nova-section">
        <h2>Personal Progress</h2>
        <ul>
          <li>✅ Completed: Scroll Reflection 1</li>
          <li>🔓 Unlocked: Nova Chat Level 2</li>
          <li>📈 MERIT Earned: 480</li>
        </ul>
      </section>

      <footer className="nova-footer">
        <button className="nova-action">Begin Today’s Scroll</button>
      </footer>
    </div>
  );
};

export default NovaDashboard;
