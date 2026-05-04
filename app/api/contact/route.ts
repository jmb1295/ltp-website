import { NextRequest, NextResponse } from 'next/server'
// TODO: Set RESEND_API_KEY environment variable in Vercel dashboard
// TODO: Update FROM_EMAIL to a verified Resend domain (e.g. website@longtrailpartners.com)
import { Resend } from 'resend'

const TO_EMAIL = 'jb@longtrl.com'
const FROM_EMAIL = 'website@longtrailpartners.com'

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, company, message } = await req.json()

  if (!firstName || !lastName || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
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
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
