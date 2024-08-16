'use client'
import { AnimationOption } from "@/types/types"
import { motion } from "framer-motion"

interface Props{
    children : React.ReactNode
    animationOption : AnimationOption
    customClass ? : string
    repeatOnce ? : boolean
}
const AnimatedElement = ({children, animationOption, customClass} : Props) => {
  return <>
    <motion.div
      initial={animationOption.initial}
      animate={animationOption.animate}
      transition={animationOption.transition}
      whileInView={animationOption.whileInView}
      viewport={ animationOption.viewport ? animationOption.viewport : { once : true } }
      className={customClass}
    >
        {children}
    </motion.div>
  </>
}

export default AnimatedElement