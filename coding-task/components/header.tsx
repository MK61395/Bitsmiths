import Link from "next/link"

export function Header() {
  return (
    <header className="bg-[#ff6600] px-2 py-1">
      <div className="max-w-5xl mx-auto flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white border border-white"></div>
          <Link href="/" className="text-black font-bold text-sm">
            Hacker News
          </Link>
        </div>

        <nav className="flex items-center gap-4 text-black text-sm">
          <Link href="/new" className="hover:underline">
            new
          </Link>
          <span>|</span>
          <Link href="/past" className="hover:underline">
            past
          </Link>
          <span>|</span>
          <Link href="/comments" className="hover:underline">
            comments
          </Link>
          <span>|</span>
          <Link href="/ask" className="hover:underline">
            ask
          </Link>
          <span>|</span>
          <Link href="/show" className="hover:underline">
            show
          </Link>
          <span>|</span>
          <Link href="/jobs" className="hover:underline">
            jobs
          </Link>
          <span>|</span>
          <Link href="/submit" className="hover:underline">
            submit
          </Link>
        </nav>

        <div className="ml-auto">
          <Link href="/login" className="text-black text-sm hover:underline">
            login
          </Link>
        </div>
      </div>
    </header>
  )
}
