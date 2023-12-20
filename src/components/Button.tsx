import { ReactEventHandler, ReactNode } from "react"

type ButtonProps = {
    onclick?: ReactEventHandler,
    children: ReactNode,
    disable?:boolean
    }

const Button = ({onclick, children, disable}: ButtonProps) => {
  return (
    <button className={`btn btn-lg btn-primary w-1/2 text-xl ${disable && 'btn-outline'}`}
    onClick={onclick}
    disabled={disable}>
      {children}
    </button>
)
}

export default Button