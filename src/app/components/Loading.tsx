export default function Loading() {
    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3">
                {/* Spinner */}
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-light-300 border-t-transparent"></div>

                {/* Optional loading text */}
                <p className="text-sm font-medium text-light-300">Loading...</p>
            </div>
        </div>
    );
}
