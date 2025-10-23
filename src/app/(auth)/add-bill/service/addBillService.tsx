import { api } from "@/fetch/api";
import { BaseResponse } from "@/types/response";

export const addBillService = {
    generateBillFromImage: async (image: File) => {
        const formData = new FormData();
        formData.append("image", image);
        return api.post<BaseResponse<any>>("/receipt/generate", formData);
    },
};
