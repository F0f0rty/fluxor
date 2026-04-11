import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  company: z.string().max(200).optional(),
  message: z.string().min(10).max(2000),
});

// Simple in-memory rate limiter (per IP, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;

  entry.count += 1;
  return true;
}

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed.', details: result.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, company, message } = result.data;

  const date = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  try {
    await transporter.sendMail({
      from: `"Fluxor Consulting" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Новая заявка — ${name}`,
      text: [
        `Имя: ${name}`,
        `Email: ${email}`,
        `Компания: ${company || '—'}`,
        ``,
        `Сообщение:`,
        message,
        ``,
        `Дата: ${date} (МСК)`,
      ].join('\n'),
    });
  } catch (err) {
    console.error('[Contact Form] Email error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
