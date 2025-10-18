import MobileBottomNav from "@/app/components/MobileBottomNav";
import { MobileHeader } from "@/app/components/MobileHeader";
import { DashboardBillList } from "./components/DashboardBillList";
import { DashboardSearch } from "./components/DashboardSearch";
import { Suspense } from "react";
import { DashboardBillListSkeleton } from "./components/DashboardBillListSkeleton";

export default async function DashboardPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const search = (searchParams?.search as string) || "";

    return (
        <div className="min-h-dvh flex flex-col bg-highlight-300 pb-24">
            <MobileHeader title="My Bills" />

            <main className="flex-1 p-4 space-y-4">
                <DashboardSearch />

                <Suspense fallback={<DashboardBillListSkeleton />}>
                    <DashboardBillList search={search} />
                </Suspense>
            </main>

            <MobileBottomNav active="dashboard" />
        </div>
    );
}
