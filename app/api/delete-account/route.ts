import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { phone, reason } = await request.json();

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required.' }, { status: 400 });
    }

    const smtpPass = process.env.BREVO_SMTP_PASSWORD || process.env.BREVO_API_KEY;
    const smtpUser = process.env.BREVO_SMTP_USER || 'apikey';

    if (!smtpPass) {
      console.warn('⚠️ SMTP not configured. Deletion request not emailed.');
      return NextResponse.json({ message: 'Deletion request received.' }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp-relay.brevo.com',
      port: 587,
      secure: false,
      auth: { user: smtpUser, pass: smtpPass },
      tls: { rejectUnauthorized: false },
    });

    const contactEmail = process.env.CONTACT_EMAIL || 'info@koinsave.co';
    const brevoEmail = process.env.BREVO_EMAIL || 'support@koinsave.co';

    await transporter.sendMail({
      from: `KoinSave <${brevoEmail}>`,
      to: contactEmail,
      subject: `Account Deletion Request — ${phone}`,
      html: `
        <div style="font-family: Arial, sans-serif; background: #f6f8fb; padding: 24px;">
          <div style="max-width: 600px; margin: 0 auto; background: #fff; border-radius: 8px; padding: 32px; border: 1px solid #e5e7eb;">
            <h2 style="color: #ef4444; margin: 0 0 16px;">Account Deletion Request</h2>
            <p style="color: #374151; font-size: 14px; margin: 0 0 24px;">A user has requested account deletion.</p>
            <table style="width: 100%; font-size: 14px; color: #374151; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-weight: 600; width: 140px;">Phone Number</td><td style="padding: 8px 0;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600;">Reason</td><td style="padding: 8px 0;">${reason || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: 600;">Requested At</td><td style="padding: 8px 0;">${new Date().toUTCString()}</td></tr>
            </table>
            <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;" />
            <p style="font-size: 12px; color: #6b7280;">Please process this request within 7 business days.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Deletion request received.' }, { status: 200 });
  } catch (error: any) {
    console.error('Delete account error:', error?.message);
    return NextResponse.json({ error: 'Failed to submit request. Please try again.' }, { status: 500 });
  }
}
