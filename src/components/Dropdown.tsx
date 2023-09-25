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
        <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Prepare to Be Amazed</h1>
      <select
        className="px-4 py-2 border rounded-lg"
        value={calculaton}
        onChange={handleCalcultionSelection}
      >
        <option value="">Select your Calculation</option>
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