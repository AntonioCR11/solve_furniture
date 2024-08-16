interface Props{
    index : number
    question : string
    selected : boolean
    openFaq : (index : number) =>void
}
const FaqAccordion = ({index, question, selected, openFaq} : Props) => {
  return (
    <button onClick={()=>{openFaq(index)}} className="w-full border-y border-border py-16 space-y-8 text-start">
      <div className="flex justify-between items-center">
          <p className="text-2xl">{question}</p>
          <p className="text-5xl">{selected ? "-" : "+"}</p>
      </div>
      <p className={`${selected ? 'block' :'hidden'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum dui faucibus in ornare quam viverra orci sagittis. Nisi est sit amet facilisis magna. Odio tempor orci dapibus ultrices in iaculis. Sit amet cursus sit amet. Turpis egestas sed tempus urna et. Enim tortor at auctor urna nunc. Feugiat in fermentum posuere urna nec.</p>
    </button>
  )
}

export default FaqAccordion