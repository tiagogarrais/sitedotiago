import Link from "next/link";
import { useRouter } from "next/router";
import Profissionais from "../../components/profissionais";
import Formulario from "../../components/formulario";
import Premium from "../../components/premium";

export default function Cidades() {
  const router = useRouter();
  const cidade = router.query.cidade;

  return (
    <div>
      <div className="principal">
        <h3>Empresas e profissionais cadastrados</h3>
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
