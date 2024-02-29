import Head from "next/head";
import Layout from "@/common/Layout/layout";
import { Home } from "@/modules/home";

export default function HomePage() {

  return (
    <>
      <Head>
        <title>Yllaaa</title>
      </Head>
      <Home />
    </>
  );
}

HomePage.getLayout = function getLayout(page: any) {
  return (
    <Layout>{page}</Layout>
  )
}