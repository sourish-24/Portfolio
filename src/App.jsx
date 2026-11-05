import React, { useState, useEffect } from 'react';
import Lamp from './components/Lamp';
import Bookshelf from './components/Bookshelf';
import StudyDesk from './components/StudyDesk';
import WindowView from './components/WindowView';
import WallDecor from './components/WallDecor';
import './styles/global.css';
import './styles/scene.css';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState(null);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleNavigation = (id) => {
    // When clicking any bookshelf item or trophy, smoothly pan to the right room
    setActiveSection(id);
  };

  const handleReturnToStudy = () => {
    setActiveSection(null);
  };

  // Keyboard navigation: Escape key returns to main study desk
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeSection) {
        setActiveSection(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  return (
    <div className={`scene-viewport ${isDark ? 'theme-dark' : 'theme-light'}`}>
      {/* SCANLINE / CRT PIXEL GRID OVERLAY */}
      <div className="pixel-scanline-grid" aria-hidden="true"></div>

      {/* MAIN COZY ROOM VIEWPORT */}
      <main className="cozy-study-room">
        {/* ROOM WALL BACKGROUND (STAYS FIXED AS CAMERA PANS) */}
        <div className="room-wall-panel">
          <div className="wallpaper-vertical-lines"></div>
        </div>

        {/* ROOM HARDWOOD FLOOR (STAYS FIXED AS CAMERA PANS) */}
        <div className="room-hardwood-floor">
          <div className="floor-planks-pattern"></div>
        </div>

        {/* STUDY ROOM FURNITURE & ITEMS (SLIDES OUT TO LEFT ON NAVIGATION) */}
        <div className={`room-furniture-stage ${activeSection ? 'stage-slid-left' : ''}`}>
          {/* Wall decor: fairy lights, clock, art poster, window */}
          <div className="room-wall-items-layer">
            <WallDecor isDark={isDark} />
            <WindowView isDark={isDark} />
          </div>

          {/* STUDY TABLE & ITEMS (CENTER-LEFT) */}
          <div className="study-table-zone">
            {/* INTERACTIVE TABLE LAMP (Dark/Light mode switch) */}
            <Lamp isDark={isDark} onToggle={toggleTheme} />

            {/* DESK WITH CRT MONITOR (NO COFFEE, KEYBOARD, MOUSE, CAT) */}
            <StudyDesk />
          </div>

          {/* SQUARE GRID BOOKSHELF (ON THE RIGHT) */}
          <Bookshelf
            isDark={isDark}
            onOpenModal={handleNavigation}
          />
        </div>

        {/* RIGHT ROOM VIEWPORT (PAN TARGET - KEPT BLANK FOR NOW) */}
        <div
          className={`right-room-stage ${activeSection ? 'right-stage-active' : ''}`}
          aria-hidden={!activeSection}
        >
          {/* RETRO RETURN BUTTON */}
          {activeSection && (
            <button
              type="button"
              className="return-to-study-btn brass-textbox-plaque"
              onClick={handleReturnToStudy}
              aria-label="Return to Study Desk"
              title="Return to Study Desk (Esc)"
            >
              <span className="return-arrow">◄</span>
              <span className="brass-textbox-label">RETURN TO DESK</span>
              <span className="return-esc-hint">[ESC]</span>
            </button>
          )}

          {/* DISPLAY AREA FOR RIGHT ROOM - KEPT BLANK FOR NOW AS REQUESTED */}
          <div
            className="right-room-content-area"
            data-section={activeSection}
          >
            {/* Blank screen for now */}
          </div>
        </div>
      </main>
    </div>
  );
}
