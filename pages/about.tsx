import Header from "@/components/common/header";
import { MainLayout } from "layout";
import Link from "next/link";
import * as React from "react";

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  console.log("about page");
  return (
    <>
      <h1> About</h1>
      <Header />

      <Link href="/"> Go to home</Link>
    </>
  );
}

AboutPage.Layout = MainLayout;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
