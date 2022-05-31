import './homecomponents.scss';
import { Chart } from "react-google-charts";

export const data = [
    ["Ano", "Vendas"],
    ["2004", 100000],
    ["2008", 243000],
    ["2012", 320000],
    ["2018", 500000],
    ["2021", 609000],
];

export const options = {
    title: "Vendas",
    subtitle: "Vendas entre: 2004-2021",
    backgroundColor: 'transparent',
};

export default function SalesChart() {
    return (
        <div className="states-chart">
            <Chart
                chartType="Bar"
                data={data}
                options={options}
                width={"100%"}
                height={"500px"}
            />
        </div>
    )
}