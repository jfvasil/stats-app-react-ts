import Aside from "../components/Aside"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Card from "../components/Card"
// import MultiCard from "../components/MultiCard"
import Logout from "../components/Logout"
import { useEffect, useState} from "react"
import { axiosInstance } from "../api/axios"


const Profile = () => {

  interface DataProps{
  type: string, 
  inputs: number[],
  results: number[],
  date: Date, 
  
  }

const [data, setData] = useState<DataProps[]>([])


const fetchData = async () => {
  try{
  const res = await axiosInstance.get('./api')

  setData(res.data)
  } catch(error){
    console.error(error)
  }
}


useEffect(() => {
  fetchData()
  console.log('success')
}, [])


  return (
    <>
    <div className="pb-5 z-9">
    <Header />
    </div>
    <div className=" container pt-16">
        <div className="flex">
            <Aside />
            <div className="flex-4">
              <div className="flex flex-col">
                  {data?.map((data, index) => (
                    <Card key={index} 
                    inputs={data.inputs}
                    results={data.results}
                    calType={data.type}
                    date={data.date} />
                  ))}
              </div>
            </div>
        </div>
    </div>
    <Logout />
    <Footer />
    </>
  )
}

export default Profile