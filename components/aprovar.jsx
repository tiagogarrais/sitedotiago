import { useState } from "react";
import Image from "next/image";

export default function Aprovar({ id, nome, whatsApp, instagram, premium }) {
  const codigoArea = whatsApp.substring(0, 2);
  const primeiraParteTelefone = whatsApp.substring(2, 7);
  const segundaParteTelefone = whatsApp.substring(7, 11);

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
              <button>Telefone</button>
            </a>
            <a target="_blank" href={`https://wa.me/+55${whatsApp}`}>
              <button>WhatsApp</button>
            </a>
            <a target="_blank" href={`https://www.instagram.com/${instagram}/`}>
              <button>Instagram</button>
            </a>
          </div>
        ) : (
          // Exibir apenas o telefone para não premium
          <div className="basico">
            <a
              target="_blank"
              href={`tel:${codigoArea}${primeiraParteTelefone}${segundaParteTelefone}`}
            >
              <button>Telefone</button>
            </a>
          </div>
        )}
      </article>
    </>
  );
}
