// pages/about.tsx
import Layout from '../components/Layout';
import { useState } from 'react';
import Image from 'next/image'

export default function About() {
  const src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&s"
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Layout>
      <h1>About Us</h1>
      <div>
        <Image
            src={imgSrc}
            alt="Blog"
            width={500}
            height={500}
        />
      </div>
    </Layout>
  );
}
