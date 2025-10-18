"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function DashboardSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("search", term);
        } else {
            params.delete("search");
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-300">
                <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <circle cx="11" cy="11" r="7" strokeWidth="2" />
                    <path strokeWidth="2" d="M21 21l-4.3-4.3" />
                </svg>
            </span>
            <input
                type="search"
                placeholder={"Search bills"}
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get("search")?.toString()}
                className="w-full rounded-xl border border-light-600 bg-light-300 pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
            />
        </div>
    );
}
