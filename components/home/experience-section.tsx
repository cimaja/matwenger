import { experienceEntries } from '@/lib/data/experience';

export function ExperienceSection() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.04)] px-6 sm:px-12 lg:px-[60px] py-[120px]">
      <h2 className="text-[44px] text-center text-white mb-[60px]">
        Experience
      </h2>

      <div className="max-w-[900px] mx-auto">
        {experienceEntries.map((entry) => (
          <div
            key={entry.dateRange}
            className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-10 py-9 border-t border-[rgba(255,255,255,0.05)]"
          >
            <div className="font-mono text-[13px] text-[#8A8A8A] pt-1">
              {entry.dateRange}
            </div>
            <div>
              <div className="text-[18px] font-semibold text-white mb-1 font-sans">
                {entry.role}
              </div>
              <div className="text-[14px] text-accent-purple mb-3.5">
                {entry.company}
              </div>
              <ul className="list-none p-0">
                {entry.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-[14px] text-[#888] py-1 pl-4 relative leading-[1.6] before:content-[''] before:absolute before:left-0 before:top-[12px] before:w-1 before:h-1 before:rounded-full before:bg-[#333]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
              {entry.badges.length > 0 && (
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {entry.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-block px-3 py-1 bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.15)] rounded-full font-mono text-[11px] text-accent-green"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
