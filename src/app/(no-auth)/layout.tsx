import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function NoAuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token");

    if (token) {
        return redirect("/dashboard");
    }

    return <>{children}</>;
}
