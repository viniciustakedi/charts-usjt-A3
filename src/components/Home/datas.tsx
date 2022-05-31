import { FaRegBuilding, FaChartLine, FaClock, FaShoppingCart } from "react-icons/fa";
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
                        <FaRegBuilding color="#f4385e" size="30px" id="circle-shadow"/>
                    </div>
                    <div className="info">
                        <span>Todos os estados analisados</span>
                    </div>
                </div>

                <div className="grid-data">
                    <div className="content">
                        <div className="texts">
                            <span>Vendas</span>
                            <p>123.989.098</p>
                        </div>
                        <FaChartLine color="#fb6340" size="30px" id="circle-shadow"/>
                    </div>
                    <div className="info">
                        <span>Vendas de gasolina</span>
                    </div>
                </div>

                <div className="grid-data">
                    <div className="content">
                        <div className="texts">
                            <span>Produtos</span>
                            <p>5</p>
                        </div>
                        <FaShoppingCart color="#ffc222" size="30px" />
                    </div>
                    <div className="info">
                        <span>Quantidade de produtos analisados</span>
                    </div>
                </div>

                <div className="grid-data">
                    <div className="content">
                        <div className="texts">
                            <span>Tempo</span>
                            <p>17</p>
                        </div>
                        <FaClock color="#323232" size="30px" />
                    </div>
                    <div className="info">
                        <span>Tempo em anos em que os dados foram coletados</span>
                    </div>
                </div>
            </div>
        </div>
    )
}