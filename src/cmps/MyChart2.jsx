

import { Component } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend,Filler)
    ;

export class MyChart2 extends Component {
    state = {
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: false,
                    text: '',
                },
            },
        },
        data: {
            labels: null,
            datasets: [ {
                fill: true,
                label: 'Dataset 2',
                data:  null,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }]
        },
    }
    componentDidMount() {
        this.setState(prevState => ({
            ...prevState,
            data: {
                ...prevState.data,
                labels:this.props.data.map((currDay) => new Date((currDay.x)*1000).toLocaleDateString()),
                datasets: [...prevState.data.datasets, {
                    fill: true,
                    label: 'Dataset 2',
                    data: this.props.data.map((currDay) => currDay.y),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                },]
            },
        }))
    }

    render() {
        const { data, options } = this.state
        if (!data || !options) return <div>Loading...</div>
        return (
            <section className='chart'>
            <Line data={data} options={options} />
            </section>
        )
    }
}




















