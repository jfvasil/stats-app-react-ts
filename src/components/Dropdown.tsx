import { useState } from "react"

const Dropdown = () => {
  
  const [calculaton, setCalculation] = useState('')
  
  const dropDownOptions = [
    'Mean',
    'Median',
    'Mode', 
    'Range',
    'Other?'
  ]
  
  const handleCalcultionSelection = (e :React.ChangeEvent<HTMLSelectElement>) => {
    setCalculation(e.target.value)
  }



    return (
        <div className="flex flex-col items-center justify-center ">
      <h1 className="text-2xl font-bold mb-4">Prepare to Be Amazed</h1>
      <select
        className="select select-primary"
        value={calculaton}
        onChange={handleCalcultionSelection}
      >
        <option disabled selected>Select your Calculation</option>
        {dropDownOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {calculaton && (
        <div className="mt-4">
          You selected: <strong>{calculaton}</strong>
        </div>
      )}
    </div>
  )
}

export default Dropdown