import { Chart } from "react-google-charts";
import './previsioncomponents.scss';

export const data = [
    [
        { type: "date", label: "Ano" },
        "Gasolina",
        "Etanol",
        "Diesel",
        "GNV",
    ],
    [new Date(2004), -0.5, 5.7, 8.1, 9.0],
    [new Date(2005), 0.4, 8.7, -9.3, 10.0],
    [new Date(2006), 0.5, 12, -9.3, 12],
    [new Date(2007), 2.9, 15.3, -9, -1],
    [new Date(2008), 6.3, 18.6, 5.2, 9.1],
    [new Date(2009), 9, 20.9, 1.3, 9],
    [new Date(2010), 10.6, 19.8, -30.9, 21],
    [new Date(2011), 10.3, 16.6, 30, 30],
    [new Date(2012), 7.4, 13.3, -4, 25],
    [new Date(2013), 4.4, 9.9, 10, 10],
    [new Date(2014), 1.1, 6.6, 20, -5],
    [new Date(2015), -0.2, 4.5, 0, 0],
]

export const options = {
    chart: {
        title: "Previsão dos combustíveis no Brasil",
        subtitle: "Em Reais (BRL)",
    },
    backgroundColor: 'transparent',
    series: {
        // Gives each series an axis name that matches the Y-axis below.
        0: { axis: "Preco" },
    },
    axes: {
        // Adds labels to each axis; they don't have to match the axis names.
        y: {
            Preco: { label: "Preço (BRL)" },
        },
    },
};


export default function LinePrevision() {
    return (
        <div className="line-prevision">
            <Chart
                chartType="Line"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    )
}