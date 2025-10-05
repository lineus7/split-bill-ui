import { User } from "@/types/user";
import { cookies } from "next/headers";

export const cookiesStore = {
    user: {
        get: async () => {
            const user = (await cookies()).get("user");
            return user ? (JSON.parse(user.value) as User) : null;
        },
        set: async (user: User) => {
            (await cookies()).set("user", JSON.stringify(user), {
                httpOnly: true,
                sameSite: "strict",
            });
        },
        delete: async () => {
            (await cookies()).delete("user");
        },
    },
    accessToken: {
        get: async () => {
            const accessToken = (await cookies()).get("access_token");
            return accessToken ? accessToken.value : null;
        },
        set: async (accessToken: string) => {
            (await cookies()).set("access_token", accessToken, {
                httpOnly: true,
                sameSite: "strict",
            });
        },
        delete: async () => {
            (await cookies()).delete("access_token");
        },
    },
    clear: async () => {
        (await cookies()).delete("user");
        (await cookies()).delete("access_token");
    },
};
