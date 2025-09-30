import { api } from "@/fetch/api";
import { BaseResponse } from "@/types/response";
import { User } from "@/types/user";
import { cookies } from "next/headers";

export const authService = {
    login: async (email: string, password: string) => {
        return api.post<BaseResponse<{ User: User; Token: string }>>(
            "/auth/login",
            {
                email,
                password,
            }
        );
    },
    logout: async () => {
        try {
            (await cookies()).delete("access_token");
            return { success: true };
        } catch (error) {
            return { success: false };
        }
    },
};
