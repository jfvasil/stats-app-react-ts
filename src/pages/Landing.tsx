import { ReactNode } from "react"
import Button from "../components/Button"

type LandingProps = {
    title?: string,
    children?: ReactNode
}




const Landing = ({title = 'Welcome to the Stats App!', children}: LandingProps) => {
  return (
    <section className="bg-blue-200 container flex flex-col justify-center items-center">
    <h1 className="text-3xl font-serif ">{title}</h1>
    <p className="mr-4 font-mono items-center">{children}</p>
    <a href='#'><Button>Start Calculating!</Button></a>
    </section>
    
  )
}

export default Landing