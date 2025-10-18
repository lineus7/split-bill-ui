import { api } from "@/fetch/api";
import { BaseResponse } from "@/types/response";
import { Transaction } from "../types/transaction";

export const transactionService = {
    getList: async () => {
        return api.get<BaseResponse<Transaction[]>>("/transaction/list");
    },
};
