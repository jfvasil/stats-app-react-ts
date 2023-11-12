import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js';
import { BarElement,BarController,LinearScale, CategoryScale, Title, Tooltip, Legend} from 'chart.js'
import { ChartData, ChartOptions } from 'chart.js'


ChartJS.register( LinearScale, Title, CategoryScale,BarElement,BarController,Tooltip, Legend)


type BarChartProps = {
    chartData: ChartData<'bar'>,
    options?: ChartOptions<'bar'>,
    ref?: React.MutableRefObject<null>
}



const BarChart = ({chartData, options,ref} : BarChartProps) => {


  return (
    <Bar  data={chartData} options={options} ref={ref} />

  )
}

export default BarChart