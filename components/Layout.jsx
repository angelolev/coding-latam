import Head from "next/head";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Aprende y comparte conocimiento con otros devs de la industria"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
