import { redirect } from "next/navigation";
import { cookiesStore } from "@/utils/cookies";

export default async function NoAuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const token = await cookiesStore.accessToken.get();

    if (token) {
        return redirect("/dashboard");
    }

    return <>{children}</>;
}
