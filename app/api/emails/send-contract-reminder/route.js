import { NextResponse } from 'next/server'
import { resend, FROM_EMAIL } from '@/lib/resend'
import { getContractReminderEmail } from '@/lib/emails/contract-reminder'

/**
 * Send contract signing reminder to client
 *
 * POST /api/emails/send-contract-reminder
 * Body: { clientName, email, contractUrl }
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

    const { clientName, email, contractUrl } = await request.json()

    if (!clientName || !email || !contractUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const emailContent = getContractReminderEmail(clientName, contractUrl)

    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: emailContent.subject,
      html: emailContent.html,
    })

    if (error) {
      console.error('Error sending contract reminder:', error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    console.log('✅ Contract reminder sent to:', email)
    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in send-contract-reminder route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
