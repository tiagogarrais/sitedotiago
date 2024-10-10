import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import "../styles/globals.css";
import Cabecalho from "../components/cabecalho";
import Rodape from "../components/rodape";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>
          Este é o guia comercial com o maior catálogo de empresas da cidade!
        </title>
        <meta
          name="description"
          content="Catálogo com empresas e profissionais autônomos em Brejo Santo. Encontre os melhores serviços e produtos da cidade."
        />
        <meta name="google-adsense-account" content="ca-pub-6970958313357869" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6970958313357869" crossorigin="anonymous"/>
        
        <meta name="author" content="Tiago das Graças Arrais" />
        <meta
          name="keywords"
          content="guia comercial, empresas, profissionais autônomos, Brejo Santo, serviços, produtos"
        />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="Guia Comercial de Brejo Santo" />
        <meta
          property="og:description"
          content="Catálogo com empresas e profissionais autônomos em Brejo Santo. Encontre os melhores serviços e produtos da cidade."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sitedotiago.com.br" />
        <meta
          property="og:image"
          content="https://www.sitedotiago.com.br/images/logomarca.jpeg"
        />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guia Comercial de Brejo Santo" />
        <meta
          name="twitter:description"
          content="Catálogo com empresas e profissionais autônomos em Brejo Santo. Encontre os melhores serviços e produtos da cidade."
        />
        <meta
          name="twitter:image"
          content="https://www.sitedotiago.com.br/images/logomarca.jpeg"
        />
      </Head>
      <Cabecalho />
      <Component {...pageProps} />
      <Rodape />
    </SessionProvider>
  );
}
