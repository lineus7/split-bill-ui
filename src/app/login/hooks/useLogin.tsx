"use client";
import { useFetch } from "@/hooks/useFetch";
import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useErrorNotifier } from "@/hooks/useErrorNotifier";
import { toast } from "@/utils/toast";

export const useLogin = (form: { email: string; password: string }) => {
    const router = useRouter();

    const { fetch, loading, error } = useFetch({
        fetchFn: async () => {
            const schema = z.object({
                email: z.string().email("Invalid email format"),
                password: z
                    .string()
                    .min(6, "Password must be at least 6 characters long"),
            });

            const validatedFields = schema.safeParse(form);

            if (!validatedFields.success) {
                throw {
                    errors: validatedFields.error.flatten().fieldErrors,
                };
            }

            const response = await authService.login(
                validatedFields.data.email,
                validatedFields.data.password
            );

            toast.success(response.Message);
            router.push("/dashboard");
        },
        enabled: false,
    });

    useErrorNotifier(error);

    return {
        fetch,
        loading,
        error,
    };
};
