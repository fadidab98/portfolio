import { useScanWebsiteMutation } from '@/lib/scanApi';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',

  });
  const [status, setStatus] = useState('');
  const [sendContact, { isLoading, error }] = useScanWebsiteMutation();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();


    setStatus('Sending...');

    try {
      const response = await sendContact(formData).unwrap(); // Unwrap to get the response data
      setStatus(response.message || 'Message sent successfully! We’ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus(
        err?.data?.message || 'Failed to send message. Please try again later.'
      );
    }
  };

  return (
<div className="min-h-screen bg-background text-text font-inter">
      <Head>
        <title>Fadi Dabboura | Contact Me - FadiLogic</title>
        <meta
          name="description"
          content="Contact Fadi Dabboura for collaborations, inquiries, or to discuss DevOps and web development projects at FadiLogic."
        />
        <meta
          name="keywords"
          content="fadi dabboura, contact, devops, web development, website scan, fadilogic"
        />
        <meta name="author" content="Fadi Dabboura" />
        <link rel="canonical" href="https://fadilogic.serp24.online/contact" />
        <meta property="og:title" content="Fadi Dabboura - Contact | FadiLogic" />
        <meta
          property="og:description"
          content="Get in touch with Fadi Dabboura for DevOps, web development, or to try the free website scan tool at FadiLogic."
        />
        <meta property="og:url" content="https://fadilogic.serp24.online/contact" />
        <meta property="og:image" content="https://fadilogic.serp24.online/images/FadiLogic.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Fadi Dabboura Contact Page" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="FadiLogic" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:title" content="Fadi Dabboura | DevOps & Web Developer Portfolio - FadiLogic" />
        <meta name="twitter:description" content="Check out Fadi Dabboura’s FadiLogic: Free webscan tool and portfolio of DevOps and web projects!" />
        <meta name="twitter:image" content="https://fadilogic.serp24.online/images/FadiLogic.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Fadi Dabboura",
              "url": "https://fadilogic.serp24.online/contact",
              "description": "Get in touch with Fadi Dabboura for DevOps and web development inquiries.",
              "mainEntity": {
                "@type": "Person",
                "name": "Fadi Dabboura",
                "email": "mailto:fadi@serp24.online",
                "sameAs": [
                  "https://www.linkedin.com/in/fadi-dabboura-8300bb211",
                  "https://www.facebook.com/fadi.dabboura.73",
                  "https://github.com/fadidab98"
                ]
              }
            }),
          }}
        />
      </Head>

      <section className="py-16 px-4 max-w-lg mx-auto">
        <h2 className="text-3xl mb-6 text-center text-white">Get in Touch</h2>
        <p className="text-center mb-8">
          Have a question or want to collaborate? Fill out the form below or return to my{' '}
          <Link href="/" className="text-accent underline">
            portfolio
          </Link>.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-secondary border border-accent rounded text-text focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-secondary border border-accent rounded text-text focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 bg-secondary border border-accent rounded text-text h-32 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full p-2 bg-accent text-background rounded hover:bg-opacity-80 transition duration-300 disabled:opacity-50"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
        {status && <p className="mt-4 text-center text-text">{status}</p>}
        <p className="mt-4 text-center text-gray-300">
          Or email me directly at:{' '}
          <a href="mailto:fadi@serp24.online" className="text-accent">
            fadi@serp24.online
          </a>
        </p>
      </section>
    </div>
  );
}