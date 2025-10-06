import MobileBottomNav from "@/app/components/MobileBottomNav";
import { MobileHeader } from "@/app/components/MobileHeader";

export default function AddBillStep2Page() {
    return (
        <div className="min-h-dvh flex flex-col bg-highlight-300 pb-24">
            <MobileHeader
                title="Upload Receipt"
                backUrl="/add-bill/step1"
                showBackButton
            />

            <main className="flex-1 p-4">
                <div className="h-full min-h-[60vh] flex flex-col items-center justify-center gap-4">
                    <button
                        type="button"
                        className="w-full rounded-2xl border border-light-600 bg-light-300 px-4 py-6 text-sm font-medium flex items-center justify-center gap-3"
                    >
                        <span className="inline-flex h-6 w-6 items-center justify-center">
                            <svg
                                className="h-6 w-6 text-dark-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path strokeWidth="2" d="M12 5v14M5 12h14" />
                            </svg>
                        </span>
                        Take Photo
                    </button>

                    <button
                        type="button"
                        className="w-full rounded-2xl border border-light-600 bg-light-300 px-4 py-6 text-sm font-medium flex items-center justify-center gap-3"
                    >
                        <span className="inline-flex h-6 w-6 items-center justify-center">
                            <svg
                                className="h-6 w-6 text-dark-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect
                                    x="3"
                                    y="5"
                                    width="18"
                                    height="14"
                                    rx="2"
                                    strokeWidth="2"
                                />
                                <path
                                    strokeWidth="2"
                                    d="M12 9l2.5 3 2-2.5L21 16H3l5-6 3 4z"
                                />
                            </svg>
                        </span>
                        Upload from Gallery
                    </button>
                </div>

                {/* Loading Overlay (toggle hidden -> flex to show) */}
                <div className="hidden fixed inset-0 z-30 bg-dark-700/40 backdrop-blur-sm items-center justify-center">
                    <div className="rounded-xl bg-light-300 px-6 py-4 text-center shadow">
                        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-light-600 border-t-highlight-700" />
                        <p className="mt-3 text-sm font-medium">
                            Processing Receipt...
                        </p>
                    </div>
                </div>
            </main>

            <MobileBottomNav active="add" />
        </div>
    );
}
