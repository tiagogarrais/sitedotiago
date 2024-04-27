import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Profissionais from "../../components/profissionais";
import Formulario from "../../components/formulario";

export default function Cidades() {
  const router = useRouter();
  const cidade = router.query.cidade;

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
        <h3>{atividade}</h3>
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
      <h1>Empresas e profissionais de Brejo Santo</h1>
      <div className="principal centralizada">
        <blockquote>
          Quero construir nesse site o maior catálogo de empresas e
          profissionais autônomos da cidade!
          <footer>- Adm. Tiago Arrais CRA 11.660</footer>
        </blockquote>
      </div>
      <div className="principal">{renderProfissionaisPorAtividade()}</div>
      <Formulario />

      <div className="principal">
        <h2>Como ativar o WhatsApp e Instagram da sua loja?</h2>

        <p>1. Faça um PIX de R$ 20,00 - PIX 88997230866;</p>
        <p>
          2. Envie o comprovante para o
          <a target="_blank" href={`https://wa.me/+5588997230866`}>
            {" "}
            nosso WhatsApp
          </a>
        </p>
        <p>3. Informe o seu WhatsApp e o @ do Instagram</p>

        <p>
          Com os botões, seus clientes podem ir direto para a sua empresa. Boas
          vendas!
        </p>
      </div>

      <div className="centralizada">
        <small>https://sitedotiago.com.br/cidades/{cidade}</small>
        <small>Site desenvolvido por Adm. Tiago Arrais</small>
        <small>2024</small>
      </div>
    </div>
  );
}
