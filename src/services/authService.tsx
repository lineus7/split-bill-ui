import { api } from "@/fetch/api";
import { BaseResponse } from "@/types/response";
import { User } from "@/types/user";
import { cookiesStore } from "@/utils/cookies";
import { cookies } from "next/headers";

export interface RegisterData {
    name: string;
    username: string;
    email: string;
    password: string;
}

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
    register: async (data: RegisterData) => {
        return api.post<BaseResponse<null>>("/auth/register", data);
    },
    logout: async () => {
        try {
            await cookiesStore.clear();
            return { success: true };
        } catch (error) {
            return { success: false };
        }
    },
};
