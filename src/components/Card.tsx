import BarChart from "./BarChart"
import LineChart from "./LineChart"
import { ChartData } from 'chart.js'

type CardProps = {
  calType: string, 
  inputs: number[],
  results: number | number[],
  date: Date, 
  
}

const Card = ({calType, inputs, results, date }:CardProps) => {


  let labels = inputs.map(num => num.toString())


  const lineChartData: ChartData<'line'> = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset',
        data: inputs,
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
      data: inputs,
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
    let upperCalType = calType.charAt(0).toUpperCase() + calType.slice(1)


  return (
    <div className="card py-4 lg:card-side lg:w-full bg-base-100 shadow-xl -z-10">
    <div className="card-body">
      <h2 className="card-title underline">{upperCalType} Calculation</h2>
      <p className="flex flex-col leading-8">
       <span>inputs: {inputs}</span>
        <span>result: {results}</span>
        <span>Date added: {date.toString()}</span>
      </p>
    </div>
    <figure className="w-full">
      {calType === 'mode' ? (
        <BarChart chartData={barChartData} options={barChartOptions} />
      ) : (
        <LineChart chartData={lineChartData} options={lineChartOptions} />
      )}
    </figure>
  </div>
  )
}

export default Card