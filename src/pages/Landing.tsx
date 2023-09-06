import Title from "../components/Title"
import MidPage from "../components/MidPage"
import SignUpLink from "../components/SignUpLink"




const Landing = () => {
  return (
   <section className="flex flex-col justify-center items-center min-h-screen ">
    <div className="container">
    <Title title="Welcome to Stats App!">We pride ourselves on getting you to ace that test</Title>
    </div>
    <div className="container flex flex-col items-center justify-center">
    <MidPage />
    <SignUpLink />
    </div>
   </section>
  )
}

export default Landing