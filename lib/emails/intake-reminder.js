import { COACH_NAME, PORTAL_URL } from '../resend'

export function getIntakeReminderEmail(clientName) {
  return {
    subject: `Your Intake Form is Waiting 📋`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Intake Form Reminder</title>
</head>
<body style="margin: 0; padding: 0; background-color: #1a1a1a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #2a2a2a; border-radius: 8px; overflow: hidden;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #77599f 0%, #5a4578 100%); padding: 40px 40px 30px; text-align: center;">
              <div style="font-size: 48px; margin-bottom: 10px;">📋</div>
              <h1 style="margin: 0; color: #f9f5f0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                Let's Get to Know Each Other
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; color: #f9f5f0; font-size: 18px; line-height: 1.6;">
                Hi ${clientName},
              </p>

              <p style="margin: 0 0 20px; color: #f9f5f0; font-size: 16px; line-height: 1.6;">
                I noticed you haven't completed your intake form yet. This form is really important—it helps me understand your goals, challenges, and what you need from our coaching relationship.
              </p>

              <p style="margin: 0 0 20px; color: #f9f5f0; font-size: 16px; line-height: 1.6;">
                <strong>It takes about 10-15 minutes</strong> and gives us a great starting point for our first session.
              </p>

              <!-- Why it matters box -->
              <div style="background-color: #1a1a1a; border-left: 4px solid #77599f; padding: 20px; margin: 25px 0;">
                <h3 style="margin: 0 0 10px; color: #77599f; font-size: 16px; font-weight: 600;">
                  Why the intake form matters:
                </h3>
                <ul style="margin: 0; padding-left: 20px; color: #a0a0a0; font-size: 15px; line-height: 1.8;">
                  <li>Helps me tailor our sessions to YOUR needs</li>
                  <li>Lets me know what accommodations you need</li>
                  <li>Gives us a clear starting point</li>
                  <li>Saves time in our first session</li>
                </ul>
              </div>

              <p style="margin: 25px 0 0; color: #f9f5f0; font-size: 16px; line-height: 1.6;">
                No wrong answers, no judgment—just honest reflection about where you are right now.
              </p>

              <!-- CTA Button -->
              <div style="text-align: center; margin: 35px 0;">
                <a href="${PORTAL_URL}/portal/intake" style="display: inline-block; background-color: #77599f; color: #f9f5f0; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-size: 16px; font-weight: 600; text-align: center;">
                  Complete Intake Form →
                </a>
              </div>

              <p style="margin: 25px 0 0; color: #a0a0a0; font-size: 14px; line-height: 1.6; text-align: center;">
                Questions about the form? Just reply to this email!
              </p>

              <p style="margin: 25px 0 0; color: #f9f5f0; font-size: 16px;">
                Talk soon,<br>
                <strong>${COACH_NAME}</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 30px; text-align: center; border-top: 1px solid #3a3a3a;">
              <p style="margin: 0; color: #6a6a6a; font-size: 13px;">
                © ${new Date().getFullYear()} ${COACH_NAME}. All rights reserved.
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
