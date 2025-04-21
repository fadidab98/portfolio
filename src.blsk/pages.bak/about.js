import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>FadiLogic</title>
        <meta
          name="description"
          content="Learn more about my skills and experience."
        />
      </Head>

      <section className="py-16 px-4 max-w-2xl mx-auto">
        <h2 className="text-3xl mb-6 text-center">About Me</h2>
        <p className="text-lg">
          I’m a passionate full-stack developer with expertise in Next.js and a
          flair for creating innovative, user-focused solutions. My journey
          blends technical precision with creative problem-solving, delivering
          experiences that stand out.
        </p>
      </section>
    </div>
  );
}
