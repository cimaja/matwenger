'use client';

import { heroData } from '@/lib/data/hero';
import { animation } from '@/lib/design-system';

export function Terminal() {
  const lines = heroData.terminalLines;
  const baseDelay = 0.5;

  return (
    <div className="bg-[rgba(0,0,0,0.3)] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden">
      {/* Window chrome */}
      <div className="px-4 py-3 bg-[rgba(255,255,255,0.03)] flex items-center gap-1.5 border-b border-[rgba(255,255,255,0.06)]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c940]" />
        <span className="font-mono text-[11px] text-[#8A8A8A] ml-3">terminal</span>
      </div>

      {/* Content */}
      <div className="p-5 font-mono text-[13px] leading-[1.9] text-[#888] min-h-[340px]">
        {lines.map((line, i) => {
          const delay = baseDelay + i * animation.terminalLineDelay;
          const isLast = i === lines.length - 1;

          return (
            <div
              key={i}
              className="terminal-line"
              style={{
                animationDelay: `${delay}s`,
              }}
            >
              <span
                className={`typed ${isLast ? 'with-cursor' : ''}`}
                style={{
                  animationDelay: `${delay}s`,
                }}
              >
                {line.type === 'blank' && <>&nbsp;</>}
                {line.type === 'prompt' && (
                  <>
                    <span className="prompt">$</span>{' '}
                    <span className="cmd">{line.text}</span>
                  </>
                )}
                {line.type === 'year' && (
                  <>
                    <span className="number">{line.year}</span>{' '}
                    <span className="cmd">{line.text}</span>
                  </>
                )}
                {line.type === 'indent' && (
                  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{line.text}</>
                )}
                {line.type === 'success' && (
                  <>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="success">{line.text}</span>
                  </>
                )}
                {line.type === 'final' && (
                  <span className="success">{line.text}</span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
