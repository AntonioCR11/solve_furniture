import AnimatedElement from "@/components/commons/AnimatedElement"
import Navbar from "@/components/commons/Navbar"
import NotificationHeader from "@/components/commons/NotificationHeader"
interface Props{
    children : React.ReactNode
}
const layout = ({children} : Props) => {
  return (
    <main className="bg-background">
      <NotificationHeader/>
      {/* navbar */}
      <AnimatedElement
        animationOption={{
          initial : {opacity : 0},
          whileInView : {opacity : 1},
          transition : {delay : 1, duration : 1}
        }}
        customClass="relative"
      >
        <Navbar/>
      </AnimatedElement>
      {/* contents */}
      {children}
    </main>
  )
}

export default layout