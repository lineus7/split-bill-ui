"use client";

import { BaseButton } from "@/app/components/BaseButton";
import { BasePasswordInput } from "@/app/components/BasePasswordInput";
import { BaseTextField } from "@/app/components/BaseTextField";
import { useActionState, useEffect } from "react";
import { loginAction } from "../actions/loginAction";
import { useErrorNotifier } from "@/hooks/useErrorNotifier";
import { useRouter } from "next/navigation";
import { toast } from "@/utils/toast";

const initialState = {
    error: undefined,
    data: undefined,
    validationErrors: undefined,
    submittedData: undefined,
};

export default function LoginForm() {
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
        <form
            action={formAction}
            className="flex-1 py-10 flex flex-col justify-between"
        >
            <div className="flex flex-col gap-4">
                <BaseTextField
                    label="Email"
                    autoComplete="email"
                    name="email"
                    defaultValue={state.submittedData?.email}
                    error={!!state.validationErrors?.email}
                    helperText={state.validationErrors?.email?.[0]}
                />
                <BasePasswordInput
                    label="Password"
                    autoComplete="current-password"
                    name="password"
                    defaultValue={state.submittedData?.password}
                    error={!!state.validationErrors?.password}
                    helperText={state.validationErrors?.password?.[0]}
                />
            </div>

            <BaseButton type="submit" label="Login" loading={pending} />
        </form>
    );
}
