import { NavLink } from 'react-router-dom'

interface CardCityProps {
  city: string
  country: string
  pictureCity: string
  flag: string
}

export function CardCity({ city, country, flag, pictureCity }: CardCityProps) {
  return (
    <NavLink to="/" className="hover:scale-125 max-sm:w-64 max-sm:h-44 mt-5">
      <img src={pictureCity} alt="" className="rounded-t-md" />
      <div className="flex p-8 justify-between max-sm:h-28 w-full bg-white border border-amber-200">
        <div className="space-y-3">
          <h2 className="text-[#47585B] font-bold">{city}</h2>
          <p>{country}</p>
        </div>
        <img src={flag} alt="" className="w-8 h-8 mt-3" />
      </div>
    </NavLink>
  )
}
