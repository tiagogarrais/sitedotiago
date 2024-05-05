import Image from "next/image";

const motorista1 = "Fulano de tal";
const telmotorista1 = 88997230866;

const motorista2 = "Fulano de tal";
const telmotorista2 = 88997230866;

const motorista3 = "Fulano de tal";
const telmotorista3 = 88997230866;

const motorista4 = "Fulano de tal";
const telmotorista4 = 88997230866;

const motorista5 = "Fulano de tal";
const telmotorista5 = 88997230866;

const motorista6 = "Fulano de tal";
const telmotorista6 = 88997230866;

const motorista7 = "Fulano de tal";
const telmotorista7 = 88997230866;

export default function HorariosTopic() {
  return (
    <>
      <h2>Horário das Topics</h2>
      <h4>Juazeiro do Norte</h4>
      <table className="topic">
        <tbody>
          <tr>
            <td>Seg</td>
            <td>08:00</td>
            <td>{motorista1}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telmotorista1}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>Ter</td>
            <td>07:30</td>
            <td>{motorista2}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telmotorista2}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>Qua</td>
            <td>09:00</td>
            <td>{motorista3}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telmotorista3}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>Qui</td>
            <td>08:30</td>
            <td>{motorista4}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telmotorista4}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>Sex</td>
            <td>07:45</td>
            <td>{motorista5}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telmotorista5}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>Sab</td>
            <td>10:00</td>
            <td>{motorista6}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telmotorista6}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>
          <tr>
            <td>Dom</td>
            <td>09:30</td>
            <td>{motorista7}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telmotorista7}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
