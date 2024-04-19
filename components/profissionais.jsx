import { useState } from "react";

export default function Profissionais({
  id,
  atividade,
  nome,
  numeroWhatsapp,
  instagram,
}) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);
  const codigoArea = numeroWhatsapp.substring(0, 2);
  const primeiraParteTelefone = numeroWhatsapp.substring(2, 7);
  const segundaParteTelefone = numeroWhatsapp.substring(7, 11);

  function handleClick() {
    setMostrarDetalhes(!mostrarDetalhes); // Alternar o estado de exibição dos detalhes
  }

  return (
    <article onClick={handleClick}>
      <div className="basico">
        <span>{atividade} - </span>
        <span>{nome} - Mais detalhes</span>
      </div>
      {mostrarDetalhes && ( // Exibir os detalhes apenas se mostrarDetalhes for true
        <div id={id} className="detalhes">
          <p>
            Telefone ({codigoArea}) {primeiraParteTelefone}-
            {segundaParteTelefone}
          </p>
          <p>
            <a target="_blank" href={`https://wa.me/${numeroWhatsapp}`}>
              Chamar no WhatsApp
            </a>
          </p>

          <p>
            <a target="_blank" href={`https://www.instagram.com/${instagram}/`}>
              Acessar Instagram
            </a>
          </p>
        </div>
      )}
    </article>
  );
}
