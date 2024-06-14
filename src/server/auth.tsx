import jwt from 'jsonwebtoken';
import { NextApiRequest } from 'next';

export function verifyToken(req: NextApiRequest) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) throw new Error('No token provided');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
}
