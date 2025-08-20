export const fetchBase = async (
    input: RequestInfo | URL,
    init?: RequestInit
) => {
    const base = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${base}${input}`, {
        ...init,
        headers: {
            ...init?.headers,
            "Content-Type": "application/json",
        },
        credentials: "include",
    });
    if (!response.ok) {
        const error = await response.json();
        throw error;
    }
    return response.json();
};
