"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { toast } from "@/utils/toast";
import { loginAction } from "./actions/loginAction";
import { useErrorNotifier } from "@/hooks/useErrorNotifier";
import { InputForm } from "../components/InputForm";
import { BaseButton } from "../components/BaseButton";

const initialState = {
    error: undefined,
    data: undefined,
    validationErrors: undefined,
    submittedData: undefined,
};

export default function LoginPage() {
    const router = useRouter();
    const [state, formAction, pending] = useActionState(
        loginAction,
        initialState
    );

    useErrorNotifier(state.error);
    useEffect(() => {
        if (state.data) {
            localStorage.setItem("user", JSON.stringify(state.data.User));
            router.push("/dashboard");
            toast.success("Login Success");
        }
    }, [state.data]);
    return (
        <div className="min-h-dvh flex flex-col bg-highlight-300">
            <header className="sticky top-0 z-10 h-14 bg-light-400 border-b flex items-center justify-center">
                <h1 className="text-[14px] font-bold">Login</h1>
            </header>

            <main className="flex-1 p-4 flex flex-col justify-center">
                <div className="mx-auto w-full max-w-sm">
                    <div className="mb-8 text-center">
                        <div className="mx-auto h-10 w-10 rounded-md bg-highlight-400 flex items-center justify-center text-light-700 font-bold">
                            SB
                        </div>
                        <h2 className="mt-3 text-2xl font-extrabold">
                            SplitBill
                        </h2>
                    </div>

                    <form action={formAction} className="space-y-4">
                        <InputForm
                            name="email"
                            label="Email"
                            placeholder="Enter your email"
                            autoComplete="email"
                            error={state.validationErrors?.email[0]}
                        />

                        <InputForm
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                            error={state.validationErrors?.password[0]}
                        />

                        <BaseButton type="submit">Login</BaseButton>
                    </form>

                    <p className="mt-4 text-center text-sm text-dark-400">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="text-highlight-700 font-medium"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
