"use client";

import { useRootModalStore } from "@/store/useRootModalStore";

export const RootModal = () => {
    const { state, setState } = useRootModalStore();

    const close = () => setState({ ...state, open: false });

    if (!state.open) return null;

    const handleConfirm = async () => {
        try {
            await state.onConfirm?.();
        } finally {
            close();
        }
    };

    const handleCancel = async () => {
        try {
            await state.onCancel?.();
        } finally {
            close();
        }
    };

    return (
        <div
            className="absolute inset-0 z-50 flex items-center justify-center"
            onClick={close}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Modal Card */}
            <div
                className="relative z-10 w-[90%] max-w-sm rounded-2xl border border-light-600 bg-light-300 p-4 shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close (X) */}
                {state.showClose !== false && (
                    <button
                        type="button"
                        aria-label="Close"
                        onClick={close}
                        className="absolute right-3 top-3 h-8 w-8 rounded-full text-dark-400 hover:bg-light-500"
                    >
                        <svg
                            className="mx-auto h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path strokeWidth="2" d="M6 6l12 12M18 6L6 18" />
                        </svg>
                    </button>
                )}

                {/* Title & Subtitle */}
                {(state.title || state.subtitle) && (
                    <div className="mb-3 pr-8">
                        {state.title && (
                            <h3 className="text-base font-semibold">
                                {state.title}
                            </h3>
                        )}
                        {state.subtitle && (
                            <p className="mt-1 text-sm text-dark-400">
                                {state.subtitle}
                            </p>
                        )}
                    </div>
                )}

                {/* Actions */}
                {(state.showCancel || state.showConfirm) && (
                    <div className="mt-4 flex items-center justify-end gap-2">
                        {state.showCancel && (
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="cursor-pointer rounded-xl border border-light-600 bg-light-400 px-4 py-2 text-sm font-medium"
                            >
                                {state.cancelText ?? "Cancel"}
                            </button>
                        )}
                        {state.showConfirm && (
                            <button
                                type="button"
                                onClick={handleConfirm}
                                className="cursor-pointer rounded-xl bg-highlight-700 px-4 py-2 text-sm font-medium text-light-300 hover:bg-highlight-800"
                            >
                                {state.confirmText ?? "Confirm"}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
