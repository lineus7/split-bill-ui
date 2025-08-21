"use server";

import z from "zod";
import { authService } from "@/services/authService";
import { cookies } from "next/headers";

export type LoginState = {
    errors?: Record<string, any>;
    data?: any;
};

export async function loginAction(_initialState: any, formData: FormData) {
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
            errors: validatedData.error.flatten().fieldErrors,
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
        };
    } catch (error: any) {
        return {
            errors: error,
        };
    }
}
