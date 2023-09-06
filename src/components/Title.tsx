import {ReactNode} from 'react'

type Title = {
    title: string,
    children: ReactNode
}

const Title = ({title, children} : Title) => {
  return (
    <section className='container flex flex-col justify-between items-center'>
        <h1>{title}</h1>
        <h3>{children}</h3>
    </section>
  )
}

export default Title