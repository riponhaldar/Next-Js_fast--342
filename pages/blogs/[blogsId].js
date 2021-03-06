// import React from 'react';
import { useRouter } from 'next/router';

export default function Blogsid({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <p>loading....</p>
      </>
    );
  }
  return (
    <>
      <h3>
        {post.id} {post.title}
      </h3>
      <p>{post.body} </p>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { blogsId: '1' },
      },
      {
        params: { blogsId: '2' },
      },
      {
        params: { blogsId: '3' },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogsId}`
  );
  const data = await responce.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}
