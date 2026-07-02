import Image from 'next/image';
import { testimonials } from '@/lib/testimonials-data';

export function TestimonialsScroll() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.04)] py-[120px] overflow-hidden">
      <h2 className="text-[44px] text-center text-white mb-[60px] px-6 sm:px-12 lg:px-[60px]">
        What People Say
      </h2>

      <div
        className="relative overflow-hidden motion-reduce:overflow-x-auto"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="flex gap-6 motion-safe:animate-scroll-testimonials hover:[animation-play-state:paused] w-max">
          {/* Render twice for seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={`${t.author}-${i}`}
              className="min-w-[380px] max-w-[380px] p-8 bg-surface border border-[rgba(255,255,255,0.06)] rounded-2xl flex-shrink-0 flex flex-col transition-all duration-300 hover:border-[rgba(147,51,234,0.2)]"
            >
              <p className="text-[14px] text-[#999] leading-[1.75] italic mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-[rgba(147,51,234,0.15)] flex items-center justify-center text-[12px] font-semibold text-accent-purple">
                  {t.image ? (
                    <Image
                      src={t.image}
                      alt={t.author}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    t.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                  )}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#e0e0e0]">
                    {t.author}
                  </div>
                  <div className="text-[12px] text-[#8A8A8A]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
