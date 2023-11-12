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


  return (
    <div className="card py-4 lg:card-side lg:w-full bg-base-100 shadow-xl -z-10">
    <div className="card-body">
      <h2 className="card-title">{calType} Calculation</h2>
      <p>
        inputs: {inputs}
        result: {results}
        Date added: {date.toString()}
      </p>
    </div>
    <figure>
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