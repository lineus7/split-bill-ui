import { useEffect } from "react";
import { toast } from "@/utils/toast";
import { ApiErrorProps } from "@/types/error";
import { extractErrorMessage } from "@/utils/error";

export const useErrorNotifier = (error: any) => {
    useEffect(() => {
        if (error) {
            if (error?.isApiError) {
                const errorApi = error as ApiErrorProps;
                toast.error(errorApi.message);
            } else {
                const errorString = extractErrorMessage(error);
                toast.error(errorString);
            }
        }
    }, [error]);
};
