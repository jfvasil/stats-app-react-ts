

const DataEntry = () => {
  return (
   <section className=" container h-full flex flex-col justify-evenly">
    <div className="flex flex-col items-center">
        <h3>Enter your data points below</h3>
        <span>Be sure to keep them in this format "........."</span>
        <form className="form-control">
            <input type='text' placeholder="Enter data here" 
            className="input input-bordered input-secondary w-full max-w-xs" />
        </form>
    </div>
        <div className="divider">OR</div>
    <div className="flex flex-col items-center ">
        <h3>Add an excel file of you data points</h3>
        <p>Make sure all data points are in the first column of the sheet</p>
        <form className="form-contronl">
        <input type="file" 
        className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
        </form>
    </div>
   </section>
  )
}

export default DataEntry