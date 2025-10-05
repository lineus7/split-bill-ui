import Link from "next/link";
import MobileBottomNav from "@/app/components/MobileBottomNav";
import { logoutAction } from "./actions/logoutAction";
import { cookiesStore } from "@/utils/cookies";

export default async function ProfilePage() {
    const user = await cookiesStore.user.get();
    const name = user?.Name;
    const username = user?.Username;
    const initial = name?.[0];
    return (
        <div className="min-h-dvh flex flex-col bg-highlight-300 pb-24">
            <header className="sticky top-0 z-10 h-14 bg-light-400 border-b flex items-center justify-center">
                <h1 className="text-[14px] font-bold">Profile</h1>
            </header>

            <main className="flex-1 p-4 space-y-4">
                {/* User Info */}
                <section className="rounded-2xl border border-light-600 bg-light-300 p-4">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-highlight-400 text-light-700 flex items-center justify-center font-bold">
                            {initial}
                        </div>
                        <div>
                            <p className="text-sm font-semibold">{name}</p>
                            <p className="text-xs text-dark-400">@{username}</p>
                        </div>
                    </div>
                </section>

                {/* Actions */}
                <section className="space-y-2">
                    <Link
                        href="/profile/change-password"
                        className="block rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm font-medium"
                    >
                        Change Password
                    </Link>

                    <button
                        type="button"
                        className="cursor-pointer w-full rounded-xl border border-error-dark text-error-dark bg-error-light/40 px-4 py-3 text-sm font-medium"
                        onClick={logoutAction}
                    >
                        Logout
                    </button>
                </section>
            </main>

            <MobileBottomNav active="profile" />
        </div>
    );
}
