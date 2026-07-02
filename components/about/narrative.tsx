import { aboutNarrative } from '@/lib/data/about';

export function AboutNarrative() {
  return (
    <div className="max-w-[720px] mx-auto px-6 sm:px-10 py-8">
      {aboutNarrative.map((paragraph, i) => (
        <p
          key={i}
          className={`text-[19px] leading-[1.85] text-[#999] mb-7 ${
            i === 0 ? 'drop-cap' : ''
          }`}
        >
          {paragraph.text}
        </p>
      ))}
    </div>
  );
}
