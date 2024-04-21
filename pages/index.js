import { useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  // Função para redirecionar para o link quando a página for carregada
  useEffect(() => {
    // Redireciona para o link
    window.location.href = "/cidades/brejosanto";
  }, []); // A dependência vazia faz com que o efeito seja executado apenas uma vez, quando a componente é montada

  // Renderiza um componente vazio enquanto redireciona
  return <>Estamos redirecionando para Brejo Santo</>;
}
