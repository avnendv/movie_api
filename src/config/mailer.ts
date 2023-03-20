import SMTPTransport from 'nodemailer/lib/smtp-transport';

export const transportConfig: SMTPTransport.Options = {
  host: process.env.MAIL_SMTP,
  port: (process.env.MAIL_PORT || 465) as number,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};
