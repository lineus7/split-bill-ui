"use client";

import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useRootToastStore } from "@/store/useRootToastStore";

export const RootToast = () => {
    const [open, setOpen] = useState(true);
    const { state } = useRootToastStore();

    useEffect(() => {
        setOpen(state.message !== "");
    }, [state]);

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            sx={{ position: "absolute" }}
        >
            <Alert severity={state.type} variant="filled" className="w-full">
                {state.message}
            </Alert>
        </Snackbar>
    );
};
