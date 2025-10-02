import { create } from "zustand";

export type RootModalState = {
    open: boolean;
    title?: string;
    subtitle?: string;
    showClose?: boolean;
    showConfirm?: boolean;
    showCancel?: boolean;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void | Promise<void>;
    onCancel?: () => void | Promise<void>;
};

export type RootModalStore = {
    state: RootModalState;
    setState: (state: RootModalState) => void;
};

export const useRootModalStore = create<RootModalStore>((set) => ({
    state: {
        open: false,
        title: undefined,
        subtitle: undefined,
        showClose: true,
        showConfirm: true,
        showCancel: true,
        confirmText: "Confirm",
        cancelText: "Cancel",
        onConfirm: undefined,
        onCancel: undefined,
    },
    setState: (state: RootModalState) => set(() => ({ state })),
}));
