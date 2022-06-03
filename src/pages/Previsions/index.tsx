
import SalesPrevision from '../../components/Previsions/salesprevision';
import LinePrevision from '../../components/Previsions/lineprevision';
import { TitleContext } from '../../contexts/context';
import Header from '../../components/Header/header';
import { useEffect, useState } from 'react';
import './previsions.scss';
import { Link } from 'react-router-dom';

import { IoQrCodeOutline } from "react-icons/io5";

export default function Previsions() {

    const [title, setTitle] = useState("Previsões da Gasolina no Brasil")

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
                        <section className="buttonPrevisions">
                            {/* Transformar essa section em um componente, com botões de voltar e icones para apresentação e 
                            paginação para a página do qrcode. Fazer um contextAPI para armazenar a variavel da url que chamou
                            a página qrcode. */}
                            <div className="icons">
                                <IoQrCodeOutline color="#00000022" size="24px" />
                            </div>
                            <Link to="/"><button>Voltar para a home</button></Link>
                        </section>
                    </main>
                </div>
            </div>
        </TitleContext.Provider>
    )
}