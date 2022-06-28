import { useEffect, useState } from 'react';
import Header from '../../components/Header/header';
import { TitleContext, usePath } from '../../contexts/context';

import QrCode from '../../assets/images/qrcode.png'; // Importa o QR Code
import './qrcode.scss';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';


export default function Qrcode() {
    const navigate = useNavigate()

    const [title, setTitle] = useState("QrCode da Dashboard")
    const { path, setPath } = usePath()

    useEffect(() => {
        document.title = "A3 | QRCode"
    }, [])

    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            <div className="qrcode">
                <header>
                    <Header />
                </header>
                <main>
                    <h1>Compartilhe o nosso projeto!</h1>
                    <img src={QrCode} alt="qr_code" />
                    <RiArrowGoBackLine
                        size="24px"
                        color="#00000066"
                        id='icon-back'
                        onClick={() => navigate(path)}
                    />
                </main>
            </div>
        </TitleContext.Provider>
    )
}