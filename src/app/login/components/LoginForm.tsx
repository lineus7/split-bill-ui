"use client";

import { BaseButton } from "@/components/BaseButton";
import { BasePasswordInput } from "@/components/BasePasswordInput";
import { BaseText } from "@/components/BaseText";
import { BaseTextField } from "@/components/BaseTextField";
import { useActionState, useEffect, useTransition } from "react";
import { loginAction } from "../actions/loginAction";
import { useErrorNotifier } from "@/hooks/useErrorNotifier";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "@/utils/toast";

export default function LoginForm() {
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [_, startTransition] = useTransition();
    const [state, formAction, pending] = useActionState(loginAction, {
        errors: undefined,
        data: undefined,
    });

    useErrorNotifier(state.errors);
    useEffect(() => {
        if (state.data) {
            localStorage.setItem("user", JSON.stringify(state.data.User));
            router.push("/dashboard");
            toast.success("Login Success");
        }
    }, [state.data]);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                startTransition(() => {
                    formAction(formData);
                });
            }}
            className="flex-1 py-10 flex flex-col justify-between"
        >
            <div className="flex flex-col gap-4">
                <BaseText variant="title">Welcome</BaseText>

                <div className="flex flex-col gap-4">
                    <BaseTextField
                        label="Email"
                        autoComplete="email"
                        name="email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        error={state.errors?.email}
                        helperText={state.errors?.email?.[0]}
                    />
                    <BasePasswordInput
                        label="Password"
                        autoComplete="current-password"
                        name="password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        error={state.errors?.password}
                        helperText={state.errors?.password?.[0]}
                    />
                </div>
            </div>

            <BaseButton type="submit" label="Login" loading={pending} />
        </form>
    );
}
