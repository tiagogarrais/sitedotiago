import { MongoClient } from "mongodb";

const { MONGODB_URI, MONGODB_DB } = process.env;

export default async function Formulario(req, res) {
  if (req.method === "POST") {
    // Verificar se os dados do formulário foram enviados corretamente
    const { nome, atividade, numeroWhatsapp, instagram, cidade } = req.body;

    if (!nome || !atividade || (!numeroWhatsapp && !instagram) || !cidade) {
      return res
        .status(400)
        .json({
          error:
            "Obrigatório informar, nome, atividade e pelo menos uma forma de contato (Instagram ou WhatsApp).",
        });
    }

    try {
      // Conectar ao banco de dados MongoDB
      const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = client.db(MONGODB_DB);

      // Remover caracteres que vêm da máscara
      const whatsApp = numeroWhatsapp.replace(/[^\d+]/g, "");

      function criarSlug(cidade) {
        // Remove os acentos
        const semAcentos = cidade
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        // Converte para minúsculas e remove espaços
        const slug = semAcentos.toLowerCase().replace(/\s+/g, "");
        return slug;
      }

      const slugCidade = criarSlug(cidade); // Chama a função para obter o slug da cidade

      // Inserir os dados do formulário na coleção 'profissionais'
      await db.collection("profissionais").insertOne({
        nome,
        atividade,
        whatsApp,
        instagram,
        cidade,
        slugCidade,
        autorizaPublicar: false,
        premium: true,
      });

      // Fechar a conexão com o banco de dados
      client.close();

      // Responder com uma mensagem de sucesso
      return res
        .status(200)
        .json({ message: "Formulário enviado com sucesso." });
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      return res
        .status(500)
        .json({ error: "Erro interno do servidor ao enviar o formulário." });
    }
  } else {
    // Método não permitido
    return res.status(405).json({
      error: "Método não permitido. Use POST para enviar o formulário.",
    });
  }
}
