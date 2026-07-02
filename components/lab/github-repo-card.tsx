import { GitHubRepo } from '@/lib/github';
import { CalendarIcon, GitForkIcon, StarIcon } from 'lucide-react';
import Link from 'next/link';

export function GitHubRepoCard({ repo }: { repo: GitHubRepo }) {
  const updatedAt = new Date(repo.updated_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Link
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <div className="h-full rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[#111116] transition-all duration-300 hover:border-[rgba(147,51,234,0.3)] hover:-translate-y-1 flex flex-col p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-white font-sans">{repo.name}</h3>
          <div className="flex items-center gap-4 text-[#888]">
            <div className="flex items-center gap-1">
              <StarIcon className="w-4 h-4" />
              <span className="text-sm">{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitForkIcon className="w-4 h-4" />
              <span className="text-sm">{repo.forks_count}</span>
            </div>
          </div>
        </div>
        <p className="text-[13px] text-[#A3A3A3] mb-4 leading-[1.6] flex-1">{repo.description || 'No description available'}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {repo.language && (
            <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[rgba(147,51,234,0.1)] text-accent-purple border border-[rgba(147,51,234,0.15)]">
              {repo.language}
            </span>
          )}
          {repo.topics?.map((topic) => (
            <span key={topic} className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-[rgba(255,255,255,0.05)] text-[#888] border border-[rgba(255,255,255,0.1)]">
              {topic}
            </span>
          ))}
        </div>
        <div className="flex items-center text-[12px] text-[#8A8A8A] font-mono">
          <CalendarIcon className="w-3.5 h-3.5 mr-1.5" />
          <span>Updated {updatedAt}</span>
        </div>
      </div>
    </Link>
  );
}
