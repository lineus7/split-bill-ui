import { cookies } from "next/headers";
import { ApiError } from "./ApiError";
import { extractErrorMessage } from "@/utils/error";
import { cookiesStore } from "@/utils/cookies";

class ApiClient {
    private baseURL: string;
    private headers: Headers;

    constructor(baseURL: string, headers: Record<string, string> = {}) {
        this.baseURL = baseURL;
        this.headers = new Headers(headers);
        if (!this.headers.has("Content-Type")) {
            this.headers.set("Content-Type", "application/json");
        }
    }

    private async request<T>(
        endpoint: RequestInfo | URL,
        options: RequestInit = {}
    ): Promise<T> {
        try {
            const url = `${this.baseURL}${endpoint}`;

            const cookieStore = await cookies();
            const token = cookieStore.get("access_token");
            if (token) {
                options.headers = {
                    ...options.headers,
                    Authorization: `Bearer ${token.value}`,
                };
            }

            const config: RequestInit = {
                ...options,
                headers: {
                    ...Object.fromEntries(this.headers.entries()),
                    ...options.headers,
                },
                credentials: "include",
            };

            const response = await fetch(url, config);

            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                } catch {
                    errorData = await response.text();
                }
                const message = extractErrorMessage(errorData);
                if (response.status === 401) {
                    await cookiesStore.clear();
                }
                throw new ApiError(message, response.status, errorData);
            }

            const contentType = response.headers.get("content-type");
            if (response.status === 204 || !contentType) {
                return Promise.resolve(undefined as T);
            }

            if (contentType.includes("application/json")) {
                return response.json() as Promise<T>;
            }

            return response.text() as unknown as Promise<T>;
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }

            const message = extractErrorMessage(error);
            throw new ApiError(message, 0, error);
        }
    }

    public get<T>(
        endpoint: RequestInfo | URL,
        options?: RequestInit
    ): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: "GET" });
    }

    public post<T>(
        endpoint: RequestInfo | URL,
        body: any,
        options?: RequestInit
    ): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: "POST",
            body: JSON.stringify(body),
        });
    }

    public put<T>(
        endpoint: RequestInfo | URL,
        body: any,
        options?: RequestInit
    ): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: "PUT",
            body: JSON.stringify(body),
        });
    }

    public delete<T>(
        endpoint: RequestInfo | URL,
        options?: RequestInit
    ): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: "DELETE" });
    }
}

export const api = new ApiClient(process.env.NEXT_PUBLIC_BASE_URL || "");
