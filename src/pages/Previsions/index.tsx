
import { BackPathnameContext, ButtonValueContext, LinkContext, TitleContext, ValueButton, ValueLink, valuePath } from '../../contexts/context';
import SalesPrevision from '../../components/Previsions/salesprevision';
import LinePrevision from '../../components/Previsions/lineprevision';
import ButtonIcons from '../../components/ButtonIcons/buttonicons';
import Header from '../../components/Header/header';
import { useEffect, useState } from 'react';
import './previsions.scss';


export default function Previsions() {

    const [title, setTitle] = useState("Previsões da Gasolina no Brasil")
    const [value, setValue] = useState(ValueButton.Previsions)
    const [link, setLink] = useState(ValueLink.Home)
    const [path, setPath] = useState(valuePath.Previsions)

    useEffect(() => {
        document.title = "A3 | Previsão"
    }, [])

    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            <div className="previsions">
                <div className="content-previsions">
                    <header>
                        <Header />
                    </header>
                    <main>
                        <section className="chartsPrevision">
                            <div className="chartPrevision">
                                <LinePrevision />
                            </div>
                            <div className="salesPrevision">
                                <SalesPrevision />
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