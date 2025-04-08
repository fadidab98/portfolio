import Head from 'next/head';
import { useState } from 'react'; // Import useState for form handling

export default function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false,
  });

  // State to manage submission status (e.g., success or error message)
  const [status, setStatus] = useState('');

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

    // Validate consent
    if (!formData.consent) {
      setStatus('Please agree to receive emails.');
      return;
    }

    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully! We’ll get back to you soon.');
        setFormData({ name: '', email: '', message: '', consent: false }); // Reset form
      } else {
        const errorData = await res.json();
        setStatus(errorData.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <Head>
        <title>FadiLogic</title>
        <meta name="description" content="Get in touch with me." />
      </Head>

      <section className="py-16 px-4 max-w-lg mx-auto">
        <h2 className="text-3xl mb-6 text-center">Get in Touch</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-background border border-accent rounded text-text focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-background border border-accent rounded text-text focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 bg-background border border-accent rounded text-text h-32 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="h-4 w-4 text-accent border-accent rounded focus:ring-accent"
              required
            />
            <label htmlFor="consent" className="text-text">
              I agree to receive emails from FADILOGIC DEV.
            </label>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-accent text-background rounded hover:bg-opacity-80 transition duration-300"
          >
            Send
          </button>
        </form>
        {status && <p className="mt-4 text-center text-text">{status}</p>}
        <p className="mt-4 text-center">
          Or email me at: <a href="mailto:fadi@serp24.online">fadi@serp24.online</a>
        </p>
      </section>
    </div>
  );
}