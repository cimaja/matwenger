export function PullQuote() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.04)] py-20 sm:py-28">
      <div className="max-w-[900px] mx-auto px-6 sm:px-12 text-center">
        <blockquote className="font-serif text-[clamp(24px,3.5vw,32px)] font-normal italic leading-[1.4] text-white mb-6">
          &ldquo;Brings a rare level of patience, clarity, and steadiness to what is likely the most challenging design leadership role on the team. One of the very first design leaders to lean into AI and learn in public.&rdquo;
        </blockquote>
        <cite className="not-italic text-[14px] text-[#888]">
          Samantha Neufeld, Principal Research Manager at Microsoft
        </cite>
      </div>
    </section>
  );
}
