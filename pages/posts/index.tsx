import { GetStaticProps, GetStaticPropsContext } from "next";
import * as React from "react";

interface Post {
  id: string;
  title: string;
}

export interface PostListPageProps {
  post: Post;
}

export default function PostListPage({ post }: PostListPageProps) {
  return (
    <div>
      <h1>Post Page</h1>
      <p>{post.id}</p>
      <p>{post.title}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  //Only on sever-side
  //Ở mode production thì nó chỉ chạy lúc build-time còn ở dev thì nó sẽ chạy khi refresh
  return {
    props: {
      post: {
        id: "123-abc",
        title: "Learn NextJS",
      },
    },
  };
};
