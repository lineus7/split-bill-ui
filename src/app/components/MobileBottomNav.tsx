import Link from "next/link";

type MobileBottomNavProps = {
  active?: "dashboard" | "add" | "profile";
};

export default function MobileBottomNav({ active = "dashboard" }: MobileBottomNavProps) {
  return (
    <nav
      aria-label="Bottom Navigation"
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-20 w-full max-w-md bg-light-300 border-t"
    >
      <div className="relative h-16">
        {/* Rail */}
        <div className="absolute inset-0 flex items-center justify-between px-8">
          {/* Dashboard */}
          <Link
            href="/dashboard"
            className="flex flex-col items-center justify-center gap-1"
          >
            <svg
              className={`h-6 w-6 ${active === "dashboard" ? "text-highlight-700" : "text-dark-400"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path strokeWidth="2" d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-10.5z" />
            </svg>
            <span className={`text-xs ${active === "dashboard" ? "text-highlight-700 font-medium" : "text-dark-400"}`}>
              Dashboard
            </span>
          </Link>

          {/* Profile */}
          <Link
            href="/profile"
            className="flex flex-col items-center justify-center gap-1"
          >
            <svg
              className={`h-6 w-6 ${active === "profile" ? "text-highlight-700" : "text-dark-400"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path strokeWidth="2" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-5 0-9 2.5-9 5v1h18v-1c0-2.5-4-5-9-5Z" />
            </svg>
            <span className={`text-xs ${active === "profile" ? "text-highlight-700 font-medium" : "text-dark-400"}`}>
              Profile
            </span>
          </Link>
        </div>

        {/* Center Add (prominent) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Link
            href="/add-bill/step1"
            className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-highlight-700 text-light-300 shadow-md -translate-y-5 border-4 border-light-300"
          >
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" d="M12 5v14M5 12h14" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
