import circle from '../assets/circleYellow.svg'
import airplane from '../assets/airplane.svg'
import cocktail from '../assets/cocktail.svg'
import surf from '../assets/surf.svg'
import building from '../assets/building.svg'
import museum from '../assets/museum.svg'
import earth from '../assets/earth.svg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Slide from '../components/Slide'
import { Header } from '../components/Header'

export function Home() {
  return (
    <div className="bg-[#e9ffe1]">
      <Header />
      <div className="max-sm:bg-[url('/src/assets/Background.png')]  xl:bg-[url('/src/assets/backgroundDesktop.png')] bg-cover max-sm:h-50 xl:h-80 text-white max-sm:p-2 xl:px-36 pr-24 flex  items-center justify-between">
        <div className="">
          <h1 className="text-2xl ">
            5 Continentes, <br />
            infinitas possibilidades.
          </h1>
          <p className="text-zinc-100 mt-3">
            Chegou a hora de tirar do papela viagem que você sempre sonhou
          </p>
        </div>

        <img src={airplane} alt="" className="-mb-20 max-sm:hidden" />
      </div>

      <main className="">
        <div className="max-sm:hidden mt-16 mb-16 flex gap-36 justify-center ">
          <div className="flex flex-col gap-3 items-center">
            <img src={cocktail} alt="" />
            <p className="font-medium text-lg">vida noturna</p>
          </div>
          <div className="flex flex-col gap-3  items-center">
            <img src={surf} alt="" />
            <p className="font-medium text-lg mr-3">praia</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <img src={building} alt="" />
            <p className="font-medium text-lg">moderno</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <img src={museum} alt="" />
            <p className="font-medium text-lg mr-3">clássico</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <img src={earth} alt="" />
            <p className="font-medium text-lg">e mais...</p>
          </div>
        </div>

        <div className="xl:hidden w-screen p-5">
          <div className="flex flex-col gap-4 items-center justify-center pr-3">
            <div className="flex gap-8">
              <div className="flex gap-2">
                <img src={circle} alt="" />
                vida noturna
              </div>

              <div className="flex gap-2">
                <img src={circle} alt="" />
                praia
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex gap-2">
                <img src={circle} alt="" />
                moderno
              </div>
              <div className="flex gap-2">
                <img src={circle} alt="" />
                clássico
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-4  ">
            <div className="flex gap-2">
              <img src={circle} alt="" />e mais...
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1 className="text-center text-[#47585B] mb-5 md:text-2xl font-medium">
            Vamos nessa? <br /> Então escolha seu continente
          </h1>
          <Slide />
        </div>
      </main>
    </div>
  )
}
