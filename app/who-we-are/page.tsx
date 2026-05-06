import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Who We Are',
  description: 'Justin Bredahl and Stephen Goodwin are operators who built Long Trail Partners to acquire and run great Northeast businesses. Thirteen years of partnership before there was a firm.',
  openGraph: {
    title: 'Who We Are | Long Trail Partners',
    description: 'Justin Bredahl and Stephen Goodwin are operators who built Long Trail Partners to acquire and run great Northeast businesses. Thirteen years of partnership before there was a firm.',
    url: 'https://long-trail-partners.com/who-we-are',
  },
  alternates: { canonical: 'https://long-trail-partners.com/who-we-are' },
}

export default function WhoWeArePage() {
  const founders = [
    {
      key: 'justin',
      name: 'Justin Bredahl',
      role: 'Co-Founder',
      img: '/images/justin.jpg',
      paragraphs: [
        'Justin grew up in Southern California and came east for college, where he stayed. His family now spends much of the year at their place near Mt. Snow, Vermont.',
        'His career has always been operational. He has worked through every part of the businesses he has been in, from staffing and vendor management to renovations and guest experience. He went on to run operations for a national platform where he was responsible for more than forty general managers and their teams. The common thread is that he is the person in the building, not the person reading the report about the building.',
      ],
    },
    {
      key: 'stephen',
      name: 'Stephen Goodwin',
      role: 'Co-Founder',
      img: '/images/stephen.jpg',
      paragraphs: [
        'Stephen grew up just outside Boston and has spent his whole life in the Northeast.',
        'He has spent his career working with businesses at close range, not just reviewing numbers, but sitting with owners and managers, understanding how things actually operate, and figuring out what would make them better. He has managed 20+ businesses and overseen $250 million+ of capital projects, and done enough of the hands-on work to know what questions to ask and which answers actually matter.',
      ],
    },
  ]

  return (
    <div>
      <PageHero
        eyebrow="Who We Are"
        heading="Built By Operators"
        lede="We have spent our careers inside businesses, not looking at them from the outside. That changes the way you think about almost everything."
        imageSrc="/images/who-we-are-hero.jpg"
        imageAlt="Southport, Vermont landscape"
        videoSrc="/videos/who-we-are-hero.mp4"
        imagePosition="center 50%"
        imageFilter="saturate(1.08) contrast(1.06)"
      />

      {/* Story */}
      <section className="section section--cream" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>Our Story</p>
          <h2 style={{ fontWeight: 600, fontSize: 'clamp(34px, 4.2vw, 48px)', color: 'var(--color-forest)', marginBottom: 50, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
            Our story.
          </h2>
          <div style={{ textAlign: 'left', maxWidth: 760, margin: '0 auto' }}>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--color-ink-body)', marginBottom: 20 }}>
              Neither of us came to this from finance. We came to it from inside businesses, the kind of work where you are managing people, handling problems as they come up, and learning what you are doing by actually doing it. Between the two of us, we have managed hundreds of employees and overseen tens of millions of dollars of capital projects. Together, we have direct experience owning and operating businesses in Northern New England.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--color-ink-body)', margin: 0 }}>
              We also have real ties to this part of the country. Justin&apos;s family spends much of the year in Vermont. Stephen grew up outside Boston. The Northeast is not a market we picked off a list, it is where we live, and the businesses up here are why we started this firm.
            </p>
          </div>
        </div>
      </section>

      {/* Together */}
      <section className="section section--cream-pale">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>Together</p>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(34px, 4.2vw, 48px)', color: 'var(--color-forest)' }}>Partners, long before this.</h2>
          </div>
          <div className="ltp-together-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 70, alignItems: 'center', maxWidth: 1100, margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { img: '/images/cornell-graduation.jpg', caption: 'Ithaca, 2017. College graduation, just before our first jobs out of school.', span: false, objectPosition: 'center' },
                { img: '/images/officiating-wedding.jpg', caption: "Stephen's wedding, 2025. Justin officiating.", span: false, objectPosition: 'center 25%' },
                { img: '/images/cape-weekend.jpg', caption: 'Cape Cod, 2020. Thirteen years of friendship before there was a firm.', span: true, objectPosition: 'center' },
              ].map((p, i) => (
                <figure key={i} style={{ margin: 0, gridColumn: p.span ? '1 / span 2' : 'auto' }}>
                  <div style={{ aspectRatio: p.span ? '2/1.25' : '4/5', background: 'var(--color-cream-soft)', overflow: 'hidden', position: 'relative' }}>
                    <Image
                      src={p.img}
                      alt={p.caption}
                      fill
                      style={{ objectFit: 'cover', objectPosition: p.objectPosition }}
                    />
                  </div>
                  <figcaption style={{ marginTop: 8, fontSize: 13, lineHeight: 1.5, color: 'var(--color-ink-body)', fontFamily: 'var(--font-sans)' }}>{p.caption}</figcaption>
                </figure>
              ))}
            </div>
            <div style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--color-ink-body)' }}>
              <p style={{ marginTop: 0 }}>We met at Cornell&apos;s hotel school in 2013, both of us already more interested in running businesses than studying them. Our first jobs were at the same company. The careers diverged after that. The friendship did not.</p>
              <p>Justin officiated Stephen&apos;s wedding last year. We spend summers on Cape Cod and winters in Vermont. After thirteen years, the friendship has been the constant.</p>
              <p>The firm itself started the way most things between us do. Justin sent Stephen a business he thought was worth a look. Stephen dove in without hesitation. That conversation turned into the next, and the next, and eventually into Long Trail Partners.</p>
              <p style={{ marginBottom: 0 }}>When you sell a business to a partnership that has held together for thirteen years, you can be reasonably sure the partnership will still be holding together when the work is finished. Most buyers cannot say that. We can.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section section--cream-pale">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>Meet the Team</p>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(34px, 4.2vw, 48px)', color: 'var(--color-forest)' }}>The founders.</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 100 }}>
            {founders.map((f, idx) => (
              <div
                key={f.key}
                className="ltp-bio-row"
                style={{ display: 'grid', gridTemplateColumns: idx % 2 === 0 ? '0.5fr 1.7fr' : '1.7fr 0.5fr', gap: 64, alignItems: 'start' }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', background: 'var(--color-cream-soft)', order: idx % 2 !== 0 ? 2 : 1, maxWidth: 230 }}>
                  <Image
                    src={f.img}
                    alt={`${f.name}, ${f.role}`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center 18%', filter: 'saturate(0.95) contrast(1.02)' }}
                  />
                </div>
                <div style={{ order: idx % 2 !== 0 ? 1 : 2 }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 32, letterSpacing: '-0.015em', color: 'var(--color-forest)', marginBottom: 4 }}>{f.name}</h3>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-ink-eyebrow)' }}>{f.role}</span>
                  <div style={{ margin: '16px 0', width: 60, height: 1, background: 'var(--color-forest)' }} />
                  {f.paragraphs.map((p, i) => (
                    <p key={i} style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--color-ink-body)', marginBottom: 18 }}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track record */}
      <section className="section section--cream" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <h2 style={{ fontWeight: 600, fontSize: 'clamp(34px, 4.2vw, 48px)', color: 'var(--color-forest)', marginBottom: 50, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
            What we have done.
          </h2>
          <div style={{ textAlign: 'left', maxWidth: 760, margin: '0 auto' }}>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--color-ink-body)', marginBottom: 20 }}>
              We have been at this in the Northeast for years. We acquired the Hideaway Inn at Mt. Snow and On The River Inn in Woodstock, Vermont. We funded the renovations, managed them ourselves, and ran the operations day to day.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--color-ink-body)', marginBottom: 20 }}>
              The results were strong on every measure that mattered to us: the inns are meaningfully more profitable than when we bought them, the team that was running the Mt. Snow property the day before we took over is the team running it today, the leadership at On The River has stayed with us as well, guests notice the difference, and our investors have done well. That is the version of operating we are trying to replicate, business by business.
            </p>
            <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--color-forest)', fontWeight: 500, margin: '36px 0 0' }}>
              We are now bringing the same approach to other founder-led businesses across the region.
            </p>
            <figure style={{ margin: '56px 0 0', paddingLeft: 28, borderLeft: '2px solid var(--color-forest)' }}>
              <blockquote style={{ margin: 0, fontFamily: 'var(--font-serif)', fontWeight: 300, fontSize: 'clamp(22px, 2.2vw, 26px)', lineHeight: 1.45, letterSpacing: '-0.005em', color: 'var(--color-forest)', fontStyle: 'italic' }}>
                &ldquo;They look at the business with fresh, objective eyes. They spot areas of opportunity without emotional attachment, and when they see something worth fixing, they have a clear vision and plan.&rdquo;
              </blockquote>
              <figcaption style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
                <span aria-hidden="true" style={{ display: 'block', width: 28, height: 1, background: 'var(--color-forest)', opacity: 0.5 }} />
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, letterSpacing: '0.08em', color: 'var(--color-ink-eyebrow)' }}>
                  Josh Hardy, General Manager, On The River Inn · Woodstock, Vermont
                </span>
              </figcaption>
            </figure>
          </div>
          <div style={{ marginTop: 60 }}>
            <Link href="/for-owners" className="btn btn--primary-dark">For Owners</Link>
          </div>
        </div>
      </section>

      {/* In the field */}
      <section className="section section--cream-pale">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p className="eyebrow on-cream" style={{ marginBottom: 18 }}>Gallery</p>
            <h2 style={{ fontWeight: 600, fontSize: 'clamp(34px, 4.2vw, 48px)', color: 'var(--color-forest)' }}>In the field.</h2>
          </div>
          <div className="ltp-field-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 1200, margin: '0 auto' }}>
            {[
              { img: '/images/closing-with-lawyer.jpg', caption: 'Burlington, Vermont. 2022. Closing day on our first business, with our lawyer Dave Sterrett.', note: 'Signing the papers for our first business.' },
              { img: '/images/mountaineer-bonfire.jpg', caption: 'Mt. Snow, Vermont. 2023. Bonfire at the Hideaway.', note: 'Owning the inn means being at the inn.' },
              { img: '/images/cape-cod-dock.jpg', caption: 'Cape Cod, 2024. On the dock.', note: 'Off the clock, but never really off. Most of our best ideas show up on weekends like this one.' },
            ].map((p, i) => (
              <figure key={i} style={{ margin: 0 }}>
                <div style={{ aspectRatio: '4/3', background: 'var(--color-cream-soft)', marginBottom: 14, overflow: 'hidden', position: 'relative' }}>
                  <Image src={p.img} alt={p.caption} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <figcaption style={{ margin: 0 }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-ink-eyebrow)', marginBottom: 8 }}>
                    {p.caption}
                  </div>
                  <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--color-ink-body)', fontFamily: 'var(--font-sans)' }}>
                    {p.note}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
