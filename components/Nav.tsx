'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/who-we-are', label: 'Who We Are' },
  { href: '/how-we-think', label: 'How We Think' },
  { href: '/our-focus', label: 'Our Focus' },
  { href: '/for-owners', label: 'For Owners' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      className="ltp-nav"
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'var(--color-forest)',
        borderBottom: '1px solid rgba(244,239,227,0.20)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px var(--gutter)' }}>
        {/* Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', color: 'var(--color-cream)' }}>
          <Image
            src="/images/logo-moose.png"
            alt="Long Trail Partners moose logo"
            width={112}
            height={112}
            style={{ objectFit: 'contain', filter: 'invert(1) brightness(1.4) contrast(1.1)', mixBlendMode: 'screen', display: 'block' }}
          />
          <div style={{ width: 1, height: 64, background: 'rgba(244,239,227,0.22)' }} />
          <div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 600, letterSpacing: '0.04em', lineHeight: 1 }}>
              LONG TRAIL
            </div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: '0.28em', color: 'var(--color-muted)', marginTop: 8, lineHeight: 1 }}>
              PARTNERS
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <nav className="ltp-nav-desktop" aria-label="Main navigation" style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: 15, fontWeight: 500, textDecoration: 'none',
                color: pathname === l.href ? 'var(--color-cream)' : 'rgba(244,239,227,0.7)',
                transition: 'opacity 0.2s',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn"
            style={{
              fontSize: 14, padding: '11px 22px', letterSpacing: '0.04em',
              background: pathname === '/contact' ? 'var(--color-cream)' : 'transparent',
              color: pathname === '/contact' ? 'var(--color-forest)' : 'var(--color-cream)',
              borderColor: pathname === '/contact' ? 'var(--color-cream)' : 'rgba(244,239,227,0.4)',
            }}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="ltp-nav-burger"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{ display: 'none', background: 'transparent', border: 'none', color: 'var(--color-cream)', padding: 8, cursor: 'pointer' }}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav style={{ borderTop: '1px solid rgba(244,239,227,0.10)', background: 'var(--color-forest-deep)', padding: '24px var(--gutter)', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ color: 'rgba(244,239,227,0.8)', fontSize: 17, fontWeight: 500, textDecoration: 'none', padding: '4px 0' }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="btn btn--ghost-light" style={{ marginTop: 8, textAlign: 'center' }}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
