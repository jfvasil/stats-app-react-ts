import Header from "../components/Header"
import Footer from "../components/Footer"
import SquareButton from "../components/SquareButton"
import LineChart from "../components/LineChart"
import BarChart from "../components/BarChart"
import { ChartData } from 'chart.js'
import {mean, median, mode, deviation, range} from '../calculations/stats'
import { useLocation } from "react-router-dom"
import { useRef, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import {axiosInstance} from "../api/axios"


const Results = () => {

    const {user, isAuthenticated} = useAuth0()
    const dataString:string | null = localStorage.getItem('data')
    const data:string = dataString ? JSON.parse(dataString) : ''
    const numberData = data.split(' ').map(el => Number(el))
    const labels:string[] = numberData.map((num) => num.toString())

    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const calType = queryParams.get('calType')
    const cal = calType?.toLocaleLowerCase()

    const chartRef = useRef(null)

    useEffect(() => {
      const chart = chartRef.current

      chart && console.log('ChartJS', chart)
    }, [])
    
    const lineChartData: ChartData<'line'> = {
        labels: labels,
        datasets: [
          {
            label: 'Dataset',
            data: numberData,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 4,
            fill: false,
          },
         
        ],
    }

    const lineChartOptions = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: true,
          text: 'Your data',
          color: 'rgb(75, 192,192)'
        },
      },
    };

    const barChartData: ChartData<'bar'> = {
      labels: labels,
      datasets: [
        {
          label: 'Dataset 1',
          data: numberData,
          borderColor: 'rgb(214, 60, 191)',
          borderWidth: 3,
          
        },
       
      ],
  }

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Your data',
      },
    },
  };

    const calculateData = (data:number[] ) => {
      
      if(cal === 'mean'){
        return mean(data)
      } else if(cal === 'median'){
        return median(data)
      } else if(cal === 'mode'){
        return mode(data)
      } else if(cal === 'range'){
        return range(data)
      } else if(cal === 'deviation'){
        return deviation(data)
      } else{
        return 'no calculation type found'
      }
    }
    
    interface DataPostProps{
      userID: string | undefined,
      type: string | undefined, 
      inputs: number[],
      results: number | number[] | string,
      date: Date
    }
    
 
    const handleDataPost = async () => {
        const postData: DataPostProps = {
          userID: user?.email,
          type: cal,
          inputs: numberData,
          results: calculateData(numberData),
          date: new Date
        }
        try{
          const res = await axiosInstance.post('/api', postData)
          
          console.log(res)
        } catch(error){
            console.log(error)
        }

    } 


  return (
    <section>
    <Header />
    <section className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl">Your Answer is: </h1>
        <h2 className="underline text-5xl mt-5">{calculateData(numberData)}</h2>
    </section>
    <div className="flex min-h-screen w-full">
    { cal === 'mode' ? (
   <BarChart ref={chartRef} options={barChartOptions} chartData={barChartData}/>) 
   : (
   <LineChart options={lineChartOptions} chartData={lineChartData}/>)
    
}
    </div>
    {isAuthenticated && (
    <section> 
    <h3>Add to history?</h3>
    <SquareButton onClick={handleDataPost} />
    </section>
    )}
    <Footer />
    </section>
  )
}

export default Results