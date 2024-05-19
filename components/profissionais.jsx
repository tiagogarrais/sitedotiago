import { useState } from "react";
import Image from "next/image";

export default function Profissionais({
  id,
  nome,
  whatsApp,
  instagram,
  premium,
}) {
  const codigoArea = whatsApp ? whatsApp.substring(0, 2) : "";
  const primeiraParteTelefone = whatsApp ? whatsApp.substring(2, 7) : "";
  const segundaParteTelefone = whatsApp ? whatsApp.substring(7, 11) : "";

  const tamanhoIcone = 22;

  return (
    <>
      <article>
        <div className="nome">{nome}</div>
        {premium ? (
          // Exibir informações premium (WhatsApp, Instagram e telefone)
          <div className="premium">
            {whatsApp && (
              <>
                <a
                  target="_blank"
                  href={`tel:${codigoArea}${primeiraParteTelefone}${segundaParteTelefone}`}
                >
                  <button>
                    <Image
                      src="/images/telefone.png"
                      width={tamanhoIcone}
                      height={tamanhoIcone}
                      alt="Fazer uma ligação telefônica"
                      role="img"
                    ></Image>
                  </button>
                </a>
                <a target="_blank" href={`https://wa.me/+55${whatsApp}`}>
                  <button>
                    <Image
                      src="/images/logo-whatsapp.webp"
                      width={tamanhoIcone}
                      height={tamanhoIcone}
                      alt="Mandar mensagem no WhatsApp"
                      role="img"
                    ></Image>
                  </button>
                </a>
              </>
            )}
            {instagram && (
              <a
                target="_blank"
                href={`https://www.instagram.com/${instagram}/`}
              >
                <button>
                  <Image
                    src="/images/logo-instagram.webp"
                    width={tamanhoIcone}
                    height={tamanhoIcone}
                    alt="Acessar o Instagram"
                    role="img"
                  />
                </button>
              </a>
            )}
          </div>
        ) : (
          // Exibir apenas o telefone para não premium
          <div className="basico">
            {whatsApp && (
              <a
                target="_blank"
                href={`tel:${codigoArea}${primeiraParteTelefone}${segundaParteTelefone}`}
              >
                <button>
                  <Image
                    src="/images/telefone.png"
                    width={tamanhoIcone}
                    height={tamanhoIcone}
                    alt="Fazer uma ligação telefônica"
                    role="img"
                  ></Image>
                </button>
              </a>
            )}
          </div>
        )}
      </article>
    </>
  );
}
