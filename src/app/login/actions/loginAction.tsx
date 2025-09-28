"use server";

import z from "zod";
import { authService } from "@/services/authService";
import { cookies } from "next/headers";

export type LoginState = {
    error?: Record<string, any>;
    validationErrors?: Record<string, string[]>;
    data?: any;
    submittedData?: any;
};

export async function loginAction(
    _initialState: any,
    formData: FormData
): Promise<LoginState> {
    const schema = z.object({
        email: z.string().email("Invalid email format"),
        password: z
            .string()
            .min(6, "Password must be at least 6 characters long"),
    });

    const inputForm = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    const validatedData = schema.safeParse({
        email: inputForm.email,
        password: inputForm.password,
    });

    if (!validatedData.success) {
        return {
            validationErrors: validatedData.error.flatten().fieldErrors,
            submittedData: inputForm,
        };
    }

    try {
        const response = await authService.login(
            validatedData.data.email,
            validatedData.data.password
        );

        (await cookies()).set("access_token", response.Data.Token);

        return {
            data: response.Data,
            submittedData: inputForm,
        };
    } catch (error: any) {
        return {
            error,
            submittedData: inputForm,
        };
    }
}
