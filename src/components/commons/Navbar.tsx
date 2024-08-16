'use client'
import { cabinetGrotesk } from "@/components/fonts"
import MenuToggle from "@/components/icons/MenuToggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import CartModal from "./CartModal"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = ()=>{
    if(!isMenuOpen) document.body.classList.add("h-dvh","overflow-hidden");
    else document.body.classList.remove("h-dvh","overflow-hidden");
    setIsMenuOpen(!isMenuOpen);
  }
  const openCart = ()=>{
    document.body.classList.add("h-dvh","overflow-hidden");
    document.getElementById('cartModal')?.classList.add('flex')
    document.getElementById('cartModal')?.classList.remove('hidden')
    setTimeout(()=>{
      document.getElementById('cart')?.classList.remove('translate-x-full')
    },200)
  }
  const handleMainNavigation = ()=>{
    if(isMenuOpen) {
      document.body.classList.remove("h-dvh","overflow-hidden");
      setIsMenuOpen(!isMenuOpen);
    } 
  }

  useEffect(()=>{
    const body = document.body;
    body.classList.remove("h-dvh", "overflow-hidden");
    // Cleanup function
    return () => {
      body.classList.remove("h-dvh", "overflow-hidden");
    };
  },[]);

  // toggling navbar color for specific route
  const routeMatcher = [
    "rooms/",
    "shop",
    "contact",
    "faq",
    "journal",
    "journal/",
  ]
  const routeMatcher2 = [
    "product/",
    "lookbook"
  ]
  const pathname = usePathname();
  const routeMatch = routeMatcher.some(route => pathname.includes(route));
  const routeMatch2 = routeMatcher2.some(route => pathname.includes(route));
  
  return (
    <>
      <div className={`${ routeMatch ? 'text-dark' : routeMatch2 ? 'text-dark absolute' : 'absolute text-white'} w-full top-0  z-10 transition-all ${isMenuOpen ? "bg-dark/80 h-dvh text-white" : ""}`}>
        <div className={`max-w-[95%] px-4 py-14 mx-auto flex items-center`}>
          <div className="w-1/3">
            <Link onClick={handleMainNavigation} href={`/lookbook`} className={`${cabinetGrotesk.className}`}>
              LOOKBOOK
            </Link>
          </div>
          <div className="w-1/3 flex justify-center text-2xl">
            <Link href={`/`}>
              SØLVE
            </Link>
          </div>
          <div className={`w-1/3 flex justify-end ${cabinetGrotesk.className} space-x-12`}>
            <Link onClick={handleMainNavigation} href={`/shop`}>
              SHOP
            </Link>
            <button onClick={openCart} className="flex flex-shrink space-x-2">
              <p>CART</p>
              <span className={`w-6 flex justify-center items-center aspect-square rounded-full ${!isMenuOpen && (routeMatch || routeMatch2) ? "bg-dark text-white" : "bg-white text-dark"} `}>0</span>
            </button>
            <button onClick={toggleMenu}>
              <MenuToggle color={(routeMatch || routeMatch2) && !isMenuOpen ? "#343339" : "white"} />
            </button>
          </div>
        </div>
        <div className={`w-full bg-background text-dark py-12 ${isMenuOpen ? "visible" : "hidden"}`}>
          <div className="container mx-auto px-4 flex space-x-32">
            <div className="space-y-12">
              <p className="text-4xl">SØLVE</p>
              <ul className={`${cabinetGrotesk.className} tracking-wider space-y-6`}>
                <li><Link onClick={toggleMenu} href={`/home`}>HOME</Link></li>
                <li><Link onClick={toggleMenu} href={`/rooms`}>ROOMS</Link></li>
                <li><Link onClick={toggleMenu} href={`/journal`}>JOURNAL</Link></li>
                <li><Link onClick={toggleMenu} href={`/contact`}>CONTACT</Link></li>
              </ul>
            </div>
            <div className="space-y-12">
              <p className="text-4xl">SHOP</p>
              <ul className={`${cabinetGrotesk.className} tracking-wider space-y-6`}>
                <li><Link onClick={toggleMenu} href={`/home`}>HOME</Link></li>
                <li><Link onClick={toggleMenu} href={`/rooms`}>ROOMS</Link></li>
                <li><Link onClick={toggleMenu} href={`/lookbook`}>LOOKBOOK</Link></li>
                <li><Link onClick={toggleMenu} href={`/faq`}>FAQ</Link></li>
              </ul>
            </div>
            <div className="space-y-12 grow">
              <p className="text-4xl">FEATURED</p>
              <div className="flex">
                <Link onClick={toggleMenu}  href={`/product/modernchair`} className="w-1/3 flex items-center space-x-8">
                  <img src="/frontpage/feat1.png" alt="" width={120} className="aspect-square rounded-full object-cover"/>
                  <article className={`${cabinetGrotesk.className}`}>
                    <p className="text-lg tracking-wider font-semibold">MODERN CHAIR</p>
                    <p>$ 249.00 USD</p>
                  </article>
                </Link>
                <Link onClick={toggleMenu} href={`/product/elegantlamp`} className="w-1/3 flex items-center space-x-8">
                  <img src="/frontpage/feat2.png" alt="" width={120} className="aspect-square rounded-full object-cover"/>
                  <article className={`${cabinetGrotesk.className}`}>
                    <p className="text-lg tracking-wider font-semibold">ELEGANT LAMP</p>
                    <p>$ 129.00 USD</p>
                  </article>
                </Link>
                <Link onClick={toggleMenu} href={`/product/blackchair`} className="w-1/3 flex items-center space-x-8">
                  <img src="/frontpage/feat3.png" alt="" width={120} className="aspect-square rounded-full object-cover object-bottom"/>
                  <article className={`${cabinetGrotesk.className}`}>
                    <p className="text-lg tracking-wider font-semibold">BLACK CHAIR</p>
                    <p>$ 199.00 USD</p>
                  </article>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cart modal */}
      <CartModal />
    </>
  )
}

export default Navbar