import Dropdown from "../components/Dropdown"
import Header from "../components/Header"
import Footer from "../components/Footer"
import DataEntry from "../components/DataEntry"

const Calculation = () => {
  return (
    <section>
      <Header />
      <div className="container flex flex-col justify-evenly items-center min-h-screen ">
        <Dropdown />
        <DataEntry />
      </div>
      <Footer />
    </section>
  )
}

export default Calculation