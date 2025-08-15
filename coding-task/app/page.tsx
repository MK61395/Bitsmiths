import { Metadata } from "next";
import { Header } from "@/components/header";
import { StoryList } from "@/components/story-list";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "HackerNews Clone - Top Stories",
  description: "A simplified clone of HackerNews featuring top stories from the tech community. Built with Next.js and TypeScript.",
  keywords: ["hackernews", "tech news", "programming", "technology", "startups"],
  authors: [{ name: "HackerNews Clone" }],
  openGraph: {
    title: "HackerNews Clone - Top Stories",
    description: "A simplified clone of HackerNews featuring top stories from the tech community.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f6f6ef] overflow-x-hidden">
      <Header />
      <main className="max-w-5xl mx-auto px-2 sm:px-4 overflow-x-hidden">
        <StoryList />
      </main>
      <Footer />
    </div>
  );
}
