import { useState } from "react";

export default function Profissionais({
  id,
  atividade,
  nome,
  whatsApp,
  instagram,
}) {
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
          <span>{atividade} - </span>
          <span>{nome} ☎️;</span>{" "}
        </div>
        {mostrarDetalhes && ( // Exibir os detalhes apenas se mostrarDetalhes for true
          <div id={id} className="detalhes">
            <p>
              Telefone ({codigoArea}) {primeiraParteTelefone}-
              {segundaParteTelefone}
            </p>
            <p>
              <a target="_blank" href={`https://wa.me/+55${whatsApp}`}>
                Chamar no WhatsApp
              </a>
            </p>

            <p>
              <a
                target="_blank"
                href={`https://www.instagram.com/${instagram}/`}
              >
                Acessar Instagram
              </a>
            </p>
          </div>
        )}
      </article>
    </>
  );
}
