import {ReactNode} from 'react'

type Title = {
    title: string,
    children: ReactNode,
    className?: string
}

const Title = ({title, children, className} : Title) => {
  return (
    <div className={className}>
        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
        <p className='mb-5 text-2xl mt-4'>{children}</p>
    </div>
  )
}

export default Title