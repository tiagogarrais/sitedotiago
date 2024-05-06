import Image from "next/image";

const valter = "Valter";
const telValter = 88981187106;

const valmira = "Valmira";
const telValmira = 88999332142;

const napoleao = "Napoleão";
const telNapoleao = 88999295583;

const jaime = "Jaime";
const telJaime = 88998466265;

const joaoPaulo = "João Paulo";
const telJoaoPaulo = 88999610046;

const antonio = "Antonio";
const telAntonio = 88998034410;

const ademir = "Ademir";
const telAdemir = 88997791191;

const cGeronimo = "C.Gerônimo";
const telCGeronimo = 88996140412;

const eduardo = "Eduardo";
const telEduardo = 88996341211;

const berson = "Berson";
const telBerson = 88999745019;

const gilderland = "Gilderland";
const telGilderland = 88997882693;

const rafael = "Rafael";
const telRafael = 88997531459;

const davi = "Davi";
const telDavi = 88996882277;

const teste = "Construindo";
const telTeste = 88988776655;

export default function HorariosTopic() {
  return (
    <>
      <h1>Transporte Alternativo - Horários</h1>
      <div className="principal centralizada">
        <h4>Origem: Brejo Santo</h4>
        <h4>Destino: Juazeiro do Norte</h4>
        <p>Local: Em frente à Zenir Móveis</p>
      </div>
      <div className="principal centralizada">
        <Image src="/images/cooptasce-zenir.jpg" height={210} width={340} />
      </div>
      <table className="topic">
        <tbody>
          <tr>
            <td>Seg</td>
            <td>06:45</td>
            <td>{valter}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telValter}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>

          <tr>
            <td>Seg</td>
            <td>08:15</td>
            <td>{valmira}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telValmira}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>

          <tr>
            <td>Seg</td>
            <td>09:45</td>
            <td>{napoleao}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telNapoleao}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>

          <tr>
            <td>Seg</td>
            <td>11:15</td>
            <td>{jaime}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telJaime}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>

          <tr>
            <td>Seg</td>
            <td>12:50</td>
            <td>{joaoPaulo}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telJoaoPaulo}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>

          <tr>
            <td>Seg</td>
            <td>14:30</td>
            <td>{antonio}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telAntonio}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>

          <tr>
            <td>Seg</td>
            <td>16:00</td>
            <td>{davi}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telDavi}`}>
                <Image
                  src={"/images/logo-whatsapp.webp"}
                  width={25}
                  height={25}
                />
              </a>
            </td>
          </tr>

          <tr>
            <td>Seg</td>
            <td>17:00</td>
            <td>{ademir}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telAdemir}`}>
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
            <td>06:45</td>
            <td>{cGeronimo}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telCGeronimo}`}>
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
            <td>08:15</td>
            <td>{eduardo}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telEduardo}`}>
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
            <td>09:45</td>
            <td>{berson}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telBerson}`}>
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
            <td>11:15</td>
            <td>{gilderland}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telGilderland}`}>
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
            <td>12:50</td>
            <td>{joaoPaulo}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telJoaoPaulo}`}>
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
            <td>14:30</td>
            <td>{rafael}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telRafael}`}>
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
            <td>16:00</td>
            <td>{davi}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telDavi}`}>
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
            <td>17:00</td>
            <td>{ademir}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telAdemir}`}>
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
            <td>06:45</td>
            <td>{valmira}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telValmira}`}>
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
            <td>08:15</td>
            <td>{napoleao}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telNapoleao}`}>
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
            <td>09:45</td>
            <td>{jaime}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telJaime}`}>
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
            <td>11:15</td>
            <td>{joaoPaulo}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telJoaoPaulo}`}>
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
            <td>12:50</td>
            <td>{antonio}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telAntonio}`}>
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
            <td>14:30</td>
            <td>{valter}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telValter}`}>
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
            <td>16:00</td>
            <td>{davi}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telDavi}`}>
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
            <td>17:00</td>
            <td>{ademir}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telAdemir}`}>
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
            <td>06:45</td>
            <td>{eduardo}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telEduardo}`}>
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
            <td>08:15</td>
            <td>{berson}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telBerson}`}>
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
            <td>09:45</td>
            <td>{gilderland}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telGilderland}`}>
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
            <td>11:15</td>
            <td>{joaoPaulo}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telJoaoPaulo}`}>
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
            <td>12:50</td>
            <td>{rafael}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telRafael}`}>
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
            <td>14:30</td>
            <td>{cGeronimo}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telCGeronimo}`}>
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
            <td>16:00</td>
            <td>{davi}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telDavi}`}>
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
            <td>17:00</td>
            <td>{ademir}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telAdemir}`}>
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
            <td>06:45</td>
            <td>{napoleao}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telNapoleao}`}>
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
            <td>08:15</td>
            <td>{jaime}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telJaime}`}>
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
            <td>09:45</td>
            <td>{joaoPaulo}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telJoaoPaulo}`}>
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
            <td>11:15</td>
            <td>{antonio}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telAntonio}`}>
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
            <td>12:50</td>
            <td>{valter}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telValter}`}>
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
            <td>14:30</td>
            <td>{valmira}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telValmira}`}>
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
            <td>16:00</td>
            <td>{davi}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telDavi}`}>
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
            <td>17:00</td>
            <td>{ademir}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telAdemir}`}>
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
            <td>06:45</td>
            <td>{berson}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telBerson}`}>
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
            <td>08:15</td>
            <td>{gilderland}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telGilderland}`}>
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
            <td>09:45</td>
            <td>{joaoPaulo}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telJoaoPaulo}`}>
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
            <td>11:15</td>
            <td>{rafael}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telRafael}`}>
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
            <td>12:50</td>
            <td>{cGeronimo}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telCGeronimo}`}>
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
            <td>14:30</td>
            <td>{eduardo}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telEduardo}`}>
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
            <td>16:00</td>
            <td>{davi}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telDavi}`}>
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
            <td>17:00</td>
            <td>{ademir}</td>
            <td>
              <a target="_blank" href={`https://wa.me/+55${telAdemir}`}>
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
