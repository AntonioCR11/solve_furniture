'use client'
import { cabinetGrotesk } from "@/components/fonts"

const ServiceButtons = () => {
  const handleButtonClick = () =>{
    document.body.classList.add("h-dvh","overflow-hidden")
    document.getElementById('serviceInfoModal')?.classList.remove('hidden')
    document.getElementById('serviceInfoModal')?.classList.add('flex')
    setTimeout(()=>{
        document.getElementById('serviceInformation')?.classList.remove('translate-x-full')
    },200)
  }
  return (  
    <div className="w-full border-y border-border flex items-center space-x-8 py-6">
      <button onClick={handleButtonClick} className={`${cabinetGrotesk.className}`}>DETAILS</button>
      <button onClick={handleButtonClick} className={`${cabinetGrotesk.className}`}>DELIVERY</button>
      <button onClick={handleButtonClick} className={`${cabinetGrotesk.className}`}>RETURNS</button>
    </div>
  )
}

export default ServiceButtons