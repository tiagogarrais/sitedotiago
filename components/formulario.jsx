import { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import { useRouter } from "next/router";

export default function Formulario() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [atividade, setAtividade] = useState("");
  const [atividade2, setAtividade2] = useState("");
  const [atividade3, setAtividade3] = useState("");
  const [atividade4, setAtividade4] = useState("");
  const [atividade5, setAtividade5] = useState("");
  const [numeroWhatsapp, setNumeroWhatsapp] = useState("");
  const [instagram, setInstagram] = useState("");
  const [cidade, setCidade] = useState("Brejo Santo");
  const [showModal, setShowModal] = useState(false);
  const [textoBotao, setTextoBotao] = useState("Enviar cadastro");
  const [aviso, setAviso] = useState("");

  useEffect(() => {
    // Verifica se atividade está presente nos parâmetros da URL
    if (router.query.atividade) {
      setAtividade(router.query.atividade);
    }

    if (showModal) {
      // Configurar temporizador para fechar o modal após 5 segundos
      const timer = setTimeout(() => {
        setShowModal(false);
        window.location.href = "/";
      }, 5000);

      // Limpar o temporizador ao desmontar o componente
      return () => clearTimeout(timer);
    }
  }, [router.query.atividade, showModal]);

  function handleSubmit(event) {
    event.preventDefault(); // Evitar o comportamento padrão de atualização da página ao enviar o formulário
    setTextoBotao("Aguarde...");

    if (!numeroWhatsapp && !instagram) {
      setTextoBotao("Completar e enviar cadastro");
      setAviso("Você precisa informar WhatsApp ou Instagram");
      return;
    }

    setAviso("");

    // Construir o objeto com os dados do formulário
    const formData = {
      nome: nome,
      numeroWhatsapp: numeroWhatsapp,
      instagram: instagram,
      cidade: cidade,
      atividade: atividade,
      atividade2: atividade2,
      atividade3: atividade3,
      atividade4: atividade4,
      atividade5: atividade5,
    };

    // Limpar os campos do formulário
    setNome("");
    setNumeroWhatsapp("");
    setInstagram("");
    setCidade("");
    setAtividade("");
    setAtividade2("");
    setAtividade3("");
    setAtividade4("");
    setAtividade5("");

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
        setTextoBotao("Enviar cadastro");

        // Redirecionar o usuário ou exibir uma mensagem de sucesso, etc.
      })
      .catch((error) => {
        console.error("Erro ao enviar os dados:", error);
        // Lidar com erros, exibir uma mensagem de erro para o usuário, etc.
      });
  }

  return (
    <>
      <form className="principal" onSubmit={handleSubmit}>
        <h2>Cadastrando em Brejo Santo-CE</h2>
        <input
          type="text"
          placeholder="Nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></input>

        <InputMask
          mask="(99) 99999-9999"
          maskChar="_"
          id="numeroWhatsapp"
          name="numeroWhatsapp"
          value={numeroWhatsapp}
          onChange={(e) => setNumeroWhatsapp(e.target.value)}
          placeholder="WhatsApp (99) 99999-9999"
          type="tel"
        />

        <label style={{ margin: "auto", width: "100%", textAlign: "center" }}>
          @
          <input
            style={{ width: "70%" }}
            type="text"
            placeholder="Nome no Instagram"
            value={instagram}
            onChange={(e) => {
              const textInsta = e.target.value
                .toLowerCase() //Converte para minúsculas
                .replace(/[\s@]/g, ""); // Remove espaços e caractere "@"
              setInstagram(textInsta);
            }}
          />
        </label>

        <input
          type="text"
          placeholder="Profissão ou atividade principal"
          required
          value={atividade}
          onChange={(e) => setAtividade(e.target.value)}
        ></input>

        <p>
          Os campos abaixo são de preenchimento opcional. Utilize para divulgar
          suas informações de contato em outros ramos de atividade além do
          principal.
        </p>

        <input
          type="text"
          placeholder="Profissão ou atividade adicional"
          value={atividade2}
          onChange={(e) => setAtividade2(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Profissão ou atividade adicional"
          value={atividade3}
          onChange={(e) => setAtividade3(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Profissão ou atividade adicional"
          value={atividade4}
          onChange={(e) => setAtividade4(e.target.value)}
        ></input>

        <input
          type="text"
          placeholder="Profissão ou atividade adicional"
          value={atividade5}
          onChange={(e) => setAtividade5(e.target.value)}
        ></input>

        <div id="aviso" className="centralizada">
          {aviso}
        </div>
        <button type="submit">{textoBotao}</button>
      </form>

      {showModal && (
        <div className="modal">
          <p>Recebemos o seu cadastro! Publicaremos em até 24h</p>
        </div>
      )}
    </>
  );
}
