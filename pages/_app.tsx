// import "@/styles/globals.css";
import { EmptyLayout } from "layout";
import type { AppProps } from "next/app";
import { AppPropsWithLayout } from "../models";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
