"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    cssVariables: true,
    typography: {
        fontFamily: "var(--font-roboto)",
    },
    breakpoints: {
        values: {
            xs: 9999,
            sm: 9999,
            md: 9999,
            lg: 9999,
            xl: 9999,
        },
    },
});

export default theme;
