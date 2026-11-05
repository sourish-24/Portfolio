import React, { useState } from 'react';
import Lamp from './components/Lamp';
import Bookshelf from './components/Bookshelf';
import StudyDesk from './components/StudyDesk';
import WindowView from './components/WindowView';
import WallDecor from './components/WallDecor';
import Whiteboard from './components/Whiteboard';
import './styles/global.css';
import './styles/scene.css';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [whiteboardMode, setWhiteboardMode] = useState('skills');

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`scene-viewport ${isDark ? 'theme-dark' : 'theme-light'}`}>
      {/* SCANLINE / CRT PIXEL GRID OVERLAY */}
      <div className="pixel-scanline-grid" aria-hidden="true"></div>

      {/* MAIN COZY ROOM VIEWPORT */}
      <main className="cozy-study-room">
        {/* ROOM WALL BACKGROUND */}
        <div className="room-wall-panel">
          <div className="wallpaper-vertical-lines"></div>
          {/* Wall decor: fairy lights, clock, art poster */}
          <WallDecor isDark={isDark} />
          {/* Room window showing sky */}
          <WindowView isDark={isDark} />
        </div>

        {/* WIDE WHITEBOARD DIRECTLY BELOW WINDOW */}
        <Whiteboard
          mode={whiteboardMode}
          onSelectMode={(mode) => setWhiteboardMode(mode)}
        />

        {/* ROOM HARDWOOD FLOOR (NO CARPET) */}
        <div className="room-hardwood-floor">
          <div className="floor-planks-pattern"></div>
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
          activeWhiteboardMode={whiteboardMode}
          onSelectWhiteboard={(mode) => setWhiteboardMode(mode)}
        />

        {/* LAMP LIGHT CONE & VOLUMETRIC ROOM ILLUMINATION */}
        <div className={`volumetric-lamp-beam ${isDark ? 'beam-active' : 'beam-hidden'}`} aria-hidden="true"></div>
        <div className={`dark-vignette-overlay ${isDark ? 'vignette-active' : 'vignette-hidden'}`} aria-hidden="true"></div>
      </main>
    </div>
  );
}
