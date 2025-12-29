import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

type Data = {
  message: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body as {
      name: string;
      email: string;
      message: string;
    };

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    const client = await clientPromise;
    const db = client.db('portfolio');

    const result = await db.collection('contacts').insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    console.log('Inserted document ID:', result.insertedId);

    res.status(200).json({ message: 'Contact info stored successfully' });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Database error', error });
  }
}
