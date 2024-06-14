// components/Card.tsx
import Link from 'next/link';
import { Post } from '../types/Post';

interface CardProps {
  post: Post;
  link?: string;
  handleDelete?: () => void;
  handleFetch?: () => Post
}

export default function Card({
  post,
  link,
  handleDelete,
  handleFetch,
}: CardProps) {
  return (
    <div className='card'>
      <h2>{post.title}</h2>
      <p className='meta'>By {post.author} Published on {new Date(post.date_published).toLocaleDateString()}</p>
      <p className='content'>{post?.content?.substring(0, 20)}...</p>
      {handleDelete && (<button onClick={() => handleDelete(post._id) }>Delete</button>)}
      <Link className='readMore' href={link}>Read More</Link>
    </div>
  );
}
