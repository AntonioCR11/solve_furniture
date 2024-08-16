'use client'

import { motion } from "framer-motion"

interface Props{
  src : string
  customClass ? : string
  imageSize : number
  floatingPace : number
  fadeDuration : number
}

const FloatingImageBubble = ({src, customClass, imageSize, floatingPace, fadeDuration} : Props) => {
  return (
    <motion.div
      initial={{ opacity : 0 }}
      animate={{ opacity : 1 }}
      transition={{ duration: fadeDuration, ease : "easeInOut" }}
    >
        <motion.img
          initial={{ transform : "translateY(0px)"}}
          animate={{ transform : "translateY(-20px)"}}
          transition={{ repeat : Infinity, repeatType:"mirror", ease:"easeInOut", duration: floatingPace }}
          src={`./onboarding/${src}.png`}
          alt=""
          width={imageSize}
          className={`absolute duration-500 ${customClass}`}
        />
    </motion.div>
  )
}

export default FloatingImageBubble