export const DashboardBillListSkeleton = () => {
    return (
        <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="rounded-2xl border border-light-600 bg-light-300 p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <div className="h-4 w-32 rounded-md bg-gray-300 animate-pulse" />
                            <div className="h-3 w-24 rounded-md bg-gray-300 animate-pulse mt-1.5" />
                        </div>
                        <div className="h-5 w-20 rounded-md bg-gray-300 animate-pulse" />
                    </div>
                </div>
            ))}
        </div>
    );
};
