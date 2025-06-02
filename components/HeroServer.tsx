// HeroServer.tsx
import Image from 'next/image';
import Link from 'next/link';

interface HeroServerProps {
  children: React.ReactNode;
}

export default function HeroServer({ children }: HeroServerProps) {
  return (
    <section
      id="home"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-[400px]"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] aspect-[5/7]">
            <div className="relative z-20">
              <Image
                src="/images/fadi-dabboura-profile.webp" // Updated image name
                alt="Fadi Dabboura, DevOps Engineer and Web Developer at FadiLogic"
                title="Fadi Dabboura Profile Image"
                width={300}
                height={420}
                priority
                fetchPriority="high"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoBAAEAAQAcJaACdLoB+AA/an7gAAA="
                className="w-full h-full object-cover rounded-full border-4 border-accent shadow-lg"
                sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
              />
            </div>
            <div
              className="absolute -top-6 -left-6 w-28 h-28 bg-accent rounded-full opacity-20 z-10"
              style={{ backgroundColor: '#d4af37' }}
            />
            <div
              className="absolute -bottom-6 -right-6 w-16 h-16 bg-accent rounded-full opacity-20 z-10"
              style={{ backgroundColor: '#d4af37' }}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">Fadi Dabboura’s FadiLogic</h1>
          <h2 className="text-xl sm:text-2xl text-white mb-4 leading-relaxed">
            DevOps Engineer & Web Developer
          </h2>
          <div className="text-base text-gray-300 space-y-3 mb-6">
            <p className="leading-relaxed">
              I’m <strong>Fadi Dabboura</strong>, an expert <strong>DevOps Engineer</strong> and{' '}
              <strong>Web Developer</strong> focused on CI/CD pipelines, cloud infrastructure, and
              high-performance web applications.
            </p>
            <p className="leading-relaxed">
              Use <strong>Fadi Dabboura</strong>’s{' '}
              <Link
                href="/website-scan"
                className="text-accent underline hover:text-accent/80 transition"
                aria-label="Try Fadi Dabboura’s free website scan tool"
              >
                free website scan tool
              </Link>{' '}
              to optimize your site’s performance, SEO, and user experience.
            </p>
            <p className="leading-relaxed">
              As a Master’s student in Informatics at Ostfalia University, <strong>Fadi Dabboura</strong> delivers cutting-edge
              solutions. Explore my{' '}
              <Link
                href="#projects"
                className="text-accent underline hover:text-accent/80 transition"
                aria-label="View Fadi Dabboura’s portfolio"
              >
                portfolio
              </Link>{' '}
              or{' '}
              <Link
                href="/contact"
                className="text-accent underline hover:text-accent/80 transition"
                aria-label="Contact Fadi Dabboura"
              >
                contact Fadi Dabboura
              </Link>{' '}
              to start your next project.
            </p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}