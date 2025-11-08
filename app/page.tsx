import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
          Find your dream job
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-zinc-500 dark:text-zinc-400 md:text-xl">
          Our platform connects you with the best job opportunities from top companies.
        </p>
      </div>
      <div className="mt-8">
        <Link
          href="/jobs"
          className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
        >
          Browse Jobs
        </Link>
      </div>
    </div>
  );
}
