import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import nodemailer from 'nodemailer';

interface CareerApplicationPayload {
  position?: string;
  fullName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  yearsOfExperience?: string;
  motivation?: string;
}

const CAREER_DESTINATION_EMAIL = 'harshaldhake21@gmail.com';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

app.use(express.json());

app.post('/api/career-applications', async (req, res) => {
  const payload = req.body as CareerApplicationPayload;

  const requiredFields = [
    payload.position,
    payload.fullName,
    payload.emailAddress,
    payload.phoneNumber,
    payload.yearsOfExperience,
    payload.motivation,
  ];

  if (requiredFields.some((field) => !field || !String(field).trim())) {
    res.status(400).json({ message: 'Missing required application fields.' });
    return;
  }

  const host = process.env['SMTP_HOST'];
  const service = process.env['SMTP_SERVICE'];
  const port = Number(process.env['SMTP_PORT'] || '587');
  const user = process.env['SMTP_USER'];
  const pass = process.env['SMTP_PASS'];
  const secure = process.env['SMTP_SECURE'] === 'true';
  const from = process.env['SMTP_FROM'] || user;

  if ((!host && !service) || !user || !pass || !from) {
    res.status(500).json({
      message:
        'SMTP is not configured. Set SMTP_HOST or SMTP_SERVICE, SMTP_USER, SMTP_PASS and optional SMTP_FROM.',
    });
    return;
  }

  try {
    // Build transport config: 'service' (e.g. 'gmail') takes precedence over
    // manual host/port settings. Mixing both causes nodemailer to behave
    // unexpectedly, so we keep them mutually exclusive.
    const transportConfig = service
      ? { service, auth: { user, pass } }
      : { host, port, secure, auth: { user, pass } };

    const transporter = nodemailer.createTransport(transportConfig);

    await transporter.sendMail({
      from,
      to: CAREER_DESTINATION_EMAIL,
      replyTo: payload.emailAddress,
      subject: `Career Application - ${payload.position}`,
      text: [
        `Position: ${payload.position}`,
        `Full Name: ${payload.fullName}`,
        `Email Address: ${payload.emailAddress}`,
        `Phone Number: ${payload.phoneNumber}`,
        `Years of Experience: ${payload.yearsOfExperience}`,
        '',
        'Why do you want to join?',
        payload.motivation,
      ].join('\n'),
    });

    res.status(200).json({ message: 'Application sent successfully.' });
  } catch (error) {
    console.error('Failed to send career application email.', error);
    res.status(500).json({
      message:
        'Failed to send application email. Verify SMTP credentials, provider settings and sender permissions.',
    });
  }
});

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
