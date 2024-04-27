import { useState } from "react";
import Image from "next/image";

export default function Profissionais({
  id,
  nome,
  whatsApp,
  instagram,
  premium,
}) {
  const codigoArea = whatsApp.substring(0, 2);
  const primeiraParteTelefone = whatsApp.substring(2, 7);
  const segundaParteTelefone = whatsApp.substring(7, 11);

  const tamanhoIcone = 24;

  return (
    <>
      <article>
        <div className="nome">{nome}</div>
        {premium ? (
          // Exibir informações premium (WhatsApp, Instagram e telefone)
          <div className="premium">
            <a
              target="_blank"
              href={`tel:${codigoArea}${primeiraParteTelefone}${segundaParteTelefone}`}
            >
              <button>
                <Image
                  src="/images/telefone.png"
                  width={tamanhoIcone}
                  height={tamanhoIcone}
                  alt="Ligar"
                ></Image>
              </button>
            </a>
            <a target="_blank" href={`https://wa.me/+55${whatsApp}`}>
              <button>
                {" "}
                <Image
                  src="/images/logo-whatsapp.webp"
                  width={tamanhoIcone}
                  height={tamanhoIcone}
                  alt="Ligar"
                ></Image>
              </button>
            </a>
            <a target="_blank" href={`https://www.instagram.com/${instagram}/`}>
              <button>
                {" "}
                <Image
                  src="/images/logo-instagram.webp"
                  width={tamanhoIcone}
                  height={tamanhoIcone}
                  alt="Instagram"
                ></Image>
              </button>
            </a>
          </div>
        ) : (
          // Exibir apenas o telefone para não premium
          <div className="basico">
            <a
              target="_blank"
              href={`tel:${codigoArea}${primeiraParteTelefone}${segundaParteTelefone}`}
            >
              <button>
                {" "}
                <Image
                  src="/images/telefone.png"
                  width={tamanhoIcone}
                  height={tamanhoIcone}
                  alt="Ligar"
                ></Image>
              </button>
            </a>
          </div>
        )}
      </article>
    </>
  );
}
