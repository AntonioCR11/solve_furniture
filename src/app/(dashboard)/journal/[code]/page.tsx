import AnimatedElement from "@/components/commons/AnimatedElement"
import Footer from "@/components/commons/Footer"
import Help from "@/components/commons/Help"
import { cabinetGrotesk } from "@/components/fonts"
import JournalSection from "@/components/landing/journal/JournalSection"
import { getJournalByCode, getJournalById, getJournals } from "@/types/journal"



const JournalDetail = ({ params }: { params: { code : string }}) => {
  const journals = getJournals();
  const journal = getJournalByCode(params.code);
  
  if(!journal){
    throw new Error("404 | ROOM NOT FOUND");
  }

  const nextJournal = getJournalById(journal.id < journals.length ? journal.id+1 : 1)!;

  return (
    <AnimatedElement
      animationOption={{
      initial : {opacity : 0},
      animate : {opacity : 1},
      transition : {duration : 1}
      }}
    >
      <section className="container mx-auto px-4 mb-16 ">
        <div className="border-y border-border py-8 flex justify-between">
          <div className="w-1/4 flex flex-col justify-center items-center">
              <p className="text-2xl">CATEGORY</p>
              <p className={`${cabinetGrotesk.className}`}>{journal.category.toUpperCase()}</p>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center">
              <p className="text-2xl">DATE</p>
              <p className={`${cabinetGrotesk.className}`}>{journal.date.toUpperCase()}</p>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center">
              <p className="text-2xl">READ</p>
              <p className={`${cabinetGrotesk.className}`}>{journal.read}</p>
          </div>
          <div className="w-1/4 flex flex-col justify-center items-center">
              <p className="text-2xl">AUTHOR</p>
              <p className={`${cabinetGrotesk.className}`}>{journal.author.toUpperCase()}</p>
          </div>
        </div>
      </section>

      <p className="text-[11rem] px-[12.5%] text-center leading-none translate-y-16">{journal.name.toUpperCase()}</p>
      <img src={`/journal/${journal.image}`} alt="" className="w-full mb-32" />

      <article className="max-w-[55%] mx-auto px-4 mb-16">
        <div className="px-[12.5%] space-y-16">
          <p className={`${cabinetGrotesk.className} text-xl leading-10`}>Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Netus et malesuada fames ac turpis egestas integer eget. A diam maecenas sed enim ut sem viverra aliquet eget. Vel fringilla est ullamcorper eget nulla facilisi etiam. Velit egestas dui id ornare arcu odio ut. Felis donec et odio pellentesque diam volutpat commodo sed egestas.</p>
          <p className={`${cabinetGrotesk.className}`}>Turpis egestas integer eget aliquet nibh praesent tristique. Et malesuada fames ac turpis. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Purus in massa tempor nec feugiat. <br /><br /> Nec feugiat in fermentum posuere. Lacus viverra vitae congue eu consequat ac. Tellus molestie nunc non blandit massa. Pharetra pharetra massa massa ultricies mi quis. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Congue nisi vitae suscipit tellus mauris a. Mauris augue neque gravida in fermentum et sollicitudin ac orci. <br /><br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa sed elementum tempus egestas sed sed risus. Elit eget gravida cum sociis. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Vulputate eu scelerisque felis imperdiet proin. Lobortis elementum nibh tellus molestie. Eget aliquet nibh praesent tristique magna sit amet purus. Risus nullam eget felis eget nunc lobortis. Dolor sit amet consectetur adipiscing elit duis. Eros in cursus turpis massa tincidunt dui ut ornare. Morbi tristique senectus et netus et. Urna duis convallis convallis tellus id. Magna sit amet purus gravida quis blandit turpis cursus. Eu scelerisque felis imperdiet proin fermentum leo. Sed id semper risus in hendrerit gravida rutrum. Integer quis auctor elit sed vulputate mi. Aliquam etiam erat velit scelerisque in dictum non consectetur. Sagittis aliquam malesuada bibendum arcu vitae.</p>
          <article className="space-y-6">
            <p className={`${cabinetGrotesk.className} text-2xl font-semibold`}>LOREM IPSUM</p>
            <p className={`${cabinetGrotesk.className}`}>Turpis egestas integer eget aliquet nibh praesent tristique. Et malesuada fames ac turpis. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Purus in massa tempor nec feugiat. <br /><br /> Nec feugiat in fermentum posuere. Lacus viverra vitae congue eu consequat ac. Tellus molestie nunc non blandit massa. Pharetra pharetra massa massa ultricies mi quis. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Congue nisi vitae suscipit tellus mauris a. Mauris augue neque gravida in fermentum et sollicitudin ac orci.</p>
          </article>
        </div>
      </article>

      <div className="space-y-16 mb-32">
        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="border border-dark w-0 h-16 mx-auto"></div>
          <p className="text-8xl px-[12.5%] text-center">Have no fear of perfection <br />- you’ll never reach it.</p>
          <div className="border border-dark w-0 h-16 mx-auto"></div>
        </div>
        <article className="max-w-[55%] mx-auto px-4 mb-16">
          <div className="px-[12.5%] space-y-6">
            <p className={`${cabinetGrotesk.className} text-2xl font-semibold`}>LOREM IPSUM</p>
            <p className={`${cabinetGrotesk.className}`}>Turpis egestas integer eget aliquet nibh praesent tristique. Et malesuada fames ac turpis. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Dictum fusce ut placerat orci nulla pellentesque dignissim. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Purus in massa tempor nec feugiat. <br /><br /> Nec feugiat in fermentum posuere. Lacus viverra vitae congue eu consequat ac. Tellus molestie nunc non blandit massa. Pharetra pharetra massa massa ultricies mi quis. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Congue nisi vitae suscipit tellus mauris a. Mauris augue neque gravida in fermentum et sollicitudin ac orci.</p>
          </div>
        </article>
      </div>

      <div className="max-w-[60%] mx-auto px-4 pb-32">
        <JournalSection journal={nextJournal} withDivider={false}/>
      </div>

      <Help/>
      <Footer/>
    </AnimatedElement>
  )
}

export default JournalDetail