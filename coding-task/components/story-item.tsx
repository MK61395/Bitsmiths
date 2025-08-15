import Link from "next/link"

interface Story {
  id: number
  title: string
  url: string
  points: number
  author: string
  timeAgo: string
  comments: number
}

interface StoryItemProps {
  story: Story
  rank: number
}

function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace("www.", "")
  } catch {
    return url
  }
}

export function StoryItem({ story, rank }: StoryItemProps) {
  return (
    <>
      <tr>
        <td className="text-right text-[#828282] text-xs sm:text-sm pr-1 align-top pt-1 w-8 sm:w-auto">{rank}.</td>
        <td className="w-3 sm:w-4 align-top pt-1">
          <div className="w-0 h-0 border-l-[3px] sm:border-l-[4px] border-l-transparent border-r-[3px] sm:border-r-[4px] border-r-transparent border-b-[5px] sm:border-b-[7px] border-b-[#828282] cursor-pointer hover:border-b-[#ff6600]"></div>
        </td>
        <td className="pl-1">
          <div className="flex flex-col sm:flex-row sm:items-start gap-1">
            <Link
              href={story.url}
              className="text-black text-xs sm:text-sm hover:underline leading-tight sm:leading-4 break-words"
              target="_blank"
              rel="noopener noreferrer"
            >
              {story.title}
            </Link>
            <span className="text-[#828282] text-xs">({getDomain(story.url)})</span>
          </div>
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td className="pl-1 pb-1">
          <div className="text-[#828282] text-xs">
            {story.points} points by{" "}
            <Link href={`/user/${story.author}`} className="hover:underline">
              {story.author}
            </Link>{" "}
            <Link href={`/item/${story.id}`} className="hover:underline">
              {story.timeAgo}
            </Link>{" "}
            |{" "}
            <Link href={`/item/${story.id}`} className="hover:underline">
              {story.comments} comments
            </Link>
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan={3} className="h-1"></td>
      </tr>
    </>
  )
}
