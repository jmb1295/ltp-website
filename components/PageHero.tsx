import Image from 'next/image'

interface PageHeroProps {
  eyebrow: string
  heading: string
  lede: string
  imageSrc: string
  imageAlt: string
  videoSrc?: string
  imagePosition?: string
  imageFilter?: string
  heavyOverlay?: boolean
}

export default function PageHero({
  eyebrow,
  heading,
  lede,
  imageSrc,
  imageAlt,
  videoSrc,
  imagePosition = 'center 40%',
  imageFilter,
  heavyOverlay = false,
}: PageHeroProps) {
  const hasVideo = Boolean(videoSrc)

  return (
    <section
      style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', padding: 'clamp(90px, 10vw, 140px) 0', borderBottom: '1px solid rgba(244,239,227,0.18)' }}
      aria-label={`${eyebrow} page hero`}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {hasVideo ? (
          <video
            src={videoSrc}
            poster={imageSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: imagePosition, filter: imageFilter, position: 'absolute', inset: 0 }}
          />
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ objectFit: 'cover', objectPosition: imagePosition, filter: imageFilter }}
            priority
          />
        )}
        <div style={{
          position: 'absolute', inset: 0,
          background: (hasVideo || heavyOverlay)
            ? 'linear-gradient(180deg, rgba(244,239,227,0.78) 0%, rgba(244,239,227,0.65) 50%, rgba(244,239,227,0.85) 100%)'
            : 'linear-gradient(180deg, rgba(244,239,227,0.55) 0%, rgba(244,239,227,0.40) 50%, rgba(244,239,227,0.78) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: (hasVideo || heavyOverlay)
            ? 'radial-gradient(ellipse at center, rgba(244,239,227,0.7) 0%, rgba(244,239,227,0.5) 45%, rgba(244,239,227,0.1) 80%)'
            : 'radial-gradient(ellipse at center, rgba(244,239,227,0.55) 0%, rgba(244,239,227,0.35) 40%, rgba(244,239,227,0) 75%)',
        }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 880, margin: '0 auto', padding: '0 var(--gutter)', color: 'var(--color-forest)' }}>
        <p className="eyebrow on-cream" style={{ marginBottom: 22 }}>{eyebrow}</p>
        <h1 style={{
          fontFamily: 'var(--font-serif)', fontWeight: 600,
          fontSize: 'clamp(44px, 6vw, 80px)', lineHeight: 1.05, letterSpacing: '-0.02em',
          color: 'var(--color-forest)', marginBottom: 28, whiteSpace: 'pre-line',
        }}>{heading}</h1>
        <p style={{ fontSize: 'clamp(18px, 1.6vw, 22px)', lineHeight: 1.55, maxWidth: 720, margin: '0 auto', color: 'var(--color-ink-soft)' }}>
          {lede}
        </p>
      </div>
    </section>
  )
}
