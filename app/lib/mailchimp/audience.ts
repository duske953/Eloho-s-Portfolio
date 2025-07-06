import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export async function createAudience(
  audienceName: string,
  audienceEmail: string
) {
  const splitName = audienceName.split(' ');
  const FNAME = splitName[0];
  const LNAME = splitName[1] || '';
  await mailchimp.lists.addListMember(
    process.env.MAILCHIMP_AUDIENCE_ID as string,
    {
      email_address: audienceEmail,
      merge_fields: {
        FNAME,
        LNAME,
      },
      status: 'subscribed',
    }
  );
  return { status: 200, response: 'Success' };
}

export async function audienceExists(audienceEmail: string) {
  try {
    const response = await mailchimp.lists.getListMember(
      process.env.MAILCHIMP_AUDIENCE_ID as string,
      audienceEmail
    );

    return response.status === 'subscribed';
  } catch (error) {
    if (error.status === 404) {
      return false;
    }
    throw error;
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
    console.log(err);
    return { status: 500, response: 'Something went wrong' };
  }
}
