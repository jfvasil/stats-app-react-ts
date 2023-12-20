

interface DropdownProps  {
  calculation: string
  handleCalculationSelection: (value: React.ChangeEvent<HTMLSelectElement>) => void
  dropDownOptions: string[]
}


const Dropdown = ({calculation, handleCalculationSelection, dropDownOptions}: DropdownProps) => {
  
  



    return (
        <div className="flex flex-col items-center justify-center mb-6 ">
      <h1 className="md:text-2xl text-xl whitespace-nowrap font-bold mb-4 ">Which type of calculation do you need?</h1>
      <select
        className="select select-primary"
        value={calculation}
        onChange={handleCalculationSelection}
      >
        <option value='' disabled>Select your Calculation</option>
        {dropDownOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {calculation && (
        <div className="mt-4">
          You selected: <strong>{calculation}</strong>
        </div>
      )}
    </div>
  )
}

export default Dropdown