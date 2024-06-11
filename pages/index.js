import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <h2>Escolha a sua cidade</h2>
      <Link href="/cidades/brejosanto/">
        <button className="centralizada botao botao-grande">Brejo Santo</button>
      </Link>
    </>
  );
}
