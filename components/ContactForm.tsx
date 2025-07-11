'use client';

import { useState } from 'react';
import { useSubmitContactFormMutation } from '@/lib/contactApi';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ApiError {
  data?: { message: string };
  status?: number;
}

export default function ContactForm(): React.JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string>('');
  const [sendContact, { isLoading, error }] = useSubmitContactFormMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await sendContact(formData).unwrap();
      setStatus(response.message || 'Message sent successfully! We’ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      const apiError = err as ApiError;
      setStatus(apiError?.data?.message || 'Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit} aria-label="Contact Fadi Dabboura">
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
            aria-label="Your Name"
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
            aria-label="Your Email"

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
            aria-label="Your Message"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full p-2 bg-accent text-background rounded hover:bg-opacity-80 transition duration-300 disabled:opacity-50"
          style={{ backgroundColor: '#d4af37'}}
          aria-label={isLoading ? 'Sending message' : 'Send message'}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {status && <p className="mt-4 text-center text-text">{status}</p>}
      {error && (
        <p className="mt-4 text-center text-red-500">
          {(error as ApiError)?.data?.message || 'An error occurred'}
        </p>
      )}
    </>
  );
}