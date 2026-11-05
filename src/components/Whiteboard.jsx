import React from 'react';
import {
  PixelGoogleSheets,
  PixelReactIcon,
  PixelJSIcon,
  PixelTSIcon,
  PixelNodeIcon,
  PixelPythonIcon,
  PixelCppIcon,
  PixelGoIcon,
  PixelMongoIcon,
  PixelPostgresIcon,
  PixelDockerIcon,
  PixelAWSIcon,
  PixelGitIcon,
} from './PixelIcons';

// Mini pixel tech chip with logo icon
function TechBadge({ name, icon: Icon, color = '#3b82f6', bg = '#eff6ff', border = '#93c5fd' }) {
  return (
    <div
      className="tech-tier-chip"
      style={{
        backgroundColor: bg,
        borderColor: border,
        color: color,
      }}
      title={name}
    >
      {Icon && <span className="tech-chip-icon"><Icon size={13} /></span>}
      <span className="tech-name">{name}</span>
    </div>
  );
}

export default function Whiteboard({ mode = 'skills', onSelectMode }) {
  const dsaSheetUrl =
    'https://docs.google.com/spreadsheets/d/1ANEzJSdgeWEKKOZcmaRdQgj-D2k8r4BqAuAHaXwWXkI/edit?usp=sharing';

  const getModeTitle = () => {
    switch (mode) {
      case 'skills':
        return "SOURISH'S SKILL TIERS";
      case 'projects':
        return 'PINNED PROJECTS';
      case 'dsasheet':
        return "SOURISH'S DSA SHEET";
      case 'about':
        return 'ABOUT SOURISH';
      default:
        return 'WHITEBOARD';
    }
  };

  return (
    <div className="pixel-whiteboard-assembly" aria-label="Study Whiteboard">
      {/* Aluminum / Wooden Whiteboard Frame */}
      <div className="whiteboard-frame">
        {/* Top Board Bar with Magnets and Brass Plaque Title */}
        <div className="whiteboard-top-controls">
          <div className="board-magnets">
            <span className="board-magnet red-magnet" title="Magnet Pin">●</span>
            <span className="board-magnet blue-magnet" title="Magnet Pin">●</span>
          </div>

          <div className="board-title-plaque brass-textbox-plaque">
            <span className="brass-textbox-label">{getModeTitle()}</span>
          </div>

          <div className="board-quick-nav">
            <button
              type="button"
              className={`board-switch-pill ${mode === 'skills' ? 'active-pill' : ''}`}
              onClick={() => onSelectMode?.('skills')}
              title="View Skills Tier List"
            >
              SKILLS
            </button>
            <button
              type="button"
              className={`board-switch-pill ${mode === 'projects' ? 'active-pill' : ''}`}
              onClick={() => onSelectMode?.('projects')}
              title="View Pinned Projects"
            >
              PROJECTS
            </button>
            <button
              type="button"
              className={`board-switch-pill ${mode === 'dsasheet' ? 'active-pill' : ''}`}
              onClick={() => onSelectMode?.('dsasheet')}
              title="View DSA Sheet"
            >
              DSA
            </button>
            <button
              type="button"
              className={`board-switch-pill ${mode === 'about' ? 'active-pill' : ''}`}
              onClick={() => onSelectMode?.('about')}
              title="View About Bio"
            >
              BIO
            </button>
          </div>

          <div className="board-magnets">
            <span className="board-magnet yellow-magnet" title="Magnet Pin">●</span>
          </div>
        </div>

        {/* Whiteboard Surface Area */}
        <div className="whiteboard-surface">
          {/* ========================================================
              MODE 1: SKILLS TIER LIST (S, A, B, C)
              ======================================================== */}
          {mode === 'skills' && (
            <div className="whiteboard-view-skills">
              <div className="tier-list-grid">
                {/* TIER S */}
                <div className="tier-row tier-s-row">
                  <div className="tier-badge-box badge-s">S</div>
                  <div className="tier-items-flow">
                    <TechBadge name="React" icon={PixelReactIcon} color="#0369a1" bg="#e0f2fe" border="#38bdf8" />
                    <TechBadge name="JavaScript" icon={PixelJSIcon} color="#854d0e" bg="#fef9c3" border="#facc15" />
                    <TechBadge name="TypeScript" icon={PixelTSIcon} color="#1d4ed8" bg="#dbeafe" border="#60a5fa" />
                    <TechBadge name="Node.js" icon={PixelNodeIcon} color="#15803d" bg="#dcfce7" border="#4ade80" />
                  </div>
                </div>

                {/* TIER A */}
                <div className="tier-row tier-a-row">
                  <div className="tier-badge-box badge-a">A</div>
                  <div className="tier-items-flow">
                    <TechBadge name="Python" icon={PixelPythonIcon} color="#0369a1" bg="#e0f2fe" border="#38bdf8" />
                    <TechBadge name="C++" icon={PixelCppIcon} color="#3730a3" bg="#e0e7ff" border="#818cf8" />
                    <TechBadge name="MongoDB" icon={PixelMongoIcon} color="#166534" bg="#dcfce7" border="#4ade80" />
                    <TechBadge name="Git" icon={PixelGitIcon} color="#c2410c" bg="#ffedd5" border="#fb923c" />
                  </div>
                </div>

                {/* TIER B */}
                <div className="tier-row tier-b-row">
                  <div className="tier-badge-box badge-b">B</div>
                  <div className="tier-items-flow">
                    <TechBadge name="Golang" icon={PixelGoIcon} color="#0284c7" bg="#e0f2fe" border="#38bdf8" />
                    <TechBadge name="PostgreSQL" icon={PixelPostgresIcon} color="#1e40af" bg="#dbeafe" border="#60a5fa" />
                    <TechBadge name="Express" color="#334155" bg="#f1f5f9" border="#94a3b8" />
                    <TechBadge name="FastAPI" color="#0f766e" bg="#ccfbf1" border="#2dd4bf" />
                  </div>
                </div>

                {/* TIER C */}
                <div className="tier-row tier-c-row">
                  <div className="tier-badge-box badge-c">C</div>
                  <div className="tier-items-flow">
                    <TechBadge name="Docker" icon={PixelDockerIcon} color="#0369a1" bg="#e0f2fe" border="#38bdf8" />
                    <TechBadge name="AWS" icon={PixelAWSIcon} color="#b45309" bg="#fef3c7" border="#facc15" />
                    <TechBadge name="PyTorch" color="#c2410c" bg="#ffedd5" border="#fb923c" />
                    <TechBadge name="Redis" color="#b91c1c" bg="#fee2e2" border="#f87171" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              MODE 2: PROJECTS (STICKY NOTES PINNED TO WHITEBOARD)
              ======================================================== */}
          {mode === 'projects' && (
            <div className="whiteboard-view-projects">
              <div className="sticky-notes-cluster">
                {/* STICKY NOTE 1: REVIEWPEDIA */}
                <div className="sticky-note note-yellow">
                  <div className="push-pin pin-red"></div>
                  <div className="note-header">
                    <h4>Reviewpedia</h4>
                    <a
                      href="https://www.reviewpedia.co.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="note-link-btn"
                    >
                      OPEN ↗
                    </a>
                  </div>
                  <div className="note-tags">React • Node • Go • H3</div>
                  <p className="note-body">
                    Location-based reviews with 4k+ ratings, live Socket.IO chat &amp; AI RAG agents. Tested at 1400 users!
                  </p>
                </div>

                {/* STICKY NOTE 2: AI RESUME MATCHMAKER */}
                <div className="sticky-note note-blue">
                  <div className="push-pin pin-green"></div>
                  <div className="note-header">
                    <h4>AI Resume Match</h4>
                  </div>
                  <div className="note-tags">Python • PyTorch • BERT</div>
                  <p className="note-body">
                    Semantic matching fine-tuned on 2.4k+ resumes across 24 sectors. Gemini Embeddings &amp; Pinecone Vector DB.
                  </p>
                </div>

                {/* STICKY NOTE 3: ACHIEVEMENTS */}
                <div className="sticky-note note-pink">
                  <div className="push-pin pin-yellow"></div>
                  <div className="note-header">
                    <h4>Hackathon &amp; LC</h4>
                  </div>
                  <div className="note-tags">1st Place • Rank 931</div>
                  <p className="note-body">
                    🏆 1st in INNOVATE 2.0 Hackathon. Global Rank 931 in LeetCode Biweekly 190.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              MODE 3: DSA SHEET (WITH CLICKABLE GOOGLE SHEETS ICON)
              ======================================================== */}
          {mode === 'dsasheet' && (
            <div className="whiteboard-view-dsa">
              <div className="dsa-sheet-whiteboard-card">
                <div className="dsa-topics-doodle">
                  <div className="dsa-col">
                    <div className="dsa-item">✓ Arrays &amp; Two Pointers</div>
                    <div className="dsa-item">✓ Binary Search &amp; Sliding Window</div>
                    <div className="dsa-item">✓ Trees &amp; BST Traversal</div>
                  </div>
                  <div className="dsa-col">
                    <div className="dsa-item">✓ Graphs, BFS &amp; DFS</div>
                    <div className="dsa-item">✓ Dynamic Programming (1D &amp; 2D)</div>
                    <div className="dsa-item">✓ Backtracking &amp; Heaps</div>
                  </div>
                </div>

                {/* PROMINENT CLICKABLE GOOGLE SHEETS BUTTON & ICON */}
                <div className="google-sheets-launcher-area">
                  <a
                    href={dsaSheetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="google-sheets-big-action"
                    title="Open Google Sheet in new tab"
                  >
                    <div className="gsheets-icon-box">
                      <PixelGoogleSheets size={36} />
                    </div>
                    <div className="gsheets-action-info">
                      <span className="gsheets-main-title">SOURISH'S DSA FOR PLACEMENTS</span>
                      <span className="gsheets-sub-pill">OPEN GOOGLE SPREADSHEET ↗</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================
              MODE 4: ABOUT ME
              ======================================================== */}
          {mode === 'about' && (
            <div className="whiteboard-view-about">
              <div className="about-doodle-content">
                <div className="about-doodle-top">
                  <div className="about-polaroid-box">
                    <div className="polaroid-photo">SM</div>
                    <span className="polaroid-caption">DEV @ WORK</span>
                  </div>
                  <div className="about-doodle-bio">
                    <p className="bio-lead">
                      B.Tech CSE @ <strong>Jaypee Institute of Information Tech (JIIT)</strong> (2023–2027)
                    </p>
                    <p className="bio-sub">
                      CGPA: 8.0 • Full-Stack Engineer, Distributed Backend &amp; Applied AI enthusiast.
                    </p>
                    <div className="bio-badges">
                      <span className="badge-tag">INNOVATE 2.0 Winner</span>
                      <span className="badge-tag">LeetCode Rank 931</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Marker & Eraser Tray at Bottom */}
        <div className="whiteboard-marker-tray">
          <div className="marker-pen pen-black" title="Black Dry Erase Marker"></div>
          <div className="marker-pen pen-blue" title="Blue Dry Erase Marker"></div>
          <div className="marker-pen pen-red" title="Red Dry Erase Marker"></div>
          <div className="marker-pen pen-green" title="Green Dry Erase Marker"></div>
          <div className="whiteboard-felt-eraser" title="Whiteboard Eraser"></div>
        </div>
      </div>
    </div>
  );
}
