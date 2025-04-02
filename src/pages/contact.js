import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>FadiLogic</title>
        <meta name="description" content="Get in touch with me." />
      </Head>
     
      <section className="py-16 px-4 max-w-lg mx-auto">
        <h2 className="text-3xl mb-6 text-center">Get in Touch</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 bg-background border border-accent rounded text-text focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-background border border-accent rounded text-text focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 bg-background border border-accent rounded text-text h-32 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="w-full p-2 bg-accent text-background rounded hover:bg-opacity-80 transition duration-300"
          >
            Send
          </button>
        </form>
        <p className="mt-4 text-center">
          Or email me at: <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
      </section>
      <Footer />
    </div>
  );
}