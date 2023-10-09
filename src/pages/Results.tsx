import Header from "../components/Header"
import Footer from "../components/Footer"
import SquareButton from "../components/SquareButton"
import LineChart from "../components/LineChart"
import { ChartData, ChartOptions } from 'chart.js'


const Results = () => {

    const chartData: ChartData<'line', Chart.ChartDataSets[], unknown> = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [1, 2, 3],
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
        <h2 className="underline text-5xl mt-5">25!</h2>
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