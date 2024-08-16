'use client'
import { cabinetGrotesk } from "@/components/fonts"
import { Product } from "@/types/types"
import Link from "next/link"

interface Props{
    product : Product
}
const GetProductButton = ({product} : Props) => {
  return (
    <Link onClick={()=>{ document.body.classList.remove("h-dvh","overflow-hidden")}} href={`/product/${product.code}`} className={`py-4 px-8 bg-dark text-white rounded-full  ${cabinetGrotesk.className}`}>GET PRODUCT</Link>
  )
}

export default GetProductButton