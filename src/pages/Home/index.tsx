import StatesChart from '../../components/Home/stateschart';
import SalesChart from '../../components/Home/saleschart';
import { TitleContext } from '../../contexts/context';
import Header from '../../components/Header/header';
import Datas from '../../components/Home/datas';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './home.scss';

export default function Home() {

    const [title, setTitle] = useState("Inflação da Gasolina no Brasil")

    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            <div className="home">
                <div className="content-home">
                    <header>
                        <Header />
                    </header>
                    <main>
                        <section className='datas'>
                            <Datas />
                        </section>
                        <section className="charts">
                            <div className="statesChart">
                                <StatesChart />
                            </div>
                            <div className="salesChart">
                                <SalesChart />
                            </div>
                        </section>
                        <section className="buttonPrevisions">
                            <Link to="/previsoes"><button>Ir para as previsões</button></Link>
                        </section>
                    </main>
                </div>
            </div>
        </TitleContext.Provider>
    )
}