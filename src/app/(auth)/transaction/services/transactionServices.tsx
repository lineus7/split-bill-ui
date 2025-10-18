import { api } from "@/fetch/api";
import { BaseResponse } from "@/types/response";
import { Transaction } from "../types/transaction";

export const transactionService = {
    getList: async (search: string) => {
        console.log(`/transaction/list?search=${search}`);
        return api.get<BaseResponse<Transaction[]>>(
            `/transaction/list?search=${search}`
        );
    },
};
