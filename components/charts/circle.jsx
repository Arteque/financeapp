'use client'
import { Doughnut } from "react-chartjs-2";
import { 
    Chart as ChartJS, 
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)

const Circle = ({options, data}) => {

    return (
        <Doughnut options={options} data={data} />
    );
};

export default Circle;