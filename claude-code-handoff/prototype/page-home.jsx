/* global React, COPY */

// ─── HOME ────────────────────────────────────────────────────────────────────
function HomePage({ navigate, copy, sections }) {
  return (
    <div data-screen-label="Home">
      {sections.hero && <HomeHero navigate={navigate} copy={copy} />}
      {sections.standFor && <HomeStandFor copy={copy} />}
      {sections.different && <HomeDifferent navigate={navigate} copy={copy} />}
      {sections.expect && <HomeExpect />}
      {sections.locations && <HomeLocations />}
      {sections.experience && <HomeExperience />}
      {sections.team && <HomeTeam navigate={navigate} />}
      {sections.cta && <HomeCta navigate={navigate} />}
    </div>);

}

function HomeHero({ navigate, copy }) {
  return (
    <section
      style={{ position: "relative", minHeight: "calc(100vh - 90px)", display: "flex", alignItems: "flex-end", overflow: "hidden" }}
      aria-label="Hero">
      
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <video
          src="videos/hero.mp4"
          poster="images/hero.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "saturate(1.1) contrast(1.06)", position: "absolute", inset: 0 }} />
        
        {/* Layered scrim — strongest at bottom-left where the copy lives, softer elsewhere */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(31,51,41,0.18) 0%, rgba(31,51,41,0) 28%, rgba(31,51,41,0) 50%, rgba(31,51,41,0.55) 88%, rgba(31,51,41,0.78) 100%)" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0,
          background: "linear-gradient(75deg, rgba(31,51,41,0.55) 0%, rgba(31,51,41,0.18) 40%, rgba(31,51,41,0) 70%)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 760, padding: "0 var(--gutter)", color: "var(--color-cream)", marginLeft: "max(24px, calc((100vw - 1240px) / 2))", marginRight: "var(--gutter)", paddingBottom: "max(64px, 6vw)", paddingTop: "max(64px, 6vw)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
          <span aria-hidden="true" style={{ display: "block", width: 48, height: 1, background: "var(--color-cream)", opacity: 0.7 }} />
          <p style={{ margin: 0, fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,239,227,0.85)" }}>LONG TRAIL PARTNERS  ·  EST. 2022

          </p>
        </div>
        <h1 className="text-pretty"
        style={{ fontFamily: "var(--font-serif)", fontWeight: 600, marginTop: 0, marginBottom: 28,
          fontSize: "clamp(48px, 6.6vw, 92px)", lineHeight: 1.02, letterSpacing: "-0.02em", color: "var(--color-cream)", textShadow: "0 2px 20px rgba(0,0,0,0.25)" }}>
          
          {copy.heroHeadingPart1 || "A Better Path Forward"}{" "}
          <em style={{ fontStyle: "italic", fontWeight: 400, color: "rgba(244,239,227,0.78)" }}>
            {copy.heroHeadingPart2 || "for Your Business."}
          </em>
        </h1>
        <p style={{ marginBottom: 40, maxWidth: 560, fontSize: 21, lineHeight: 1.55, color: "rgba(244,239,227,0.92)", textShadow: "0 1px 12px rgba(0,0,0,0.3)" }}>
          {copy.heroLede}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
          <a href="#/contact" onClick={(e) => {e.preventDefault();navigate("contact");}}
          className="btn btn--primary-light">{copy.heroCtaPrimary || "Start a Conversation"}</a>
        </div>
      </div>

    </section>);

}

function HomeStandFor({ copy }) {
  return (
    <section className="section section--cream" style={{ textAlign: "center" }} aria-label="What We Stand For">
      <div className="container" style={{ maxWidth: 880 }}>
        <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>What We Stand For</p>
        <h2 className="text-balance"
        style={{ fontWeight: 600, fontSize: "clamp(36px, 4.4vw, 52px)", letterSpacing: "-0.01em", color: "var(--color-forest)", marginBottom: 56 }}>
          
          {copy.standForHeading || "The businesses that keep communities running deserve owners who plan to stick around."}
        </h2>
        <p style={{ fontSize: 21, lineHeight: 1.6, maxWidth: 720, margin: "0 auto", color: "var(--color-ink-body)" }}>
          Not for three years until a fund needs to sell, but for good. The people who work for you are the business, and any transition that doesn't take care of them isn't one we're interested in.
        </p>
      </div>
    </section>);

}

function HomeDifferent({ navigate }) {
  const rows = [
  { label: "Time Horizon", us: "We bought our first businesses with the intention of keeping them, and nothing about that has changed. There's no fund clock and no predetermined exit." },
  { label: "Who's Making Decisions", us: "Decisions are made by Justin and Stephen directly, and you'll have our cell numbers from the first conversation forward." },
  { label: "Your Employees", us: "Your team is the reason the business works. We keep them, invest in them, and build the company around them." },
  { label: "Focus", us: "Your company gets our full attention, because this is the only kind of work we do." },
  { label: "Deal Structure", us: "We'll work with you on terms that fit your situation, whether that means a full exit, a partial one, or keeping a stake. The structure is your call." },
  { label: "The Transition", us: "We'll structure the transition around your timeline, whether you want to stay involved for a period or hand things off cleanly and move on." }];

  return (
    <section className="section section--forest" aria-label="How We're Different">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, alignItems: "end", marginBottom: 80 }} className="ltp-different-head">
          <h2 className="text-pretty" style={{ fontWeight: 600, color: "var(--color-cream)", fontSize: "clamp(40px, 4.8vw, 64px)", letterSpacing: "-0.015em" }}>
            How We're Different.
          </h2>
          <p style={{ color: "rgba(244,239,227,0.8)", fontSize: 20, lineHeight: 1.55 }}>
            Most buyers are answering to their investors.<br />
            <strong style={{ color: "var(--color-cream)", fontWeight: 600 }}>We're answering to you.</strong>
          </p>
        </div>

        <div style={{ borderTop: "1px solid var(--color-cream)" }}>
          {rows.map((row, i) =>
          <div key={row.label}
          style={{
            display: "grid", gridTemplateColumns: "240px 1fr", gap: 56, padding: "32px 0", alignItems: "baseline",
            borderBottom: i === rows.length - 1 ? "1px solid var(--color-cream)" : "1px solid rgba(244,239,227,0.18)"
          }}
          className="ltp-diff-row">
            
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 19, fontWeight: 600, color: "var(--color-cream)", letterSpacing: "-0.005em", lineHeight: 1.35 }}>
                {row.label}
              </div>
              <p style={{ color: "var(--color-cream)", fontWeight: 400, margin: 0, fontSize: 17, lineHeight: 1.55, maxWidth: 720 }}>
                {row.us}
              </p>
            </div>
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: 64 }}>
          <a href="#/for-owners" onClick={(e) => {e.preventDefault();navigate("for-owners");}}
          className="btn btn--primary-light">Work With Us</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ltp-different-head { grid-template-columns: 1fr !important; gap: 24px !important; }
          .ltp-diff-row { grid-template-columns: 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </section>);

}

