import { MongoClient } from "mongodb";

const { MONGODB_URI, MONGODB_DB } = process.env;

export default async function GetProfissionais(req, res) {
  if (req.method === "GET") {
    try {
      // Conectar ao banco de dados MongoDB
      const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = client.db(MONGODB_DB);

      // Consultar os dados dos profissionais na coleção adequada
      const profissionaisCollection = db.collection("profissionais");
      const profissionais = await profissionaisCollection
        .find({ slugCidade: "brejosanto", autorizaPublicar: true })
        .sort({ nome: 1 })
        .toArray();
      // Fechar a conexão com o banco de dados
      await client.close();

      // Enviar os dados dos profissionais como resposta
      res.status(200).json(profissionais);
    } catch (error) {
      console.error("Erro ao obter dados dos profissionais:", error);
      res
        .status(500)
        .json({ message: "Erro ao obter dados dos profissionais" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
