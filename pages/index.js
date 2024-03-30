import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <h1>Este é o site do Tiago</h1>
      <p>Encontre aqui o que está procurando</p>
      <p>
        <Link href="/cidades/brejosanto">Brejo Santo</Link>
      </p>
    </>
  );
}
