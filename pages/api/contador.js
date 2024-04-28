import { MongoClient } from "mongodb";

const { MONGODB_URI, MONGODB_DB } = process.env;

export default async function Contador(req, res) {
  if (req.method === "POST") {
    try {
      // Receber e gravar no banco de dados
      const { totalizador, dataHora } = req.body;

      // Conectar ao banco de dados MongoDB
      const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = client.db(MONGODB_DB);

      // Inserir os dados do formulário na coleção 'contador'
      await db.collection("contador").insertOne({
        dataHora,
      });

      // Fechar a conexão com o banco de dados
      client.close();

      // Responder com sucesso
      return res
        .status(201)
        .json({ message: "Contagem de visita registrada com sucesso." });
    } catch (error) {
      console.error("Erro ao gravar no banco de dados:", error);
      return res.status(500).json({
        error: "Erro interno do servidor ao gravar no banco de dados.",
      });
    }
  }

  if (req.method === "GET") {
    try {
      // Conectar ao banco de dados MongoDB
      const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = client.db(MONGODB_DB);

      // Contar documentos na coleção 'contador' para obter a contagem total de visitas
      const totalVisits = await db.collection("contador").countDocuments();

      // Fechar a conexão com o banco de dados
      client.close();

      // Responder com a contagem total de visitas
      return res.status(200).json({ totalVisits });
    } catch (error) {
      console.error("Erro ao buscar no banco de dados:", error);
      return res.status(500).json({
        error: "Erro interno do servidor ao buscar no banco de dados.",
      });
    }
  }

  // Método não permitido
  return res.status(405).json({
    error:
      "Método não permitido. Use POST para enviar o formulário ou GET para obter a contagem de visitas.",
  });
}
