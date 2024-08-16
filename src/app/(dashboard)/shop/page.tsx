import AnimatedElement from "@/components/commons/AnimatedElement"
import Footer from "@/components/commons/Footer"
import Help from "@/components/commons/Help"
import { cabinetGrotesk } from "@/components/fonts"
import ProductCard from "@/components/landing/shop/ProductCard"
import { getProductsByType } from "@/types/products"
import Link from "next/link"

interface Props {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const Shop = ({ searchParams }: Props) => {
  const filter = searchParams.product ? searchParams.product : null;
  const products = getProductsByType(filter);
  
  return (
    <AnimatedElement
        animationOption={{
        initial : {opacity : 0},
        animate : {opacity : 1},
        transition : {duration : 1}
        }}
    >
      <div className="flex justify-center items-center pb-32">
        <p className={`text-[10rem]`}>SHOP</p>
      </div>

      <div className="border-y border-border flex items-center justify-center space-x-8 py-6">
        <Link href={`/shop`} className={`${cabinetGrotesk.className}`}>ALL</Link>
        <Link href={`?product=sofa`} className={`${cabinetGrotesk.className}`}>SOFA</Link>
        <Link href={`?product=lamp`} className={`${cabinetGrotesk.className}`}>LAMP</Link>
        <Link href={`?product=chair`} className={`${cabinetGrotesk.className}`}>CHAIR</Link>
        <Link href={`?product=table`} className={`${cabinetGrotesk.className}`}>TABLE</Link>
        <Link href={`?product=hanger`} className={`${cabinetGrotesk.className}`}>HANGER</Link>
      </div>

      <div className="container px-4 mx-auto py-32">
        <div className="grid grid-cols-3 gap-24">
          {
            products.length > 0
            ?
              products.map((item, index)=>{
                return (
                  <ProductCard key={item.code} product={item} isNew={item.isNew}/>
                );  
              })
            : <p>Product Not Found!</p>

          }
        </div>
      </div>

      <Help/>
      <Footer/>
    </AnimatedElement>
  )
}

export default Shop