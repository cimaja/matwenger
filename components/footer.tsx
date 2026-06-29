import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.04)] px-6 sm:px-12 lg:px-[60px] py-12">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="font-mono text-xs text-[#444]">
          mathias.wendlinger // {new Date().getFullYear()}
        </div>
        <div className="flex gap-6">
          <Link
            href="https://www.linkedin.com/in/mathias-wendlinger/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#666] hover:text-accent-purple transition-colors duration-300"
          >
            LinkedIn
          </Link>
          <Link
            href="/Mathias-Wendlinger-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#666] hover:text-accent-purple transition-colors duration-300"
          >
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}
