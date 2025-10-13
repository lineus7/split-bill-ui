"use server";

import z from "zod";
import { profileService } from "../../services/profileService";

export type ChangePasswordState = {
    error?: Record<string, any>;
    validationErrors?: Record<string, string[]>;
    data?: any;
    submittedData?: any;
};

export type ChangePasswordForm = {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
};

export async function changePasswordAction(
    _initialState: any,
    formData: FormData
): Promise<ChangePasswordState> {
    const inputForm = {
        currentPassword: formData.get("currentPassword"),
        newPassword: formData.get("newPassword"),
        confirmNewPassword: formData.get("confirmNewPassword"),
    };

    const schema = z.object({
        currentPassword: z
            .string()
            .min(6, "Password must be at least 6 characters long"),
        newPassword: z
            .string()
            .min(6, "Password must be at least 6 characters long"),
        confirmNewPassword: z
            .string()
            .min(6, "Password must be at least 6 characters long"),
    });

    const validatedData = schema.safeParse({
        currentPassword: inputForm.currentPassword,
        newPassword: inputForm.newPassword,
        confirmNewPassword: inputForm.confirmNewPassword,
    });

    if (!validatedData.success) {
        return {
            validationErrors: validatedData.error.flatten().fieldErrors,
            submittedData: inputForm,
        };
    }

    const data = validatedData.data as ChangePasswordForm;

    if (data.newPassword !== data.confirmNewPassword) {
        return {
            validationErrors: {
                confirmNewPassword: [
                    "Password and confirm password do not match",
                ],
            },
            submittedData: inputForm,
        };
    }

    try {
        const response = await profileService.changePassword(
            data.currentPassword,
            data.newPassword
        );
        console.log(response);

        return {
            data: response.Message,
            submittedData: inputForm,
        };
    } catch (error: any) {
        return {
            error,
            submittedData: inputForm,
        };
    }
}
