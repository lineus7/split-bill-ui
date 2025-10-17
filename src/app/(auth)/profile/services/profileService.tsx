import { api } from "@/fetch/api";
import { BaseResponse } from "@/types/response";

export const profileService = {
    changePassword: async (currentPassword: string, newPassword: string) => {
        return api.post<BaseResponse<null>>("/api/profile/change-password", {
            current_password: currentPassword,
            new_password: newPassword,
        });
    },
};
