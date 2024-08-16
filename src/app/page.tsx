
import FloatingImageBubble from "@/components/landing/onboarding/FloatingImageBubble";
import OnboardingContent from "@/components/landing/onboarding/OnboardingContent";
const LandingPage = () => {
  return (
    <main id="landing" className="h-dvh overflow-hidden">
      <div id="onboarding" className="relative flex flex-col justify-center items-center h-dvh overflow-hidden bg-background transition-all duration-500 ease-in-out">
          {/* images */}
          <FloatingImageBubble src="1" imageSize={220} fadeDuration={1} customClass="left-0 bottom-28 hover:w-[300px]" floatingPace={3}/>
          <FloatingImageBubble src="2" imageSize={220} fadeDuration={1.2} customClass="left-96 -bottom-20 hover:w-[300px]" floatingPace={2}/>
          <FloatingImageBubble src="3" imageSize={220} fadeDuration={1.4} customClass="right-0 bottom-28 hover:w-[300px]" floatingPace={2}/>
          <FloatingImageBubble src="4" imageSize={220} fadeDuration={1.6} customClass="right-80 top-48 hover:w-[300px]" floatingPace={4}/>
          <FloatingImageBubble src="5" imageSize={140} fadeDuration={1.8} customClass="right-10 top-10 hover:w-[220px]" floatingPace={3}/>
          <FloatingImageBubble src="6" imageSize={220} fadeDuration={2} customClass="left-[22rem] top-16 hover:w-[260px]" floatingPace={2}/>
          <FloatingImageBubble src="7" imageSize={220} fadeDuration={2.2} customClass="left-[36rem] -top-20 hover:w-[240px]" floatingPace={3}/>
          {/* text & button */}
          <OnboardingContent/>
          
      </div>
    </main>
  );
};

export default LandingPage;
