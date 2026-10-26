import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

export default function NotFound() {
  return (
    <div className="page-content min-h-screen bg-white text-zinc-900 shadow-md dark:bg-zinc-950 dark:text-zinc-100">
      <Header />
      <main className="mx-auto flex min-h-[65svh] max-w-2xl flex-col items-center justify-center py-16 text-center sm:py-24" aria-labelledby="not-found-title">
        <span className="rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium tracking-widest text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          PAGE NOT FOUND
        </span>
        <p aria-hidden="true" className="mt-6 select-none text-[clamp(6rem,22vw,11rem)] font-semibold leading-none tracking-tighter text-zinc-200 dark:text-zinc-800">
          404
        </p>
        <h1 id="not-found-title" className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          This page took a wrong turn.
        </h1>
        <p className="mt-4 max-w-md text-base leading-7 text-zinc-600 dark:text-zinc-400">
          The page or article you&apos;re looking for may have moved or is no longer available. There&apos;s still more to explore.
        </p>
        <nav aria-label="Page recovery" className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <Link href="/blog" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white">
            Explore the blog <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500 dark:border-zinc-700 dark:hover:bg-zinc-900">
            Back to home
          </Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
