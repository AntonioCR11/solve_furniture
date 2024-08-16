import { cabinetGrotesk } from "@/components/fonts"
import { Journal } from "@/types/types"
import Link from "next/link"

interface Props{
  journal : Journal
  withDivider : boolean
}

const JournalSection = ({journal, withDivider} : Props) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-16">
      <p className={`${cabinetGrotesk.className} text-center`}>TRENDS - JULY 21, 2022</p>
      <p className={`text-8xl text-center px-[12.5%]`}>{journal.name}</p>
      <p className={`${cabinetGrotesk.className} text-center leading-8 px-[12.5%]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam viverra orci sagittis. Nisi est sit amet facilisis magna. Odio tempor orci dapibus ultrices in iaculis.</p>
      <Link href={`/journal/${journal.code}`}>
        <img src={`/journal/${journal.image}`} alt="" className="rounded-full"/>
      </Link>
      {
        withDivider 
        ? <div className="border border-border w-0 h-48 mx-auto"></div>
        : null
      }
    </div>
  )
}

export default JournalSection