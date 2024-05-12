import Link from "next/link";

export default function Rodape() {
  return (
    <div className="principal">
      <footer>
        <div>
          <h4>Sobre o site</h4>
          <p>
            Site catálogo para reunir todas as empresas e profissionais
            autônomos da cidade. Encontre serviços, produtos e contatos de forma
            rápida e fácil. Promovendo a visibilidade e conectando consumidores
            com empresas locais. Explore nossa ampla lista de fornecedores e
            descubra tudo o que a comunidade tem a oferecer.
          </p>
          <p>
            Além disso, através do nosso catálogo, você pode acessar diretamente
            os perfis do WhatsApp, Instagram e os números de telefone das
            empresas listadas. Simplificamos o processo de contato, permitindo
            que você se conecte instantaneamente com os fornecedores que atendem
            às suas necessidades. Seja para agendar um serviço, fazer uma
            consulta ou obter mais informações, estamos aqui para facilitar sua
            interação com as empresas locais.
          </p>
          <p>
            Incentivamos a participação ativa da comunidade! Se você conhece uma
            empresa ou profissional autônomo que ainda não está listado em nosso
            catálogo, convidamos você a cadastrá-los gratuitamente. Basta
            fornecer o nome da empresa, a cidade em que está localizada e os
            detalhes de contato, como WhatsApp e Instagram. Nosso objetivo é
            fornecer uma plataforma inclusiva e abrangente que beneficie tanto
            os consumidores quanto os empreendedores locais. Junte-se a nós na
            construção de uma rede ainda mais robusta de negócios e serviços na
            sua região.
          </p>
        </div>

        <div className="centralizada">
          <h4>
            Para cadastrar a sua empresa ou atividade clique no botão abaixo
          </h4>
          <Link href="/cidades/cadastro">
            <button className="botao">Cadastre aqui a sua atividade</button>
          </Link>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/admprogramador"
          >
            instagram.com/admprogramador
          </a>
          <p></p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/admprogramador"
          >
            facebook.com/admprogramador
          </a>
          <p id="creditos">
            Desenvolvido por <span class="autor">Adm. Tiago Arrais</span> &copy;
            2024
          </p>
        </div>
      </footer>
    </div>
  );
}
