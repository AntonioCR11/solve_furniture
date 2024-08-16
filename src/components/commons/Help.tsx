import Link from "next/link"
import { cabinetGrotesk } from "../fonts"
import Arrow from "../icons/Arrow"

const Help = () => {
  return (
    <section
        id="help"
        className="w-full border-y border-border"
      >
        <div className="max-w-[80%] px-4 mx-auto py-32 flex">
          <div className="w-5/12">
            <p className="text-8xl">Help?</p>
          </div>
          <div className="w-7/12 flex">
            <div className="w-1/2 space-y-12">
                <p className="text-4xl">Local Stores</p>
                <p className={`${cabinetGrotesk.className} leading-8`}>Proin fermentum leo vel orci porta non pulvinar. <br /> Diam phasellus vestibulum lorem sed risus ultricies.</p>
                <Link href={`/home#stores`} className={`${cabinetGrotesk.className} w-fit flex items-center space-x-2 font-semibold`}>
                    <p className="tracking-widest">FIND A STORE</p>
                    <Arrow/>
                </Link>
            </div>
            <div className="w-1/2 space-y-12">
                <p className="text-4xl">Questions</p>
                <p className={`${cabinetGrotesk.className} leading-8`}>Proin fermentum leo vel orci porta non pulvinar. <br /> Diam phasellus vestibulum lorem sed risus ultricies.</p>
                <Link href={`/faq`} className={`${cabinetGrotesk.className} w-fit flex items-center space-x-2 font-semibold`}>
                    <p className="tracking-widest">READ THE FAQ</p>
                    <Arrow/>
                </Link>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Help