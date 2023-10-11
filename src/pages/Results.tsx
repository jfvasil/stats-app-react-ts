import Header from "../components/Header"
import Footer from "../components/Footer"
import SquareButton from "../components/SquareButton"
import LineChart from "../components/LineChart"
import { ChartData, ChartOptions } from 'chart.js'
import {mean} from '../calculations/stats'



const Results = () => {

    const dataString:string | null = localStorage.getItem('data')
    let data:string = dataString ? JSON.parse(dataString) : ''
    let numberData = data.split(' ').map(el => Number(el))

    const chartData: ChartData<'line'> = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'Dataset 1',
            data: numberData,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 1,
            fill: false,
          },
         
        ],
    }



  return (
    <section>
    <Header />
    <section className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl">Your Answer is: </h1>
        <h2 className="underline text-5xl mt-5">{mean(numberData)}</h2>
    </section>
    <LineChart chartData={chartData}/>
    <section>
    <h3>Add to history?</h3>
    <SquareButton />
    </section>
    <Footer />
    </section>
  )
}

export default Results