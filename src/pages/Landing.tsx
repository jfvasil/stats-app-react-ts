import { ReactNode } from "react"
import 'tailwindcss/tailwind.css'

type LandingProps = {
    title?: string,
    children: ReactNode
}


const Landing = ({title = 'Welcome to the Stats App!', children}: LandingProps) => {
  return (
    <>
    <h1 className="text-3xl font-serif">{title}</h1>
    <p className="bg-black mr-4">{children}</p>
    </>
  )
}

export default Landing