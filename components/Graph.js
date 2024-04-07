'use client'

import { fetchGraphData } from '@/utils';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Loader from './Loader';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
    },
    scales: {
        y: {
            title: {
                display: true,
                text: 'Population',
                color: '#a1a1aa',
                font: {
                    size: 16
                },
                padding: 12
            },
            ticks: {
                font: {
                    size: 14,
                }
            }
        },
        x: {
            title: {
                display: true,
                text: 'Year',
                color: '#a1a1aa',
                font: {
                    size: 16
                },
                padding: 12
            },
            ticks: {
                font: {
                    size: 14,
                }
            }
        }
    },
};


const Graph = () => {
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetchGraphData();
                setGraphData(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const data = {
        labels: graphData.map(entry => entry.Year),
        datasets: [
            {
                label: 'United States',
                backgroundColor: '#22c55e',
                borderColor: '#22c55e',
                data: graphData.map(entry => entry.Population),
            },
        ],
    };

    return (
        <div className='w-[50rem] rounded-xl bg-zinc-900 p-4'>
            <h1 className='border-b border-zinc-600 pb-3 text-lg mb-4'>Population</h1>
            {graphData ?
                <Line options={options} data={data} />
                :
                <Loader />
            }
        </div>
    )
}

export default Graph;
