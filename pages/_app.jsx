import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Cabecalho from "../components/cabecalho";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Cabecalho />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
