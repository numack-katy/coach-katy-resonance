import { COACH_NAME } from '../resend'

export function getContractReminderEmail(clientName, contractUrl) {
  return {
    subject: `Coaching Agreement Ready for Signature ✍️`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contract Reminder</title>
</head>
<body style="margin: 0; padding: 0; background-color: #1a1a1a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #2a2a2a; border-radius: 8px; overflow: hidden;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #77599f 0%, #5a4578 100%); padding: 40px 40px 30px; text-align: center;">
              <div style="font-size: 48px; margin-bottom: 10px;">✍️</div>
              <h1 style="margin: 0; color: #f9f5f0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                Time to Make It Official
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
                Your coaching agreement is ready to review and sign. This contract outlines what you can expect from our work together, including:
              </p>

              <ul style="margin: 0 0 20px; padding-left: 20px; color: #f9f5f0; font-size: 16px; line-height: 1.8;">
                <li>Session structure and scheduling</li>
                <li>Communication guidelines</li>
                <li>Confidentiality and boundaries</li>
                <li>Payment terms</li>
                <li>How we'll work together</li>
              </ul>

              <!-- Info Box -->
              <div style="background-color: #1a1a1a; border-left: 4px solid #77599f; padding: 20px; margin: 25px 0;">
                <p style="margin: 0; color: #a0a0a0; font-size: 15px; line-height: 1.6;">
                  <strong style="color: #77599f;">⏱️ Takes 5 minutes:</strong> Read through the agreement at your own pace. The signature process is quick and secure via HelloSign/DocuSign.
                </p>
              </div>

              <p style="margin: 25px 0 0; color: #f9f5f0; font-size: 16px; line-height: 1.6;">
                Once you've signed, we're all set to begin our coaching journey together!
              </p>

              <!-- CTA Button -->
              <div style="text-align: center; margin: 35px 0;">
                <a href="${contractUrl}" style="display: inline-block; background-color: #77599f; color: #f9f5f0; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-size: 16px; font-weight: 600; text-align: center;">
                  Review & Sign Agreement →
                </a>
              </div>

              <p style="margin: 25px 0 0; color: #a0a0a0; font-size: 14px; line-height: 1.6; text-align: center;">
                Questions about the agreement? I'm happy to walk through anything—just reply to this email!
              </p>

              <p style="margin: 25px 0 0; color: #f9f5f0; font-size: 16px;">
                Looking forward to working together,<br>
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
