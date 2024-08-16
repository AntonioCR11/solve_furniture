'use client'

import { Room } from "@/types/types"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface Props {
  nextRoom : Room
}
const NextRoomSection = ({nextRoom} : Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const handleNextRoom = () =>{
    setIsClicked(true);
    document.getElementById('nextRoomTitle')!.innerHTML = nextRoom.name
    document.getElementById('nextRoomImage')!.classList.remove("group-hover:scale-110","rounded-full");
    document.getElementById('nextRoomTitle')!.classList.remove("-translate-y-[225%]");
    document.getElementById('nextRoomTitle')!.classList.add("text-white");
    document.getElementById('nextRoom')!.classList.add("h-dvh","overflow-hidden");
    document.getElementById('nextRoom')!.classList.remove("px-4");
    document.getElementById('nextRoomButton')!.classList.remove("w-1/3","rounded-full");
    document.getElementById('nextRoomButton')!.classList.add("w-full");

    setTimeout(()=>{
      router.push(nextRoom.code)
    },1000)
  }
  return (
    <div id="nextRoom" className={`transform transition-all duration-700 px-4 relative mx-auto flex py-32 items-center justify-center`}>
      <p id="nextRoomTitle" className={`absolute transition-all duration-700 left-1/2 -translate-x-1/2 -translate-y-[225%] text-9xl z-50`}>NEXT</p>
      <a id="nextRoomButton" href="#nextRoom" onClick={handleNextRoom} className={`w-1/3 rounded-full transition-all duration-200 group overflow-hidden`}>
        <img id="nextRoomImage" src={`/rooms/${nextRoom!.code}.jpg`} alt="" className={`aspect-square transition-all duration-200 group-hover:scale-110 rounded-full`} />
      </a>
    </div>
  )
}

export default NextRoomSection