import { useRootToastStore } from "@/store/useRootToastStore";

//PLEASE USE IN CLIENT COMPONENT
export const toast = {
    success: (message: string) => {
        useRootToastStore.getState().setState({
            type: "success",
            message,
        });
    },
    error: (message: string) => {
        useRootToastStore.getState().setState({
            type: "error",
            message,
        });
    },
    warning: (message: string) => {
        useRootToastStore.getState().setState({
            type: "warning",
            message,
        });
    },
    info: (message: string) => {
        useRootToastStore.getState().setState({
            type: "info",
            message,
        });
    },
};
