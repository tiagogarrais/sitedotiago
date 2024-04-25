import { SessionProvider } from "next-auth/react";
import Head from "next/head"; // Importe o componente Head
import "../styles/globals.css";
import Cabecalho from "../components/cabecalho";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Este é o site do Tiago!</title>
        <meta name="author" content="Tiago das Graças Arrais" />
        <meta name="Catálogo com empresas e profissionais autônomos" />
        <meta
          name="facebook-domain-verification"
          content="uvlhr3usvrc5ct1jn1z2dlvwyavavj"
        />
      </Head>
      <Cabecalho />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
