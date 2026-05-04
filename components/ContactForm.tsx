'use client'

import { useRef, useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (res.ok) {
        setStatus('success')
        formRef.current?.reset()
      } else {
        setStatus('error')
        setErrorMsg(json.error ?? 'Unknown error')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(String(err))
    }
  }

  if (status === 'success') {
    return (
      <div role="alert" style={{ padding: '64px 0', textAlign: 'center' }}>
        <div aria-hidden="true" style={{ fontFamily: 'var(--font-serif)', fontSize: 48, marginBottom: 16, opacity: 0.4 }}>✓</div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 28, color: 'var(--color-forest)', marginBottom: 12 }}>Message sent.</h3>
        <p style={{ fontSize: 18, color: 'var(--color-ink-body)', maxWidth: 480, margin: '0 auto' }}>
          A real person reads every message. We will be in touch within a day.
        </p>
      </div>
    )
  }

  return (
    <>
      {status === 'error' && (
        <p role="alert" style={{ color: 'var(--color-forest)', fontSize: 15, marginBottom: 16 }}>
          Something went wrong: {errorMsg || 'Please try again or email us directly.'}
        </p>
      )}
      <form ref={formRef} onSubmit={handleSubmit} noValidate style={{ width: '100%', fontFamily: 'var(--font-sans)' }}>
        <div className="ltp-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 22 }}>
          <div>
            <label htmlFor="firstName" className="label">First Name</label>
            <input id="firstName" name="firstName" type="text" required autoComplete="given-name" className="input" />
          </div>
          <div>
            <label htmlFor="lastName" className="label">Last Name</label>
            <input id="lastName" name="lastName" type="text" required autoComplete="family-name" className="input" />
          </div>
        </div>
        <div className="ltp-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 22 }}>
          <div>
            <label htmlFor="email" className="label">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" className="input" />
          </div>
          <div>
            <label htmlFor="company" className="label">Company Website</label>
            <input id="company" name="company" type="text" autoComplete="organization" className="input" />
          </div>
        </div>
        <div style={{ marginBottom: 32 }}>
          <label htmlFor="message" className="label">Tell us a bit about your business</label>
          <textarea id="message" name="message" rows={4} className="input" style={{ resize: 'vertical', minHeight: 80 }} />
        </div>
        <button type="submit" disabled={status === 'loading'} className="btn btn--primary-dark" style={{ opacity: status === 'loading' ? 0.5 : 1 }}>
          {status === 'loading' ? 'Sending...' : 'Send'}
        </button>
      </form>
    </>
  )
}
