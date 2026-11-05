import React, { useEffect } from 'react';
import {
  PixelBook,
  PixelFloppy,
  PixelController,
  PixelStudyResources,
  PixelMail
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

  // Dedicated config for each modal: no top tabs, only the clicked item opens
  const getModalMeta = () => {
    switch (activeTab) {
      case 'about':
        return {
          title: 'SOURISH_ABOUT.TXT',
          icon: <PixelBook size={18} color="#ef4444" />,
          status: 'BIO & PROFILE // READY'
        };
      case 'projects':
        return {
          title: 'SOURISH_PROJECTS.EXE',
          icon: <PixelFloppy size={18} color="#6366f1" />,
          status: 'PROJECTS DIRECTORY // 4 ENTRIES LOADED'
        };
      case 'skills':
        return {
          title: 'SOURISH_SKILLS.DAT',
          icon: <PixelController size={18} color="#10b981" />,
          status: 'TECH INVENTORY // ALL SUBSYSTEMS NOMINAL'
        };
      case 'study-resources':
        return {
          title: 'MY_STUDY_RESOURCES.LOG',
          icon: <PixelStudyResources size={18} />,
          status: 'CURATED LEARNING VAULT // UPDATED FOR CURRENT SPRINT'
        };
      case 'contact':
        return {
          title: 'SOURISH_CONTACT.MSG',
          icon: <PixelMail size={18} color="#f59e0b" />,
          status: 'MAIL CLIENT // ONLINE'
        };
      default:
        return {
          title: 'SOURISH_MODAL.SYS',
          icon: <PixelFloppy size={18} />,
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

        {/* DIALOG CONTENT BODY (Dedicated view - NO top tabs) */}
        <div className="dialog-content-body">
          {activeTab === 'about' && (
            <div className="pane-about">
              <div className="about-header-card">
                <div className="pixel-avatar-box">SM</div>
                <div className="avatar-meta">
                  <h3>Sourish Musib</h3>
                  <div className="role-badge">Software Engineer & Systems Builder</div>
                  <div className="loc-text">B.Tech CSE (2023 - 2027) • JIIT Noida • CGPA 8.0</div>
                </div>
              </div>

              <div className="terminal-speech-bubble">
                <p>&gt; cat intro.txt</p>
                <p>
                  Hey! I'm Sourish, a CS undergraduate at Jaypee Institute of Information Technology (JIIT).
                  I specialize in distributed systems, high-concurrency backend engineering with Golang,
                  geospatial indexing (Uber H3), and building autonomous Agentic AI & RAG workflows.
                </p>
                <p>
                  Currently developing and scaling <strong>Reviewpedia</strong> (reviewpedia.co.in) and actively
                  practicing competitive programming with a LeetCode Contest Rank of 931.
                </p>
              </div>

              <div className="about-meta-grid">
                <div className="meta-card">
                  <div className="meta-card-label">ACADEMICS</div>
                  <div className="meta-card-val">B.Tech CSE @ JIIT (CGPA 8.0)</div>
                </div>
                <div className="meta-card">
                  <div className="meta-card-label">COMPETITIVE</div>
                  <div className="meta-card-val">LeetCode Rank 931 • Codeforces (sourcodes24)</div>
                </div>
                <div className="meta-card">
                  <div className="meta-card-label">CERTIFICATIONS</div>
                  <div className="meta-card-val">Oracle Certified Agentic AI • GenAI EDUCOSYS</div>
                </div>
                <div className="meta-card">
                  <div className="meta-card-label">CORE FOCUS</div>
                  <div className="meta-card-val">Distributed Systems, Golang, Uber H3, Agentic AI</div>
                </div>
              </div>

              <div className="modal-actions-row">
                <a
                  href="/Portfolio/Sourish_Musib_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn-action btn-gold"
                >
                  📄 VIEW RESUME (PDF)
                </a>
                <a
                  href="https://github.com/sourish-24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn-action btn-blue"
                >
                  🐙 GITHUB PROFILE
                </a>
                <a
                  href="https://linkedin.com/in/sourish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pixel-btn-action"
                >
                  💼 LINKEDIN
                </a>
                <a
                  href="mailto:sourishmusib@gmail.com"
                  className="pixel-btn-action"
                >
                  ✉️ EMAIL ME
                </a>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="pane-projects">
              <div className="projects-pixel-grid">
                {/* PROJECT 1 */}
                <div className="pixel-project-card featured-project-card">
                  <div className="proj-card-top">
                    <span className="proj-status-badge">CURRENTLY WORKING ON</span>
                    <h4>Reviewpedia</h4>
                    <a
                      href="https://www.reviewpedia.co.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-live-link"
                    >
                      LIVE SITE ↗
                    </a>
                  </div>
                  <p className="proj-desc">
                    A modern verified review platform featuring dynamic rating calculations, location-aware
                    discovery, and high-performance server-rendered frontend with reliable backend API.
                  </p>
                  <div className="proj-tags">
                    <span className="p-tag">React / Next.js</span>
                    <span className="p-tag">Node.js</span>
                    <span className="p-tag">PostgreSQL</span>
                    <span className="p-tag">Leaflet</span>
                    <span className="p-tag">Tailwind</span>
                  </div>
                </div>

                {/* PROJECT 2 */}
                <div className="pixel-project-card">
                  <div className="proj-card-top">
                    <h4>Uber H3 Geospatial Partitioning Engine</h4>
                    <span className="proj-type-badge">Systems & Geo</span>
                  </div>
                  <p className="proj-desc">
                    Spatial clustering and indexing microservice using Uber H3 Discrete Global Grid System (DGGS)
                    for dynamic hexagonal coordinate binning, handling high-frequency location updates with sub-50ms query latency.
                  </p>
                  <div className="proj-tags">
                    <span className="p-tag">Golang</span>
                    <span className="p-tag">Uber H3</span>
                    <span className="p-tag">Redis</span>
                    <span className="p-tag">Socket.IO</span>
                    <span className="p-tag">Leaflet.js</span>
                  </div>
                </div>

                {/* PROJECT 3 */}
                <div className="pixel-project-card">
                  <div className="proj-card-top">
                    <h4>Agentic AI & RAG Query Assistant</h4>
                    <span className="proj-type-badge">AI / ML</span>
                  </div>
                  <p className="proj-desc">
                    Autonomous document intelligence engine combining dense vector embeddings, hybrid retrieval
                    via Pinecone Vector DB, and multi-step tool-calling with the OpenAI Agents SDK & fine-tuned DistilBERT models.
                  </p>
                  <div className="proj-tags">
                    <span className="p-tag">Python</span>
                    <span className="p-tag">PyTorch</span>
                    <span className="p-tag">Pinecone</span>
                    <span className="p-tag">DistilBERT</span>
                    <span className="p-tag">OpenAI SDK</span>
                  </div>
                </div>

                {/* PROJECT 4 */}
                <div className="pixel-project-card">
                  <div className="proj-card-top">
                    <h4>High-Throughput Concurrent Cache & Microservice</h4>
                    <span className="proj-type-badge">Backend</span>
                  </div>
                  <p className="proj-desc">
                    Distributed in-memory caching engine with LRU eviction and TTL invalidation built with Go
                    concurrency primitives (sync.Map, Goroutines, channels) load-tested with k6 achieving 10,000+ req/sec.
                  </p>
                  <div className="proj-tags">
                    <span className="p-tag">Golang</span>
                    <span className="p-tag">Docker</span>
                    <span className="p-tag">Redis</span>
                    <span className="p-tag">k6</span>
                    <span className="p-tag">REST</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="pane-skills">
              <div className="skills-categorized-list">
                {/* LANGUAGES */}
                <div className="skill-category-block">
                  <h4 className="cat-title">⚡ PROGRAMMING LANGUAGES</h4>
                  <div className="skills-stat-bars">
                    <div className="skill-meter-row">
                      <span className="skill-title">Golang (Go)</span>
                      <div className="pixel-meter-bar">
                        <div className="meter-fill" style={{ width: '88%' }}></div>
                      </div>
                      <span className="meter-pct">88%</span>
                    </div>
                    <div className="skill-meter-row">
                      <span className="skill-title">C++ (DSA & CP)</span>
                      <div className="pixel-meter-bar">
                        <div className="meter-fill" style={{ width: '90%' }}></div>
                      </div>
                      <span className="meter-pct">90%</span>
                    </div>
                    <div className="skill-meter-row">
                      <span className="skill-title">JavaScript / TypeScript</span>
                      <div className="pixel-meter-bar">
                        <div className="meter-fill" style={{ width: '92%' }}></div>
                      </div>
                      <span className="meter-pct">92%</span>
                    </div>
                    <div className="skill-meter-row">
                      <span className="skill-title">Python (ML / GenAI)</span>
                      <div className="pixel-meter-bar">
                        <div className="meter-fill" style={{ width: '85%' }}></div>
                      </div>
                      <span className="meter-pct">85%</span>
                    </div>
                    <div className="skill-meter-row">
                      <span className="skill-title">SQL (PostgreSQL)</span>
                      <div className="pixel-meter-bar">
                        <div className="meter-fill" style={{ width: '84%' }}></div>
                      </div>
                      <span className="meter-pct">84%</span>
                    </div>
                  </div>
                </div>

                {/* BACKEND & ARCHITECTURE */}
                <div className="skill-category-block">
                  <h4 className="cat-title">🛠️ BACKEND, SYSTEMS & SPATIAL</h4>
                  <div className="skills-stat-bars">
                    <div className="skill-meter-row">
                      <span className="skill-title">Node.js & Express</span>
                      <div className="pixel-meter-bar">
                        <div className="meter-fill" style={{ width: '90%' }}></div>
                      </div>
                      <span className="meter-pct">90%</span>
                    </div>
                    <div className="skill-meter-row">
                      <span className="skill-title">Uber H3 Spatial Indexing</span>
                      <div className="pixel-meter-bar">
                        <div className="meter-fill" style={{ width: '88%' }}></div>
                      </div>
                      <span className="meter-pct">88%</span>
                    </div>
                    <div className="skill-meter-row">
                      <span className="skill-title">Redis & Distributed Caching</span>
                      <div className="pixel-meter-bar">
                        <div className="meter-fill" style={{ width: '86%' }}></div>
                      </div>
                      <span className="meter-pct">86%</span>
                    </div>
                    <div className="skill-meter-row">
                      <span className="skill-title">Docker & k6 Stress Testing</span>
                      <div className="pixel-meter-bar">
                        <div className="meter-fill" style={{ width: '84%' }}></div>
                      </div>
                      <span className="meter-pct">84%</span>
                    </div>
                  </div>
                </div>

                {/* AI & FRONTEND */}
                <div className="skill-category-block">
                  <h4 className="cat-title">🤖 AI / ML & MODERN FRONTEND</h4>
                  <div className="skills-stat-bars">
                    <div className="skill-meter-row">
                      <span className="skill-title">React.js & Vite</span>
                      <div className="pixel-meter-bar">
                        <div className="meter-fill" style={{ width: '92%' }}></div>
                      </div>
                      <span className="meter-pct">92%</span>
                    </div>
                    <div className="skill-meter-row">
                      <span className="skill-title">Agentic AI & RAG (OpenAI/Pinecone)</span>
                      <div className="pixel-meter-bar">
                        <div className="meter-fill" style={{ width: '88%' }}></div>
                      </div>
                      <span className="meter-pct">88%</span>
                    </div>
                    <div className="skill-meter-row">
                      <span className="skill-title">PyTorch & DistilBERT Fine-tuning</span>
                      <div className="pixel-meter-bar">
                        <div className="meter-fill" style={{ width: '80%' }}></div>
                      </div>
                      <span className="meter-pct">80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'study-resources' && (
            <div className="pane-resources">
              <div className="resources-intro-card">
                <h3>📚 WHAT I'VE BEEN STUDYING LATELY</h3>
                <p>
                  A real-time snapshot of topics, foundational literature, system design paradigms,
                  and daily practice trackers I am currently engaged with.
                </p>
              </div>

              <div className="resource-tracks-list">
                {/* TRACK 1 */}
                <div className="resource-track-item">
                  <div className="track-header">
                    <span className="track-num">01</span>
                    <div className="track-title-wrap">
                      <h4>Distributed Systems & High-Concurrency Backend (Golang)</h4>
                      <span className="track-badge badge-active">CURRENT SPRINT</span>
                    </div>
                  </div>
                  <div className="track-body">
                    <p className="track-desc">
                      Focusing on distributed consensus protocols (Raft, Paxos), cache invalidation architectures with Redis,
                      event-driven microservices, and Go concurrency primitives (Goroutines, Channels, sync.Pool, race conditions).
                    </p>
                    <div className="track-materials">
                      <span className="mat-label">KEY RESOURCES:</span>
                      <ul className="mat-list">
                        <li>📖 <em>Designing Data-Intensive Applications</em> (DDIA) by Martin Kleppmann</li>
                        <li>🎓 <em>MIT 6.824: Distributed Systems</em> (Robert Morris)</li>
                        <li>⚙️ Go Memory Model & Advanced Concurrency Patterns (Rob Pike)</li>
                        <li>⚡ Stress & Performance Testing with k6</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* TRACK 2 */}
                <div className="resource-track-item">
                  <div className="track-header">
                    <span className="track-num">02</span>
                    <div className="track-title-wrap">
                      <h4>Geospatial Indexing & Spatial Partitioning</h4>
                      <span className="track-badge badge-focus">CORE EXPERTISE</span>
                    </div>
                  </div>
                  <div className="track-body">
                    <p className="track-desc">
                      Studying Discrete Global Grid Systems (DGGS), hexagonal spatial binning using Uber H3,
                      hierarchical spatial indexing, sub-50ms k-ring range queries, and interactive rendering with Leaflet.js.
                    </p>
                    <div className="track-materials">
                      <span className="mat-label">KEY RESOURCES:</span>
                      <ul className="mat-list">
                        <li>🌐 Uber H3 DGGS Architecture & Core API Specifications</li>
                        <li>📐 Computational Geometry: Quadtrees, R-Trees vs Hexagonal DGGS</li>
                        <li>🗺️ Dynamic Spatial Clustering & Socket.IO Telemetry Streaming</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* TRACK 3 */}
                <div className="resource-track-item">
                  <div className="track-header">
                    <span className="track-num">03</span>
                    <div className="track-title-wrap">
                      <h4>Generative AI & Autonomous Agentic Workflows</h4>
                      <span className="track-badge badge-certified">CERTIFIED</span>
                    </div>
                  </div>
                  <div className="track-body">
                    <p className="track-desc">
                      Exploring multi-agent orchestration, tool-augmented loops, dense vector retrieval pipelines with Pinecone,
                      hybrid reranking, and fine-tuning DistilBERT transformer models on custom datasets with PyTorch.
                    </p>
                    <div className="track-materials">
                      <span className="mat-label">KEY RESOURCES & CREDS:</span>
                      <ul className="mat-list">
                        <li>🏆 <em>Oracle Certified Foundations Associate</em> — Generative AI & Agentic AI</li>
                        <li>🎓 <em>Hands-On Generative AI</em> by EDUCOSYS</li>
                        <li>🤖 OpenAI Agents SDK & Tool Calling Patterns</li>
                        <li>🔥 PyTorch Hugging Face Transformers fine-tuning pipelines</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* TRACK 4 */}
                <div className="resource-track-item">
                  <div className="track-header">
                    <span className="track-num">04</span>
                    <div className="track-title-wrap">
                      <h4>Competitive Programming & Advanced Algorithms</h4>
                      <span className="track-badge badge-daily">DAILY DRILL</span>
                    </div>
                  </div>
                  <div className="track-body">
                    <p className="track-desc">
                      Continuous daily problem-solving on LeetCode (Contest Rank 931+) and Codeforces (handle: sourcodes24).
                      Special emphasis on Dynamic Programming, Graph Theory (Bridges, Articulation Points, DSU), and Segment Trees.
                    </p>
                    <div className="track-materials">
                      <span className="mat-label">PRACTICE TRACKER:</span>
                      <div className="dsa-sheet-action">
                        <a
                          href="https://docs.google.com/spreadsheets/d/1ANEzJSdgeWEKKOZcmaRdQgj-D2k8r4BqAuAHaXwWXkI/edit?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pixel-btn-action btn-gold dsa-sheet-link-btn"
                        >
                          📊 OPEN SOURISH'S GOOGLE SHEETS DSA TRACKER ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TRACK 5 */}
                <div className="resource-track-item">
                  <div className="track-header">
                    <span className="track-num">05</span>
                    <div className="track-title-wrap">
                      <h4>Core CS Academics (JIIT 4th Sem CSE • CGPA 8.0)</h4>
                      <span className="track-badge">DEGREE TRACK</span>
                    </div>
                  </div>
                  <div className="track-body">
                    <p className="track-desc">
                      Deep study of foundational Computer Science theory and systems implementations at Jaypee Institute of Information Technology.
                    </p>
                    <div className="track-materials">
                      <ul className="mat-list">
                        <li>💻 <strong>Operating Systems:</strong> Paging, virtual memory, process scheduling, synchronization primitives</li>
                        <li>🌐 <strong>Computer Networks:</strong> TCP/IP sliding window, socket programming, flow control, HTTP/3</li>
                        <li>🗄️ <strong>DBMS:</strong> Relational algebra, B+ trees, indexing, ACID transactions, PostgreSQL tuning</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="pane-contact">
              <p className="contact-lead-text">
                Interested in collaborating on distributed systems, backend engineering, geospatial platforms, or AI? Feel free to reach out:
              </p>
              <div className="contact-links-stack">
                <a href="mailto:sourishmusib@gmail.com" className="contact-entry-card">
                  <span className="entry-icon">✉️</span>
                  <div className="entry-detail">
                    <span className="entry-title">PRIMARY EMAIL</span>
                    <span className="entry-val">sourishmusib@gmail.com</span>
                  </div>
                </a>
                <a href="https://linkedin.com/in/sourish" target="_blank" rel="noopener noreferrer" className="contact-entry-card">
                  <span className="entry-icon">💼</span>
                  <div className="entry-detail">
                    <span className="entry-title">LINKEDIN</span>
                    <span className="entry-val">linkedin.com/in/sourish</span>
                  </div>
                </a>
                <a href="https://github.com/sourish-24" target="_blank" rel="noopener noreferrer" className="contact-entry-card">
                  <span className="entry-icon">🐙</span>
                  <div className="entry-detail">
                    <span className="entry-title">GITHUB</span>
                    <span className="entry-val">github.com/sourish-24</span>
                  </div>
                </a>
                <a href="https://leetcode.com/u/sourishmusib/" target="_blank" rel="noopener noreferrer" className="contact-entry-card">
                  <span className="entry-icon">⚡</span>
                  <div className="entry-detail">
                    <span className="entry-title">LEETCODE (RANK 931)</span>
                    <span className="entry-val">leetcode.com/u/sourishmusib</span>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* RETRO STATUS FOOTER */}
        <div className="dialog-footer-status">
          <span className="status-indicator">{meta.status}</span>
          <span className="status-keyhint">PRESS [ESC] OR [X] TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}