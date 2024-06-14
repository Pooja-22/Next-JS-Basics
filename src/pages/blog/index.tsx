// pages/blog/index.tsx
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import { Post } from '../../types/Post';

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://dummyapi.online/api/blogposts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Layout>
      <div>
        {posts.map((post) => (
          <Card key={post.id} post={post} link={`/blog/${post.id}`}/>
        ))}
      </div>
    </Layout>
  );
}
