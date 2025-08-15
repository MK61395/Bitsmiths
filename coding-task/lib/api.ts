import { HackerNewsStory, HackerNewsUser, StoryItem } from './types';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

// Utility function to format time ago
function formatTimeAgo(timestamp: number): string {
  const now = Math.floor(Date.now() / 1000);
  const diff = now - timestamp;
  
  if (diff < 60) return 'just now';
  if (diff < 3600) return `${Math.floor(diff / 60)} minute${Math.floor(diff / 60) === 1 ? '' : 's'} ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hour${Math.floor(diff / 3600) === 1 ? '' : 's'} ago`;
  if (diff < 2592000) return `${Math.floor(diff / 86400)} day${Math.floor(diff / 86400) === 1 ? '' : 's'} ago`;
  return `${Math.floor(diff / 2592000)} month${Math.floor(diff / 2592000) === 1 ? '' : 's'} ago`;
}

// Fetch top story IDs
export async function getTopStoryIds(): Promise<number[]> {
  try {
    const response = await fetch(`${BASE_URL}/topstories.json`, {
      next: { revalidate: 300 } // Revalidate every 5 minutes
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching top story IDs:', error);
    throw error;
  }
}

// Fetch individual story details
export async function getStory(id: number): Promise<HackerNewsStory> {
  try {
    const response = await fetch(`${BASE_URL}/item/${id}.json`, {
      next: { revalidate: 600 } // Revalidate every 10 minutes
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching story ${id}:`, error);
    throw error;
  }
}

// Fetch user details
export async function getUser(username: string): Promise<HackerNewsUser> {
  try {
    const response = await fetch(`${BASE_URL}/user/${username}.json`, {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error fetching user ${username}:`, error);
    throw error;
  }
}

// Fetch top stories with pagination
export async function getTopStories(page: number = 1, pageSize: number = 10): Promise<StoryItem[]> {
  try {
    const storyIds = await getTopStoryIds();
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageStoryIds = storyIds.slice(startIndex, endIndex);
    
    // Fetch all stories in parallel
    const stories = await Promise.all(
      pageStoryIds.map(id => getStory(id))
    );
    
    // Filter out non-story items and transform to our format
    const validStories = stories
      .filter(story => story && story.type === 'story' && story.url)
      .map((story, index) => ({
        id: story.id,
        title: story.title,
        url: story.url!,
        points: story.score,
        author: story.by,
        timeAgo: formatTimeAgo(story.time),
        comments: story.descendants || 0,
        rank: startIndex + index + 1
      }));
    
    return validStories;
  } catch (error) {
    console.error('Error fetching top stories:', error);
    throw error;
  }
}

// Get total number of stories available
export async function getTotalStoriesCount(): Promise<number> {
  try {
    const storyIds = await getTopStoryIds();
    return storyIds.length;
  } catch (error) {
    console.error('Error fetching total stories count:', error);
    return 0;
  }
}
