import React from 'react';
import {
  PixelGitHub,
  PixelLinkedIn,
  PixelLeetCode,
  PixelCodeforces,
  PixelGoogleSheets,
  PixelMail,
  PixelFloppy,
  PixelBook,
  PixelController,
  PixelStudyResources,
  PixelGoldenTrophy,
  PixelSilverTrophy,
  PixelWisprFlow
} from './PixelIcons';

export default function Bookshelf({ isDark, onOpenModal }) {
  const handleItemClick = (action, e) => {
    if (typeof action === 'function') {
      e.preventDefault();
      action();
    }
  };

  const cubbies = [
    // ROW 1: About Me & Projects
    {
      id: 'about',
      label: 'ABOUT ME',
      action: () => onOpenModal('about'),
      renderIcon: () => <PixelBook size={36} color="#ef4444" />,
    },
    {
      id: 'projects',
      label: 'PROJECTS',
      action: () => onOpenModal('projects'),
      renderIcon: () => <PixelFloppy size={36} color="#6366f1" />,
    },

    // ROW 2: Skills & DSA Sheet
    {
      id: 'skills',
      label: 'SKILLS',
      action: () => onOpenModal('skills'),
      renderIcon: () => <PixelController size={36} color="#10b981" />,
    },
    {
      id: 'dsasheet',
      label: 'DSA SHEET',
      href: 'https://docs.google.com/spreadsheets/d/1ANEzJSdgeWEKKOZcmaRdQgj-D2k8r4BqAuAHaXwWXkI/edit?usp=sharing',
      isExternal: true,
      renderIcon: () => <PixelGoogleSheets size={36} />,
    },

    // ROW 3: GitHub & LinkedIn
    {
      id: 'github',
      label: 'GITHUB',
      href: 'https://github.com/sourish-24',
      isExternal: true,
      renderIcon: () => <PixelGitHub size={36} color={isDark ? '#f8fafc' : '#1e293b'} />,
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      href: 'https://linkedin.com/in/sourish',
      isExternal: true,
      renderIcon: () => <PixelLinkedIn size={36} color="#0077b5" />,
    },

    // ROW 4: LeetCode & Codeforces
    {
      id: 'leetcode',
      label: 'LEETCODE',
      href: 'https://leetcode.com/u/sourishmusib/',
      isExternal: true,
      renderIcon: () => <PixelLeetCode size={36} />,
    },
    {
      id: 'codeforces',
      label: 'CODEFORCES',
      href: 'https://codeforces.com/profile/sourcodes24',
      isExternal: true,
      renderIcon: () => <PixelCodeforces size={36} />,
    },

    // ROW 5: Study Resources & Email
    {
      id: 'study-resources',
      label: 'STUDY RESOURCES',
      action: () => onOpenModal('study-resources'),
      renderIcon: () => <PixelStudyResources size={36} />,
    },
    {
      id: 'email',
      label: 'EMAIL',
      href: 'mailto:sourishmusib@gmail.com',
      isExternal: true,
      renderIcon: () => <PixelMail size={36} />,
    },
  ];

  return (
    <aside className="pixel-bookshelf-unit" aria-label="MY-SHELF Navigation">
      {/* TWO TROPHIES & WISPR FLOW LOGO MOUNTED ABOVE BOOKSHELF */}
      <div className="bookshelf-trophies-perch" aria-label="Achievements Showcase">
        {/* LEFT/CENTER CLUSTER: GOLDEN & SILVER TROPHIES CLOSER TOGETHER */}
        <div className="trophies-cluster">
          {/* GOLDEN TROPHY: WINNER OF INNOVATE 2.0 HACKATHON 2024 */}
          <button
            type="button"
            className="trophy-perch-btn trophy-golden"
            onClick={() => onOpenModal('trophy-innovate')}
            aria-label="Winner of INNOVATE 2.0 Hackathon 2024"
          >
            {/* HOVER PLAQUE DISPLAYED ABOVE TROPHY ONLY UPON HOVER */}
            <div className="trophy-hover-plaque plaque-gold brass-textbox-plaque">
              <span className="trophy-plaque-line">INNOVATE 2.0</span>
              <span className="trophy-plaque-line">WINNER 2024</span>
            </div>

            <div className="trophy-icon-wrap">
              <PixelGoldenTrophy size={42} />
            </div>
          </button>

          {/* SILVER TROPHY: RANK 931 IN LEETCODE BIWEEKLY CONTEST */}
          <button
            type="button"
            className="trophy-perch-btn trophy-silver"
            onClick={() => onOpenModal('trophy-leetcode')}
            aria-label="Rank 931 in LeetCode Biweekly Contest"
          >
            {/* HOVER PLAQUE DISPLAYED ABOVE TROPHY ONLY UPON HOVER */}
            <div className="trophy-hover-plaque plaque-silver brass-textbox-plaque">
              <span className="trophy-plaque-line">LEETCODE BIWEEKLY</span>
              <span className="trophy-plaque-line">RANK 931</span>
            </div>

            <div className="trophy-icon-wrap">
              <PixelSilverTrophy size={42} />
            </div>
          </button>
        </div>

        {/* RIGHT CORNER: WISPR FLOW B&W LOGO */}
        <div className="wispr-flow-corner-unit" aria-label="Wispr Flow" tabIndex={0} role="button">
          <div className="wispr-hover-plaque">
            <span>Thank you Wispr Flow.</span>
          </div>
          <div className="wispr-icon-wrap">
            <PixelWisprFlow size={28} />
          </div>
        </div>
      </div>

      {/* MY-SHELF top header */}
      <div className="bookshelf-crest">
        <div className="crest-plaque brass-textbox-plaque">
          <span className="brass-textbox-label">MY-SHELF</span>
        </div>
      </div>

      {/* 2x5 Square Grid Cubbies */}
      <div className="cubby-grid">
        {cubbies.map((cubby) => {
          const content = (
            <div className="cubby-inner">
              <div className="cubby-depth"></div>
              <div className="cubby-icon-wrapper">
                {cubby.renderIcon()}
              </div>
              <div className="cubby-plaque brass-textbox-plaque">
                <span className={`cubby-label brass-textbox-label ${cubby.id === 'study-resources' ? 'label-study-res' : ''}`}>
                  {cubby.label}
                </span>
              </div>
            </div>
          );

          if (cubby.isExternal) {
            return (
              <a
                key={cubby.id}
                href={cubby.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cubby-cell external-link"
                aria-label={cubby.label}
              >
                {content}
              </a>
            );
          }

          return (
            <button
              key={cubby.id}
              type="button"
              className="cubby-cell interactive-button"
              onClick={(e) => handleItemClick(cubby.action, e)}
              aria-label={cubby.label}
            >
              {content}
            </button>
          );
        })}
      </div>

      {/* Bookshelf wooden feet */}
      <div className="bookshelf-base-feet">
        <div className="shelf-foot foot-left"></div>
        <div className="shelf-foot foot-right"></div>
      </div>
    </aside>
  );
}
