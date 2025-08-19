"use client";

import { BaseButton } from "@/components/BaseButton";
import { BasePasswordInput } from "@/components/BasePasswordInput";
import { BaseText } from "@/components/BaseText";
import { BaseTextField } from "@/components/BaseTextField";
import { useActionState } from "react";
import { loginUser } from "../actions/action";

export default function LoginForm() {
    const [state, formAction, pending] = useActionState(loginUser, {
        errors: undefined,
        message: "",
    });
    return (
        <form
            action={formAction}
            className="flex-1 py-10 flex flex-col justify-between"
        >
            <div className="flex flex-col gap-4">
                <BaseText variant="title">Welcome</BaseText>

                <div className="flex flex-col gap-4">
                    <BaseTextField
                        label="Email"
                        autoComplete="email"
                        name="email"
                        error={!!state.errors?.email}
                        helperText={state.errors?.email?.[0]}
                    />
                    <BasePasswordInput
                        label="Password"
                        autoComplete="current-password"
                        name="password"
                        error={!!state.errors?.password}
                        helperText={state.errors?.password?.[0]}
                    />
                </div>
            </div>

            <BaseButton type="submit" label="Login" loading={pending} />
        </form>
    );
}
