'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
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

  return (
    <section id="contact" className="section bg-[#0B2D4E]">
      <div className="container">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-5">
            <p className="section-label text-[#1464F4] mb-3">{t('label')}</p>
            <div className="rule" />
            <h2
              className="text-[2rem] md:text-[2.6rem] text-white leading-tight"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              {t('title')}
            </h2>
            <p className="mt-4 text-[15px] text-white/50 leading-relaxed">{t('description')}</p>

            {/* Contact info */}
            <div className="mt-10 space-y-5">
              <div>
                <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-1">
                  {t('info.emailLabel')}
                </p>
                <a
                  href={`mailto:${t('info.email')}`}
                  className="text-[14px] text-white/70 hover:text-white transition-colors"
                >
                  {t('info.email')}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-1">
                  {t('info.locationLabel')}
                </p>
                <p className="text-[14px] text-white/70">{t('info.location')}</p>
              </div>
            </div>
          </div>

          {/* Form — on white card */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-[10px] font-semibold text-[#64748B] uppercase tracking-[0.15em]">
                      {t('form.name')}
                    </Label>
                    <Input
                      id="name"
                      placeholder={t('form.namePlaceholder')}
                      {...register('name')}
                      className="border-[#DDE3EC] bg-[#F7F8FA] rounded-none h-10 text-[13px] text-[#0B1526] placeholder:text-[#94A3B8] focus:border-[#1464F4] focus:bg-white transition-colors"
                    />
                    {errors.name && <p className="text-[11px] text-red-500">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-[10px] font-semibold text-[#64748B] uppercase tracking-[0.15em]">
                      {t('form.email')}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('form.emailPlaceholder')}
                      {...register('email')}
                      className="border-[#DDE3EC] bg-[#F7F8FA] rounded-none h-10 text-[13px] text-[#0B1526] placeholder:text-[#94A3B8] focus:border-[#1464F4] focus:bg-white transition-colors"
                    />
                    {errors.email && <p className="text-[11px] text-red-500">{errors.email.message}</p>}
                  </div>
                </div>

                {/* Company */}
                <div className="space-y-1.5">
                  <Label htmlFor="company" className="text-[10px] font-semibold text-[#64748B] uppercase tracking-[0.15em]">
                    {t('form.company')}
                  </Label>
                  <Input
                    id="company"
                    placeholder={t('form.companyPlaceholder')}
                    {...register('company')}
                    className="border-[#DDE3EC] bg-[#F7F8FA] rounded-none h-10 text-[13px] text-[#0B1526] placeholder:text-[#94A3B8] focus:border-[#1464F4] focus:bg-white transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-[10px] font-semibold text-[#64748B] uppercase tracking-[0.15em]">
                    {t('form.message')}
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder={t('form.messagePlaceholder')}
                    {...register('message')}
                    className="border-[#DDE3EC] bg-[#F7F8FA] rounded-none text-[13px] text-[#0B1526] placeholder:text-[#94A3B8] focus:border-[#1464F4] focus:bg-white transition-colors resize-none"
                  />
                  {errors.message && <p className="text-[11px] text-red-500">{errors.message.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#0B2D4E] text-white hover:bg-[#1464F4] rounded-none h-11 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors duration-200"
                >
                  {submitting ? t('form.submitting') : t('form.submit')}
                </Button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
