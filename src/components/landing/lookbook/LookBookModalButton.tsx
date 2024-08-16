'use client'

import { Product } from "@/types/types"
import Link from "next/link"

interface Props{
    product : Product
}

const LookBookModalButton = ({product} : Props) => {
  const openModal = () =>{
    document.body.classList.add("h-dvh","overflow-hidden")
    document.getElementById('productBriefModal')?.classList.remove('hidden')
    document.getElementById('productBriefModal')?.classList.add('flex')
    setTimeout(()=>{
      document.getElementById('brief')?.classList.remove("opacity-0","scale-90")
    },200)
  }
  return (
    <Link href={`?product=${product.code}`} onClick={openModal}>
      <img src={`/shop/${product.image}`} alt="" className="rounded-full"/>
    </Link>
  )
}

export default LookBookModalButton