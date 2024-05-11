import { useState, useEffect } from "react";
import Link from "next/link";
import Profissionais from "../../../components/profissionais";
import Image from "next/image";
import Rodape from "../../../components/rodape";

export default function Cidades() {
  // Estado para armazenar os dados dos profissionais
  const [profissionais, setProfissionais] = useState([]);

  useEffect(() => {
    // Função para buscar dados dos profissionais da API
    const fetchData = async () => {
      try {
        // Faça sua chamada à API aqui e substitua a URL pela sua
        const response = await fetch("/api/get-profissionais-brejosanto");
        const data = await response.json();
        setProfissionais(data);
      } catch (error) {
        console.error("Erro ao buscar dados dos profissionais:", error);
      }
    };

    // Chamada da função para buscar os dados dos profissionais ao montar o componente
    fetchData();
  }, []); // Executa apenas uma vez ao montar o componente

  // Renderização dos profissionais agrupados por atividade e ordenados alfabeticamente
  const renderProfissionaisPorAtividade = () => {
    const profissionaisPorAtividade = {};
    profissionais.forEach((profissional) => {
      if (!profissionaisPorAtividade[profissional.atividade]) {
        profissionaisPorAtividade[profissional.atividade] = [];
      }
      profissionaisPorAtividade[profissional.atividade].push(profissional);
    });

    // Ordenar as categorias alfabeticamente
    const categoriasOrdenadas = Object.keys(profissionaisPorAtividade).sort();

    return categoriasOrdenadas.map((atividade) => (
      <div key={atividade}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h3>{atividade}</h3>
          <p style={{ marginLeft: "10px" }}>
            {" "}
            <Link href={`/cidades/cadastro?atividade=${atividade}`}>
              {" "}
              <button className="botao-alinhado-esquerda">
                Cadastre outro(a)
              </button>
            </Link>
          </p>
        </div>{" "}
        {profissionaisPorAtividade[atividade].map((profissional) => (
          <Profissionais
            key={profissional.id}
            id={profissional.id}
            nome={profissional.nome}
            atividade={profissional.atividade}
            cidade={profissional.cidade}
            whatsApp={profissional.whatsApp}
            instagram={profissional.instagram}
            premium={profissional.premium}
          />
        ))}
      </div>
    ));
  };

  return (
    <div>
      <div className="principal centralizada">
        <blockquote>
          Estou construindo o maior catálogo de empresas e profissionais
          autônomos da cidade!
          <footer> Adm. Tiago Arrais CRA 11.660</footer>
        </blockquote>
      </div>
      <h1>Brejo Santo</h1>
      <div className="principal centralizada">
        <Link href="/cidades/brejosanto/topic">
          <Image src="/images/logo-cooptasce.jpg" height={150} width={330} />
          <h4>Consultar horários das Vans</h4>
        </Link>
      </div>
      <div className="principal">{renderProfissionaisPorAtividade()}</div>

      <Rodape />
    </div>
  );
}
