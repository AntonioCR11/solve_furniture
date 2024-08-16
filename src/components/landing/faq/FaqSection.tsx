'use client'
import FaqAccordion from "@/components/landing/faq/FaqAccordion"
import { cabinetGrotesk } from "@/components/fonts"
import { useState } from "react";
const FaqSection = () => {
    
  const questions = [
    "How can I change or cancel my order?",
    "Do i have to order online?",
    "How can i change dekuvery address?",
    "What is the return policy?",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleOpenFaq = (index : number)=>{
    setSelectedIndex(index);
  }
  return (
    <div className={`max-w-[60%] mx-auto px-4 flex flex-col pb-32 ${cabinetGrotesk.className}`}>
      {
        questions.map((item, index) =>{
          return (
            <FaqAccordion key={`faq${index}`} index={index} question={item} selected={index===selectedIndex} openFaq={handleOpenFaq}/>
          )
        })
      }
    </div>
  )
}

export default FaqSection