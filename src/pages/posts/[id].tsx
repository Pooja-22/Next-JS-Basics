// pages/blog/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Post } from '../../types/Post';

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data.data));
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <Layout>
      <div className='container'>
        <button className='backButton' onClick={() => router.back()}>Back</button>
        <h1 className='detail-page-title'>{post.title}</h1>
        <p className='meta-data'>By {post.author}</p>
        <p className='meta-data'>Published on {new Date(post.date_published).toLocaleDateString()}</p>
        <p className='detailed-content'>{post.content}</p>
      </div>
    </Layout>
  );
}
