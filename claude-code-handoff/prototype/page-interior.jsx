/* global React, PageHero */

// ─── WHO WE ARE ──────────────────────────────────────────────────────────────
function WhoWeArePage({ navigate }) {
  const founders = [
  {
    key: "justin", name: "Justin Bredahl", role: "Co-Founder", img: "images/justin.jpg",
    paragraphs: [
    "Justin grew up in Southern California and came east for college, where he stayed. His family now spends much of the year at their place near Mt. Snow, Vermont.",
    "His career has always been operational. He's worked through every part of the businesses he's been in, from staffing and vendor management to renovations and guest experience. He went on to run operations for a national platform where he was responsible for more than forty general managers and their teams. The common thread is that he's the person in the building, not the person reading the report about the building."]

  },
  {
    key: "stephen", name: "Stephen Goodwin", role: "Co-Founder", img: "images/stephen.jpg",
    paragraphs: [
    "Stephen is from just outside Boston. The Northeast isn't something he had to discover; he's been here his whole life.",
    "He's spent his career working with businesses at close range, not just reviewing numbers, but sitting with owners and managers, understanding how things actually operate, and figuring out what would make them better. He has overseen operations across [X properties / X locations], managed [$X million] of complex development projects, and done enough of the hands-on work to know what questions to ask and which answers actually matter."]

  }];


  return (
    <div data-screen-label="Who We Are">
      <PageHero
        eyebrow="Who We Are"
        heading="Built By Operators"
        lede="We've spent our careers inside businesses, not looking at them from the outside. That changes the way you think about almost everything."
        videoSrc="videos/who-we-are-hero.mp4"
        imageSrc="images/who-we-are-hero.jpg"
        imageAlt="Southport, Vermont landscape"
        imagePosition="center 50%"
        imageFilter="saturate(1.08) contrast(1.06)" />
      

      {/* Story */}
      <section className="section section--cream" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>Our Story</p>
          <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", color: "var(--color-forest)", marginBottom: 50, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            Our story.
          </h2>
          <div style={{ textAlign: "left", maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--color-ink-body)", marginBottom: 20 }}>
              Neither of us came to this from finance. We came to it from inside businesses, the kind of work where you're managing people, handling problems as they come up, and learning what you're doing by actually doing it. Between the two of us, we've managed hundreds of employees and overseen tens of millions of dollars of capital projects.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--color-ink-body)", margin: 0 }}>
              We also have real ties to this part of the country. Justin's family spends much of the year in Vermont. Stephen grew up outside Boston. The Northeast isn't a market we picked off a list, it's where we live, and the businesses up here are why we started this firm.
            </p>
          </div>
        </div>
      </section>

      {/* Together */}
      <section className="section section--cream-pale">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>Together</p>
            <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", color: "var(--color-forest)" }}>Partners, long before this.</h2>
          </div>
          <div className="ltp-together-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 70, alignItems: "center", maxWidth: 1100, margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                { img: "images/cornell-graduation.jpg", caption: "Cornell, 2017. College graduation, just before our first jobs out of school.", aspect: "4/5", objectPosition: "center" },
                { img: "images/officiating-wedding.jpg", caption: "Stephen's wedding, 2025. Justin officiating.", aspect: "4/5", objectPosition: "center 25%" },
                { img: "images/cape-weekend.jpg", caption: "Cape Cod, 2020. Thirteen years of friendship before there was a firm.", aspect: "4/5", objectPosition: "center" },
              ].map((p, i) => (
                <figure key={i} style={{ margin: 0, gridColumn: i === 2 ? "1 / span 2" : "auto" }}>
                  <div style={{ aspectRatio: i === 2 ? "2/1.25" : p.aspect, background: "var(--color-cream-soft)", overflow: "hidden" }}>
                    <img src={p.img} alt={p.caption} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: p.objectPosition, display: "block" }} />
                  </div>
                  <figcaption style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5, color: "var(--color-ink-body)", fontFamily: "var(--font-sans)" }}>{p.caption}</figcaption>
                </figure>
              ))}
            </div>
            <div style={{ fontSize: 18, lineHeight: 1.7, color: "var(--color-ink-body)" }}>
              <p style={{ marginTop: 0 }}>We met at Cornell's hotel school in 2013, both of us already more interested in running businesses than studying them. Our first jobs were at the same company. The careers diverged after that. The friendship did not.</p>
              <p>Justin officiated Stephen's wedding last year. We spend summers on Cape Cod and winters in Vermont. After thirteen years, the friendship has been the constant.</p>
              <p>The firm itself started the way most things between us do. Justin sent Stephen a business he thought was worth a look. Stephen dove in without hesitation. That conversation turned into the next, and the next, and eventually into Long Trail Partners.</p>
              <p style={{ marginBottom: 0 }}>When you sell a business to a partnership that has held together for thirteen years, you can be reasonably sure the partnership will still be holding together when the work is finished. Most buyers cannot say that. We can.</p>
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .ltp-together-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      {/* Founders */}
      <section className="section section--cream-pale">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>Meet the Team</p>
            <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", color: "var(--color-forest)" }}>The founders.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 100 }}>
            {founders.map((f, idx) =>
            <div key={f.key} className="ltp-bio-row"
            style={{ display: "grid", gridTemplateColumns: idx % 2 === 0 ? "0.5fr 1.7fr" : "1.7fr 0.5fr", gap: 64, alignItems: "start" }}>
              
                <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5", background: "var(--color-cream-soft)", order: idx % 2 !== 0 ? 2 : 1, maxWidth: 230 }}>
                  <img src={f.img} alt={f.name + ", " + f.role} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 18%", display: "block", filter: "saturate(0.95) contrast(1.02)" }} />
                </div>
                <div style={{ order: idx % 2 !== 0 ? 1 : 2 }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 32, letterSpacing: "-0.015em", color: "var(--color-forest)", marginBottom: 4 }}>{f.name}</h3>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-ink-eyebrow)" }}>{f.role}</span>
                  <div style={{ margin: "16px 0", width: 60, height: 1, background: "var(--color-forest)" }} />
                  {f.paragraphs.map((p, i) =>
                <p key={i} style={{ fontSize: 18, lineHeight: 1.65, color: "var(--color-ink-body)", marginBottom: 18 }}>{p}</p>
                )}
                </div>
              </div>
            )}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .ltp-bio-row { grid-template-columns: 1fr !important; gap: 24px !important; } .ltp-bio-row > div { order: initial !important; } }`}</style>
      </section>

      {/* Track record */}
      <section className="section section--cream" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", color: "var(--color-forest)", marginBottom: 50, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            What we've done.
          </h2>
          <div style={{ textAlign: "left", maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--color-ink-body)", marginBottom: 20 }}>
              We've been at this in the Northeast for years. We acquired the Hideaway Inn at Mt. Snow and On The River Inn in Woodstock, Vermont. We funded the renovations, managed them ourselves, and ran the operations day to day.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--color-ink-body)", marginBottom: 20 }}>
              The results were strong on every measure that mattered to us: the inns are meaningfully more profitable than when we bought them, the team that was running the Mt. Snow property the day before we took over is the team running it today, the leadership at On The River has stayed with us as well, guests notice the difference, and our investors have done well. That is the version of operating we are trying to replicate, business by business.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--color-forest)", fontWeight: 500, margin: "36px 0 0" }}>
              We are now bringing the same approach to other founder-led businesses across the region.
            </p>
            <figure style={{ margin: "56px 0 0", paddingLeft: 28, borderLeft: "2px solid var(--color-forest)" }}>
              <blockquote style={{ margin: 0, fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(22px, 2.2vw, 26px)", lineHeight: 1.45, letterSpacing: "-0.005em", color: "var(--color-forest)", fontStyle: "italic" }}>
                “They look at the business with fresh, objective eyes. They spot areas of opportunity without emotional attachment, and when they see something worth fixing, they have a clear vision and plan.”
              </blockquote>
              <figcaption style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 14 }}>
                <span aria-hidden="true" style={{ display: "block", width: 28, height: 1, background: "var(--color-forest)", opacity: 0.5 }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", color: "var(--color-ink-eyebrow)", textTransform: "none" }}>
                  Josh Hardy, General Manager, On The River Inn · Woodstock, Vermont
                </span>
              </figcaption>
            </figure>
          </div>
          <div style={{ marginTop: 60 }}>
            <a href="#/for-owners" onClick={(e) => {e.preventDefault();navigate("for-owners");}} className="btn btn--primary-dark">For Owners</a>
          </div>
        </div>
      </section>

      {/* In the field — gallery */}
      <section className="section section--cream-pale">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>Gallery</p>
            <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", color: "var(--color-forest)" }}>In the field.</h2>
          </div>
          <div className="ltp-field-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 1200, margin: "0 auto" }}>
            {[
              { img: "images/closing-with-lawyer.jpg", aspect: "4/3", caption: "Burlington, Vermont. 2022. Closing day on our first business, with our lawyer Dave Sterrett.", note: "Signing the papers for our first business." },
              { img: "images/mountaineer-bonfire.jpg", aspect: "4/3", caption: "Mt. Snow, Vermont. 2023. Bonfire at the Hideaway.", note: "Owning the inn means being at the inn." },
              { img: "images/cape-cod-dock.jpg", aspect: "4/3", caption: "Cape Cod, 2024. On the dock.", note: "Off the clock, but never really off. Most of our best ideas show up on weekends like this one." },
            ].map((p, i) => (
              <figure key={i} style={{ margin: 0 }}>
                <div style={{ aspectRatio: p.aspect, background: p.img ? "var(--color-cream-soft)" : "repeating-linear-gradient(45deg, var(--color-cream-soft) 0 12px, var(--color-cream) 12px 24px)", border: p.img ? "none" : "1px solid rgba(31,51,41,0.2)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: p.img ? 0 : 10, marginBottom: 14, overflow: "hidden", position: "relative" }}>
                  {p.img ? (
                    <img src={p.img} alt={p.caption} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
                  ) : (
                    <span style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-eyebrow)", background: "var(--color-cream)", padding: "4px 8px", border: "1px solid var(--color-forest)" }}>
                      {p.caption}
                    </span>
                  )}
                </div>
                {(p.note || p.caption) && (
                  <figcaption style={{ margin: 0 }}>
                    {p.caption && (
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-eyebrow)", marginBottom: 8 }}>
                        {p.caption}
                      </div>
                    )}
                    {p.note && (
                      <div style={{ fontSize: 14, lineHeight: 1.55, color: "var(--color-ink-body)", fontFamily: "var(--font-sans)" }}>
                        {p.note}
                      </div>
                    )}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
        <style>{`@media (max-width: 900px) { .ltp-field-grid { grid-template-columns: repeat(2, 1fr) !important; } } @media (max-width: 560px) { .ltp-field-grid { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </div>);

}

