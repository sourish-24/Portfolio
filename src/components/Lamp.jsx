import React, { useState } from 'react';

export default function Lamp({ isDark, onToggle }) {
  const [pulled, setPulled] = useState(false);

  const handleClick = () => {
    setPulled(true);
    onToggle();
    setTimeout(() => setPulled(false), 250);
  };

  return (
    <div
      className={`pixel-lamp-assembly ${isDark ? 'lamp-on' : 'lamp-off'}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      title={isDark ? "Click lamp to switch to Day Mode" : "Click lamp to switch to Night Mode"}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {/* Interactive Tooltip badge */}
      <div className="lamp-hint-badge">
        <span className="hint-arrow">▼</span>
        <div className="brass-textbox-plaque">
          <span className="brass-textbox-label">{isDark ? "DAY MODE" : "NIGHT MODE"}</span>
        </div>
      </div>

      {/* Lamp shade */}
      <div className="lamp-finial"></div>
      <div className="lamp-cap"></div>
      <div className="lamp-shade-retro">
        <div className="shade-stripe"></div>
        {/* Glowing bulb under shade */}
        <div className="lamp-bulb-glow"></div>
      </div>

      {/* Pull chain cord */}
      <div className={`lamp-pull-cord ${pulled ? 'cord-pulled' : ''}`}>
        <div className="cord-line"></div>
        <div className="cord-ball"></div>
      </div>

      {/* Lamp stem / neck */}
      <div className="lamp-neck-brass"></div>
      <div className="lamp-body-brass"></div>
      <div className="lamp-base-pedestal"></div>

      {/* Desk puddle glow when ON */}
      <div className="lamp-desk-reflection"></div>
    </div>
  );
}
