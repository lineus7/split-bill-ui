import { api } from "@/fetch/api";
import { BaseResponse } from "@/types/response";
import { User } from "@/types/user";

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
};
