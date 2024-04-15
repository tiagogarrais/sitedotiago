export default function Profissionais({ nome, numeroWhatsapp, instagram }) {
  const codigoArea = numeroWhatsapp.substring(0, 2);
  const primeiraParteTelefone = numeroWhatsapp.substring(2, 7);
  const segundaParteTelefone = numeroWhatsapp.substring(7, 11);

  return (
    <article>
      <span>{nome} - </span>
      <span>
        ({codigoArea}) {primeiraParteTelefone}-{segundaParteTelefone} -{" "}
      </span>
      <span>
        <a target="_blank" href={`https://wa.me/${numeroWhatsapp}`}>
          WhatsApp
        </a>
      </span>
      <span> - </span>
      <span>
        <a target="_blank" href={`https://www.instagram.com/${instagram}/`}>
          Instagram
        </a>
      </span>
    </article>
  );
}
