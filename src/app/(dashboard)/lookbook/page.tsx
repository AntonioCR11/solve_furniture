import AnimatedElement from "@/components/commons/AnimatedElement";
import LookBookModalButton from "@/components/landing/lookbook/LookBookModalButton";
import ProductBriefModal from "@/components/landing/lookbook/ProductBriefModal";
import { getProducts, getProductsByCode } from "@/types/products"


interface Props {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const Lookbook = ({ searchParams }: Props) => {
  const products = getProducts();
  const filter = searchParams.product ? searchParams.product : null;
  let product;
  if(filter){
    product = getProductsByCode(filter);
  }
  return (
    <AnimatedElement
      animationOption={{
      initial : {opacity : 0},
      animate : {opacity : 1},
      transition : {duration : 1}
      }}
    >
      {/* product list */}
      <div className="h-dvh flex space-x-16 overflow-hidden">
        <div className="w-1/6 space-y-16 flex flex-col justify-center">
          <LookBookModalButton product={products[6]}/>
          <LookBookModalButton product={products[7]}/>
        </div>
        <div className="w-1/6 space-y-16 flex flex-col justify-center">
          <LookBookModalButton product={products[8]}/>
          <LookBookModalButton product={products[2]}/>
          <LookBookModalButton product={products[5]}/>
        </div>
        <div className="w-1/6 space-y-16 flex flex-col justify-center">
          <LookBookModalButton product={products[1]}/>
          <LookBookModalButton product={products[9]}/>
        </div>
        <div className="w-1/6 space-y-16 flex flex-col justify-center">
          <LookBookModalButton product={products[10]}/>
          <LookBookModalButton product={products[0]}/>
          <LookBookModalButton product={products[11]}/>
        </div>
        <div className="w-1/6 space-y-16 flex flex-col justify-center">
          <LookBookModalButton product={products[12]}/>
          <LookBookModalButton product={products[13]}/>
        </div>
        <div className="w-1/6 space-y-16 flex flex-col justify-center">
          <LookBookModalButton product={products[14]}/>
          <LookBookModalButton product={products[15]}/>
          <LookBookModalButton product={products[0]}/>
        </div>
      </div>
      {/* product modal */}
      <ProductBriefModal product={product}/>
    </AnimatedElement>
  )
}

export default Lookbook