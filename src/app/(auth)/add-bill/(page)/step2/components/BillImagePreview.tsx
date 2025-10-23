export const BillImagePreview = ({
    previewUrl,
    handleRetake,
}: {
    previewUrl: string;
    handleRetake: () => void;
}) => {
    return (
        <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden border border-light-600 bg-light-300">
                <img
                    src={previewUrl}
                    alt="Receipt preview"
                    className="w-full h-auto object-contain"
                />
            </div>
            <div className="grid grid-cols-2 gap-3">
                <button
                    type="button"
                    onClick={handleRetake}
                    className="rounded-xl border border-light-600 bg-light-300 py-3 text-sm font-medium"
                >
                    Retake
                </button>
                <button
                    type="button"
                    className="rounded-xl bg-highlight-700 text-light-300 py-3 text-sm font-medium shadow"
                >
                    Continue
                </button>
            </div>
        </div>
    );
};
