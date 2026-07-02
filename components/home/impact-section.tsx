import { impactMetrics } from '@/lib/data/impact';

export function ImpactSection() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.04)] px-6 sm:px-12 lg:px-[60px] py-[120px]">
      <h2 className="text-[44px] text-center text-white mb-[60px]">Impact</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
        {impactMetrics.map((item) => (
          <div
            key={item.title}
            className="p-8 bg-surface border border-[rgba(255,255,255,0.05)] rounded-2xl transition-all duration-300 hover:border-[rgba(16,185,129,0.2)]"
          >
            <div className="font-mono text-[36px] font-semibold text-accent-green mb-2">
              {item.metric}
            </div>
            <div className="text-[15px] font-semibold text-white mb-2">
              {item.title}
            </div>
            <div className="text-[13px] text-[#A3A3A3] leading-[1.6]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
