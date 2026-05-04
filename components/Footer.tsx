import Link from 'next/link'

const sitemap = [
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/how-we-think', label: 'How We Think' },
  { href: '/our-focus', label: 'Our Focus' },
  { href: '/for-owners', label: 'For Owners' },
  { href: '/contact', label: 'Contact' },
]

const regions = ['VT · NH · ME', 'NY · MA · RI']

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-forest-deep)', color: 'var(--color-cream)', padding: '80px 0 40px' }} aria-label="Site footer">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 48 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 600, letterSpacing: '0.04em', lineHeight: 1 }}>
            LONG TRAIL
          </div>
          <div style={{ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600, letterSpacing: '0.28em', color: 'var(--color-muted)', marginTop: 8, lineHeight: 1 }}>
            PARTNERS
          </div>
          <p style={{ marginTop: 24, fontSize: 15, opacity: 0.7 }}>Built for the Long Haul.</p>
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 16 }}>Region</h4>
          {regions.map((r) => (
            <p key={r} style={{ fontSize: 15, opacity: 0.85, margin: '4px 0' }}>{r}</p>
          ))}
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 16 }}>Contact</h4>
          <p style={{ fontSize: 15, opacity: 0.85, margin: 0, lineHeight: 1.8 }}>
            <a href="mailto:jb@longtrl.com" style={{ color: 'var(--color-cream)', textDecoration: 'none', borderBottom: '1px solid rgba(244,239,227,0.4)' }}>jb@longtrl.com</a>
            <br />
            <a href="mailto:sg@longtrl.com" style={{ color: 'var(--color-cream)', textDecoration: 'none', borderBottom: '1px solid rgba(244,239,227,0.4)' }}>sg@longtrl.com</a>
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: 0.7, marginBottom: 16 }}>Sitemap</h4>
          {sitemap.map((s) => (
            <p key={s.href} style={{ fontSize: 15, opacity: 0.85, margin: '4px 0' }}>
              <Link href={s.href} style={{ color: 'var(--color-cream)', textDecoration: 'none', borderBottom: '1px solid rgba(244,239,227,0.4)' }}>
                {s.label}
              </Link>
            </p>
          ))}
        </div>
      </div>

      <div className="container" style={{ marginTop: 56, paddingTop: 28, borderTop: '1px solid rgba(244,239,227,0.18)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, fontSize: 13, letterSpacing: '0.04em', opacity: 0.55 }}>
        <span>© 2026 Long Trail Partners</span>
        <span>Woodstock, Vermont</span>
      </div>
    </footer>
  )
}
