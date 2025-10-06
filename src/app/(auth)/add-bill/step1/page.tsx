import MobileBottomNav from "@/app/components/MobileBottomNav";
import { MobileHeader } from "@/app/components/MobileHeader";

const participants = ["Alice", "Bob", "Charlie", "Diana", "Evan"];

export default function AddBillStep1Page() {
    return (
        <div className="min-h-dvh flex flex-col bg-highlight-300 pb-28">
            <MobileHeader
                title="Create Bill"
                backUrl="/dashboard"
                showBackButton
            />

            <main className="flex-1 p-4 space-y-4">
                {/* Bill Name */}
                <div className="space-y-1">
                    <label className="block text-sm text-dark-400">
                        Bill Name
                    </label>
                    <input
                        type="text"
                        placeholder="Weekend Trip"
                        className="w-full rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                    />
                </div>

                {/* Participants */}
                <section>
                    <h2 className="text-sm font-semibold mb-2">Participants</h2>
                    {/* Add Person */}
                    <div className="flex items-center gap-2 mb-2">
                        <input
                            type="text"
                            placeholder="Add person by name or email"
                            className="flex-1 rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                        />
                        <button
                            type="button"
                            className="rounded-xl bg-highlight-700 text-light-300 px-4 py-3 text-sm font-medium"
                        >
                            Add
                        </button>
                    </div>
                    <div className="rounded-2xl border border-light-600 bg-light-300 divide-y divide-light-600">
                        {participants.map((name) => (
                            <label
                                key={name}
                                className="flex items-center justify-between px-4 py-3"
                            >
                                <span className="text-sm">{name}</span>
                                <input
                                    type="checkbox"
                                    className="h-5 w-5 accent-highlight-700"
                                />
                            </label>
                        ))}
                    </div>
                </section>
            </main>

            {/* Floating Next Button */}
            <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-20">
                <button
                    type="button"
                    className="w-full rounded-xl bg-highlight-700 text-light-300 py-3 text-sm font-medium shadow"
                >
                    Next
                </button>
            </div>

            <MobileBottomNav active="add" />
        </div>
    );
}
