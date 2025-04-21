import { useState } from 'react';
import { useSubmitContactFormMutation } from '../lib/contactApi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [sendContact, { isLoading, error }] = useSubmitContactFormMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await sendContact(formData).unwrap();
      setStatus(
        response.message ||
          'Message sent successfully! We’ll get back to you soon.'
      );
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus(
        error?.data?.message ||
          err?.data?.message ||
          'Failed to send message. Please try again later.'
      );
    }
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-lg text-white mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 bg-secondary border border-accent rounded text-text focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg text-white mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 bg-secondary border border-accent rounded text-text focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg text-white mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 bg-secondary border border-accent rounded text-text h-32 focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full p-2 bg-accent text-background rounded hover:bg-opacity-80 transition duration-300 disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {status && <p className="mt-4 text-center text-text">{status}</p>}
      {error && (
        <p className="mt-4 text-center text-red-500">
          {error.data?.message || 'An error occurred'}
        </p>
      )}
    </>
  );
}
