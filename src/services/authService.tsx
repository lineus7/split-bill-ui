import { fetchBase } from "@/fetch/fetchBase";
import { BaseResponse } from "@/types/response";

export const authService = {
    login: async (email: string, password: string) => {
        const response = await fetchBase.post("/auth/login", {
            email,
            password,
        });
        return response as BaseResponse<any>;
    },
    saveData: async (data: Record<string, any>) => {
        localStorage.setItem("user", JSON.stringify(data));
    },
    getData: () => {
        const data = localStorage.getItem("user");
        if (!data) {
            return null;
        }
        return JSON.parse(data);
    },
};