// ─── HOW WE THINK ────────────────────────────────────────────────────────────
function HowWeThinkPage({ navigate }) {
  const beliefs = [
  { num: "01", theme: "Time", heading: "Time horizon changes everything.", body: "How long you plan to own a business decides almost everything about how you run it: which investments are worth making, which people are worth betting on, and which problems are worth fixing versus which ones are worth living with. A five-year horizon produces one kind of company. A twenty-year horizon produces something quite different. We bought our first businesses with the intention of keeping them, and that single decision shapes every decision that follows." },
  { num: "02", theme: "People", heading: "The business is its people.", body: "Owners understand this in a way most buyers don't. A company isn't a set of assets and a brand. It is a group of people who have learned how to work together over many years and who have built something that takes real skill to keep running. Acquire the company without a plan for them, and you haven't actually acquired anything worth keeping. We try to remember that on the day we sign, and every day after." },
  { num: "03", theme: "Restraint", heading: "Most good businesses don't need to be transformed.", body: "There is a version of this work that treats every acquired company as a project to be rebuilt. We don't believe in that version. The businesses we want to own are usually already good, and they got that way because someone built them carefully, over years, through a thousand small decisions that added up. Our job, most of the time, is to keep what works, fix the one or two things that are clearly broken, and stay close enough to the operation to notice when something changes. The temptation to do more than that is almost always the wrong instinct." },
  { num: "04", theme: "Place", heading: "Geography compounds.", body: "Staying in one part of the country isn't a constraint. It is an advantage that gets better every year. We know the towns, the seasons, and the networks. We know which accountants and which lawyers hear first when an owner is starting to think about a transition. We know what it costs to hire in Rutland and what it takes to keep a parking lot clear in February. That kind of knowledge is slow to build, expensive to fake, and most of what makes the next deal easier than the last." },
  { num: "05", theme: "Quiet", heading: "The best moments in a business are quiet.", body: "Much of what gets celebrated in this industry is drama: the turnaround, the transformation, the exit. But most of what actually makes a business worth owning happens nowhere near a headline. It is a long-tenured employee who stays for another decade. A customer who keeps coming back without being asked. A year where nothing much happens because everything is working. Those are the moments we are trying to build toward." }];


  return (
    <div data-screen-label="How We Think">
      <PageHero
        eyebrow="How We Think"
        heading="A few things we've come to believe."
        lede="Time, people, and place. The handful of ideas that shape how we choose what to buy, how we run it, and how long we plan to stick around."
        imageSrc="images/how-we-think-hero.jpg"
        imageAlt="Adirondack chairs by a Vermont river"
        imagePosition="center 60%"
      />
      

      <section style={{ paddingBottom: "var(--section-pad)", background: "var(--color-cream)", color: "var(--color-forest)" }}>
        {beliefs.map((b, i) =>
        <div key={b.num} className="ltp-belief-row"
        style={{ maxWidth: 1100, margin: "0 auto", padding: "70px var(--gutter)",
          display: "grid", gridTemplateColumns: "180px 1fr", gap: 60, alignItems: "baseline",
          borderTop: i === 0 ? "none" : "1px solid rgba(31,51,41,0.16)" }}>
          
            <div>
              <span style={{ display: "block", fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 72, letterSpacing: "-0.03em", color: "var(--color-forest)", lineHeight: 1 }}>{b.num}</span>
              <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--color-ink-eyebrow)", marginTop: 14 }}>{b.theme}</span>
            </div>
            <div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: "clamp(28px, 3.2vw, 38px)", lineHeight: 1.2, letterSpacing: "-0.015em", color: "var(--color-forest)", marginBottom: 32, maxWidth: 640, textWrap: "balance" }}>
                {b.heading}
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--color-ink-body)", maxWidth: 640, margin: 0 }}>{b.body}</p>
            </div>
          </div>
        )}
      </section>

      <ClosingCta navigate={navigate} text="If any of this sounds like the way you think about your own business, we should talk." />
    </div>);

}