function HomeExpect() {
  const phases = [
  { num: "01", label: "", title: "Conversation", body: "It starts with a phone call. We'll ask about your business, you'll ask about us, and we'll figure out together whether there's a reason to keep talking. Everything is confidential, and there's no commitment and no timeline other than yours." },
  { num: "02", label: "", title: "Diligence & Offer", body: "If we both want to go further, we sign an NDA and take a closer look at operations, the team, the customers, and the financials. Then we put together an offer and walk you through, in plain English, what a deal would actually look like for you." },
  { num: "03", label: "", title: "Close & Build Together", body: "We finalize the agreement, close, and work alongside you to make sure the transition goes well for your team, your customers, and you. From there, on a timeline that works for you, you decide how involved you want to stay." }];

  return (
    <section className="section section--cream" aria-label="What to Expect">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>What to Expect</p>
          <h2 style={{ fontWeight: 600, fontSize: "clamp(40px, 4.8vw, 60px)", letterSpacing: "-0.015em", color: "var(--color-forest)", marginBottom: 32 }}>
            If you haven't sold a business before, the process can feel like a black box.
          </h2>
          <p style={{ fontSize: 19, color: "var(--color-ink-body)", maxWidth: 620, margin: "0 auto" }}>
            Here's how it works with us.
          </p>
        </div>

        <div className="ltp-phases-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--color-forest)", borderBottom: "1px solid var(--color-forest)" }}>
          
          {phases.map((phase, i) =>
          <div key={phase.num}
          style={{ position: "relative", padding: "56px 36px",
            borderRight: i < phases.length - 1 ? "1px solid rgba(31,51,41,0.18)" : "none" }}
          className="ltp-phase-cell">
            
              <span aria-hidden="true"
            style={{ position: "absolute", top: 28, right: 36, fontFamily: "var(--font-serif)", fontWeight: 600, opacity: 0.1, lineHeight: 1, fontSize: 96, color: "var(--color-forest)", userSelect: "none" }}>
              {phase.num}</span>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-eyebrow)", marginBottom: 16, minHeight: phase.label ? "auto" : 0, display: phase.label ? "block" : "none" }}>
                {phase.label}
              </p>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 26, letterSpacing: "-0.01em", color: "var(--color-forest)", marginBottom: 16 }}>
                {phase.title}
              </h3>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--color-ink-body)", margin: 0 }}>
                {phase.body}
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ltp-phases-grid { grid-template-columns: 1fr !important; }
          .ltp-phase-cell { border-right: none !important; border-bottom: 1px solid rgba(31,51,41,0.18); }
          .ltp-phase-cell:last-child { border-bottom: none; }
        }
      `}</style>
    </section>);

}

function HomeLocations() {
  const businesses = [
  { region: "Woodstock, Vermont", title: "On The River Inn.", body: "A boutique inn in one of New England's best-known small towns. We acquired it, renovated it, and run it.", caption: "Woodstock, Vermont · Acquired September 2024", display: "On The River", image: "images/on-the-river-inn.jpg" },
  { region: "Mt. Snow, Vermont", title: "Hideaway Inn.", body: "A ski-country property we bought, repositioned, and ran ourselves from day one.", caption: "Mt. Snow, Vermont · Acquired July 2022", display: "Hideaway Inn", image: "images/hideaway-inn.webp" }];

  return (
    <section className="section section--forest" aria-label="Our Businesses">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <p className="eyebrow" style={{ marginBottom: 14 }}>Our Businesses</p>
          <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", letterSpacing: "-0.015em" }}>
            Two businesses we own and operate today.
          </h2>
        </div>
        <div className="ltp-biz-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
          {businesses.map((b) =>
          <article key={b.title} style={{ background: "var(--color-forest-deep)" }}>
              <div style={{ aspectRatio: "4/3", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "var(--color-forest-deep)" }}>
                {b.image ?
              <img
                src={b.image}
                alt={`${b.title} — ${b.region}`}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} /> :


              <span aria-hidden="true"
              style={{ position: "relative", zIndex: 1, fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "clamp(48px, 8vw, 88px)", color: "rgba(244,239,227,0.07)", letterSpacing: "0.04em", userSelect: "none" }}>
                {b.display}</span>
              }
                <span style={{ position: "absolute", left: 18, bottom: 18, zIndex: 2, fontSize: 10, fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", padding: "6px 12px", borderRadius: 2, color: "rgba(244,239,227,0.92)", background: "rgba(31,51,41,0.55)", backdropFilter: "blur(4px)", border: "1px solid rgba(244,239,227,0.28)", fontFamily: "var(--font-sans)" }}>
                  {b.caption}
                </span>
              </div>
              <div style={{ padding: "36px 40px 44px" }}>
                <p className="eyebrow" style={{ marginBottom: 14 }}>{b.region}</p>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 26, letterSpacing: "-0.01em", marginBottom: 14 }}>{b.title}</h3>
                <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--color-cream-soft)", margin: 0 }}>{b.body}</p>
              </div>
            </article>
          )}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .ltp-biz-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </section>);

}

function HomeExperience() {
  return (
    <section className="section section--forest-deep" style={{ position: "relative", overflow: "hidden" }} aria-label="Operator quote">
      <div aria-hidden="true" style={{ position: "absolute", inset: 0,
        background: "linear-gradient(180deg, rgba(244,239,227,0.04) 0%, transparent 30%, transparent 70%, rgba(244,239,227,0.04) 100%)" }} />
      <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 1040 }}>
        <div className="ltp-quote-grid" style={{ maxWidth: 880, margin: "0 auto" }}>
          <div>
            <div aria-hidden="true" style={{ lineHeight: 1, marginBottom: -8, opacity: 0.4, fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 80, color: "var(--color-cream)" }}>“</div>
            <p style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(22px, 2.3vw, 28px)", lineHeight: 1.45, letterSpacing: "-0.005em", color: "var(--color-cream)", margin: 0, fontStyle: "italic" }}>
              When a buyer wants you to stay and run the business, that's a real vote of confidence. Day to day, the job looks the same. Same building, same guests, much of the same staff, similar duties. The decision-making and expectations feel different because you're in a new system, but if you go in open to that, it becomes a chance to grow.
            </p>
            <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ display: "block", width: 36, height: 1, background: "rgba(244,239,227,0.5)" }} />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", color: "rgba(244,239,227,0.85)" }}>
                Josh Hardy, General Manager, On The River Inn · Woodstock, Vermont
              </span>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .ltp-quote-grid { padding: 0 8px; } }`}</style>
    </section>);

}

