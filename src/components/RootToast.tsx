"use client";

import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

export const RootToast = () => {
    const [open, setOpen] = useState(true);
    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            sx={{ position: "absolute" }}
        >
            <Alert severity="success" variant="filled" className="w-full">
                This is a success Alert inside a Snackbar!
            </Alert>
        </Snackbar>
    );
};
