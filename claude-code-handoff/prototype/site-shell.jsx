/* global React */
const { useState, useEffect } = React;

// ─── Moose logo ─────────────────────────────────────────────────────────────
function MooseLogo({ size = 48 }) {
  return (
    <img
      src="images/logo-moose.png"
      alt="Long Trail Partners moose logo"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        objectPosition: "center",
        filter: "invert(1) brightness(1.4) contrast(1.1)",
        mixBlendMode: "screen",
        display: "block"
      }}
    />
  );
}

// ─── Nav ────────────────────────────────────────────────────────────────────
function Nav({ current, navigate, copy }) {
  const [open, setOpen] = useState(false);
  const links = [
  { href: "who-we-are", label: "Who We Are" },
  { href: "how-we-think", label: "How We Think" },
  { href: "our-focus", label: "Our Focus" },
  { href: "for-owners", label: "For Owners" }];


  const go = (href) => (e) => {
    e.preventDefault();
    setOpen(false);
    navigate(href);
  };

  return (
    <header
      className="ltp-nav"
      style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "var(--color-forest)",
        borderBottom: "1px solid rgba(244,239,227,0.20)"
      }}>
      
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px var(--gutter)" }}>
        {/* Brand */}
        <a href="#/" onClick={go("home")} style={{ display: "flex", alignItems: "center", gap: 14, textDecoration: "none", color: "var(--color-cream)" }}>
          <MooseLogo size={84} />
          <div style={{ width: 1, height: 50, background: "rgba(244,239,227,0.22)" }} />
          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: 22, fontWeight: 600, letterSpacing: "0.04em", lineHeight: 1 }}>
              {copy.brandLine1 || "LONG TRAIL"}
            </div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 600, letterSpacing: "0.28em", color: "var(--color-muted)", marginTop: 6, lineHeight: 1 }}>
              {copy.brandLine2 || "PARTNERS"}
            </div>
          </div>
        </a>

        {/* Desktop links */}
        <nav className="ltp-nav-desktop" aria-label="Main navigation"
        style={{ display: "flex", alignItems: "center", gap: 36 }}>
          
          {links.map((l) =>
          <a key={l.href} href={`#/${l.href}`} onClick={go(l.href)}
          style={{
            fontSize: 15, fontWeight: 500, textDecoration: "none",
            color: current === l.href ? "var(--color-cream)" : "rgba(244,239,227,0.7)",
            transition: "opacity 0.2s"
          }}>
            {l.label}</a>
          )}
          <a href="#/contact" onClick={go("contact")}
          className="btn"
          style={{
            fontSize: 14, padding: "11px 22px", letterSpacing: "0.04em",
            background: current === "contact" ? "var(--color-cream)" : "transparent",
            color: current === "contact" ? "var(--color-forest)" : "var(--color-cream)",
            borderColor: current === "contact" ? "var(--color-cream)" : "rgba(244,239,227,0.4)"
          }}>
            Contact</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="ltp-nav-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{ display: "none", background: "transparent", border: "none", color: "var(--color-cream)", padding: 8, cursor: "pointer" }}>
          
          {open ?
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg> :

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
          }
        </button>
      </div>

      {open &&
      <nav style={{ borderTop: "1px solid rgba(244,239,227,0.10)", background: "var(--color-forest-deep)", padding: "24px var(--gutter)", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map((l) =>
        <a key={l.href} href={`#/${l.href}`} onClick={go(l.href)}
        style={{ color: "rgba(244,239,227,0.8)", fontSize: 17, fontWeight: 500, textDecoration: "none", padding: "4px 0" }}>
          {l.label}</a>
        )}
          <a href="#/contact" onClick={go("contact")} className="btn btn--ghost-light" style={{ marginTop: 8, textAlign: "center" }}>Contact</a>
        </nav>
      }

      <style>{`
        @media (max-width: 768px) {
          .ltp-nav-desktop { display: none !important; }
          .ltp-nav-burger  { display: block !important; }
        }
      `}</style>
    </header>);

}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer({ navigate, copy }) {
  const sitemap = [
  { href: "who-we-are", label: "Who We Are" },
  { href: "how-we-think", label: "How We Think" },
  { href: "our-focus", label: "Our Focus" },
  { href: "for-owners", label: "For Owners" },
  { href: "contact", label: "Contact" }];

  const regions = ["VT · NH · ME", "NY · MA · RI"];

  return (
    <footer
      style={{ background: "var(--color-forest-deep)", color: "var(--color-cream)", padding: "80px 0 40px" }}
      aria-label="Site footer">
      
      <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 48 }}>
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 600, letterSpacing: "0.04em", lineHeight: 1 }}>
            {copy.brandLine1 || "LONG TRAIL"}
          </div>
          <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.28em", color: "var(--color-muted)", marginTop: 8, lineHeight: 1 }}>
            {copy.brandLine2 || "PARTNERS"}
          </div>
          <p style={{ marginTop: 24, fontSize: 15, opacity: 0.7 }}>{copy.tagline || "Built for the Long Haul."}</p>
        </div>

        <div>
          <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.7, marginBottom: 16 }}>Region</h4>
          {regions.map((r) => <p key={r} style={{ fontSize: 15, opacity: 0.85, margin: "4px 0" }}>{r}</p>)}
        </div>

        <div>
          <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.7, marginBottom: 16 }}>Contact</h4>
          <p style={{ fontSize: 15, opacity: 0.85, margin: 0, lineHeight: 1.8 }}>
            <a href="mailto:jb@longtrl.com" style={{ color: "var(--color-cream)", textDecoration: "none", borderBottom: "1px solid rgba(244,239,227,0.4)" }}>jb@longtrl.com</a>
            <br />
            <a href="mailto:sg@longtrl.com" style={{ color: "var(--color-cream)", textDecoration: "none", borderBottom: "1px solid rgba(244,239,227,0.4)" }}>sg@longtrl.com</a>
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.7, marginBottom: 16 }}>Sitemap</h4>
          {sitemap.map((s) =>
          <p key={s.href} style={{ fontSize: 15, opacity: 0.85, margin: "4px 0" }}>
              <a href={`#/${s.href}`} onClick={(e) => {e.preventDefault();navigate(s.href);}} style={{ color: "var(--color-cream)", textDecoration: "none", borderBottom: "1px solid rgba(244,239,227,0.4)" }}>
                {s.label}
              </a>
            </p>
          )}
        </div>
      </div>

      <div className="container" style={{ marginTop: 56, paddingTop: 28, borderTop: "1px solid rgba(244,239,227,0.18)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, fontSize: 13, letterSpacing: "0.04em", opacity: 0.55 }}>
        <span>© 2026 Long Trail Partners</span>
        <span>Woodstock, Vermont</span>
      </div>
    </footer>);

}

