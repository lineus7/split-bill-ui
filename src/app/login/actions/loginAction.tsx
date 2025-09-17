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
    const validatedData = schema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validatedData.success) {
        return {
            validationErrors: validatedData.error.flatten().fieldErrors,
            submittedData: validatedData.data,
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
            submittedData: validatedData.data,
        };
    } catch (error: any) {
        return {
            error,
            submittedData: validatedData.data,
        };
    }
}
