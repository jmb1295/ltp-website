import type { Metadata } from 'next'
import { Source_Serif_4, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const BASE_URL = 'https://long-trail-partners.com'

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  weight: ['300', '400', '500', '600', '700'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['300', '400', '500', '600', '700'],
})

const SITE_NAME = 'Long Trail Partners'
const DEFAULT_DESCRIPTION =
  'Long Trail Partners acquires and operates great founder-owned businesses across the Northeast. If you\'ve built a company and are thinking about what comes next, we\'d like to hear from you.'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: BASE_URL,
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Long Trail Partners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: ['/images/og-default.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/images/og-default.jpg`,
    description: DEFAULT_DESCRIPTION,
    foundingDate: '2022',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Northeast United States',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'jb@longtrl.com',
      contactType: 'general',
    },
    sameAs: [],
  }

  return (
    <html lang="en" className={`${sourceSerif.variable} ${sourceSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
