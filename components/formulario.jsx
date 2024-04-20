import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [profissao, setProfissao] = useState("");
  const [numeroWhatsapp, setNumeroWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");
  const [cidade, setCidade] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // Evitar o comportamento padrão de atualização da página ao enviar o formulário

    // Construir o objeto com os dados do formulário
    const formData = {
      nome: nome,
      profissao: profissao,
      numeroWhatsapp: numeroWhatsapp,
      instagram: instagram,
      cidade: cidade,
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
      <form onSubmit={handleSubmit}>
        <h3>Não encontrou sua empresa? Cadastre aqui!</h3>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Profissão ou atividade"
          value={profissao}
          onChange={(e) => setProfissao(e.target.value)}
        ></input>
        <input
          type="tel"
          placeholder="Número do Whatsapp"
          value={numeroWhatsapp}
          onChange={(e) => setNumeroWhatsapp(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="@ do Instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        ></input>

        <button type="submit">Enviar cadastro</button>
      </form>
    </>
  );
}
