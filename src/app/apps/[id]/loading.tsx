const AppDetailsLoading = () => {
  return (
    <section className="mt-14 bg-gray/10 py-14">
      <div className="container mx-auto grid grid-cols-1 gap-4 px-4 lg:grid-cols-12 lg:px-0">
        {/* App image skeleton */}
        <div className="flex items-center justify-center rounded-2xl bg-white p-10 lg:col-span-3">
          <div className="h-37.5 w-37.5 animate-pulse rounded-xl bg-gray/20" />
        </div>

        {/* App information skeleton */}
        <div className="space-y-4 px-5 lg:col-span-9">
          <div className="space-y-3">
            <div className="h-9 w-72 animate-pulse rounded-md bg-gray/20" />
            <div className="h-5 w-48 animate-pulse rounded-md bg-gray/20" />
          </div>

          <div className="h-px w-full bg-gray-300" />

          <div className="flex items-start gap-10 sm:gap-14">
            {[1, 2, 3].map((item) => (
              <div key={item} className="space-y-2">
                <div className="h-5 w-5 animate-pulse rounded bg-gray/20" />
                <div className="h-3 w-20 animate-pulse rounded bg-gray/20" />
                <div className="h-7 w-14 animate-pulse rounded bg-gray/20" />
              </div>
            ))}
          </div>

          <div className="h-10 w-36 animate-pulse rounded-sm bg-gray/20" />
        </div>
      </div>

      {/* Ratings skeleton */}
      <div className="container mx-auto mb-10 px-4 lg:px-0">
        <section className="mt-10 p-5">
          <div className="mb-6 h-6 w-20 animate-pulse rounded bg-gray/20" />

          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="h-3 w-10 animate-pulse rounded bg-gray/20" />
                <div
                  className="h-4 animate-pulse rounded-sm bg-gray/20"
                  style={{ width: `${100 - item * 12}%` }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <hr className="border-gray/50" />

      {/* Description skeleton */}
      <div className="container mx-auto px-4 lg:px-0">
        <section className="mt-5 space-y-4 p-5">
          <div className="h-6 w-28 animate-pulse rounded bg-gray/20" />
          <div className="h-5 w-full animate-pulse rounded bg-gray/20" />
          <div className="h-5 w-11/12 animate-pulse rounded bg-gray/20" />
          <div className="h-5 w-8/12 animate-pulse rounded bg-gray/20" />
        </section>
      </div>
    </section>
  );
};

export default AppDetailsLoading;
