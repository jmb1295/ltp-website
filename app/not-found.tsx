import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: 'calc(100vh - 90px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-cream)',
        padding: '80px var(--gutter)',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 560 }}>
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: 96,
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: 'var(--color-forest)',
            opacity: 0.15,
            marginBottom: 32,
          }}
        >
          404
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 600,
            fontSize: 'clamp(28px, 3.2vw, 40px)',
            letterSpacing: '-0.015em',
            color: 'var(--color-forest)',
            marginBottom: 20,
          }}
        >
          This page does not exist.
        </h1>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.65,
            color: 'var(--color-ink-body)',
            marginBottom: 48,
          }}
        >
          You may have followed a broken link, or the page may have moved. Start from the homepage and we will get you where you are going.
        </p>
        <Link href="/" className="btn btn--primary-dark">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
