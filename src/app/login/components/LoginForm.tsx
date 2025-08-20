"use client";

import { BaseButton } from "@/components/BaseButton";
import { BasePasswordInput } from "@/components/BasePasswordInput";
import { BaseText } from "@/components/BaseText";
import { BaseTextField } from "@/components/BaseTextField";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const { fetch: login, loading, error } = useLogin(form);

    return (
        <form
            className="flex-1 py-10 flex flex-col justify-between"
            onSubmit={(e) => {
                e.preventDefault();
                login();
            }}
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
                        error={error?.errors?.email}
                        helperText={error?.errors?.email?.[0]}
                    />
                    <BasePasswordInput
                        label="Password"
                        autoComplete="current-password"
                        name="password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        error={error?.errors?.password}
                        helperText={error?.errors?.password?.[0]}
                    />
                </div>
            </div>

            <BaseButton type="submit" label="Login" disabled={loading} />
        </form>
    );
}
