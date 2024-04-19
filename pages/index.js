import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <p>
        <Link href="/cidades/brejosanto">Brejo Santo</Link>
      </p>
    </>
  );
}
