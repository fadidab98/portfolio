import { useState } from 'react';
import { useSubmitContactFormMutation } from '@/lib/contactApi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [sendContact, { isLoading, error }] = useSubmitContactFormMutation();

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
      {error && (
        <p className="mt-4 text-center text-red-500">
          {error.data?.message || 'An error occurred'}
        </p>
      )}
    </>
  );
}
