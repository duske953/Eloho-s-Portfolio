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
  audienceEmail: string
) {
  try {
    const splitName = audienceName.split(' ');
    const FNAME = splitName[0];
    const LNAME = splitName[1] || '';

    await axios.request({
      ...contactOptions('POST', 'contacts'),
      data: { email: audienceEmail, attributes: { FNAME, LNAME } },
    });

    return { status: 200, response: 'Success' };
  } catch (err) {
    console.log(err);
    throw err;
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
  } catch (err) {
    if (err.status === 404) return false;
    throw err;
  }
}

export async function freeAudit(email: string) {
  try {
    if (!email)
      return { status: 400, response: 'Please provide your email address' };
    if (await audienceExists(email)) {
      return { status: 200, response: 'success' };
    }
    await createAudience('', email);
    return { status: 200, response: 'success' };
  } catch (err) {
    return { status: 500, response: 'Something went wrong' };
  }
}
