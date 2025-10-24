import { COACH_NAME, PORTAL_URL } from '../resend'

export function getWelcomeEmail(clientName, email, temporaryPassword) {
  return {
    subject: `Welcome to ${COACH_NAME}'s Coaching Portal!`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Coaching</title>
</head>
<body style="margin: 0; padding: 0; background-color: #1a1a1a; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #1a1a1a; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #2a2a2a; border-radius: 8px; overflow: hidden;">

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #77599f 0%, #5a4578 100%); padding: 40px 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #f9f5f0; font-size: 32px; font-weight: 600; letter-spacing: -0.5px;">
                Welcome to Your Coaching Journey! 🌟
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
                I'm so excited to work with you! Your coaching portal is now ready. This is your central hub for everything related to our work together.
              </p>

              <!-- Login Credentials Box -->
              <div style="background-color: #1a1a1a; border: 2px solid #77599f; border-radius: 6px; padding: 25px; margin: 30px 0;">
                <h2 style="margin: 0 0 15px; color: #77599f; font-size: 18px; font-weight: 600;">
                  Your Login Credentials
                </h2>
                <p style="margin: 0 0 10px; color: #a0a0a0; font-size: 14px;">
                  <strong style="color: #f9f5f0;">Portal URL:</strong><br>
                  <a href="${PORTAL_URL}/portal/login" style="color: #77599f; text-decoration: none;">${PORTAL_URL}/portal/login</a>
                </p>
                <p style="margin: 0 0 10px; color: #a0a0a0; font-size: 14px;">
                  <strong style="color: #f9f5f0;">Email:</strong> ${email}
                </p>
                ${temporaryPassword ? `
                <p style="margin: 0; color: #a0a0a0; font-size: 14px;">
                  <strong style="color: #f9f5f0;">Temporary Password:</strong> ${temporaryPassword}
                </p>
                <p style="margin: 15px 0 0; color: #ef4444; font-size: 13px;">
                  ⚠️ Please change this password after your first login
                </p>
                ` : ''}
              </div>

              <!-- Next Steps -->
              <h2 style="margin: 30px 0 15px; color: #f9f5f0; font-size: 20px; font-weight: 600;">
                Next Steps
              </h2>

              <div style="margin-bottom: 15px;">
                <div style="display: inline-block; width: 28px; height: 28px; background-color: #77599f; border-radius: 50%; text-align: center; line-height: 28px; color: #f9f5f0; font-weight: 600; margin-right: 12px; vertical-align: middle;">1</div>
                <span style="color: #f9f5f0; font-size: 16px; vertical-align: middle;">Log in to your portal</span>
              </div>

              <div style="margin-bottom: 15px;">
                <div style="display: inline-block; width: 28px; height: 28px; background-color: #77599f; border-radius: 50%; text-align: center; line-height: 28px; color: #f9f5f0; font-weight: 600; margin-right: 12px; vertical-align: middle;">2</div>
                <span style="color: #f9f5f0; font-size: 16px; vertical-align: middle;">Complete your intake form</span>
              </div>

              <div style="margin-bottom: 15px;">
                <div style="display: inline-block; width: 28px; height: 28px; background-color: #77599f; border-radius: 50%; text-align: center; line-height: 28px; color: #f9f5f0; font-weight: 600; margin-right: 12px; vertical-align: middle;">3</div>
                <span style="color: #f9f5f0; font-size: 16px; vertical-align: middle;">Review and sign your coaching agreement</span>
              </div>

              <div style="margin-bottom: 25px;">
                <div style="display: inline-block; width: 28px; height: 28px; background-color: #77599f; border-radius: 50%; text-align: center; line-height: 28px; color: #f9f5f0; font-weight: 600; margin-right: 12px; vertical-align: middle;">4</div>
                <span style="color: #f9f5f0; font-size: 16px; vertical-align: middle;">Schedule your first session</span>
              </div>

              <!-- CTA Button -->
              <div style="text-align: center; margin: 35px 0;">
                <a href="${PORTAL_URL}/portal/login" style="display: inline-block; background-color: #77599f; color: #f9f5f0; text-decoration: none; padding: 16px 40px; border-radius: 50px; font-size: 16px; font-weight: 600; text-align: center;">
                  Access Your Portal →
                </a>
              </div>

              <p style="margin: 25px 0 0; color: #a0a0a0; font-size: 15px; line-height: 1.6;">
                Questions? Just reply to this email or reach out anytime. I'm here to support you!
              </p>

              <p style="margin: 20px 0 0; color: #f9f5f0; font-size: 16px;">
                Looking forward to our work together,<br>
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
