import React from 'react';

/**
 * Hero banner with optional background image and gradient overlay.
 */
const PageBanner = ({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  variant = 'default'
}) => {
  const style = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section className={`ds-banner ds-banner--${variant}`}>
      {backgroundImage && (
        <>
          <div className="ds-banner__media" style={style} aria-hidden />
          <div className="ds-banner__stripes" aria-hidden />
        </>
      )}
      {!backgroundImage && (
        <div
          className="ds-banner__media"
          style={{
            background: `
              radial-gradient(ellipse 80% 80% at 20% 30%, rgba(201, 168, 124, 0.12), transparent 55%),
              radial-gradient(ellipse 60% 60% at 90% 70%, rgba(143, 155, 130, 0.1), transparent 50%),
              linear-gradient(145deg, #0c1222 0%, #121a2f 100%)
            `
          }}
          aria-hidden
        />
      )}
      <div className="ds-banner__overlay" />
      <div className="ds-banner__content">
        {eyebrow && <p className="ds-banner__eyebrow">{eyebrow}</p>}
        <h1 className="ds-banner__title">{title}</h1>
        {subtitle && <p className="ds-banner__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageBanner;
