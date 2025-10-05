import Link from "next/link";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="min-h-dvh flex flex-col bg-highlight-300">
            <header className="sticky top-0 z-10 h-14 bg-light-400 border-b flex items-center justify-center">
                <h1 className="text-[14px] font-bold">Register</h1>
            </header>

            <main className="flex-1 p-4 flex flex-col justify-center">
                <div className="mx-auto w-full max-w-sm">
                    <div className="mb-8 text-center">
                        <div className="mx-auto h-10 w-10 rounded-md bg-highlight-400 flex items-center justify-center text-light-700 font-bold">
                            SB
                        </div>
                        <h2 className="mt-3 text-2xl font-extrabold">
                            Create Account
                        </h2>
                    </div>

                    <RegisterForm />

                    <p className="mt-4 text-center text-sm text-dark-400">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-highlight-700 font-medium"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
