import { BackPathnameContext, ButtonValueContext, LinkContext, TitleContext, ValueButton, ValueLink, valuePath } from '../../contexts/context';
import StatesChart from '../../components/Home/stateschart';
import SalesChart from '../../components/Home/saleschart';
import Header from '../../components/Header/header';
import Datas from '../../components/Home/datas';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './home.scss';
import ButtonIcons from '../../components/ButtonIcons/buttonicons';

export default function Home() {

    const [title, setTitle] = useState("Inflação da Gasolina no Brasil")
    const [value, setValue] = useState(ValueButton.Home)
    const [link, setLink] = useState(ValueLink.Previsions)
    const [path, setPath] = useState(valuePath.Home)

    useEffect(() => {
        document.title = "A3 | Previsão do Combustível no Brasil"
    }, [])

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
                        <section className="button-previsions">
                            <ButtonValueContext.Provider value={{ value, setValue }}>
                                <LinkContext.Provider value={{ link, setLink }}>
                                    <BackPathnameContext.Provider value={{ path, setPath }}>
                                        <ButtonIcons />
                                    </BackPathnameContext.Provider>
                                </LinkContext.Provider>
                            </ButtonValueContext.Provider>
                        </section>
                    </main>
                </div>
            </div>
        </TitleContext.Provider>
    )
}