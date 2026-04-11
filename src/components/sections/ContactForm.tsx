'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { toast } from 'sonner';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  consent: z.literal(true, { error: 'Consent required' }),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const t = useTranslations('contact');
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    try {
      const { consent: _, ...payload } = data;
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      toast.success(t('form.success'));
      reset();
    } catch {
      toast.error(t('form.error'));
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 text-white placeholder-white/30 transition-all text-sm';

  return (
    <section id="contact" className="min-h-screen flex items-center px-4 sm:px-6 py-24 sm:py-32 bg-white/[0.01] border-t border-white/5 relative overflow-hidden text-white">
      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4 sm:mb-6">
            {t('title')}
          </h2>
          <p className="text-white/70 text-lg sm:text-xl font-light max-w-2xl mx-auto px-4 sm:px-0">
            {t('description')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8" noValidate>

              {/* Name + Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <label htmlFor="name" className="block mb-3 text-sm font-medium text-white/80">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder={t('form.namePlaceholder')}
                    {...register('name')}
                    className={inputClass}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-2">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-3 text-sm font-medium text-white/80">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t('form.emailPlaceholder')}
                    {...register('email')}
                    className={inputClass}
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-2">{errors.email.message}</p>}
                </div>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block mb-3 text-sm font-medium text-white/80">
                  {t('form.company')}
                </label>
                <input
                  type="text"
                  id="company"
                  placeholder={t('form.companyPlaceholder')}
                  {...register('company')}
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-3 text-sm font-medium text-white/80">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder={t('form.messagePlaceholder')}
                  {...register('message')}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && <p className="text-xs text-red-400 mt-2">{errors.message.message}</p>}
              </div>

              {/* Privacy consent (152-FZ) */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    {...register('consent')}
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#1e3a5f] focus:ring-white/30 focus:ring-offset-0 cursor-pointer flex-shrink-0"
                  />
                  <span className="text-white/60 text-xs sm:text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                    {t('form.consent')}{' '}
                    <a href="/privacy" className="text-white/80 underline underline-offset-2 hover:text-white transition-colors">
                      {t('form.consentLink')}
                    </a>
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-xs text-red-400 mt-2">{t('form.consentError')}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full px-8 py-5 bg-[#1e3a5f] text-white font-medium rounded-xl hover:bg-[#1e3a5f]/90 transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? t('form.submitting') : t('form.submit')}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
