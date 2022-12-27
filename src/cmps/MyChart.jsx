// import { Sparklines } from 'react-sparklines';
import { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
// import React from 'react';


export class MyChart extends Component() {
    state = {
        data: {
            labels:['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              
            ],
        },
        options : {
            responsive: true,
            plugins: {
              legend: {
                position: 'top' ,
              },
              title: {
                display: true,
                text: 'Chart.js Line Chart',
              },
            },
          }
    }
    
    componentDidMount(){
        this.setState(prevState=>({
            ...prevState,
data:{
    ...prevState.data,
    datasets:[...prevState.data.datasets,{
        fill: true,
        label: 'Dataset 2',
        data: ['January', 'February', 'March', 'April', 'May', 'June', 'July'].map((x,idx) => idx),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },]
}
        }))
}

    render() {
const {data,options}=this.state
console.log(`data = `, data)
console.log(`options = `, options)
        return (
            <section className="chart">
                {/* <Doughnut data={this.state.data} options={this.state.options} /> */}
            </section>
        )
    }
}