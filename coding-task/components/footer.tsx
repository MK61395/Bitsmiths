import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t-2 border-[#ff6600] mt-8 py-4">
      <div className="max-w-5xl mx-auto px-2">
        <div className="text-center text-xs text-[#828282] space-x-2">
          <Link href="/guidelines" className="hover:underline">
            Guidelines
          </Link>
          <span>|</span>
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
          <span>|</span>
          <Link href="/lists" className="hover:underline">
            Lists
          </Link>
          <span>|</span>
          <Link href="/api" className="hover:underline">
            API
          </Link>
          <span>|</span>
          <Link href="/security" className="hover:underline">
            Security
          </Link>
          <span>|</span>
          <Link href="/legal" className="hover:underline">
            Legal
          </Link>
          <span>|</span>
          <Link href="/apply" className="hover:underline">
            Apply to YC
          </Link>
          <span>|</span>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        <div className="text-center mt-4">
          <div className="text-xs text-[#828282]">
            Search: <input type="text" className="border border-[#828282] px-1 py-0 text-xs w-32" placeholder="" />
          </div>
        </div>
      </div>
    </footer>
  )
}
