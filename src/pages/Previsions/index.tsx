
import LinePrevision from '../../components/Previsions/lineprevision';
import { TitleContext } from '../../contexts/context';
import Header from '../../components/Header/header';
import { useState } from 'react';
import './previsions.scss';

export default function Previsions() {

    const [title, setTitle] = useState("Previsões da Gasolina no Brasil")

    return (
        <TitleContext.Provider value={{title, setTitle}}>
            <div className="previsions">
                <div className="content-previsions">
                    <header>
                        <Header />
                    </header>
                    <main>
                        <section className="chartsPrevision">
                            <LinePrevision/>
                        </section>
                    </main>
                </div>
            </div>
        </TitleContext.Provider>
    )
}