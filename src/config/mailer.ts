import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { MAIL_PASS, MAIL_PORT, MAIL_SMTP, MAIL_USER } from './env';

export const transportConfig: SMTPTransport.Options = {
  host: MAIL_SMTP,
  port: (MAIL_PORT || 465) as number,
  secure: true,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};
