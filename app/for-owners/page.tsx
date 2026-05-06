import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'For Owners',
  description: 'Selling your business? Long Trail Partners buys founder-owned companies in the Northeast with permanent capital, no fund clock, and a commitment to keeping your team intact.',
  openGraph: {
    title: 'For Owners | Long Trail Partners',
    description: 'Selling your business? Long Trail Partners buys founder-owned companies in the Northeast with permanent capital, no fund clock, and a commitment to keeping your team intact.',
    url: 'https://long-trail-partners.com/for-owners',
  },
  alternates: { canonical: 'https://long-trail-partners.com/for-owners' },
}

const phases = [
  { roman: 'I', title: 'Start a conversation.', body: 'We get to know you and the business. No NDA and no pressure. Some of our best conversations started over a coffee a year before anything actually happened.' },
  { roman: 'II', title: 'Take a closer look.', body: 'If there is a fit on both sides, we sign an NDA and go deeper. We review financials, we meet your team where it makes sense, and we do real diligence. By the end of this phase, you should have an honest view of where we would take the business, and we should know it well enough to put real terms on the table.' },
  { roman: 'III', title: 'The offer.', body: 'We put together an offer that reflects what we have learned. Plain-English terms, structured around what you are trying to accomplish. Full exit, partial exit, or staying invested as a partner: the structure is your call. No surprises and no last-minute changes to the terms.' },
  { roman: 'IV', title: 'Close.', body: 'We work through the legal and financing steps with our advisors and yours. We aim to make this part as quiet and orderly as possible. Most owners tell us the close was the easiest stretch of the whole process, which is how we want it.' },
  { roman: 'V', title: 'Build together.', body: 'Day one looks a lot like the day before, by design. From there, on a timeline that works for you, you decide how involved you want to stay. Some founders stay for a year, some longer, some not at all. Either way, your name and the team you built are safe with us.' },
]

const callouts = [
  { title: 'You will work with us directly.', body: 'Decisions are made by Justin and Stephen, not by an investment committee in another city. From the first phone call forward, you will have our cell numbers and a real answer when you ask a question.' },
  { title: 'Our capital does not have an expiration date.', body: 'We are not a fund with a clock. We bought our first businesses with the intention of keeping them, and that has not changed. There is no predetermined exit pressuring the deal terms or the operating decisions that come after.' },
  { title: 'Your team is the asset, and we treat it that way.', body: 'The teams that came with the businesses we already own are the teams running them today. That is what we mean when we say we keep what works. It is not a slogan. It is the only way the math actually adds up over a long horizon.' },
  { title: 'The transition is designed to be quiet.', body: 'No reorganizations on day one, no public press cycles, no surprises sprung on the team after the close. The whole process is built to be calm. If yours cannot be, we are probably not the right partner.' },
]

const faqs = [
  { q: 'Will you keep my team?', a: 'Yes. The team is the reason the business works, and it is one of the things we are explicitly buying. Restructuring on day one is the move of a buyer who does not know what they bought.' },
  { q: 'Will you keep the name and the brand?', a: 'In almost every case, yes. The name is most of the value of a multi-decade business, and we have no reason to interfere with it. If anything ever does change, it would be for a clear reason and worked through with you.' },
  { q: 'What happens to the real estate?', a: 'A lot of the businesses we look at come with owned real estate, and we treat that as part of the conversation, not an afterthought. We are comfortable buying the operating company and the real estate together, and we are comfortable with structures where the real estate is held separately and leased back to the business. Whichever fits your situation is the one we will work with.' },
  { q: 'Do I have to leave on day one?', a: 'Not unless you want to. Some founders stay for a year or longer to make the transition as smooth as possible. Some prefer a clean handoff. Either approach is fine and we will structure the deal around the one you want.' },
  { q: 'Are you a private equity firm?', a: 'No. Private equity buys businesses and sells them again on a fund timeline, usually within three to five years. We are operators with permanent capital, which means we buy businesses with the intention of keeping them. Different model, different incentives, different outcome for the team that stays.' },
  { q: 'What size businesses do you buy?', a: 'Our sweet spot is founder-owned businesses with one to five million dollars of EBITDA, though we look at situations on either side of that range when the business and the fit are right.' },
  { q: 'How long does the process take?', a: 'From first conversation to close, sixty to a hundred and twenty days is typical once both sides decide to move forward. Earlier conversations often run for months or years before that point, and we are happy to keep talking on whatever timeline works for you.' },
  { q: 'What does it cost to talk to you?', a: 'Nothing. We do not charge advisory fees, we do not ask for diligence deposits, and we do not expect you to commit to anything before you are ready. The first conversation is just a conversation.' },
]

