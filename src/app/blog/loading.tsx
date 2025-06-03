export default function Loading() {
    return (
        <div className="xl:px-[170px] lg:px-[100px] sm:px-8 px-[20px] bg-white dark:bg-zinc-950 min-h-screen">
        <div className="mb-8 h-[60px] bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse pt-[30px]"></div>
    {/* Header Skeleton */}
    <div className="py-[50px] ">
      <div className="h-[55px] w-[250px] bg-zinc-200 dark:bg-zinc-700 rounded mb-4 animate-pulse"></div>
      <div className="h-[24px] w-[80%] max-w-[500px] bg-zinc-200 dark:bg-zinc-700 rounded mb-4 animate-pulse"></div>
      <div className="flex gap-4 mt-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-[24px] w-[24px] bg-zinc-200 dark:bg-zinc-700 rounded-full animate-pulse"></div>
        ))}
      </div>
    </div>

    {/* Cards Skeleton */}
    <div className="grid sm:grid-cols-2 gap-8">
      {[...Array(2)].map((_, i) => (
        <div
          key={i}
          className="max-w-[420px] sm:max-w-[420px] dark:border-1 border-zinc-700 h-full rounded-lg flex flex-col overflow-hidden bg-white dark:bg-zinc-950 shadow-md animate-pulse"
        >
          <div className="w-full h-[185px] bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex flex-col p-[12px] gap-2 flex-1">
            <div className="h-[12px] w-[80px] bg-zinc-200 dark:bg-zinc-700 rounded" />
            <div className="h-[20px] w-[90%] bg-zinc-200 dark:bg-zinc-700 rounded" />
            <div className="h-[20px] w-[60%] bg-zinc-200 dark:bg-zinc-700 rounded" />
          </div>
        </div>
      ))}
    </div>
  </div>
    );
  }
  