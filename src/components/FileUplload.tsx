import { useState } from "react"
import * as XLSX from 'xlsx'

const FileUplload = ({processedData}) => {

    const [file, setFile] = useState(null)


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0]
        setFile(selectedFile)
    }

    const handleFileUpload = () => {
        if(file) {

        const reader = new FileReader()

            reader.onload = (e) =>  {
                try{
                    const data = new Uint8Array(e.target.result)
                    const workbook = XLSX.read(data, {type: 'array'})

                    const sheetName = workbook.SheetNames[0]
                    const sheet = workbook.Sheets[sheetName]

                    const jsonData = XLSX.utils.sheet_to_json(sheet, {header: 1})

                    processedData(jsonData)
                } catch (error){
                    console.error(error)
            }
                reader.readAsArrayBuffer(file)

            }

        }
    }


  return (
    <div>FileUplload</div>
  )
}

export default FileUplload