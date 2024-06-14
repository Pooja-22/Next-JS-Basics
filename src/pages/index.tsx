import axios from 'axios';
import useSWR from 'swr';

import Layout from '@/components/Layout';
import CreatePost from '@/components/CreatePost';
import Card from '@/components/Card';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

interface Post {
  _id: string;
  author: string;
  title: string;
  datePublished: string;
  content: string;
}

interface Props {
  initialData: { success: boolean; data: Post[] };
}

const handleDelete = async (id: string) => {
  await axios.delete(`/api/posts/${id}`);
}

export default function Home({ initialData }: Props) {
  const { data, error } = useSWR('/api/posts', fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <CreatePost />
      {data.data.map((post: Post) => (
        <Card key={post._id} post={post} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:3000/api/posts');
  return { props: { initialData: res.data } };
}
