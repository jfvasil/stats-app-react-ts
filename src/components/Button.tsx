import { ReactEventHandler, ReactNode } from "react"

type ButtonProps = {
    onclick?: ReactEventHandler,
    children: ReactNode
    }

const Button = ({onclick, children}: ButtonProps) => {
  return (
    <button className="btn-primary" onClick={onclick}>{children}</button>
  )
}

export default Button