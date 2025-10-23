import { create } from "zustand";

export type AddBillStore = {
    billName: string;
    setBillName: (billName: string) => void;
    participants: string[];
    setParticipants: (participants: string[]) => void;
};

export const useAddBillStore = create<AddBillStore>((set) => ({
    billName: "",
    setBillName: (billName: string) => set(() => ({ billName })),
    participants: [],
    setParticipants: (participants: string[]) => set(() => ({ participants })),
}));
