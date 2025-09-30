"use client";

import { useActionState, useEffect } from "react";
import { loginAction } from "../actions/loginAction";
import { useErrorNotifier } from "@/hooks/useErrorNotifier";
import { toast } from "@/utils/toast";
import { InputForm } from "@/app/components/InputForm";
import { BaseButton } from "@/app/components/BaseButton";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";

const initialState = {
    error: undefined,
    data: undefined,
    validationErrors: undefined,
    submittedData: undefined,
};

export const LoginForm = () => {
    const router = useRouter();
    const [state, formAction, pending] = useActionState(
        loginAction,
        initialState
    );

    useErrorNotifier(state.error);
    useEffect(() => {
        if (state.data) {
            localStorage.setItem("user", JSON.stringify(state.data.User));
            toast.success("Login Success");
            router.push("/dashboard");
        }
    }, [state.data]);

    return (
        <>
            <form action={formAction} className="space-y-4">
                <InputForm
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    defaultValue={state.submittedData?.email}
                    error={state.validationErrors?.email?.[0]}
                />

                <InputForm
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    defaultValue={state.submittedData?.password}
                    error={state.validationErrors?.password?.[0]}
                />

                <BaseButton type="submit">Login</BaseButton>
            </form>
            {pending && <Loading />}
        </>
    );
};
