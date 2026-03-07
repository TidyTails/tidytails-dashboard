#!/usr/bin/env node
/**
 * Send email via Gmail SMTP
 * Usage: node send-email.js --to "email@example.com" --subject "Subject" --body "Body text"
 *        node send-email.js --to "email" --subject "Subject" --html "<h1>HTML body</h1>"
 */

require('dotenv').config({ path: require('path').join(__dirname, '..', '.env') });
const nodemailer = require('nodemailer');

const args = process.argv.slice(2);
const getArg = (name) => {
  const idx = args.indexOf(`--${name}`);
  return idx !== -1 ? args[idx + 1] : null;
};

const to = getArg('to');
const subject = getArg('subject');
const body = getArg('body');
const html = getArg('html');
const from = getArg('from') || process.env.GMAIL_USER;
const replyTo = getArg('reply-to');

if (!to || !subject || (!body && !html)) {
  console.error('Usage: node send-email.js --to "email" --subject "Subject" --body "Body" [--html "<html>"] [--from "name"] [--reply-to "email"]');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const mailOptions = {
  from: from,
  to: to,
  subject: subject,
  replyTo: replyTo || from,
};

if (html) {
  mailOptions.html = html;
  if (body) mailOptions.text = body; // fallback text
} else {
  mailOptions.text = body;
}

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
  console.log('Email sent:', info.messageId);
  console.log('To:', to);
  console.log('Subject:', subject);
});
