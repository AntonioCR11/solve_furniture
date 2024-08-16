import AnimatedElement from "@/components/commons/AnimatedElement";
import styles from "./rooms.module.css";
import { cabinetGrotesk } from "@/components/fonts";
import { getRooms } from "@/types/rooms";
import Link from "next/link";

const Rooms = () => {
  const rooms = getRooms();
  const roomBackground = [
    styles.osloBackground,
    styles.newyorkBackground,
    styles.lisbonBackground,
    styles.berlinBackground,
    styles.madridBackground
  ];
  return (
    <div className="w-full h-dvh flex space-x-4 overflow-x-scroll">
      {
        rooms.map((item, index)=>{
          return (
            <AnimatedElement
              animationOption={{
                initial : {opacity : 0, transform : "translateX(100px)"},
                animate : {opacity : 1, transform : "translateX(0px)"},
                transition : {duration : 1+(index*0.5)}
              }}
              customClass={`w-3/4 h-full flex-shrink-0 flex items-center justify-center ${roomBackground[index]}`}
              key={item.code} 
            >
              
              <AnimatedElement
                animationOption={{
                  initial : {opacity : 0, transform : "translateY(100px)"},
                  whileInView : {opacity : 1, transform : "translateY(0px)"},
                  transition : {duration : .5},
                  viewport : { once : false}
                }}
                customClass={`flex flex-col items-center justify-center`}
              >
                <p className="text-white text-center text-9xl leading-none">{item.name}</p>
                <Link href={`/rooms/${item.code}`} className={`border border-white text-sm text-white tracking-wider px-6 py-4 rounded-full ${cabinetGrotesk.className} transition-all hover:bg-white hover:text-dark hover:scale-110`}>EXPLORE</Link>
              </AnimatedElement>
           </AnimatedElement>
          )
        })
      }
    </div>
  )
}

export default Rooms