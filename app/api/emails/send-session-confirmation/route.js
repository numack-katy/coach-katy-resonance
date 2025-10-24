import { NextResponse } from 'next/server'
import { resend, FROM_EMAIL } from '@/lib/resend'
import { getSessionConfirmationEmail } from '@/lib/emails/session-confirmation'

/**
 * Send session confirmation to client
 *
 * POST /api/emails/send-session-confirmation
 * Body: { clientName, email, sessionData }
 */
export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.log('⚠️ RESEND_API_KEY not configured, skipping email')
      return NextResponse.json(
        { message: 'Email not configured' },
        { status: 200 }
      )
    }

    const { clientName, email, sessionData } = await request.json()

    if (!clientName || !email || !sessionData) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const emailContent = getSessionConfirmationEmail(clientName, sessionData)

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: emailContent.subject,
      html: emailContent.html,
    })

    if (error) {
      console.error('Error sending session confirmation:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('✅ Session confirmation sent to:', email)
    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in send-session-confirmation route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
