import Image from "next/image";

export default function Cabecalho() {
  return (
    <div className="cabecalho">
      <Image
        src="/images/logomarca.jpeg"
        width={75}
        height={75}
        alt="Logomarca do site do Tiago.com.br"
      />
      <a href="/" style={{ textDecoration: "none" }}>
        <h1>SiteDoTiago.com.br</h1>
      </a>
    </div>
  );
}