// ─── PageHero (interior pages) ──────────────────────────────────────────────
function PageHero({ eyebrow, heading, lede, imageSrc, imageAlt, imagePosition = "center 40%", imageFilter, videoSrc, heavyOverlay = false, placeholder = false }) {
  return (
    <section
      style={{ position: "relative", overflow: "hidden", textAlign: "center", padding: "clamp(90px, 10vw, 140px) 0", borderBottom: "1px solid rgba(244,239,227,0.18)" }}
      aria-label={`${eyebrow} page hero`}>
      
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        {placeholder ?
        <div style={{ width: "100%", height: "100%", position: "absolute", inset: 0,
          background: "repeating-linear-gradient(45deg, var(--color-cream-soft) 0 14px, var(--color-cream) 14px 28px)" }} /> :
        videoSrc ?
        <video
          src={videoSrc}
          poster={imageSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: imagePosition, position: "absolute", inset: 0, filter: imageFilter }}
        /> :
        <img src={imageSrc} alt={imageAlt}
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: imagePosition, position: "absolute", inset: 0, filter: imageFilter }} />

        }
        <div style={{ position: "absolute", inset: 0,
          background: (videoSrc || heavyOverlay)
            ? "linear-gradient(180deg, rgba(244,239,227,0.78) 0%, rgba(244,239,227,0.65) 50%, rgba(244,239,227,0.85) 100%)"
            : "linear-gradient(180deg, rgba(244,239,227,0.55) 0%, rgba(244,239,227,0.40) 50%, rgba(244,239,227,0.78) 100%)" }} />
        <div style={{ position: "absolute", inset: 0,
          background: (videoSrc || heavyOverlay)
            ? "radial-gradient(ellipse at center, rgba(244,239,227,0.7) 0%, rgba(244,239,227,0.5) 45%, rgba(244,239,227,0.1) 80%)"
            : "radial-gradient(ellipse at center, rgba(244,239,227,0.55) 0%, rgba(244,239,227,0.35) 40%, rgba(244,239,227,0) 75%)" }} />
        {placeholder &&
        <div style={{ position: "absolute", left: 24, bottom: 24, zIndex: 2,
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-eyebrow)",
          background: "var(--color-cream)", padding: "6px 10px", border: "1px solid var(--color-forest)" }}>
            {eyebrow} — hero image
          </div>
        }
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 880, margin: "0 auto", padding: "0 var(--gutter)", color: "var(--color-forest)" }}>
        <p className="eyebrow on-cream" style={{ marginBottom: 22 }}>{eyebrow}</p>
        <h1 style={{
          fontFamily: "var(--font-serif)", fontWeight: 600,
          fontSize: "clamp(44px, 6vw, 80px)", lineHeight: 1.05, letterSpacing: "-0.02em",
          color: "var(--color-forest)", marginBottom: 28, whiteSpace: "pre-line"
        }}>{heading}</h1>
        <p style={{ fontSize: "clamp(18px, 1.6vw, 22px)", lineHeight: 1.55, maxWidth: 720, margin: "0 auto", color: "var(--color-ink-soft)", opacity: "2" }}>
          {lede}
        </p>
      </div>
    </section>);

}

Object.assign(window, { MooseLogo, Nav, Footer, PageHero });