import { FaRegBuilding, FaChartLine } from "react-icons/fa";
import './homecomponents.scss'

export default function Datas() {
    return (
        <div className="datas">
            <div className="grid-datas">

                <div className="grid-data">
                    <div className="content">
                        <div className="texts">
                            <span>Estados</span>
                            <p>27</p>
                        </div>
                        <FaRegBuilding color="#f4385e" size="2rem" id="circle-shadow"/>
                    </div>
                    <div className="info">
                        <span>Todos os estados foram analisados</span>
                    </div>
                </div>

                <div className="grid-data">
                    <div className="content">
                        <div className="texts">
                            <span>Vendas</span>
                            <p>123.989.098</p>
                        </div>
                        <FaChartLine color="#fb6340" size="2rem" id="circle-shadow"/>
                    </div>
                    <div className="info">
                        <span>Vendas de gasolina</span>
                    </div>
                </div>

                <div className="grid-data">
                    <div className="content">
                        <div className="texts">
                            <span>Estados</span>
                            <p></p>
                        </div>
                        <FaRegBuilding color="#f4385e" size="1.5rem" />
                    </div>
                    <div className="info">
                        <span></span>
                    </div>
                </div>

                <div className="grid-data">
                    <div className="content">
                        <div className="texts">
                            <span>Estados</span>
                            <p></p>
                        </div>
                        <FaRegBuilding color="#f4385e" size="1.5rem" />
                    </div>
                    <div className="info">
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}