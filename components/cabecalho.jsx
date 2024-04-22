import Image from "next/image";

export default function Cabecalho() {
  return (
    <div className="cabecalho">
      <a
        href="/"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {" "}
        <Image
          className="logomarca"
          src="/images/logomarca.jpeg"
          width={355}
          height={355}
          alt="Logomarca do SiteDoTiago.com.br"
        />
      </a>
    </div>
  );
}
