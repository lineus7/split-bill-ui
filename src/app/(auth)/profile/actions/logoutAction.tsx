"use server";

import { authService } from "@/services/authService";
import { redirect } from "next/navigation";

export async function logoutAction() {
    await authService.logout();
    redirect("/login");
}
