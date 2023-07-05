import londres from '../assets/europa/londresMobile.png'
import inglaterra from '../assets/europa/inglaterra.png'
import paris from '../assets/europa/parisMobile.png'
import frança from '../assets/europa/frança.png'
import roma from '../assets/europa/romaMobile.png'
import italia from '../assets/europa/italia.png'
import praga from '../assets/europa/pragaMobile.png'
import republicaTcheca from '../assets/europa/republicaTcheca.png'
import amsterda from '../assets/europa/amsterdaMobile.png'
import holanda from '../assets/europa/holanda.png'
import info from '../assets/europa/info.svg'
import { CardCity } from '../components/cardCity'

export function Europa() {
  return (
    <div className="bg-[#e9ffe1]">
      <header className="w-screen h-[500px] max-sm:h-40 bg-[url('src/assets/europa/banner.png')] bg-cover flex items-end md:pl-32 md:pb-14 max-sm:items-center max-sm:justify-center md:bg-center border border-b-black">
        <h1 className="text-white text-2xl font-bold">Europa</h1>
      </header>
      <main className="pb-28 md:p-10 xl:p-28 xl:pt-5">
        <div className="text-justify p-4">
          <div className="md:flex md:justify-center md:items-center xl:items-start  md:w-full xl:p-10 ">
            <div className="md:w-96 md:ml-28">
              <p className="text-[#475858] xl:text-xl">
                A Europa é, por convenção, um dos seis continentes do mundo.
                Compreendendo a península ocidental da Eurásia, a Europa
                geralmente divide-se da Ásia a leste pela divisória de águas dos
                montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro
                a sudeste
              </p>
            </div>

            <div className="flex mt-5 justify-between md:w-[37rem] md:justify-start md:gap-10 md:pl-28 xl:pt-4">
              <div>
                <h2 className="text-[#FFBA08] text-xl xl:text-5xl font-bold">
                  50
                </h2>
                <p className="text-[#475858] xl:text-xl -mt-1 md:font-bold">
                  países
                </p>
              </div>
              <div>
                <h2 className="text-[#FFBA08] text-2xl xl:text-5xl font-bold">
                  60
                </h2>
                <p className="text-[#475858] xl:text-xl -mt-1 md:font-bold">
                  línguas
                </p>
              </div>
              <div>
                <h2 className="text-[#FFBA08] text-2xl xl:text-5xl font-bold">
                  24
                </h2>
                <p className="text-[#475858] flex gap-1 xl:text-xl -mt-1 md:font-bold">
                  cidades +100 <img src={info} alt="" />
                </p>
              </div>
            </div>
          </div>

          <h1 className="mt-5 mb-5 text-2xl text-[#475858]">Cidades +100</h1>
          <div className="flex max-sm:flex-col max-sm:gap-36 max-sm:items-center md:flex-wrap md:gap-16 md:justify-start xl:pl-20 ">
            <CardCity
              city="Londres"
              country="Reino Unido"
              flag={inglaterra}
              pictureCity={londres}
            />

            <CardCity
              city="Paris"
              country="França"
              flag={frança}
              pictureCity={paris}
            />

            <CardCity
              city="Paris"
              country="França"
              flag={frança}
              pictureCity={paris}
            />

            <CardCity
              city="Roma"
              country="Itália"
              flag={italia}
              pictureCity={roma}
            />

            <CardCity
              city="Praga"
              country="República Tcheca"
              flag={republicaTcheca}
              pictureCity={praga}
            />

            <CardCity
              city="Amsterdã"
              country="Holanda"
              flag={holanda}
              pictureCity={amsterda}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
