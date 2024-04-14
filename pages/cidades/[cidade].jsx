import Link from "next/link";
import { useRouter } from "next/router";

export default function Cidades() {
  const router = useRouter();
  const cidade = router.query.cidade;

  return (
    <>
      <h1>Serviços e informações úteis na cidade de Brejo Santo - CE</h1>

      <div className="principal">
        <h2>Profissionais autônomos</h2>
        <h3>Motorista</h3>
        <article>
          <span>Junior Moral</span>
          <span> - </span>
          <span className="whatsApp">
            <a target="_blank" href="https://wa.me/88988888888">
              WhatsApp
            </a>
          </span>
          <span> - </span>
          <span className="Instagram">
            <a target="_blank" href="https://www.instagram.com/juniormoral/">
              Instagram
            </a>
          </span>
        </article>

        <h3>Encanadores</h3>
        <div>
          <article>
            <span>João Silva</span>
            <span> - </span>
            <span className="whatsApp">
              <a href="https://wa.me/88988888888">WhatsApp</a>
            </span>
          </article>
        </div>

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
