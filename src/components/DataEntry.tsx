

type DataEntryProps = {
    data: string 
    handleSetData: React.ChangeEventHandler<HTMLInputElement>
    handleSubmit:React.ReactEventHandler<HTMLButtonElement>,
    disabled?: boolean
}


const DataEntry = ({data, handleSetData, disabled} : DataEntryProps) => {





  return (
   <section className="flex flex-col justify-evenly">
    <div className="flex flex-col items-center">
        <div className="leading-relaxed container flex flex-col items-center pb-5 ">
        <h3 className="text-xl ">Enter your data points below</h3>
        <span>Be sure to remove all commas</span>
        </div>
        <form className="form-control">
            <input type='text' placeholder="Enter data here" 
            onChange = {handleSetData}
            disabled={disabled}
            value={data}
            className="input input-bordered input-secondary w-full max-w-xs" />
        </form>
    
    </div>
       
   </section>
  )
}

export default DataEntry