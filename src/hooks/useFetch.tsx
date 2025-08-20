import { useEffect, useState } from "react";

export const useFetch = ({
    fetchFn,
    enabled = true,
}: {
    fetchFn: () => Promise<any>;
    enabled: boolean;
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    const [data, setData] = useState<any>(null);

    const fetch = async () => {
        setLoading(true);
        try {
            const response = await fetchFn();
            setLoading(false);
            setData(response);
            return response;
        } catch (error) {
            setError(error);
            setLoading(false);
            return undefined;
        }
    };

    useEffect(() => {
        if (enabled) {
            fetch();
        }
    }, [enabled]);

    return {
        fetch,
        loading,
        error,
        data,
    };
};
