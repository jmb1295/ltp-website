import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact | Long Trail Partners',
}

const people = [
  { name: 'Justin Bredahl', role: 'Co-Founder', email: 'jb@longtrl.com' },
  { name: 'Stephen Goodwin', role: 'Co-Founder', email: 'sg@longtrl.com' },
]

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        heading="Start a conversation."
        lede="Whether you have built a business, you advise someone who has, or you are just curious about what we are building, we are always happy to have a conversation. A real person reads every message and we usually reply within a day. Use the form below, or reach out directly."
        imageSrc="/images/contact-hero.jpg"
        imageAlt="Covered bridge in Woodstock, Vermont"
        videoSrc="/videos/contact-hero.mp4"
        imagePosition="center 50%"
      />

      <section className="section section--cream-pale">
        <div className="container" style={{ maxWidth: 880 }}>
          <ContactForm />

          <div
            className="ltp-direct"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, marginTop: 30, paddingTop: 60, borderTop: '1px solid var(--color-forest)' }}
          >
            {people.map((p) => (
              <div key={p.email}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 22, letterSpacing: '-0.01em', color: 'var(--color-forest)', marginBottom: 4 }}>{p.name}</h3>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-ink-eyebrow)' }}>{p.role}</span>
                <a
                  href={`mailto:${p.email}`}
                  style={{ display: 'block', marginTop: 14, fontSize: 18, textDecoration: 'none', borderBottom: '1px solid rgba(31,51,41,0.4)', width: 'fit-content', color: 'var(--color-forest)', fontFamily: 'var(--font-sans)' }}
                >
                  {p.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
