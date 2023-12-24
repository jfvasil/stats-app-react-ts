import {  useState } from "react"
import * as XLSX from 'xlsx'
import Button from "./Button"

interface FileUplloadProps {
    processedData: (data:string) => void
}

const FileUplload = ({processedData}: FileUplloadProps) => {

    const [file, setFile] = useState<File | null>(null)
    

    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {

        const selectedFile = e.target.files![0] 
        setFile(selectedFile)
        
    }

    const handleFileUpload = () => {
        if(file) {

        const reader = new FileReader()

            reader.onload = (e) =>  {
                try{
                    const data = new Uint8Array(e.target?.result as ArrayBuffer)
                    const workbook = XLSX.read(data, {type: 'array'})

                    const sheetName = workbook.SheetNames[0]
                    const sheet = workbook.Sheets[sheetName]

                    const jsonData = JSON.stringify(XLSX.utils.sheet_to_json(sheet, {header: 1}))

                    processedData(jsonData)
                } catch (error){
                    console.error(error)
            }
                reader.readAsArrayBuffer(file)

            }

        }
    }


  return (
    <div>
        <div className="container leading-relaxed flex flex-col items-center pb-5">
            <h3 className="text-xl">Add an excel file of you data points</h3>
            <p className="text-center pt-3">Make sure all data points are in the first column of the sheet</p>
        </div>
        <form className="form-control pl-5 flex flex-row space-x-4">
        <input type="file" 
        className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
        onChange={handleFileChange} />
        <div className={`${file ? 'block' : 'hidden'} mb-6`}>
        <Button onclick={handleFileUpload}>Add File</Button>  
        </div>       
        </form>
    </div>
  )
}

export default FileUplload