import lake from '../assets/images/lakewickaboag2.0.jpg'

type CardProps = {
    number: number
}

const Card = ({number}: CardProps) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>I am card #{number}</p>
    </div>
    <figure><img src={lake} alt="Shoes" /></figure>
  </div>
  )
}

export default Card