import Image from "next/image";

const drivers = [{ name: "Indefinido", phone: 0 }];

const schedule = [
  { day: "Segunda", time: "07:00", driver: "Indefinido" },
  { day: "Segunda", time: "07:20", driver: "Indefinido" },
  { day: "Segunda", time: "07:40", driver: "Indefinido" },
  { day: "Segunda", time: "08:00", driver: "Indefinido" },
  { day: "Segunda", time: "08:20", driver: "Indefinido" },
  { day: "Segunda", time: "08:40", driver: "Indefinido" },
  { day: "Segunda", time: "09:00", driver: "Indefinido" },
  { day: "Segunda", time: "09:20", driver: "Indefinido" },
  { day: "Segunda", time: "09:40", driver: "Indefinido" },
  { day: "Segunda", time: "10:00", driver: "Indefinido" },
  { day: "Segunda", time: "10:20", driver: "Indefinido" },
  { day: "Segunda", time: "10:40", driver: "Indefinido" },
  { day: "Segunda", time: "11:00", driver: "Indefinido" },
  { day: "Segunda", time: "11:20", driver: "Indefinido" },
  { day: "Segunda", time: "11:40", driver: "Indefinido" },
  { day: "Segunda", time: "12:00", driver: "Indefinido" },
  { day: "Segunda", time: "12:20", driver: "Indefinido" },
  { day: "Segunda", time: "12:40", driver: "Indefinido" },
  { day: "Segunda", time: "13:00", driver: "Indefinido" },
  { day: "Segunda", time: "13:20", driver: "Indefinido" },
  { day: "Segunda", time: "13:40", driver: "Indefinido" },
  { day: "Segunda", time: "14:00", driver: "Indefinido" },
  { day: "Segunda", time: "14:20", driver: "Indefinido" },
  { day: "Segunda", time: "14:40", driver: "Indefinido" },
  { day: "Segunda", time: "15:00", driver: "Indefinido" },
  { day: "Segunda", time: "15:20", driver: "Indefinido" },
  { day: "Segunda", time: "15:40", driver: "Indefinido" },
  { day: "Segunda", time: "16:00", driver: "Indefinido" },
  { day: "Segunda", time: "16:20", driver: "Indefinido" },
  { day: "Segunda", time: "16:40", driver: "Indefinido" },
  { day: "Segunda", time: "17:00", driver: "Indefinido" },
  { day: "Segunda", time: "17:30", driver: "Indefinido" },

  { day: "-", time: "-", driver: "-" },

  { day: "Terça", time: "07:00", driver: "Indefinido" },
  { day: "Terça", time: "07:20", driver: "Indefinido" },
  { day: "Terça", time: "07:40", driver: "Indefinido" },
  { day: "Terça", time: "08:00", driver: "Indefinido" },
  { day: "Terça", time: "08:20", driver: "Indefinido" },
  { day: "Terça", time: "08:40", driver: "Indefinido" },
  { day: "Terça", time: "09:00", driver: "Indefinido" },
  { day: "Terça", time: "09:20", driver: "Indefinido" },
  { day: "Terça", time: "09:40", driver: "Indefinido" },
  { day: "Terça", time: "10:00", driver: "Indefinido" },
  { day: "Terça", time: "10:20", driver: "Indefinido" },
  { day: "Terça", time: "10:40", driver: "Indefinido" },
  { day: "Terça", time: "11:00", driver: "Indefinido" },
  { day: "Terça", time: "11:20", driver: "Indefinido" },
  { day: "Terça", time: "11:40", driver: "Indefinido" },
  { day: "Terça", time: "12:00", driver: "Indefinido" },
  { day: "Terça", time: "12:20", driver: "Indefinido" },
  { day: "Terça", time: "12:40", driver: "Indefinido" },
  { day: "Terça", time: "13:00", driver: "Indefinido" },
  { day: "Terça", time: "13:20", driver: "Indefinido" },
  { day: "Terça", time: "13:40", driver: "Indefinido" },
  { day: "Terça", time: "14:00", driver: "Indefinido" },
  { day: "Terça", time: "14:20", driver: "Indefinido" },
  { day: "Terça", time: "14:40", driver: "Indefinido" },
  { day: "Terça", time: "15:00", driver: "Indefinido" },
  { day: "Terça", time: "15:20", driver: "Indefinido" },
  { day: "Terça", time: "15:40", driver: "Indefinido" },
  { day: "Terça", time: "16:00", driver: "Indefinido" },
  { day: "Terça", time: "16:20", driver: "Indefinido" },
  { day: "Terça", time: "16:40", driver: "Indefinido" },
  { day: "Terça", time: "17:00", driver: "Indefinido" },
  { day: "Terça", time: "17:30", driver: "Indefinido" },

  { day: "-", time: "-", driver: "-" },

  { day: "Quarta", time: "07:00", driver: "Indefinido" },
  { day: "Quarta", time: "07:20", driver: "Indefinido" },
  { day: "Quarta", time: "07:40", driver: "Indefinido" },
  { day: "Quarta", time: "08:00", driver: "Indefinido" },
  { day: "Quarta", time: "08:20", driver: "Indefinido" },
  { day: "Quarta", time: "08:40", driver: "Indefinido" },
  { day: "Quarta", time: "09:00", driver: "Indefinido" },
  { day: "Quarta", time: "09:20", driver: "Indefinido" },
  { day: "Quarta", time: "09:40", driver: "Indefinido" },
  { day: "Quarta", time: "10:00", driver: "Indefinido" },
  { day: "Quarta", time: "10:20", driver: "Indefinido" },
  { day: "Quarta", time: "10:40", driver: "Indefinido" },
  { day: "Quarta", time: "11:00", driver: "Indefinido" },
  { day: "Quarta", time: "11:20", driver: "Indefinido" },
  { day: "Quarta", time: "11:40", driver: "Indefinido" },
  { day: "Quarta", time: "12:00", driver: "Indefinido" },
  { day: "Quarta", time: "12:20", driver: "Indefinido" },
  { day: "Quarta", time: "12:40", driver: "Indefinido" },
  { day: "Quarta", time: "13:00", driver: "Indefinido" },
  { day: "Quarta", time: "13:20", driver: "Indefinido" },
  { day: "Quarta", time: "13:40", driver: "Indefinido" },
  { day: "Quarta", time: "14:00", driver: "Indefinido" },
  { day: "Quarta", time: "14:20", driver: "Indefinido" },
  { day: "Quarta", time: "14:40", driver: "Indefinido" },
  { day: "Quarta", time: "15:00", driver: "Indefinido" },
  { day: "Quarta", time: "15:20", driver: "Indefinido" },
  { day: "Quarta", time: "15:40", driver: "Indefinido" },
  { day: "Quarta", time: "16:00", driver: "Indefinido" },
  { day: "Quarta", time: "16:20", driver: "Indefinido" },
  { day: "Quarta", time: "16:40", driver: "Indefinido" },
  { day: "Quarta", time: "17:00", driver: "Indefinido" },
  { day: "Quarta", time: "17:30", driver: "Indefinido" },

  { day: "-", time: "-", driver: "-" },

  { day: "Quinta", time: "07:00", driver: "Indefinido" },
  { day: "Quinta", time: "07:20", driver: "Indefinido" },
  { day: "Quinta", time: "07:40", driver: "Indefinido" },
  { day: "Quinta", time: "08:00", driver: "Indefinido" },
  { day: "Quinta", time: "08:20", driver: "Indefinido" },
  { day: "Quinta", time: "08:40", driver: "Indefinido" },
  { day: "Quinta", time: "09:00", driver: "Indefinido" },
  { day: "Quinta", time: "09:20", driver: "Indefinido" },
  { day: "Quinta", time: "09:40", driver: "Indefinido" },
  { day: "Quinta", time: "10:00", driver: "Indefinido" },
  { day: "Quinta", time: "10:20", driver: "Indefinido" },
  { day: "Quinta", time: "10:40", driver: "Indefinido" },
  { day: "Quinta", time: "11:00", driver: "Indefinido" },
  { day: "Quinta", time: "11:20", driver: "Indefinido" },
  { day: "Quinta", time: "11:40", driver: "Indefinido" },
  { day: "Quinta", time: "12:00", driver: "Indefinido" },
  { day: "Quinta", time: "12:20", driver: "Indefinido" },
  { day: "Quinta", time: "12:40", driver: "Indefinido" },
  { day: "Quinta", time: "13:00", driver: "Indefinido" },
  { day: "Quinta", time: "13:20", driver: "Indefinido" },
  { day: "Quinta", time: "13:40", driver: "Indefinido" },
  { day: "Quinta", time: "14:00", driver: "Indefinido" },
  { day: "Quinta", time: "14:20", driver: "Indefinido" },
  { day: "Quinta", time: "14:40", driver: "Indefinido" },
  { day: "Quinta", time: "15:00", driver: "Indefinido" },
  { day: "Quinta", time: "15:20", driver: "Indefinido" },
  { day: "Quinta", time: "15:40", driver: "Indefinido" },
  { day: "Quinta", time: "16:00", driver: "Indefinido" },
  { day: "Quinta", time: "16:20", driver: "Indefinido" },
  { day: "Quinta", time: "16:40", driver: "Indefinido" },
  { day: "Quinta", time: "17:00", driver: "Indefinido" },
  { day: "Quinta", time: "17:30", driver: "Indefinido" },

  { day: "-", time: "-", driver: "-" },

  { day: "Sexta", time: "07:00", driver: "Indefinido" },
  { day: "Sexta", time: "07:20", driver: "Indefinido" },
  { day: "Sexta", time: "07:40", driver: "Indefinido" },
  { day: "Sexta", time: "08:00", driver: "Indefinido" },
  { day: "Sexta", time: "08:20", driver: "Indefinido" },
  { day: "Sexta", time: "08:40", driver: "Indefinido" },
  { day: "Sexta", time: "09:00", driver: "Indefinido" },
  { day: "Sexta", time: "09:20", driver: "Indefinido" },
  { day: "Sexta", time: "09:40", driver: "Indefinido" },
  { day: "Sexta", time: "10:00", driver: "Indefinido" },
  { day: "Sexta", time: "10:20", driver: "Indefinido" },
  { day: "Sexta", time: "10:40", driver: "Indefinido" },
  { day: "Sexta", time: "11:00", driver: "Indefinido" },
  { day: "Sexta", time: "11:20", driver: "Indefinido" },
  { day: "Sexta", time: "11:40", driver: "Indefinido" },
  { day: "Sexta", time: "12:00", driver: "Indefinido" },
  { day: "Sexta", time: "12:20", driver: "Indefinido" },
  { day: "Sexta", time: "12:40", driver: "Indefinido" },
  { day: "Sexta", time: "13:00", driver: "Indefinido" },
  { day: "Sexta", time: "13:20", driver: "Indefinido" },
  { day: "Sexta", time: "13:40", driver: "Indefinido" },
  { day: "Sexta", time: "14:00", driver: "Indefinido" },
  { day: "Sexta", time: "14:20", driver: "Indefinido" },
  { day: "Sexta", time: "14:40", driver: "Indefinido" },
  { day: "Sexta", time: "15:00", driver: "Indefinido" },
  { day: "Sexta", time: "15:20", driver: "Indefinido" },
  { day: "Sexta", time: "15:40", driver: "Indefinido" },
  { day: "Sexta", time: "16:00", driver: "Indefinido" },
  { day: "Sexta", time: "16:20", driver: "Indefinido" },
  { day: "Sexta", time: "16:40", driver: "Indefinido" },
  { day: "Sexta", time: "17:00", driver: "Indefinido" },
  { day: "Sexta", time: "17:30", driver: "Indefinido" },

  { day: "-", time: "-", driver: "-" },

  { day: "Sábado", time: "07:00", driver: "Indefinido" },
  { day: "Sábado", time: "07:20", driver: "Indefinido" },
  { day: "Sábado", time: "07:40", driver: "Indefinido" },
  { day: "Sábado", time: "08:00", driver: "Indefinido" },
  { day: "Sábado", time: "08:20", driver: "Indefinido" },
  { day: "Sábado", time: "08:40", driver: "Indefinido" },
  { day: "Sábado", time: "09:00", driver: "Indefinido" },
  { day: "Sábado", time: "09:20", driver: "Indefinido" },
  { day: "Sábado", time: "09:40", driver: "Indefinido" },
  { day: "Sábado", time: "10:00", driver: "Indefinido" },
  { day: "Sábado", time: "10:20", driver: "Indefinido" },
  { day: "Sábado", time: "10:40", driver: "Indefinido" },
  { day: "Sábado", time: "11:00", driver: "Indefinido" },
  { day: "Sábado", time: "11:20", driver: "Indefinido" },
  { day: "Sábado", time: "11:40", driver: "Indefinido" },
  { day: "Sábado", time: "12:00", driver: "Indefinido" },
  { day: "Sábado", time: "12:20", driver: "Indefinido" },
  { day: "Sábado", time: "12:40", driver: "Indefinido" },
  { day: "Sábado", time: "13:00", driver: "Indefinido" },
  { day: "Sábado", time: "13:20", driver: "Indefinido" },
  { day: "Sábado", time: "13:40", driver: "Indefinido" },
  { day: "Sábado", time: "14:00", driver: "Indefinido" },
  { day: "Sábado", time: "14:20", driver: "Indefinido" },
  { day: "Sábado", time: "14:40", driver: "Indefinido" },
  { day: "Sábado", time: "15:00", driver: "Indefinido" },
  { day: "Sábado", time: "15:20", driver: "Indefinido" },
  { day: "Sábado", time: "15:40", driver: "Indefinido" },
  { day: "Sábado", time: "16:00", driver: "Indefinido" },
  { day: "Sábado", time: "16:20", driver: "Indefinido" },
  { day: "Sábado", time: "16:40", driver: "Indefinido" },
  { day: "Sábado", time: "17:00", driver: "Indefinido" },
  { day: "Sábado", time: "17:30", driver: "Indefinido" },
];

export default function Porteiras() {
  return (
    <>
      <div className="principal centralizada">
        <h2>Transporte Alternativo - Horários</h2>
        <h2 style={{ margin: "5px", textAlign: "center" }}>
          Brejo Santo ➜ Porteiras
        </h2>
        <Image
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src="/images/transportes/porteiras/porteiras1.jpg"
          height={210}
          width={340}
          alt="Ponto de embarque em frente à Panificadora Adriana"
        />
        <p style={{ textAlign: "center" }}>
          Local: Em frente à Panificadora Adriana
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
                <th style={{ width: "150px" }}>Dia</th>
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
                    <td style={{ width: "150px" }}>{entry.day}</td>
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
