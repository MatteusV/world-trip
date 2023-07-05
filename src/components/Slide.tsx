import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { NavLink } from 'react-router-dom'

export default function Slide() {
  return (
    <div className="md:p-28 md:pt-0">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="max-sm:h-56 h-[500px] border border-zinc-900  text-center text-white font-extrabold"
      >
        <SwiperSlide className="max-sm:bg-[url('/src/assets/europaMobile.png')] bg-[url('/src/assets/europaDesktop.png')] bg-cover ">
          <div className="max-sm:mt-16  md:mt-60">
            <h1 className="text-3xl">Europa</h1>
            <h2 className="max-sm:mt-2 max-sm:mb-6">
              O continente mais antigo.
            </h2>

            <NavLink to="/europa" className="underline">
              Veja mais...
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-sm:bg-[url('/src/assets/americaNorteMobile.jpeg')] bg-[url('/src/assets/america-norte.jpg')] bg-center bg-cover flex items-center">
          <div className="max-sm:mt-20 md:mt-60">
            <h1 className="text-3xl">América do norte</h1>
            <h2 className="max-sm:mt-2">O continente mais popular.</h2>

            <NavLink to="/europa" className="underline">
              Veja mais...
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-sm:bg-[url('/src/assets/americaSulMobile.jpeg')] bg-[url('/src/assets/americaSulDesktop.jpeg')] bg-cover bg-center flex items-center">
          <div className="max-sm:mt-20 md:mt-60">
            <h1 className="text-3xl">América do Sul</h1>
            <h2 className="max-sm:mt-2">O continente da cultura indígena.</h2>

            <NavLink to="/europa" className="underline">
              Veja mais...
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-sm:bg-[url('/src/assets/asiaMobile.jpg')] bg-[url('/src/assets/asiaDesktop.jpg')] bg-cover bg-center flex items-center">
          <div className="max-sm:mt-20 md:mt-60">
            <h1 className="text-3xl">Asia</h1>
            <h2 className="max-sm:mt-2">O maior continente.</h2>

            <NavLink to="/europa" className="underline">
              Veja mais...
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-sm:bg-[url('/src/assets/africaMobile.jpg')] bg-[url('/src/assets/africaDesktop.jpg')] bg-cover bg-center  flex items-center">
          <div className="max-sm:mt-20 md:mt-60">
            <h1 className="text-3xl">África</h1>
            <h2 className="max-sm:mt-2">O continente da savana.</h2>

            <NavLink to="/europa" className="underline">
              Veja mais...
            </NavLink>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-sm:bg-[url('/src/assets/oceaniaMobile.jpg')] bg-[url('/src/assets/oceaniaDesktop.jpg')] bg-cover bg-center  flex items-center">
          <div className="max-sm:mt-20 md:mt-60">
            <h1 className="text-3xl">Oceania</h1>
            <h2 className="max-sm:mt-2">O continente de ilhas.</h2>

            <NavLink to="/europa" className="underline">
              Veja mais...
            </NavLink>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
