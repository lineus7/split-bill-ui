"use client";

import { BaseButton } from "@/components/BaseButton";
import { BasePasswordInput } from "@/components/BasePasswordInput";
import { BaseText } from "@/components/BaseText";
import { BaseTextField } from "@/components/BaseTextField";

export default function LoginForm() {
    return (
        <div className="flex-1 py-10 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
                <BaseText variant="title">Welcome</BaseText>

                <div className="flex flex-col gap-4">
                    <BaseTextField label="Email" autoComplete="email" />
                    <BasePasswordInput
                        label="Password"
                        autoComplete="current-password"
                    />
                </div>
            </div>

            <BaseButton label="Login" />
        </div>
    );
}
