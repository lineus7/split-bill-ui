export type BaseResponse<T> = {
    Code: number;
    Message: string;
    Data: T;
};
