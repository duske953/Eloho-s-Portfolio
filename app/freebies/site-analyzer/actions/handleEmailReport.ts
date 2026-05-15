'use server';

import { processEmail, sendTransactionalEmail } from '~/lib/mailchimp/audience';

export async function handleEmailReport({
  email,
  url,
  pdfBase64,
}: {
  email: string;
  url: string;
  pdfBase64: string;
}) {
  try {
    if (!email) {
      return { status: 400, response: 'Email is required' };
    }
    await processEmail(email);
    const result = await sendTransactionalEmail({
      email,
      subject: `Your Website Analysis Report for ${url}`,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2563eb;">Your Website Analysis is Ready</h2>
          <p>Hi there,</p>
          <p>Thank you for using the Site Analyzer. We've completed our check for <strong>${url}</strong>.</p>
          <p>Please find your detailed PDF report attached to this email.</p>
          <p>If you have any questions about the findings, feel free to reach out to me at <a href="mailto:web@eloho.pro">web@eloho.pro</a> or visit <a href="https://eloho.pro">eloho.pro</a>.</p>
          <br/>
          <p>Best regards,<br/>Eloho Kennedy</p>
        </div>
      `,
      attachment: [
        {
          content: pdfBase64,
          name: `site-report-${url.replace(/[^a-z0-9]/gi, '-')}.pdf`,
        },
      ],
    });

    return { code: 200, response: 'Email sent' };
  } catch (error) {
    return { code: 500, response: 'Something went wrong' };
  }
}
