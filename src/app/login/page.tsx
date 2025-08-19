import { Container } from "@mui/material";
import Image from "next/image";
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="h-screen">
      <Container className="h-[40%] bg-highlight-300 flex items-center justify-center">
        <Image src="/image-placeholder.svg" alt="" width={33} height={32} />
      </Container>

      <Container className="h-[60%] bg-light-300 flex flex-col">
        <LoginForm />
      </Container>
    </div>
  );
}
