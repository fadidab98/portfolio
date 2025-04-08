import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message, consent } = req.body;

  // Validate form data
  if (!name || !email || !message || !consent) {
    return res.status(400).json({ message: 'All fields are required, including consent.' });
  }

  try {
    // Step 1: Optionally store the message in a database (e.g., MongoDB, Supabase, etc.)
    // For now, we’ll skip this and focus on triggering the automation.

    // Step 2: Add the contact to List #7 to trigger the automation
    const brevoApiKey = process.env.BREVO_KEY; // Store your Brevo API key in .env.local
    const listId = 7; // List ID #7 from your automation

    await axios.post(
      'https://api.brevo.com/v3/contacts',
      {
        email,
        attributes: {
          PRENOM: name, // Use PRENOM to match your template's personalization
        },
        listIds: [listId], // Add the contact to List #7
        updateEnabled: true, // Update the contact if they already exist
      },
      {
        headers: {
          'api-key': brevoApiKey,
          'Content-Type': 'application/json',
        },
      }
    );

    // Step 3: Optionally send the message to yourself (e.g., via email or store in a database)
    // For now, we’ll just return a success response.
    return res.status(200).json({ message: 'Message sent successfully! We’ll get back to you soon.' });
  } catch (error) {
    console.error('Error adding contact:', error.response?.data || error.message);
    return res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
}