import { useState, useEffect } from "react";
import InputMask from "react-input-mask";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [atividade, setAtividade] = useState("");
  const [numeroWhatsapp, setNumeroWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");
  const [cidade, setCidade] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [textoBotao, setTextoBotao] = useState("Enviar Cadastro");

  useEffect(() => {
    if (showModal) {
      // Configurar temporizador para fechar o modal após 10 segundos
      const timer = setTimeout(() => {
        setShowModal(false);
        window.location.reload();
      }, 10000);

      // Limpar o temporizador ao desmontar o componente
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  function handleSubmit(event) {
    event.preventDefault(); // Evitar o comportamento padrão de atualização da página ao enviar o formulário
    setTextoBotao("Aguarde...");

    // Construir o objeto com os dados do formulário
    const formData = {
      nome: nome,
      atividade: atividade,
      numeroWhatsapp: numeroWhatsapp,
      instagram: instagram,
      cidade: cidade,
    };

    // Limpar os campos do formulário
    setNome("");
    setAtividade("");
    setNumeroWhatsapp("");
    setInstagram("");
    setCidade("");

    // Enviar os dados para o servidor backend via POST
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

        // Exibe o modal ao receber a resposta do servidor
        setShowModal(true);

        // Redirecionar o usuário ou exibir uma mensagem de sucesso, etc.
      })
      .catch((error) => {
        console.error("Erro ao enviar os dados:", error);
        // Lidar com erros, exibir uma mensagem de erro para o usuário, etc.
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="centralizada">
          <h2>Quer fazer parte da nossa lista?</h2>
        </div>
        <h3>Cadastro</h3>
        <input
          type="text"
          placeholder="Nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Cidade"
          required
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Profissão ou atividade"
          required
          value={atividade}
          onChange={(e) => setAtividade(e.target.value)}
        ></input>

        <InputMask
          mask="(99) 99999-9999"
          maskChar="_"
          id="numeroWhatsapp"
          name="numeroWhatsapp"
          required
          value={numeroWhatsapp}
          onChange={(e) => setNumeroWhatsapp(e.target.value)}
          placeholder="Número do WhatsApp (99) 99999-9999"
        />

        <label style={{ margin: "auto", width: "100%", textAlign: "center" }}>
          @
          <input
            style={{ width: "70%" }}
            type="text"
            placeholder="Nome no Instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          ></input>
        </label>

        <button type="submit">{textoBotao}</button>

        <small>A publicação básica é gratuita!</small>
        <small>A Publicação completa custa R$20,00. (Taxa única)</small>
      </form>

      {showModal && (
        <div className="modal">
          <p>Recebemos o seu cadastro!</p>
          <p>
            Entraremos em contato no WhatsApp para confirmar as informações!
          </p>
        </div>
      )}
    </>
  );
}
