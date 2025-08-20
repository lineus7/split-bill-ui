"use server";

import { z } from "zod";

const schema = z.object({
    email: z.string().email({
        message: "Invalid email format",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long",
    }),
});

export type LoginState = {
    errors?: Record<string, string[]>;
    message?: string;
};

export const loginUser = async (
    _initialState: LoginState,
    formData: FormData
) => {
    const validatedFields = schema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Invalid email or password",
        };
    }

    return {
        errors: undefined,
        message: "Login successful",
    };
};
