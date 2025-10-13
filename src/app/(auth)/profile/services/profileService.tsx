"use server";

import { api } from "@/fetch/api";
import { BaseResponse } from "@/types/response";

export const profileService = {
    changePassword: async (currentPassword: string, newPassword: string) => {
        return api.post<BaseResponse<null>>("/profile/change-password", {
            old_password: currentPassword,
            new_password: newPassword,
        });
    },
};
