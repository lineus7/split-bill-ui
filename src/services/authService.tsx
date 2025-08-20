import { fetchBase } from "@/fetch/fetchBase";

export const authService = {
    login: async (email: string, password: string) => {
        return await fetchBase("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
    },
};
