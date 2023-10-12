import Dropdown from "../components/Dropdown"
import Header from "../components/Header"
import Footer from "../components/Footer"
import DataEntry from "../components/DataEntry"
import React, {ChangeEvent, useState} from 'react'
import { createSearchParams, useNavigate } from "react-router-dom"

const Calculation = () => {
const navigate = useNavigate()
const [calculation, setCalculation] = useState('')
const [data, setData] = useState('')

  const handleCalcultionSelection = (e :React.ChangeEvent<HTMLSelectElement>) : void => {
    setCalculation(e.target.value)
  }


  const handleSubmit = () : void => {
    localStorage.setItem('data', JSON.stringify(data))
    console.log(data)
    setData('')
   
    navigate({
      pathname: '/results',
      search: `?${createSearchParams({
        calType: calculation
      })}`
    })
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
        <DataEntry data={data}
        handleSetData={(e) => setData(e.target.value)} 
        handleSubmit={handleSubmit}/>
      
        </>}
      </div>
      <Footer />
    </section>
  )
}

export default Calculation