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
        const response = await fetch("/api/get-profissionais");
        const data = await response.json();
        setProfissionais(data);
      } catch (error) {
        console.error("Erro ao buscar dados dos profissionais:", error);
      }
    };

    // Chamada da função para buscar os dados dos profissionais ao montar o componente
    fetchData();
  }, []); // Executa apenas uma vez ao montar o componente

  return (
    <div>
      <div className="principal">
        <h3>Empresas e profissionais cadastrados</h3>
        {profissionais.map((profissional) => (
          <Profissionais
            key={profissional.id} // Certifique-se de ter uma chave única para cada profissional
            id={profissional.id}
            nome={profissional.nome}
            atividade={profissional.atividade}
            cidade={profissional.cidade}
            whatsApp={profissional.whatsApp}
            instagram={profissional.instagram}
          />
        ))}
      </div>
      <Formulario />
      <div className="centralizada">
        <small>https://sitedotiago.com.br/cidades/{cidade}</small>
        <small>Site desenvolvido por Adm. Tiago Arrais</small>
        <small>2024</small>
      </div>
    </div>
  );
}
