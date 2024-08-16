import { cabinetGrotesk } from "@/components/fonts"
import CloseModalButton from "@/components/commons/CloseModalButton"

const ServiceInfoModal = () => {
  return (
    <section id="serviceInfoModal" className="fixed w-full h-dvh bg-dark/80 transition-all z-50 hidden overflow-hidden">
        <div className="w-1/2">
        </div>
        <div id="serviceInformation" className="w-1/2 bg-background flex flex-col px-32 py-16 space-y-16 h-full overflow-auto transition-all translate-x-full">
            {/* <CloseServiceButton/> */}
            <CloseModalButton modalId="serviceInfoModal" modalCanvasId="serviceInformation"/>
            <article className="w-full space-y-6">
                <p className="text-4xl">Details</p>
                <p className={`${cabinetGrotesk.className} leading-8 `}>Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam. Velit egestas dui id ornare arcu odio ut. Felis donec et odio pellentesque diam volutpat commodo sed egestas.</p>
                <ul className={cabinetGrotesk.className}>
                    <li className="list-disc list-inside">Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li className="list-disc list-inside">Perspiciatis iure, laboriosam!</li>
                    <li className="list-disc list-inside">Accusantium eius quae itaque beatae sed, et sit!</li>
                </ul>
            </article>
            <div className="border border-border"></div>
            <article className="w-full space-y-6">
                <p className="text-4xl">Delivery</p>
                <p className={`${cabinetGrotesk.className} leading-8 `}>Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam. </p>
            </article>
            <div className="border border-border"></div>
            <article className="w-full space-y-6">
                <p className="text-4xl">Returns</p>
                <p className={`${cabinetGrotesk.className} leading-8 `}>Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget.</p>
            </article>
        </div>
    </section>
  )
}

export default ServiceInfoModal