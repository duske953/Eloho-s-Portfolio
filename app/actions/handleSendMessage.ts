import nodemailer from 'nodemailer';
import { userDetailsSchema } from '~/components/ContactModal';
import { createAudience } from '~/lib/mailchimp/createAudience';

export async function sendMail(subject: string, text: string, email: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    connectionTimeout: +process.env.TIMED_OUT!,
    socketTimeout: +process.env.TIMED_OUT!,
    secure: false,
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject,
    html: `<p style="font-size: 1.2rem">${text} <br /> 
    <p style="margin-top:3.4rem">Message sent from ${email}</p>
    </p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err);
    if (err.errno === -3008)
      throw new Error(
        'No internet connection. Please check your internet settings'
      );
    if (err.code === 'ETIMEDOUT')
      throw new Error(
        'Looks like your have an unstable network. Please try again'
      );
    throw new Error('Something went wrong');
  }
}

export default async function handleSendMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  const isValid = await userDetailsSchema.isValid({
    name: data.name,
    email: data.email,
    message: data.message,
  });
  if (!isValid) return { status: 400, response: 'Please fill in all details' };
  try {
    await sendMail(
      `Important message from ${data.name}`,
      data.message,
      data.email
    );
    await createAudience(data.name, data.email);
    return { status: 200, response: 'Success' };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log(err);
    return { status: 400, response: err.message };
  }
}