// ─── OUR FOCUS ───────────────────────────────────────────────────────────────
function OurFocusPage({ navigate }) {
  const criteria = [
  { num: "i.", title: "Founder-Owned", body: "Built by someone over many years, usually family-owned or closely held. The owner might be thinking about retirement, stepping back from day-to-day, buying out a partner, or just ready for a change. Either way, they want to know the business will be in good hands." },
  { num: "ii.", title: "Northeast Based", body: "Vermont, New Hampshire, Maine, Rhode Island, Upstate New York, and Western Massachusetts. This is where we operate, where we live, and where we plan to be for a long time." },
  { num: "iii.", title: "Service-Led & Durable", body: "Businesses that people and other businesses count on every day, no matter what the economy is doing. Our core focus is essential services, the kind of work that keeps the lights on, the water running, and the buildings safe. We are also open to other great Northeast businesses with the same characteristics: a steady customer base, a durable revenue model, and an owner thinking about what comes next." }];

  const characteristics = [
  "Strong reputation and loyal customers",
  "Long-tenured employees who know the work",
  "Recurring or repeat service revenue",
  "A culture of doing the job right",
  "A profitable business at a scale we can know intimately",
  "Opportunities to grow with the right support"];

  const industries = [
  { num: "01", name: "Water Testing & Treatment" },
  { num: "02", name: "Fire Protection & Life Safety" },
  { num: "03", name: "HVAC, Plumbing & Mechanical" },
  { num: "04", name: "Generator & Electrical Services" },
  { num: "05", name: "Waste & Environmental Services" },
  { num: "06", name: "Property & Facility Management" },
  { num: "07", name: "Landscaping, Snow & Grounds Care" },
  { num: "08", name: "Government & Municipal Contracting" }];

  const romans = ["i.", "ii.", "iii.", "iv.", "v.", "vi."];

  return (
    <div data-screen-label="Our Focus">
      <PageHero
        eyebrow="Our Focus"
        heading="What we are looking for."
        lede="We work with owners of essential service businesses who are thinking about what comes next, whether that means a full sale, a partial exit, or a partner for the next chapter."
        imageSrc="images/our-focus-hero.jpg"
        imageAlt="Northeast autumn foliage with lake reflection"
        imagePosition="center 60%"
        imageFilter="saturate(1.25) contrast(1.08)" />
      

      {/* Criteria */}
      <section className="section section--cream-pale">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 70 }}>
            <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>The Mandate</p>
            <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", color: "var(--color-forest)" }}>What we look for.</h2>
          </div>
          <div className="ltp-criteria-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--color-forest)", borderBottom: "1px solid var(--color-forest)" }}>
            
            {criteria.map((c, i) =>
            <div key={c.num} style={{ padding: "56px 40px", borderRight: i < criteria.length - 1 ? "1px solid rgba(31,51,41,0.18)" : "none" }} className="ltp-crit-cell">
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-ink-eyebrow)", marginBottom: 16 }}>{c.num}</p>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 24, letterSpacing: "-0.01em", color: "var(--color-forest)", marginBottom: 16 }}>{c.title}</h3>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--color-ink-body)", margin: 0 }}>{c.body}</p>
              </div>
            )}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .ltp-criteria-grid { grid-template-columns: 1fr !important; } .ltp-crit-cell { border-right: none !important; border-bottom: 1px solid rgba(31,51,41,0.18); } .ltp-crit-cell:last-child { border-bottom: none; } }`}</style>
      </section>

      {/* Characteristics */}
      <section className="section section--cream" style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img src="images/characteristics-hero.jpg" alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", filter: "saturate(1.15) contrast(1.05)", position: "absolute", inset: 0 }} />
          <div style={{ position: "absolute", inset: 0,
            background: "linear-gradient(180deg, rgba(244,239,227,0.93) 0%, rgba(244,239,227,0.86) 50%, rgba(244,239,227,0.94) 100%)", opacity: "1" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 880 }}>
          <p className="eyebrow on-cream" style={{ marginBottom: 18, textAlign: "center" }}>Beyond the Numbers</p>
          <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", color: "var(--color-forest)", textAlign: "center", maxWidth: 720, margin: "0 auto 50px" }}>
            Characteristics we value.
          </h2>
          <ul className="ltp-char-list"
          style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid var(--color-forest)" }}>
            
            {characteristics.map((c, i) =>
            <li key={i}
            className="ltp-char-li"
            style={{
              padding: "24px 0", display: "flex", gap: 16, alignItems: "baseline",
              fontSize: 17, lineHeight: 1.5, color: "var(--color-forest)",
              borderBottom: "1px solid rgba(31,51,41,0.18)",
              ...(i % 2 === 0 ?
              { paddingRight: 40, borderRight: "1px solid rgba(31,51,41,0.18)" } :
              { paddingLeft: 40 })
            }}>
              
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--color-ink-eyebrow)", letterSpacing: "0.04em", minWidth: 26 }}>{romans[i]}</span>
                <span>{c}</span>
              </li>
            )}
          </ul>
        </div>
        <style>{`@media (max-width: 768px) { .ltp-char-list { grid-template-columns: 1fr !important; } .ltp-char-li { padding: 20px 0 !important; border-right: none !important; } }`}</style>
      </section>

      {/* Industries */}
      <section className="section section--cream">
        <div className="container">
          <div className="ltp-ind-head" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "end", marginBottom: 60 }}>
            <div>
              <p className="eyebrow on-cream" style={{ marginBottom: 14 }}>Where We've Been Active</p>
              <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 52px)", color: "var(--color-forest)" }}>Industries we've explored.</h2>
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: "var(--color-ink-body)", maxWidth: 520 }}>
              We don't have a rigid checklist for industry. What matters is the business itself: the quality, the team, the customers. That said, here are the areas where we've spent the most time. If yours isn't on this list, we'd still like to hear from you.
            </p>
          </div>
          <div className="ltp-ind-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--color-forest)", borderLeft: "1px solid var(--color-forest)" }}>
            {industries.map((ind) => {
              const isPlaceholder = ind.name === null;
              return (
                <div key={ind.num}
                style={{
                  position: "relative", display: "flex", flexDirection: "column", gap: 24,
                  padding: "32px 28px 36px", minHeight: 180,
                  borderRight: "1px solid var(--color-forest)", borderBottom: "1px solid var(--color-forest)",
                  background: isPlaceholder ? "transparent" : "var(--color-cream)",
                  overflow: isPlaceholder ? "hidden" : "visible"
                }}>
                  
                  {isPlaceholder && <div className="industry-placeholder" style={{ position: "absolute", inset: 0 }} aria-hidden="true" />}
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", color: isPlaceholder ? "var(--color-muted)" : "var(--color-brass)" }}>{ind.num}</span>
                  <span style={{ marginTop: "auto", fontFamily: "var(--font-serif)", fontSize: 20, lineHeight: 1.25, fontWeight: 500, color: isPlaceholder ? "var(--color-muted)" : "var(--color-forest)", fontStyle: isPlaceholder ? "italic" : "normal", position: "relative", zIndex: 1 }}>
                    {ind.name ?? "Industry placeholder"}
                  </span>
                </div>);

            })}
          </div>
        </div>
        <style>{`
          @media (max-width: 1024px) { .ltp-ind-grid { grid-template-columns: repeat(2, 1fr) !important; } }
          @media (max-width: 768px) { .ltp-ind-head { grid-template-columns: 1fr !important; gap: 24px !important; } }
        `}</style>
      </section>

      <ClosingCta navigate={navigate} text="If you run a great business in the Northeast and you're thinking about a transition, we'd like to hear from you, even if your industry isn't on this list." />
    </div>);

}

// ─── FOR OWNERS ──────────────────────────────────────────────────────────────
function ForOwnersPage({ navigate }) {
  const phases = [
  { roman: "I", title: "Start a conversation.", body: "We get to know you and the business. No NDA and no pressure. Some of our best conversations started over a coffee a year before anything actually happened." },
  { roman: "II", title: "Take a closer look.", body: "If there's a fit on both sides, we sign an NDA and go deeper. We review financials, we meet your team where it makes sense, and we do real diligence. By the end of this phase, you should have an honest view of where we would take the business, and we should know it well enough to put real terms on the table." },
  { roman: "III", title: "The offer.", body: "We put together an offer that reflects what we have learned. Plain-English terms, structured around what you are trying to accomplish. Full exit, partial exit, or staying invested as a partner: the structure is your call. No surprises and no last-minute changes to the terms." },
  { roman: "IV", title: "Close.", body: "We work through the legal and financing steps with our advisors and yours. We aim to make this part as quiet and orderly as possible. Most owners tell us the close was the easiest stretch of the whole process, which is how we want it." },
  { roman: "V", title: "Build together.", body: "Day one looks a lot like the day before, by design. From there, on a timeline that works for you, you decide how involved you want to stay. Some founders stay for a year, some longer, some not at all. Either way, your name and the team you built are safe with us." }];

  const callouts = [
  { title: "You will work with us directly.", body: "Decisions are made by Justin and Stephen, not by an investment committee in another city. From the first phone call forward, you will have our cell numbers and a real answer when you ask a question." },
  { title: "Our capital does not have an expiration date.", body: "We are not a fund with a clock. We bought our first businesses with the intention of keeping them, and that has not changed. There is no predetermined exit pressuring the deal terms or the operating decisions that come after." },
  { title: "Your team is the asset, and we treat it that way.", body: "The teams that came with the businesses we already own are the teams running them today. That is what we mean when we say we keep what works. It is not a slogan; it is the only way the math actually adds up over a long horizon." },
  { title: "The transition is designed to be quiet.", body: "No reorganizations on day one, no public press cycles, no surprises sprung on the team after the close. The whole process is built to be calm. If yours can't be, we are probably not the right partner." }];

  const faqs = [
  { q: "Will you keep my team?", a: "Yes. The team is the reason the business works, and it is one of the things we are explicitly buying. Restructuring on day one is the move of a buyer who doesn't know what they bought." },
  { q: "Will you keep the name and the brand?", a: "In almost every case, yes. The name is most of the value of a multi-decade business, and we have no reason to interfere with it. If anything ever does change, it would be for a clear reason and worked through with you." },
  { q: "What happens to the real estate?", a: "A lot of the businesses we look at come with owned real estate, and we treat that as part of the conversation, not an afterthought. We're comfortable buying the operating company and the real estate together, and we're comfortable with structures where the real estate is held separately and leased back to the business. Whichever fits your situation is the one we'll work with." },
  { q: "Do I have to leave on day one?", a: "Not unless you want to. Some founders stay for a year or longer to make the transition as smooth as possible. Some prefer a clean handoff. Either approach is fine and we will structure the deal around the one you want." },
  { q: "Are you a private equity firm?", a: "No. Private equity buys businesses and sells them again on a fund timeline, usually within three to five years. We are operators with permanent capital, which means we buy businesses with the intention of keeping them. Different model, different incentives, different outcome for the team that stays." },
  { q: "What size businesses do you buy?", a: "Our sweet spot is founder-owned businesses with one to five million dollars of EBITDA, though we look at situations on either side of that range when the business and the fit are right." },
  { q: "How long does the process take?", a: "From first conversation to close, sixty to a hundred and twenty days is typical once both sides decide to move forward. Earlier conversations often run for months or years before that point, and we are happy to keep talking on whatever timeline works for you." },
  { q: "What does it cost to talk to you?", a: "Nothing. We don't charge advisory fees, we don't ask for diligence deposits, and we don't expect you to commit to anything before you are ready. The first conversation is just a conversation." }];


  return (
    <div data-screen-label="For Owners">
      <PageHero
        eyebrow="For Owners"
        heading={"For the founders who built\nsomething worth keeping."}
        lede="If you have spent years or decades building a company, you know the value isn't just in the contracts and the equipment. It's in the people, the relationships, and the way the work has come to be done. We are operators who buy and run businesses with the intention of keeping them. If you're thinking about what comes next, this page is for you."
        imageSrc="images/for-owners-hero.jpg"
        imageAlt="Ski lift and pine trees overlooking a Vermont valley in winter"
        imagePosition="center 45%"
        imageFilter="saturate(1.1) contrast(1.05)"
        heavyOverlay />
      

      {/* Partnership */}
      <section className="section section--cream" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>Partnership</p>
          <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", color: "var(--color-forest)", marginBottom: 50, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            How we think about partnership.
          </h2>
          <div style={{ textAlign: "left", maxWidth: 760, margin: "0 auto" }}>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--color-ink-body)", marginBottom: 20 }}>
              Every founder we talk to has a different idea of what the next chapter looks like. Some want a full exit and a clean handoff. Some want to stay involved for a year, or five, or longer. Some want to keep a stake in the business they built and watch it grow with us. None of those answers is wrong, and we'll structure the deal around the answer that fits your life, not around a structure that's convenient for a fund.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--color-ink-body)", marginBottom: 20 }}>
              Our preferred path is partnership. That can mean different things in different deals, but the through line is the same: we want you to feel, on the day after we close, that the business is in better hands than it would have been with anyone else who was talking to you. That is the bar we hold ourselves to, and it is the only bar that matters.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: "var(--color-ink-body)", margin: 0 }}>
              No earnouts that quietly cap your payout. No multi-year stay-on requirements with strings attached. No reorganization on day one. The team you built stays. The customers you earned stay. The character of the place you spent decades shaping stays. The few things that need to change, we change with you, in order, with everyone weighing in.
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="section section--forest">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 70 }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>The Process · Five Phases</p>
            <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", marginBottom: 32 }}>What to expect.</h2>
            <p style={{ fontSize: 19, color: "var(--color-cream-soft)", maxWidth: 640, margin: "0 auto" }}>
              If you haven't sold a business before, the process can feel like a black box. Here is how it actually works with us.
            </p>
          </div>
          <div style={{ borderTop: "1px solid rgba(244,239,227,0.4)" }}>
            {phases.map((ph, i) =>
            <div key={ph.roman} className="ltp-phase-row"
            style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 60, padding: "56px 0",
              borderBottom: i === phases.length - 1 ? "1px solid rgba(244,239,227,0.4)" : "1px solid rgba(244,239,227,0.18)" }}>
              
                <div>
                  <span style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(244,239,227,0.65)", paddingTop: 16 }}>Phase</span>
                  <strong style={{ display: "block", lineHeight: 1, marginTop: 8, fontFamily: "var(--font-serif)", fontSize: 56, fontWeight: 600, color: "var(--color-cream)", letterSpacing: "-0.02em" }}>{ph.roman}</strong>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 28, letterSpacing: "-0.015em", color: "var(--color-cream)", marginBottom: 16 }}>{ph.title}</h3>
                  <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--color-cream-soft)", margin: 0 }}>{ph.body}</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .ltp-phase-row { grid-template-columns: 1fr !important; gap: 16px !important; } }`}</style>
      </section>

      {/* Callouts */}
      <section className="section section--cream">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 70 }}>
            <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>Worth Knowing</p>
            <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", color: "var(--color-forest)" }}>A few things worth knowing.</h2>
          </div>
          <div className="ltp-callouts" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--color-forest)", borderBottom: "1px solid var(--color-forest)" }}>
            {callouts.map((c, i) =>
            <div key={c.title} className="ltp-callout-cell" data-index={i}
              style={{ padding: "48px 44px", background: "transparent",
                borderRight: i % 2 === 0 ? "1px solid rgba(31,51,41,0.18)" : "none",
                borderBottom: i < 2 ? "1px solid rgba(31,51,41,0.18)" : "none" }}>
                <span aria-hidden="true" style={{ display: "block", fontFamily: "var(--font-serif)", fontSize: 14, fontWeight: 600, letterSpacing: "0.18em", color: "var(--color-ink-eyebrow)", marginBottom: 24, textTransform: "uppercase" }}>0{i + 1}</span>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 22, letterSpacing: "-0.01em", color: "var(--color-forest)", marginBottom: 16, lineHeight: 1.3 }}>{c.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--color-ink-body)", margin: 0 }}>{c.body}</p>
              </div>
            )}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .ltp-callouts { grid-template-columns: 1fr !important; } .ltp-callout-cell { border-right: none !important; border-bottom: 1px solid rgba(31,51,41,0.18) !important; padding: 36px 0 !important; } .ltp-callout-cell:last-child { border-bottom: none !important; } }`}</style>
      </section>

      {/* FAQ */}
      <section className="section section--cream-pale">
        <div className="container" style={{ maxWidth: 1040 }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>FAQ</p>
            <h2 style={{ fontWeight: 600, fontSize: "clamp(34px, 4.2vw, 48px)", color: "var(--color-forest)" }}>Things owners ask us.</h2>
          </div>
          <div style={{ borderTop: "1px solid var(--color-forest)" }}>
            {faqs.map((faq, i) =>
            <div key={faq.q} className="ltp-faq-row"
            style={{ display: "grid", gridTemplateColumns: "minmax(220px, 1fr) 2.2fr", gap: 64, padding: "36px 0",
              borderBottom: i === faqs.length - 1 ? "1px solid var(--color-forest)" : "1px solid rgba(31,51,41,0.18)" }}>
              
                <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 20, letterSpacing: "-0.01em", color: "var(--color-forest)", margin: 0, textWrap: "balance" }}>{faq.q}</p>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--color-ink-body)", margin: 0, textWrap: "pretty", hyphens: "auto" }}>{faq.a}</p>
              </div>
            )}
          </div>
        </div>
        <style>{`@media (max-width: 768px) { .ltp-faq-row { grid-template-columns: 1fr !important; gap: 12px !important; } }`}</style>
      </section>

      <ClosingCta navigate={navigate} text="If any of this sounds like the kind of partner you are looking for, we would like to hear from you." />
    </div>);

}

// ─── CONTACT ────────────────────────────────────────────────────────────────
function ContactPage() {
  const [status, setStatus] = React.useState("idle");
  const formRef = React.useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    // Mock submit (no real API in prototype)
    setTimeout(() => {
      setStatus("success");
      formRef.current?.reset();
    }, 700);
  }

  const people = [
  { name: "Justin Bredahl", role: "Co-Founder", email: "jb@longtrl.com" },
  { name: "Stephen Goodwin", role: "Co-Founder", email: "sg@longtrl.com" }];


  return (
    <div data-screen-label="Contact">
      <PageHero
        eyebrow="Contact"
        heading="Start a conversation."
        lede="Whether you've built a business, you advise someone who has, or you are just curious about what we're building, we're always happy to have a conversation. A real person reads every message and we usually reply within a day. Use the form below, or reach out directly."
        videoSrc="videos/contact-hero.mp4"
        imageSrc="images/contact-hero.jpg"
        imageAlt="Covered bridge in Woodstock, Vermont"
        imagePosition="center 50%" />
      

      <section className="section section--cream-pale">
        <div className="container" style={{ maxWidth: 880 }}>

          {status === "success" ?
          <div role="alert" style={{ padding: "64px 0", textAlign: "center" }}>
              <div aria-hidden="true" style={{ fontFamily: "var(--font-serif)", fontSize: 48, marginBottom: 16, opacity: 0.4 }}>✓</div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 28, color: "var(--color-forest)", marginBottom: 12 }}>Message sent.</h3>
              <p style={{ fontSize: 18, color: "var(--color-ink-body)", maxWidth: 480, margin: "0 auto" }}>
                A real person reads every message. We'll be in touch within a day.
              </p>
            </div> :

          <form ref={formRef} onSubmit={handleSubmit} noValidate style={{ width: "100%", fontFamily: "var(--font-sans)" }}>
              <div className="ltp-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 22 }}>
                <div>
                  <label htmlFor="firstName" className="label">First Name</label>
                  <input id="firstName" name="firstName" type="text" required autoComplete="given-name" className="input" />
                </div>
                <div>
                  <label htmlFor="lastName" className="label">Last Name</label>
                  <input id="lastName" name="lastName" type="text" required autoComplete="family-name" className="input" />
                </div>
              </div>
              <div className="ltp-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 22 }}>
                <div>
                  <label htmlFor="email" className="label">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className="input" />
                </div>
                <div>
                  <label htmlFor="company" className="label">Company Website</label>
                  <input id="company" name="company" type="text" autoComplete="organization" className="input" />
                </div>
              </div>
              <div style={{ marginBottom: 32 }}>
                <label htmlFor="message" className="label">Tell us a bit about your business</label>
                <textarea id="message" name="message" rows={4} className="input" style={{ resize: "vertical", minHeight: 80 }} />
              </div>
              <button type="submit" disabled={status === "loading"} className="btn btn--primary-dark" style={{ opacity: status === "loading" ? 0.5 : 1 }}>
                {status === "loading" ? "Sending…" : "Send"}
              </button>
            </form>
          }

          <div className="ltp-direct" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginTop: 30, paddingTop: 60, borderTop: "1px solid var(--color-forest)" }}>
            {people.map((p) =>
            <div key={p.email}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 22, letterSpacing: "-0.01em", color: "var(--color-forest)", marginBottom: 4 }}>{p.name}</h3>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-ink-eyebrow)" }}>{p.role}</span>
                <a href={`mailto:${p.email}`} style={{ display: "block", marginTop: 14, fontSize: 18, textDecoration: "none", borderBottom: "1px solid rgba(31,51,41,0.4)", width: "fit-content", color: "var(--color-forest)", fontFamily: "var(--font-sans)" }}>
                  {p.email}
                </a>
              </div>
            )}
          </div>
        </div>
        <style>{`@media (max-width: 600px) { .ltp-form-row { grid-template-columns: 1fr !important; } .ltp-direct { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>
    </div>);

}

// ─── Closing CTA (shared) ───────────────────────────────────────────────────
function ClosingCta({ navigate, text }) {
  return (
    <section className="section section--forest-deep" style={{ position: "relative", overflow: "hidden", padding: "100px 0" }}>
      <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: 880, textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: "clamp(28px, 3.4vw, 40px)", lineHeight: 1.35, letterSpacing: "-0.01em" }}>
          {text}
        </h2>
        <div style={{ marginTop: 48 }}>
          <a href="#/contact" onClick={(e) => {e.preventDefault();navigate("contact");}} className="btn btn--primary-light">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>);

}

Object.assign(window, { WhoWeArePage, HowWeThinkPage, OurFocusPage, ForOwnersPage, ContactPage, ClosingCta });