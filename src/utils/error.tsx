export const extractErrorMessage = (error: any) => {
    if (typeof error === "string") {
        return error;
    }

    if (typeof error === "object") {
        if (error?.message) {
            return error.message;
        }
        if (error?.Message) {
            return error.Message;
        }
    }

    return "Something went wrong";
};
