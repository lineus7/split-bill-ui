"use server";

import { authService } from "@/services/authService";
import { z } from "zod";

export type LoginState = {
    errors?: Record<string, any>;
    data?: any;
};

export const loginAction = async (
    _initialState: LoginState,
    formData: FormData
) => {
    try {
        const schema = z.object({
            email: z.string().email({
                message: "Invalid email format",
            }),
            password: z.string().min(6, {
                message: "Password must be at least 6 characters long",
            }),
        });

        const validatedFields = schema.safeParse({
            email: formData.get("email"),
            password: formData.get("password"),
        });

        if (!validatedFields.success) {
            throw validatedFields.error.flatten().fieldErrors;
        }

        const response = await authService.login(
            validatedFields.data.email,
            validatedFields.data.password
        );

        return {
            data: response,
        };
    } catch (error: any) {
        return {
            errors: error,
        };
    }
};
