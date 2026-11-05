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
  PixelStudyResources
} from './PixelIcons';

export default function Bookshelf({ isDark, onOpenModal }) {
  const handleItemClick = (action, e) => {
    if (typeof action === 'function') {
      e.preventDefault();
      action();
    }
  };

  const cubbies = [
    {
      id: 'github',
      label: 'GITHUB',
      tag: 'Code & Repos',
      href: 'https://github.com/sourish-24',
      isExternal: true,
      renderIcon: () => <PixelGitHub size={36} color={isDark ? '#f8fafc' : '#1e293b'} />,
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      tag: 'Connect',
      href: 'https://linkedin.com/in/sourish',
      isExternal: true,
      renderIcon: () => <PixelLinkedIn size={36} color="#0077b5" />,
    },
    {
      id: 'leetcode',
      label: 'LEETCODE',
      tag: 'Problem Solving',
      href: 'https://leetcode.com/u/sourishmusib/',
      isExternal: true,
      renderIcon: () => <PixelLeetCode size={36} />,
    },
    {
      id: 'codeforces',
      label: 'CODEFORCES',
      tag: 'sourcodes24',
      href: 'https://codeforces.com/profile/sourcodes24',
      isExternal: true,
      renderIcon: () => <PixelCodeforces size={36} />,
    },
    {
      id: 'dsasheet',
      label: 'DSA SHEET',
      tag: 'Google Sheets',
      href: 'https://docs.google.com/spreadsheets/d/1ANEzJSdgeWEKKOZcmaRdQgj-D2k8r4BqAuAHaXwWXkI/edit?usp=sharing',
      isExternal: true,
      renderIcon: () => <PixelGoogleSheets size={36} />,
    },
    {
      id: 'email',
      label: 'EMAIL',
      tag: 'Say Hello',
      href: 'mailto:sourishmusib@gmail.com',
      isExternal: true,
      renderIcon: () => <PixelMail size={36} color="#f59e0b" />,
    },
    {
      id: 'projects',
      label: 'PROJECTS',
      tag: '3 Demos',
      action: () => onOpenModal('projects'),
      renderIcon: () => <PixelFloppy size={36} color="#6366f1" />,
    },
    {
      id: 'skills',
      label: 'SKILLS',
      tag: 'Tech Stack',
      action: () => onOpenModal('skills'),
      renderIcon: () => <PixelController size={36} color="#10b981" />,
    },
    {
      id: 'about',
      label: 'ABOUT ME',
      tag: 'Bio & Story',
      action: () => onOpenModal('about'),
      renderIcon: () => <PixelBook size={36} color="#ef4444" />,
    },
    {
      id: 'study-resources',
      label: 'MY STUDY RES',
      tag: 'My Study Resources',
      action: () => onOpenModal('study-resources'),
      renderIcon: () => <PixelStudyResources size={36} />,
    },
  ];

  return (
    <aside className="pixel-bookshelf-unit" aria-label="Bookshelf Navigation">
      {/* Bookshelf top header */}
      <div className="bookshelf-crest">
        <div className="crest-plaque brass-textbox-plaque">
          <span className="brass-textbox-label">BOOKSHELF</span>
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
              <div className="cubby-tooltip">
                <span className="tooltip-tag">{cubby.tag}</span>
                {cubby.isExternal && <span className="tooltip-ext">↗</span>}
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
                title={`${cubby.label} - ${cubby.tag}`}
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
              title={`${cubby.label} - ${cubby.tag}`}
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
