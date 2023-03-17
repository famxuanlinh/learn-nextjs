import { useRouter } from "next/router";
import * as React from "react";
import { PostListPageProps } from ".";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export interface PostPageProps {}

export default function PostPage(props: PostPageProps) {
  const router = useRouter();
  return (
    <div>
      <h1>Post page</h1>
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("Get Static paths");
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("Get Static props", context.params?.id);

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
