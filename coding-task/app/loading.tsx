import { LoadingSkeleton } from "@/components/ui/loading-skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f6f6ef]">
      <div className="max-w-5xl mx-auto">
        <LoadingSkeleton />
      </div>
    </div>
  );
}
