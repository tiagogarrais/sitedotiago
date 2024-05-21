import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <div className="cabecalho">
      <div className="social-container">
        <span>
          Siga-nos nas redes sociais{" "}
          <span className="social-links">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/admprogramador"
            >
              <Image
                src="/images/logo-instagram.webp"
                width={30}
                height={30}
                alt="Instagram"
              />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/admprogramador"
            >
              <Image
                src="/images/logo-facebook.png"
                width={30}
                height={30}
                alt="Facebook"
              />
            </a>
          </span>
        </span>
      </div>
      <Link href="/">
        <Image
          className="logomarca"
          src="/images/logomarca.jpeg"
          width={150}
          height={150}
          alt="Logomarca do SiteDoTiago.com.br"
        />
      </Link>
      <div className="centralizada">
        <h1>sitedotiago.com.br</h1>
      </div>
      <style jsx>{`
        .cabecalho {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .social-container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 100%;
        }
        .social-links {
          display: flex;
          align-items: center;
          margin-left: 10px;
        }
        .social-links a {
          margin-left: 10px;
        }
        .logomarca {
          margin: 20px 0;
        }
        .centralizada {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
