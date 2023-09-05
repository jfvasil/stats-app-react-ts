import { ReactEventHandler } from "react"

type ButtonProps = {
    onclick?: ReactEventHandler,
    children?: ReactNode
    }

const Button = ({onclick, children}: ButtonProps) => {
  return (
    <button className="bg-green-400 rounded" onClick={onclick}>{children}</button>
  )
}

export default Button