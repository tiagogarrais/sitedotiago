import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Aprovar() {
  const { data: session } = useSession();
  const [profissionais, setProfissionais] = useState([]);

  useEffect(() => {
    fetchData(); // Chamada da função fetchData ao montar o componente
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/get-aprova");
      const data = await response.json();
      setProfissionais(data);
    } catch (error) {
      console.error("Erro ao buscar dados dos profissionais:", error);
    }
  };

  const inverterPublicar = async (_id, autorizaPublicar) => {
    try {
      // Faz a requisição PUT
      const response = await fetch("/api/put-update-publicar", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id, autorizaPublicar: !autorizaPublicar }),
      });

      if (response.ok) {
        // Atualiza o estado local de profissionais com o novo valor autorizaPublicar
        fetchData();
      } else {
        console.error("Erro ao realizar a atualização:", await response.text());
      }
    } catch (error) {
      console.error("Erro ao realizar a requisição:", error);
    }
  };

  const inverterPremium = async (_id, premium) => {
    try {
      // Faz a requisição PUT
      const response = await fetch("/api/put-update-premium", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id, premium: !premium }),
      });

      if (response.ok) {
        // Atualiza o estado local de profissionais com o novo valor autorizaPublicar
        fetchData();
      } else {
        console.error("Erro ao realizar a atualização:", await response.text());
      }
    } catch (error) {
      console.error("Erro ao realizar a requisição:", error);
    }
  };

  if (session) {
    return (
      <>
        <div>
          <div className="centralizada">
            Bem vindo(a) {session.user.email}
            <button onClick={() => signOut()}>Desconectar</button>
          </div>
          <h1>Aprovar empresas</h1>
          <div className="principal">
            {profissionais.map((profissional) => (
              <div key={profissional._id}>
                <h2>{profissional.nome}</h2>
                <p>Atividade: {profissional.atividade}</p>
                <p>Cidade: {profissional.cidade}</p>
                <p>WhatsApp: {profissional.whatsApp}</p>

                <p>
                  Instagram:{" "}
                  <a
                    target="_blank"
                    href={`https://www.instagram.com/${profissional.instagram}`}
                  >
                    {profissional.instagram}
                  </a>
                </p>

                <p>
                  <button
                    onClick={() =>
                      inverterPublicar(
                        profissional._id,
                        profissional.autorizaPublicar
                      )
                    }
                  >
                    {profissional.autorizaPublicar
                      ? "Remover Publicação"
                      : "Publicar"}
                  </button>
                </p>
                <p>
                  <button
                    onClick={() =>
                      inverterPremium(profissional._id, profissional.premium)
                    }
                  >
                    {profissional.premium
                      ? "Remover Premium"
                      : "Tornar Premium"}
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        Você precisa fazer login para acessar esta página
        <br />
        <button onClick={() => signIn()}>Entrar</button>
        <br />
        <p>
          <Link href="/">Voltar para a página inicial</Link>
        </p>
      </>
    );
  }
}
