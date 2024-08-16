import { cabinetGrotesk } from "@/components/fonts"
import { Product } from "@/types/types";

interface Props{
    product : Product
}

const CartItem = ({product} : Props) => {
  let usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <div className={`flex space-x-6 ${cabinetGrotesk.className} h-max`}>
        <img src={`/shop/${product.image}`} alt="" className="rounded-full" width={70}/>
        <div className="flex flex-col">
            <p className="text-lg tracking-wider font-semibold">{product.name.toUpperCase()}</p>
            <p >{usd.format(product.price)} USD</p>
            <div className="flex flex-1 items-end">
                <button>REMOVE</button>
            </div>
        </div>
        <div className="flex flex-1 justify-end">
            <input type="text" className={`w-16 py-4 h-fit border border-dark rounded-full text-center ${cabinetGrotesk.className}`} placeholder="1"/>
        </div>
    </div>
  )
}

export default CartItem