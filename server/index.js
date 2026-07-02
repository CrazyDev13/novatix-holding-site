import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === 'production';

const requiredEnv = ['SENDGRID_API_KEY', 'SENDGRID_FROM_EMAIL', 'SENDGRID_TO_EMAIL'];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);

if (missingEnv.length > 0) {
  console.warn(`Warning: Missing env vars: ${missingEnv.join(', ')}`);
  console.warn('Contact form emails will fail until .env is configured.');
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

app.use(cors({ origin: isProduction ? process.env.CLIENT_URL : true }));
app.use(express.json({ limit: '32kb' }));

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

app.post('/api/contact', async (req, res) => {
  if (missingEnv.length > 0) {
    return res.status(503).json({
      error: 'Email service is not configured. Please set SendGrid environment variables.',
    });
  }

  const { name, email, service, message } = req.body ?? {};

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.trim())) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const safeName = name.trim();
  const safeEmail = email.trim();
  const safeService = service?.trim() || 'Not specified';
  const safeMessage = message.trim();

  const msg = {
    to: process.env.SENDGRID_TO_EMAIL,
    from: {
      email: process.env.SENDGRID_FROM_EMAIL,
      name: process.env.SENDGRID_FROM_NAME || 'Novatrix Holding',
    },
    replyTo: safeEmail,
    subject: `[Novatrix Holding] New inquiry from ${safeName}`,
    text: [
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      `Service: ${safeService}`,
      '',
      'Message:',
      safeMessage,
    ].join('\n'),
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
      <p><strong>Service:</strong> ${escapeHtml(safeService)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(safeMessage)}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return res.json({ success: true, message: 'Your message has been sent successfully.' });
  } catch (error) {
    console.error('SendGrid error:', error?.response?.body || error);
    return res.status(500).json({
      error: 'Failed to send message. Please try again later or email us directly.',
    });
  }
});

if (isProduction) {
  const distPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(distPath));
  app.get('/{*path}', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
