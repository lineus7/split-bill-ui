import { useRootModalStore } from "@/store/useRootModalStore";
import type { RootModalState } from "@/store/useRootModalStore";

// PLEASE USE IN CLIENT COMPONENTS
export const modal = {
    open: (config: Partial<RootModalState>) => {
        const current = useRootModalStore.getState().state;
        useRootModalStore.getState().setState({
            ...current,
            showClose: true,
            showConfirm: true,
            showCancel: true,
            confirmText: current.confirmText ?? "Confirm",
            cancelText: current.cancelText ?? "Cancel",
            ...config,
            open: true,
        });
    },
    close: () => {
        const current = useRootModalStore.getState().state;
        useRootModalStore.getState().setState({ ...current, open: false });
    },
    // Convenience helpers
    info: (title?: string, subtitle?: string) => {
        const current = useRootModalStore.getState().state;
        useRootModalStore.getState().setState({
            ...current,
            title,
            subtitle,
            showClose: true,
            showConfirm: false,
            showCancel: true,
            onConfirm: undefined,
            onCancel: undefined,
            open: true,
        });
    },
    confirm: (opts: {
        title?: string;
        subtitle?: string;
        confirmText?: string;
        cancelText?: string;
        onConfirm?: () => void | Promise<void>;
        onCancel?: () => void | Promise<void>;
    }) => {
        const current = useRootModalStore.getState().state;
        useRootModalStore.getState().setState({
            ...current,
            title: opts.title,
            subtitle: opts.subtitle,
            showClose: true,
            showConfirm: true,
            showCancel: true,
            confirmText: opts.confirmText ?? current.confirmText ?? "Confirm",
            cancelText: opts.cancelText ?? current.cancelText ?? "Cancel",
            onConfirm: opts.onConfirm,
            onCancel: opts.onCancel,
            open: true,
        });
    },
};
