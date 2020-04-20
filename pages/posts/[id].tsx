import fetch from "node-fetch";
import React from "react";
import { IPost } from ".";
import {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetServerSideProps,
} from "next";

type Props = { post: IPost };

const PostDetail: NextPage<Props> = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.id
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

// export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/" + params.id
//   );
//   const post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const posts = await res.json();

//   const paths = posts.map((post) => `/posts/${post.id}`);

//   return { paths, fallback: false };
// };

export default PostDetail;
