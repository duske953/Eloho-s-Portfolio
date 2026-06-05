import axios from 'axios';
function contactOptions(method: string, identifier: string, params: any = {}) {
  return {
    method,
    url: `https://api.brevo.com/v3/${identifier}`,
    params,
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': process.env.BREVO_API_KEY,
    },
  };
}

export async function createAudience(
  audienceName: string,
  audienceEmail: string,
  url?: string,
  sendTips: boolean = false,
) {
  try {
    const splitName = audienceName.split(' ');
    const FNAME = splitName[0];
    const LNAME = splitName[1] || '';
    await axios.request({
      ...contactOptions('POST', 'contacts'),
      data: {
        email: audienceEmail,
        updateEnabled: true,
        attributes: { FNAME, LNAME, url },
        listIds: sendTips ? [5] : [],
      },
    });

    return { status: 200, response: 'Success' };
  } catch (err) {
    return { status: 500, response: 'Something went wrong' };
  }
}

export async function audienceExists(audienceEmail: string) {
  try {
    await axios.request({
      ...contactOptions('GET', `contacts/${audienceEmail}`, {
        identifierType: 'email_id',
      }),
    });

    return true;
  } catch (err: any) {
    if (err.response?.status === 404) return false;
    throw err;
  }
}

export async function processEmail(email: string, sendTips: boolean = false) {
  try {
    if (!email)
      return { status: 400, response: 'Please provide your email address' };

    await createAudience('', email, 'https://eloho', sendTips);
    return { status: 200, response: 'success' };
  } catch (err) {
    return { status: 500, response: 'Something went wrong' };
  }
}

export async function sendTransactionalEmail({
  email,
  subject,
  htmlContent,
  attachment,
}: {
  email: string;
  subject: string;
  htmlContent: string;
  attachment: { content: string; name: string }[] | null;
}) {
  try {
    await axios.request({
      ...contactOptions('POST', 'smtp/email'),
      data: {
        sender: { name: 'Eloho Kennedy', email: 'web@eloho.dev' },
        to: [{ email }],
        subject,
        htmlContent,
        attachment,
      },
    });
    return { status: 200, response: 'Email sent' };
  } catch (err) {
    console.log(err);
    throw new Error('Failed to send email');
  }
}
