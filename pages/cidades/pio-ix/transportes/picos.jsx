import Image from "next/image";

const drivers = [{ name: "Teste", phone: 89999665544 }];

const schedule = [
  { day: "Seg", time: "06:45", driver: "Teste" },
  { day: "Seg", time: "08:15", driver: "Teste" },
];

export default function Picos() {
  return (
    <>
      <div className="principal centralizada">
        <h2>Transporte Alternativo - Horários</h2>
        <h2 style={{ margin: "5px", textAlign: "center" }}>Pio IX ➜ Picos</h2>
        <Image
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src="/images/transportes/picos/picos1.jpg"
          height={210}
          width={340}
          alt="Ponto de embarque em frente ao Armazém Paraíba"
        />
        <p style={{ textAlign: "center" }}>
          Local: Em frente ao Armazém Paraíba
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
