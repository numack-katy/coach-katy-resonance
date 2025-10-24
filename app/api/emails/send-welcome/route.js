import { NextResponse } from 'next/server'
import { resend, FROM_EMAIL } from '@/lib/resend'
import { getWelcomeEmail } from '@/lib/emails/welcome'

/**
 * Send welcome email to new client
 *
 * POST /api/emails/send-welcome
 * Body: { clientName, email, temporaryPassword }
 */
export async function POST(request) {
  try {
    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      console.log('⚠️ RESEND_API_KEY not configured, skipping email')
      return NextResponse.json(
        { message: 'Email not configured' },
        { status: 200 }
      )
    }

    const { clientName, email, temporaryPassword } = await request.json()

    if (!clientName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const emailContent = getWelcomeEmail(clientName, email, temporaryPassword)

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: emailContent.subject,
      html: emailContent.html,
    })

    if (error) {
      console.error('Error sending welcome email:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('✅ Welcome email sent to:', email)
    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in send-welcome route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
