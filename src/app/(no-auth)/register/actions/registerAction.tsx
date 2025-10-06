"use server";

import z from "zod";
import { authService, RegisterData } from "@/services/authService";

export type RegisterState = {
    error?: Record<string, any>;
    validationErrors?: Record<string, string[]>;
    data?: any;
    submittedData?: any;
};

interface RegisterForm extends RegisterData {
    confirm_password: string;
}

export async function registerAction(
    _initialState: any,
    formData: FormData
): Promise<RegisterState> {
    const inputForm = {
        name: formData.get("name"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirm_password: formData.get("confirm_password"),
    };

    const schema = z.object({
        name: z.string().min(3, "Name must be at least 3 characters long"),
        username: z
            .string()
            .min(3, "Username must be at least 3 characters long"),
        email: z.string().email("Invalid email format"),
        password: z
            .string()
            .min(6, "Password must be at least 6 characters long"),
        confirm_password: z
            .string()
            .min(6, "Password must be at least 6 characters long"),
    });

    const validatedData = schema.safeParse({
        name: inputForm.name,
        username: inputForm.username,
        email: inputForm.email,
        password: inputForm.password,
        confirm_password: inputForm.confirm_password,
    });

    if (!validatedData.success) {
        return {
            validationErrors: validatedData.error.flatten().fieldErrors,
            submittedData: inputForm,
        };
    }

    const data = validatedData.data as RegisterForm;

    if (data.password !== data.confirm_password) {
        return {
            validationErrors: {
                confirm_password: [
                    "Password and confirm password do not match",
                ],
            },
            submittedData: inputForm,
        };
    }

    try {
        const body: RegisterData = {
            email: data.email,
            name: data.name,
            password: data.password,
            username: data.username,
        };
        const response = await authService.register(body);

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
