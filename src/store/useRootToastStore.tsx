import { create } from "zustand";

type RootToastState = {
    type: "success" | "error" | "warning" | "info";
    message: string;
};

type Store = {
    state: RootToastState;
    setState: (state: RootToastState) => void;
};

export const useRootToastStore = create<Store>((set) => ({
    state: {
        type: "success",
        message: "",
    },
    setState: (state: RootToastState) => set(() => ({ state })),
}));
