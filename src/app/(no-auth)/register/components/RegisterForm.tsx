"use client";

import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useErrorNotifier } from "@/hooks/useErrorNotifier";
import { useEffect } from "react";
import { modal } from "@/utils/modal";
import Loading from "@/app/components/Loading";
import { registerAction } from "../actions/registerAction";

const initialState = {
    error: undefined,
    validationErrors: undefined,
    data: undefined,
    submittedData: undefined,
};
export default function RegisterForm() {
    const router = useRouter();
    const [state, formAction, pending] = useActionState(
        registerAction,
        initialState
    );

    useErrorNotifier(state.error);
    useEffect(() => {
        if (state.data) {
            modal.open({
                open: true,
                title: "Registration successful!",
                subtitle: "Please contact me for activation.",
                showCancel: false,
                showClose: false,
                onConfirm: () => {
                    router.push("/login");
                    modal.close();
                },
            });
        }
    }, [state.data]);
    return (
        <>
            <form className="space-y-4" action={formAction}>
                <div className="space-y-1">
                    <label className="block text-sm text-dark-400">
                        Full Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        defaultValue={state.submittedData?.name}
                        className="w-full rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                    />
                </div>

                <div className="space-y-1">
                    <label className="block text-sm text-dark-400">
                        Username
                    </label>
                    <input
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                        defaultValue={state.submittedData?.username}
                        className="w-full rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                    />
                </div>

                <div className="space-y-1">
                    <label className="block text-sm text-dark-400">
                        Email Address
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        defaultValue={state.submittedData?.email}
                        className="w-full rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                    />
                </div>

                <div className="space-y-1">
                    <label className="block text-sm text-dark-400">
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        defaultValue={state.submittedData?.password}
                        className="w-full rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                    />
                </div>

                <div className="space-y-1">
                    <label className="block text-sm text-dark-400">
                        Confirm Password
                    </label>
                    <input
                        name="confirm_password"
                        type="password"
                        placeholder="Re-enter your password"
                        defaultValue={state.submittedData?.confirm_password}
                        className="w-full rounded-xl border border-light-600 bg-light-300 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-highlight-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full rounded-xl bg-highlight-700 text-light-300 py-3 text-sm font-medium"
                >
                    Register
                </button>
            </form>
            {pending && <Loading />}
        </>
    );
}
