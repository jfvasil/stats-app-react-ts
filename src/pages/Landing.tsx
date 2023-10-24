import Title from "../components/Title"
import MidPage from "../components/MidPage"
import SignUpLink from "../components/SignUpLink"

import blackBoard from '../assets/blackboard.mp4'



const Landing = () => {
  return (
<section>
  <div className="hero min-h-screen">
    <video className="bg-fixed w-full h-full" autoPlay loop controls>
      <source src={blackBoard} />
      </video>
    <div className="hero-content text-center text-neutral-content">
      <div className="max-w-md">
        <Title title="Welcome to the Stats App">We are determined to get you the right answer!</Title>
        <MidPage />
        <SignUpLink />
      </div>
    </div>
  </div>
  
</section>
  )
}

export default Landing