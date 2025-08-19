import { Container } from "@mui/material";
import { BasePasswordInput } from "../../components/BasePasswordInput";
import { BaseTextField } from "../../components/BaseTextField";
import { BaseButton } from "../../components/BaseButton";
import { BaseText } from "../../components/BaseText";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="h-screen">
      <Container className="h-[40%] bg-highlight-300 flex items-center justify-center">
        <Image src="/image-placeholder.svg" alt="" width={33} height={32} />
      </Container>

      <Container className="h-[60%] bg-light-300 flex flex-col">
        <div className="flex-1 py-10 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <BaseText variant="title">Welcome</BaseText>

            <div className="flex flex-col gap-4">
              <BaseTextField label="Email" />
              <BasePasswordInput label="Password" />
            </div>
          </div>

          <BaseButton label="Login" />
        </div>
      </Container>
    </div>
  );
}
