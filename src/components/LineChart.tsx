import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);


const LineChart = () => {

  const lables = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
   const chartData ={
        labels: lables, 
        datasets: [{
            id: 1,
            label: 'test',
            data: [77, 77, 89, 9, 43, 21, 55], 
            fill: false, 
            borderColor: 'rgb(75, 192, 192)', 
            tension: .01
        }]
    }


  return (
    <Line  datasetIdKey='id' data={chartData} />

  )
}

export default LineChart