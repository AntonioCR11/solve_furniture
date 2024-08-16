interface Props{
  color ? : string
}
const MenuToggle = ({color} : Props) => {
  return (
    <svg width="56" height="15" viewBox="0 0 56 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="0.5" width="50" height="1" fill={color}/>
    <rect x="16" y="13.5" width="40" height="1" fill={color}/>
    </svg>
  )
}

export default MenuToggle