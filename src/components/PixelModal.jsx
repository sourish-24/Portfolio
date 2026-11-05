import React, { useEffect } from 'react';
import {
  PixelGoldenTrophy,
  PixelSilverTrophy
} from './PixelIcons';

export default function PixelModal({ activeTab, onClose }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!activeTab) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getModalMeta = () => {
    switch (activeTab) {
      case 'trophy-innovate':
        return {
          title: 'WINNER_INNOVATE_2.0.EXE',
          icon: <PixelGoldenTrophy size={18} />,
          status: '1ST PLACE // INNOVATE 2.0 HACKATHON 2024'
        };
      case 'trophy-leetcode':
        return {
          title: 'LEETCODE_RANK_931.LOG',
          icon: <PixelSilverTrophy size={18} />,
          status: 'GLOBAL RANK 931 // BIWEEKLY CONTEST'
        };
      default:
        return {
          title: 'TROPHY_ACHIEVEMENT.SYS',
          icon: <PixelGoldenTrophy size={18} />,
          status: 'READY'
        };
    }
  };

  const meta = getModalMeta();

  return (
    <div
      className="pixel-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-window-title"
    >
      <div className="pixel-window-dialog">
        {/* RETRO WINDOW TITLE BAR */}
        <div className="dialog-title-bar">
          <div className="title-text" id="modal-window-title">
            <span className="title-icon">{meta.icon}</span>
            <span>{meta.title}</span>
          </div>
          <div className="title-controls">
            <button
              type="button"
              className="ctrl-btn btn-min"
              onClick={onClose}
              title="Minimize"
              aria-label="Minimize window"
            >
              _
            </button>
            <button
              type="button"
              className="ctrl-btn btn-close"
              onClick={onClose}
              title="Close [Esc]"
              aria-label="Close window"
            >
              X
            </button>
          </div>
        </div>

        {/* DIALOG CONTENT BODY */}
        <div className="dialog-content-body">
          {activeTab === 'trophy-innovate' && (
            <div className="pane-trophy pane-trophy-gold">
              {/* HERO BANNER */}
              <div className="trophy-modal-hero hero-gold">
                <div className="trophy-hero-icon-box gold-glow">
                  <PixelGoldenTrophy size={64} />
                </div>
                <div className="trophy-hero-meta">
                  <span className="trophy-tier-badge badge-gold">🥇 1ST PLACE WINNER</span>
                  <h3>INNOVATE 2.0 HACKATHON 2024</h3>
                  <p className="trophy-subtitle">National Technical Hackathon & Innovation Challenge</p>
                </div>
              </div>

              {/* ACHIEVEMENTS & DETAILS */}
              <div className="trophy-details-card">
                <h4 className="detail-section-title">🏆 VICTORY OVERVIEW</h4>
                <p className="trophy-narrative">
                  Secured <strong>1st Place</strong> at the prestigious INNOVATE 2.0 Hackathon (2024). Designed and engineered an end-to-end autonomous smart urban transit platform featuring sub-100ms algorithmic vehicle dispatching and geospatial indexing under high concurrent user load.
                </p>

                <div className="trophy-specs-grid">
                  <div className="spec-item">
                    <span className="spec-k">EVENT</span>
                    <span className="spec-v gold-text">INNOVATE 2.0</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-k">YEAR</span>
                    <span className="spec-v">2024</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-k">POSITION</span>
                    <span className="spec-v gold-text">1st Place / Champions</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-k">CORE DOMAIN</span>
                    <span className="spec-v">Urban Mobility & Geo-Algorithms</span>
                  </div>
                </div>

                <div className="trophy-highlights-block">
                  <span className="hl-title">⚡ KEY HIGHLIGHTS</span>
                  <ul className="trophy-bullet-list">
                    <li>Developed Uber H3 hexagonal spatial indexing for real-time driver-passenger match clustering.</li>
                    <li>Engineered asynchronous event pipelines with Redis Pub/Sub for sub-50ms dispatch updates.</li>
                    <li>Benchmarked with k6 to sustain 1,200+ simulated concurrent driver pings with zero packet drop.</li>
                    <li>Built intuitive retro-futuristic telemetry dashboard for fleet command & dispatch metrics.</li>
                  </ul>
                </div>

                <div className="trophy-tech-stack-row">
                  <span className="stack-label">TECH STACK:</span>
                  <div className="stack-tags">
                    <span className="p-tag">Golang</span>
                    <span className="p-tag">Uber H3</span>
                    <span className="p-tag">Redis</span>
                    <span className="p-tag">PostgreSQL</span>
                    <span className="p-tag">Docker</span>
                    <span className="p-tag">React</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'trophy-leetcode' && (
            <div className="pane-trophy pane-trophy-silver">
              {/* HERO BANNER */}
              <div className="trophy-modal-hero hero-silver">
                <div className="trophy-hero-icon-box silver-glow">
                  <PixelSilverTrophy size={64} />
                </div>
                <div className="trophy-hero-meta">
                  <span className="trophy-tier-badge badge-silver">🥈 GLOBAL RANK 931</span>
                  <h3>LEETCODE BIWEEKLY CONTEST</h3>
                  <p className="trophy-subtitle">Top 1% Worldwide Finish among 30,000+ Competitive Programmers</p>
                </div>
              </div>

              {/* ACHIEVEMENTS & DETAILS */}
              <div className="trophy-details-card">
                <h4 className="detail-section-title">⚔️ CONTEST PERFORMANCE SUMMARY</h4>
                <p className="trophy-narrative">
                  Achieved an extraordinary <strong>Global Contest Rank of 931</strong> in an official LeetCode Biweekly Contest, solving tough algorithmic challenges across dynamic programming, graph theory, and advanced data structures against thousands of global contestants under strict timed constraints.
                </p>

                <div className="trophy-specs-grid">
                  <div className="spec-item">
                    <span className="spec-k">GLOBAL RANK</span>
                    <span className="spec-v silver-text">Rank 931 / 30,000+</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-k">PERCENTILE</span>
                    <span className="spec-v">Top 1% Globally</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-k">PLATFORM</span>
                    <span className="spec-v silver-text">LeetCode Official</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-k">TOPIC FOCUS</span>
                    <span className="spec-v">DP, Graphs & Trees</span>
                  </div>
                </div>

                <div className="trophy-highlights-block">
                  <span className="hl-title">⚡ ALGORITHMIC CAPABILITIES</span>
                  <ul className="trophy-bullet-list">
                    <li>Optimal space/time trade-off implementations with standard C++ STL.</li>
                    <li>Graph traversal algorithms: Dijkstra, Bellman-Ford, Tarjan's SCC & Segment Trees.</li>
                    <li>Bit manipulation tricks, binary search on answers, and combinatorics.</li>
                    <li>Author and curator of a comprehensive Google Sheets DSA tracker sheet.</li>
                  </ul>
                </div>

                <div className="trophy-tech-stack-row">
                  <span className="stack-label">SKILLS & TOOLS:</span>
                  <div className="stack-tags">
                    <span className="p-tag">C++ (DSA & CP)</span>
                    <span className="p-tag">LeetCode</span>
                    <span className="p-tag">Codeforces</span>
                    <span className="p-tag">C++ STL</span>
                    <span className="p-tag">Google Sheets DSA Sheet</span>
                  </div>
                </div>
              </div>

              <div className="modal-actions-row">
                <a
                  href="https://leetcode.com/u/sourishmusib/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn-action btn-gold"
                >
                  ⚡ VISIT LEETCODE PROFILE ↗
                </a>
                <a
                  href="https://docs.google.com/spreadsheets/d/1ANEzJSdgeWEKKOZcmaRdQgj-D2k8r4BqAuAHaXwWXkI/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn-action btn-blue"
                >
                  📊 OPEN DSA TRACKER SHEET ↗
                </a>
                <a
                  href="https://codeforces.com/profile/sourcodes24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn-action"
                >
                  ⚔️ CODEFORCES PROFILE ↗
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
