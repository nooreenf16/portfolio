import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    const client = await clientPromise;
    const db = client.db('portfolio');

    await db.collection('contacts').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    res.status(200).json({ message: 'Contact info stored successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Database error', error });
  }
}
