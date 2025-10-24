import { COACH_NAME } from '../resend'

export function getSessionConfirmationEmail(clientName, sessionData) {
  const sessionDate = new Date(sessionData.scheduledDate)
  const formattedDate = sessionDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  const formattedTime = sessionDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short'
  })

  return {
    subject: `Session Confirmed: ${formattedDate} 📅`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Session Confirmation</title>
</head>
<body style="margin: 0; padding: 0; background-color: #1a1a1a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #2a2a2a; border-radius: 8px; overflow: hidden;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #77599f 0%, #5a4578 100%); padding: 40px 40px 30px; text-align: center;">
              <div style="font-size: 48px; margin-bottom: 10px;">📅</div>
              <h1 style="margin: 0; color: #f9f5f0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                Your Session is Confirmed!
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; color: #f9f5f0; font-size: 18px; line-height: 1.6;">
                Hi ${clientName},
              </p>

              <p style="margin: 0 0 30px; color: #f9f5f0; font-size: 16px; line-height: 1.6;">
                Looking forward to our session! Here are the details:
              </p>

              <!-- Session Details Box -->
              <div style="background-color: #1a1a1a; border: 2px solid #77599f; border-radius: 6px; padding: 25px; margin: 25px 0;">
                <h2 style="margin: 0 0 20px; color: #77599f; font-size: 18px; font-weight: 600;">
                  Session ${sessionData.sessionNumber || 'Details'}
                </h2>

                <div style="margin-bottom: 15px;">
                  <div style="color: #a0a0a0; font-size: 13px; margin-bottom: 5px;">📅 DATE</div>
                  <div style="color: #f9f5f0; font-size: 16px; font-weight: 500;">${formattedDate}</div>
                </div>

                <div style="margin-bottom: 15px;">
                  <div style="color: #a0a0a0; font-size: 13px; margin-bottom: 5px;">🕐 TIME</div>
                  <div style="color: #f9f5f0; font-size: 16px; font-weight: 500;">${formattedTime}</div>
                </div>

                <div style="margin-bottom: ${sessionData.agenda ? '15px' : '0'};">
                  <div style="color: #a0a0a0; font-size: 13px; margin-bottom: 5px;">⏱️ DURATION</div>
                  <div style="color: #f9f5f0; font-size: 16px; font-weight: 500;">${sessionData.duration} minutes</div>
                </div>

                ${sessionData.agenda ? `
                <div>
                  <div style="color: #a0a0a0; font-size: 13px; margin-bottom: 5px;">📝 AGENDA</div>
                  <div style="color: #f9f5f0; font-size: 15px; line-height: 1.5;">${sessionData.agenda}</div>
                </div>
                ` : ''}
              </div>

              ${sessionData.meetingLink ? `
              <!-- CTA Button -->
              <div style="text-align: center; margin: 35px 0;">
                <a href="${sessionData.meetingLink}" style="display: inline-block; background-color: #77599f; color: #f9f5f0; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-size: 16px; font-weight: 600; text-align: center;">
                  Join Video Call →
                </a>
              </div>
              <p style="margin: 0 0 25px; color: #a0a0a0; font-size: 14px; text-align: center;">
                You can also find the meeting link in your portal dashboard
              </p>
              ` : ''}

              <!-- Preparation Tips -->
              <div style="background-color: #1a1a1a; border-left: 4px solid #77599f; padding: 20px; margin: 25px 0;">
                <h3 style="margin: 0 0 10px; color: #77599f; font-size: 16px; font-weight: 600;">
                  📝 To prepare for our session:
                </h3>
                <ul style="margin: 0; padding-left: 20px; color: #a0a0a0; font-size: 15px; line-height: 1.8;">
                  <li>Find a quiet, comfortable space</li>
                  <li>Have water and any comfort items handy</li>
                  <li>Test your audio/video connection</li>
                  <li>Bring any questions or topics you want to discuss</li>
                </ul>
              </div>

              <p style="margin: 25px 0 0; color: #a0a0a0; font-size: 14px; line-height: 1.6;">
                <strong style="color: #f9f5f0;">Need to reschedule?</strong> Life happens! Just reply to this email and we'll find another time.
              </p>

              <p style="margin: 25px 0 0; color: #f9f5f0; font-size: 16px;">
                See you soon!<br>
                <strong>${COACH_NAME}</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 30px; text-align: center; border-top: 1px solid #3a3a3a;">
              <p style="margin: 0 0 10px; color: #6a6a6a; font-size: 13px;">
                © ${new Date().getFullYear()} ${COACH_NAME}. All rights reserved.
              </p>
              <p style="margin: 0; color: #6a6a6a; font-size: 12px;">
                📧 Reply to this email | 🌐 Visit your portal
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `,
  }
}
