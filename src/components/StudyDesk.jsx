import React from 'react';
import { PixelFolder } from './PixelIcons';

export default function StudyDesk() {
  const resumeUrl = `${import.meta.env.BASE_URL}Sourish_Musib_Resume.pdf`;

  return (
    <div className="study-desk-wrapper">
      {/* Desk surface top plank */}
      <div className="desk-surface-slab">
        <div className="slab-grain-highlight"></div>
      </div>

      {/* Desk front face with drawers */}
      <div className="desk-under-structure">
        <div className="desk-drawer-left">
          <div className="drawer-panel">
            <div className="drawer-handle-brass"></div>
          </div>
          <div className="drawer-panel">
            <div className="drawer-handle-brass"></div>
          </div>
        </div>
        <div className="desk-knee-hole"></div>
        <div className="desk-leg-right"></div>
      </div>

      {/* Items on top of desk */}
      <div className="desk-items-container">
        
        {/* RETRO CRT MONITOR (Opens Reviewpedia, clean natural CRT look, no button hover effects) */}
        <div className="crt-monitor-assembly">
          <div className="monitor-casing">
            <div className="monitor-screen-bezel">
              <a
                href="https://www.reviewpedia.co.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="screen-tube-display monitor-natural-link"
                title="Visit www.reviewpedia.co.in"
              >
                <div className="crt-scanlines"></div>
                <div className="crt-glow-overlay"></div>
                
                <div className="monitor-text-body">
                  <div className="monitor-line-caption">CURRENTLY WORKING ON</div>
                  <div className="monitor-line-url">reviewpedia.co.in</div>
                </div>

                <div className="power-led-active"></div>
              </a>
            </div>
            {/* Monitor ventilation slots & logo */}
            <div className="monitor-bottom-bar">
              <span className="retro-logo">VITE-CRT</span>
              <div className="monitor-knobs">
                <span className="mini-knob"></span>
                <span className="mini-knob"></span>
              </div>
            </div>
          </div>
          {/* Monitor stand */}
          <div className="monitor-neck"></div>
          <div className="monitor-foot"></div>
        </div>

        {/* RESUME FOLDER ON THE TABLE */}
        <div className="desk-resume-folder-zone">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-folder-link"
            title="Open Sourish's Resume"
          >
            <div className="folder-icon-graphic">
              <PixelFolder size={38} />
            </div>
            <div className="brass-textbox-plaque">
              <span className="brass-textbox-label">SOURISH'S RESUME</span>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}
