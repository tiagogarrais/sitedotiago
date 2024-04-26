import { MongoClient } from "mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth].js";

const { MONGODB_URI, MONGODB_DB } = process.env;

export default async function GetAprova(req, res) {
  try {
    // Verificar a sessão do usuário
    const session = await getServerSession(req, res, authOptions);

    // Se não houver sessão, envie uma resposta de erro
    if (!session) {
      return res
        .status(401)
        .json({ error: "Você precisa estar logado para acessar esta API." });
    }

    // Se o e-mail logado não for autorizado, não exibir a página
    const emailsAutorizados = process.env.EMAILS_AUTORIZADOS.split(",");

    const emailAutorizado = emailsAutorizados.includes(session.user.email);
    if (!emailAutorizado) {
      return res
        .status(403)
        .json({ error: "Você não tem permissão para acessar esta API." });
    }

    if (req.method === "GET") {
      // Conectar ao banco de dados MongoDB
      const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = client.db(MONGODB_DB);

      // Consultar os dados dos profissionais na coleção adequada
      const profissionaisCollection = db.collection("profissionais");
      const profissionais = await profissionaisCollection
        .find()
        .sort({ nome: 1 })
        .toArray();
      // Fechar a conexão com o banco de dados
      await client.close();

      // Enviar os dados dos profissionais como resposta
      res.status(200).json(profissionais);
    } else {
      res.status(405).json({ message: "Método não permitido" });
    }
  } catch (error) {
    console.error("Erro ao obter dados dos profissionais:", error);
    res.status(500).json({ message: "Erro ao obter dados dos profissionais" });
  }
}
