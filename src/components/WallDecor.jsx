import React, { useState, useEffect } from 'react';

export default function WallDecor({ isDark }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const h = String(d.getHours()).padStart(2, '0');
      const m = String(d.getMinutes()).padStart(2, '0');
      setTimeStr(`${h}:${m}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wall-decorations-layer">
      {/* STRING OF COZY FAIRY LIGHTS */}
      <div className={`fairy-lights-string ${isDark ? 'lights-glowing' : ''}`}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`fairy-bulb bulb-${i % 3}`}></div>
        ))}
      </div>

      {/* WALL MOUNTED DIGITAL/PIXEL CLOCK */}
      <div className="pixel-wall-clock" title="Local Time">
        <div className="clock-wood-frame">
          <div className="clock-face">
            <span className="clock-time">{timeStr}</span>
          </div>
        </div>
      </div>

      {/* FRAMED PIXEL POSTER */}
      <div className="framed-pixel-poster">
        <div className="poster-frame">
          <div className="poster-art">
            <div className="poster-sun"></div>
            <div className="poster-mountain m1"></div>
            <div className="poster-mountain m2"></div>
            <div className="poster-grid-floor"></div>
          </div>
        </div>
        <div className="poster-caption">STAY COZY</div>
      </div>
    </div>
  );
}
