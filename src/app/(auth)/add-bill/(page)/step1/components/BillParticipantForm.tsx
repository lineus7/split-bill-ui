"use client";

import { useState } from "react";
import { useAddBillStore } from "../../../store/useAddBillStore";
import { BaseInput } from "@/app/components/BaseInput";
import { BaseButton } from "@/app/components/BaseButton";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";

const BillParticipantForm = () => {
    const router = useRouter();
    const [newParticipantName, setNewParticipantName] = useState("");
    const { participants, billName, setParticipants, setBillName } =
        useAddBillStore();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newParticipantName.trim()) {
            toast.error("Please enter a participant name");
            return;
        }
        setParticipants([...participants, newParticipantName]);
        setNewParticipantName("");
    };

    const handleRemoveParticipant = (index: number) => {
        const newParticipants = [...participants];
        newParticipants.splice(index, 1);
        setParticipants(newParticipants);
    };

    const handleNavigationNextStep = () => {
        if (!billName.trim()) {
            toast.error("Please enter a bill name");
            return;
        }
        if (participants.length === 0) {
            toast.error("Please add at least one participant");
            return;
        }
        router.push("/add-bill/step2");
    };

    return (
        <>
            <main className="flex-1 p-4 space-y-4">
                {/* Bill Name */}
                <div className="space-y-1">
                    <label className="block text-sm text-dark-400">
                        Bill Name
                    </label>
                    <input
                        type="text"
                        placeholder="Weekend Trip"
                        value={billName}
                        onChange={(e) => setBillName(e.target.value)}
                        className="w-full rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                    />
                </div>

                {/* Participants */}
                <section>
                    <h2 className="text-sm font-semibold mb-2">Participants</h2>
                    {/* Add Person */}
                    <form
                        className="flex items-center gap-2 mb-2"
                        onSubmit={handleSubmit}
                    >
                        <BaseInput
                            type="text"
                            placeholder="Add person by name or email"
                            className="flex-1"
                            value={newParticipantName}
                            onChange={(e) =>
                                setNewParticipantName(e.target.value)
                            }
                        />
                        <BaseButton type="submit" className="flex-0 px-4">
                            Add
                        </BaseButton>
                    </form>
                    <div className="rounded-2xl border border-light-600 bg-light-300 divide-y divide-light-600">
                        {participants.map((name, index) => (
                            <div
                                key={`${name}-${index}`}
                                className="flex items-center justify-between px-4 py-3"
                            >
                                <span className="text-sm">{name}</span>
                                <button
                                    type="button"
                                    aria-label={`Remove ${name}`}
                                    className="p-2 rounded-md text-dark-400 hover:bg-light-600 focus:outline-none focus:ring-2 focus:ring-highlight-400"
                                    onClick={() =>
                                        handleRemoveParticipant(index)
                                    }
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path d="M9 3a1 1 0 0 0-1 1v1H5.5a1 1 0 1 0 0 2H6v12a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7h.5a1 1 0 1 0 0-2H16V4a1 1 0 0 0-1-1H9zm2 2h2v1h-2V5zM8 7h10v12a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7zm3 3a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1z" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Floating Next Button */}
            <div className="fixed bottom-20 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-20">
                <BaseButton
                    type="button"
                    onClick={handleNavigationNextStep}
                    className="shadow"
                >
                    Next
                </BaseButton>
            </div>
        </>
    );
};

export default BillParticipantForm;
