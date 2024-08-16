import Link from "next/link"
import { cabinetGrotesk } from "../fonts"

const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full"
    >
      <div className="max-w-[70%] flex px-4 mx-auto py-32 space-x-12">
        <div className="w-1/4 space-y-12">
          <p className="text-4xl text-center">SOLVE</p>
          <ul className={`${cabinetGrotesk.className} text-center tracking-wider space-y-6`}>
            <li><Link href={`/home`}>HOME</Link></li>
            <li><Link href={`/rooms`}>ROOMS</Link></li>
            <li><Link href={`/journal`}>JOURNAL</Link></li>
            <li><Link href={`/contact`}>CONTACT</Link></li>
          </ul>
        </div>
        <div className="w-1/4 space-y-12">
          <p className="text-4xl text-center">SHOP</p>
          <ul className={`${cabinetGrotesk.className} text-center tracking-wider space-y-6`}>
            <li><Link href={`/home`}>HOME</Link></li>
            <li><Link href={`/rooms`}>ROOMS</Link></li>
            <li><Link href={`/lookbook`}>LOOKBOOK</Link></li>
            <li><Link href={`/faq`}>FAQ</Link></li>
          </ul>
        </div>
        <div className="w-1/4 space-y-12">
          <p className="text-4xl text-center">WEBFLOW</p>
          <ul className={`${cabinetGrotesk.className} text-center tracking-wider space-y-6`}>
            <li>STYLEGUIDE</li>
            <li>LICENSING</li>
            <li>CHANGELOG</li>
          </ul>
        </div>
        <div className="w-1/4 space-y-12">
          <p className="text-4xl text-center">SOCIAL</p>
          <ul className={`${cabinetGrotesk.className} text-center tracking-wider space-y-6`}>
            
            <li><a target="_blank" href={`https://www.instagram.com/anton_io11/`}>INSTAGRAM</a></li>
            <li><a target="_blank" href={`https://www.linkedin.com/in/antonio-christopher-6ba341159/`}>LINKEDIN</a></li>
            <li><a target="_blank" href={`https://github.com/AntonioCR11`}>GITHUB</a></li>
            <li><a target="_blank" href={`https://antonio-christopher-blog.vercel.app/`}>BLOG</a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center pb-20">
          <p className={`${cabinetGrotesk.className}`}>&copy; {new Date().getFullYear()} Website Implementation by Antonio Christopher. Made with NextJs</p>
          <p className={`${cabinetGrotesk.className}`}>&copy; 2022 Designed by Pawel Gola. Powered by Webflow</p>
        </div>
    </section>
  )
}

export default Footer