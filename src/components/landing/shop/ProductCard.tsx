import { cabinetGrotesk } from "@/components/fonts"
import { Product } from "@/types/types"
import Link from "next/link"

interface Props{
  product : Product
  isNew ? : boolean
}

const ProductCard = ({product, isNew = false} : Props) => {
  let usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <Link href={`/product/${product.code}`} className="flex flex-col justify-center items-center space-y-8">
      {
        isNew 
        ?
          <div className="relative">
            <img src={`/shop/${product.image}`} alt="" className="rounded-full"/>
            <div className="absolute flex justify-center items-center bg-dark text-white aspect-square top-6 right-6 p-6 rounded-full">
              NEW
            </div>
          </div>
        :
          <img src={`/shop/${product.image}`} alt="" className="rounded-full"/>
      }
      <article className={`${cabinetGrotesk.className}`}>
        <p className="text-xl tracking-wider font-semibold">{product.name.toUpperCase()}</p>
        <p className="text-lg text-center">{usd.format(product.price)} USD</p>
      </article>
    </Link>
  )
}

export default ProductCard