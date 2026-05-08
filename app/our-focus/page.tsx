import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Our Focus',
  description: 'Long Trail Partners buys founder-owned service businesses in Vermont, New Hampshire, Maine, Rhode Island, Upstate New York, and Western Massachusetts with $1–5M EBITDA.',
  openGraph: {
    title: 'Our Focus | Long Trail Partners',
    description: 'Long Trail Partners buys founder-owned service businesses in Vermont, New Hampshire, Maine, Rhode Island, Upstate New York, and Western Massachusetts with $1–5M EBITDA.',
    url: 'https://long-trail-partners.com/our-focus',
  },
  alternates: { canonical: 'https://long-trail-partners.com/our-focus' },
}

const criteria = [
  {
    num: 'i.',
    title: 'Founder-Owned',
    body: 'Built by someone over many years, usually family-owned or closely held. The owner might be thinking about retirement, stepping back from day-to-day, buying out a partner, or just ready for a change. Either way, they want to know the business will be in good hands.',
  },
  {
    num: 'ii.',
    title: 'Northeast Based',
    body: 'Vermont, New Hampshire, Maine, Rhode Island, Upstate New York, and Western Massachusetts. This is where we operate, where we live, and where we plan to be for a long time.',
  },
  {
    num: 'iii.',
    title: 'Service-Led & Durable',
    body: 'Businesses that people and other businesses count on every day, no matter what the economy is doing. Our core focus is essential services, the kind of work that keeps the lights on, the water running, and the buildings safe. We are also open to other great Northeast businesses with the same characteristics: a steady customer base, a durable revenue model, and an owner thinking about what comes next.',
  },
]

const characteristics = [
  'Strong reputation and loyal customers',
  'Long-tenured employees who know the work',
  'Recurring or repeat service revenue',
  'A culture of doing the job right',
  'A profitable business at a scale we can know intimately',
  'Opportunities to grow with the right support',
]

const industries = [
  { num: '01', name: 'Water Testing & Treatment' },
  { num: '02', name: 'Fire Protection & Life Safety' },
  { num: '03', name: 'HVAC, Plumbing & Mechanical' },
  { num: '04', name: 'Generator & Electrical Services' },
  { num: '05', name: 'Waste & Environmental Services' },
  { num: '06', name: 'Property & Facility Management' },
  { num: '07', name: 'Landscaping, Snow & Grounds Care' },
  { num: '08', name: 'Government & Municipal Contracting' },
]

const romans = ['i.', 'ii.', 'iii.', 'iv.', 'v.', 'vi.']

export default function OurFocusPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Focus"
        heading="What we are looking for."
        lede="We work with founders of great businesses in the Northeast who are thinking about what comes next, whether that means a full sale, a partial exit, or a partner for the next chapter."
        imageSrc="/images/our-focus-hero.jpg"
        imageAlt="Northeast autumn foliage with lake reflection"
        imagePosition="center 60%"
        imageFilter="saturate(1.25) contrast(1.08)"
      />

      {/* Criteria */}
      <section className="section section--cream-pale">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 70 }}>
            <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>The Mandate</p>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(34px, 4.2vw, 48px)', color: 'var(--color-forest)' }}>What we look for.</h2>
          </div>
          <div
            className="ltp-criteria-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderTop: '1px solid var(--color-forest)', borderBottom: '1px solid var(--color-forest)' }}
          >
            {criteria.map((c, i) => (
              <div
                key={c.num}
                style={{ padding: '56px 40px', borderRight: i < criteria.length - 1 ? '1px solid rgba(31,51,41,0.18)' : 'none' }}
                className="ltp-crit-cell"
              >
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-ink-eyebrow)', marginBottom: 16 }}>{c.num}</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 24, letterSpacing: '-0.01em', color: 'var(--color-forest)', marginBottom: 16 }}>{c.title}</h3>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--color-ink-body)', margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Characteristics */}
      <section className="section section--cream" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/images/characteristics-hero.jpg"
            alt="Northeast landscape background"
            fill
            aria-hidden
            style={{ objectFit: 'cover', objectPosition: 'center 40%', filter: 'saturate(1.15) contrast(1.05)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(244,239,227,0.93) 0%, rgba(244,239,227,0.86) 50%, rgba(244,239,227,0.94) 100%)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: 880 }}>
          <p className="eyebrow on-cream" style={{ marginBottom: 18, textAlign: 'center' }}>Beyond the Numbers</p>
          <h2 style={{ fontWeight: 600, fontSize: 'clamp(34px, 4.2vw, 48px)', color: 'var(--color-forest)', textAlign: 'center', maxWidth: 720, margin: '0 auto 50px' }}>
            Characteristics we value.
          </h2>
          <ul
            className="ltp-char-list"
            style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: '1px solid var(--color-forest)' }}
          >
            {characteristics.map((c, i) => (
              <li
                key={i}
                className="ltp-char-li"
                style={{
                  padding: '24px 0', display: 'flex', gap: 16, alignItems: 'baseline',
                  fontSize: 17, lineHeight: 1.5, color: 'var(--color-forest)',
                  borderBottom: '1px solid rgba(31,51,41,0.18)',
                  ...(i % 2 === 0
                    ? { paddingRight: 40, borderRight: '1px solid rgba(31,51,41,0.18)' }
                    : { paddingLeft: 40 }),
                }}
              >
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--color-ink-eyebrow)', letterSpacing: '0.04em', minWidth: 26 }}>{romans[i]}</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries */}
      <section className="section section--cream">
        <div className="container">
          <div className="ltp-ind-head" style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 60 }}>
            <div>
              <p className="eyebrow on-cream" style={{ marginBottom: 14 }}>Where We&apos;ve Been Active</p>
              <h2 style={{ fontWeight: 600, fontSize: 'clamp(34px, 4.2vw, 52px)', color: 'var(--color-forest)' }}>Industries we&apos;ve explored.</h2>
            </div>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: 'var(--color-ink-body)', maxWidth: 520 }}>
              We do not have a rigid checklist for industry. What matters is the business itself: the quality, the team, the customers. That said, here are the areas where we have spent the most time. If yours is not on this list, we would still like to hear from you.
            </p>
          </div>
          <div
            className="ltp-ind-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', borderTop: '1px solid var(--color-forest)', borderLeft: '1px solid var(--color-forest)' }}
          >
            {industries.map((ind) => (
              <div
                key={ind.num}
                style={{
                  position: 'relative', display: 'flex', flexDirection: 'column', gap: 24,
                  padding: '32px 28px 36px', minHeight: 180,
                  borderRight: '1px solid var(--color-forest)', borderBottom: '1px solid var(--color-forest)',
                  background: 'var(--color-cream)',
                }}
              >
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', color: 'var(--color-brass)' }}>{ind.num}</span>
                <span style={{ marginTop: 'auto', fontFamily: 'var(--font-serif)', fontSize: 20, lineHeight: 1.25, fontWeight: 500, color: 'var(--color-forest)' }}>
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta text="If you run a great business in the Northeast and you are thinking about a transition, we would like to hear from you, even if your industry is not on this list." />
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
