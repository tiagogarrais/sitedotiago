import Link from "next/link";
import { useRouter } from "next/router";
import Profissionais from "../../components/profissionais";

export default function Cidades() {
  const router = useRouter();
  const cidade = router.query.cidade;

  return (
    <>
      <h2>Brejo Santo - CE</h2>

      <div className="principal">
        <h2>Profissionais autônomos</h2>
        <h3>Motorista</h3>

        <Profissionais
          nome="Junior Moral"
          profissao="Motorista"
          numeroWhatsapp="88955552222"
          instagram="juniormoralmotorista"
        />

        <Profissionais
          nome="Zé da Topic"
          profissao="Motorista"
          numeroWhatsapp="88944447777"
          instagram="zedatopic"
        />

        <div className="delivery-comida">
          <h2>Pedir comida</h2>
          <h3>Restaurantes</h3>
          <article>
            <div>
              <span>Arena do Bode</span>
              <span> - </span>
              <span className="whatsApp">
                <a href="https://wa.me/88999999999">WhatsApp</a>{" "}
              </span>
            </div>
          </article>

          <h3>Hamburgueria</h3>
          <article>
            <div>
              <span>Hamburger Dogão</span>
              <span> - </span>
              <span className="whatsApp">
                <a href="https://wa.me/88999999999">WhatsApp</a>{" "}
              </span>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
