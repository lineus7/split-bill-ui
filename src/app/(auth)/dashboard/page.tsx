"use client";

import MobileBottomNav from "@/app/components/MobileBottomNav";
import { MobileHeader } from "@/app/components/MobileHeader";
import Link from "next/link";

export default function DashboardPage() {
    const bills = [
        {
            id: "1",
            name: "Dinner with Team",
            date: "Sep 15, 2025",
            total: "Rp 450.000",
        },
        {
            id: "2",
            name: "Weekend Trip",
            date: "Sep 08, 2025",
            total: "Rp 1.250.000",
        },
        {
            id: "3",
            name: "Groceries Run",
            date: "Sep 05, 2025",
            total: "Rp 320.000",
        },
    ];

    return (
        <div className="min-h-dvh flex flex-col bg-highlight-300 pb-24">
            <MobileHeader title="My Bills" />

            <main className="flex-1 p-4 space-y-4">
                {/* Search Bar */}
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
                        placeholder="Search bills"
                        className="w-full rounded-xl border border-light-600 bg-light-300 pl-10 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                    />
                </div>

                {/* Bills List */}
                <div className="space-y-3">
                    {bills.map((b) => (
                        <Link
                            href={`/bills/${b.id}`}
                            key={b.id}
                            className="block"
                        >
                            <article className="rounded-2xl border border-light-600 bg-light-300 p-4 hover:bg-light-400 transition-colors">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-sm font-semibold">
                                            {b.name}
                                        </h3>
                                        <p className="text-xs text-dark-400 mt-0.5">
                                            {b.date}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-semibold text-dark-700">
                                            {b.total}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </main>

            <MobileBottomNav active="dashboard" />
        </div>
    );
}
