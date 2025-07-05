import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const footerContactInfo = {
  company: 'Mailchimp',
  address1: '405 N Angier Ave NE',
  city: 'Atlanta',
  state: 'GA',
  zip: '30308',
  country: 'US',
};

const campaignDefaults = {
  from_name: "Gettin' Together",
  from_email: 'kennyduske@gmail.com',
  subject: 'JS Developers Meetup',
  language: 'EN_US',
};

export async function createAudience(
  audienceName: string,
  audienceEmail: string
) {
  await mailchimp.lists.createList({
    name: 'js',
    contact: footerContactInfo,
    permission_reminder: 'permission_reminder',
    email_type_option: true,
    campaign_defaults: campaignDefaults,
  });
}
