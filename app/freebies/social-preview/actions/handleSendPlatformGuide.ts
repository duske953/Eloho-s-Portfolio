'use server';

import {
  createAudience,
  processEmail,
  sendTransactionalEmail,
} from '~/lib/mailchimp/audience';
import path from 'path';
import fs from 'fs';
const filePath = path.join(process.cwd(), 'public', 'social-preview-guides');
import socialPreviewGuide from '~/html/SocialPreviewGuide';

export default async function handleSendPlatformGuide(
  email: string,
  platform: string,
  url: string,
  sendTips: boolean,
) {
  const pdfBase64 = fs
    .readFileSync(`${filePath}/${platform}-Social-Preview-Guide.pdf`)
    .toString('base64');
  try {
    await createAudience('', email, url, sendTips);
    await sendTransactionalEmail({
      email,
      subject: `Here's your fix for ${platform}`,
      htmlContent: socialPreviewGuide(platform),
      attachment: [
        {
          name: `${platform}-social-preview-guide.pdf`,
          content: pdfBase64,
        },
      ],
    });
    return { code: 200, response: 'Email delievered' };
  } catch (err) {
    return { code: 500, response: 'Failed to send email' };
  }
}
