import CloseModalButton from "@/components/commons/CloseModalButton"
import { cabinetGrotesk } from "@/components/fonts"
import { Product } from "@/types/types"
import Link from "next/link"
import GetProductButton from "./GetProductButton"

interface Props {
  product : Product | null | undefined
}

const ProductBriefModal = ({product} : Props) => {
  return (
    <section id="productBriefModal" className="fixed top-0 w-full h-dvh bg-dark/80 transition-all z-50 hidden overflow-hidden justify-center">
        <div id="brief" className="w-1/4 bg-background h-full py-16 px-12 flex flex-col justify-center transition-all opacity-0 scale-90 space-y-8">
            <CloseModalButton 
              modalId="productBriefModal" 
              modalCanvasId="brief"
              closeAnimation={["opacity-0","scale-90"]}
            />
            {
              product 
              ? 
                <div className="flex flex-col justify-center items-center space-y-8 mx-auto">
                  <div className="text-6xl text-center">{product.name.split(" ").map((item, index)=>{return <p key={`${product.code}-${index}`}>{item} <br/> </p>})}</div>
                  <img src={`/shop/${product.image}`} alt="" className="rounded-full w-2/3"/>
                  <p className={`${cabinetGrotesk.className} text-center leading-8`}>Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.</p>
                  <GetProductButton product={product}/>
                </div>
              : <p className="text-7xl text-center">404 <br />Product Not Found</p>
            }
        </div>
    </section>
  )
}

export default ProductBriefModal