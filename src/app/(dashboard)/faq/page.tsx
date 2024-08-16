
import AnimatedElement from "@/components/commons/AnimatedElement"
import Footer from "@/components/commons/Footer"
import Help from "@/components/commons/Help"
import { cabinetGrotesk } from "@/components/fonts"
import FaqSection from "@/components/landing/faq/FaqSection"

const FAQ = () => {
  return (
    <AnimatedElement
      animationOption={{
        initial : {opacity : 0},
        animate : {opacity : 1},
        transition : {duration : 1}
      }}
    >
        <div className="flex flex-col justify-center items-center pb-32 space-y-4">
            <p className={`${cabinetGrotesk.className} font-semibold`}>FAQ</p>
            <p className={`text-8xl`}>Any Questions?</p>
        </div>
        
        <FaqSection/>
        
        <Help/>
        <Footer/>
    </AnimatedElement>
  )
}

export default FAQ