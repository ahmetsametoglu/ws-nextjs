// You can use any data fetching library
import fetch from "node-fetch";
import React from "react";
import { GetStaticProps, NextPage } from "next";

type Props = { posts: IPost[] };
const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map((x) => (
        <div key={x.id}>{`${x.id} - ${x.title}`}</div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const posts = (await res.json()).map((x) => {
    return { id: x.id, title: x.title };
  });

  // console.log(posts.map((x) => x.id));

  return {
    props: {
      posts,
    },
  };
};

export default Blog;

export interface IPost {
  id: number;
  title: string;
  body: string;
}
