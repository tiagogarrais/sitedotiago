import React, { useState, useEffect } from "react";
import Image from "next/image";
import Contador from "../components/contador";

export default function Cabecalho() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Função para obter a contagem total de visitas
    async function fetchVisitCount() {
      try {
        const response = await fetch("/api/contador");
        if (response.ok) {
          const data = await response.json();
          setVisitCount(data.totalVisits);
        } else {
          console.error("Erro ao obter contagem de visitas:", response.status);
        }
      } catch (error) {
        console.error("Erro ao obter contagem de visitas:", error);
      }
    }

    fetchVisitCount(); // Chamada da função para obter a contagem total de visitas

    // Função para registrar a visita
    async function registerVisit() {
      try {
        await fetch("/api/contador", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            totalizador: visitCount + 1,
            dataHora: new Date().toISOString(),
          }),
        });
      } catch (error) {
        console.error("Erro ao registrar visita:", error);
      }
    }

    registerVisit(); // Chamada da função para registrar a visita
  }, []); // Executa apenas uma vez, quando o componente é montado

  return (
    <div className="cabecalho">
      <small className="centralizada">
        <Contador visitCount={visitCount} />
      </small>
      <a
        href="/"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          className="logomarca"
          src="/images/logomarca.jpeg"
          width={355}
          height={355}
          alt="Logomarca do SiteDoTiago.com.br"
        />
      </a>
      <div className="centralizada">
        <h3>Siga-nos nas redes sociais</h3>
        <a target="_blank" href="https://www.instagram.com/admprogramador">
          <Image
            src="/images/logo-instagram.webp"
            width={25}
            height={25}
          ></Image>
          /admprogramador
        </a>
        <a target="_blank" href="https://www.facebook.com/admprogramador">
          <Image src="/images/logo-facebook.png" width={25} height={25}></Image>
          /admprogramador
        </a>
      </div>
    </div>
  );
}
