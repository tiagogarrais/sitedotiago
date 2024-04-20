import { MongoClient } from "mongodb";

const { MONGODB_URI, MONGODB_DB } = process.env;

export default async function Formulario(req, res) {
  if (req.method === "POST") {
    // Verificar se os dados do formulário foram enviados corretamente
    const { nome, profissao, telefone, instagram } = req.body;

    if (!nome || !profissao || !telefone || !instagram) {
      return res
        .status(400)
        .json({ error: "Todos os campos do formulário são obrigatórios." });
    }

    try {
      // Conectar ao banco de dados MongoDB
      const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = client.db(MONGODB_DB);

      // Inserir os dados do formulário na coleção 'profissionais'
      await db.collection("profissionais").insertOne({
        nome,
        profissao,
        telefone,
        instagram,
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
