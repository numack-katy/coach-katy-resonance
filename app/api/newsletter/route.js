import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send welcome email to subscriber
    await resend.emails.send({
      from: 'Katy Welborn <katy@news.gentlenook.com>',
      to: [email],
      subject: 'Welcome to Neurodivergent Insights!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #77599f;">Welcome to Neurodivergent Insights!</h2>
          <p>Thank you for subscribing to my newsletter. You'll receive:</p>
          <ul>
            <li>Practical coaching tips for neurodivergent adults</li>
            <li>Insights from lived experience</li>
            <li>Updates on new coaching offerings</li>
            <li>Resources for navigating life on your terms</li>
          </ul>
          <p>I'm excited to share this journey with you!</p>
          <p>Best,<br>Katy</p>
        </div>
      `,
    });

    // Also send notification to you
    await resend.emails.send({
      from: 'Newsletter <katy@news.gentlenook.com>',
      to: ['katy@coachkaty.help'],
      subject: 'New Newsletter Subscriber',
      html: `
        <p>New newsletter subscriber: ${email}</p>
      `,
    });

    return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 200 });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}

