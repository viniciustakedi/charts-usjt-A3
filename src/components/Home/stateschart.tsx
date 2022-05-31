import './homecomponents.scss';
import { Chart } from "react-google-charts";

export const data = [
    ["Estados", "Vezes que foram analisados"],
    ["São Paulo", 20],
    ["Rio de Janeiro", 19],
    ["Minas Gerais", 20],
    ["Salvador", 16],
    ["Rio Grande do Sul", 17],
];

export const options = {
    title: "Estados Analisados",
    backgroundColor: 'transparent',
};

export default function StatesChart() {
    return (
        <div className="states-chart">
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"500px"}
            />
        </div>
    )
}