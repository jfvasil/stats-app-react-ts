import Dropdown from "../components/Dropdown"
import Header from "../components/Header"
import Footer from "../components/Footer"
import DataEntry from "../components/DataEntry"
import Button from "../components/Button"
import React, {ChangeEvent, useState} from 'react'



const Calculation = () => {

const [calculation, setCalculation] = useState('')


  const handleCalcultionSelection = (e :React.ChangeEvent<HTMLSelectElement>) => {
    setCalculation(e.target.value)
  }

  const dropDownOptions = [
    'Mean',
    'Median',
    'Mode', 
    'Range',
    'Other?'
  ]


  return (
    <section>
      <Header />
      <div className="container flex flex-col justify-evenly items-center min-h-screen ">
        <Dropdown
         calculation={calculation} 
         handleCalculationSelection={handleCalcultionSelection}
         dropDownOptions={dropDownOptions} />
         {calculation &&
         <>
        <DataEntry />
        <Button>Calculate!</Button>
        </>}
      </div>
      <Footer />
    </section>
  )
}

export default Calculation