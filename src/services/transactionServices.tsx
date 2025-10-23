import { api } from "@/fetch/api";
import { BaseResponse } from "@/types/response";
import { Transaction } from "../types/transaction";

export const transactionService = {
    getList: async (search: string) => {
        return api.get<BaseResponse<Transaction[]>>(
            `/transaction/list?search=${search}`
        );
    },
    getDetail: async (uniqueId: string) => {
        return api.get<BaseResponse<Transaction>>(
            `/public/transaction-detail/${uniqueId}`
        );
    },
};
