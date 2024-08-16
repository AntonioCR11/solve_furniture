import { cabinetGrotesk } from "@/components/fonts";
import styles from "./home.module.css";
import FloatingImageBubble from "@/components/landing/onboarding/FloatingImageBubble";
import Arrow from "@/components/icons/Arrow";
import AnimatedElement from "@/components/commons/AnimatedElement";
import Link from "next/link";
import Footer from "@/components/commons/Footer";
import { getProducts } from "@/types/products";
import ProductCard from "@/components/landing/shop/ProductCard";
import Store from "@/components/commons/Store";
import NotificationHeader from "@/components/commons/NotificationHeader";
const Home = () => {
  const products = getProducts();
  
  return (
    <AnimatedElement
      animationOption={{
        initial : {opacity : 0},
        animate : {opacity : 1},
        transition : {duration : 1}
      }}
    >

      {/* Banner1 */}
      <section
        id="banner1"
        className={`w-full h-dvh ${styles.bannerBackground} flex flex-col justify-center items-center space-y-10`}
      >
        <article>
          <AnimatedElement
            animationOption={{
              initial : {opacity : 0, transform : "translateY(-20px)"},
              whileInView : {opacity : 1, transform : "translateY(0px)"},
              transition : {duration : 1}
            }}
          >
            <p className="text-white text-center text-[12rem] leading-none">DESIGN</p>
          </AnimatedElement>
          <AnimatedElement
            animationOption={{
              initial : {opacity : 0, transform : "translateY(20px)"},
              whileInView : {opacity : 1, transform : "translateY(0px)"},
              transition : {duration : 1}
            }}
          >
            <p className="text-white text-center text-[12rem] leading-none">FURNITURE</p>
          </AnimatedElement>
        </article>
        <AnimatedElement
          animationOption={{
            initial : {opacity : 0},
            whileInView : {opacity : 1},
            transition : {delay : 1, duration : 1}
          }}
        >
          <Link href={`/shop`} className={`border border-white text-sm text-white tracking-wider px-6 py-4 rounded-full ${cabinetGrotesk.className} transition-all hover:bg-white hover:text-dark hover:scale-110`}>SHOP NOW</Link>
        </AnimatedElement>
      </section>

      {/* Featured */}
      <section
        id="featured"
        className="w-full border-b border-border"
      >
        <div className="max-w-[80%] px-4 mx-auto py-32 space-y-24">
          <p className="text-8xl text-center">Featured</p>
          <div className="flex space-x-20">
            {
              products.map((item, index)=>{
                return (
                  index < 3 
                  ? 
                    <AnimatedElement
                      animationOption={{
                        initial : {opacity : 0, transform : "translateY(60px)"},
                        whileInView : {opacity : 1,  transform : "translateY(0px)"},
                        transition : { delay : .2, duration : .5*item.id}
                      }}
                      key={item.code}
                    >
                      <ProductCard product={item} isNew={item.isNew}/>
                    </AnimatedElement>
                  : null
                );  
              })
            }
          </div>
        </div>
      </section>

      {/* Article */}
      <section
        id="article"
        className="w-full"
      >
        <div className="max-w-[70%] flex px-4 mx-auto py-32">
          <div className="w-1/2">
            <p className="text-8xl leading-none">Lorem <br />Ipsum</p>
          </div>
          <div className="w-1/2">
            <p className={`${cabinetGrotesk.className} leading-8 mb-24`}>Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam. Velit egestas dui id ornare arcu odio ut. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Auctor eu augue ut lectus arcu bibendum at varius. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. <br /><br /> Aenean euismod elementum nisi quis eleifend. Vitae purus faucibus ornare suspendisse sed nisi lacus. Mattis enim ut tellus elementum sagittis. Lectus quam id leo in vitae turpis. Lobortis scelerisque fermentum dui faucibus in ornare quam. <br /><br /> Proin fermentum leo vel orci porta non pulvinar. Diam phasellus vestibulum lorem sed risus ultricies. Quisque egestas diam in arcu cursus. Morbi tincidunt ornare massa eget egestas. Scelerisque eu ultrices vitae auctor eu.</p>
            <Link href={`/shop`} className={`border border-dark text-sm text-dark tracking-wider px-6 py-4 rounded-full ${cabinetGrotesk.className}`}>SHOP NOW</Link>
          </div>
        </div>
      </section>

      {/* Banner2 */}
      <section
        id="banner2"
        className={`relative w-full h-dvh overflow-hidden ${styles.bannerBackground2} flex flex-col justify-center items-center`}
      >
        <FloatingImageBubble src="1" imageSize={220} fadeDuration={1} customClass="left-0 bottom-28 hover:w-[300px]" floatingPace={3}/>
        <FloatingImageBubble src="2" imageSize={220} fadeDuration={1.2} customClass="left-64 -bottom-20 hover:w-[300px]" floatingPace={2}/>
        <FloatingImageBubble src="9" imageSize={220} fadeDuration={1.4} customClass="right-0 bottom-48 hover:w-[300px]" floatingPace={2}/>
        <FloatingImageBubble src="4" imageSize={220} fadeDuration={1.6} customClass="right-96 top-24 hover:w-[300px]" floatingPace={4}/>
        <FloatingImageBubble src="8" imageSize={220} fadeDuration={1.8} customClass="left-[22rem] top-16 hover:w-[260px]" floatingPace={2}/>
        <FloatingImageBubble src="7" imageSize={220} fadeDuration={2} customClass="left-[36rem] -top-20 hover:w-[240px]" floatingPace={3}/>
              
        <AnimatedElement
          animationOption={{
            initial : {opacity : 0, transform : "translateX(-60px)"},
            whileInView : {opacity : 1, transform : "translateX(0px)"},
            transition : { delay : .2, duration : .5 }
          }}
        >
          <p className={`text-[16rem] text-white leading-none z-50`}>SØLVE</p>
        </AnimatedElement>
      </section>

      {/* Rooms */}
      <section
        id="rooms"
        className="w-full"
      >
        <div className="max-w-[80%] px-4 mx-auto py-32 space-y-24">
          <article className="flex flex-col justify-center items-center space-y-8">
            <p className="text-9xl text-center">Rooms</p>
            <Link href={`/rooms`} className={`${cabinetGrotesk.className} w-fit flex items-center space-x-2 font-semibold`}>
              <p className="tracking-widest">SEE ALL</p>
              <Arrow/>
            </Link>
          </article>
          <div className="flex space-x-20">
            <Link href={`/rooms/oslo`} className={`w-1/3 aspect-square flex flex-col justify-center items-center space-y-8 ${styles.roomBackground1} rounded-full`}>
              <p className="text-5xl text-white">OSLO</p>
            </Link> 
            <Link href={`/rooms/newyork`} className={`w-1/3 aspect-square flex flex-col justify-center items-center space-y-8 ${styles.roomBackground2} rounded-full`}>
              <p className="text-5xl text-white text-center">NEW<br />YORK</p>
            </Link>
            <Link href={`/rooms/lisbon`} className={`w-1/3 aspect-square flex flex-col justify-center items-center space-y-8 ${styles.roomBackground3} rounded-full`}>
              <p className="text-5xl text-white">LISBON</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Stores */}
      <Store/>

      {/* footer */}
      <Footer/>
    </AnimatedElement>
  );
};

export default Home;
