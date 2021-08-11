import React from 'react';
import Link from 'next/link';
function Index({ blogs }) {
  return (
    <div>
      <h1>all blogs </h1>
      {blogs.map((post) => {
        return (
          <article key={post.id}>
            <Link href={`blogs/${post.id}`} passHref>
              <li>
                <p>
                  {post.id} _{post.title}
                </p>
                <span>{post.body}</span>
              </li>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export default Index;

export async function getStaticProps() {
  const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await responce.json();

  return {
    props: {
      blogs: data,
    },
  };
}
