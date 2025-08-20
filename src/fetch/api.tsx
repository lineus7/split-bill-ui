const baseFetching = async (input: RequestInfo | URL, init?: RequestInit) => {
    const base = process.env.NEXT_PUBLIC_BASE_URL;
    const headers = new Headers(init?.headers);
    headers.set("Content-Type", "application/json");
    const response = await fetch(`${base}${input}`, {
        ...init,
        headers,
        credentials: "include",
    });
    if (!response.ok) {
        const error = await response.json();
        throw error;
    }
    return response.json();
};

export const api = {
    get: async (input: RequestInfo | URL, init?: RequestInit) => {
        return baseFetching(input, {
            ...init,
            method: "GET",
        });
    },
    post: async (
        input: RequestInfo | URL,
        body: Record<string, any>,
        init?: RequestInit
    ) => {
        return baseFetching(input, {
            ...init,
            method: "POST",
            body: JSON.stringify(body),
        });
    },
    put: async (
        input: RequestInfo | URL,
        body: Record<string, any>,
        init?: RequestInit
    ) => {
        return baseFetching(input, {
            ...init,
            method: "PUT",
            body: JSON.stringify(body),
        });
    },
    delete: async (
        input: RequestInfo | URL,
        body: Record<string, any>,
        init?: RequestInit
    ) => {
        return baseFetching(input, {
            ...init,
            method: "DELETE",
            body: JSON.stringify(body),
        });
    },
};
