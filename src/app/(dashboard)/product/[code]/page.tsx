import AnimatedElement from "@/components/commons/AnimatedElement";
import Footer from "@/components/commons/Footer";
import { cabinetGrotesk } from "@/components/fonts";
import ServiceButtons from "@/components/landing/products/ServiceButtons";
import ServiceInfoModal from "@/components/landing/products/ServiceInfoModal";
import ProductCard from "@/components/landing/shop/ProductCard";
import { getProducts, getProductsByCode } from "@/types/products";


const Product = ({ params }: { params: { code : string }}) => {
  const products = getProducts();
  const product = getProductsByCode(params.code);
  if(!product){
    throw new Error("404 | PRODUCT NOT FOUND");
  }
  const idsToFetch = getRandomNumbers(product?.id);
  const fetchedProducts = products.filter(product => idsToFetch.includes(product.id));
  let usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <AnimatedElement
      animationOption={{
        initial : {opacity : 0},
        animate : {opacity : 1},
        transition : {duration : 1}
      }}
    >
      <ServiceInfoModal/>
      <section id="product" className="h-dvh flex overflow-hidden">
        <div className="w-1/2 flex justify-center items-center">
          <img src={`/shop/${product.image}`} alt="" className="w-full "/>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center px-32 space-y-12">
          <article className="w-full space-y-8">
            <div className="text-8xl">{product.name.split(" ").map((item, index)=>{return <p key={`${product.code}-${index}`}>{item} <br/> </p>})}</div>
            <article className="space-y-4">
              <p className={`text-lg ${cabinetGrotesk.className}`}>{usd.format(product.price)} USD</p>
              <p className={`text-lg ${cabinetGrotesk.className} leading-8`}>Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.</p>
            </article>
          </article>
          <div className="w-full flex space-x-4">
            <input type="text" className={`w-24 py-4 border border-dark rounded-full text-center ${cabinetGrotesk.className}`} placeholder="1"/>
            <button className={`py-4 px-8 bg-dark text-white rounded-full ${cabinetGrotesk.className}`}>ADD TO CART</button>
          </div>
          <ServiceButtons/>
        </div>
      </section>

      
      {/* description */}
      <section
        id="description"
        className="w-full"
      >
        <div className="max-w-[70%] flex px-4 mx-auto py-32">
          <div className="w-1/2">
            <p className="text-2xl leading-none">DESCRIPTION</p>
          </div>
          <div className="w-1/2">
            <p className={`${cabinetGrotesk.className} leading-8`}>Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam. Velit egestas dui id ornare arcu odio ut. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Auctor eu augue ut lectus arcu bibendum at varius. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Proin fermentum leo vel orci porta non pulvinar Diam phasellus vestibulum Quisque egestas diam in arcu cursus</p>
            <br />
            <ul className={cabinetGrotesk.className}>
              <li className="list-disc list-inside">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li className="list-disc list-inside">Perspiciatis iure, laboriosam!</li>
              <li className="list-disc list-inside">Accusantium eius quae itaque beatae sed, et sit!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* related */}
      <section
        id="related"
        className="w-full border-b border-border"
      >
        <div className="max-w-[80%] px-4 mx-auto py-32 space-y-24">
          <p className="text-8xl text-center">Related</p>
          <div className="flex space-x-20">
            {
              fetchedProducts.map((item, index)=>{
                return (
                  <ProductCard key={item.code} product={item} isNew={item.isNew}/>
                );  
              })
            }
          </div>
        </div>
      </section>

      <Footer/>
    </AnimatedElement>
  )
}

export default Product

function getRandomNumbers(excludeNumber : number) {
  const numbers : number[] = [];
  while (numbers.length < 3) {
      const randomNumber = Math.floor(Math.random() * 16) + 1;
      if (randomNumber !== excludeNumber && !numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
      }
  }
  return numbers;
}