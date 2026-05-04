import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'How We Think | Long Trail Partners',
}

const beliefs = [
  {
    num: '01',
    theme: 'Time',
    heading: 'Time horizon changes everything.',
    body: 'How long you plan to own a business decides almost everything about how you run it: which investments are worth making, which people are worth betting on, and which problems are worth fixing versus which ones are worth living with. A five-year horizon produces one kind of company. A twenty-year horizon produces something quite different. We bought our first businesses with the intention of keeping them, and that single decision shapes every decision that follows.',
  },
  {
    num: '02',
    theme: 'People',
    heading: 'The business is its people.',
    body: 'Owners understand this in a way most buyers do not. A company is not a set of assets and a brand. It is a group of people who have learned how to work together over many years and who have built something that takes real skill to keep running. Acquire the company without a plan for them, and you have not actually acquired anything worth keeping. We try to remember that on the day we sign, and every day after.',
  },
  {
    num: '03',
    theme: 'Restraint',
    heading: 'Most good businesses do not need to be transformed.',
    body: 'There is a version of this work that treats every acquired company as a project to be rebuilt. We do not believe in that version. The businesses we want to own are usually already good, and they got that way because someone built them carefully, over years, through a thousand small decisions that added up. Our job, most of the time, is to keep what works, fix the one or two things that are clearly broken, and stay close enough to the operation to notice when something changes. The temptation to do more than that is almost always the wrong instinct.',
  },
  {
    num: '04',
    theme: 'Place',
    heading: 'Geography compounds.',
    body: 'Staying in one part of the country is not a constraint. It is an advantage that gets better every year. We know the towns, the seasons, and the networks. We know which accountants and which lawyers hear first when an owner is starting to think about a transition. We know what it costs to hire in Rutland and what it takes to keep a parking lot clear in February. That kind of knowledge is slow to build, expensive to fake, and most of what makes the next deal easier than the last.',
  },
  {
    num: '05',
    theme: 'Quiet',
    heading: 'The best moments in a business are quiet.',
    body: 'Much of what gets celebrated in this industry is drama: the turnaround, the transformation, the exit. But most of what actually makes a business worth owning happens nowhere near a headline. It is a long-tenured employee who stays for another decade. A customer who keeps coming back without being asked. A year where nothing much happens because everything is working. Those are the moments we are trying to build toward.',
  },
]

export default function HowWeThinkPage() {
  return (
    <div>
      <PageHero
        eyebrow="How We Think"
        heading="A few things we've come to believe."
        lede="Time, people, and place. The handful of ideas that shape how we choose what to buy, how we run it, and how long we plan to stick around."
        imageSrc="/images/how-we-think-hero.jpg"
        imageAlt="Adirondack chairs by a Vermont river"
        imagePosition="center 60%"
      />

      <section style={{ paddingBottom: 'var(--section-pad)', background: 'var(--color-cream)', color: 'var(--color-forest)' }}>
        {beliefs.map((b, i) => (
          <div
            key={b.num}
            className="ltp-belief-row"
            style={{
              maxWidth: 1100, margin: '0 auto', padding: '70px var(--gutter)',
              display: 'grid', gridTemplateColumns: '180px 1fr', gap: 60, alignItems: 'baseline',
              borderTop: i === 0 ? 'none' : '1px solid rgba(31,51,41,0.16)',
            }}
          >
            <div>
              <span style={{ display: 'block', fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 72, letterSpacing: '-0.03em', color: 'var(--color-forest)', lineHeight: 1 }}>{b.num}</span>
              <span style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--color-ink-eyebrow)', marginTop: 14 }}>{b.theme}</span>
            </div>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 'clamp(28px, 3.2vw, 38px)', lineHeight: 1.2, letterSpacing: '-0.015em', color: 'var(--color-forest)', marginBottom: 32, maxWidth: 640, textWrap: 'balance' } as React.CSSProperties}>
                {b.heading}
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--color-ink-body)', maxWidth: 640, margin: 0 }}>{b.body}</p>
            </div>
          </div>
        ))}
      </section>

      <ClosingCta text="If any of this sounds like the way you think about your own business, we should talk." />
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
