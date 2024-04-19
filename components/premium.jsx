export default function Premium() {
  return (
    <>
      <div class="aviso">
        <h3>Destaque-se com nosso cadastro premium!</h3>
        <p>Alcance mais clientes com nossa divulgação completa.</p>

        <div class="plano">
          <h4>Plano Básico: Gratuito</h4>
          <p>
            Seu nome e número de telefone serão exibidos para todos os
            visitantes do site.
          </p>
          <div class="exemplo">
            <span>Pizzaria Super Pizza - </span>
            <span>(88) 1597-9999</span>
          </div>
        </div>

        <div class="plano">
          <h4>Plano Premium: R$ 20,00</h4>
          <p>Aumente sua visibilidade com:</p>
          <ul>
            <li>Link direto para WhatsApp</li>
            <li>Link direto para Instagram</li>
          </ul>
          <div class="exemplo">
            <span>Pizzaria Super Pizza - </span>
            <span>(88) 1597-9999 - </span>
            <span>
              <a target="_blank" href="https://wa.me/8815979999">
                WhatsApp
              </a>
            </span>
            <span> - </span>
            <span>
              <a
                target="_blank"
                href="https://www.instagram.com/pizzariasuperpizza/"
              >
                Instagram
              </a>
            </span>
          </div>
        </div>

        <p>Aproveite essa oportunidade para atrair mais clientes!</p>

        <div class="pagamento">
          <h4>Pagamento fácil via PIX</h4>
          <p>
            Envie R$ 20,00 para o PIX (88) 9 9723-0866 e envie o comprovante
            pelo WhatsApp. Seu anúncio será atualizado em breve!
          </p>
        </div>
      </div>
    </>
  );
}
