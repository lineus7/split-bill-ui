"use client";

import { BaseButton } from "@/components/BaseButton";
import { BasePasswordInput } from "@/components/BasePasswordInput";
import { BaseText } from "@/components/BaseText";
import { BaseTextField } from "@/components/BaseTextField";
import { useActionState, useEffect, useState } from "react";
import { loginAction } from "../actions/action";
import { useErrorNotifier } from "@/hooks/useErrorNotifier";
import { toast } from "@/utils/toast";
import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const router = useRouter();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [state, formAction, pending] = useActionState(loginAction, {
        data: undefined,
        errors: undefined,
    });

    useEffect(() => {
        if (state?.data) {
            toast.success(state.data.Message);
            authService.saveData(state.data.Data);
            router.push("/dashboard");
        }
    }, [state]);
    useErrorNotifier(state?.errors);

    return (
        <form
            className="flex-1 py-10 flex flex-col justify-between"
            action={formAction}
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
                        error={state?.errors?.email}
                        helperText={state?.errors?.email?.[0]}
                    />
                    <BasePasswordInput
                        label="Password"
                        autoComplete="current-password"
                        name="password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        error={state?.errors?.password}
                        helperText={state?.errors?.password?.[0]}
                    />
                </div>
            </div>
            <BaseButton type="submit" label="Login" disabled={pending} />
        </form>
    );
}
