import Link from "next/link";
import Profissionais from "../../../components/profissionais";
import Image from "next/image";
import React, { useState } from "react";
import Rodape from "../../../components/rodape";
import styles from "../../../components/menu-hamburger/menu-hamburger.module.css";
import { MongoClient } from "mongodb";

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
          <h3 id={atividade}>{atividade}</h3>
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Categorias ordenadas devem ser definidas aqui para serem usadas no menu
  const profissionaisPorAtividade = {};
  profissionais.forEach((profissional) => {
    if (!profissionaisPorAtividade[profissional.atividade]) {
      profissionaisPorAtividade[profissional.atividade] = [];
    }
    profissionaisPorAtividade[profissional.atividade].push(profissional);
  });

  const categoriasOrdenadas = Object.keys(profissionaisPorAtividade).sort();

  return (
    <div>
      {/* Menu Hamburger */}
      <div className={styles.menuContainer}>
        <div className={styles.hamburgerIcon} onClick={toggleMenu}>
          &#9776;
        </div>
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
          <h4 style={{ marginLeft: "15px" }}>Navegue por categorias</h4>

          {categoriasOrdenadas.map((categoria, index) => (
            <a href={`#${categoria}`} key={index}>
              <p onClick={toggleMenu}>{categoria}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="principal centralizada">
        <h1>Brejo Santo - CE</h1>
      </div>
      <div className="principal centralizada">
        <h2>Serviços de utilidade pública</h2>
        <h3>Horário das vans de Transporte Alternativo</h3>
        {/* <Image src="/images/logo-cooptasce.jpg" height={75} width={150} /> */}

        <button className="botao">
          <Link href="/cidades/brejosanto/transportes/juazeiro-do-norte">
            Juazeiro do Norte-CE
          </Link>
        </button>

        <button className="botao">
          <Link href="/cidades/brejosanto/transportes/porteiras">
            Porteiras-CE
          </Link>
        </button>

        <p className="centralizada">
          {">"} (Em breve) Milagres-CE {"<"}
        </p>

        <p className="centralizada">
          {">"} (Em breve) Penaforte-CE {"<"}
        </p>
      </div>
      <div className="principal">
        <div className="principal centralizada">
          <h2>Guia Comercial completo</h2>
          <span>Encontre aqui tudo que você precisa!</span>
        </div>

        {renderProfissionaisPorAtividade()}
      </div>
      <Rodape />
    </div>
  );
}

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
