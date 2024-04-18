import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [profissao, setProfissao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [instagram, setInstagram] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // Evitar o comportamento padrão de atualização da página ao enviar o formulário

    // Construir o objeto com os dados do formulário
    const formData = {
      nome: nome,
      profissao: profissao,
      telefone: telefone,
      instagram: instagram,
    };

    // Enviar os dados para o servidor backend via POST (substitua a URL pela sua URL de endpoint)
    fetch("/api/formulario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Processar a resposta do servidor, se necessário
        console.log("Resposta do servidor:", data);
        // Redirecionar o usuário ou exibir uma mensagem de sucesso, etc.
      })
      .catch((error) => {
        console.error("Erro ao enviar os dados:", error);
        // Lidar com erros, exibir uma mensagem de erro para o usuário, etc.
      });
  }

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

      <form onSubmit={handleSubmit}>
        <h3>Cadastre a sua atividade</h3>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Profissão ou atividade"
          value={profissao}
          onChange={(e) => setProfissao(e.target.value)}
        ></input>
        <input
          type="tel"
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="@ do Instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        ></input>

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
