import nodemailer from 'nodemailer';
import { transportConfig } from '@/config';
import logger from '@/logs/winston';

export const sendMail = (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport(transportConfig);

  const mainOptions = {
    to: to,
    subject: subject,
    html: html,
  };
  transporter.sendMail(mainOptions, function (err) {
    if (err) {
      logger.error(err);
    }
  });
};
