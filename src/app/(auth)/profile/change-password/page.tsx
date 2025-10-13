"use client";

import { BaseButton } from "@/app/components/BaseButton";
import { MobileHeader } from "@/app/components/MobileHeader";
import { useActionState, useEffect } from "react";
import { changePasswordAction } from "./actions/changePasswordAction";
import { useErrorNotifier } from "@/hooks/useErrorNotifier";
import { toast } from "@/utils/toast";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";
import { InputForm } from "@/app/components/InputForm";

export default function ChangePasswordPage() {
    const router = useRouter();
    const [state, formAction, pending] = useActionState(changePasswordAction, {
        error: undefined,
        validationErrors: undefined,
        data: undefined,
        submittedData: undefined,
    });

    useErrorNotifier(state.error);
    useEffect(() => {
        if (state.data) {
            toast.success("Password updated successfully");
            router.push("/profile");
        }
    }, [state.data]);

    return (
        <div className="min-h-dvh flex flex-col bg-highlight-300">
            <MobileHeader
                title="Change Password"
                backUrl="/profile"
                showBackButton
            />

            <main className="flex-1 p-4">
                <form
                    action={formAction}
                    className="mx-auto w-full max-w-sm space-y-4"
                >
                    <InputForm
                        name="currentPassword"
                        label="Current Password"
                        type="password"
                        placeholder="Enter current password"
                        defaultValue={state.submittedData?.currentPassword}
                        error={state.validationErrors?.currentPassword?.[0]}
                    />

                    <InputForm
                        name="newPassword"
                        label="New Password"
                        type="password"
                        placeholder="Enter new password"
                        defaultValue={state.submittedData?.newPassword}
                        error={state.validationErrors?.newPassword?.[0]}
                    />

                    <InputForm
                        name="confirmNewPassword"
                        label="Confirm New Password"
                        type="password"
                        placeholder="Re-enter new password"
                        defaultValue={state.submittedData?.confirmNewPassword}
                        error={state.validationErrors?.confirmNewPassword?.[0]}
                    />

                    <BaseButton type="submit">Update Password</BaseButton>
                </form>
                {pending && <Loading />}
            </main>
        </div>
    );
}
