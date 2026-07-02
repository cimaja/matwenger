import { storyData } from '@/lib/data/story';

export function StorySection() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.04)]">
      <div className="max-w-[720px] mx-auto px-6 sm:px-10 py-[120px]">
        {storyData.paragraphs.map((paragraph, i) => (
          <p
            key={i}
            className={`text-[19px] leading-[1.85] text-[#999] mb-7 ${
              i === 0 ? 'drop-cap' : ''
            }`}
          >
            {paragraph}
          </p>
        ))}

        {/* Highlight strip */}
        <div className="font-mono text-[15px] text-accent-purple tracking-[0.02em] mt-10 pt-6 border-t border-[rgba(255,255,255,0.06)] flex gap-10">
          {storyData.highlights.map((item) => (
            <div key={item.label}>
              {item.value}
              <span className="block text-[#8A8A8A] text-[11px] uppercase tracking-[0.1em] mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
