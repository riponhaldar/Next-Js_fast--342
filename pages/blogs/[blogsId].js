// import React from 'react';
import { useRouter } from 'next/router';

export default function Blogsid({ post }) {
  // const router = useRouter();

  return (
    <>
      <h3>
        {post.id} {post.title}
      </h3>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await responce.json();
  const paths = data.map((post) => {
    return {
      params: {
        blogsId: `${post.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogsId}`
  );
  const data = await responce.json();

  return {
    props: {
      post: data,
    },
  };
}
