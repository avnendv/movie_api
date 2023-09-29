import path from 'path';
import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const logger = winston.createLogger({
  // log formats are combined via format.combine
  format: winston.format.combine(
    winston.format.splat(),
    // Time format for log
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    // add color
    winston.format.colorize(),
    // set the format of the log
    winston.format.printf((log) => {
      // if the log is an error, display the stack trace but do not display the log message
      if (log.stack) return `[${log.timestamp}] [${log.level}] ${log.stack}`;
      return `[${log.timestamp}] [${log.level}] ${log.message}`;
    })
  ),
  transports: [
    // display log through console
    new winston.transports.Console(),
    // Set up writing errors to file
    new winston.transports.File({
      level: 'error',
      filename: path.join(__dirname, '..', 'logs', 'logs.log'),
      maxsize: 5242880,
    }),
    new DailyRotateFile({
      filename: path.join(__dirname, '..', 'logs/date', `%DATE%.log`),
      datePattern: 'YYYY-MM-DD',
    }),
  ],
});

export default logger;
