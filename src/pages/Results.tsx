import Header from "../components/Header"
import Footer from "../components/Footer"
import SquareButton from "../components/SquareButton"
import LineChart from "../components/LineChart"

const Results = () => {
  return (
    <section>
    <Header />
    <section className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl">Your Answer is: </h1>
        <h2 className="underline text-5xl mt-5">25!</h2>
    </section>
    <LineChart />
    <section>
    <h3>Add to history?</h3>
    <SquareButton />
    </section>
    <Footer />
    </section>
  )
}

export default Results