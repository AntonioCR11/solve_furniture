import { cabinetGrotesk } from "../fonts";
import Arrow from "../icons/Arrow";

const Store = () => {
  return (
    <section id="stores" className="w-full border-y border-border">
      <div className="max-w-[80%] px-4 mx-auto py-32 space-y-20">
        <p className="text-7xl">Our Stores</p>
        <div className="flex">
          <div className="flex items-center w-1/2 space-x-12">
            <div className="w-1/3">
              <img
                src="/frontpage/store1.png"
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="grow space-y-6">
              <p className="text-4xl">Hamburg</p>
              <article className={`${cabinetGrotesk.className}`}>
                <p>Sølve Store,</p>
                <p>22765 Hamburg</p>
              </article>
              <button
                className={`${cabinetGrotesk.className} w-fit flex items-center space-x-2 font-semibold`}
              >
                <p className="tracking-widest">GET DIRECTIONS</p>
                <Arrow />
              </button>
            </div>
          </div>
          <div className="flex items-center w-1/2 space-x-12">
            <div className="w-1/3">
              <img
                src="/frontpage/store2.png"
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="grow space-y-6">
              <p className="text-4xl">Lisbon</p>
              <article className={`${cabinetGrotesk.className}`}>
                <p>Sølve Store,</p>
                <p>1049 Lisbon</p>
              </article>
              <button
                className={`${cabinetGrotesk.className} w-fit flex items-center space-x-2 font-semibold`}
              >
                <p className="tracking-widest">GET DIRECTIONS</p>
                <Arrow />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
