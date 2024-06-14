// ./src/pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import dbConnect from '../../../server/db';
import Post from '../../../server/models/Post';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method Not Allowed' });
    return;
  }

  const { title, content } = req.body;

  try {
    await dbConnect();
    const post = await Post.findOne({ title });
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }

    const contentMatch = await bcrypt.compare(content, post.contentHash);
    if (!contentMatch) {
      res.status(401).json({ message: 'Invalid content' });
      return;
    }
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
