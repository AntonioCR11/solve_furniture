"use client";
import { useEffect } from "react";
import { cabinetGrotesk } from "../fonts";

const NotificationHeader = () => {
  const handleCloseNotification = () => {
    document.getElementById("header")?.classList.add("fixed","top-0","-translate-y-full");
    setTimeout(()=>{
        document.getElementById("header")?.remove();
    },500)
  };
  useEffect(()=>{
    setTimeout(()=>{
        document.getElementById("header")?.classList.remove("top-0","-translate-y-full");
        setTimeout(()=>{
            document.getElementById("header")?.classList.remove("fixed");
        },500)
    },1500)
  },[])
  return (
    <section
      id="header"
      className={`w-full bg-black flex justify-between items-center text-white p-4 transition-all duration-500 fixed top-0 -translate-y-full z-50`}
    >
      <p className={`${cabinetGrotesk.className}`}>
        This site is a work in progress, stay tuned for new developments!
      </p>
      <button onClick={handleCloseNotification} className="text-2xl">
        x
      </button>
    </section>
  );
};

export default NotificationHeader;
