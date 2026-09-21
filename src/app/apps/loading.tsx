import React from "react";

const AppCardSkeleton = () => {
  return (
    <div className="animate-pulse space-y-3 rounded-xl bg-white p-4">
      <div className="h-50 w-full rounded-lg bg-gray/10" />

      <div className="h-6 w-3/4 rounded bg-gray/10" />

      <div className="flex items-center justify-between gap-4">
        <div className="h-8 w-20 rounded-md bg-gray/10" />
        <div className="h-8 w-16 rounded-md bg-gray/10" />
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <section className="mt-14 bg-gray/10 pb-14">
      <div className="container mx-auto mt-20 space-y-10 px-4 lg:px-0">
        <div className="space-y-4 text-center">
          <div className="mx-auto h-12 w-96 max-w-full rounded-lg bg-gray/20 animate-pulse" />
          <div className="mx-auto h-6 w-lg max-w-full rounded-lg bg-gray/20 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <AppCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;