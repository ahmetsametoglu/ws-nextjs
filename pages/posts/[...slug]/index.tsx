import React from "react";
import {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetServerSideProps,
} from "next";
import { IPost } from "../index";
import useSWR from "swr";
import { useRouter } from "next/router";
import fetch from "../../../libs/fetch";

type Props = { post?: IPost; postId: string; commentId: string };

const PostDetail: NextPage<Props> = () => {
  const { query } = useRouter();
  console.log(query);

  const [postId, commentId] = query.slug as string[];
  console.log({ postId, commentId });

  const response = useSWR<IPost>(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    fetch
  );
  console.log(response);

  const { data: post, error } = response;

  if (error) return <div>failed to load</div>;
  if (!post) return <div>loading...</div>;
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const [postId, commentId] = context.params.slug as string[];

  // console.log({ postId, commentId });

  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${postId}`
  // );
  // const post = await res.json();

  return {
    props: {},
  };
};

// export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/" + params.postId
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
