'use client'
import { cabinetGrotesk } from "@/components/fonts";
import { motion } from "framer-motion"
import { useRouter } from "next/navigation";
const OnboardingContent = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center z-50">
      <motion.p 
        initial={{ opacity: 0, scale: 1.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
        className={`text-[18rem] text-[#2c3039] leading-none`}
      >
        SØLVE
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: .5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay : .4 , duration: .4 }}
      >
        <button
          className={`text-dark aspect-square border border-dark rounded-full p-4 ${cabinetGrotesk.className} transition-all hover:bg-dark hover:text-white hover:scale-95`}
          onClick={()=>{
            document.getElementById('onboarding')?.classList.add('scale-150');
            document.getElementById('onboarding')?.classList.add('opacity-0');
            setTimeout(()=>{
              // document.getElementById('onboarding')?.remove();
              // document.getElementById('landing')?.classList.remove('h-dvh');
              // document.getElementById('landing')?.classList.remove('overflow-hidden');
              router.push('/home');
            },500)
          }}
        >
          ENTER
        </button>
      </motion.div>
    </div>
  );
};

export default OnboardingContent;
