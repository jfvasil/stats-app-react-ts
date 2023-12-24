import MobileDrawer from "../components/MobileDrawer"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Card from "../components/Card"
// import MultiCard from "../components/MultiCard"
import Logout from "../components/Logout"
import { useEffect, useState, useCallback} from "react"
import { axiosInstance } from "../api/axios"


const Profile = () => {

  interface DataProps{
  type: string, 
  inputs: number[],
  results: number[],
  date: Date, 
  
  }

const [data, setData] = useState<DataProps[]>([])
const [filteredAndSortedData, setFilteredAndSortedData] = useState<DataProps[]>([])



const fetchData = useCallback (async () => {
  try{
  const res = await axiosInstance.get('./api')
  setData(res.data)
  console.log(data)
  } catch(error){
    console.error(error)
  }
},[data])


useEffect(() => {
  fetchData()
  console.log('success')
}, [])

useEffect(() => {
  sortAndFilterData('most recent', 'all')
},[data])

const sortAndFilterData = (sortyBy: string, filterBy:string) =>{
  let sortedAndFiltered = [...data]

  if(filterBy !== 'all'){
    sortedAndFiltered = sortedAndFiltered.filter(item => item.type === filterBy)
  }

  if(sortyBy === 'most recent'){
    sortedAndFiltered.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }else{
    sortedAndFiltered.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  }

  setFilteredAndSortedData(sortedAndFiltered)
}

const handleSortChange = (newSortBy: string) => {
  sortAndFilterData(newSortBy, 'all');
}

const handleFilterChange = (newFilterBy: string) => {
  sortAndFilterData('most recent', newFilterBy);
}


  return (
    <>
    <div className="pb-5 z-9">
    <Header />
    </div>
    <div className=" container pt-16">
        <div className="flex">
          <MobileDrawer 
          onSortChange={handleSortChange}
          onFilterChange={handleFilterChange} />
            <div className="flex-1">
              <div className="flex flex-col">
                <ul>
                  {filteredAndSortedData?.map((data, index) => (
                   <li key={index}> <Card 
                    inputs={data.inputs}
                    results={data.results}
                    calType={data.type}
                    date={data.date} />
                    </li>
                  ))}
                </ul>
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