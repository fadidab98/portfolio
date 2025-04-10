// components/Skeleton.jsx
export function SkeletonProjectCard() {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-md ">
        {/* Image placeholder */}
        <div className="w-full h-48 bg-gray-700 rounded-md mb-4"></div>
        {/* Title placeholder */}
        <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
        {/* Description placeholders */}
        <div className="h-4 bg-gray-700 rounded w-full mb-1"></div>
        <div className="h-4 bg-gray-700 rounded w-full mb-1"></div>
        <div className="h-4 bg-gray-700 rounded w-2/3 mb-4"></div>
        {/* Technologies placeholder */}
        <div className="h-4 bg-gray-700 rounded w-1/2 mb-4"></div>
        {/* Links placeholders */}
        <div className="flex space-x-4">
          <div className="h-4 bg-gray-700 rounded w-16"></div>
          <div className="h-4 bg-gray-700 rounded w-16"></div>
        </div>
      </div>
    );
  }

  export function SkeletonHero() {
    return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[210px] sm:h-[280px] md:h-[350px] lg:h-[420px] bg-gray-300 animate-pulse rounded-full"></div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="h-10 sm:h-12 md:h-14 bg-gray-300 animate-pulse mb-4 rounded w-3/4 mx-auto md:mx-0"></div>
            <div className="h-6 sm:h-8 bg-gray-300 animate-pulse mb-4 rounded w-2/3 mx-auto md:mx-0"></div>
            <div className="space-y-4 min-h-[220px] sm:min-h-[180px] md:min-h-[200px]">
              <div className="h-16 bg-gray-300 animate-pulse rounded w-full"></div>
              <div className="h-10 bg-gray-300 animate-pulse rounded w-3/4 mx-auto md:mx-0"></div>
              <div className="h-20 bg-gray-300 animate-pulse rounded w-full"></div>
            </div>
            <div className="flex justify-center md:justify-start gap-4 mb-6 mt-6">
              <div className="h-8 w-8 bg-gray-300 animate-pulse rounded-full"></div>
              <div className="h-8 w-8 bg-gray-300 animate-pulse rounded-full"></div>
              <div className="h-8 w-8 bg-gray-300 animate-pulse rounded-full"></div>
            </div>
            <div className="h-10 w-32 bg-gray-300 animate-pulse rounded mx-auto md:mx-0"></div>
          </div>
        </div>
      </section>
    );
  }