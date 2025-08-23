export class ApiError extends Error {
    public readonly status: number;
    public readonly data: any;
    public readonly isApiError = true;

    constructor(message: string, status: number, data: any) {
        super(message);
        this.status = status;
        this.data = data;
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}
