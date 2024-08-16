import { getProducts } from "@/types/products"
import { cabinetGrotesk } from "../fonts"
import CartItem from "../landing/cart/CartItem"
import CloseModalButton from "./CloseModalButton"

const CartModal = () => {
  const products = getProducts();
  let usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <section id="cartModal" className={`fixed top-0 w-full h-dvh bg-dark/80 transition-all z-50 hidden overflow-hidden`}>
      <div className="flex-1"></div>
      <div id="cart" className={`w-[500px] bg-background h-full transition-all flex flex-col translate-x-full`}>
        <div className="flex justify-between px-8 py-8">
            <p className="text-2xl">Cart</p>
            <CloseModalButton modalId="cartModal" modalCanvasId="cart" />
            {/* <button onClick={closeModal} className={cabinetGrotesk.className}>CLOSE</button> */}
        </div>
        <div className="px-8">
          <div className="overflow-auto" style={{height : "calc(100dvh - 256px)"}}>
            <CartItem product={products[0]}/>
            <div className="border border-border my-6"></div>
            <CartItem product={products[1]}/>
            <div className="border border-border my-6"></div>
            <CartItem product={products[2]}/>
            <div className="border border-border my-6"></div>
            <CartItem product={products[3]}/>
          </div>
        </div>
        <div className={`flex flex-col border-t border-bordedr h-40 p-8 ${cabinetGrotesk.className}`}>
          <div className="flex justify-between">
              <p className="text-xl font-semibold">SUBTOTAL</p>
              <p className="text-xl font-semibold">{usd.format(149)} USD</p>
          </div>
          <div className="flex-1 flex items-end">
            <button className="w-full py-4 bg-dark text-white rounded-full">CONTINUE TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartModal