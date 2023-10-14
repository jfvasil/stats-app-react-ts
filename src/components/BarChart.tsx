import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js';
import { BarElement,BarController,LinearScale, CategoryScale, Title, Tooltip, Legend} from 'chart.js'
import { ChartData, ChartOptions } from 'chart.js'


ChartJS.register( LinearScale, Title, CategoryScale,BarElement,BarController,Tooltip, Legend)


type BarChartProps = {
    chartData: ChartData<'bar'>,
    options?: ChartOptions<'bar'>
}



const BarChart = ({chartData, options} : BarChartProps) => {


  return (
    <Bar  data={chartData} options={options} />

  )
}

export default BarChart