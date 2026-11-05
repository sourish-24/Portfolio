import React from 'react';

export default function WindowView({ isDark }) {
  return (
    <div className="pixel-window-frame" aria-label="Room Window">
      <div className="window-exterior-sky">
        {/* DAYTIME SKY ELEMENTS */}
        <div className={`sky-day ${!isDark ? 'active-sky' : ''}`}>
          <div className="pixel-sun">
            <div className="sun-core"></div>
            <div className="sun-ray ray-n"></div>
            <div className="sun-ray ray-s"></div>
            <div className="sun-ray ray-e"></div>
            <div className="sun-ray ray-w"></div>
          </div>
          <div className="cloud-pixel cloud-large cloud-move-1"></div>
          <div className="cloud-pixel cloud-medium cloud-move-2"></div>
        </div>

        {/* NIGHTTIME SKY ELEMENTS */}
        <div className={`sky-night ${isDark ? 'active-sky' : ''}`}>
          <div className="pixel-moon">
            <div className="moon-crescent"></div>
          </div>
          {/* Twinkling stars */}
          <div className="star-field">
            <span className="star-dot s1">✦</span>
            <span className="star-dot s2">★</span>
            <span className="star-dot s3">✦</span>
            <span className="star-dot s4">★</span>
            <span className="star-dot s5">✦</span>
            <span className="star-dot s6">★</span>
          </div>
          {/* Shooting star */}
          <div className="shooting-star-streak"></div>
        </div>

        {/* DISTANT PIXEL MOUNTAINS / CITYLINE */}
        <div className="distant-skyline">
          <div className="mountain-peak peak-1"></div>
          <div className="mountain-peak peak-2"></div>
          <div className="mountain-peak peak-3"></div>
        </div>
      </div>

      {/* Wooden Window Crossbars */}
      <div className="window-bars-horizontal"></div>
      <div className="window-bars-vertical"></div>

      {/* Window sill */}
      <div className="window-sill-shelf">
        <div className="sill-highlight"></div>
      </div>
    </div>
  );
}
