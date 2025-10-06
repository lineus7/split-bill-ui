import { MobileHeader } from "@/app/components/MobileHeader";
import Link from "next/link";

export default function ChangePasswordPage() {
    return (
        <div className="min-h-dvh flex flex-col bg-highlight-300">
            <MobileHeader
                title="Change Password"
                backUrl="/profile"
                showBackButton
            />

            <main className="flex-1 p-4">
                <form className="mx-auto w-full max-w-sm space-y-4">
                    <div className="space-y-1">
                        <label className="block text-sm text-dark-400">
                            Current Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter current password"
                            className="w-full rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm text-dark-400">
                            New Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-sm text-dark-400">
                            Confirm New Password
                        </label>
                        <input
                            type="password"
                            placeholder="Re-enter new password"
                            className="w-full rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-highlight-700 text-light-300 py-3 text-sm font-medium"
                    >
                        Update Password
                    </button>
                </form>
            </main>
        </div>
    );
}
