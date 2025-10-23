export const BillImagePicker = ({
    handleFileChange,
}: {
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
    return (
        <div className="h-full min-h-[60vh] flex flex-col items-center justify-center gap-4">
            <input
                id="cameraInput"
                type="file"
                accept="image/*"
                capture="environment"
                className="hidden"
                onChange={handleFileChange}
            />
            <label
                htmlFor="cameraInput"
                className="w-full rounded-2xl border border-light-600 bg-light-300 px-4 py-6 text-sm font-medium flex items-center justify-center gap-3 cursor-pointer"
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
            </label>

            <input
                id="galleryInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
            />
            <label
                htmlFor="galleryInput"
                className="w-full rounded-2xl border border-light-600 bg-light-300 px-4 py-6 text-sm font-medium flex items-center justify-center gap-3 cursor-pointer"
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
            </label>
        </div>
    );
};
