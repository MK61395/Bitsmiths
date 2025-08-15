'use client';

import { useState, useEffect } from "react";
import { StoryItem } from "./story-item";
import { LoadingSkeleton } from "./ui/loading-skeleton";
import { getTopStories, getTotalStoriesCount } from "@/lib/api";
import { StoryItem as StoryItemType } from "@/lib/types";

export function StoryList() {
  const [stories, setStories] = useState<StoryItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const pageSize = 10;

  useEffect(() => {
    loadStories();
  }, []);

  const loadStories = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedStories = await getTopStories(1, pageSize);
      setStories(fetchedStories);
      setPage(1);
      
      // Check if there are more stories
      const totalCount = await getTotalStoriesCount();
      setHasMore(totalCount > pageSize);
    } catch (err) {
      setError('Failed to load stories. Please try again.');
      console.error('Error loading stories:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (loadingMore || !hasMore) return;
    
    try {
      setLoadingMore(true);
      const nextPage = page + 1;
      const moreStories = await getTopStories(nextPage, pageSize);
      
      if (moreStories.length > 0) {
        setStories(prev => [...prev, ...moreStories]);
        setPage(nextPage);
        
        // Check if we've reached the end
        if (moreStories.length < pageSize) {
          setHasMore(false);
        }
      } else {
        setHasMore(false);
      }
    } catch (err) {
      setError('Failed to load more stories. Please try again.');
      console.error('Error loading more stories:', err);
    } finally {
      setLoadingMore(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#f6f6ef] px-2 py-2">
        <LoadingSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#f6f6ef] px-2 py-2">
        <div className="text-center py-8">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={loadStories}
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f6f6ef] px-2 py-2">
      <table className="w-full story-table">
        <tbody>
          {stories.map((story) => (
            <StoryItem key={story.id} story={story} rank={story.rank} />
          ))}
        </tbody>
      </table>

      {hasMore && (
        <div className="mt-4 px-2 text-center">
          <button
            onClick={loadMore}
            disabled={loadingMore}
            className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadingMore ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}
