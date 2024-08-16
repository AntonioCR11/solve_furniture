import AnimatedElement from "@/components/commons/AnimatedElement"
import Footer from "@/components/commons/Footer"
import Store from "@/components/commons/Store"
import { cabinetGrotesk } from "@/components/fonts"
import JournalSection from "@/components/landing/journal/JournalSection"
import { getJournals } from "@/types/journal"

const Journal = () => {
  const journals = getJournals()
  return (
    <AnimatedElement
      animationOption={{
      initial : {opacity : 0},
      animate : {opacity : 1},
      transition : {duration : 1}
      }}
    >
      <div className="flex justify-center items-center pb-32">
        <p className={`text-[10rem]`}>JOURNAL</p>
      </div>
      <div className="max-w-[60%] mx-auto px-4 pb-32 space-y-16">
        {
          journals.map((item, index)=>{
            return (
              <JournalSection key={item.code} journal={item} withDivider={index < journals.length-1}/>
            )
          })
        }
      </div>
      <Store/>
      <Footer/>
    </AnimatedElement>
  )
}

export default Journal