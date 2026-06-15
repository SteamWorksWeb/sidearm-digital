import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { startInternalEmail, startConfirmationEmail } from '@/lib/emails'

const resend = new Resend(process.env.RESEND_API_KEY)

async function verifyRecaptcha(token: string): Promise<boolean> {
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  })
  const data = await res.json()
  return data.success && data.score >= 0.5
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const {
      firstName,
      lastName,
      phone,
      email,
      company,
      projectType,
      hasWebsite,
      budget,
      details,
      recaptchaToken,
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !projectType || !budget || !hasWebsite) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    // Verify reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json({ error: 'reCAPTCHA token missing.' }, { status: 400 })
    }
    const isHuman = await verifyRecaptcha(recaptchaToken)
    if (!isHuman) {
      return NextResponse.json({ error: 'reCAPTCHA verification failed.' }, { status: 400 })
    }

    const name = `${firstName} ${lastName}`

    // Send internal notification to info@sidearmdigital.com
    await resend.emails.send({
      from: 'Sidearm Digital <no-reply@sidearmdigital.com>',
      to: 'info@sidearmdigital.com',
      replyTo: email,
      subject: `New Project Request — ${name} | ${projectType} | ${budget}`,
      html: startInternalEmail({ name, email, company, phone, projectType, hasWebsite, budget, details }),
    })

    // Send confirmation to submitter
    await resend.emails.send({
      from: 'Sidearm Digital <no-reply@sidearmdigital.com>',
      to: email,
      replyTo: 'info@sidearmdigital.com',
      subject: `Your project request is in review, ${firstName}`,
      html: startConfirmationEmail({ name, projectType, budget }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[/api/start] Error:', error)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}
