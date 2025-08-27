import { useEffect } from "react";
import { toast } from "@/utils/toast";

export const useErrorNotifier = (error: any) => {
  useEffect(() => {
    console.log(error);

    if (error) {
      if (error?.Message) {
        toast.error(error.Message);
      } else {
        toast.error("Something went wrong");
      }
    }
  }, [error]);
};
