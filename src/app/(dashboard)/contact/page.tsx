import AnimatedElement from "@/components/commons/AnimatedElement"
import Footer from "@/components/commons/Footer"
import Store from "@/components/commons/Store"
import { cabinetGrotesk } from "@/components/fonts"
import Link from "next/link"

const Contact = () => {
  return (
    <AnimatedElement
      animationOption={{
      initial : {opacity : 0},
      animate : {opacity : 1},
      transition : {duration : 1}
      }}
    >
      <div className="flex justify-center items-center pb-32">
        <p className={`text-[10rem]`}>CONTACT</p>
      </div>
      <div className={`w-full bg-background text-dark pb-32`}>
        <div className="max-w-[80%] mx-auto px-4 flex space-x-32">
          <div className="space-y-12">
            <p className="text-4xl">SOCIAL</p>
            <ul className={`${cabinetGrotesk.className} tracking-wider space-y-6`}>
              <li><Link href={`/home`}>INSTAGRAM</Link></li>
              <li><Link href={`/rooms`}>LINKEDIN</Link></li>
              <li><Link href={`/journal`}>GITHUB</Link></li>
              <li><Link href={`/contact`}>BLOG</Link></li>
            </ul>
          </div>
          <div className="space-y-12">
            <p className="text-4xl">CONTACT</p>
            <ul className={`${cabinetGrotesk.className} tracking-wider space-y-6`}>
              <li><Link href={`/home`}>achristopher989@gmail.com</Link></li>
              <li><Link href={`/rooms`}>(+62) 857-5511-5331</Link></li>
            </ul>
          </div>
          <div className="space-y-12 grow">
            <form action="" className={`${cabinetGrotesk.className} space-y-12`}>
              <div className="flex flex-col space-y-4">
                  <label>NAME</label>
                  <input type="text" className="border border-dark py-4 px-6" placeholder="Name" />
              </div>
              <div className="flex flex-col space-y-4">
                  <label>EMAIL</label>
                  <input type="text" className="border border-dark py-4 px-6" placeholder="Email Address" />
              </div>
              <div className="flex flex-col space-y-4">
                  <label>MESSAGE</label>
                  <textarea className="border border-dark py-4 px-6" placeholder="Your Message" rows={10}/>
              </div>
              <button className={`py-4 px-8 bg-dark text-white rounded-full  ${cabinetGrotesk.className}`}>SUBMIT MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
      <Store/>
      <Footer/>
    </AnimatedElement>
  )
}

export default Contact