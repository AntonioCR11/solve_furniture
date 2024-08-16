'use client'
import { cabinetGrotesk } from "../fonts"

interface Props{
    modalId : string
    modalCanvasId : string
    closeAnimation ? : string[]
}
const CloseModalButton = ({modalId, modalCanvasId, closeAnimation} : Props) => {
  const handleButtonClick = () =>{
    document.body.classList.remove("h-dvh","overflow-hidden")
    if(closeAnimation){
      closeAnimation.forEach(item => {
        document.getElementById(modalCanvasId)?.classList.add(item)
      });
    }else{
      document.getElementById(modalCanvasId)?.classList.add('translate-x-full')
    }
    setTimeout(()=>{
        document.getElementById(modalId)?.classList.remove('flex')
        document.getElementById(modalId)?.classList.add('hidden')
    },200)
  }
  return (
    <button onClick={handleButtonClick} className={cabinetGrotesk.className}>CLOSE</button>
  )
}

export default CloseModalButton