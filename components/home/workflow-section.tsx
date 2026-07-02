import { workflowSteps, workflowDescription } from '@/lib/data/workflow';

export function WorkflowSection() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.04)] px-6 sm:px-12 lg:px-[60px] py-[120px]">
      <h2 className="text-[44px] text-center text-white mb-5">How I Work</h2>
      <p className="text-center text-[17px] text-[#A3A3A3] max-w-[700px] mx-auto mb-20 leading-[1.7]">
        {workflowDescription}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] max-w-[1100px] mx-auto">
        {workflowSteps.map((step, i) => (
          <div
            key={step.number}
            className={`p-7 sm:p-9 bg-surface border border-[rgba(255,255,255,0.05)] transition-all duration-300 hover:border-[rgba(147,51,234,0.2)] hover:bg-surface-hover ${
              i === 0
                ? 'rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none'
                : i === workflowSteps.length - 1
                ? 'rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none'
                : ''
            }`}
          >
            <div className="font-mono text-[11px] text-[#8A8A8A] mb-5">
              {step.number}
            </div>
            <h3 className="text-[17px] font-semibold text-white mb-2.5 font-sans">
              {step.title}
            </h3>
            <p className="text-[13px] text-[#A3A3A3] leading-[1.7]">
              {step.description}
            </p>
            <div className="mt-3.5 flex flex-wrap gap-1">
              {step.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-block px-2.5 py-0.5 bg-[rgba(147,51,234,0.08)] border border-[rgba(147,51,234,0.15)] rounded-full font-mono text-[11px] text-accent-purple"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
