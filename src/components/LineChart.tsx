import { Line } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js';
import { LineController,LineElement ,LinearScale, CategoryScale, Title, PointElement} from 'chart.js'
import { ChartData, ChartOptions } from 'chart.js'


ChartJS.register( LinearScale, Title, CategoryScale, LineController, PointElement, LineElement)


type LineChartProps = {
    chartData: ChartData<'line'>,
    options?: ChartOptions<'line'>
}



const LineChart = ({chartData, options} : LineChartProps) => {


  return (
    <Line  data={chartData} options={options} />

  )
}

export default LineChart