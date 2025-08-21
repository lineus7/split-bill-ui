import { useEffect } from "react";
import { toast } from "@/utils/toast";

export const useErrorNotifier = (error: any) => {
    useEffect(() => {
        console.log(error);

        if (error?.Message) {
            toast.error(error.Message);
        }
    }, [error]);
};
