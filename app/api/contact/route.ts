import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const TO_EMAIL = 'jb@longtrl.com'
const FROM_EMAIL = 'website@longtrl.com'

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set')
    return NextResponse.json({ error: 'Server misconfiguration: missing API key' }, { status: 500 })
  }

  const { firstName, lastName, email, company, message } = await req.json()

  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `New message from ${firstName} ${lastName}`,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        <p><strong>Message:</strong><br>${message?.replace(/\n/g, '<br>') ?? ''}</p>
      `,
    })
    if (result.error) {
      console.error('Resend returned error:', result.error)
      return NextResponse.json({ error: result.error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Resend exception:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
