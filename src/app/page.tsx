import { Button, Container } from "@mui/material";
import { BasePasswordInput } from "./components/BasePasswordInput";
import { BaseTextField } from "./components/BaseTextField";
import { BaseButton } from "./components/BaseButton";

export default function Home() {
  return (
    <>
      <div className="h-screen">
        <div className="h-[40%] bg-highlight-300" />

        <div className="h-[60%] bg-light-300 flex flex-col">
          <Container className="flex-1 px-6 py-10 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <h1 className="font-extrabold text-2xl">Welcome</h1>
              <div className="flex flex-col gap-4">
                <BaseTextField label="Email/Username" variant="outlined" />
                <div className="flex flex-col gap-2">
                  <BasePasswordInput label="Password" />
                </div>
              </div>
            </div>

            <BaseButton label="Login" />
          </Container>
        </div>
      </div>
    </>
  );
}
