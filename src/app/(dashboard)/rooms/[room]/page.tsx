import AnimatedElement from "@/components/commons/AnimatedElement";
import Footer from "@/components/commons/Footer";
import Help from "@/components/commons/Help";
import { cabinetGrotesk } from "@/components/fonts";
import Arrow from "@/components/icons/Arrow";
import NextRoomSection from "@/components/landing/rooms/NextRoomSection";
import { getRoomById, getRooms } from "@/types/rooms";
import Link from "next/link";

const Room = ({ params }: { params: { room : string }}) => {
  const rooms = getRooms();
  const room = rooms.find((item)=> item.code === params.room); 
  if(!room){
    throw new Error("404 | ROOM NOT FOUND");
  }
  const nextRoom = getRoomById(room.id < rooms.length ? room.id+1 : 1)!;
  return (
    <AnimatedElement
      animationOption={{
        initial : {opacity : 0},
        animate : {opacity : 1},
        transition : {duration : 1}
      }}
    >
      <section className="flex max-w-[80%] mx-auto px-4 pb-32">
        <div className="w-1/3 space-y-4">
          <p className="text-9xl leading-none">{room.name}</p>
          <p className={`${cabinetGrotesk.className} leading-8`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu mi bibendum neque.</p>
        </div>
        <div className="w-2/3 flex justify-end items-end">
          <Link href={`/rooms`} className={`${cabinetGrotesk.className} w-fit flex items-center space-x-2 font-semibold`}>
            <p className="tracking-widest">ROOMS</p>
            <Arrow/>
          </Link>
        </div>
      </section>
      {/* image */}
      <img src={`/rooms/${room.code}.jpg`} alt="" />
      {/* Article */}
      <section
        id="article"
        className="w-full"
      >
        <div className="max-w-[70%] flex px-4 mx-auto py-32">
          <div className="w-1/2">
            <p className="text-8xl leading-none">Norwegian<br />Interior<br />Design</p>
          </div>
          <div className="w-1/2 space-y-24">
            <p className={`${cabinetGrotesk.className} leading-8`}>Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam. Velit egestas dui id ornare arcu odio ut. Felis donec et odio pellentesque diam volutpat commodo sed egestas. Auctor eu augue ut lectus arcu bibendum at varius. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. <br /><br /> Aenean euismod elementum nisi quis eleifend. Vitae purus faucibus ornare suspendisse sed nisi lacus. Mattis enim ut tellus elementum sagittis. Lectus quam id leo in vitae turpis. Lobortis scelerisque fermentum dui faucibus in ornare quam. <br /><br /> Proin fermentum leo vel orci porta non pulvinar. Diam phasellus vestibulum lorem sed risus ultricies. Quisque egestas diam in arcu cursus. Morbi tincidunt ornare massa eget egestas. Scelerisque eu ultrices vitae auctor eu.</p>
          </div>
        </div>
      </section>

      {/* Next Room Button */}
      <NextRoomSection nextRoom={nextRoom}/>
      
      <Help/>
      <Footer/>
    </AnimatedElement>
  )
}

export default Room