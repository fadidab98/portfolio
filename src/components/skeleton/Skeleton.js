// components/Skeleton.jsx
export function SkeletonProjectCard() {
    return (
      <div className="bg-gray-800 p-6 rounded-lg shadow-md animate-pulse">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-pulse">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gray-700 rounded-full"></div>
            </div>
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Heading */}
            <div className="h-12 sm:h-14 md:h-16 bg-gray-700 rounded w-3/4 mb-4 mx-auto md:mx-0"></div>
            {/* Subheading */}
            <div className="h-6 sm:h-7 bg-gray-700 rounded w-2/3 mb-4 mx-auto md:mx-0"></div>
            {/* Paragraph */}
            <div className="space-y-2 mb-6">
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full"></div>
            </div>
            {/* Button */}
            <div className="h-10 sm:h-12 bg-gray-700 rounded w-32 mx-auto md:mx-0"></div>
          </div>
        </div>
      </section>
    );
  }