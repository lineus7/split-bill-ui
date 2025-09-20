import { Container } from "@mui/material";
import Link from "next/link";
import { BaseButton } from "./components/BaseButton";

export default function Home() {
    return (
        <Container className="py-10 h-screen bg-highlight-300 flex flex-col justify-end">
            <Link href="/login" className="w-full flex flex-col">
                <BaseButton>Get Started</BaseButton>
            </Link>
        </Container>
    );
}
