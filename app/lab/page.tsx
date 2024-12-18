'use client';

import { motion } from 'framer-motion';
import { GitHubRepoCard } from '@/components/lab/github-repo-card';
import { getGitHubRepos, type GitHubRepo } from '@/lib/github';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

function RepoSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-[125px] w-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default function LabPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function fetchRepos() {
    try {
      setLoading(true);
      const data = await getGitHubRepos('cimaja');
      setRepos(data);
    } catch (error) {
      console.error('Error fetching repos:', error);
    } finally {
      setLoading(false);
    }
  }

  async function handleRefresh() {
    setRefreshing(true);
    try {
      await fetch('/api/revalidate?path=/lab', { method: 'POST' });
      await fetchRepos();
    } catch (error) {
      console.error('Error refreshing:', error);
    } finally {
      setRefreshing(false);
    }
  }

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-4xl font-bold">Lab</h1>
            <Button
              variant="outline"
              size="icon"
              onClick={handleRefresh}
              disabled={refreshing || loading}
              className={refreshing ? 'animate-spin' : ''}
            >
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my personal projects and experiments on GitHub
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array(6).fill(0).map((_, i) => (
              <RepoSkeleton key={i} />
            ))
          ) : (
            repos.map((repo) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <GitHubRepoCard repo={repo} />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}