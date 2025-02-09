import './Button.css'
interface ButtonProps {
  name: string
  onClickHandle: () => void
}

export const Button = ({ name, onClickHandle }: ButtonProps) => {
  return (
    <button className="arrow_button" onClick={onClickHandle}>
      {name}
    </button>
  )
}
