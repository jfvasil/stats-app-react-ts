import { ReactEventHandler, ReactNode } from "react"

type ButtonProps = {
    onclick?: ReactEventHandler,
    children: ReactNode
    }

const Button = ({onclick, children}: ButtonProps) => {
  return (
    <button className="btn btn-lg btn-primary w-1/2 text-xl" onClick={onclick}>{children}</button>
  )
}

export default Button