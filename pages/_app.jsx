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
        <title>O maior catálogo de empresas da cidade!</title>
        <meta name="author" content="Tiago das Graças Arrais" />
        <meta name="Catálogo com empresas e profissionais autônomos" />
      </Head>
      <Cabecalho />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
