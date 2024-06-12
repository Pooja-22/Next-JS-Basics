// components/Card.tsx
import Link from 'next/link';
import { Post } from '../types/Post';

interface CardProps {
  post: Post;
}

export default function Card({ post }: CardProps) {
  return (
    <div className='card'>
      <h2>{post.title}</h2>
      <p className='meta'>By {post.author} Published on {new Date(post.date_published).toLocaleDateString()}</p>
      <p className='content'>{post?.content?.substring(0, 20)}...</p>
      <Link className='readMore' href={`/blog/${post.id}`}>Read More</Link>
    </div>
  );
}
