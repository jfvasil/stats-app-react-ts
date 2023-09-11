import {ReactNode} from 'react'

type Title = {
    title: string,
    children: ReactNode
}

const Title = ({title, children} : Title) => {
  return (
    <>
        <h1 className='"mb-5 text-5xl font-bold"'>{title}</h1>
        <p className='mb-5 text-2xl mt-4'>{children}</p>
    </>
  )
}

export default Title