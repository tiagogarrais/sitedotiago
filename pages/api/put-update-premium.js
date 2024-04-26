import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth].js";

const { MONGODB_URI, MONGODB_DB } = process.env;

export default async function PutUpdatePublicar(req, res) {
  try {
    // Verificar a sessão do usuário
    const session = await getServerSession(req, res, authOptions);

    // Se não houver sessão, envie uma resposta de erro
    if (!session) {
      return res
        .status(401)
        .json({ error: "Você precisa estar logado para acessar esta API." });
    }

    // Negar se o e-mail logado não for autorizado.
    const emailsAutorizados = process.env.EMAILS_AUTORIZADOS.split(",");

    const emailAutorizado = emailsAutorizados.includes(session.user.email);
    if (!emailAutorizado) {
      return res
        .status(403)
        .json({ error: "Você não tem permissão para acessar esta API." });
    }

    // Verifique se o método da requisição é PUT
    if (req.method !== "PUT") {
      return res.status(405).json({ error: "Método não permitido" });
    }

    // Obtenha os parâmetros da solicitação
    const { _id, premium } = req.body;

    // Conectar ao banco de dados MongoDB
    const client = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db(MONGODB_DB);

    // Atualize o profissional no banco de dados
    await db.collection("profissionais").updateOne(
      { _id: new ObjectId(_id) }, // Filtro
      { $set: { premium } } //atualizações
    );

    // Fechar a conexão com o banco de dados
    await client.close();

    // Responder com sucesso
    res.status(200).json({
      message: "Os dados do profissional foram atualizados com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao atualizar os dados do profissional:", error);
    res.status(500).json({
      error: "Erro interno do servidor ao atualizar os dados do profissional.",
    });
  }
}