function HomeTeam({ navigate }) {
  const members = [
  { key: "justin", name: "Justin Bredahl", role: "Co-Founder", img: "images/justin.jpg", bio: "Justin grew up in Southern California and came east for college, where he stayed. His family now spends much of the year at their place near Mt. Snow, Vermont. His whole career has been in operations: managing teams, running businesses, and doing the kind of work where you're the one people call when something breaks. Most recently he ran operations across a national platform, with more than forty general managers reporting up to him. Justin and Stephen have been close friends since they met at Cornell's hotel school in 2013." },
  { key: "stephen", name: "Stephen Goodwin", role: "Co-Founder", img: "images/stephen.jpg", bio: "Stephen grew up outside Boston and has known the Northeast his whole life. He's spent his career working alongside business owners and management teams, not from a boardroom but in the weeds of how things actually work. He has overseen operations across [X properties / X locations] and managed [$X million] of capital projects, and learned what he knows by staying close to the businesses themselves. Stephen and Justin have known each other since 2013. The partnership behind Long Trail Partners predates the firm by more than a decade." }];

  return (
    <section className="section section--cream" aria-label="Our Team">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 80px" }}>
          <p className="eyebrow on-cream" style={{ marginBottom: 14 }}>Our Team</p>
          <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", letterSpacing: "-0.015em", color: "var(--color-forest)", marginBottom: 48 }}>
            Operators, not outsiders.
          </h2>
          <p className="text-balance" style={{ fontSize: 19, lineHeight: 1.6, color: "var(--color-ink-body)", margin: "0 0 16px" }}>
            Our first businesses were in Vermont, and we've been operating across the Northeast ever since. Our families spend time up here, and we know the communities and the people who keep them running.
          </p>
          <p className="text-balance" style={{ fontSize: 19, lineHeight: 1.6, color: "var(--color-ink-body)", margin: 0 }}>
            We started Long Trail Partners because the businesses in this part of the country deserve a better option when it's time for a founder to move on.
          </p>
        </div>


        <div className="ltp-team-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          {members.map((m) =>
          <div key={m.key}>
              <div style={{ width: "100%", maxWidth: 240, marginBottom: 28, overflow: "hidden", aspectRatio: "4/5", background: "var(--color-cream-soft)", position: "relative" }}>
                <img src={m.img} alt={m.name + ", " + m.role} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 18%", display: "block", filter: "saturate(0.95) contrast(1.02)" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 26, letterSpacing: "-0.01em", color: "var(--color-forest)" }}>{m.name}</h3>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-ink-eyebrow)" }}>{m.role}</span>
              <div style={{ margin: "14px 0", width: 50, height: 1, background: "var(--color-forest)" }} />
              <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--color-ink-body)", margin: 0 }}>{m.bio}</p>
            </div>
          )}
        </div>

        <div style={{ textAlign: "center", marginTop: 72 }}>
          <a href="#/who-we-are" onClick={(e) => {e.preventDefault();navigate("who-we-are");}} className="btn btn--secondary-dark">Read more about us</a>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .ltp-team-grid { grid-template-columns: 1fr !important; gap: 56px !important; } }`}</style>
    </section>);

}

function HomeCta({ navigate }) {
  return (
    <section className="section section--cream-pale" aria-label="Start a Conversation">
      <div className="container" style={{ maxWidth: 880, textAlign: "center" }}>
        <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>Start a Conversation</p>
        <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", letterSpacing: "-0.015em", color: "var(--color-forest)", marginBottom: 32 }}>
          Start a conversation.
        </h2>
        <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--color-ink-body)", maxWidth: 640, margin: "0 auto 40px" }}>
          Use the form below, or reach out directly. A real person reads every message and we usually reply within a day.
        </p>
        <a href="#/contact" onClick={(e) => {e.preventDefault();navigate("contact");}} className="btn btn--primary-dark">Start a Conversation</a>
      </div>
    </section>);

}

Object.assign(window, { HomePage });