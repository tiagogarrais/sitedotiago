import Image from "next/image";

const drivers = [{ name: "Indefinido", phone: 0 }];

const schedule = [
  { day: "Segunda a sexta", time: "07:00", driver: "Indefinido" },
  { day: "Segunda a sexta", time: "07:45", driver: "Indefinido" },
  { day: "Segunda a sexta", time: "08:30", driver: "Indefinido" },
  { day: "Segunda a sexta", time: "09:15", driver: "Indefinido" },
  { day: "Segunda a sexta", time: "10:00", driver: "Indefinido" },
  { day: "Segunda a sexta", time: "10:45", driver: "Indefinido" },
  { day: "Segunda a sexta", time: "11:30", driver: "Indefinido" },
  { day: "Segunda a sexta", time: "12:15", driver: "Indefinido" },
  { day: "Segunda a sexta", time: "13:00", driver: "Indefinido" },
  { day: "Segunda a sexta", time: "13:45", driver: "Indefinido" },
  { day: "Segunda a sexta", time: "14:30", driver: "Indefinido" },
  { day: "Segunda a sexta", time: "15:15", driver: "Indefinido" },
  { day: "Segunda a sexta", time: "16:00", driver: "Indefinido" },
  { day: "Segunda a sexta", time: "16:45", driver: "Indefinido" },
];

export default function Porteiras() {
  return (
    <>
      <div className="principal centralizada">
        <h2>Transporte Alternativo - Horários</h2>
        <h2 style={{ margin: "5px", textAlign: "center" }}>
          Brejo Santo ➜ Milagres
        </h2>
        <Image
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src="/images/transportes/milagres/milagres1.jpg"
          height={210}
          width={340}
          alt="Ponto de embarque ao lado da Macavi e do Deck Cariri"
        />
        <p style={{ textAlign: "center" }}>
          Local: ao lado da Macavi e do Deck Cariri
        </p>

        <p className="aviso">
          Atenção: Caso atinja a lotação o veículo segue viagem antes do
          horário.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center" /* Centraliza horizontalmente */,
            alignItems: "center" /* Centraliza verticalmente */,
            height: "100%",
          }}
        >
          <table className="topic centralizada">
            <thead
              style={{
                display: "flex",
                justifyContent: "center" /* Centraliza horizontalmente */,
                alignItems: "center" /* Centraliza verticalmente */,
                height: "100%",
              }}
            >
              <tr>
                <th style={{ width: "300px" }}>Dia</th>
                <th style={{ width: "150px" }}>Horário</th>
                {/* <th>Motorista</th> */}
                {/* <th>Contato</th> */}
              </tr>
            </thead>

            <tbody
              style={{
                display: "block ruby",
                justifyContent: "center" /* Centraliza horizontalmente */,
                alignItems: "center" /* Centraliza verticalmente */,
                height: "100%",
              }}
            >
              {schedule.map((entry, index) => {
                const driver = drivers.find(
                  (driver) => driver.name === entry.driver
                );
                return (
                  <tr key={index}>
                    <td style={{ width: "300px" }}>{entry.day}</td>
                    <td style={{ width: "150px" }}>{entry.time}</td>
                    {/* <td>{driver.name}</td> */}
                    {/* <td>
                    <button>
                      <a
                        target="_blank"
                        href={`https://wa.me/+55${driver.phone}`}
                      >
                        <Image
                          src={"/images/logo-whatsapp.webp"}
                          width={25}
                          height={25}
                        />
                      </a>
                    </button>
                  </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
