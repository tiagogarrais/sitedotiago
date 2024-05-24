import Image from "next/image";

const drivers = [
  { name: "Valter", phone: 88981187106 },
  { name: "Valmira", phone: 88999332142 },
  { name: "Napoleão", phone: 88999295583 },
  { name: "Jaime", phone: 88998466265 },
  { name: "João Paulo", phone: 88999610046 },
  { name: "Antonio", phone: 88998034410 },
  { name: "Ademir", phone: 88997791191 },
  { name: "C.Gerônimo", phone: 88996140412 },
  { name: "Eduardo", phone: 88996341211 },
  { name: "Berson", phone: 88999745019 },
  { name: "Gilderland", phone: 88997882693 },
  { name: "Rafael", phone: 88997531459 },
  { name: "Davi", phone: 88996882277 },
  { name: "Teste", phone: 88988776655 },
];

const schedule = [
  { day: "Seg", time: "06:45", driver: "Valter" },
  { day: "Seg", time: "08:15", driver: "Valmira" },
  { day: "Seg", time: "09:45", driver: "Napoleão" },
  { day: "Seg", time: "11:15", driver: "Jaime" },
  { day: "Seg", time: "12:50", driver: "João Paulo" },
  { day: "Seg", time: "14:30", driver: "Antonio" },
  { day: "Seg", time: "16:00", driver: "Davi" },
  { day: "Seg", time: "17:00", driver: "Ademir" },
  { day: "Ter", time: "06:45", driver: "C.Gerônimo" },
  { day: "Ter", time: "08:15", driver: "Eduardo" },
  { day: "Ter", time: "09:45", driver: "Berson" },
  { day: "Ter", time: "11:15", driver: "Gilderland" },
  { day: "Ter", time: "12:50", driver: "João Paulo" },
  { day: "Ter", time: "14:30", driver: "Rafael" },
  { day: "Ter", time: "16:00", driver: "Davi" },
  { day: "Ter", time: "17:00", driver: "Ademir" },
  { day: "Qua", time: "06:45", driver: "Valmira" },
  { day: "Qua", time: "08:15", driver: "Napoleão" },
  { day: "Qua", time: "09:45", driver: "Jaime" },
  { day: "Qua", time: "11:15", driver: "João Paulo" },
  { day: "Qua", time: "12:50", driver: "Antonio" },
  { day: "Qua", time: "14:30", driver: "Valter" },
  { day: "Qua", time: "16:00", driver: "Davi" },
  { day: "Qua", time: "17:00", driver: "Ademir" },
  { day: "Qui", time: "06:45", driver: "Eduardo" },
  { day: "Qui", time: "08:15", driver: "Berson" },
  { day: "Qui", time: "09:45", driver: "Gilderland" },
  { day: "Qui", time: "11:15", driver: "João Paulo" },
  { day: "Qui", time: "12:50", driver: "Rafael" },
  { day: "Qui", time: "14:30", driver: "C.Gerônimo" },
  { day: "Qui", time: "16:00", driver: "Davi" },
  { day: "Qui", time: "17:00", driver: "Ademir" },
  { day: "Sex", time: "06:45", driver: "Napoleão" },
  { day: "Sex", time: "08:15", driver: "Jaime" },
  { day: "Sex", time: "09:45", driver: "João Paulo" },
  { day: "Sex", time: "11:15", driver: "Antonio" },
  { day: "Sex", time: "12:50", driver: "Valter" },
  { day: "Sex", time: "14:30", driver: "Valmira" },
  { day: "Sex", time: "16:00", driver: "Davi" },
  { day: "Sex", time: "17:00", driver: "Ademir" },
  { day: "Sab", time: "06:45", driver: "Berson" },
  { day: "Sab", time: "08:15", driver: "Gilderland" },
  { day: "Sab", time: "09:45", driver: "João Paulo" },
  { day: "Sab", time: "11:15", driver: "Rafael" },
  { day: "Sab", time: "12:50", driver: "C.Gerônimo" },
  { day: "Sab", time: "14:30", driver: "Eduardo" },
  { day: "Sab", time: "16:00", driver: "Davi" },
  { day: "Sab", time: "17:00", driver: "Ademir" },
];

export default function JuazeiroDoNorte() {
  return (
    <>
      <div className="principal centralizada">
        <h2>Transporte Alternativo - Horários</h2>
        <h2 style={{ margin: "5px", textAlign: "center" }}>
          Brejo Santo ➜ Juazeiro do Norte
        </h2>
        <Image
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src="/images/transportes/juazeiro-do-norte/juazeiro-do-norte1.jpg"
          height={210}
          width={340}
          alt="Ponto de embarque em frente à Zenir Móveis"
        />
        <p style={{ textAlign: "center" }}>Local: Em frente à Zenir Móveis</p>

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
