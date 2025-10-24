import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

// Default sender email - update with your verified domain
export const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@coachkaty.com'
export const COACH_NAME = process.env.COACH_NAME || 'Coach Katy'
export const COACH_EMAIL = process.env.COACH_EMAIL || 'hello@coachkaty.com'
export const PORTAL_URL = process.env.NEXTAUTH_URL || 'http://localhost:3000'
