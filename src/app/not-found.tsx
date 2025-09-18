import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-highlight-300 p-6 text-center">
      <div className="max-w-sm">
        <div className="mx-auto h-14 w-14 rounded-full bg-light-300 border border-light-600 flex items-center justify-center">
          <span className="text-2xl font-extrabold text-dark-400">404</span>
        </div>
        <h1 className="mt-4 text-2xl font-extrabold">Page Not Found</h1>
        <p className="mt-2 text-sm text-dark-400">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/dashboard"
          className="mt-6 inline-block rounded-xl bg-highlight-700 text-light-300 px-5 py-3 text-sm font-medium"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
