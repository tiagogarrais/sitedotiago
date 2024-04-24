import { useState } from "react";
import Image from "next/image";

export default function Profissionais({ id, nome, whatsApp, instagram }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const codigoArea = whatsApp.substring(0, 2);
  const primeiraParteTelefone = whatsApp.substring(2, 7);
  const segundaParteTelefone = whatsApp.substring(7, 11);

  function handleClick() {
    setMostrarDetalhes(!mostrarDetalhes); // Alternar o estado de exibição dos detalhes
  }

  return (
    <>
      <article onClick={handleClick}>
        <div className="basico">
          <span>{nome}</span>
        </div>
        {mostrarDetalhes && ( // Exibir os detalhes apenas se mostrarDetalhes for true
          <div id={id} className="detalhes">
            <div className="botoesquadrados">
              <a
                target="_blank"
                href={`tel:${codigoArea}${primeiraParteTelefone}${segundaParteTelefone}`}
              >
                <button className="btnquadrado">
                  <Image
                    src="/images/telefone.png"
                    alt="Telefone"
                    width={40}
                    height={40}
                  />{" "}
                </button>
              </a>
              <a target="_blank" href={`https://wa.me/+55${whatsApp}`}>
                <button className="btnquadrado">
                  <Image
                    src="/images/logo-whatsapp.webp"
                    alt="Logo WhatsApp"
                    width={40}
                    height={40}
                  />{" "}
                </button>
              </a>

              <a
                target="_blank"
                href={`https://www.instagram.com/${instagram}/`}
              >
                <button className="btnquadrado">
                  <Image
                    src="/images/logo-instagram.webp"
                    alt="Logo Instagram"
                    width={40}
                    height={40}
                  />
                </button>
              </a>
            </div>
          </div>
        )}
      </article>
    </>
  );
}
