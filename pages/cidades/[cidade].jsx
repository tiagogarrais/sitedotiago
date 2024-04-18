import Link from "next/link";
import { useRouter } from "next/router";
import Profissionais from "../../components/profissionais";
import Formulario from "../../components/formulario";

export default function Cidades() {
  const router = useRouter();
  const cidade = router.query.cidade;

  return (
    <div>
      <h2>Brejo Santo - CE</h2>

      <div className="principal">
        <Profissionais
          id="1"
          nome="Junior Moral"
          atividade="Motorista"
          numeroWhatsapp="88955552222"
          instagram="juniormoralmotorista"
        />

        <Profissionais
          id="2"
          nome="Zé da Topic"
          atividade="Motorista"
          numeroWhatsapp="88944447777"
          instagram="zedatopic"
        />
      </div>

      <Formulario />
    </div>
  );
}
