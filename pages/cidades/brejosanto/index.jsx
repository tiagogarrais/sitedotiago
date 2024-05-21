import Link from "next/link";
import Profissionais from "../../../components/profissionais";
import Image from "next/image";
import Rodape from "../../../components/rodape";

export default function Cidades({ profissionais }) {
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
            <Link href={`/cidades/cadastro?atividade=${atividade}`}>
              <button className="botao-alinhado-esquerda">
                Cadastre outro(a)
              </button>
            </Link>
          </p>
        </div>
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
        <div className="banner">Anuncie aqui</div>
      </div>
    ));
  };

  return (
    <div>
      <div className="principal centralizada">
        <h2>Guia Comercial - Brejo Santo</h2>
        <span>Encontre aqui tudo que você precisa!</span>
      </div>
      <div className="principal centralizada">
        <h2>Transporte Alternativo</h2>
        <Link href="/cidades/brejosanto/topic">
          {/* <Image src="/images/logo-cooptasce.jpg" height={75} width={150} /> */}
          <p className="centralizada">
            {">"} Horários das Vans para Juazeiro do Norte {"<"}
          </p>
        </Link>
      </div>
      <div className="principal">{renderProfissionaisPorAtividade()}</div>

      <Rodape />
    </div>
  );
}

// Adicione o getStaticProps
import { MongoClient } from "mongodb";

export async function getStaticProps() {
  const { MONGODB_URI, MONGODB_DB } = process.env;

  try {
    // Conectar ao banco de dados MongoDB
    const client = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db(MONGODB_DB);

    // Consultar os dados dos profissionais na coleção adequada
    const profissionaisCollection = db.collection("profissionais");
    const profissionais = await profissionaisCollection
      .find({ slugCidade: "brejosanto", autorizaPublicar: true })
      .sort({ nome: 1 })
      .toArray();
    // Fechar a conexão com o banco de dados
    await client.close();

    return {
      props: {
        profissionais: JSON.parse(JSON.stringify(profissionais)), // Corrige o erro de serialização do Next.js
      },
      revalidate: 1800, // Revalida a cada 30 minutos
    };
  } catch (error) {
    console.error("Erro ao obter dados dos profissionais:", error);
    return {
      props: {
        profissionais: [],
      },
    };
  }
}
