import Image from "next/image";

const drivers = [{ name: "Rafael da Van", phone: 89999726778 }];

const schedule = [
  { day: "Seg", time: "06:00", driver: "Rafael da Van" },
  { day: "Ter", time: "06:00", driver: "Rafael da Van" },
  { day: "Qua", time: "06:00", driver: "Rafael da Van" },
  { day: "Qui", time: "06:00", driver: "Rafael da Van" },
  { day: "Sex", time: "06:00", driver: "Rafael da Van" },
];

export default function CamposSales() {
  return (
    <>
      <div className="principal centralizada">
        <h2>Transporte Alternativo - Horários</h2>
        <h2 style={{ margin: "5px", textAlign: "center" }}>
          Pio IX ➜ Campos Sales
        </h2>
        <Image
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src="/images/transportes/campos-sales/campos-sales1.jpeg"
          height={210}
          width={340}
          alt="Ponto de embarque: Praça central de Pio IX"
        />
        <p style={{ textAlign: "center" }}>
          Ponto de embarque: Praça central de Pio IX
        </p>

        <p className="aviso">
          Atenção: Caso atinja a lotação o veículo segue viagem antes do
          horário.
        </p>

        <table className="topic">
          <thead>
            <tr>
              <th>Dia</th>
              <th>Horário</th>
              <th>Motorista</th>
              <th>Contato</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((entry, index) => {
              const driver = drivers.find(
                (driver) => driver.name === entry.driver
              );
              return (
                <tr key={index}>
                  <td>{entry.day}</td>
                  <td>{entry.time}</td>
                  <td>{driver.name}</td>
                  <td>
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
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
