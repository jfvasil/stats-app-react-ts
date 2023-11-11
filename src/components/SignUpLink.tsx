import Login from "./Login"

const SignUpLink = () => {
  return (
   <section className="mt-10">
    <h3 className="text-3xl"><a className="hover:underline text-blue-500" href="">Sign up </a>for more <a href="">features</a>!</h3>
    <Login />
    <span className="text-lg">Alredy Signed up? <a className="hover:underline text-blue-500" href="">Log In</a></span>
   </section>
  )
}

export default SignUpLink