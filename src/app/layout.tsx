import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Container } from "@mui/material";
import { cn } from "@/utils/style";
import { RootToast } from "@/app/components/RootToast";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export const metadata: Metadata = {
    title: "Split Bill",
    description: "Split Bill UI",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={cn(roboto.variable, roboto.className)}>
            <body>
                <AppRouterCacheProvider options={{ enableCssLayer: true }}>
                    <ThemeProvider theme={theme}>
                        <Container className="relative min-h-screen max-w-md p-0">
                            <RootToast />
                            {children}
                        </Container>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