export default function ForOwnersPage() {
  return (
    <div>
      <PageHero
        eyebrow="For Owners"
        heading={`For the founders who built\nsomething worth keeping.`}
        lede="If you have spent years or decades building a company, you know the value is not just in the contracts and the equipment. It is in the people, the relationships, and the way the work has come to be done. We are operators who buy and run businesses with the intention of keeping them. If you are thinking about what comes next, this page is for you."
        imageSrc="/images/for-owners-hero.jpg"
        imageAlt="Ski lift and pine trees overlooking a Vermont valley in winter"
        imagePosition="center 45%"
        imageFilter="saturate(1.1) contrast(1.05)"
        heavyOverlay
      />

      {/* Partnership */}
      <section className="section section--cream" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>Partnership</p>
          <h2 style={{ fontWeight: 600, fontSize: 'clamp(34px, 4.2vw, 48px)', color: 'var(--color-forest)', marginBottom: 50, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
            How we think about partnership.
          </h2>
          <div style={{ textAlign: 'left', maxWidth: 760, margin: '0 auto' }}>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--color-ink-body)', marginBottom: 20 }}>
              Every founder we talk to has a different idea of what the next chapter looks like. Some want a full exit and a clean handoff. Some want to stay involved for a year, or five, or longer. Some want to keep a stake in the business they built and watch it grow with us. None of those answers is wrong, and we will structure the deal around the answer that fits your life, not around a structure that is convenient for a fund.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--color-ink-body)', marginBottom: 20 }}>
              Our preferred path is partnership. That can mean different things in different deals, but the goal is the same: we want you to feel, on the day after we close, that the business is in good hands. That is the bar we hold ourselves to.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--color-ink-body)', margin: 0 }}>
              No earnouts that quietly cap your payout. No multi-year stay-on requirements with strings attached. No reorganization on day one. The team you built stays. The customers you earned stay. The character of the place you spent decades shaping stays. The few things that need to change, we change with you, in order, with everyone weighing in.
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="section section--forest">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <p className="eyebrow" style={{ marginBottom: 18 }}>The Process · Five Phases</p>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(34px, 4.2vw, 48px)', marginBottom: 32 }}>What to expect.</h2>
            <p style={{ fontSize: 19, color: 'var(--color-cream-soft)', maxWidth: 640, margin: '0 auto' }}>
              If you have not sold a business before, the process can feel like a black box. Here is how it actually works with us.
            </p>
          </div>
          <div style={{ borderTop: '1px solid rgba(244,239,227,0.4)' }}>
            {phases.map((ph, i) => (
              <div
                key={ph.roman}
                className="ltp-phase-row"
                style={{
                  display: 'grid', gridTemplateColumns: '180px 1fr', gap: 60, padding: '56px 0',
                  borderBottom: i === phases.length - 1 ? '1px solid rgba(244,239,227,0.4)' : '1px solid rgba(244,239,227,0.18)',
                }}
              >
                <div>
                  <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,239,227,0.65)', paddingTop: 16 }}>Phase</span>
                  <strong style={{ display: 'block', lineHeight: 1, marginTop: 8, fontFamily: 'var(--font-serif)', fontSize: 56, fontWeight: 600, color: 'var(--color-cream)', letterSpacing: '-0.02em' }}>{ph.roman}</strong>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 28, letterSpacing: '-0.015em', color: 'var(--color-cream)', marginBottom: 16 }}>{ph.title}</h3>
                  <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--color-cream-soft)', margin: 0 }}>{ph.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callouts */}
      <section className="section section--cream">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>Worth Knowing</p>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(34px, 4.2vw, 48px)', color: 'var(--color-forest)' }}>A few things worth knowing.</h2>
          </div>
          <div
            className="ltp-callouts"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: '1px solid var(--color-forest)', borderBottom: '1px solid var(--color-forest)' }}
          >
            {callouts.map((c, i) => (
              <div
                key={c.title}
                className="ltp-callout-cell"
                style={{
                  padding: '48px 44px', background: 'transparent',
                  borderRight: i % 2 === 0 ? '1px solid rgba(31,51,41,0.18)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(31,51,41,0.18)' : 'none',
                }}
              >
                <span aria-hidden="true" style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: 14, fontWeight: 600, letterSpacing: '0.18em', color: 'var(--color-ink-eyebrow)', marginBottom: 24, textTransform: 'uppercase' }}>0{i + 1}</span>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--color-forest)', marginBottom: 16, lineHeight: 1.3 }}>{c.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--color-ink-body)', margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--cream-pale">
        <div className="container" style={{ maxWidth: 1040 }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}
          >
            <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>FAQ</p>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(34px, 4.2vw, 48px)', color: 'var(--color-forest)' }}>Things owners ask us.</h2>
          </div>
          <div style={{ borderTop: '1px solid var(--color-forest)' }}>
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="ltp-faq-row"
                style={{
                  display: 'grid', gridTemplateColumns: 'minmax(220px, 1fr) 2.2fr', gap: 64, padding: '36px 0',
                  borderBottom: i === faqs.length - 1 ? '1px solid var(--color-forest)' : '1px solid rgba(31,51,41,0.18)',
                }}
              >
                <p style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 20, letterSpacing: '-0.01em', color: 'var(--color-forest)', margin: 0, textWrap: 'balance' } as React.CSSProperties}>{faq.q}</p>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--color-ink-body)', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta text="If any of this sounds like the kind of partner you are looking for, we would like to hear from you." />
    </div>
  )
}

function ClosingCta({ text }: { text: string }) {
  return (
    <section className="section section--forest-deep" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 880, textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(28px, 3.4vw, 40px)', lineHeight: 1.35, letterSpacing: '-0.01em' }}>
          {text}
        </h2>
        <div style={{ marginTop: 48 }}>
          <Link href="/contact" className="btn btn--primary-light">Start a Conversation</Link>
        </div>
      </div>
    </section>
  )
}
