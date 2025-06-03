export default function Loading() {
  return (
    <main className="container mx-auto min-h-screen max-w-3xl xl:px-1 px-[20px] flex flex-col gap-4">
            {/* Header Skeleton */}
            <div className="mb-8 h-[60px] bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mt-[30px]"></div>

            {/* Title Skeleton */}
            <div className="h-[70px] w-[80%] bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>

            {/* Author + Date */}
            <div className="flex flex-row items-center gap-5 mt-2">
                <div className="h-[32px] w-[32px] bg-zinc-300 dark:bg-zinc-700 rounded-full animate-pulse"></div>
                <div className="h-[16px] w-[120px] bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
                <div className="h-[16px] w-[60px] bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
            </div>

            <div className="my-6 h-[1px] bg-zinc-200 dark:bg-zinc-800 animate-pulse" ></div>

            {/* Hero Image */}
            <div className="w-full aspect-video bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
            <div className="h-[14px] w-[200px] bg-zinc-200 dark:bg-zinc-700 rounded mt-2 animate-pulse"></div>

            {/* Body Content Skeleton */}
            <div className="mt-8 space-y-6">
                {[...Array(5)].map((_, paraIndex) => (
                    <div key={paraIndex} className="space-y-3">
                        {[...Array(Math.floor(Math.random() * 2) + 3)].map((_, lineIndex) => {
                            const width = Math.floor(Math.random() * 40) + 60; // 60% - 100%
                            return (
                                <div
                                    key={lineIndex}
                                    className="h-[16px] bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"
                                    style={{ width: `${width}%` }}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Footer Skeleton */}
            <div className="mt-12 h-[60px] bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
        </main>
  );
}
