import Dropdown from "../components/Dropdown"
import Header from "../components/Header"
import Footer from "../components/Footer"
import DataEntry from "../components/DataEntry"
import FileUplload from "../components/FileUplload"
import Button from "../components/Button"
import React, {useState} from 'react'
import { createSearchParams, useNavigate } from "react-router-dom"

const Calculation = () => {
const navigate = useNavigate()
const [calculation, setCalculation] = useState('')
const [data, setData] = useState('')


  const handleCalcultionSelection = (e :React.ChangeEvent<HTMLSelectElement>) : void => {
    setCalculation(e.target.value)
  }

  const processedData = (data:string) => {
    setData(data)
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
  ]


  return (
    <section>
      <Header />
      <div className="flex flex-col justify-evenly items-center min-h-screen mb-12 px-10 relative top-16">
        <Dropdown
         calculation={calculation} 
         handleCalculationSelection={handleCalcultionSelection}
         dropDownOptions={dropDownOptions} />
         {calculation &&
         <>
         
        <DataEntry data={data}
        handleSetData={(e) => setData(e.target.value)} 
        handleSubmit={handleSubmit}/>
      
      <div className="divider -my-8">OR</div>

      <FileUplload processedData={processedData}/>

      <div className=" w-full flex justify-center">
        <Button onclick={handleSubmit} disable={data ? false: true}>Calculate</Button>
        </div>
      
        </>
        }    
      </div>
      <Footer />
    </section>
  )
}

export default Calculation