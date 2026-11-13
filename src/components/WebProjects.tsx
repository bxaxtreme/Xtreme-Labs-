'use client';

import React, { useEffect, useState } from 'react';
import { webProjects, WebProject } from '@/config/webProjects';

const ProjectCard: React.FC<{ project: WebProject }> = ({ project }) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = project.previews.length;

  useEffect(() => {
    if (paused || total < 2) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, 4200);
    return () => clearInterval(timer);
  }, [paused, total]);

  return (
    <article className="wp-card" style={{ '--wp-accent': project.accent } as React.CSSProperties}>
      <div
        className="wp-preview"
        onPointerEnter={(e) => { if (e.pointerType === 'mouse') setPaused(true); }}
        onPointerLeave={(e) => { if (e.pointerType === 'mouse') setPaused(false); }}
      >
        <div className="wp-preview-frame">
          {project.previews.map((p, i) => (
            <img
              key={p.src}
              src={p.src}
              alt={p.alt}
              className={`wp-slide ${i === active ? 'is-active' : ''}`}
              loading="lazy"
            />
          ))}
        </div>
        {total > 1 && (
          <div className={`wp-progress ${paused ? 'is-paused' : ''}`} aria-hidden="true">
            <span key={`${active}-${paused}`} className="wp-progress-bar" />
          </div>
        )}
        {total > 1 && (
          <div className="wp-dots" role="tablist" aria-label={`${project.title} previews`}>
            {project.previews.map((p, i) => (
              <button
                key={p.src}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Show preview ${i + 1}`}
                className={`wp-dot ${i === active ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="wp-body">
        <span className="wp-meta">
          {project.index} · {project.category}
        </span>
        <h3 className="wp-title">{project.title}</h3>
        <p className="wp-desc">{project.description}</p>

        <div className="wp-highlight">
          <span className="wp-highlight-label">Highlights</span>
          <p>{project.highlights}</p>
        </div>

        <div className="wp-tags">
          {project.tags.map((t, idx) => (
            <span key={t} className="wp-tag" style={{ '--i': idx } as React.CSSProperties}>{t}</span>
          ))}
        </div>

        {project.liveUrl && (
          <div className="wp-actions">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="wp-live-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              {project.title}
              <span className="wp-live-arrow" aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export const WebProjects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Web Projects</span>
          <h2 className="section-title">Websites Built by Xtreme Labs</h2>
          <p className="section-desc">
            Beyond the bots, here are the web projects we design and ship.
          </p>
        </div>

        <div className="wp-list">
          {webProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};
